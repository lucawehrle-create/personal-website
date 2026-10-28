// Bildmarken der Stationen im Lebenslauf (Recruiter-Modus), zugeordnet über den Namen der Organisation.
// Quellen: offizielle Websites bzw. Wikimedia Commons (Würth). Bei breiten Logos nur das Bildzeichen
// (Würth, Universitäten, BSZ Stockach) – als SVG, damit es in jeder Größe scharf bleibt.
import type { ImageMetadata } from 'astro';
import wuerth from '../assets/logos/wuerth.svg';
import semban from '../assets/logos/semban.svg';
import gemuesegruss from '../assets/logos/gemuesegruss.png';
import mindfulscreen from '../assets/logos/mindfulscreen.png';
import uniMannheim from '../assets/logos/uni-mannheim.svg';
import uniTrier from '../assets/logos/uni-trier.svg';
import jonkoping from '../assets/logos/jonkoping-university.svg';
import bszStockach from '../assets/logos/bsz-stockach.svg';
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
  'Berufsschulzentrum Stockach': { src: bszStockach, bg: '#fff', pad: true },
  'thinc! e.V.': { src: thinc, bg: '#0a0f2c' },
};
