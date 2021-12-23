# Marill
![Het gerealiseerde eindproduct op desktop: Marill, gerealiseerd in HTML, CSS en Javascript (audio)](https://marill.css-art.nl/img/marill.png "Marill")

<em> Klik op de video hierboven voor een demo! </em>

Marill voor de lol nagemaakt in HTML en CSS en een beetje JavaScript voor de audio. Marill is nagemaakt zonder enig winstoogmerk. 

<em>Alle rechten van Marill en andere Pokémon behoren tot de rechtmatige eigenaars.</em>
<br>
<em>All rights of Marill and other Pokémon belong to the rightfull owners. </em>

## Intro
Één van mijn favoriete Pokémon, Marill, nagemaakt in HTML en CSS. Marill slaapt maar jij kan hem/haar wakker maken door te klikken! Let op: Marill is zo blij dat ze roept van geluk!

## Dingen die ik heb geleerd
1. Een hele gave uitgebreide shortcut voor Emmet gebruikt: <code>figure.marill>div.marill__body+div.marill__ear.marill__ear--left+.marill__ear.marill__ear--right</code>
2. Bovenstaande Emmet shortcut resulteerde in de HTML in onderstaand screenshot.
![De gegenereerde HTML door Emmet](https://marill.css-art.nl/img/emmet.png "HTML code gegenereerd door Emmet")
3. Geleerd hoe je een animatie voor desktop en voor mobile kan maken door middel van het veranderen van een animation-name.
4. Opnieuw geoefend met mobile-first design en coderen m.b.t. Mediaquery.
5. Opnieuw gerealiseerd hoeveel ik hou van CSS-custom-properties / CSS-variables. Het is zo makkelijk om dingen aan te passen!
6. Opnieuw een bug met border gezien op kleinere resoluties (en ik gok ook op grotere?). De iris en de pupil zijn soms door het ooglid heen te zien wat een gek effect geeft. Als eerste oplossing heb ik <code>overflow: hidden </code> weggehaald op de ::after van het oog (ooglid) en het ooglid gewoon groter gemaakt. Dit werkte meestal maar op bepaalde kleinere resoluties weer niet. 
7. Ik heb 6. uitgebreid met een tweede oplossing. De iris en de pupil van Marill hebben standaard geen kleur waardoor er geen borders te zien zijn. Op het moment dat de checkbox gechecked wordt (lees: er geklik wordt op Marill) worden de kleuren direct toegevoegd. Hierdoor was de border bug opgelost aangezien er geen achtergrondkleur is en er dus ook niet kon doorschijnen.
8. Ik heb het verschil tussen <code> visibility: hidden; </code> en <code> display: none; </code> geleerd. Visibilty maakt het onzichtbaar maar het element "is er nog wel", dit betekent dat dingen niet verschuiven. De tweede property (display) wordt wanneer deze op none staat echt weggehaald (niet uit het DOM!!!). Hierdoor onstaat er ruimte voor andere properties. Kort samengevat: bij visibility wordt iets onzichtbaar gerenderd, bij display wordt het geheel niet gerenderd. 
9. Bij zowel visibility als display worden er <strong> geen </strong> elementen uit het DOM verwijderd.
 
## Screenshots
Verschillende screenshots van Marill op mobile en desktop. Op desktop verdwijnt Marill zijn / haar staart. Ook is er een foto van shiny Marill toegevoegd!

### Desktop Screenshots

#### Marill 
![Het gerealiseerde eindproduct op desktop: Marill, gerealiseerd in HTML, CSS en Javascript (audio)](https://marill.css-art.nl/img/marill.png "Marill")

#### Marill Slapend
![Het gerealiseerde eindproduct op desktop: Marill slapend, gerealiseerd in HTML, CSS en Javascript (audio)](https://marill.css-art.nl/img/marill--sleeping.png "Marill slapend")

#### Shiny Marill
![Het gerealiseerde eindproduct op desktop: Shiny Marill, gerealiseerd in HTML, CSS en Javascript (audio)](https://marill.css-art.nl/img/marill--shiny.png "Shiny Marill")

### Mobile Screenshots

#### Marill
![Het gerealiseerde eindproduct op mobile: Marill zonder staart, gerealiseerd in HTML, CSS en Javascript (audio)](https://marill.css-art.nl/img/marill--mobile.png "Marill zonder staart")

#### Marill Slapend
![Het gerealiseerde eindproduct op mobile: Marill slapend zonder staart, gerealiseerd in HTML, CSS en Javascript (audio)](https://marill.css-art.nl/img/marill--mobile-sleeping.png "Marill slapend zonder staart")

## Resources
1. Site gebruik voor informatie en inspiratie voor en over Marill => https://bulbapedia.bulbagarden.net/wiki/Marill_(Pok%C3%A9mon) 
2. Site gebruikt voor het vinden van andere tinten van Marill zijn/haar blauwe kleur => https://www.0to255.com/4db6e8 
3. Geluid van Maril zijn/haar cry => https://pokemon.fandom.com/wiki/Hoenn_Pok%C3%A9dex# 
4. Opengraph.xyz voor het generen van OGP tags => https://opengraph.xyz
5. Plaatje gebruikt ter inspiratie voor shiny Marill => https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffc00.deviantart.net%2Ffs70%2Ff%2F2013%2F324%2Ff%2Fa%2Fshiny_marill_dream_world_art_by_trainerparshen-d6iem0c.png&f=1&nofb=1 
6. Stack overflow post voor het effect van display op het dom => https://stackoverflow.com/questions/65282576/css-displaynone-effect-on-dom 