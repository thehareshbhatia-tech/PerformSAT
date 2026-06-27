import { useState, useEffect } from 'react';
import { breakpoints } from '../design/tokens';

const COARSE_QUERY = '(hover: none), (pointer: coarse)';

function readCoarsePointer() {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia(COARSE_QUERY).matches;
}

/**
 * Shared viewport hook — the single source of truth for responsive layout
 * decisions in JS. Tiers key off the design-token breakpoints (tablet 768 /
 * desktop 1024) so JS and CSS stay aligned. `isCoarsePointer` reports a
 * touch/no-hover device (every iPad + phone) so hover-only affordances can be
 * replaced on touch.
 *
 * Use it instead of hand-rolling `window.innerWidth < 768`: a bare boolean
 * collapses the whole 768-1023 tablet band onto the desktop layout, which is
 * the root cause of SEVA's iPad cramping.
 *
 * @returns {{width:number, isMobile:boolean, isTablet:boolean, isDesktop:boolean, isCoarsePointer:boolean}}
 */
export function useViewport() {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : breakpoints.desktop
  );
  const [isCoarsePointer, setIsCoarsePointer] = useState(readCoarsePointer);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    // iOS reports the new width slightly after rotation; resize covers it, but
    // orientationchange is kept as a belt-and-suspenders re-measure.
    window.addEventListener('orientationchange', handleResize);

    let mq;
    let onPointerChange;
    if (window.matchMedia) {
      mq = window.matchMedia(COARSE_QUERY);
      onPointerChange = () => setIsCoarsePointer(mq.matches);
      setIsCoarsePointer(mq.matches);
      if (mq.addEventListener) mq.addEventListener('change', onPointerChange);
      else if (mq.addListener) mq.addListener(onPointerChange); // Safari < 14
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      if (mq && onPointerChange) {
        if (mq.removeEventListener) mq.removeEventListener('change', onPointerChange);
        else if (mq.removeListener) mq.removeListener(onPointerChange);
      }
    };
  }, []);

  return {
    width,
    isMobile: width < breakpoints.tablet,
    isTablet: width >= breakpoints.tablet && width < breakpoints.desktop,
    isDesktop: width >= breakpoints.desktop,
    isCoarsePointer,
  };
}

export default useViewport;
