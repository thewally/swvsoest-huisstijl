# Merkboek

Samenwerking Voetbalverenigingen Soest (SVS) is de samenwerking tussen de Soester voetbalclubs VVZ'49 en So Soest. De huisstijl laat zien wat de samenwerking is: twee clubs die ieder hun eigen kleur houden en elkaar de hand geven. Groen staat voor VVZ'49, blauw voor So Soest en navy houdt het geheel bij elkaar. Deze huisstijl is de basis voor de website en al het andere materiaal.

## Naam en toon

- Schrijf de naam de eerste keer voluit: "Samenwerking Voetbalverenigingen Soest". Daarna mag "de samenwerking" of "SVS".
- Schrijf de clubnamen zoals de clubs dat zelf doen: "VVZ'49" (met apostrof, geen spatie) en "So Soest". Noem ze steeds in dezelfde volgorde als in het logo: eerst VVZ'49, dan So Soest.
- Spreek lezers aan met "je", niet met "u". Schrijf kort en concreet, zoals een trainer langs de lijn praat: "Zaterdag spelen de JO13's hun eerste gezamenlijke toernooi."
- Koppen in zinsletters ("Komende wedstrijden"). Hoofdletters alleen in labels, via de stijl `label`.
- Geen uitroeptekens in koppen, geen emoji, geen overdreven woorden ("de allerbeste", "uniek").
- Data voluit ("zaterdag 26 september 2026") in lopende tekst. In kaarten mag het kort ("Za 26 sep"). Tijden altijd in 24-uursnotatie ("10:30").

## Logo

- Gebruik `assets/Logos/logo-svs.svg`. Maak het logo nooit na, trek het niet uit verhouding, draai het niet en verander de kleuren niet.
- Vrije ruimte: houd rondom het schild minstens de hoogte van het SOEST-lint leeg.
- Minimaal formaat: 64px breed op scherm, 20mm breed in druk. Daaronder gebruik je `beeldmerk-handdruk.svg`.
- Het logo staat het best op `surface` (wit) of `surface-alt`. Op een foto zet je het alleen op een rustig, egaal deel.
- Onder de handdruk staan vijf witte sterren op een rij, twee op het groen, één op de naad en twee op het blauw. Ze horen bij het logo; laat ze nooit weg en gebruik ze niet los als decoratie.
- De clublogo's in het schild zijn wit en laten de achtergrondkleur zien. Dat hoort altijd zo: VVZ'49 op het groen, So Soest op het blauw.

## Kleur

- De drie merkkleuren komen uit het logo: `vvz-groen` (#35A044), `so-blauw` (#1B4F91) en `navy` (#0B2A52). Gebruik ze voor grote vlakken, banden en de footer.
- Het gesplitste vlak (links groen, rechts blauw, precies half om half) is het herkenningsteken. Gebruik het in de Hero, als dunne band onder de footer en als fotovervanger, altijd met groen links.
- Tekst is `ink` op `surface`, `surface-alt` of `surface-raised`, en secundaire tekst is `ink-muted`.
- Zet geen gewone witte tekst op `vvz-groen`, want dat is te licht (3,35:1). Wit mag daar alleen vanaf 24px, of 19px vet. Op `so-blauw` en `navy` mag wit in elk formaat.
- Knoppen en links gebruiken de donkerdere actiekleuren: `groen-actie` met `on-groen-actie`, en `blauw-actie` met `on-blauw-actie`. Die zijn in beide thema's goed leesbaar.
- Groen en blauw zijn gelijkwaardig. Kies niet steeds dezelfde kleur voor het belangrijkste element: de primaire actie is groen, de secundaire blauw.
- Statuskleuren (`danger`, `warning`, `success`) gebruik je alleen voor status en altijd met een woord erbij.
- Er is een licht en een donker thema. Het donkere thema gebruikt lichtere actiekleuren met donkere tekst erop. De merkkleuren blijven gelijk.

## Typografie

- Archivo Black (`display`) is de letter van het SOEST-lint. Gebruik hem alleen voor grote koppen: `display`, `h1` en uitslagen (`score`). Nooit voor lopende tekst.
- Archivo (`sans`) is voor al het andere: `h2` en `h3` in extra vet en vet, `body` voor lopende tekst en `body-sm` in kaarten.
- `label` is het kapitaal-label met ruime spatiëring, een echo van "SAMENWERKING" in het logo. Zet het boven sectiekoppen (in `groen-actie`) en in badges.
- Houd regels in lopende tekst op maximaal 70 tekens.
- Beide letters zijn open source (SIL Open Font License) en zitten als bestand in `fonts/`.

## Ruimte, vorm en schaduw

- Ruimte gaat in stappen van de spacing-schaal: `space-4` binnen elementen op mobiel, `space-6` in kaarten en als gutter op desktop, `space-16` tussen secties op desktop.
- De inhoud is maximaal `container-max` (1200px) breed.
- Afronding: `radius-md` (8px, zoals het SOEST-lint) voor knoppen, `radius-lg` voor kaarten en foto's, `radius-full` alleen voor het beeldmerk-rondje.
- Schaduw spaarzaam: `shadow-card` voor klikbare kaarten, `shadow-raised` voor menu's. Scheid verder met `line`, niet met schaduw.
- Toetsenbordfocus is altijd een ring van 2px in `focus-ring`, met 2px afstand. Op gekleurde vlakken is de ring wit.

## Beeld

- Gebruik echte foto's van leden, jeugd en vrijwilligers van beide clubs, in actie en in daglicht. Geen stockfoto's van onbekende spelers.
- Laat bij voorkeur spelers van beide clubs samen zien, bijvoorbeeld op een gezamenlijke training of een toernooi.
- Foto's in kaarten zijn 16:9 met `radius-lg`. Geen filters of kleurlagen over foto's.
- Is er (nog) geen foto, gebruik dan het gesplitste groen/blauwe vlak. Nooit een grijze placeholder.

## Iconen

- De handdruk in het logo is een lijntekening. Gebruik daarom lijn-iconen met een lijndikte van 2px en afgeronde uiteinden, zoals de open-source set Lucide (ISC-licentie).
- Iconen krijgen de kleur van de tekst ernaast (`ink`, of `on-groen-actie` in een groene knop) en zijn 20px in lopende tekst en 24px in knoppen.
- Een icoon staat nooit alleen voor een actie. Er staat een tekstlabel bij, of anders een `aria-label`.

## Website-onderdelen

- Elke pagina begint met `SiteHeader` en eindigt met `SiteFooter`.
- De homepage opent met de `Hero`. Daarna volgen secties met een `SectionHeading`: bijvoorbeeld het programma in `MatchCard`s en het nieuws in `NewsCard`s.
- Wissel secties af tussen `surface` en `surface-alt`, zodat de pagina ritme krijgt zonder lijnen.
- Per scherm is er één primaire knop (`Button variant="primary"`).
