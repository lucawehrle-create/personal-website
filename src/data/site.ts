import type { ImageMetadata } from 'astro';
import gemuesegrussImage from '../assets/gemuesegruss/website-16x10.jpg';
import mindfulscreenImage from '../assets/projects/mindfulscreen.webp';
import sembanImage from '../assets/projects/semban.webp';

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
      text: 'B.Sc. BWL an der Universität Mannheim, Auslandssemester in Jönköping. Heute Werkstudent bei Würth IT.',
    },
    {
      label: 'nebenbei',
      text: 'Gerade baue ich SemBan, eine Lern-App für Studierende – Strava fürs Lernen. Davor: Kartoffeln mit Botschaft.',
    },
  ],
  tagline: 'Logik trifft auf Experimentierfreude.',
};

export const statement =
  'Ich baue digitale Produkte, optimiere Systeme und teste *merkwürdig* *kreative* Geschäftsideen. *Logik* trifft auf *Experimentierfreude* – und manchmal auf *Kartoffeln.*';

export type Project = {
  name: string;
  // live = läuft gerade, abgeschlossen = eingestellt (dann ohne Link)
  status: 'live' | 'abgeschlossen';
  category: string;
  description: string;
  metric: { value: string; label: string };
  period?: string;
  // Projekt als Experiment erzählt: Was war die Annahme, wie wurde sie getestet, was kam raus?
  // Laufende Projekte haben statt eines Learnings einen nächsten Schritt.
  experiment: { hypothesis: string; test: string; result: string; learning?: string; next?: string };
  tags: string[];
  href?: string;
  links?: { label: string; href: string }[];
  // Pfad zu einer ausführlichen Case Study auf dieser Website
  caseStudy?: string;
  // Vorschaubild im Seitenverhältnis 16:10, liegt in src/assets/projects/.
  image: ImageMetadata;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    name: 'SemBan',
    status: 'live',
    category: 'EdTech · Social App',
    description:
      'Your Social Study Companion – Strava fürs Lernen: Lerneinheiten landen im Feed deiner Freunde, dazu Lerngruppen mit gemeinsamem Wochenziel, Stundenplan aus dem Uni-Portal, Fristen, Noten und ECTS. Kostenlos und werbefrei, als iPhone-App und im Web.',
    metric: { value: 'Live', label: 'im App Store und im Web' },
    period: 'seit 2026',
    experiment: {
      hypothesis: 'Studierende bleiben besser dran, wenn andere sehen, dass sie lernen – und sich mit ihnen freuen.',
      test: 'Eine soziale Lern-App: jede Lerneinheit wird eine Aktivität im Feed, mit Applaus, Kommentaren und gemeinsamem Wochenziel. Dazu Stundenplan, Fristen, Noten und Fokus-Timer.',
      result: 'Gestartet im App Store und im Web – kostenlos und werbefrei.',
      next: 'Die ersten Lerngruppen aufbauen und die Roadmap gemeinsam mit den Nutzer:innen abstimmen.',
    },
    tags: ['iOS', 'Web', 'Social', 'Produktentwicklung'],
    href: 'https://semban.de/',
    links: [{ label: 'App Store', href: 'https://apps.apple.com/app/id6820568096' }],
    image: sembanImage,
    imageAlt: 'Website von SemBan im Browser und auf dem Smartphone: „Lernen ist besser mit Freunden.“ mit Lern-Feed der App',
  },
  {
    name: 'GemüseGruß',
    status: 'abgeschlossen',
    category: 'E-Commerce · Viral',
    description:
      'E-Commerce, der eigentlich ein Meme ist – aber funktioniert: personalisierte Kartoffeln mit Grußbotschaft. Gebaut auf Shopify, gewachsen durch virales Marketing und UGC-Kampagnen.',
    metric: { value: '1.000+', label: 'Bestellungen' },
    period: '2024 – 2025',
    experiment: {
      hypothesis: 'Menschen zahlen für einen Gruß, der so absurd ist, dass man ihn weitererzählt.',
      test: 'Shopify-Shop für handbeschriftete Kartoffeln, Reichweite über Kurzvideos auf TikTok und Instagram.',
      result: 'Über 1.000 Bestellungen und mehr als 2,8 Mio. Aufrufe.',
      learning: 'Wenn das Produkt selbst die Geschichte ist, erzählen Kund:innen sie weiter.',
    },
    tags: ['Shopify', 'TikTok', 'Instagram', 'Logistik'],
    caseStudy: '/projekte/gemuesegruss/',
    image: gemuesegrussImage,
    imageAlt: 'Laptop mit der Website von GemüseGruß: „Der witzigste Gruß – auf einer Kartoffel!“ über beschrifteten Kartoffeln',
  },
  {
    name: 'Mindfulscreen OS',
    status: 'abgeschlossen',
    category: 'Digital Health · Productivity',
    description:
      'Digital-Detox- und Deep-Work-System für Gründer und High-Performer: 21-Tage-Kurs, Screen-Time-Rechner, Pomodoro-System und Fokus-Tracker – komplett in Notion.',
    metric: { value: '21', label: 'Tage Programm' },
    period: '2023 – 2024',
    experiment: {
      hypothesis: 'Gründer und High-Performer wollen weniger Bildschirmzeit, ohne an Produktivität zu verlieren.',
      test: 'Ein komplettes System in Notion: 21-Tage-Kurs, Screen-Time-Rechner, Pomodoro-System und Fokus-Tracker.',
      result: 'Als Startup gegründet und als komplettes System gelauncht.',
      learning: 'Gewohnheiten ändern sich über einfache Routinen, nicht über Verbote.',
    },
    tags: ['Notion', 'UX', 'AI-Integration', 'Content'],
    image: mindfulscreenImage,
    imageAlt:
      'Mindfulscreen-OS-Dashboard mit 21-Tage-Fortschritt, Pomodoro-Timer und Fokus-Tracker, daneben ein Smartphone im Fokus-Modus',
  },
];

