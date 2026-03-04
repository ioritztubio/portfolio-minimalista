import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { TimelineEvent } from "../data/types";
import { Briefcase, GraduationCap, ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const MONTH_NUM: Record<string, number> = {
  // English
  january: 1,
  february: 2,
  march: 3,
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
  november: 11,
  december: 12,
  // Spanish
  enero: 1,
  febrero: 2,
  marzo: 3,
  abril: 4,
  mayo: 5,
  junio: 6,
  julio: 7,
  agosto: 8,
  septiembre: 9,
  octubre: 10,
  noviembre: 11,
  diciembre: 12,
};

function parseDateStart(str: string): number {
  // "Present" / "Actualidad" → ranked highest
  if (/present|actualidad/i.test(str)) return 999999;
  const yearMatch = str.match(/\d{4}/);
  const year = yearMatch ? parseInt(yearMatch[0]) : 0;
  const month = str
    .toLowerCase()
    .split(/\s+/)
    .reduce<number>((acc, w) => acc || (MONTH_NUM[w] ?? 0), 0);
  return year * 100 + month;
}

function renderDescription(
  text: string,
  highlights: string[] = [],
  color: "blue" | "amber",
): React.ReactNode {
  if (!highlights.length) return text;
  const colorClass =
    color === "blue"
      ? "text-blue-400 font-semibold"
      : "text-amber-400 font-semibold";
  const escaped = highlights.map((h) =>
    h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  );
  const pattern = new RegExp(`(${escaped.join("|")})`, "gi");
  const parts = text.split(pattern);
  return parts.map((part, i) =>
    highlights.some((h) => h.toLowerCase() === part.toLowerCase()) ? (
      <span key={i} className={colorClass}>
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export const Timeline: React.FC = () => {
  const { t } = useLanguage();
  const { timeline } = t;
  const [showExtra, setShowExtra] = useState(false);

  const sorted = [...timeline.items].sort(
    (a, b) => parseDateStart(b.dateEnd) - parseDateStart(a.dateEnd),
  );
  const mainItems = sorted.filter((e) => !e.extra);
  const extraItems = sorted.filter((e) => e.extra);

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-white mb-6 tracking-tight">
        {timeline.sectionTitle}
      </h2>

      {/* Legend */}
      <div className="flex justify-center gap-6 mb-16 text-xs font-mono uppercase tracking-wider text-zinc-500">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block" />
          {t.lang === "es" ? "Laboral" : "Work"}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
          {t.lang === "es" ? "Formación" : "Education"}
        </span>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 transform md:-translate-x-1/2" />

        <div className="space-y-12">
          {mainItems.map((event, index) => (
            <TimelineItem key={index} event={event} index={index} />
          ))}
        </div>
      </div>

      {/* Extra experience toggle */}
      {extraItems.length > 0 && (
        <div className="mt-16 flex flex-col items-center gap-6">
          <button
            onClick={() => setShowExtra((v) => !v)}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 transition-all duration-300 text-sm font-medium"
          >
            <span>{showExtra ? t.ui.hideExtra : t.ui.showExtra}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                showExtra ? "rotate-180" : ""
              }`}
            />
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
                <p className="text-center text-xs font-mono uppercase tracking-widest text-zinc-600 mb-12">
                  {t.ui.extraExperienceTagline}
                </p>
                <div className="relative">
                  <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800/60 transform md:-translate-x-1/2" />
                  <div className="space-y-12">
                    {extraItems.map((event, i) => (
                      <TimelineItem
                        key={i}
                        event={event}
                        index={mainItems.length + i}
                      />
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

const TimelineItem: React.FC<{ event: TimelineEvent; index: number }> = ({
  event,
  index,
}) => {
  const isEven = index % 2 === 0;
  const isWork = event.type === "work";

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-80px 0px" });

  const dotActiveClass = isWork
    ? "border-blue-500 shadow-[0_0_8px_2px_rgba(59,130,246,0.4)] scale-125"
    : "border-amber-500 shadow-[0_0_8px_2px_rgba(245,158,11,0.4)] scale-125";

  const iconColorClass = isWork ? "text-blue-400" : "text-amber-400";
  const badgeClass = isWork
    ? "bg-blue-500/10 text-blue-400 border-blue-500/30"
    : "bg-amber-500/10 text-amber-400 border-amber-500/30";

  const isSingleMonth = event.dateStart === event.dateEnd;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`relative flex flex-col md:flex-row ${isEven ? "md:flex-row-reverse" : ""} items-start md:items-center group`}
    >
      {/* Checkpoint Dot */}
      <div
        className={`absolute left-4 md:left-1/2 w-4 h-4 bg-zinc-900 border-2 rounded-full transform -translate-x-1/2 mt-1.5 md:mt-0 z-10 transition-all duration-500 ${
          inView ? dotActiveClass : "border-zinc-700"
        }`}
      />

      {/* Spacer for desktop alignment */}
      <div className="hidden md:block md:w-1/2" />

      {/* Content */}
      <div
        className={`pl-12 md:pl-0 md:w-1/2 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"} w-full`}
      >
        <div className="bg-transparent p-0">
          {/* Date + type badge */}
          <div
            className={`flex items-center gap-2 mb-2 text-zinc-500 text-xs font-mono uppercase tracking-wider ${isEven ? "md:justify-end" : "md:justify-start"}`}
          >
            <span
              className={`flex items-center gap-1 px-2 py-0.5 rounded-full border ${badgeClass}`}
            >
              {isWork ? (
                <Briefcase className={`w-3 h-3 ${iconColorClass}`} />
              ) : (
                <GraduationCap className={`w-3 h-3 ${iconColorClass}`} />
              )}
              {isSingleMonth
                ? event.dateStart
                : `${event.dateStart} — ${event.dateEnd}`}
            </span>
          </div>

          <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
          <h4 className="text-md text-zinc-400 mb-3 font-medium">
            {event.organization}
          </h4>

          <p className="text-zinc-500 leading-relaxed text-sm">
            {renderDescription(
              event.description,
              event.highlights,
              isWork ? "blue" : "amber",
            )}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
