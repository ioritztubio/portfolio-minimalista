import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 text-center text-zinc-600 text-sm">
      <p>© {new Date().getFullYear()} Minimalist Portfolio. Built with React & Tailwind.</p>
    </footer>
  );
};
