import React, { createContext, useContext, useState } from "react";
import { CVModal } from "../components/CVModal";

// The CV viewer is the site's primary action, reachable from the hero, the nav and the closing.
const CVContext = createContext<{ openCV: () => void } | null>(null);

export const CVProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <CVContext.Provider value={{ openCV: () => setOpen(true) }}>
      {children}
      <CVModal open={open} onClose={() => setOpen(false)} />
    </CVContext.Provider>
  );
};

export const useCV = () => {
  const ctx = useContext(CVContext);
  if (!ctx) throw new Error("useCV must be used inside CVProvider");
  return ctx;
};
