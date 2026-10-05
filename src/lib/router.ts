import { useEffect, useState } from "react";
import { trackPageview } from "./analytics";

// Tiny hash router. Legal pages live at #/privacy etc. so they work on any
// static host without rewrite rules; plain #section anchors keep scrolling.
export type Route = "home" | "privacy" | "terms" | "cookies" | "refunds";

const ROUTES: Route[] = ["privacy", "terms", "cookies", "refunds"];

function parse(hash: string): Route {
  const m = hash.match(/^#\/([a-z]+)/);
  return m && (ROUTES as string[]).includes(m[1]) ? (m[1] as Route) : "home";
}

export function routeHref(route: Route): string {
  return route === "home" ? "#/" : `#/${route}`;
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parse(window.location.hash));

  useEffect(() => {
    const onChange = () => {
      const next = parse(window.location.hash);
      setRoute((prev) => {
        if (prev !== next) {
          window.scrollTo({ top: 0 });
          trackPageview(next === "home" ? "/" : `/${next}`);
        }
        return next;
      });
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return route;
}
