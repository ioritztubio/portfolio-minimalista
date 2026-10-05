import React, { useRef } from "react";
import { motion, MotionValue, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { uiStrings } from "../i18n/ui";
import { renderHighlights } from "../utils/highlights";

// The lead paragraph lights up word by word as it scrolls through the viewport.
export const About: React.FC = () => {
  const { t, lang } = useLanguage();
  const s = uiStrings(lang);
  const [lead, ...rest] = t.profile.about;
  const highlights = t.profile.aboutHighlights ?? [];
  const leadRef = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: leadRef, offset: ["start 0.85", "end 0.5"] });
  const words = lead.split(" ");

  return (
    <section id="about" aria-labelledby="about-title" className="relative px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-12">
        <h2 id="about-title" className="sr-only">
          {s.aboutTitle}
        </h2>

        <div className="md:col-span-10 md:col-start-2">
          <p
            ref={leadRef}
            className="relative text-balance font-medium"
            style={{ fontSize: "clamp(1.625rem, 3.2vw, 2.75rem)", lineHeight: 1.18, letterSpacing: "-0.025em", color: "var(--ink)" }}
          >
            {reduce
              ? lead
              : words.map((w, i) => (
                  <Word key={`${lang}-${i}`} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
                    {w}
                  </Word>
                ))}
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-10">
            {rest.map((para, i) => (
              <motion.p
                key={`${lang}-${i}`}
                initial={reduce ? false : { opacity: 0, transform: "translateY(16px)" }}
                whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: i * 0.08 }}
                className="text-[17px] leading-relaxed"
                style={{ color: "var(--ink-2)" }}
              >
                {renderHighlights(para, highlights, "font-medium text-[var(--ink)]")}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Word: React.FC<{ progress: MotionValue<number>; range: [number, number]; children: string }> = ({
  progress,
  range,
  children,
}) => {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <>
      <motion.span style={{ opacity }}>{children}</motion.span>{" "}
    </>
  );
};
