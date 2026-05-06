import React, { useEffect, useRef } from 'react';

/* Custom cursor: a small dot that tracks the mouse 1:1, a larger ring that
   lerps behind it, and an SVG line drawn between them that grows with
   movement. Hidden on touch / coarse-pointer devices. */

export default function CursorFX() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const lineRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return;

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: target.x, y: target.y };
    let raf;
    let visible = false;

    const onMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!visible) {
        visible = true;
        document.body.classList.add('cursor-fx-on');
      }
    };
    const onLeave = () => { visible = false; document.body.classList.remove('cursor-fx-on'); };
    const onDown = () => document.body.classList.add('cursor-fx-down');
    const onUp = () => document.body.classList.remove('cursor-fx-down');

    const isInteractive = (el) => !!(el && el.closest && el.closest('a,button,input,textarea,select,[role="button"],.cursor-pointer'));
    const onOver = (e) => {
      if (isInteractive(e.target)) document.body.classList.add('cursor-fx-link');
      else document.body.classList.remove('cursor-fx-link');
    };

    const tick = () => {
      ring.x += (target.x - ring.x) * 0.18;
      ring.y += (target.y - ring.y) * 0.18;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0)`;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      if (lineRef.current) {
        const dx = target.x - ring.x, dy = target.y - ring.y;
        const len = Math.hypot(dx, dy);
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        lineRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) rotate(${angle}deg)`;
        lineRef.current.style.width = `${Math.min(len, 110)}px`;
        lineRef.current.style.opacity = Math.min(len / 60, 1).toFixed(3);
      }
      if (trailRef.current) {
        // small echo dot lagging further behind
        const tx = ring.x + (target.x - ring.x) * 0.4;
        const ty = ring.y + (target.y - ring.y) * 0.4;
        trailRef.current.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseout', (e) => { if (!e.relatedTarget) onLeave(); });
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('mouseover', onOver);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('mouseover', onOver);
      document.body.classList.remove('cursor-fx-on', 'cursor-fx-down', 'cursor-fx-link');
    };
  }, []);

  return (
    <>
      <div ref={lineRef} className="cursor-line" aria-hidden />
      <div ref={ringRef} className="cursor-ring" aria-hidden />
      <div ref={trailRef} className="cursor-trail" aria-hidden />
      <div ref={dotRef} className="cursor-dot" aria-hidden />
    </>
  );
}
