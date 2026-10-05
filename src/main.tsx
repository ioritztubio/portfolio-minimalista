import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
// Self-hosted fonts: no request to Google servers, so no visitor IP leaves the site.
import '@fontsource-variable/geist';
import '@fontsource-variable/geist-mono';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
