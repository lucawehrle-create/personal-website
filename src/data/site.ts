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
    'Business Student in Trier, Product Builder und Creator ungewöhnlicher Side Projects. Ich baue digitale Produkte, optimiere Systeme und teste merkwürdig kreative Geschäftsideen.',
  email: 'luca.wehrle@gmail.com',
  location: 'Trier',
  timeZone: 'Europe/Berlin',
  linkedin: 'https://www.linkedin.com/in/luca-wehrle-8112b8184/',
  instagram: 'https://www.instagram.com/luca.weh/',
  instagramHandle: '@luca.weh',
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
    { label: 'tldr', text: 'Business Student. Product Builder. Creator of many Side Projects.' },
    {
      label: 'studium & praxis',
      text: 'B.Sc. BWL an der Universität Mannheim, Auslandssemester in Jönköping. Heute in Trier, Werkstudent bei Würth IT.',
    },
    {
      label: 'nebenbei',
      text: 'Gerade baue ich SemBan, eine Lern-App für Studierende – Strava fürs Lernen. Davor: Kartoffeln mit Botschaft.',
    },
  ],
  tagline: 'Logik trifft auf Experimentierfreude.',
};

export const statement =
  'Ich baue digitale Produkte, optimiere Systeme und teste *kreative* Ideen. *Logik* trifft auf *Experimentierfreude* – von der ersten Idee bis zum *Launch.*';

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
  // Bento-Collage statt Einzelbild (src/components/collage/)
  collage?: 'semban' | 'gemuesegruss' | 'mindfulscreen';
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
    collage: 'semban',
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
    period: '2024 – 2026',
    experiment: {
      hypothesis: 'Menschen zahlen für einen Gruß, der so absurd ist, dass man ihn weitererzählt.',
      test: 'Shopify-Shop für handbeschriftete Kartoffeln, Reichweite über Kurzvideos auf TikTok und Instagram.',
      result: 'Über 1.000 Bestellungen, 11.700 € Umsatz im Onlineshop und über 2,8 Mio. Aufrufe – ohne Werbebudget.',
      learning: 'Wenn das Produkt selbst die Geschichte ist, erzählen Kund:innen sie weiter.',
    },
    tags: ['Shopify', 'TikTok', 'Instagram', 'Logistik'],
    caseStudy: '/projekte/gemuesegruss/',
    collage: 'gemuesegruss',
    image: gemuesegrussImage,
    imageAlt: 'Laptop mit der Website von GemüseGruß: „Der witzigste Gruß – auf einer Kartoffel!“ über beschrifteten Kartoffeln',
  },
  {
    name: 'Mindfulscreen',
    status: 'abgeschlossen',
    category: 'Digital Health · Content & Buch',
    description:
      'Eine Marke gegen Handysucht, vor allem für Schüler:innen: Instagram-Reels und Karussell-Posts, ein 21-Tage-Programm und das eigene Buch „Handy aus, Leben an“ – bis heute auf Amazon erhältlich.',
    metric: { value: '5,0 ★', label: 'für das eigene Buch' },
    period: '2023 – 2024',
    experiment: {
      hypothesis: 'Schüler:innen wollen weniger Zeit am Handy verbringen – sie brauchen nur jemanden, der zeigt, wie es geht.',
      test: 'Erst an mir selbst, dann für andere: Reels und Posts auf Instagram, ein 21-Tage-Programm und ein eigenes Buch.',
      result: 'Bei mir 59 % weniger Bildschirmzeit, 749 Follower und ein Buch mit 5,0 Sternen auf Amazon.',
      learning: 'Gewohnheiten ändern sich über einfache Routinen, nicht über Verbote.',
    },
    tags: ['Instagram', 'Reels', 'Notion', 'Buch'],
    links: [{ label: 'Buch auf Amazon', href: 'https://www.amazon.de/dp/B0F5WK6PWT' }],
    caseStudy: '/projekte/mindfulscreen/',
    collage: 'mindfulscreen',
    image: mindfulscreenImage,
    imageAlt:
      'Das Buch „Handy aus, Leben an“, die Website mindfulscreen.com auf dem Smartphone und das Instagram-Profil von Mindfulscreen',
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
  interests: ['Laufen', 'Kraftsport', 'Kochen', 'Reisen', 'Segeln', 'Unternehmertum', 'Digitale Innovation', 'KI'],
};

