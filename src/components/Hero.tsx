import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { Button } from "./ui/Button";
import { Github, Linkedin, Mail, MapPin, X } from "lucide-react";
import confetti from "canvas-confetti";
import { renderHighlights } from "../utils/highlights";

const BIRTH_DATE = new Date(2003, 10, 7);

function getAge(): number {
  const today = new Date();
  let age = today.getFullYear() - BIRTH_DATE.getFullYear();
  const m = today.getMonth() - BIRTH_DATE.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < BIRTH_DATE.getDate())) age--;
  return age;
}

function isBirthday(): boolean {
  const today = new Date();
  return (
    today.getMonth() === BIRTH_DATE.getMonth() &&
    today.getDate() === BIRTH_DATE.getDate()
  );
}

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { profile } = t;
  const age = getAge();
  const birthday = isBirthday();
  const confettiFired = useRef(false);
  const [lightbox, setLightbox] = useState(false);

  useEffect(() => {
    if (birthday && !confettiFired.current) {
      confettiFired.current = true;
      const duration = 4000;
      const end = Date.now() + duration;
      const frame = () => {
        confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 } });
        confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 } });
        if (Date.now() < end) requestAnimationFrame(frame);
      };
      frame();
    }
  }, [birthday]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const iconMap: Record<string, React.ElementType> = {
    GitHub: Github,
    LinkedIn: Linkedin,
    Email: Mail,
  };

  const highlights = profile.aboutHighlights ?? [];

  return (
    <section id="about" className="px-4 pt-16 pb-20">
      <AnimatePresence>
        {birthday && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-white text-black text-sm font-semibold rounded-full shadow-lg whitespace-nowrap"
          >
            {t.ui.birthdayMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16 items-center">
        {/* Left: text — second in DOM but first visually on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:col-span-3 md:order-first flex flex-col items-center md:items-start text-center md:text-left"
        >
          {/* Subtitle + location row */}
          <div className="flex flex-col items-center md:items-start gap-1 mb-4">
            <p className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--accent)" }}>
              {profile.subtitle}
            </p>
            {profile.location && (
              <span className="flex items-center gap-1 font-mono text-xs" style={{ color: "var(--ink-3)" }}>
                <MapPin className="w-3 h-3" />
                {profile.location}
              </span>
            )}
          </div>

          {/* Name */}
          <h1
            className="text-5xl md:text-7xl font-bold mb-8 leading-none"
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              letterSpacing: "-0.01em",
              color: "var(--ink)",
            }}
          >
            {profile.name}
          </h1>

          {/* About — left accent bar */}
          <div
            className="border-l-2 pl-5 mb-8 max-w-xl space-y-3 text-left"
            style={{ borderColor: "var(--accent)", opacity: 0.95 }}
          >
            {profile.about.map((line, i) => {
              const text = line.replace("{age}", String(age));
              const isLead = i === 0;
              return (
                <p
                  key={i}
                  className={isLead ? "font-medium text-base md:text-lg leading-relaxed" : "text-sm leading-relaxed"}
                  style={{ color: isLead ? "var(--ink)" : "var(--ink-2)" }}
                >
                  {renderHighlights(text, highlights, "font-semibold text-[#E8A94C]")}
                </p>
              );
            })}
          </div>

          {/* Social links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {profile.socials.map((social) => {
              const Icon = iconMap[social.platform] ?? Mail;
              return (
                <Button key={social.platform} href={social.url} variant="outline">
                  <Icon className="w-4 h-4 mr-2" />
                  {social.label}
                </Button>
              );
            })}
          </div>
        </motion.div>

        {/* Avatar — first in DOM = above text on mobile; moved right on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="md:col-span-2 md:order-last flex justify-center md:justify-end"
        >
          <button
            onClick={() => setLightbox(true)}
            className="group relative overflow-hidden
              w-32 rounded-full
              md:w-full md:max-w-[290px] md:rounded-[10px_10px_0_0]
              [aspect-ratio:1] md:[aspect-ratio:3/4]"
            aria-label="Enlarge photo"
          >
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              className="w-full h-full object-cover object-[center_15%] md:object-center group-hover:scale-105 transition-transform duration-500"
            />
            {/* Bottom vignette — desktop only */}
            <div
              className="absolute inset-0 pointer-events-none hidden md:block"
              style={{ background: "linear-gradient(to bottom, transparent 50%, var(--bg) 100%)" }}
            />
          </button>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ backgroundColor: "rgba(13,11,8,0.9)", backdropFilter: "blur(8px)" }}
            onClick={() => setLightbox(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative"
              style={{ maxWidth: "340px", width: "100%" }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                className="w-full shadow-2xl"
                style={{ borderRadius: "14px" }}
              />
              <button
                onClick={() => setLightbox(false)}
                className="absolute top-3 right-3 p-1.5 rounded-full transition-colors"
                style={{ backgroundColor: "var(--bg-2)", color: "var(--ink)" }}
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
