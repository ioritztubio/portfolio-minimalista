import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { motionValue, useReducedMotion, useSpring, useTransform, MotionValue } from "motion/react";

// ── Environment ─────────────────────────────────────────────

const FINE_POINTER = "(hover: hover) and (pointer: fine)";

function subscribeMQ(query: string) {
  return (cb: () => void) => {
    const mq = window.matchMedia(query);
    mq.addEventListener("change", cb);
    return () => mq.removeEventListener("change", cb);
  };
}

export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(subscribeMQ(query), () => window.matchMedia(query).matches, () => false);
}

export const useFinePointer = () => useMediaQuery(FINE_POINTER);

/**
 * Screens big enough for pinned, scroll-scrubbed scenes: wide AND tall, so a
 * landscape phone or small tablet gets the plain stacked layout instead of a
 * pinned card that crops its own text.
 */
export const useCinematic = () => useMediaQuery("(min-width: 768px) and (min-height: 700px)");

// ── Device orientation (phones) ─────────────────────────────
// One shared listener feeds normalised tilt in [-1, 1] to every card.

const gyroX = motionValue(0); // left/right tilt (gamma)
const gyroY = motionValue(0); // front/back tilt (beta), relative to how the phone was first held
let gyroListening = false;
let gyroActive = false;
let baseBeta: number | null = null;
const gyroSubs = new Set<() => void>();

type PermissionCapable = typeof DeviceOrientationEvent & { requestPermission?: () => Promise<"granted" | "denied"> };

function onOrientation(e: DeviceOrientationEvent) {
  if (e.beta == null || e.gamma == null) return;
  if (baseBeta === null) baseBeta = e.beta;
  const clamp = (v: number) => Math.max(-1, Math.min(1, v));
  gyroX.set(clamp(e.gamma / 25));
  gyroY.set(clamp((e.beta - baseBeta) / 25));
  if (!gyroActive) {
    gyroActive = true;
    gyroSubs.forEach((cb) => cb());
  }
}

function startGyro() {
  if (gyroListening || typeof window === "undefined" || !("DeviceOrientationEvent" in window)) return;
  gyroListening = true;
  window.addEventListener("deviceorientation", onOrientation);
}

/** iOS needs a tap before it allows motion data; Android starts straight away. */
export function gyroNeedsPermission(): boolean {
  if (typeof window === "undefined" || !("DeviceOrientationEvent" in window)) return false;
  return typeof (DeviceOrientationEvent as PermissionCapable).requestPermission === "function";
}

export async function requestGyro(): Promise<boolean> {
  const DOE = DeviceOrientationEvent as PermissionCapable;
  try {
    if (DOE.requestPermission && (await DOE.requestPermission()) !== "granted") return false;
  } catch {
    return false;
  }
  startGyro();
  return true;
}

export function useGyroActive(): boolean {
  return useSyncExternalStore(
    (cb) => {
      gyroSubs.add(cb);
      return () => gyroSubs.delete(cb);
    },
    () => gyroActive,
    () => false,
  );
}

/** Starts listening on touch devices that do not need a permission prompt. */
export function useAutoGyro() {
  const coarse = useMediaQuery("(pointer: coarse)");
  const reduce = useReducedMotion();
  useEffect(() => {
    if (coarse && !reduce && !gyroNeedsPermission()) startGyro();
  }, [coarse, reduce]);
}

// ── Tilt + specular light ───────────────────────────────────

const SPRING = { stiffness: 150, damping: 18, mass: 0.6 };

interface TiltOptions {
  max?: number; // degrees
}

/**
 * Tilts an element toward the pointer (desktop) or with the phone (gyro),
 * and feeds --mx / --my so `.specular` can paint a light that follows.
 */
export function useTilt<T extends HTMLElement>({ max = 6 }: TiltOptions = {}) {
  const ref = useRef<T>(null);
  const reduce = useReducedMotion();
  const fine = useFinePointer();
  const px = useSpring(0, SPRING);
  const py = useSpring(0, SPRING);

  const rotateX = useTransform(py, (v) => (reduce ? 0 : -v * max));
  const rotateY = useTransform(px, (v) => (reduce ? 0 : v * max));

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;

    if (fine) {
      const move = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        px.set(x * 2 - 1);
        py.set(y * 2 - 1);
        el.style.setProperty("--mx", `${x * 100}%`);
        el.style.setProperty("--my", `${y * 100}%`);
        el.style.setProperty("--spec-o", "1");
      };
      const leave = () => {
        px.set(0);
        py.set(0);
        el.style.setProperty("--spec-o", "0");
      };
      el.addEventListener("pointermove", move);
      el.addEventListener("pointerleave", leave);
      return () => {
        el.removeEventListener("pointermove", move);
        el.removeEventListener("pointerleave", leave);
      };
    }

    // Touch: follow the phone's orientation while the card is on screen
    let visible = false;
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (!visible) {
        px.set(0);
        py.set(0);
      }
    });
    io.observe(el);
    const ux = gyroX.on("change", (v) => {
      if (!visible) return;
      px.set(v);
      el.style.setProperty("--mx", `${50 + v * 50}%`);
      el.style.setProperty("--spec-o", "1");
    });
    const uy = gyroY.on("change", (v) => {
      if (!visible) return;
      py.set(v);
      el.style.setProperty("--my", `${50 + v * 50}%`);
    });
    return () => {
      io.disconnect();
      ux();
      uy();
    };
  }, [fine, reduce, px, py]);

  return { ref, rotateX, rotateY };
}

// ── Magnetic pull ───────────────────────────────────────────

export function useMagnetic<T extends HTMLElement>(strength = 0.25) {
  const ref = useRef<T>(null);
  const reduce = useReducedMotion();
  const fine = useFinePointer();
  const x = useSpring(0, { stiffness: 220, damping: 16, mass: 0.4 });
  const y = useSpring(0, { stiffness: 220, damping: 16, mass: 0.4 });

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce || !fine) return;
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      x.set((e.clientX - (r.left + r.width / 2)) * strength);
      y.set((e.clientY - (r.top + r.height / 2)) * strength);
    };
    const leave = () => {
      x.set(0);
      y.set(0);
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, [reduce, fine, strength, x, y]);

  return { ref, x, y } as { ref: React.RefObject<T>; x: MotionValue<number>; y: MotionValue<number> };
}

// ── Misc ────────────────────────────────────────────────────

export function useMounted() {
  const [m, setM] = useState(false);
  useEffect(() => setM(true), []);
  return m;
}
