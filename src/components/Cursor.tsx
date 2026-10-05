import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useSpring } from "motion/react";
import { useFinePointer } from "../lib/interaction";

const RING = 52;
const INTERACTIVE = "a, button, [role='button'], label, summary, input[type='checkbox']";
const TEXT = "input[type='text'], input[type='email'], textarea";

// A precise dot plus a soft ring that trails on a spring and swells over anything pressable.
export const Cursor: React.FC = () => {
  const fine = useFinePointer();
  const reduce = useReducedMotion();
  const enabled = fine && !reduce;
  const dot = useRef<HTMLDivElement>(null);
  const x = useSpring(-100, { stiffness: 500, damping: 40, mass: 0.5 });
  const y = useSpring(-100, { stiffness: 500, damping: 40, mass: 0.5 });
  const [state, setState] = useState<"idle" | "hover" | "text" | "down">("idle");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-cursor");
    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      if (dot.current) dot.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const el = e.target as Element | null;
      setState((prev) => (prev === "down" ? prev : el?.closest(TEXT) ? "text" : el?.closest(INTERACTIVE) ? "hover" : "idle"));
    };
    const down = () => setState("down");
    const up = (e: PointerEvent) => {
      const el = e.target as Element | null;
      setState(el?.closest(INTERACTIVE) ? "hover" : "idle");
    };
    const leave = () => setVisible(false);
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const ring = { idle: 28, hover: 52, text: 4, down: 22 }[state];

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[9999]" style={{ opacity: visible ? 1 : 0, transition: "opacity 200ms ease" }}>
      <motion.div className="absolute left-0 top-0" style={{ x, y }}>
        <div
          className="rounded-full"
          style={{
            width: RING,
            height: RING,
            transform: `translate(-50%, -50%) scale(${ring / RING})`,
            border: "1px solid var(--line-2)",
            background: state === "hover" ? "color-mix(in oklab, var(--ink) 6%, transparent)" : "transparent",
            transition: "transform 300ms var(--ease-out), background-color 200ms ease",
          }}
        />
      </motion.div>
      <div
        ref={dot}
        className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full"
        style={{ background: "var(--ink)", opacity: state === "text" ? 0 : 1, transition: "opacity 150ms ease" }}
      />
    </div>
  );
};
