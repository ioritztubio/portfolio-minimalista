// Cookieless analytics via Umami (https://umami.is). No cookies, no localStorage,
// no personal data; IPs are only used to derive a daily-rotating anonymous hash.
// Still loaded only after consent, and never when the browser sends Do Not Track
// or Global Privacy Control.
//
// Configure in .env.local:
//   VITE_UMAMI_WEBSITE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
//   VITE_UMAMI_SRC=https://cloud.umami.is/script.js   (optional, for self-hosting)

declare global {
  interface Window {
    umami?: {
      track: (event?: string | ((props: Record<string, unknown>) => Record<string, unknown>), data?: Record<string, unknown>) => void;
    };
  }
}

const WEBSITE_ID = import.meta.env.VITE_UMAMI_WEBSITE_ID as string | undefined;
const SRC = (import.meta.env.VITE_UMAMI_SRC as string | undefined) ?? "https://cloud.umami.is/script.js";

let loaded = false;

function browserOptedOut(): boolean {
  const nav = navigator as Navigator & { globalPrivacyControl?: boolean };
  return nav.doNotTrack === "1" || nav.globalPrivacyControl === true;
}

export function loadAnalytics(): void {
  if (loaded || !WEBSITE_ID || browserOptedOut()) return;
  loaded = true;
  const s = document.createElement("script");
  s.defer = true;
  s.src = SRC;
  s.dataset.websiteId = WEBSITE_ID;
  s.dataset.doNotTrack = "true";
  // Hash routes are tracked manually in trackPageview()
  s.dataset.autoTrack = "true";
  document.head.appendChild(s);
}

export function trackEvent(name: string, data?: Record<string, unknown>): void {
  window.umami?.track(name, data);
}

export function trackPageview(path: string): void {
  window.umami?.track((props) => ({ ...props, url: path }));
}
