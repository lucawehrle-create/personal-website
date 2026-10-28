import type { ImageMetadata } from 'astro';
import gemuesegrussImage from '../assets/projects/gemuesegruss.webp';
import mindfulscreenImage from '../assets/projects/mindfulscreen.webp';

/**
 * Alle Inhalte der Website an einem Ort.
 * Texte, Projekte, Werdegang und Kontaktdaten werden hier gepflegt –
 * die Komponenten unter src/components lesen nur aus dieser Datei.
 *
 * *Sternchen* markieren in Fließtexten Wörter, die in der Akzentfarbe erscheinen.
 */

export const site = {
  name: 'Luca Wehrle',
  // Schreibweise, unter der dich Leute ebenfalls suchen (nur für Suchmaschinen).
  alternateName: 'Luca Werle',
  url: 'https://lucawehrle.de',
  title: 'Luca Wehrle – Product Builder & Creator',
  description:
    'Business Student in Mannheim, Product Builder und Creator ungewöhnlicher Side Projects. Ich baue digitale Produkte, optimiere Systeme und teste merkwürdig kreative Geschäftsideen.',
  email: 'luca.wehrle@gmail.com',
  location: 'Mannheim',
  timeZone: 'Europe/Berlin',
  linkedin: 'https://www.linkedin.com/in/luca-wehrle-8112b8184/',
};

// Reihenfolge wie auf der Seite.
export const nav = [
  { href: '#projekte', label: 'projekte', short: 'projekte' },
  { href: '#ueber', label: 'über mich', short: 'über' },
  { href: '#werdegang', label: 'werdegang', short: 'werdegang' },
  { href: '#kontakt', label: 'kontakt', short: 'kontakt' },
];

export const hero = {
  label: 'portfolio 2026',
  columns: [
    { label: 'tldr', text: 'Business Student. Product Builder. Creator of Unusual Side Projects.' },
    {
      label: 'studium & praxis',
      text: 'BWL an der Universität Mannheim mit Fokus Finance & Digital. Modern Work Systems bei der Würth Group.',
    },
    {
      label: 'nebenbei',
      text: 'Ich verschicke Kartoffeln mit Botschaft und baue Fokus-Systeme in Notion.',
    },
  ],
  tagline: 'Logik trifft auf Experimentierfreude.',
};

export const statement =
  'Ich baue digitale Produkte, optimiere Systeme und teste *merkwürdig* *kreative* Geschäftsideen. *Logik* trifft auf *Experimentierfreude* – und manchmal auf *Kartoffeln.*';

export type Project = {
  name: string;
  category: string;
  description: string;
  metric: { value: string; label: string };
  tags: string[];
  href: string;
  // Vorschaubild im Seitenverhältnis 16:10, liegt in src/assets/projects/.
  image: ImageMetadata;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    name: 'GemüseGruß',
    category: 'E-Commerce · Viral',
    description:
      'E-Commerce, der eigentlich ein Meme ist – aber funktioniert: personalisierte Kartoffeln mit Grußbotschaft. Gebaut auf Shopify, gewachsen durch virales Marketing und UGC-Kampagnen.',
    metric: { value: '1.000+', label: 'Bestellungen' },
    tags: ['Shopify', 'Marketing', 'UGC', 'Logistik'],
    href: 'https://www.gemuesegruss.de/',
    image: gemuesegrussImage,
    imageAlt: 'Geöffneter Versandkarton mit einer Kartoffel, auf der „Alles Gute!“ steht, daneben eine Grußkarte',
  },
  {
    name: 'Mindfulscreen OS',
    category: 'Digital Health · Productivity',
    description:
      'Digital-Detox- und Deep-Work-System für Gründer und High-Performer: 21-Tage-Kurs, Screen-Time-Rechner, Pomodoro-System und Fokus-Tracker – komplett in Notion.',
    metric: { value: '21', label: 'Tage Programm' },
    tags: ['Notion', 'UX', 'AI-Integration', 'Content'],
    href: 'https://mindfulscreen.com/',
    image: mindfulscreenImage,
    imageAlt:
      'Mindfulscreen-OS-Dashboard mit 21-Tage-Fortschritt, Pomodoro-Timer und Fokus-Tracker, daneben ein Smartphone im Fokus-Modus',
  },
];

export const about = {
  heading: 'Systematisch denken. Kreativ handeln.',
  paragraphs: [
    'Ich bin analytisch, eher introvertiert und strukturiert – und liebe Logik, Qualität und Effizienz. Was mich antreibt, ist die kognitive Herausforderung und echter wirtschaftlicher Nutzen.',
    'Im Umgang diplomatisch und ruhig, in der Umsetzung kreativ-experimentell, wenn es darauf ankommt. Deshalb baue ich neben dem Studium Produkte – manche ganz seriös, andere verschicken Kartoffeln.',
  ],
  principles: [
    { better: 'Systeme', over: 'Improvisation', text: 'Was zweimal passiert, wird dokumentiert oder automatisiert.' },
    { better: 'Machen', over: 'Reden', text: 'Ein getesteter Prototyp sagt mehr als jedes Konzeptpapier.' },
    { better: 'Qualität', over: 'Speed', text: 'Schnell lernen, aber nur ausliefern, wohinter ich stehe.' },
  ],
  // Die „System Anomalies“ aus der alten Seite, jetzt als Terminal-Ausgabe.
  anomalies: [
    {
      label: 'strange venture',
      title: 'Potato-as-a-Service',
      text: 'Skalierbarer E-Commerce für beschriftete Kartoffeln. Über 1.000 Stück verschickt. Ernsthaft.',
    },
    {
      label: 'co-founders',
      title: 'Synthetic Sparring',
      text: 'Mein Beirat besteht aus KI-Modellen. Wir diskutieren täglich Strategie – harte Sparringspartner, die keine Anteile wollen.',
    },
  ],
  status: ['debug_mode: true', 'humor_module: 85%'],
};

export const career = [
  { kind: 'erfahrung', title: 'Modern Work Systems', org: 'Würth Group', detail: 'Tech Strategy' },
  { kind: 'studium', title: 'Betriebswirtschaftslehre', org: 'Universität Mannheim', detail: 'Schwerpunkt Finance & Digital' },
  { kind: 'gründerszene', title: 'Entrepreneurship', org: 'thinc', detail: '' },
];

export const toolbox = ['MVP Building', 'No-Code', 'Notion', 'n8n', 'Shopify', 'Higgsfield', 'Midjourney', 'Canva'];

export const contact = {
  heading: 'let’s talk.',
  text: 'Ich suche spannende Herausforderungen in Product, BizOps oder als Founder Associate. Oder du hast eine merkwürdige Idee, die getestet werden will – auch gut.',
};

/**
 * Pflichtangaben für Impressum (§ 5 DDG) und Datenschutzerklärung.
 * Bitte vor dem Livegang ausfüllen – solange ein Feld leer ist, zeigt die
 * Seite einen gut sichtbaren Platzhalter an.
 */
export const legal = {
  street: '',
  city: '',
  // Name des Hosting-Anbieters inkl. Anschrift, z. B. "Netlify, Inc., 512 2nd Street, San Francisco, CA 94107, USA"
  host: '',
};
