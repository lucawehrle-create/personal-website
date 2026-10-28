// Case Study GemüseGruß: Zahlen aus Instagram-, TikTok- und Shopify-Screenshots.
import website from '../assets/gemuesegruss/website.jpg';
import tiktokUrlaubsgruss from '../assets/gemuesegruss/tiktok-urlaubsgruss.jpg';
import produktfoto from '../assets/gemuesegruss/produktfoto.jpg';
import tiktokStift from '../assets/gemuesegruss/tiktok-beschriften-stift.jpg';
import belegShopifyTag from '../assets/gemuesegruss/beleg-shopify-tag.jpg';
import belegBestellungen from '../assets/gemuesegruss/beleg-bestellungen.jpg';
import belegInstagram from '../assets/gemuesegruss/beleg-instagram.jpg';
import versandKartons from '../assets/gemuesegruss/versand-kartons.jpg';

export type Video = {
  platform: 'TikTok' | 'Instagram';
  title: string;
  date?: string;
  views: number;
  // Instagram zeigt die Zahl ab 1 Mio. nur gerundet an.
  rounded?: boolean;
  likes?: number;
  comments?: number;
  shares?: number;
};

// Die zehn meistgesehenen Videos laut Plattform-Statistik (Instagram: letzte 2 Jahre, TikTok: angepinnte Videos).
export const videos: Video[] = [
  { platform: 'Instagram', title: 'Das gibt es wirklich 🤯', date: '26.01.2025', views: 1_100_000, rounded: true, likes: 14_966, comments: 162, shares: 363 },
  { platform: 'TikTok', title: '„Hoffe, du nimmst deine Tabletten“', views: 748_961 },
  { platform: 'Instagram', title: 'So kann’s laufen 😅', date: '28.02.2025', views: 280_351, likes: 1_137, comments: 42, shares: 4 },
  { platform: 'TikTok', title: 'Immer mit Grußbotschaft', views: 184_849 },
  { platform: 'Instagram', title: 'Kartoffeln statt Postkarten', date: '15.02.2025', views: 177_996, likes: 1_452, comments: 21, shares: 4 },
  { platform: 'TikTok', title: 'Urlaubsgruß aus Thailand', views: 166_845 },
  { platform: 'Instagram', title: 'Von Liebeserklärungen …', date: '14.08.2025', views: 155_284, likes: 2_879, comments: 38, shares: 1_262 },
  { platform: 'Instagram', title: 'Stell dir vor, du bekommst …', date: '18.08.2025', views: 83_468, likes: 1_306, comments: 12, shares: 675 },
  { platform: 'Instagram', title: 'Spare 5 % mit dem Code …', date: '01.06.2025', views: 25_934, likes: 123, comments: 9, shares: 1 },
  { platform: 'Instagram', title: 'Würdest du? 🥔', date: '06.03.2025', views: 13_179 },
];

export type Month = {
  label: string;
  short: string;
  revenue: number;
  orders: number;
  conversion: number;
  // Shop geschlossen (Umzug und Uni)
  closed?: boolean;
};

