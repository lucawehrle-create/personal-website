// Erzeugt aus dem freigestellten Porträt eine Helligkeitskarte für das Punktraster im Hero.
//
//   1. Porträt mit transparentem Hintergrund nach src/assets/portrait-cutout.png legen
//   2. npm run portrait
//
// Ergebnis: src/data/portrait-map.ts (pro Rasterzelle ein Byte; 0 = kein Punkt, 1–255 = Helligkeit).
import { writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const SOURCE = 'src/assets/portrait-cutout.png';
const TARGET = 'src/data/portrait-map.ts';
const WIDTH = 128;

const { data: full, info } = await sharp(SOURCE).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

// Auf die sichtbare Person zuschneiden.
let left = info.width;
let top = info.height;
let right = 0;
let bottom = 0;
for (let y = 0; y < info.height; y++) {
  for (let x = 0; x < info.width; x++) {
    if (full[(y * info.width + x) * 4 + 3] > 24) {
      left = Math.min(left, x);
      right = Math.max(right, x);
      top = Math.min(top, y);
      bottom = Math.max(bottom, y);
    }
  }
}

const height = Math.round((WIDTH * (bottom - top + 1)) / (right - left + 1));
const { data } = await sharp(SOURCE)
  .ensureAlpha()
  .extract({ left, top, width: right - left + 1, height: bottom - top + 1 })
  .resize(WIDTH, height, { fit: 'fill' })
  .raw()
  .toBuffer({ resolveWithObject: true });

// Helligkeit innerhalb der Person auf den vollen Bereich strecken (2.–98. Perzentil).
const luma = [];
for (let i = 0; i < WIDTH * height; i++) {
  const [r, g, b, a] = [data[i * 4], data[i * 4 + 1], data[i * 4 + 2], data[i * 4 + 3]];
  luma.push(a > 127 ? 0.2126 * r + 0.7152 * g + 0.0722 * b : -1);
}
const sorted = luma.filter((v) => v >= 0).sort((a, b) => a - b);
const lo = sorted[Math.floor(sorted.length * 0.02)];
const hi = sorted[Math.floor(sorted.length * 0.98)];

// Gesicht betonen: zum Rand hin (Kleidung, Schultern) etwas abdunkeln.
const FACE = { x: 0.42, y: 0.3 };
const bytes = Buffer.alloc(WIDTH * height);
luma.forEach((v, i) => {
  if (v < 0) return;
  const x = (i % WIDTH) / WIDTH;
  const y = Math.floor(i / WIDTH) / height;
  const dist = Math.hypot(x - FACE.x, (y - FACE.y) * 0.8);
  const falloff = 1 - 0.5 * Math.min(1, Math.max(0, (dist - 0.3) / 0.45));
  const n = Math.min(1, Math.max(0, (v - lo) / (hi - lo))) * falloff;
  bytes[i] = 1 + Math.round(Math.pow(n, 0.85) * 254);
});

await writeFile(
  TARGET,
  `// Automatisch erzeugt von scripts/portrait-map.mjs – nicht von Hand bearbeiten.
export const portraitMap = {
  width: ${WIDTH},
  height: ${height},
  data: '${bytes.toString('base64')}',
};
`,
);
console.log(`${TARGET}: ${WIDTH}×${height} Zellen`);
