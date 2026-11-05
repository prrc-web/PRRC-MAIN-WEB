/**
 * Scroll-linked parallax, hand-rolled.
 *
 * framer-motion is listed in package.json but no component in src/ uses it, and
 * pulling a ~40 kB runtime into the bundle for three effects on one page is a
 * bad trade for a lab site served off a single box. This is under a kilobyte
 * and does the parts that actually matter:
 *
 *  - one shared rAF pass for every registered element, so N elements cost one
 *    frame callback rather than N scroll handlers;
 *  - every rect is read before any transform is written, so the browser only
 *    has to lay out once per frame instead of once per element;
 *  - nothing at all when the visitor asked for reduced motion.
 *
 * Offsets are rounded to whole pixels: a fractional translate re-rasterises
 * text on every step and reads as slight blur.
 */

const clamp01 = (n: number) => (n < 0 ? 0 : n > 1 ? 1 : n);

export type ParallaxMode = 'pass' | 'top';

export interface ParallaxOptions {
  /**
   * Total travel in px. Positive makes the element lag behind the page (it
   * drifts down while you scroll down); negative makes it lead.
   */
  distance?: number;
  /**
   * 'pass' (default) measures the element's own trip through the viewport, so
   * it works anywhere in the page. 'top' drives off window.scrollY from the
   * very top, for a hero that is already on screen at load and must sit at
   * exactly zero displacement before the first scroll.
   */
  mode?: ParallaxMode;
  /** mode 'top' only: px of scroll over which the whole distance is spent. */
  range?: number;
}

interface Target {
  el: HTMLElement;
  distance: number;
  mode: ParallaxMode;
  range: number;
  /** Last translate written. Rect reads include it, so progress subtracts it. */
  applied: number;
}

const targets = new Set<Target>();
let frame = 0;
let listening = false;

function paint() {
  frame = 0;

  const viewportHeight = window.innerHeight;
  const scrolled = window.scrollY || window.pageYOffset || 0;
  const writes: Array<[Target, number]> = [];

  // Read pass.
  for (const target of targets) {
    let offset: number;

    if (target.mode === 'top') {
      offset = target.distance * clamp01(scrolled / target.range);
    } else {
      const rect = target.el.getBoundingClientRect();
      // Subtract our own translate, otherwise the transform feeds back into
      // the measurement and the element drifts on its own.
      const top = rect.top - target.applied;
      // 0 when the element's top touches the viewport bottom, 1 when its
      // bottom leaves through the viewport top.
      const progress = clamp01((viewportHeight - top) / (viewportHeight + rect.height));
      offset = target.distance * (1 - 2 * progress);
    }

    offset = Math.round(offset);
    if (offset !== target.applied) writes.push([target, offset]);
  }

  // Write pass.
  for (const [target, offset] of writes) {
    target.applied = offset;
    // Clear at rest: even an identity transform keeps the element on its own
    // composited layer on some browsers.
    target.el.style.transform = offset === 0 ? '' : `translate3d(0, ${offset}px, 0)`;
  }
}

function schedule() {
  if (!frame) frame = requestAnimationFrame(paint);
}

/** Re-measure now. Call after anything that reflows the page, e.g. filtering. */
export function refreshParallax() {
  if (typeof window !== 'undefined') schedule();
}

function onScrollOrResize() {
  schedule();
}

function listen(enabled: boolean) {
  if (enabled === listening) return;
  listening = enabled;

  if (enabled) {
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);
  } else {
    window.removeEventListener('scroll', onScrollOrResize);
    window.removeEventListener('resize', onScrollOrResize);
  }
}

/** Registers an element; returns the unregister function for effect cleanup. */
export function registerParallax(el: HTMLElement, options: ParallaxOptions = {}) {
  if (typeof window === 'undefined') return () => {};
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};

  const target: Target = {
    el,
    distance: options.distance ?? 40,
    mode: options.mode ?? 'pass',
    range: options.range ?? 700,
    applied: 0,
  };

  targets.add(target);
  listen(true);
  schedule();

  return () => {
    targets.delete(target);
    el.style.transform = '';
    if (targets.size === 0) listen(false);
  };
}
