# lucawehrle.de

Persönliche Website von Luca Wehrle: komplett neu aufgebaut als schnelle, statische Seite mit [Astro](https://astro.build).

- **Design:** dunkle, plakative Bühne mit breiter Display-Schrift (Archivo Expanded), Mono-Labels (JetBrains Mono), einem hellen „Papier“-Abschnitt und Orange als einziger Akzentfarbe.
- **Interaktionen:** Punktraster mit Cursor-Spotlight im Hero und in der Toolbox, Buchstaben-Animation für große Überschriften, Wort-für-Wort-Reveal im Intro, Pill-Navigation mit Scrollspy (mobil als Leiste unten), Cursor-Label über Projektbildern.
- **Extras:**
  - Porträt als Punktraster im Hero (folgt dem Cursor, zerfällt beim Scrollen)
  - Verstecktes Terminal: mit `/` oder ⌘K / Strg+K öffnen, `help` zeigt alle Befehle (z. B. `projekte`, `kartoffel`, `sudo hire luca`)
  - Projekte als Experiment-Log (Hypothese → Test → Ergebnis → Learning)
  - Recruiter-Modus unter `/recruiter/`: kompakte, druckbare Übersicht, als PDF speicherbar
  - Unterschrift im Kontaktbereich, die sich selbst schreibt
- **Barrierearm:** Mit „Bewegung reduzieren“ im Betriebssystem laufen keine Animationen. Ohne JavaScript ist trotzdem alles lesbar.
- **Keine Cookies, kein Tracking, keine Drittanbieter.** Schriften sind selbst gehostet (DSGVO-freundlich, keine Google-Fonts-Anfragen).
- **SEO:** Meta- und Open-Graph-Tags, Share-Bild, `sitemap.xml`, `robots.txt` und strukturierte Daten (schema.org/Person).

## Inhalte ändern

Alle Texte stehen in **`src/data/site.ts`**: Hero, Intro, Projekte, Über mich, Werdegang, Toolbox und Kontakt. Einfach dort anpassen. Die Komponenten musst du dafür nicht anfassen. Wörter in `*Sternchen*` erscheinen im Intro in Orange.

- Neues Projekt: einen Eintrag in `projects` ergänzen und das Vorschaubild (16:10, z. B. 1600 × 1000 px) nach `src/assets/projects/` legen. Astro erzeugt daraus automatisch optimierte Größen.
- Echte Fotos oder Screenshots: einfach die Dateien in `src/assets/projects/` ersetzen (gleicher Dateiname) oder den Import in `site.ts` anpassen.

### Porträt austauschen

1. Foto als `src/assets/portrait.jpg` ablegen (wird im Recruiter-Modus gezeigt).
2. Eine freigestellte Version (PNG mit transparentem Hintergrund) als `src/assets/portrait-cutout.png` ablegen, z. B. mit remove.bg oder der Freistellen-Funktion in Apple Fotos.
3. `npm run portrait` ausführen. Das erzeugt `src/data/portrait-map.ts` für das Punktraster im Hero.

### Unterschrift austauschen

Die Unterschrift ist ein Scan der echten Unterschrift, nachgezeichnet als ein einziger SVG-Pfad (`src/data/signature.ts`: `viewBox` + `d`). Für eine neue Version den Scan vektorisieren (z. B. potrace oder Inkscape „Bitmap nachzeichnen“) und `viewBox` und Pfad dort ersetzen. Gefüllt wird mit der Akzentfarbe, beim Hereinscrollen „schreibt“ sie sich von links nach rechts.

### Vor dem Livegang

In `src/data/site.ts` unter `legal` die **Anschrift** und den **Hosting-Anbieter** eintragen. Solange die Felder leer sind, zeigen Impressum und Datenschutzerklärung orangefarbene Platzhalter.

## Lokal starten

Voraussetzung ist Node.js 24 (siehe `.nvmrc`; mindestens 22.23.4).

```sh
npm install
npm run dev       # Entwicklungsserver auf http://localhost:4321
npm run build     # statische Seite nach dist/
npm run preview   # gebaute Seite lokal ansehen
npm run check     # Typ- und Template-Prüfung
```

## Deployment

`npm run build` erzeugt im Ordner `dist/` eine rein statische Seite. Sie läuft auf jedem Static-Hoster:

| Anbieter | Build-Befehl | Output-Ordner |
| --- | --- | --- |
| Netlify, Vercel, Cloudflare Pages | `npm run build` | `dist` |
| GitHub Pages | per GitHub Action ([Anleitung](https://docs.astro.build/en/guides/deploy/github/)) | – |
| Klassischer Webspace (z. B. IONOS, Strato, all-inkl) | lokal `npm run build`, dann den Inhalt von `dist/` per FTP hochladen | – |

Danach die Domain `lucawehrle.de` beim neuen Hoster hinterlegen und die DNS-Einträge umstellen.

## Struktur

```
src/
  data/site.ts          ← alle Inhalte
  components/           ← Abschnitte (Hero, Statement, Projects, About, Career, Contact)
                           plus Nav, Footer, DotField (Punktraster + Porträt), RiseText (Buchstaben-Animation),
                           Terminal und Signature
  assets/                ← Porträt und Projektbilder (werden beim Build optimiert)
  layouts/Base.astro    ← HTML-Grundgerüst, Meta-Tags, Fonts, Filmkorn, Uhrzeit
  layouts/Legal.astro   ← Layout für Impressum & Datenschutz
  pages/                ← Routen: /, /recruiter, /impressum, /datenschutz, 404, sitemap.xml
  styles/global.css     ← Design-Tokens (Farben, Schriften) und Basis-Styles
public/                 ← Favicons, Share-Bild (og-image.png), robots.txt
scripts/portrait-map.mjs ← erzeugt die Helligkeitskarte des Porträts (npm run portrait)
```

Farben und Schriften sind als CSS-Variablen ganz oben in `src/styles/global.css` definiert. Die Klasse `.paper` schaltet einen Abschnitt auf die helle Palette um.
