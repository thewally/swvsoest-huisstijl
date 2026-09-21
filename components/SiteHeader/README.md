# SiteHeader

Bovenbalk van elke pagina: het logo met de naam, het hoofdmenu en één actieknop.

- `logoSrc`: `assets/Logos/logo-svs.svg`. Het schild staat altijd links, met rechts ervan "SAMENWERKING VOETBALVERENIGINGEN" klein en "Soest" groot in de display-letter.
- `items`: hooguit zes menu-items van één woord. Zet `active` op het item van de huidige sectie; dat krijgt een groene onderstreping en `aria-current="page"`.
- `cta`: één primary-actie, meestal "Word lid".
- Op mobiel verbergt de header het menu. Zorg zelf voor een menuknop die het uitklapmenu opent, met `shadow-raised`.
