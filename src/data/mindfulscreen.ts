// Case Study Mindfulscreen: Marke gegen Handysucht mit Website, 21-Tage-Programm, Instagram und Buch.
import hero from '../assets/projects/mindfulscreen.webp';
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
    { display: '5,0 ★', label: 'Amazon-Bewertung für mein Buch' },
    { display: '1', label: 'Buch, bis heute auf Amazon erhältlich' },
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
      text: 'In 21 Tagen Handysucht loswerden: Kurs, Screen-Time-Rechner, Pomodoro-System und Fokus-Tracker in Notion.',
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
    rating: '5,0',
    ratings: 2,
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
  experiment: {
    hypothesis: 'Schüler:innen wollen weniger Zeit am Handy verbringen – sie brauchen nur jemanden, der zeigt, wie es geht.',
    test: 'Reels und Karussell-Posts auf Instagram, ein 21-Tage-Programm, eine Website und ein eigenes Buch.',
    result: '749 Follower und ein Buch mit 5,0 Sternen, das bis heute auf Amazon erhältlich ist.',
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
