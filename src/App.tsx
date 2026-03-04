import React from "react";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { Hero } from "./components/Hero";
import { Timeline } from "./components/Timeline";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { CVDownloadButton } from "./components/CVDownloadButton";

function TopBar() {
  const { t, toggleLang } = useLanguage();
  return (
    <div className="fixed top-5 right-5 z-50 flex items-center gap-2">
      <CVDownloadButton />
      <button
        onClick={toggleLang}
        className="px-3 py-1.5 text-xs font-mono font-semibold text-zinc-400 border border-zinc-700 rounded-md hover:border-zinc-400 hover:text-white transition-all duration-200 bg-[#0a0a0a]/80 backdrop-blur-sm"
        aria-label="Switch language"
      >
        {t.ui.langToggle}
      </button>
    </div>
  );
}

function AppContent() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-200 font-sans selection:bg-white selection:text-black">
      <TopBar />
      <main className="max-w-5xl mx-auto w-full">
        <Hero />
        <Projects />
        <Timeline />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
