import React from "react";
import { motion } from "motion/react";
import { Project } from "../data/types";
import { ExternalLink, Github, Lock, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const Projects: React.FC = () => {
  const { t } = useLanguage();
  const { projects } = t;

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          {projects.sectionTitle}
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          {projects.sectionSubtitle}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.items.map((project, index) =>
          project.comingSoon ? (
            <ComingSoonCard key={index} project={project} index={index} />
          ) : (
            <ProjectCard key={index} project={project} index={index} />
          ),
        )}
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => {
  const { t } = useLanguage();
  const { projects } = t;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 mb-6">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0"
          referrerPolicy="no-referrer"
        />

        {/* Overlay Actions (Desktop) */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/40 backdrop-blur-[2px]">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white text-black text-sm font-semibold rounded-full hover:scale-105 transition-transform"
              title={projects.viewDemo}
            >
              <ExternalLink className="w-4 h-4" />
              {projects.viewDemo}
            </a>
          )}
          {project.codePrivate ? (
            <span
              className="flex items-center gap-2 px-4 py-2 bg-zinc-900/90 text-zinc-400 text-sm font-semibold rounded-full border border-zinc-700 cursor-default"
              title={projects.privateCodeTooltip}
            >
              <Lock className="w-4 h-4" />
              {projects.privateCodeBadge}
            </span>
          ) : project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white text-sm font-semibold rounded-full hover:scale-105 transition-transform border border-zinc-700"
              title={projects.viewCode}
            >
              <Github className="w-4 h-4" />
              {projects.viewCode}
            </a>
          ) : null}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-bold text-white group-hover:text-zinc-200 transition-colors">
            {project.title}
          </h3>

          {/* Mobile Links */}
          <div className="flex md:hidden gap-3 items-center">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
            {project.codePrivate ? (
              <span
                className="text-zinc-600"
                title={projects.privateCodeTooltip}
              >
                <Lock className="w-5 h-5" />
              </span>
            ) : project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white"
              >
                <Github className="w-5 h-5" />
              </a>
            ) : null}
          </div>
        </div>

        {/* Private code note */}
        {project.codePrivate && (
          <p className="text-xs text-zinc-600 mb-3 flex items-center gap-1.5 font-mono">
            <Lock className="w-3 h-3" />
            {project.codePrivateNote ?? projects.privateCodeTooltip}
          </p>
        )}

        <p className="text-zinc-400 leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-900/50 border border-zinc-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ComingSoonCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col h-full"
    >
      {/* Image placeholder with grid pattern */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-900 border border-dashed border-zinc-700 mb-6 flex items-center justify-center">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative z-10 flex flex-col items-center gap-3 text-zinc-600">
          <Sparkles className="w-8 h-8 animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-widest">
            {t.ui.comingSoonBadge}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-bold text-zinc-500 group-hover:text-zinc-400 transition-colors">
            {project.title}
          </h3>
          <span className="px-2 py-0.5 text-xs font-mono rounded-full border border-zinc-700 text-zinc-600 bg-zinc-900/50 whitespace-nowrap ml-2">
            {t.ui.comingSoonBadge}
          </span>
        </div>

        <p className="text-zinc-600 leading-relaxed mb-6 flex-grow italic">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};