// Shopify-Analytics-Report (Stand März 2026): Umsatz und Bestellungen pro Monat im Onlineshop.
// Insgesamt waren es über 1.000 Bestellungen; 904 davon liefen über den Shopify-Shop.
// März 2026 enthielt nur eine Rückerstattung und ist deshalb nicht dargestellt.
// September und Oktober 2025 war der Shop geschlossen; ab September lief kaum noch Marketing.
export const months: Month[] = [
  { label: 'Dezember 2024', short: 'Dez', revenue: 142.09, orders: 11, conversion: 2.08 },
  { label: 'Januar 2025', short: 'Jan', revenue: 4008.4, orders: 314, conversion: 2.16 },
  { label: 'Februar 2025', short: 'Feb', revenue: 3280.38, orders: 248, conversion: 2.76 },
  { label: 'März 2025', short: 'Mär', revenue: 1246.07, orders: 93, conversion: 2.48 },
  { label: 'April 2025', short: 'Apr', revenue: 563.47, orders: 41, conversion: 1.83 },
  { label: 'Mai 2025', short: 'Mai', revenue: 510.18, orders: 38, conversion: 2.27 },
  { label: 'Juni 2025', short: 'Jun', revenue: 265, orders: 24, conversion: 1.68 },
  { label: 'Juli 2025', short: 'Jul', revenue: 426.52, orders: 33, conversion: 2.15 },
  { label: 'August 2025', short: 'Aug', revenue: 771.67, orders: 57, conversion: 1.4 },
  { label: 'September 2025', short: 'Sep', revenue: 0, orders: 0, conversion: 0, closed: true },
  { label: 'Oktober 2025', short: 'Okt', revenue: 0, orders: 4, conversion: 0.92, closed: true },
  { label: 'November 2025', short: 'Nov', revenue: 125.01, orders: 10, conversion: 1.66 },
  { label: 'Dezember 2025', short: 'Dez', revenue: 178.97, orders: 13, conversion: 3.49 },
  { label: 'Januar 2026', short: 'Jan', revenue: 134.35, orders: 11, conversion: 3.17 },
  { label: 'Februar 2026', short: 'Feb', revenue: 86.92, orders: 7, conversion: 2.07 },
];

export const shop = {
  totalOrders: '1.000+',
  revenue: 11_719.56,
  orders: 904,
  sessions: 31_708,
  averageOrder: '12,96 €',
  adSpend: 0,
};

// Sitzungen im Shop nach Herkunft (alle Zeiträume)
export const trafficSources = [
  { label: 'Social Media', share: 46.6, sessions: 14_772 },
  { label: 'Direkt', share: 35.2, sessions: 11_152 },
  { label: 'Suche', share: 17.8, sessions: 5_650 },
  { label: 'Sonstige', share: 0.4, sessions: 134 },
];

export const social = {
  followers: [
    { platform: 'TikTok', count: 2_279 },
    { platform: 'Instagram', count: 2_120 },
  ],
  facts: [
    { value: '94,5 %', label: 'der TikTok-Aufrufe kamen über die „Für dich“-Seite' },
    { value: '81,6 %', label: 'der Instagram-Aufrufe erreichten Nicht-Follower' },
    { value: '25–34', label: 'größte Altersgruppe auf TikTok und Instagram' },
    { value: '72 %', label: 'der TikTok-Zuschauer sind Frauen' },
  ],
};

// Untergrenze: Das gerundete „1,1 Mio.“ zählt nur mit 1,05 Mio.
export const totalViews = videos.reduce((sum, v) => sum + (v.rounded ? v.views - 50_000 : v.views), 0);

