import { useEffect, useRef } from "react";

/**
 * Subtle glow that follows the pointer on desktop devices with a fine pointer.
 * No-ops (and cleans up) on touch devices, and always removes its listeners on unmount.
 */
export default function CursorGlow() {
  const dotRef = useRef(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia?.("(pointer: fine)").matches;
    if (!isFinePointer) return;

    const dot = dotRef.current;
    if (!dot) return;

    const handleMove = (e) => {
      dot.style.transform = `translate3d(${e.clientX - 8}px, ${e.clientY - 8}px, 0)`;
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="hidden md:block fixed top-0 left-0 w-4 h-4 rounded-full bg-brand-400/60 blur-[2px] pointer-events-none z-[999] mix-blend-difference transition-transform duration-75 ease-out"
    />
  );
}