export type CareerEntry = {
  role: string;
  org: string;
  place?: string;
  // Zeitraum wie im Lebenslauf: „2023 – 2024“, „Okt 2025 – März 2026“, „2026 – heute“
  period: string;
  points?: string[];
  // Kurzname für den Zeitstrahl im Recruiter-Modus
  short?: string;
};

// Werdegang laut Lebenslauf (Stand: April 2026), neueste Station zuerst.
export const career: { experience: CareerEntry[]; education: CareerEntry[]; engagement: CareerEntry[] } = {
  experience: [
    {
      role: 'Werkstudent',
      org: 'Würth IT',
      short: 'Werkstudent · Würth IT',
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
      short: 'Praktikum · Würth Deutschland',
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
      points: [
        'Entwicklung von Strategien und digitalen Lösungen für reduzierte Handynutzung',
        'Instagram-Reels und Karussell-Posts, vor allem für Schüler:innen',
        'Autor des Buchs „Handy aus, Leben an“ (Amazon, 5,0 Sterne)',
      ],
    },
    {
      role: 'Studentische Hilfskraft, Nutzerbetreuung',
      org: 'Computerpool der Fakultät BWL',
      short: 'Hilfskraft · Fakultät BWL',
      place: 'Mannheim',
      period: '2022 – 2024',
    },
  ],
  education: [
    {
      role: 'Auslandssemester',
      org: 'Jönköping University',
      short: 'Auslandssemester · Jönköping',
      place: 'Schweden',
      period: 'Aug – Dez 2024',
      points: ['Entrepreneurship, Business Digitalization, Service Marketing, Swedish Language'],
    },
    {
      role: 'B.Sc. Betriebswirtschaftslehre',
      org: 'Universität Mannheim',
      short: 'B.Sc. BWL · Uni Mannheim',
      place: 'Mannheim',
      period: '2022 – 2025',
      points: ['Bachelorarbeit: Electronic Bond Trading', '79 ECTS in englischer Sprache'],
    },
    {
      role: 'Allgemeine Hochschulreife, Internationales Wirtschaftsgymnasium',
      org: 'Berufsschulzentrum Stockach',
      short: 'Abitur · Wirtschaftsgymnasium',
      place: 'Stockach',
      period: '2019 – 2022',
      points: ['Jahrgangspreis für Ökonomische Studien und Informatik'],
    },
  ],
  engagement: [
    {
      role: 'Growth Team',
      org: 'thinc! e.V.',
      short: 'Growth Team · thinc!',
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

// Werkzeuge nach Bereichen; die Startseite zeigt sie als eine fortlaufende Liste.
export const toolboxGroups = [
  { title: 'produkt & no-code', items: ['MVP Building', 'No-Code', 'Notion', 'n8n', 'Shopify'] },
  { title: 'ki', items: ['Generative KI', 'Midjourney', 'Higgsfield'] },
  { title: 'design', items: ['Adobe Creative Suite', 'Canva'] },
  { title: 'business-tools', items: ['SAP HCM', 'MS Office'] },
];

export const toolbox = toolboxGroups.flatMap((group) => group.items);

export const languages = [
  { name: 'Deutsch', level: 'Muttersprache' },
  { name: 'Englisch', level: 'C1' },
  { name: 'Französisch', level: 'A1' },
  { name: 'Italienisch', level: 'Grundkenntnisse' },
  { name: 'Schwedisch', level: 'Grundkenntnisse' },
];

export const contact = {
  heading: 'let’s talk.',
  text: 'Ich suche spannende Aufgaben in Product, BizOps oder als Founder Associate – am liebsten dort, wo aus Ideen echte Produkte werden.',
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
