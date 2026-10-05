import { TimelineEvent } from "../data/types";

const MONTH_NUM: Record<string, number> = {
  january: 1, february: 2, march: 3, april: 4, may: 5, june: 6,
  july: 7, august: 8, september: 9, october: 10, november: 11, december: 12,
  enero: 1, febrero: 2, marzo: 3, abril: 4, mayo: 5, junio: 6,
  julio: 7, agosto: 8, septiembre: 9, octubre: 10, noviembre: 11, diciembre: 12,
  janvier: 1, février: 2, mars: 3, avril: 4, mai: 5, juin: 6,
  juillet: 7, août: 8, septembre: 9, octobre: 10, novembre: 11, décembre: 12,
  urtarrila: 1, otsaila: 2, martxoa: 3, apirila: 4, maiatza: 5, ekaina: 6,
  uztaila: 7, abuztua: 8, iraila: 9, urria: 10, azaroa: 11, abendua: 12,
};

export const PRESENT = 999999;

/** "July 2025" → 202507; "Present" (any language) → PRESENT; unknown → 0. */
export function parseDateVal(str: string): number {
  if (/present|pr[eé]sent|actualidad|gaur egun|orain/i.test(str)) return PRESENT;
  const yearMatch = str.match(/\d{4}/);
  const year = yearMatch ? parseInt(yearMatch[0]) : 0;
  const words = str.toLowerCase().split(/\s+/);
  const month = words.reduce<number>((acc, w) => acc || MONTH_NUM[w] || 0, 0);
  return year * 100 + month;
}

export function yearOf(str: string): string | null {
  return str.match(/\d{4}/)?.[0] ?? null;
}

function currentYearMonth(): number {
  const now = new Date();
  return now.getFullYear() * 100 + (now.getMonth() + 1);
}

export function isFuture(str: string): boolean {
  const val = parseDateVal(str);
  return val !== 0 && val !== PRESENT && val > currentYearMonth();
}

/** Started already and not finished yet (including open-ended "Present"). */
export function isOngoing(e: Pick<TimelineEvent, "dateStart" | "dateEnd">): boolean {
  const now = currentYearMonth();
  const start = parseDateVal(e.dateStart);
  return start !== 0 && start <= now && parseDateVal(e.dateEnd) >= now;
}
