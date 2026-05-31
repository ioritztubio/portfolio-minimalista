import React, { useEffect, useRef, useState } from "react";

export const Cursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    setIsTouch(!window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (isTouch) return;

    let curX = 0, curY = 0;
    let spotX = 0, spotY = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      curX = e.clientX;
      curY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${curX}px, ${curY}px) translate(-50%, -50%)`;
      }
    };

    const tick = () => {
      spotX += (curX - spotX) * 0.07;
      spotY += (curY - spotY) * 0.07;
      if (spotRef.current) {
        spotRef.current.style.transform = `translate(${spotX}px, ${spotY}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    const onOver = (e: MouseEvent) => {
      const el = (e.target as Element).closest("a, button, [role='button']");
      if (el) document.body.classList.add("cursor-hover");
      else document.body.classList.remove("cursor-hover");
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      <div ref={spotRef} id="cursor-spotlight" />
      <div ref={dotRef} id="cursor-dot" />
    </>
  );
};

export default Cursor;
