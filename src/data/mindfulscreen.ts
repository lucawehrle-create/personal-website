// Case Study Mindfulscreen: Marke gegen Handysucht mit Website, 21-Tage-Programm, Instagram und Buch.
import hero from '../assets/projects/mindfulscreen.webp';
import bildschirmzeit from '../assets/mindfulscreen/bildschirmzeit.png';
import blattZiel from '../assets/mindfulscreen/masterclass/3-ziel.jpg';
import blattTrigger from '../assets/mindfulscreen/masterclass/4-trigger.jpg';
import blattGewohnheit from '../assets/mindfulscreen/masterclass/5-gewohnheit.jpg';
import blattAlternativen from '../assets/mindfulscreen/masterclass/6-alternativen.jpg';
import blattFortschritt from '../assets/mindfulscreen/masterclass/7-fortschritt.jpg';
import website from '../assets/mindfulscreen/website.jpg';
import instagram from '../assets/mindfulscreen/instagram-profil.jpg';
import cover from '../assets/mindfulscreen/buch-cover.jpg';
import logoMark from '../assets/mindfulscreen/logo-mark.png';

export const caseStudy = {
  title: 'mindfulscreen',
  claim: 'In 21 Tagen weniger Handy.',
  intro:
    'Mindfulscreen war meine Marke gegen Handysucht, gerichtet vor allem an Schüler:innen: Reels und Karussell-Posts auf Instagram, ein 21-Tage-Programm, eine Website – und das Buch „Handy aus, Leben an“, das es bis heute auf Amazon gibt.',
  period: '2023 – 2024',
  roles: ['Marke & Website', '21-Tage-Programm', 'Content & Instagram', 'Autor'],
  hero,
  heroAlt: 'Das Buch „Handy aus, Leben an“, die Website mindfulscreen.com auf dem Smartphone und das Instagram-Profil von Mindfulscreen',
  kpis: [
    { display: '749', label: 'Follower auf Instagram' },
    { display: '21', label: 'Tage dauert das Programm' },
    { display: '1', label: 'Buch, bis heute auf Amazon erhältlich' },
    { display: '−59 %', label: 'Bildschirmzeit – bei mir selbst, vorher vs. nachher' },
  ],
  // Zitat von mindfulscreen.com
  quote: [
    'Ich bin im Zeitalter der Technologie aufgewachsen, die uns chronisch überstimuliert und von dem, was wirklich wichtig ist, ablenkt.',
    'Vor etwa zwei Jahren wurde mir klar, dass meine chronische Konsumgewohnheit mich in eine dunkle Spirale führt.',
  ],
  website,
  websiteAlt: 'Website mindfulscreen.com auf dem Smartphone: „Ich bin Luca. Ich helfe dir, deine Zeit sinnvoll zu nutzen.“',
  channels: [
    {
      title: 'Instagram',
      text: 'Reels und Karussell-Posts zu Fokus, Motivation und Handysucht – der Kanal, über den die Reichweite entstand.',
      status: '749 Follower',
    },
    {
      title: '21-Tage-Programm',
      text: 'Die Masterclass „Habit Change“: vier Schritte in vier Wochen, Erklärungsvideos, fünf Arbeitsblätter und ein Journal.',
      status: 'eingestellt',
    },
    {
      title: 'Website',
      text: 'mindfulscreen.com als Einstieg: was weniger Handynutzung bewirkt, mein persönlicher Weg und der Start ins Programm.',
      status: 'eingestellt',
    },
    {
      title: 'Buch',
      text: '„Handy aus, Leben an“: der Weg zu weniger Bildschirmzeit Schritt für Schritt, als E-Book auf Amazon.',
      status: 'erhältlich',
    },
  ],
  book: {
    title: 'Handy aus, Leben an',
    subtitle: 'Schritt für Schritt zu weniger Bildschirmzeit und mehr Erfüllung im Alltag',
    tagline: 'Handysucht überwinden & Freiheit zurückgewinnen',
    cover,
    coverAlt: 'Buchcover „Handy aus, Leben an – Handysucht überwinden & Freiheit zurückgewinnen“ von Luca Wehrle',
    href: 'https://www.amazon.de/dp/B0F5WK6PWT',
  },
  instagram,
  instagramAlt: 'Instagram-Profil @mindfulscreen: 19 Beiträge, 749 Follower, „Ich helfe dir, weniger Zeit am Handy zu verbringen!“',
  // Karussell-Cover von Instagram, nachgebaut. *Sternchen* = grün hervorgehoben.
  posts: [
    { title: 'Wie dein Handy dich *kontrolliert!*', sub: '… und was du dagegen tun kannst.' },
    { title: '3 Wege, um *immer motiviert zu sein.*', sub: 'Die richtige Einstellung für langfristige Motivation' },
    { title: '3 Wege, um *glücklicher* zu sein.', sub: 'Die du direkt umsetzen kannst :)' },
  ],
  logoMark,
  // Bildschirmzeit aus iOS (Wochenansicht): Tagesschnitt und Wochensumme, vorher und nachher
  screenTime: {
    image: bildschirmzeit,
    alt: 'iOS-Bildschirmzeit vorher und nachher: 6 h 19 min statt 2 h 36 min im Tagesschnitt, 44 h 19 min statt 18 h 17 min pro Woche',
    before: { minutes: 379, display: '6 h 19 min' },
    after: { minutes: 156, display: '2 h 36 min' },
    change: '−59 %',
    gains: [
      { value: '3 h 43 min', label: 'mehr Zeit, jeden Tag' },
      { value: '26 h', label: 'pro Woche: 44 h 19 min → 18 h 17 min' },
      { value: '−62 %', label: 'soziale Netze: 17 h → 6 h 24 min pro Woche' },
    ],
  },
  // Masterclass „Habit Change“: das 21-Tage-Programm
  program: {
    title: 'Masterclass: Habit Change',
    steps: [
      {
        title: 'Klare Absichten setzen',
        text: 'Das eigene Handyverhalten analysieren und mit bewusster Veränderung gesündere digitale Gewohnheiten aufbauen.',
      },
      {
        title: 'Umfeld verändern',
        text: 'Physisches und digitales Umfeld so gestalten, dass Ablenkungen seltener und schnelle Dopamin-Apps schwerer erreichbar sind.',
      },
      {
        title: 'Aufmerksamkeit stärken',
        text: 'Die Aufmerksamkeitsspanne trainieren, um die Fähigkeit zur Konzentration zurückzugewinnen.',
      },
      {
        title: 'Persönlicher Ansatz',
        text: 'Jeder ist anders: den eigenen Weg finden, der wirklich in den Alltag passt.',
      },
    ],
    // Arbeitsblätter aus der Masterclass (Originale auf Englisch)
    sheets: [
      { image: blattZiel, title: 'Zieldefinition', original: 'My Clear Goal', alt: 'Arbeitsblatt „My Clear Goal“ mit Ist-Zustand, Motivation, SMART-Ziel, Visualisierung und Selbstverpflichtung' },
      { image: blattTrigger, title: 'Trigger-Analyse', original: 'Understanding My Triggers', alt: 'Arbeitsblatt „Understanding My Triggers“ mit 7-Tage-Protokoll und Wochenauswertung' },
      { image: blattGewohnheit, title: 'Gewohnheit umbauen', original: 'The Four Elements of Change', alt: 'Arbeitsblatt „The Four Elements of Change“: Auslöser, Verlangen, Reaktion und Belohnung' },
      { image: blattAlternativen, title: 'Ersatzhandlungen', original: 'My New Positive Habits', alt: 'Arbeitsblatt „My New Positive Habits“ mit Ersatzhandlungen je Bedürfnis und Wenn-dann-Plänen' },
      { image: blattFortschritt, title: 'Erfolgsjournal', original: 'My Success Journal', alt: 'Arbeitsblatt „My Success Journal“ zur Dokumentation und Reflexion über vier Wochen' },
    ],
  },
  experiment: {
    hypothesis: 'Schüler:innen wollen weniger Zeit am Handy verbringen – sie brauchen nur jemanden, der zeigt, wie es geht.',
    test: 'Erst an mir selbst, dann für andere: Reels und Karussell-Posts auf Instagram, ein 21-Tage-Programm, eine Website und ein eigenes Buch.',
    result: 'Bei mir 59 % weniger Bildschirmzeit, 749 Follower und ein Buch, das bis heute auf Amazon erhältlich ist.',
  },
  learnings: [
    {
      title: 'Eine Idee, viele Formate.',
      text: 'Reels, Posts, Programm und Buch erzählen dieselbe Botschaft – jedes Format erreicht Menschen an einer anderen Stelle.',
    },
    {
      title: 'Glaubwürdig ist, was man selbst lebt.',
      text: 'Das Projekt begann mit meiner eigenen Handynutzung. Die persönliche Geschichte war der stärkste Teil der Marke.',
    },
    {
      title: 'Routinen schlagen Verbote.',
      text: 'Gewohnheiten ändern sich über einfache, wiederholbare Schritte – nicht über Verzicht und Willenskraft allein.',
    },
  ],
};
