Backend service för monty-hall simulator-projekt.
Del av tekniskt prov för Tele2.

Simulatorn utgör backend-service till frontend-app-projektet 'monty-hall'
som finns levererat här: https://github.com/mobimation/monty-hall/tree/tele2-review

Det är en nodejs-service som lyssnar på port 9000.

När frontend anropar med ett fetch-kommando
så kör backend simuleringar med hjälp av en befintlig npmjs-komponent
'montyhall' som redan implementerar en simulator.
Jag förmodade att det kan ha varit en avsikt med testet att
utvecklaren eventuellt inte behöver uppfinna hjulet utan kan
kolla om något redan finns implementerat.

Jag har utökat javascript-koden inuti den komponenten
med en metod som paketerar resultatet i JSON-format
och skickar till frontend. Eller rättare sagt i den här koden 
har jag plockat ut simulator-biblioteksfilen 'index.js' från 'montyhall',
lagt till ny metod 'simulateJson' och anropar den modifierade versionen
direkt från backend-routen "simulate".

Den returnerar JSON-koden till front end.
Se: https://www.npmjs.com/package/montyhall
Originalet beskrev enbart simulerings-resultatet i en verbalt textformat,
Nu svarar simulatorn med en JSON-struktur:

doors = Number of doors in simulated scenario

willSwitch = Player wants to switch doors hoping for increased chances.

iterations = The number of simulation runs

Success Probability (%) = Simulation result, the percentage of test runs that resulted in
picking the price.  First three arguments are the input parameters echoed back.
The app allows changing willSwitch and iterations.

Värdet i procent visas i frontend UI avrundat till 2 decimaler.

Annars vettig kultur är att göra en fork på komponenten och återmata
ändringen till författaren. Nu verkar det vara 6 år sedan 'montyhall' senast
underhölls men jag kan ju kontakta och nämna min feature update:
https://github.com/rauljordan/montyhall

BUGGAR:
Vid tid för inlämning finns ett fel kvar i koden att visning av 
simuleringsresultat "laggar efter med 1 state", dvs varje gång
simulering körs visas föregående resultat eftersom en state-variabel
används på fel sätt i presentationen. Det hoppas jag hunnit fixa innan
vi ses i kod-review.


