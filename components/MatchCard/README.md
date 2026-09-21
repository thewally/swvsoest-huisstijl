# MatchCard

Kaart voor één wedstrijd in het programma of de uitslagen.

- `home` en `away`: `{ name, logo }`; het logo mag ontbreken, dan komt er een neutraal rondje.
- `category`: het team ("JO13-1", "Vrouwen 1"), in blauw kapitaal.
- `status`: `gepland` (toont `date` en de aanvangstijd `time`), `gespeeld` (toont `score` als [thuis, uit]) of `afgelast` (badge "Afgelast", tijd doorgestreept). Zet de reden in `location`.
- Clublogo's altijd in de originele kleuren uit `assets/Clubs/`; de witte versies zijn alleen voor gekleurde achtergronden.
- Tijden in 24-uursnotatie ("10:30"). De uitslag staat in de display-letter met een halve spatie rond het streepje.
