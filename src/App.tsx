import React from "react";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import { ConsentProvider } from "./context/ConsentContext";
import { CVProvider } from "./context/CVContext";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Timeline } from "./components/Timeline";
import { Closing } from "./components/Closing";
import { Footer } from "./components/Footer";
import { Cursor } from "./components/Cursor";
import { FlowBackground } from "./components/FlowBackground";
import { ConsentBanner } from "./components/ConsentBanner";
import { LegalPage } from "./components/LegalPage";
import { siteStrings } from "./i18n/site";
import { useRoute } from "./lib/router";
import { useAutoGyro } from "./lib/interaction";

function AppContent() {
  const route = useRoute();
  const { lang } = useLanguage();
  const s = siteStrings(lang);
  useAutoGyro();

  return (
    <div className="relative min-h-screen">
      <a href="#main" className="skip-link">{s.skipToContent}</a>
      <FlowBackground />
      <Cursor />
      <div className="relative" style={{ zIndex: 1 }}>
        {route === "home" ? (
          <>
            <Nav />
            <main id="main">
              <Hero />
              <About />
              <Projects />
              <Timeline />
              <Closing />
            </main>
          </>
        ) : (
          <main id="main">
            <LegalPage page={route} />
          </main>
        )}
        <Footer />
      </div>
      <ConsentBanner />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ConsentProvider>
          <CVProvider>
            <AppContent />
          </CVProvider>
        </ConsentProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
