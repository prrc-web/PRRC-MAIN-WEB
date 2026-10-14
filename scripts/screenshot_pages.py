#!/usr/bin/env python3
"""Screenshot every PRRC page for visual QA and regression checking.

Captures full-page PNGs of each route and, optionally, compares them against a
previously captured baseline and fails if too many pixels changed.

Examples
--------
    # capture the default route set into ./screens
    python3 scripts/screenshot_pages.py

    # capture into a named baseline directory
    python3 scripts/screenshot_pages.py --out screens/before

    # capture, then compare against that baseline (exit 1 on regression)
    python3 scripts/screenshot_pages.py --diff screens/before

    # only the pages you are touching
    python3 scripts/screenshot_pages.py --routes /,/ResearchPage

Requires: playwright (with chromium installed) and Pillow for --diff.
Setup:    python3 -m pip install playwright pillow && python3 -m playwright install chromium
"""

from __future__ import annotations

import argparse
import asyncio
import json
import os
import sys
from dataclasses import dataclass, field
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent

# Routes are overridable with --routes. These defaults reflect the pages that
# existed when the script was written; prune or extend as the app changes.
DEFAULT_ROUTES = [
    "/",
    "/SafetyPage",
    "/PublicationsPage",
    "/Balch",
    "/StaffPage",
    "/EducationPage",
    "/ResearchPage",
    "/AdministrationPage",
]

DEFAULT_VIEWPORT = "1440x900"
# Per-channel delta (0-255) below which a pixel is treated as unchanged. Guards
# against sub-pixel antialiasing noise producing false regressions.
PIXEL_TOLERANCE = 16


@dataclass
class RouteResult:
    route: str
    ok: bool = False
    title: str = ""
    path: str = ""
    bytes_: int = 0
    error: str = ""
    changed_pct: float | None = None
    diff_path: str | None = None
    note: str = ""


def slug(route: str) -> str:
    """Map a route to a stable output filename (``/`` -> ``index``)."""
    cleaned = route.strip("/") or "index"
    return cleaned.replace("/", "_") or "index"


def parse_args(argv: list[str] | None = None) -> argparse.Namespace:
    p = argparse.ArgumentParser(
        description="Screenshot PRRC pages for visual QA.",
        formatter_class=argparse.ArgumentDefaultsHelpFormatter,
    )
    p.add_argument("--base-url", default=os.environ.get("PRRC_BASE_URL", "http://localhost:3000"),
                   help="Base URL of a running dev or preview server.")
    p.add_argument("--out", default=None,
                   help="Directory for captured PNGs (default: <repo>/screens).")
    p.add_argument("--routes", default=None,
                   help="Comma-separated routes, overriding the built-in list.")
    p.add_argument("--viewport", default=DEFAULT_VIEWPORT, help="Viewport as WxH.")
    p.add_argument("--scale", type=float, default=1.0, help="Device scale factor.")
    p.add_argument("--settle-ms", type=int, default=3000,
                   help="Extra wait after load, to let hydration settle.")
    p.add_argument("--timeout-ms", type=int, default=90000, help="Per-navigation timeout.")
    p.add_argument("--viewport-only", action="store_true",
                   help="Capture the viewport instead of the full page.")
    p.add_argument("--channel", default="auto",
                   help="Browser channel: 'auto' uses bundled chromium, falling back to the "
                        "system Chrome; or force 'chrome', 'msedge', 'chromium', etc. "
                        "The fallback avoids a ~150MB `playwright install chromium`.")
    p.add_argument("--diff", default=None,
                   help="Baseline directory to compare against.")
    p.add_argument("--threshold", type=float, default=0.1,
                   help="Max %% of changed pixels tolerated before failing.")
    p.add_argument("--json", action="store_true", help="Emit a JSON summary on stdout.")
    return p.parse_args(argv)


def load_pillow():
    try:
        from PIL import Image, ImageChops  # noqa: F401
        return Image, ImageChops
    except ImportError:
        print("error: --diff needs Pillow (python3 -m pip install pillow)", file=sys.stderr)
        return None, None


def compare(baseline_path: Path, current_path: Path, diff_path: Path) -> tuple[float | None, str]:
    """Return (changed_percent, note) comparing two PNGs."""
    Image, ImageChops = load_pillow()
    if Image is None:
        return None, "Pillow missing"

    with Image.open(baseline_path) as b_img, Image.open(current_path) as c_img:
        baseline = b_img.convert("RGB")
        current = c_img.convert("RGB")

        note = ""
        if baseline.size != current.size:
            note = f"size {baseline.size} -> {current.size}"
            width = min(baseline.width, current.width)
            height = min(baseline.height, current.height)
            baseline = baseline.crop((0, 0, width, height))
            current = current.crop((0, 0, width, height))

        if baseline.width == 0 or baseline.height == 0:
            return 100.0, note or "empty image"

        diff = ImageChops.difference(baseline, current).convert("L")
        mask = diff.point(lambda v: 255 if v > PIXEL_TOLERANCE else 0)
        changed = mask.histogram()[255]
        total = baseline.width * baseline.height
        pct = 100.0 * changed / total

        if changed:
            diff_path.parent.mkdir(parents=True, exist_ok=True)
            overlay = baseline.copy()
            overlay.paste(Image.new("RGB", overlay.size, (255, 0, 0)), mask=mask)
            overlay.save(diff_path)
        else:
            note = note or "identical"

    return pct, note


