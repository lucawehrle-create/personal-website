// Liest Zeiträume wie im Lebenslauf („2023 – 2024“, „Okt 2025 – März 2026“, „Aug – Dez 2024“,
// „Mitte 2022“, „Ende 2022“, „2026 – heute“, „seit 2026“) und rechnet sie in Monate um
// (Jahr × 12 + Monat, Ende exklusiv). Ohne Monatsangabe zählt ein Jahr als ganzes Jahr –
// diese Grenzen sind als ungenau markiert, damit der Zeitstrahl sie weich auslaufen lassen kann.

const MONTHS = ['jan', 'feb', 'mär', 'apr', 'mai', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dez'];
// Ungefähre Angaben: als Beginn bzw. als Ende eines Zeitraums gelesen
const VAGUE: Record<string, { start: number; end: number }> = {
  anfang: { start: 0, end: 2 },
  mitte: { start: 5, end: 5 },
  ende: { start: 9, end: 11 },
};

export type Span = { start: number; end: number; ongoing: boolean; exactStart: boolean; exactEnd: boolean };

type Point = { year?: number; month?: number };

const parsePoint = (text: string, side: 'start' | 'end'): Point => {
  const point: Point = {};
  for (const token of text.trim().toLowerCase().split(/\s+/)) {
    if (/^\d{4}$/.test(token)) point.year = Number(token);
    else if (VAGUE[token]) point.month = VAGUE[token][side];
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

  const from = parsePoint(first, 'start');
  const to = second && !ongoing ? parsePoint(second, 'end') : parsePoint(first, 'end');
  from.year ??= to.year;

  if (from.year === undefined || to.year === undefined) throw new Error(`Zeitraum nicht lesbar: „${period}“`);

  const start = from.year * 12 + (from.month ?? 0);
  const end = ongoing ? now : to.year * 12 + (to.month ?? 11) + 1;
  return { start, end, ongoing, exactStart: from.month !== undefined, exactEnd: ongoing || to.month !== undefined };
}
