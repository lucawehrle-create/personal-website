# lucawehrle.de

Persönliche Website von Luca Wehrle: komplett neu aufgebaut als schnelle, statische Seite mit [Astro](https://astro.build).

- **Keine Cookies, kein Tracking, keine Drittanbieter.** Schriften sind selbst gehostet (DSGVO-freundlich, keine Google-Fonts-Anfragen).
- **Hell & dunkel:** Die Seite folgt dem System, und oben rechts lässt sich das Farbschema umschalten.
- **Funktioniert ohne JavaScript.** JS sorgt nur für Animationen, das Mobile-Menü, den Theme-Schalter und „E-Mail kopieren“.
- **SEO:** Meta- und Open-Graph-Tags, Share-Bild, `sitemap.xml`, `robots.txt` und strukturierte Daten (schema.org/Person).

## Inhalte ändern

Alle Texte stehen in **`src/data/site.ts`**: Hero, Über mich, Projekte, Werdegang, Toolbox und Kontakt. Einfach dort anpassen. Die Komponenten musst du dafür nicht anfassen.

- Neues Projekt: einen Eintrag in `projects` ergänzen. Als `visual` gibt es aktuell `'potato'` und `'focus'`. Neue Illustrationen kommen nach `src/components/ProjectVisual.astro`.
- Nicht mehr auf Jobsuche: `openForWork: false` setzen. Dann verschwinden die „Verfügbar“-Badges.

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
  components/           ← Abschnitte der Startseite (Hero, About, Projects, …)
  layouts/Base.astro    ← HTML-Grundgerüst, Meta-Tags, Fonts
  layouts/Legal.astro   ← Layout für Impressum & Datenschutz
  pages/                ← Routen: /, /impressum, /datenschutz, 404, sitemap.xml
  styles/global.css     ← Design-Tokens (Farben, Schriften) und Basis-Styles
public/                 ← Favicons, Share-Bild (og-image.png), robots.txt
```

Farben und Schriften sind als CSS-Variablen ganz oben in `src/styles/global.css` definiert.
