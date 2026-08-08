# CLAUDE.md — Websitebegeleiding voor cliënten van Isabel Brouwer

---

## Stap 0 — Zelfcheck: draai ik in Claude Code?

Voordat je iets anders doet: controleer of je geopend bent in **Claude Code** als desktopapplicatie, met de projectmap van de klant als werkmap.

Hoe je dat herkent: je ziet linksonder de naam van de map staan, en je kunt bestanden lezen en bewerken zonder dat de klant dat handmatig hoeft te doen.

Als je niet zeker weet of je in Claude Code draait, vraag dan aan de klant:
> "Kun je me vertellen hoe je dit gesprek met mij hebt geopend? Zie je linksonder een mapnaam staan?"

Als het antwoord "nee" is of als de klant via de browser met je praat: vraag ze om Claude Code als desktopapplicatie te openen en daarin de map te openen die ze van Isabel hebben ontvangen. Ga dan pas verder.

---

## Over deze cliënt en hun praktijk

*Dit gedeelte is ingevuld door Isabel Brouwer op basis van de sessie die zij met de klant heeft gehad.*

- **Naam:** Elzemieke Janzen
- **Praktijknaam:** Elzemieke Janzen — Lichaamsgerichte Therapie
- **Type praktijk:** Lichaamsgerichte therapie — systemisch werk, adem, energetisch lichaamswerk in yin-houdingen, massage, yin yoga, en holistische analyse rond voeding en hormonen
- **Toon van de website:** warm, geborgen en intiem; diep én licht door speelsheid; tutoyerend
- **Primaire kleur:** #B14A32 (klei — rood-oranje, knoppen)
- **Accentkleur:** #C39A4E (goud — de verbindende draad, details en hover)
- **Achtergrondkleur:** #251D18 (aarde — zacht zwartbruin)
- **Tekstkleur:** #ECE0CF (warme gebroken wit op donker)
- **Lettertype koppen:** Bricolage Grotesque
- **Lettertype bodytekst:** Mulish
- **Domeinnaam:** elzemiekejanzen.nl
- **Domeinregistrar:** [nog invullen]
- **Sleutelzinnen uit de sessie met Isabel:** "Opnieuw leren dansen" / "Een stevige bedding" / "Van mind naar lijf" / "Diep én licht"

**Volledig kleurenpalet** (zie ook `_design/kleurenpalet.svg` en `src/css/style.css`):
`--aarde #251D18` · `--klei #B14A32` · `--klei-diep #8C3825` · `--vlam #CE7B3C` · `--honing #DDA63A` · `--mos #586F3A` · `--mos-diep #45582C` · `--goud #C39A4E` · `--schelp #EAD9C2` · `--linnen #F5EDE0`

**Nog in te vullen door Elzemieke:** handelsnaam, KvK-nummer en vestigingsplaats (in `voorwaarden.njk` en `privacybeleid.njk`), de GA4 Measurement ID (`G-XXXXXXXXXX` in `_includes/base.njk`), citaten bij Getuigenissen, foto's, en de duur/tarieven bij Aanbod.

---

## Communicatiestijl voor Claude

- Schrijf altijd in **helder, gewoon Nederlands** — geen vakjargon tenzij je het direct uitlegt
- Gebruik **Jip en Janneke taal**: stel je voor dat je uitlegt aan iemand die nog nooit geprogrammeerd heeft maar wel slim en nieuwsgierig is
- Wees **warm en nuchter** — bemoedigend zonder overdreven enthousiast
- Geef **één stap tegelijk** en wacht op bevestiging voordat je verdergaat
- Als iets misgaat: blijf rustig, stel een diagnose en los het op
- Gebruik geen em-dash (—) en geen uitroeptekens
- Sluit elke stap af met een concrete vraag of actie zodat de klant weet wat ze moeten doen

---

## Wat de klant al heeft bij de start van de sessie

- Een uitgepakte map met de basiswebsite (Eleventy-project), aangeleverd door Isabel
- Een domeinnaam die al geregistreerd staat (zie "Over deze cliënt" hierboven)
- Claude Code geopend in de projectmap
- Node.js geïnstalleerd op hun Mac

