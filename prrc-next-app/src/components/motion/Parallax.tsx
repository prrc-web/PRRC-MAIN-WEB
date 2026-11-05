import React, { useEffect, useRef } from 'react';
import { registerParallax, type ParallaxOptions } from '../../lib/parallax';

type ParallaxProps = ParallaxOptions & {
  children: React.ReactNode;
  className?: string;
};

/**
 * A plain div that drifts against the scroll. Wrapper rather than a hook so the
 * call sites stay declarative:
 *
 *   <Parallax distance={48}>…</Parallax>
 *
 * The div is layout-transparent — no padding, margin or display of its own, so
 * wrapping existing markup does not move anything until the page scrolls.
 * Mechanics and the reduced-motion bail-out live in lib/parallax.
 */
const Parallax: React.FC<ParallaxProps> = ({ children, className, distance, mode, range }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return registerParallax(el, { distance, mode, range });
  }, [distance, mode, range]);

  return (
    <div ref={ref} className={className} data-parallax>
      {children}
    </div>
  );
};

export default Parallax;
