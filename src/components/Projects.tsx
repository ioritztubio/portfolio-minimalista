import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Github, Lock } from "lucide-react";
import { Project } from "../data/types";
import { useLanguage } from "../context/LanguageContext";
import { uiStrings } from "../i18n/ui";
import { siteStrings } from "../i18n/site";
import { useCinematic, useTilt } from "../lib/interaction";

const EASE = [0.23, 1, 0.32, 1] as const;

export const Projects: React.FC = () => {
  const { t } = useLanguage();
  const { projects } = t;
  const reduce = useReducedMotion();
  const total = projects.items.length;

  return (
    <section id="projects" aria-labelledby="projects-title" className="relative px-5 pt-28 md:px-10 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={reduce ? false : { opacity: 0, filter: "blur(8px)", transform: "translateY(16px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)", transform: "translateY(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="max-w-3xl"
        >
          <h2
            id="projects-title"
            className="font-semibold"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4.25rem)", lineHeight: 1.02, letterSpacing: "-0.035em", color: "var(--ink)" }}
          >
            {projects.sectionTitle}
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed" style={{ color: "var(--ink-2)" }}>
            {projects.sectionSubtitle}
          </p>
        </motion.div>
      </div>

      <div className="mt-10 md:mt-0">
        {projects.items.map((p, i) =>
          p.comingSoon ? (
            <ComingSoon key={p.title} project={p} index={i} total={total} />
          ) : (
            <ProjectStage key={p.title} project={p} index={i} total={total} />
          ),
        )}
      </div>
    </section>
  );
};

// Pinned stage: the card grows into place, the screenshot settles, then details arrive.
const ProjectStage: React.FC<{ project: Project; index: number; total: number }> = ({ project, index, total }) => {
  const { t, lang } = useLanguage();
  const s = uiStrings(lang);
  const site = siteStrings(lang);
  const reduce = useReducedMotion();
  const pinned = useCinematic() && !reduce;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });

  const scale = useTransform(scrollYProgress, [0, 0.45], [0.84, 1]);
  const radius = useTransform(scrollYProgress, [0, 0.45], [56, 32]);
  const imgScale = useTransform(scrollYProgress, [0, 0.55], [1.18, 1]);
  const detailOpacity = useTransform(scrollYProgress, [0.4, 0.62], [0, 1]);
  const detailBlur = useTransform(scrollYProgress, [0.4, 0.62], ["blur(8px)", "blur(0px)"]);
  const detailY = useTransform(scrollYProgress, [0.4, 0.62], [24, 0]);

  const { ref: tiltRef, rotateX, rotateY } = useTilt<HTMLDivElement>({ max: 3 });
  const host = project.demoUrl ? new URL(project.demoUrl).host : null;

  return (
    <div ref={ref} className={pinned ? "relative h-[200vh]" : "relative py-6"}>
      <div className={pinned ? "sticky top-0 flex h-screen items-center" : ""}>
        <motion.article
          style={pinned ? { scale, borderRadius: radius } : undefined}
          initial={pinned || reduce ? false : { opacity: 0, transform: "translateY(24px)" }}
          whileInView={pinned ? undefined : { opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="glass mx-auto grid w-full max-w-6xl overflow-hidden rounded-[28px] md:min-h-[60vh] md:grid-cols-12"
        >
          {/* Visual */}
          <div className="relative flex items-center justify-center p-5 md:col-span-7 md:p-10" style={{ perspective: 1200 }}>
            <motion.div
              ref={tiltRef}
              style={{ rotateX, rotateY }}
              className="specular relative w-full max-w-[560px] overflow-hidden rounded-2xl"
            >
              <div
                className="flex items-center gap-2 px-3.5 py-2.5"
                style={{ background: "var(--glass-strong)", borderBottom: "1px solid var(--line)" }}
                aria-hidden="true"
              >
                <span className="flex gap-1.5">
                  {[0, 1, 2].map((d) => (
                    <span key={d} className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--line-2)" }} />
                  ))}
                </span>
                {host && (
                  <span className="mx-auto rounded-md px-3 py-0.5 font-mono text-[11px]" style={{ background: "var(--line)", color: "var(--ink-3)" }}>
                    {host}
                  </span>
                )}
              </div>
              <div className="overflow-hidden" style={{ boxShadow: "var(--glass-shadow)" }}>
                <motion.img
                  src={project.imageUrl}
                  alt={`${site.a11y.screenshot} ${project.title}`}
                  width={583}
                  height={424}
                  loading="lazy"
                  style={pinned ? { scale: imgScale } : undefined}
                  className="block w-full"
                />
              </div>
            </motion.div>
          </div>

          {/* Details */}
          <motion.div
            style={pinned ? { opacity: detailOpacity, filter: detailBlur, y: detailY } : undefined}
            className="flex flex-col justify-center gap-5 p-6 pt-1 md:col-span-5 md:p-10 md:pl-2"
          >
            <span className="tabular font-mono text-xs" style={{ color: "var(--ink-3)" }}>
              {s.projectCount(index + 1, total)}
            </span>
            <h3 className="text-3xl font-semibold md:text-[2.5rem]" style={{ letterSpacing: "-0.03em", lineHeight: 1.05, color: "var(--ink)" }}>
              {project.title}
            </h3>
            <p className="text-[15px] leading-relaxed" style={{ color: "var(--ink-2)" }}>
              {project.description}
            </p>
            {project.note && (
              <p className="text-[13px]" style={{ color: "var(--ink-3)" }}>
                {project.note}
              </p>
            )}
            <ul className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full px-2.5 py-1 font-mono text-[11px]"
                  style={{ background: "var(--line)", color: "var(--ink-2)" }}
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-solid">
                  {t.projects.viewDemo}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-glass glass">
                  <Github className="h-4 w-4" aria-hidden="true" />
                  {t.projects.viewCode}
                </a>
              )}
              {project.codePrivate && (
                <span className="inline-flex items-center gap-1.5 text-[13px]" style={{ color: "var(--ink-3)" }} title={t.projects.privateCodeTooltip}>
                  <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                  {t.projects.privateCodeBadge}
                </span>
              )}
            </div>
          </motion.div>
        </motion.article>
      </div>
    </div>
  );
};

