import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import confetti from "canvas-confetti";
import { useLanguage } from "../context/LanguageContext";
import { useCV } from "../context/CVContext";
import { uiStrings } from "../i18n/ui";
import { siteStrings } from "../i18n/site";
import { gyroNeedsPermission, requestGyro, useFinePointer, useGyroActive, useMagnetic, useMediaQuery, useTilt } from "../lib/interaction";
import { isOngoing } from "../utils/dates";

const BIRTH_DATE = new Date(2003, 10, 7);
const EASE = [0.23, 1, 0.32, 1] as const;

function isBirthday(): boolean {
  const d = new Date();
  return d.getMonth() === BIRTH_DATE.getMonth() && d.getDate() === BIRTH_DATE.getDate();
}

export const Hero: React.FC = () => {
  const { t, lang } = useLanguage();
  const s = uiStrings(lang);
  const site = siteStrings(lang);
  const { profile, timeline } = t;
  const { openCV } = useCV();
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll out: the hero recedes (scale, blur, fade) as the page takes over
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.7], [1, 0.94]);
  const contentBlur = useTransform(scrollYProgress, [0, 0.7], ["blur(0px)", "blur(10px)"]);
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  // Only recede when the whole hero fits on screen; on phones it is taller than
  // the viewport and the info below the fold must stay readable while scrolling.
  const recede = useMediaQuery("(min-width: 768px)") && !reduce;

  const now = timeline.items.find((e) => e.type === "work" && isOngoing(e));
  const studying = timeline.items.find((e) => e.type === "education" && isOngoing(e));
  const linkedin = profile.socials.find((x) => x.platform === "LinkedIn");
  const email = profile.socials.find((x) => x.platform === "Email");
  const github = profile.socials.find((x) => x.platform === "GitHub");

  const facts = [
    now && { label: s.factNow, value: now.title, sub: now.organization },
    studying && { label: s.factStudying, value: studying.title, sub: studying.organization.split(",")[0] },
    profile.location && { label: s.factBased, value: profile.location, sub: null },
  ].filter(Boolean) as { label: string; value: string; sub: string | null }[];

  const words = s.statement.split(" ");

  useBirthdayConfetti();

  const reveal = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, filter: "blur(8px)", transform: "translateY(12px)" },
          animate: { opacity: 1, filter: "blur(0px)", transform: "translateY(0px)" },
          transition: { duration: 0.9, ease: EASE, delay },
        };

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center px-5 pb-28 pt-24 md:px-10 md:pb-16 md:pt-28"
    >
      <BirthdayToast message={t.ui.birthdayMessage} />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-10">
        <motion.div
          style={recede ? { opacity: contentOpacity, scale: contentScale, filter: contentBlur } : undefined}
          className="order-2 md:order-1 md:col-span-7"
        >
          <h1
            className="text-balance font-semibold"
            style={{
              fontSize: "clamp(2.375rem, 4.4vw, 4.25rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
              color: "var(--ink)",
            }}
          >
            {words.map((w, i) => (
              <motion.span
                key={`${lang}-${i}`}
                className="inline-block"
                initial={reduce ? false : { opacity: 0, filter: "blur(10px)", transform: "translateY(0.25em)" }}
                animate={{ opacity: 1, filter: "blur(0px)", transform: "translateY(0em)" }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.15 + i * 0.045 }}
              >
                {w}
                {i < words.length - 1 && " "}
              </motion.span>
            ))}
          </h1>

          <motion.p
            {...reveal(0.15 + words.length * 0.045)}
            className="mt-6 text-lg md:text-xl"
            style={{ color: "var(--ink-2)", letterSpacing: "-0.01em" }}
          >
            <span style={{ color: "var(--ink)" }} className="font-medium">{profile.name}</span>
            <span aria-hidden="true"> · </span>
            {profile.subtitle}
          </motion.p>

          <motion.dl
            {...reveal(0.3 + words.length * 0.045)}
            className="glass mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl sm:grid-cols-3"
            style={{ background: "var(--line)" }}
          >
            {facts.map((f) => (
              <div key={f.label} className="flex flex-col gap-1 px-4 py-3.5" style={{ background: "var(--glass)" }}>
                <dt className="font-mono text-[11px] uppercase tracking-[0.08em]" style={{ color: "var(--ink-3)" }}>
                  {f.label}
                </dt>
                <dd className="text-[15px] font-medium leading-snug" style={{ color: "var(--ink)" }}>
                  {f.value}
                  {f.sub && (
                    <span className="mt-0.5 block text-[13px] font-normal" style={{ color: "var(--ink-2)" }}>
                      {f.sub}
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </motion.dl>

          <motion.div {...reveal(0.42 + words.length * 0.045)} className="mt-8 flex flex-wrap items-center gap-3">
            <Magnetic>
              <button onClick={openCV} className="btn btn-solid">
                {s.viewCV}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </Magnetic>
            {linkedin && (
              <Magnetic>
                <a href={linkedin.url} target="_blank" rel="noopener noreferrer" className="btn btn-glass glass">
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  LinkedIn
                </a>
              </Magnetic>
            )}
            {email && (
              <Magnetic>
                <a href={email.url} className="btn btn-glass glass">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Email
                </a>
              </Magnetic>
            )}
            {github && (
              <Magnetic>
                <a
                  href={github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="btn btn-glass glass !w-[2.875rem] !px-0"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                </a>
              </Magnetic>
            )}
          </motion.div>
        </motion.div>

        <motion.div style={reduce ? undefined : { y: photoY }} className="order-1 flex flex-col items-start md:order-2 md:col-span-5 md:items-end">
          <Portrait src={profile.avatarUrl} alt={site.a11y.portrait} motionLabel={s.enableMotion} />
        </motion.div>
      </div>
    </section>
  );
};

const Portrait: React.FC<{ src: string; alt: string; motionLabel: string }> = ({ src, alt, motionLabel }) => {
  const reduce = useReducedMotion();
  const fine = useFinePointer();
  const gyroOn = useGyroActive();
  const [askGyro, setAskGyro] = useState(false);
  const { ref, rotateX, rotateY } = useTilt<HTMLDivElement>({ max: 7 });

  useEffect(() => {
    setAskGyro(!fine && !reduce && gyroNeedsPermission());
  }, [fine, reduce]);

  return (
    <div className="flex w-full flex-col items-start md:items-end" style={{ perspective: 1000 }}>
      <motion.div
        ref={ref}
        initial={reduce ? false : { opacity: 0, transform: "scale(0.96)", filter: "blur(12px)" }}
        animate={{ opacity: 1, transform: "scale(1)", filter: "blur(0px)" }}
        transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="glass-liquid specular w-[min(44vw,176px)] rounded-[26px] p-1.5 md:w-full md:max-w-[360px] md:rounded-[34px] md:p-2"
      >
        <img
          src={src}
          alt={alt}
          width={1023}
          height={1537}
          fetchPriority="high"
          className="aspect-[4/5] w-full rounded-[20px] object-cover object-[center_22%] md:rounded-[27px]"
          style={{ filter: "saturate(0.9)" }}
        />
      </motion.div>
      <AnimatePresence>
        {askGyro && !gyroOn && (
          <motion.button
            initial={{ opacity: 0, transform: "translateY(6px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={{ duration: 0.4, ease: EASE, delay: 1.2 }}
            onClick={async () => setAskGyro(!(await requestGyro()))}
            className="glass pressable mt-4 rounded-full px-3.5 py-1.5 text-xs font-medium"
            style={{ color: "var(--ink-2)" }}
          >
            {motionLabel}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

const Magnetic: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { ref, x, y } = useMagnetic<HTMLDivElement>(0.22);
  return (
    <motion.div ref={ref} style={{ x, y }} className="inline-flex">
      {children}
    </motion.div>
  );
};

function useBirthdayConfetti() {
  const fired = useRef(false);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!isBirthday() || fired.current || reduce) return;
    fired.current = true;
    const end = Date.now() + 3500;
    const colors = ["#0E0E10", "#8E8E97", "#D0D0D6", "#FFFFFF"];
    const frame = () => {
      confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors });
      confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  }, [reduce]);
}

const BirthdayToast: React.FC<{ message: string }> = ({ message }) => {
  const [show, setShow] = useState(isBirthday);
  useEffect(() => {
    if (!show) return;
    const id = setTimeout(() => setShow(false), 6000);
    return () => clearTimeout(id);
  }, [show]);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="status"
          initial={{ opacity: 0, transform: "translate(-50%, -8px)" }}
          animate={{ opacity: 1, transform: "translate(-50%, 0px)" }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          transition={{ duration: 0.4, ease: EASE, delay: 0.8 }}
          className="glass fixed left-1/2 top-20 z-[90] whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium md:top-24"
          style={{ color: "var(--ink)" }}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