async def launch_browser(pw, channel: str):
    """Launch a browser, falling back to the system Chrome when playwright's
    bundled chromium has not been downloaded (saves a ~150MB install)."""
    candidates: list[str | None]
    if channel == "auto":
        candidates = [None, "chrome", "msedge"]  # bundled, then system browsers
    else:
        candidates = [channel]

    last_error: Exception | None = None
    for candidate in candidates:
        try:
            browser = await pw.chromium.launch(
                headless=True, **({"channel": candidate} if candidate else {})
            )
            used = candidate or "bundled chromium"
            print(f"browser: {used}")
            return browser
        except Exception as exc:  # noqa: BLE001 - try the next candidate
            last_error = exc
    raise last_error  # type: ignore[misc]


async def capture(args: argparse.Namespace, routes: list[str], out_dir: Path) -> list[RouteResult]:
    from playwright.async_api import async_playwright

    try:
        width, height = (int(v) for v in args.viewport.lower().split("x"))
    except ValueError:
        print(f"error: --viewport must look like 1440x900 (got {args.viewport!r})", file=sys.stderr)
        sys.exit(2)

    out_dir.mkdir(parents=True, exist_ok=True)
    results: list[RouteResult] = []

    async with async_playwright() as pw:
        browser = await launch_browser(pw, args.channel)
        context = await browser.new_context(
            viewport={"width": width, "height": height},
            device_scale_factor=args.scale,
        )
        page = await context.new_page()

        for route in routes:
            result = RouteResult(route=route)
            target = args.base_url.rstrip("/") + route
            out_path = out_dir / f"{slug(route)}.png"
            try:
                await page.goto(target, wait_until="domcontentloaded", timeout=args.timeout_ms)
                await page.wait_for_timeout(args.settle_ms)
                result.title = (await page.title()) or ""
                await page.screenshot(path=str(out_path), full_page=not args.viewport_only)
                result.ok = True
                result.path = str(out_path)
                result.bytes_ = out_path.stat().st_size
            except Exception as exc:  # noqa: BLE001 - report and keep going
                result.error = f"{type(exc).__name__}: {exc}".split("\n")[0][:120]
            results.append(result)

        await browser.close()

    return results


def report(results: list[RouteResult], args: argparse.Namespace, out_dir: Path) -> int:
    failures = 0
    width = max((len(r.route) for r in results), default=5)

    for r in results:
        if not r.ok:
            print(f"ERR  {r.route:<{width}}  {r.error}")
            failures += 1
            continue

        line = f"OK   {r.route:<{width}}  title={r.title!r:<40} {r.bytes_} bytes"
        if r.changed_pct is not None:
            flag = "CHANGED" if r.changed_pct > args.threshold else "same"
            line += f"  diff={r.changed_pct:.3f}% [{flag}]"
            if r.changed_pct > args.threshold:
                failures += 1
        if r.note:
            line += f"  ({r.note})"
        print(line)

    if args.json:
        print(json.dumps({
            "base_url": args.base_url,
            "out": str(out_dir),
            "threshold": args.threshold,
            "failures": failures,
            "results": [r.__dict__ for r in results],
        }, indent=2))

    ok = sum(1 for r in results if r.ok)
    print(f"\n{ok}/{len(results)} captured into {out_dir}"
          + (f"; {failures} failure(s)" if failures else ""))
    return 1 if failures else 0


def main(argv: list[str] | None = None) -> int:
    args = parse_args(argv)
    out_dir = Path(args.out).expanduser() if args.out else REPO_ROOT / "screens"
    routes = ([r.strip() for r in args.routes.split(",") if r.strip()]
              if args.routes else DEFAULT_ROUTES)

    results = asyncio.run(capture(args, routes, out_dir))

    if args.diff:
        baseline_dir = Path(args.diff).expanduser()
        for r in results:
            if not r.ok:
                continue
            baseline = baseline_dir / f"{slug(r.route)}.png"
            if not baseline.exists():
                r.note = f"no baseline at {baseline}"
                continue
            diff_out = out_dir / "diff" / f"{slug(r.route)}.png"
            r.changed_pct, note = compare(baseline, Path(r.path), diff_out)
            if note:
                r.note = note
            if r.changed_pct and r.changed_pct > args.threshold and diff_out.exists():
                r.diff_path = str(diff_out)

    return report(results, args, out_dir)


if __name__ == "__main__":
    raise SystemExit(main())