export const caseStudy = {
  title: 'GemüseGruß',
  claim: 'Der witzigste Gruß – auf einer Kartoffel.',
  intro:
    'Ein Onlineshop für handbeschriftete Kartoffeln: Kund:innen schreiben ihre Botschaft, ich beschrifte die Kartoffel von Hand, verpacke sie in Heu und verschicke sie – auf Wunsch anonym. Was als Meme begann, wurde ein echtes Geschäft mit Shop, Logistik und viralem Marketing – ohne einen Euro Werbebudget.',
  period: 'Dez 2024 – Ende 2025',
  roles: ['Idee & Marke', 'Shopify-Shop', 'Content & Social Media', 'Produktion & Versand'],
  kpis: [
    { display: '2,8 Mio.+', label: 'Aufrufe auf TikTok und Instagram' },
    { display: '1.000+', label: 'Bestellungen insgesamt' },
    { display: '11.700 €', label: 'Umsatz im Onlineshop' },
    { display: '0 €', label: 'Werbebudget – alles organisch' },
  ],
  bestDay: {
    revenue: '602,56 €',
    revenueDelta: '+28 %',
    orders: '44',
    ordersDelta: '+22 %',
    conversion: '1,84 %',
    price: '13,49 €',
    toPack: '50+',
  },
  orders: [
    { id: '#1047', ago: 'vor 2 Std.' },
    { id: '#1048', ago: 'vor 2 Std.' },
    { id: '#1049', ago: 'vor 1 Std.' },
    { id: '#1050', ago: 'vor 1 Std.' },
    { id: '#1051', ago: 'vor 1 Std.' },
    { id: '#1052', ago: 'vor 49 Min.' },
  ],
  steps: [
    {
      title: 'Bestellen',
      text: 'Botschaft eingeben, anonym oder mit Absender wählen, fertig. Kostenloser Versand, 13,49 € pro Gruß.',
    },
    {
      title: 'Beschriften',
      text: 'Jede Kartoffel wird von Hand mit Stift beschriftet – vom Geburtstagsgruß bis zur Liebeserklärung.',
    },
    {
      title: 'Verpacken & versenden',
      text: 'In Heu gebettet, im Karton mit GemüseGruß-Etikett, pünktlich zum Anlass beim Empfänger.',
    },
  ],
  learnings: [
    {
      title: 'Das Produkt ist das Marketing.',
      text: 'Ein Gruß, den man nicht erwartet, wird fotografiert, geteilt und weitererzählt. Die Kartoffel war Produkt und Werbefläche zugleich – bezahlte Werbung brauchte es nicht.',
    },
    {
      title: 'Reichweite ist noch kein Umsatz.',
      text: 'Im Monat des Reels mit 1,1 Mio. Aufrufen kamen 314 Bestellungen, danach wurde es ruhiger. Das Geschäft hing an viralen Wellen – und nur ein Bruchteil der Reichweite wurde zu Käufen.',
    },
    {
      title: 'Conversion ist Handwerk.',
      text: 'Am meisten Spaß gemacht hat mir, die Conversion Rate im Shop durch ständiges Testen zu verbessern: ändern, messen, wieder ändern. Jeder Prozentpunkt zählt, wenn die Reichweite nicht planbar ist.',
    },
    {
      title: 'Viral heißt: Handarbeit skalieren.',
      text: 'Über 1.000 Kartoffeln heißt: über 1.000-mal beschriften, verpacken, versenden. An einem Tag warteten über 50 Bestellungen auf den Versand – da schlagen Prozesse jede Improvisation.',
    },
  ],
  hero: website,
  heroAlt: 'Laptop mit der Startseite von GemüseGruß: „Der witzigste Gruß – auf einer Kartoffel!“ über beschrifteten Kartoffeln',
  shipping: {
    image: versandKartons,
    alt: 'Ein Stapel versandfertiger GemüseGruß-Kartons mit Weihnachtsetikett: Kartoffel mit Weihnachtsmütze und Möhre',
    caption: 'Versandfertig: GemüseGrüße im Weihnachtsdesign',
  },
  gallery: [
    {
      image: produktfoto,
      alt: 'Geöffnete GemüseGruß-Box mit Logo-Etikett, darin auf Heu eine Kartoffel mit der Aufschrift „Für dich“',
      caption: 'Produktfoto',
    },
    {
      image: tiktokUrlaubsgruss,
      alt: 'Beschriftete Kartoffel mit langem Urlaubsgruß, gebettet in Heu im Versandkarton',
      caption: 'TikTok',
    },
    { image: tiktokStift, alt: 'Eine Kartoffel wird mit einem Stift von Hand beschriftet', caption: 'TikTok' },
  ],
  evidence: [
    { image: belegShopifyTag, alt: 'Shopify-Dashboard eines Tages: 602,56 € Umsatz, 44 Bestellungen, 1,84 % Conversion', caption: 'Shopify · der stärkste Tag' },
    { image: belegBestellungen, alt: 'Sechs Shopify-Benachrichtigungen über neue Bestellungen zu je 13,49 € innerhalb von zwei Stunden', caption: 'Bestellungen im Minutentakt' },
    { image: belegInstagram, alt: 'Instagram-Statistik: Reels mit 1,1 Mio., 280.351 und 177.996 Aufrufen', caption: 'Instagram · Aufrufe pro Reel' },
  ],
};