const ComingSoon: React.FC<{ project: Project; index: number; total: number }> = ({ project, index, total }) => {
  const { t, lang } = useLanguage();
  const s = uiStrings(lang);
  const reduce = useReducedMotion();
  return (
    <div className="px-0 py-6 md:py-10">
      <motion.article
        initial={reduce ? false : { opacity: 0, filter: "blur(8px)", transform: "translateY(24px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)", transform: "translateY(0px)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: EASE }}
        className="glass relative mx-auto flex w-full max-w-6xl flex-col gap-4 overflow-hidden rounded-[28px] p-6 md:flex-row md:items-end md:justify-between md:gap-12 md:p-10"
      >
        <div className="max-w-2xl">
          <span className="tabular font-mono text-xs" style={{ color: "var(--ink-3)" }}>
            {s.projectCount(index + 1, total)}
          </span>
          <h3 className="mt-3 text-2xl font-semibold md:text-3xl" style={{ letterSpacing: "-0.025em", color: "var(--ink)" }}>
            {project.title}
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "var(--ink-2)" }}>
            {project.description}
          </p>
        </div>
        <span className="relative inline-flex shrink-0 items-center gap-2 self-start rounded-full px-3 py-1.5 text-[13px] font-medium md:self-auto" style={{ background: "var(--line)", color: "var(--ink)" }}>
          <span className="relative flex h-2 w-2">
            {!reduce && <span className="absolute inset-0 animate-ping rounded-full opacity-60" style={{ background: "var(--ink-3)" }} />}
            <span className="relative h-2 w-2 rounded-full" style={{ background: "var(--ink-2)" }} />
          </span>
          {t.ui.comingSoonBadge}
        </span>
      </motion.article>
    </div>
  );
};
