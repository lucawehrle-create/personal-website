// Liest Zeiträume wie im Lebenslauf („2023 – 2024“, „Okt 2025 – März 2026“, „Aug – Dez 2024“,
// „2026 – heute“, „seit 2026“) und rechnet sie in Monate um (Jahr × 12 + Monat, Ende exklusiv).
// Ohne Monatsangabe zählt ein Jahr als ganzes Jahr.

const MONTHS = ['jan', 'feb', 'mär', 'apr', 'mai', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dez'];

export type Span = { start: number; end: number; ongoing: boolean };

type Point = { year?: number; month?: number };

const parsePoint = (text: string): Point => {
  const point: Point = {};
  for (const token of text.trim().toLowerCase().split(/\s+/)) {
    if (/^\d{4}$/.test(token)) point.year = Number(token);
    else {
      const month = MONTHS.indexOf(token.slice(0, 3));
      if (month >= 0) point.month = month;
    }
  }
  return point;
};

export const monthIndex = (date: Date) => date.getFullYear() * 12 + date.getMonth();

export function parsePeriod(period: string, today = new Date()): Span {
  const now = monthIndex(today) + 1;
  const text = period.trim().toLowerCase();
  const [first, second] = text.replace(/^seit\s+/, '').split(/\s*[–-]\s*/);
  const ongoing = text.startsWith('seit') || second === 'heute';

  const from = parsePoint(first);
  const to = second && !ongoing ? parsePoint(second) : from;
  from.year ??= to.year;

  if (from.year === undefined || to.year === undefined) throw new Error(`Zeitraum nicht lesbar: „${period}“`);

  const start = from.year * 12 + (from.month ?? 0);
  const end = ongoing ? now : to.year * 12 + (to.month ?? 11) + 1;
  return { start, end, ongoing };
}