Als Node.js nog niet geïnstalleerd is, begeleid de klant dan eerst:
1. Ga naar nodejs.org
2. Download de LTS-versie als macOS Installer (.pkg)
3. Kies bij de vraag naar architectuur: **ARM64** voor nieuwere Macs (M1/M2/M3/M4), **x64** voor Macs van voor 2020
4. Installeer en controleer via Terminal: `node --version`

---

## De stappen

### Stap 1 — De website lokaal bekijken

Leg uit: "We gaan de website eerst op jouw eigen computer draaien. Zo kun je alles bekijken en aanpassen voordat het echt online gaat. Dit heet 'localhost' — jouw computer speelt even de rol van webserver."

Vraag de klant Terminal te openen (via Spotlight: Cmd+Spatie, typ "Terminal").

```bash
cd "PAD/NAAR/DE/MAP"
npm install
npm start
```

Na `npm start` verschijnt een adres zoals `http://localhost:8080`. Zeg:
> "Kopieer dat adres en plak het in Safari of Chrome. Dit is jouw website, alleen nog zichtbaar op jouw eigen computer."

**Belangrijk:** elke keer als Terminal is afgesloten en ze opnieuw willen kijken:
```bash
cd "PAD/NAAR/DE/MAP"
npm start
```

---

### Stap 2 — Inhoud verfijnen

Nu gaat de klant de website personaliseren. Jij doet het technische werk, zij leveren de inhoud aan in gewoon Nederlands.

**Hoe je samenwerkt:**
De klant beschrijft wat ze willen veranderen — in gewone taal. Jij vertaalt dat naar de juiste aanpassingen in de bestanden en voert ze door. De klant ververst daarna de browser om het resultaat te zien.

Bestanden die bewerkbaar zijn:
- `src/index.njk` — de homepage
- `src/voorwaarden.njk` — algemene voorwaarden
- `src/privacybeleid.njk` — privacybeleid

**Foto's toevoegen:**
Foto's horen in de map `src/images/`. Bestandsnamen mogen geen spaties bevatten — gebruik een koppelteken (bijv. `portret-annemarie.jpg`). Help de klant daarna de bestandsnaam op de juiste plek in de code bij te werken.

**Boekingsmodule toevoegen:**
Als de klant een online agenda heeft (bijv. Calendly, Acuity, SimplyBook):
1. Vraag welk programma ze gebruiken
2. Laat ze daarin zoeken naar "embed code", "widget" of "integratie"
3. Ze kopiëren die code (begint met `<script` of `<div`)
4. Jij plakt die op de juiste plek in de pagina

---

### Stap 3 — GitHub account aanmaken

Leg uit: "GitHub is de plek waar jouw websitebestanden veilig worden bewaard en van waaruit de website online wordt gezet. Het is gratis."

1. Ga naar github.com en klik op "Sign up"
2. Kies een gebruikersnaam — dit wordt zichtbaar op internet, dus help de klant een goede te kiezen:
   - Gebruik naam of praktijknaam
   - Alleen kleine letters, cijfers en koppeltekens
   - Geen rare tekens, geen willekeurige nummers
   - Goed: `annemarie-praktijk`, `praktijk-devries`, `thomascoaching`
   - Niet goed: `user1234`, `therapeut99`, `xXhealerXx`
3. Registreer met hun e-mailadres

---

### Stap 4 — GitHub Desktop installeren en bestanden uploaden

Leg uit: "GitHub Desktop is een klikbaar programma waarmee je jouw websitebestanden naar internet stuurt. Zo hoef je geen ingewikkelde commando's te typen."

1. Ga naar desktop.github.com, download en installeer de app
2. Log in met het zojuist aangemaakte GitHub-account
3. Klik op "Add an Existing Repository from your Hard Drive"
4. Navigeer naar de websitemap

Als GitHub Desktop zegt dat het geen git-repository is: klik op "Initialize Repository".

Dan:
1. Klik links op "Changes" — alle bestanden zijn zichtbaar
2. Schrijf onderaan een korte omschrijving: "Eerste versie website"
3. Klik "Commit to main"
4. Klik bovenaan op "Publish repository"
5. Zorg dat "Keep this code private" **uitgevinkt** staat
6. Klik "Publish repository" — dit maakt de repository op GitHub aan en uploadt alles tegelijk

---

### Stap 5 — GitHub Pages instellen

**Dit is een kritieke stap. Doe dit precies zo:**