export const about = {
  heading: 'Systematisch denken. Kreativ handeln.',
  paragraphs: [
    'Ich bin analytisch und strukturiert – und liebe Logik, Qualität und Effizienz. Was mich antreibt, ist die kognitive Herausforderung und echter wirtschaftlicher Nutzen.',
    'Im Umgang diplomatisch und ruhig, in der Umsetzung kreativ-experimentell, wenn es darauf ankommt. Deshalb baue ich neben dem Studium Produkte – von einer Lern-App bis zu Kartoffeln mit Botschaft.',
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
  interests: ['Laufen', 'Kraftsport', 'Kochen', 'Reisen', 'Segeln', 'Unternehmertum', 'Digitale Innovation', 'KI'],
};

export type CareerEntry = {
  role: string;
  org: string;
  place?: string;
  period: string;
  points?: string[];
};

// Werdegang laut Lebenslauf (Stand: April 2026), neueste Station zuerst.
export const career: { experience: CareerEntry[]; education: CareerEntry[]; engagement: CareerEntry[] } = {
  experience: [
    {
      role: 'Werkstudent',
      org: 'Würth IT',
      period: '2026 – heute',
    },
    {
      role: 'Gründer & Macher',
      org: 'SemBan',
      period: '2026 – heute',
      points: [
        'Soziale Lern-App für Studierende – „Strava fürs Lernen“, als iPhone-App und im Web',
        'Idee, Produkt und Umsetzung in Eigenregie',
      ],
    },
    {
      role: 'Freiwilliges Praktikum, Team Modern Work',
      org: 'Würth Deutschland',
      place: 'Künzelsau',
      period: 'Okt 2025 – März 2026',
      points: [
        'Unterstützung der digitalen Transformation im Bereich Hardware und Software',
        'Mitwirkung bei der Einführung eines Assetmanagement- und Wissensmanagement-Systems',
      ],
    },
    {
      role: 'Startup-Gründung',
      org: 'Mindfulscreen',
      place: 'Mannheim',
      period: '2023 – 2024',
      points: ['Entwicklung von Strategien und digitalen Lösungen für reduzierte Handynutzung'],
    },
    {
      role: 'Studentische Hilfskraft, Nutzerbetreuung',
      org: 'Computerpool der Fakultät BWL',
      place: 'Mannheim',
      period: '2022 – 2024',
    },
  ],
  education: [
    {
      role: 'Auslandssemester',
      org: 'Jönköping University',
      place: 'Schweden',
      period: 'Aug – Dez 2024',
      points: ['Entrepreneurship, Business Digitalization, Service Marketing, Swedish Language'],
    },
    {
      role: 'B.Sc. Betriebswirtschaftslehre',
      org: 'Universität Mannheim',
      place: 'Mannheim',
      period: '2022 – 2025',
      points: ['Bachelorarbeit: Electronic Bond Trading', '79 ECTS in englischer Sprache'],
    },
    {
      role: 'Allgemeine Hochschulreife, Internationales Wirtschaftsgymnasium',
      org: 'Berufsschulzentrum Stockach',
      place: 'Stockach',
      period: '2019 – 2022',
      points: ['Jahrgangspreis für Ökonomische Studien und Informatik'],
    },
  ],
  engagement: [
    {
      role: 'Growth Team',
      org: 'thinc! e.V.',
      place: 'Mannheim',
      period: '2022 – 2024',
      points: [
        'Die Startup-Initiative der Uni Mannheim',
        'Verantwortlich für das Wachstum eines zweiwöchigen Startup-Inkubatorprogramms',
      ],
    },
  ],
};

// Frühere Stationen, kompakt dargestellt.
export const earlier = [
  { period: '2020 – 2022', text: 'Aushilfe, EDEKA Sulger, Stockach' },
  { period: '2020', text: 'Praktikum Lager & Versand, Aptar Radolfzell' },
  { period: '2019', text: 'Praktikum Personalabteilung, Aptar Radolfzell' },
  { period: '2017', text: 'Praktikum Mediengestaltung, Kieweg und Freiermuth, Konstanz' },
];

export const toolbox = [
  'MVP Building',
  'No-Code',
  'Generative KI',
  'Notion',
  'n8n',
  'Shopify',
  'SAP HCM',
  'MS Office',
  'Adobe Creative Suite',
  'Canva',
  'Midjourney',
  'Higgsfield',
];

export const languages = [
  { name: 'Deutsch', level: 'Muttersprache' },
  { name: 'Englisch', level: 'C1' },
  { name: 'Französisch', level: 'A1' },
  { name: 'Italienisch', level: 'Grundkenntnisse' },
  { name: 'Schwedisch', level: 'Grundkenntnisse' },
];

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
