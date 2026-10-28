// Case Study GemüseGruß: Zahlen aus Instagram-, TikTok- und Shopify-Screenshots.
import website from '../assets/gemuesegruss/website.jpg';
import tiktokUrlaubsgruss from '../assets/gemuesegruss/tiktok-urlaubsgruss.jpg';
import tiktokBox from '../assets/gemuesegruss/tiktok-beschriften-box.jpg';
import tiktokStift from '../assets/gemuesegruss/tiktok-beschriften-stift.jpg';
import belegShopifyTag from '../assets/gemuesegruss/beleg-shopify-tag.jpg';
import belegBestellungen from '../assets/gemuesegruss/beleg-bestellungen.jpg';
import belegInstagram from '../assets/gemuesegruss/beleg-instagram.jpg';

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

// Untergrenze: Das gerundete „1,1 Mio.“ zählt nur mit 1,05 Mio.
export const totalViews = videos.reduce((sum, v) => sum + (v.rounded ? v.views - 50_000 : v.views), 0);

export const caseStudy = {
  title: 'GemüseGruß',
  claim: 'Der witzigste Gruß – auf einer Kartoffel.',
  intro:
    'Ein Onlineshop für handbeschriftete Kartoffeln: Kund:innen schreiben ihre Botschaft, ich beschrifte die Kartoffel von Hand, verpacke sie in Heu und verschicke sie – auf Wunsch anonym. Was als Meme begann, wurde ein echtes Geschäft mit Shop, Logistik und viralem Marketing.',
  period: '2024 – 2025',
  roles: ['Idee & Marke', 'Shopify-Shop', 'Content & Social Media', 'Produktion & Versand'],
  kpis: [
    { value: 2_800_000, display: '2,8 Mio.+', label: 'Aufrufe auf TikTok und Instagram' },
    { value: 1_100_000, display: '1,1 Mio.', label: 'Aufrufe für das erfolgreichste Reel' },
    { value: 1_000, display: '1.000+', label: 'Bestellungen insgesamt' },
    { value: 44, display: '44', label: 'Bestellungen an einem einzigen Tag' },
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
      text: 'Ein Gruß, den man nicht erwartet, wird fotografiert, geteilt und weitererzählt. Die Kartoffel war Produkt und Werbefläche zugleich.',
    },
    {
      title: 'Ein Video kann alles verändern.',
      text: 'Ein einziges Reel erreichte über eine Million Aufrufe. Reichweite kommt in Wellen, nicht linear – an starken Tagen gingen Dutzende Bestellungen ein.',
    },
    {
      title: 'Viral heißt: Handarbeit skalieren.',
      text: 'Jede Bestellung bedeutet Beschriften, Verpacken, Versenden. An einem Tag warteten über 50 Bestellungen auf den Versand – da schlagen Prozesse jede Improvisation.',
    },
  ],
  hero: website,
  heroAlt: 'Laptop mit der Startseite von GemüseGruß: „Der witzigste Gruß – auf einer Kartoffel!“ über beschrifteten Kartoffeln',
  gallery: [
    { image: tiktokUrlaubsgruss, alt: 'Beschriftete Kartoffel mit langem Urlaubsgruß, gebettet in Heu im Versandkarton' },
    { image: tiktokBox, alt: 'Hand hält eine beschriftete Kartoffel im Karton mit Heu' },
    { image: tiktokStift, alt: 'Eine Kartoffel wird mit einem Stift von Hand beschriftet' },
  ],
  evidence: [
    { image: belegShopifyTag, alt: 'Shopify-Dashboard eines Tages: 602,56 € Umsatz, 44 Bestellungen, 1,84 % Conversion', caption: 'Shopify · der stärkste Tag' },
    { image: belegBestellungen, alt: 'Sechs Shopify-Benachrichtigungen über neue Bestellungen zu je 13,49 € innerhalb von zwei Stunden', caption: 'Bestellungen im Minutentakt' },
    { image: belegInstagram, alt: 'Instagram-Statistik: Reels mit 1,1 Mio., 280.351 und 177.996 Aufrufen', caption: 'Instagram · Aufrufe pro Reel' },
  ],
};
