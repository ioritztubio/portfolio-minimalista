import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { Button } from "./ui/Button";
import { Github, Linkedin, Mail } from "lucide-react";
import confetti from "canvas-confetti";
import { CVDownloadButton } from "./CVDownloadButton";

const BIRTH_DATE = new Date(2003, 10, 7); // November 7, 2003 (month is 0-indexed)

function getAge(): number {
  const today = new Date();
  let age = today.getFullYear() - BIRTH_DATE.getFullYear();
  const monthDiff = today.getMonth() - BIRTH_DATE.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < BIRTH_DATE.getDate())
  ) {
    age--;
  }
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

  useEffect(() => {
    if (birthday && !confettiFired.current) {
      confettiFired.current = true;
      const duration = 4000;
      const end = Date.now() + duration;
      const frame = () => {
        confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 } });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
        });
        if (Date.now() < end) requestAnimationFrame(frame);
      };
      frame();
    }
  }, [birthday]);

  const iconMap: Record<string, React.ElementType> = {
    GitHub: Github,
    LinkedIn: Linkedin,
    Email: Mail,
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 pt-20 pb-10">
      {/* Birthday banner */}
      <AnimatePresence>
        {birthday && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-5 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-white text-black text-sm font-semibold rounded-full shadow-lg whitespace-nowrap"
          >
            {t.ui.birthdayMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-8"
      >
        <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-2 border-zinc-800 shadow-2xl">
          <img
            src={profile.avatarUrl}
            alt={profile.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4"
      >
        {profile.name}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="text-xl md:text-2xl text-zinc-400 mb-8 font-light"
      >
        {profile.subtitle}
      </motion.p>

      {/* About */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="max-w-2xl mx-auto mb-10 space-y-3 text-zinc-400 leading-relaxed text-base"
      >
        {profile.about.map((line, index) => (
          <p key={index}>{line.replace("{age}", String(age))}</p>
        ))}
      </motion.div>

      {/* Social links + CV download */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="flex flex-wrap justify-center gap-4"
      >
        {profile.socials.map((social) => {
          const Icon = iconMap[social.platform] ?? Mail;
          return (
            <Button key={social.platform} href={social.url} variant="outline">
              <Icon className="w-4 h-4 mr-2" />
              {social.label}
            </Button>
          );
        })}

        {/* <CVDownloadButton /> */}
      </motion.div>
    </section>
  );
};
