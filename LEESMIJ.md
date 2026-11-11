# Studio: dashboard en boekhouding in één app

Een installeerbare web-app (PWA) met je studio-dashboard en je boekhoudtool. De app werkt offline. Je gegevens staan in een map op je eigen computer, bijvoorbeeld in iCloud Drive. Ze gaan niet naar een server.

## Wat zit erin

| Bestand | Wat het is |
| --- | --- |
| `index.html` | Het dashboard: Vandaag, Sales, Klanten, Projecten, Automatiseringen, Financiën |
| `boekhouding.html` | Je boekhoudtool, met een knop terug naar het dashboard |
| `manifest.webmanifest`, `sw.js`, `icons/` | Zorgen dat je de app kunt installeren en offline kunt gebruiken |

In je opslagmap komen te staan:

- `administratie.json`: je boekhouding
- `dashboard.json`: je dashboard
- `backups/`: automatisch één kopie per dag van allebei
- `bijlagen/`: bonnetjes en facturen uit je boekhouding

## Online zetten

Een PWA moet via `https` worden geopend. Kies één van deze manieren.

**Netlify Drop (snelst, gratis)**
1. Pak de zip uit.
2. Ga naar app.netlify.com/drop en sleep de map `studio` erin.
3. Je krijgt een adres zoals `https://iets-willekeurigs.netlify.app`. Maak een gratis account aan, anders verdwijnt de site na een uur. In de instellingen kun je het adres een herkenbare naam geven.

**GitHub Pages**
1. Maak een repository, bijvoorbeeld `studio`, en zet de bestanden erin.
2. Kies bij Settings → Pages de branch `main` en de map `/ (root)`.
3. De app staat dan op `https://<gebruikersnaam>.github.io/studio/`.

Online staan alleen de app-bestanden. Je administratie blijft op je computer.

**Eerst lokaal proberen?** Open een terminal in de map en start `python3 -m http.server 8000`. Ga dan naar http://localhost:8000. Ook dat adres kun je installeren.

## Installeren

1. Open het adres in **Google Chrome** of **Microsoft Edge**.
2. Klik op het installatie-icoon rechts in de adresbalk, of kies in het menu **App installeren**.
3. *Studio* staat daarna als app in je Dock, Launchpad of Startmenu.

Safari kan niet in een map opslaan. Gebruik daarom Chrome of Edge.

## Eerste keer

1. Open **Boekhouding** → **Instellingen** → **Map kiezen**. Kies dezelfde map in iCloud Drive die je nu al voor de boekhoudtool gebruikt. De app ziet dat er al een `administratie.json` staat. Kies **OK** om je bestaande administratie te openen.
2. Het dashboard gebruikt die map vanzelf ook.
3. Heb je al gegevens in de online versie van het dashboard? Kies daar bij Instellingen **Back-up kopiëren (JSON)**. Kies in de app bij Instellingen **Back-up plakken…** en plak de back-up.

Na een herstart van de browser vraagt Chrome soms opnieuw toestemming voor de map. Klik dan op **Toestemming geven** in de zijbalk.

## Updates

Zet nieuwe versies van de bestanden op dezelfde plek. Verhoog ook `VERSIE` in `sw.js`, bijvoorbeeld van `studio-v1` naar `studio-v2`. De app laadt de nieuwe versie zodra je online bent.
