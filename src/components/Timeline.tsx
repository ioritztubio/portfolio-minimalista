import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { Briefcase, ChevronDown, GraduationCap } from "lucide-react";
import { TimelineEvent } from "../data/types";
import { useLanguage } from "../context/LanguageContext";
import { renderHighlights } from "../utils/highlights";
import { isFuture, isOngoing, parseDateVal, yearOf } from "../utils/dates";

const EASE = [0.23, 1, 0.32, 1] as const;

// Keynote-style: the year of the entry in focus stays pinned on the left
// while entries scroll past on the right.
export const Timeline: React.FC = () => {
  const { t, lang } = useLanguage();
  const { timeline } = t;
  const reduce = useReducedMotion();
  const [showExtra, setShowExtra] = useState(false);
  const [active, setActive] = useState(0);

  // Newest start first, so the pinned year counts down as you scroll
  const sorted = [...timeline.items].sort((a, b) => parseDateVal(b.dateStart) - parseDateVal(a.dateStart));
  const main = sorted.filter((e) => !e.extra);
  const extra = sorted.filter((e) => e.extra);
  const visible = showExtra ? [...main, ...extra] : main;
  const current = visible[Math.min(active, visible.length - 1)];

  useEffect(() => setActive(0), [lang]);

  return (
    <section id="experience" aria-labelledby="experience-title" className="relative px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          id="experience-title"
          initial={reduce ? false : { opacity: 0, filter: "blur(8px)", transform: "translateY(16px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)", transform: "translateY(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="max-w-3xl font-semibold"
          style={{ fontSize: "clamp(2.25rem, 5vw, 4.25rem)", lineHeight: 1.02, letterSpacing: "-0.035em", color: "var(--ink)" }}
        >
          {timeline.sectionTitle}
        </motion.h2>

        <div className="mt-14 grid gap-x-10 md:mt-20 md:grid-cols-12">
          {/* Pinned year (desktop) */}
          <div className="hidden md:col-span-4 md:block">
            <div className="sticky top-[34vh]" aria-hidden="true">
              <div className="relative h-[clamp(4.5rem,8vw,6rem)] overflow-hidden">
                <AnimatePresence initial={false} mode="popLayout">
                  <motion.span
                    key={yearOf(current.dateStart) ?? current.dateStart}
                    initial={reduce ? { opacity: 0 } : { opacity: 0, filter: "blur(12px)", transform: "translateY(40%)" }}
                    animate={{ opacity: 1, filter: "blur(0px)", transform: "translateY(0%)" }}
                    exit={reduce ? { opacity: 0 } : { opacity: 0, filter: "blur(12px)", transform: "translateY(-40%)" }}
                    transition={{ duration: 0.55, ease: EASE }}
                    className="tabular absolute left-0 top-0 block font-semibold"
                    style={{ fontSize: "clamp(4.5rem, 8vw, 6rem)", lineHeight: 1, letterSpacing: "-0.04em", color: "var(--ink)" }}
                  >
                    {yearOf(current.dateStart)}
                  </motion.span>
                </AnimatePresence>
              </div>
              <TypeLabel type={current.type} work={timeline.legendWork} education={timeline.legendEducation} />
            </div>
          </div>

          <ol className="md:col-span-8">
            {visible.map((e, i) => (
              <React.Fragment key={`${lang}-${e.title}-${e.dateStart}`}>
                {i === main.length && showExtra && (
                  <li className="py-10 text-[15px] italic" style={{ color: "var(--ink-3)" }} aria-hidden="false">
                    {t.ui.extraExperienceTagline}
                  </li>
                )}
                <Entry event={e} focused={i === active} onFocusChange={() => setActive(i)} />
              </React.Fragment>
            ))}
          </ol>
        </div>

        {extra.length > 0 && (
          <div className="mt-12 flex md:justify-end">
            <button
              onClick={() => setShowExtra((v) => !v)}
              aria-expanded={showExtra}
              className="btn btn-glass glass md:mr-0"
            >
              {showExtra ? t.ui.hideExtra : t.ui.showExtra}
              <ChevronDown
                className="h-4 w-4 transition-transform duration-300"
                style={{ transform: showExtra ? "rotate(180deg)" : "none", transitionTimingFunction: "var(--ease-out)" }}
                aria-hidden="true"
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const TypeLabel: React.FC<{ type: TimelineEvent["type"]; work: string; education: string }> = ({ type, work, education }) => {
  const Icon = type === "work" ? Briefcase : GraduationCap;
  return (
    <span className="mt-4 inline-flex items-center gap-2 text-sm" style={{ color: "var(--ink-3)" }}>
      <Icon className="h-4 w-4" aria-hidden="true" strokeWidth={1.75} />
      {type === "work" ? work : education}
    </span>
  );
};

const Entry: React.FC<{ event: TimelineEvent; focused: boolean; onFocusChange: () => void }> = ({ event, focused, onFocusChange }) => {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLLIElement>(null);
  const inBand = useInView(ref, { margin: "-42% 0px -42% 0px" });

  useEffect(() => {
    if (inBand) onFocusChange();
  }, [inBand]); // eslint-disable-line react-hooks/exhaustive-deps

  const future = isFuture(event.dateStart);
  const ongoing = !future && isOngoing(event) && parseDateVal(event.dateEnd) !== 999999;
  const single = event.dateStart === event.dateEnd;
  const dates = single ? event.dateStart : `${event.dateStart} – ${event.dateEnd}`;
  const Icon = event.type === "work" ? Briefcase : GraduationCap;

  return (
    <motion.li
      ref={ref}
      initial={reduce ? false : { opacity: 0, transform: "translateY(20px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: EASE }}
      className="border-t py-10 first:border-t-0 first:pt-0 md:py-12"
      style={{ borderColor: "var(--line)" }}
    >
      <div className="transition-opacity duration-500 md:[opacity:var(--o)]" style={{ "--o": focused ? 1 : 0.8 } as React.CSSProperties}>
        {/* Mobile: year inline */}
        <span className="tabular mb-3 block text-5xl font-semibold md:hidden" style={{ letterSpacing: "-0.04em", color: "var(--ink)" }}>
          {yearOf(event.dateStart)}
        </span>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="tabular font-mono text-xs" style={{ color: "var(--ink-3)" }}>
            {dates}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs md:hidden" style={{ color: "var(--ink-3)" }}>
            <Icon className="h-3.5 w-3.5" aria-hidden="true" strokeWidth={1.75} />
            {event.type === "work" ? t.timeline.legendWork : t.timeline.legendEducation}
          </span>
          {(future || ongoing) && (
            <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium" style={{ background: "var(--line)", color: "var(--ink)" }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--ink)" }} />
              {future ? t.ui.startingSoon : t.ui.inProgress}
            </span>
          )}
        </div>

        <h3 className="mt-3 text-2xl font-semibold md:text-[1.75rem]" style={{ letterSpacing: "-0.025em", lineHeight: 1.15, color: "var(--ink)" }}>
          {event.title}
        </h3>
        <p className="mt-1 text-[15px] font-medium" style={{ color: "var(--ink-2)" }}>
          {event.organization}
        </p>
        <p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed" style={{ color: "var(--ink-2)" }}>
          {renderHighlights(event.description, event.highlights ?? [], "font-medium text-[var(--ink)]")}
        </p>
        {event.tags && event.tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {event.tags.map((tag) => (
              <li key={tag} className="rounded-full px-2.5 py-1 font-mono text-[11px]" style={{ background: "var(--line)", color: "var(--ink-2)" }}>
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.li>
  );
};
