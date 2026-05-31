import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { TimelineEvent } from "../data/types";
import { Briefcase, GraduationCap, ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { renderHighlights } from "../utils/highlights";

const MONTH_NUM: Record<string, number> = {
  january: 1, february: 2, march: 3, april: 4, may: 5, june: 6,
  july: 7, august: 8, september: 9, october: 10, november: 11, december: 12,
  enero: 1, febrero: 2, marzo: 3, abril: 4, mayo: 5, junio: 6,
  julio: 7, agosto: 8, septiembre: 9, octubre: 10, noviembre: 11, diciembre: 12,
  janvier: 1, février: 2, mars: 3, avril: 4, mai: 5, juin: 6,
  juillet: 7, août: 8, septembre: 9, octobre: 10, novembre: 11, décembre: 12,
  urtarrila: 1, otsaila: 2, martxoa: 3, apirila: 4, maiatza: 5, ekaina: 6,
  uztaila: 7, abuztua: 8, iraila: 9, urria: 10, azaroa: 11, abendua: 12,
};

function parseDateVal(str: string): number {
  if (/present|pr[eé]sent|actualidad|gaur egun/i.test(str)) return 999999;
  const yearMatch = str.match(/\d{4}/);
  const year = yearMatch ? parseInt(yearMatch[0]) : 0;
  const normalized = str.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  const origWords = str.toLowerCase().split(/\s+/);
  const normWords = normalized.split(/\s+/);
  const month = normWords.reduce<number>((acc, w, i) => {
    if (acc) return acc;
    return MONTH_NUM[origWords[i]] ?? MONTH_NUM[w] ?? 0;
  }, 0);
  return year * 100 + month;
}

function currentYearMonth(): number {
  const now = new Date();
  return now.getFullYear() * 100 + (now.getMonth() + 1);
}

function isDateInFuture(str: string): boolean {
  const val = parseDateVal(str);
  if (val === 0 || val === 999999) return false;
  return val > currentYearMonth();
}

function isInProgress(dateStart: string, dateEnd: string): boolean {
  const start = parseDateVal(dateStart);
  const end = parseDateVal(dateEnd);
  if (end === 999999) return false;
  const now = currentYearMonth();
  return start <= now && end >= now;
}

export const Timeline: React.FC = () => {
  const { t } = useLanguage();
  const { timeline } = t;
  const [showExtra, setShowExtra] = useState(false);

  const sorted = [...timeline.items].sort(
    (a, b) => parseDateVal(b.dateEnd) - parseDateVal(a.dateEnd),
  );
  const mainItems = sorted.filter((e) => !e.extra);
  const extraItems = sorted.filter((e) => e.extra);

  return (
    <section id="experience" className="py-20 px-4 max-w-4xl mx-auto">
      <p className="section-label">{timeline.sectionTitle}</p>

      <div className="flex justify-center gap-6 mb-16 text-xs font-mono uppercase tracking-wider" style={{ color: "var(--ink-3)" }}>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block" />
          {t.timeline.legendWork}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
          {t.timeline.legendEducation}
        </span>
      </div>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px transform md:-translate-x-1/2" style={{ backgroundColor: "var(--border)" }} />
        <div className="space-y-12">
          {mainItems.map((event, index) => (
            <TimelineItem key={index} event={event} index={index} />
          ))}
        </div>
      </div>

      {extraItems.length > 0 && (
        <div className="mt-16 flex flex-col items-center gap-6">
          <button
            onClick={() => setShowExtra((v) => !v)}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
            style={{ border: "1px solid var(--border)", color: "var(--ink-2)" }}
          >
            <span>{showExtra ? t.ui.hideExtra : t.ui.showExtra}</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showExtra ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {showExtra && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full overflow-hidden"
              >
                <p className="text-center text-xs font-mono uppercase tracking-widest mb-12" style={{ color: "var(--ink-3)" }}>
                  {t.ui.extraExperienceTagline}
                </p>
                <div className="relative">
                  <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px transform md:-translate-x-1/2" style={{ backgroundColor: "var(--border)", opacity: 0.5 }} />
                  <div className="space-y-12">
                    {extraItems.map((event, i) => (
                      <TimelineItem key={i} event={event} index={mainItems.length + i} />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </section>
  );
};

const TimelineItem: React.FC<{ event: TimelineEvent; index: number }> = ({ event, index }) => {
  const { t } = useLanguage();
  const isEven = index % 2 === 0;
  const isWork = event.type === "work";

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-80px 0px" });

  const future = isDateInFuture(event.dateStart);
  const inProgress = !future && isInProgress(event.dateStart, event.dateEnd);

  const dotActiveClass = isWork
    ? "border-blue-500 shadow-[0_0_8px_2px_rgba(59,130,246,0.4)] scale-125"
    : "border-amber-500 shadow-[0_0_8px_2px_rgba(245,158,11,0.4)] scale-125";

  const badgeClass = isWork
    ? "bg-blue-500/10 text-blue-400 border-blue-500/30"
    : "bg-amber-500/10 text-amber-400 border-amber-500/30";

  const iconColorClass = isWork ? "text-blue-400" : "text-amber-400";

  const isSingleMonth = event.dateStart === event.dateEnd;
  const dateLabel = future
    ? `Starting ${event.dateStart}`
    : isSingleMonth
      ? event.dateStart
      : `${event.dateStart} — ${event.dateEnd}`;

  const highlightClass = isWork ? "text-blue-400 font-semibold" : "text-amber-400 font-semibold";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`relative flex flex-col md:flex-row ${isEven ? "md:flex-row-reverse" : ""} items-start md:items-center group`}
    >
      {/* Checkpoint dot */}
      <div
        className={`absolute left-4 md:left-1/2 w-4 h-4 border-2 rounded-full transform -translate-x-1/2 mt-1.5 md:mt-0 z-10 transition-all duration-500 ${inView ? dotActiveClass : "border-zinc-700"} ${future ? "animate-pulse" : ""}`}
        style={{ backgroundColor: "var(--bg)" }}
      />

      <div className="hidden md:block md:w-1/2" />

      <div className={`pl-12 md:pl-0 md:w-1/2 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"} w-full`}>
        {/* Date badge row */}
        <div className={`flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider flex-wrap ${isEven ? "md:justify-end" : "md:justify-start"}`} style={{ color: "var(--ink-3)" }}>
          <span className={`flex items-center gap-1 px-2 py-0.5 rounded-full border ${badgeClass}`}>
            {isWork
              ? <Briefcase className={`w-3 h-3 ${iconColorClass}`} />
              : <GraduationCap className={`w-3 h-3 ${iconColorClass}`} />
            }
            {dateLabel}
          </span>

          {future && (
            <span className="px-2 py-0.5 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400 text-xs font-mono animate-pulse">
              {t.ui.startingSoon}
            </span>
          )}

          {inProgress && (
            <span className="px-2 py-0.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-xs font-mono">
              {t.ui.inProgress}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold mb-1" style={{ color: "var(--ink)" }}>{event.title}</h3>
        <h4 className="text-md mb-3 font-medium" style={{ color: "var(--ink-2)" }}>{event.organization}</h4>

        <p className="leading-relaxed text-sm" style={{ color: "var(--ink-3)" }}>
          {renderHighlights(event.description, event.highlights ?? [], highlightClass)}
        </p>

        {event.tags && event.tags.length > 0 && (
          <div className={`flex flex-wrap gap-1.5 mt-3 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
            {event.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-0.5 text-xs font-mono rounded"
                style={{ border: "1px solid var(--border)", backgroundColor: "var(--bg-2)", color: "var(--ink-2)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};
