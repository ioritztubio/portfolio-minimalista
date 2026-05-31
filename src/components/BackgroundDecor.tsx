import React from "react";

export const BackgroundDecor: React.FC = () => (
  <div
    className="fixed inset-0 pointer-events-none overflow-hidden hidden md:block"
    style={{ zIndex: 0 }}
    aria-hidden="true"
  >
    {/* ── Top-left: concentric arcs ── */}
    <div
      className="absolute"
      style={{
        top: "-180px",
        left: "-180px",
        animation: "decor-spin 100s linear infinite",
        transformOrigin: "180px 180px",
      }}
    >
      <svg width="560" height="560" viewBox="0 0 560 560" fill="none">
        <circle cx="560" cy="560" r="480" stroke="var(--accent)"  strokeWidth="0.6" opacity="0.07" />
        <circle cx="560" cy="560" r="360" stroke="var(--ink-3)"   strokeWidth="0.5" opacity="0.05" />
        <circle cx="560" cy="560" r="240" stroke="var(--ink-3)"   strokeWidth="0.5" opacity="0.04" />
        <circle cx="560" cy="560" r="130" stroke="var(--border)"  strokeWidth="0.5" opacity="0.06" />
      </svg>
    </div>

    {/* ── Bottom-right: concentric arcs ── */}
    <div
      className="absolute bottom-0 right-0"
      style={{
        bottom: "-200px",
        right: "-200px",
        animation: "decor-spin-reverse 80s linear infinite",
        transformOrigin: "200px 200px",
      }}
    >
      <svg width="500" height="500" viewBox="0 0 500 500" fill="none">
        <circle cx="0" cy="0" r="420" stroke="var(--accent)"  strokeWidth="0.6" opacity="0.06" />
        <circle cx="0" cy="0" r="300" stroke="var(--ink-3)"   strokeWidth="0.5" opacity="0.05" />
        <circle cx="0" cy="0" r="180" stroke="var(--ink-3)"   strokeWidth="0.5" opacity="0.04" />
      </svg>
    </div>

    {/* ── Top-right: floating diamond ── */}
    <div
      className="absolute"
      style={{
        top: "120px",
        right: "60px",
        animation: "decor-float 10s ease-in-out infinite",
      }}
    >
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <rect x="4" y="4" width="52" height="52" stroke="var(--accent)" strokeWidth="0.75" opacity="0.18" transform="rotate(45 30 30)" />
        <rect x="14" y="14" width="32" height="32" stroke="var(--accent)" strokeWidth="0.5" opacity="0.10" transform="rotate(45 30 30)" />
      </svg>
    </div>

    {/* ── Bottom-left: floating diamond ── */}
    <div
      className="absolute"
      style={{
        bottom: "140px",
        left: "70px",
        animation: "decor-float 13s ease-in-out infinite 2s",
      }}
    >
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect x="3" y="3" width="38" height="38" stroke="var(--ink-3)" strokeWidth="0.6" opacity="0.20" transform="rotate(45 22 22)" />
      </svg>
    </div>

    {/* ── Right side: vertical tick marks ── */}
    <div
      className="absolute"
      style={{
        right: "40px",
        top: "45%",
        animation: "decor-drift 8s ease-in-out infinite",
      }}
    >
      <svg width="20" height="120" viewBox="0 0 20 120" fill="none">
        {[0, 20, 40, 60, 80, 100].map((y, i) => (
          <line
            key={i}
            x1={i % 2 === 0 ? 0 : 6}
            y1={y}
            x2={i % 2 === 0 ? 14 : 20}
            y2={y}
            stroke="var(--ink-3)"
            strokeWidth="0.6"
            opacity="0.25"
          />
        ))}
      </svg>
    </div>

    {/* ── Left side: vertical tick marks ── */}
    <div
      className="absolute"
      style={{
        left: "40px",
        top: "40%",
        animation: "decor-drift 11s ease-in-out infinite 3s",
      }}
    >
      <svg width="20" height="100" viewBox="0 0 20 100" fill="none">
        {[0, 22, 44, 66, 88].map((y, i) => (
          <line
            key={i}
            x1={i % 2 === 0 ? 6 : 0}
            y1={y}
            x2={i % 2 === 0 ? 20 : 14}
            y2={y}
            stroke="var(--accent)"
            strokeWidth="0.6"
            opacity="0.15"
          />
        ))}
      </svg>
    </div>

    {/* ── Centre-right: single thin arc ── */}
    <div
      className="absolute"
      style={{
        right: "-60px",
        top: "30%",
        animation: "decor-spin 60s linear infinite",
        transformOrigin: "60px 60px",
      }}
    >
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
        <circle cx="60" cy="60" r="50" stroke="var(--border)" strokeWidth="0.5" opacity="0.30" strokeDasharray="8 6" />
      </svg>
    </div>
  </div>
);
