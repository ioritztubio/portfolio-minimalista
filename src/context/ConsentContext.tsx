import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { loadAnalytics } from "../lib/analytics";

// Bump the version whenever the purposes listed in the banner change,
// so every visitor is asked again (GDPR: consent must be specific).
const STORAGE_KEY = "consent.v1";

export interface ConsentState {
  analytics: boolean;
  decidedAt: string;
}

interface ConsentContextValue {
  consent: ConsentState | null;
  bannerOpen: boolean;
  accept: () => void;
  reject: () => void;
  openSettings: () => void;
}

const ConsentContext = createContext<ConsentContextValue | null>(null);

function readStored(): ConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ConsentState) : null;
  } catch {
    return null;
  }
}

export const ConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [consent, setConsent] = useState<ConsentState | null>(readStored);
  const [bannerOpen, setBannerOpen] = useState(() => readStored() === null);

  useEffect(() => {
    if (consent?.analytics) loadAnalytics();
  }, [consent]);

  const decide = useCallback((analytics: boolean) => {
    const next = { analytics, decidedAt: new Date().toISOString() };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* storage blocked: the choice still applies for this visit */
    }
    const revoked = consent?.analytics && !analytics;
    setConsent(next);
    setBannerOpen(false);
    // The analytics script cannot be unloaded once running; a reload guarantees it stops.
    if (revoked) window.location.reload();
  }, [consent]);

  const value: ConsentContextValue = {
    consent,
    bannerOpen,
    accept: () => decide(true),
    reject: () => decide(false),
    openSettings: () => setBannerOpen(true),
  };

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
};

export const useConsent = (): ConsentContextValue => {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used inside ConsentProvider");
  return ctx;
};
