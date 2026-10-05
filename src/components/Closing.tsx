import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Github, Linkedin, Mail, Maximize2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useCV } from "../context/CVContext";
import { uiStrings } from "../i18n/ui";
import { siteStrings } from "../i18n/site";
import { useTilt } from "../lib/interaction";
import { cvLang } from "../utils/cv";
import { CVHTMLDocument } from "./CVHTMLDocument";
import { CVDownload } from "./CVDownload";
import { ContactForm } from "./ContactForm";

const EASE = [0.23, 1, 0.32, 1] as const;

export const Closing: React.FC = () => {
  const { lang, t } = useLanguage();
  const s = uiStrings(lang);
  const reduce = useReducedMotion();
  const titleRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: titleRef, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.86, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0.1, 1]);
  const blur = useTransform(scrollYProgress, [0, 0.8], ["blur(14px)", "blur(0px)"]);

  const socials = t.profile.socials;
  const { openCV } = useCV();

  const linkedin = socials.find((x) => x.platform === "LinkedIn");
  const email = socials.find((x) => x.platform === "Email");
  const github = socials.find((x) => x.platform === "GitHub");

  return (
    <section id="contact" aria-labelledby="closing-title" className="relative px-5 pb-36 md:px-10 md:pb-24">
      {/* The closing owns a full screen: statement, then the three ways to reach me */}
      <div ref={titleRef} className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center text-center">
        <motion.h2
          id="closing-title"
          style={reduce ? undefined : { scale, opacity, filter: blur }}
          className="text-balance font-semibold"
        >
          <span
            className="block"
            style={{ fontSize: "clamp(3rem, 9vw, 6rem)", lineHeight: 0.98, letterSpacing: "-0.04em", color: "var(--ink)" }}
          >
            {s.closingTitle}
          </span>
        </motion.h2>
        <motion.p
          initial={reduce ? false : { opacity: 0, transform: "translateY(12px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          className="mt-6 max-w-md text-lg"
          style={{ color: "var(--ink-2)" }}
        >
          {s.closingBody}
        </motion.p>
        <motion.div
          initial={reduce ? false : { opacity: 0, transform: "translateY(12px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <button onClick={openCV} className="btn btn-solid">
            {s.viewCV}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </button>
          {linkedin && (
            <a href={linkedin.url} target="_blank" rel="noopener noreferrer" className="btn btn-glass glass">
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
          )}
          {email && (
            <a href={email.url} className="btn btn-glass glass">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email
            </a>
          )}
          {github && (
            <a href={github.url} target="_blank" rel="noopener noreferrer" className="btn btn-glass glass">
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          )}
        </motion.div>
      </div>

      <div className="mx-auto grid max-w-6xl items-start gap-5 md:grid-cols-12">
        <CVCard />
        <ContactForm className="md:col-span-7" />
      </div>
    </section>
  );
};

const CV_W = 794;

const CVCard: React.FC = () => {
  const { lang } = useLanguage();
  const s = uiStrings(lang);
  const site = siteStrings(lang);
  const { openCV } = useCV();
  const reduce = useReducedMotion();
  const { ref, rotateX, rotateY } = useTilt<HTMLDivElement>({ max: 5 });

  return (
    <motion.div
      id="cv"
      initial={reduce ? false : { opacity: 0, transform: "translateY(20px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: EASE }}
      className="glass flex flex-col items-center gap-5 rounded-[28px] p-5 md:col-span-5 md:p-7"
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        style={{ rotateX, rotateY }}
        className="specular relative w-full max-w-[280px] overflow-hidden rounded-xl"
      >
        <button
          onClick={openCV}
          aria-label={site.a11y.openCV}
          className="group relative block w-full overflow-hidden rounded-xl text-left"
          style={{
            aspectRatio: "1 / 1.08",
            background: "#fff",
            // The page fades out like paper slipping under glass
            WebkitMaskImage: "linear-gradient(to bottom, #000 62%, transparent)",
            maskImage: "linear-gradient(to bottom, #000 62%, transparent)",
          }}
        >
          <ScaledCV lang={cvLang(lang)} />
          <span className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
            <span className="grid h-11 w-11 place-items-center rounded-full" style={{ background: "rgba(14,14,16,0.72)", color: "#fff", backdropFilter: "blur(6px)" }}>
              <Maximize2 className="h-4 w-4" aria-hidden="true" />
            </span>
          </span>
        </button>
      </motion.div>
      <div className="flex w-full flex-col items-center gap-3">
        <span className="text-sm" style={{ color: "var(--ink-3)" }}>{s.cvCaption}</span>
        <div className="flex flex-wrap justify-center gap-2.5">
          <button onClick={openCV} className="btn btn-solid">
            {s.viewCV}
          </button>
          <CVDownload />
        </div>
      </div>
    </motion.div>
  );
};

// Renders the real CV at A4 width and scales it to fit the card.
const ScaledCV: React.FC<{ lang: "en" | "es" }> = ({ lang }) => {
  const wrap = useRef<HTMLDivElement>(null);
  const [scale, setScale] = React.useState(0.36);
  React.useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setScale(e.contentRect.width / CV_W));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return (
    <div ref={wrap} className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
      <div style={{ width: CV_W, transform: `scale(${scale})`, transformOrigin: "top left" }}>
        <CVHTMLDocument lang={lang} padding={42} />
      </div>
    </div>
  );
};
