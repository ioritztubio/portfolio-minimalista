import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Timeline } from "./components/Timeline";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Cursor } from "./components/Cursor";

function AppContent() {
  return (
    <div
      className="min-h-screen font-sans selection:bg-white selection:text-black"
      style={{ backgroundColor: "var(--bg)", color: "var(--ink)" }}
    >
      <Cursor />
      <Header />
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