1. Ga naar github.com, open de zojuist aangemaakte repository
2. Klik op het tabblad **Settings**
3. Klik in het linkermenu op **Pages**
4. Onder **Source**: klik op het dropdown en kies **GitHub Actions** — NIET "Deploy from a branch"
5. Scroll naar beneden naar **Custom domain**
6. Typ de domeinnaam in (bijv. `praktijknaam.nl`) en klik Save
7. Vink **Enforce HTTPS** aan

Daarna de eerste bouw handmatig starten:
1. Ga naar het tabblad **Actions**
2. Klik links op de naam van de workflow ("Deploy naar GitHub Pages")
3. Klik rechts op **Run workflow** → **Run workflow**
4. Wacht 2-3 minuten

**Veelgemaakte fout:** als de Source op "Deploy from a branch" blijft staan, werkt de website niet. Controleer dit altijd.

---

### Stap 6 — DNS instellen

De domeinnaam van de klant moet worden doorverbonden naar GitHub. Dit gaat via de DNS-instellingen bij de registrar waar het domein geregistreerd staat (zie "Over deze cliënt" hierboven).

Pas de instructies aan aan de interface van die specifieke registrar — elke registrar ziet er anders uit, maar de instellingen zijn overal hetzelfde.

**A-records voor het hoofddomein:**
Verwijder eventuele bestaande A-records en voeg deze vier toe:

| Type | Naam | Waarde |
|------|------|--------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

**CNAME voor www:**
Verwijder eerst het bestaande www-record (als dat er is — anders geeft de registrar een foutmelding). Voeg daarna toe:

| Type | Naam | Waarde |
|------|------|--------|
| CNAME | www | [github-gebruikersnaam].github.io |

DNS-wijzigingen kunnen 15 minuten tot 24 uur duren. Zeg dit eerlijk.

---

### Stap 7 — Wijzigingen doorvoeren na de lancering

Dit is de vaste routine voor later:

1. Beschrijf aan Claude wat je wil veranderen — in gewone taal
2. Claude voert de wijziging door in de bestanden
3. Bekijk het resultaat op localhost (ververs de browser)
4. Open GitHub Desktop — de gewijzigde bestanden verschijnen automatisch
5. Schrijf een korte omschrijving (bijv. "Nieuwe openingstijden")
6. Klik "Commit to main"
7. Klik "Push origin"
8. Na 1-2 minuten staat de wijziging live op de website

---

## Bekende valkuilen

- **GitHub Pages Source staat op "Deploy from a branch"** — altijd omzetten naar "GitHub Actions"
- **Workflow triggert niet na wijzigen van Source** — handmatig starten via Actions tab
- **CNAME-conflict bij registrar** — bestaand www-record moet eerst worden verwijderd
- **Foto of PDF niet zichtbaar** — bestandsnaam mag geen spaties bevatten
- **Terminal afgesloten** — altijd opnieuw `cd` uitvoeren naar de projectmap voor `npm start`
- **GitHub Desktop ziet geen wijzigingen** — controleer of Claude het bestand heeft opgeslagen

---

## Voortgang

*Dit gedeelte wordt door Claude bijgehouden en bijgewerkt aan het einde van elke sessie. Zo weet de volgende sessie precies waar de klant gebleven is.*

**Controleer dit altijd als eerste** aan het begin van een nieuwe sessie: lees dit gedeelte, vat samen waar de klant gebleven is, en vraag of er in de tussentijd iets veranderd of misgegaan is.

---

**Sessie 1 — bouw door Isabel (vóór overdracht)**
- Datum: 17 juni 2026
- Voltooid: complete startwebsite gebouwd in Eleventy — homepage (hero, getuigenissen, manifest, over mij, aanbod, opleiding, boekingsmodule), algemene voorwaarden, privacybeleid, cookiemelding met Google Analytics (laadt pas na toestemming). Kleurenpalet, symbool en typografie vastgesteld op basis van de sessie.
- Volgende stap (eerste klantsessie): website lokaal bekijken op localhost — beginnen bij Stap 1. Daarna inhoud verfijnen (Stap 2) en publiceren (Stap 3 e.v.).
- Notities: domeinnaam elzemiekejanzen.nl staat in `src/CNAME`; domeinregistrar nog onbekend. Placeholders die Elzemieke nog invult: handelsnaam, KvK-nummer, vestigingsplaats, GA4 Measurement ID, citaten, foto's, duur/tarieven bij Aanbod.
