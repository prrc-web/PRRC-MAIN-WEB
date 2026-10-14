#!/usr/bin/env python3
"""Fail the build when an asset in public/ is too heavy.

Guards against the 2026-10 regression where five headshot WebPs totalling
65.7 MB (up to 5915x8872, 52 megapixels) were shipped to render 64x64 avatars.

Usage
-----
    python3 scripts/check_asset_budget.py                 # default 300 KB budget
    python3 scripts/check_asset_budget.py --max-kb 150
    python3 scripts/check_asset_budget.py --json
    python3 scripts/check_asset_budget.py --allow .asset-budget.json

Exit codes: 0 within budget, 1 over budget.

An optional allowlist JSON maps a path glob to a reason::

    {"documents/*.pdf": "printed handouts, served as-is"}

Run it via npm: ``npm run check:assets`` from prrc-next-app/.
"""

from __future__ import annotations

import argparse
import fnmatch
import json
import os
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
DEFAULT_PUBLIC = REPO_ROOT / "prrc-next-app" / "public"

IMAGE_SUFFIXES = {".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif", ".tif", ".tiff", ".bmp"}


def human(n: float) -> str:
    for unit in ("B", "KB", "MB", "GB"):
        if abs(n) < 1024 or unit == "GB":
            return f"{n:.1f} {unit}" if unit != "B" else f"{int(n)} B"
        n /= 1024
    return f"{n:.1f} GB"


def load_allowlist(path: str | None) -> dict[str, str]:
    if not path:
        return {}
    p = Path(path)
    if not p.exists():
        print(f"warning: allowlist {p} not found, ignoring", file=sys.stderr)
        return {}
    try:
        data = json.loads(p.read_text())
    except json.JSONDecodeError as exc:
        print(f"warning: allowlist {p} is not valid JSON ({exc}), ignoring", file=sys.stderr)
        return {}
    return {str(k): str(v) for k, v in data.items()}


def allowed(rel: str, allowlist: dict[str, str]) -> str | None:
    for pattern, reason in allowlist.items():
        if fnmatch.fnmatch(rel, pattern) or fnmatch.fnmatch(Path(rel).name, pattern):
            return reason
    return None


def image_dimensions(path: Path) -> tuple[int, int] | None:
    try:
        from PIL import Image
    except ImportError:
        return None
    try:
        with Image.open(path) as im:
            return im.width, im.height
    except Exception:  # noqa: BLE001 - unreadable/unsupported image
        return None


def main(argv: list[str] | None = None) -> int:
    ap = argparse.ArgumentParser(
        description="Check public/ assets against a size budget.",
        formatter_class=argparse.ArgumentDefaultsHelpFormatter,
    )
    ap.add_argument("--dir", default=str(DEFAULT_PUBLIC), help="Asset directory to scan.")
    ap.add_argument("--max-kb", type=float, default=300.0,
                    help="Maximum size per file before failing.")
    ap.add_argument("--max-dim", type=int, default=3000,
                    help="Warn when an image's longest edge exceeds this.")
    ap.add_argument("--top", type=int, default=10, help="How many largest files to list.")
    ap.add_argument("--allow", default=None, help="JSON allowlist of glob -> reason.")
    ap.add_argument("--json", action="store_true", help="Emit a JSON report.")
    args = ap.parse_args(argv)

    root = Path(args.dir).expanduser()
    if not root.is_dir():
        print(f"error: {root} is not a directory", file=sys.stderr)
        return 2

    limit = args.max_kb * 1024
    allowlist = load_allowlist(args.allow)

    over: list[tuple[int, str]] = []
    too_big: list[tuple[str, int, int, int]] = []
    total = 0
    count = 0

    for dirpath, _dirnames, filenames in os.walk(root):
        for name in filenames:
            if name.startswith("."):
                continue
            path = Path(dirpath) / name
            rel = str(path.relative_to(root))
            try:
                size = path.stat().st_size
            except OSError:
                continue
            total += size
            count += 1
            reason = allowed(rel, allowlist)

            if size > limit and reason is None:
                over.append((size, rel))

            if path.suffix.lower() in IMAGE_SUFFIXES:
                dims = image_dimensions(path)
                if dims and max(dims) > args.max_dim:
                    too_big.append((rel, size, dims[0], dims[1]))

    over.sort(reverse=True)
    too_big.sort(key=lambda row: -max(row[2], row[3]))

    if args.json:
        print(json.dumps({
            "dir": str(root),
            "max_kb": args.max_kb,
            "files": count,
            "total_bytes": total,
            "over_budget": [{"path": r, "bytes": s} for s, r in over],
            "oversized_dimensions": [
                {"path": p, "bytes": s, "width": w, "height": h} for p, s, w, h in too_big
            ],
        }, indent=2))
        return 1 if over else 0

    if over:
        print(f"OVER BUDGET ({'>'}{args.max_kb:g} KB each):")
        for size, rel in over:
            print(f"  {human(size):>10}  {rel}")
        print()

    if too_big:
        print(f"OVERSIZED PIXEL DIMENSIONS (longest edge > {args.max_dim}px):")
        for rel, size, w, h in too_big:
            print(f"  {w}x{h:<7} {human(size):>10}  {rel}")
        print()

    print(f"largest files in {root.name}/:")
    everything = []
    for dirpath, _d, filenames in os.walk(root):
        for name in filenames:
            if name.startswith("."):
                continue
            p = Path(dirpath) / name
            try:
                everything.append((p.stat().st_size, str(p.relative_to(root))))
            except OSError:
                continue
    everything.sort(reverse=True)
    for size, rel in everything[: args.top]:
        print(f"  {human(size):>10}  {rel}")

    print(f"\n{count} files, {human(total)} total; budget {args.max_kb:g} KB/file")
    if over:
        print(f"FAIL: {len(over)} file(s) over budget")
        return 1
    print("PASS: everything within budget")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
