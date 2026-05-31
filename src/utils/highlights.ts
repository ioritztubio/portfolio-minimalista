import React from "react";

export function renderHighlights(
  text: string,
  highlights: string[] = [],
  colorClass: string,
): React.ReactNode {
  if (!highlights.length) return text;
  const escaped = highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const pattern = new RegExp(`(${escaped.join("|")})`, "gi");
  const parts = text.split(pattern);
  return parts.map((part, i) =>
    highlights.some((h) => h.toLowerCase() === part.toLowerCase())
      ? React.createElement("span", { key: i, className: colorClass }, part)
      : part,
  );
}
