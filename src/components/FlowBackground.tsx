import React, { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

/*
  One continuous field behind the whole page. Domain-warped noise makes soft,
  irregular shapes that drift slowly and flow upward as you scroll, so sections
  read as one surface. Each section owns a faint tint; the field blends between
  them by scroll position. Rendered at a fraction of screen resolution (the
  shapes are soft anyway), capped at 30fps, paused when the tab is hidden.
*/

type RGB = [number, number, number];
type Palette = { bg: RGB; c1: RGB; c2: RGB; c3: RGB };

const hex = (h: string): RGB => [
  parseInt(h.slice(1, 3), 16) / 255,
  parseInt(h.slice(3, 5), 16) / 255,
  parseInt(h.slice(5, 7), 16) / 255,
];
const pal = (bg: string, c1: string, c2: string, c3: string): Palette => ({
  bg: hex(bg), c1: hex(c1), c2: hex(c2), c3: hex(c3),
});

// Section order matches the page: hero, about, projects, experience, closing.
const SECTIONS = ["top", "about", "projects", "experience", "contact"];

const PALETTES: Record<"light" | "dark", Palette[]> = {
  light: [
    pal("#E9E9EE", "#D9DDE6", "#C5CBD8", "#FCFCFD"), // cool silver
    pal("#EAE9EF", "#DCD6E8", "#C6BEDC", "#FCFCFD"), // lilac mist
    pal("#E8EBEC", "#D3E1E3", "#B9D2D5", "#FCFDFD"), // sea glass
    pal("#E9EAEF", "#D5DEEB", "#BCC9E0", "#FCFCFD"), // pale steel
    pal("#EBEBEE", "#DDDDE2", "#C9C9D1", "#FFFFFF"), // neutral
  ],
  dark: [
    pal("#060607", "#1A1D25", "#262B37", "#3B4150"),
    pal("#060607", "#1E1928", "#2E253F", "#47395C"),
    pal("#060607", "#152224", "#1E3538", "#2F4B4E"),
    pal("#060607", "#161D2E", "#202D46", "#344466"),
    pal("#060607", "#1C1C1F", "#29292E", "#404047"),
  ],
};

const VERT = `
attribute vec2 a;
void main() { gl_Position = vec4(a, 0.0, 1.0); }
`;

const FRAG = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 u_res;
uniform float u_time;
uniform float u_scroll;
uniform vec3 u_bg, u_c1, u_c2, u_c3;

// Sine-free hash: stable on mobile GPUs with low float precision
float hash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++) { v += a * noise(p); p *= 2.03; a *= 0.5; }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  vec2 p = uv;
  p.x *= u_res.x / u_res.y;
  p *= 1.15;
  p.y -= u_scroll * 0.55;

  float t = u_time * 0.03;
  vec2 q = vec2(fbm(p + vec2(0.0, t)), fbm(p + vec2(5.2, 1.3) - t));
  vec2 r = vec2(fbm(p + 2.2 * q + vec2(1.7, 9.2) + 0.7 * t),
                fbm(p + 2.2 * q + vec2(8.3, 2.8) - 0.6 * t));
  float f = fbm(p + 2.4 * r);

  vec3 col = u_bg;
  col = mix(col, u_c1, smoothstep(0.40, 0.66, q.x) * 0.85);
  col = mix(col, u_c2, smoothstep(0.54, 0.80, f));
  col = mix(col, u_c3, smoothstep(0.52, 0.74, r.y) * 0.85);
  gl_FragColor = vec4(col, 1.0);
}
`;

const RES_SCALE = 0.3;
const FRAME_MS = 1000 / 30;

function mixPal(a: Palette, b: Palette, k: number): Palette {
  const m = (x: RGB, y: RGB): RGB => [x[0] + (y[0] - x[0]) * k, x[1] + (y[1] - x[1]) * k, x[2] + (y[2] - x[2]) * k];
  return { bg: m(a.bg, b.bg), c1: m(a.c1, b.c1), c2: m(a.c2, b.c2), c3: m(a.c3, b.c3) };
}

export const FlowBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const themeRef = useRef(theme);
  themeRef.current = theme;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { antialias: false, alpha: false, powerPreference: "low-power" });
    if (!gl) {
      canvas.dataset.fallback = "true";
      return;
    }

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      canvas.dataset.fallback = "true";
      return;
    }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "a");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const u = (n: string) => gl.getUniformLocation(prog, n);
    const uRes = u("u_res"), uTime = u("u_time"), uScroll = u("u_scroll");
    const uBg = u("u_bg"), uC1 = u("u_c1"), uC2 = u("u_c2"), uC3 = u("u_c3");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    let tops: number[] = [];
    const measure = () => {
      tops = SECTIONS.map((id) => {
        const el = document.getElementById(id);
        return el ? el.getBoundingClientRect().top + window.scrollY : Infinity;
      });
    };

    const resize = () => {
      const w = Math.max(1, Math.round(window.innerWidth * RES_SCALE));
      const h = Math.max(1, Math.round(window.innerHeight * RES_SCALE));
      canvas.width = w;
      canvas.height = h;
      gl.viewport(0, 0, w, h);
      gl.uniform2f(uRes, w, h);
      measure();
    };
    resize();
    window.addEventListener("resize", resize);
    // Sections change height when content loads or the language changes
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);

    // Current palette eases toward the scroll target so theme and section
    // changes cross-fade instead of snapping.
    let current: Palette | null = null;
    let smoothScroll = window.scrollY / window.innerHeight;
    let last = 0;
    let elapsed = 0;
    let raf = 0;

    const target = (): Palette => {
      const list = PALETTES[themeRef.current];
      const y = window.scrollY + window.innerHeight * 0.5;
      let i = 0;
      while (i < tops.length - 1 && y >= tops[i + 1]) i++;
      if (i >= list.length - 1) return list[list.length - 1];
      const span = tops[i + 1] - tops[i];
      const k = Number.isFinite(span) && span > 0 ? Math.min(1, Math.max(0, (y - tops[i]) / span)) : 0;
      // Hold each section's tint, blend only across the last 40% before the next
      const eased = Math.min(1, Math.max(0, (k - 0.6) / 0.4));
      return mixPal(list[i], list[i + 1], eased * eased * (3 - 2 * eased));
    };

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (now - last < FRAME_MS) return;
      const dt = last ? Math.min(100, now - last) : 0;
      last = now;
      if (!reduce.matches) elapsed += dt / 1000;

      const goal = target();
      current = current ? mixPal(current, goal, 0.08) : goal;
      smoothScroll += (window.scrollY / window.innerHeight - smoothScroll) * 0.12;

      gl.uniform1f(uTime, elapsed);
      gl.uniform1f(uScroll, smoothScroll);
      gl.uniform3fv(uBg, current.bg);
      gl.uniform3fv(uC1, current.c1);
      gl.uniform3fv(uC2, current.c2);
      gl.uniform3fv(uC3, current.c3);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) {
        last = 0;
        raf = requestAnimationFrame(frame);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="flow-bg fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};
