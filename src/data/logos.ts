// Bildmarken der Stationen im Lebenslauf (Recruiter-Modus), zugeordnet über den Namen der Organisation.
// Quellen: offizielle Websites bzw. Wikimedia Commons (Würth); bei Würth und Jönköping nur das Bildzeichen.
import type { ImageMetadata } from 'astro';
import wuerth from '../assets/logos/wuerth.svg';
import semban from '../assets/logos/semban.svg';
import gemuesegruss from '../assets/logos/gemuesegruss.jpg';
import mindfulscreen from '../assets/mindfulscreen/logo-mark.png';
import uniMannheim from '../assets/logos/uni-mannheim.png';
import uniTrier from '../assets/logos/uni-trier.png';
import jonkoping from '../assets/logos/jonkoping-university.svg';
import bszStockach from '../assets/logos/bsz-stockach.png';
import thinc from '../assets/logos/thinc.svg';

// bg: Fläche hinter dem Logo; pad: Abstand zum Rand für Zeichen ohne eigene Fläche
export type Logo = { src: ImageMetadata; bg: string; pad?: boolean };

export const logos: Record<string, Logo> = {
  'Würth IT': { src: wuerth, bg: '#fff', pad: true },
  'Würth Deutschland': { src: wuerth, bg: '#fff', pad: true },
  SemBan: { src: semban, bg: '#fc5200' },
  GemüseGruß: { src: gemuesegruss, bg: '#fff' },
  Mindfulscreen: { src: mindfulscreen, bg: '#000', pad: true },
  'Computerpool der Fakultät BWL': { src: uniMannheim, bg: '#fff' },
  'Universität Mannheim': { src: uniMannheim, bg: '#fff' },
  'Universität Trier': { src: uniTrier, bg: '#fff', pad: true },
  'Jönköping University': { src: jonkoping, bg: '#fff', pad: true },
  'Berufsschulzentrum Stockach': { src: bszStockach, bg: '#fff' },
  'thinc! e.V.': { src: thinc, bg: '#0a0f2c' },
};
