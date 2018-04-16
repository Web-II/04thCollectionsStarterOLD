/** 
 Map
 Een map is vergelijkbaar met een object literal. Het belangrijke verschil is
 dat de keys van om het even welk type kunnen zijn
 De belangrijkste methodes zijn

new Map() – creëert de map
map.set(key, value) – slaat de tuple (key, value) op in de map
map.get(key) – retourneert de value die hoort bij de key. Als de key niet bestaat wordt undefined geretourneerd.
map.has(key) – retourneert true als de key bestaat, anders false
map.delete(key) – verwijdert de value met de overeenkomstige key uit de map
map.clear() – maakt de map leeg
map.size – retourneert het aantal elementen in de map
**/

// Voorbeeld

let results1 = new Map();
results1.set('Club Brugge', 64);
results1.set('Anderlecht', 52);
results1.set('Charleroi', 51);

console.log(results1.get('Club Brugge')); // 64
console.log(results1.size); // 3
console.log(results1.has('Charleroi')); // true
results1.clear();
console.log(results1); // Map(0) {}

// Er kan ook gebruik gemaakt worden van chaining
let results2 = new Map();
results2
  .set('Club Brugge', 64)
  .set('Anderlecht', 52)
  .set('Charleroi', 51);

console.log(results2.get('Club Brugge')); // 64
console.log(results2.size); // 3

// Andere schrijfwijze. Volledig analoog aan het voorgaande
// Een nieuwe Map wordt gecreëerd op basis van een array die doorgegeven wordt
let results3 = new Map([
  ['Club Brugge', 64],
  ['Anderlecht', 52],
  ['Charleroi', 51]
]);

console.log(results3.get('Anderlecht')); // 52
console.log(results3.size); // 3

// Het belangrijke verschil tussen een Map en een object literal is
// dat maps ook objecten kunnen hebben als keys

let results4 = new Map();
let p1 = { team: 'Club Brugge', trainer: 'Leko' };
let p2 = { team: 'Anderlecht', trainer: 'Vanhaezebroeck' };
let p3 = { team: 'Charleroi', trainer: 'Mazzu' };

results4.set(p1, 64);
results4.set(p2, 52);
results4.set(p3, 51);

console.log(results4.get(p1)); // 64
console.log(results4); // 3
let p4 = { team: 'Club Brugge', trainer: 'Leko' };
console.log(results4.get(p4)); // undefined
// Om de keys van een map te vergelijken wordt er gebruik gemaakt van het algoritme SameValueZero
// Het werkt op ongeveer dezelfde manier als ===,
// met dat verschil dat NaN wordt beschouwd als gelijk aan NaN => NaN kan ook gebruikt worden als key

// Andere schrijfwijze. Volledig analoog aan het voorgaande
// Een nieuwe Map wordt gecreëerd op basis van een array die doorgegeven wordt
let results5 = new Map([[p1, 64], [p2, 52], [p3, 51]]);

console.log(results5.get(p2)); // 52
console.log(results5.size); // 3

// Itereren over een map
// Itereren over de keys
for (let player of results5.keys()) {
  console.log(player);
}
// {team: "Club Brugge", trainer: "Leko"}
// {team: "Anderlecht", trainer: "Vanhaezebroeck"}
// {team: "Charleroi", trainer: "Mazzu"}

// Itereren over de values
for (let v of results5.values()) {
  console.log(v);
}
// 64
// 52
// 51

// Itereren over [key, value] entries
for (let [k, v] of results5) {
  console.log(`club = ${k.team}, trainer = ${k.trainer}, punten = ${v}`);
}
// club = Club Brugge, trainer = Leko, punten = 64
// club = Anderlecht, trainer = Vanhaezebroeck, punten = 52
// club = Charleroi, trainer = Mazzu, punten = 51

// Het voorgaande is een verkorte schrijfwijze voor het volgende
for (let [k, v] of results5.entries()) {
  console.log(`club = ${k.team}, trainer = ${k.trainer}, punten = ${v}`);
}
// club = Club Brugge, trainer = Leko, punten = 64
// club = Anderlecht, trainer = Vanhaezebroeck, punten = 52
// club = Charleroi, trainer = Mazzu, punten = 51

// Je kan ook gebruik maken van forEach
results5.forEach((value, key, map) => {
  console.log(
    `club = ${key.team}, trainer = ${key.trainer}, punten = ${value}`
  );
});
// club = Club Brugge, trainer = Leko, punten = 64
// club = Anderlecht, trainer = Vanhaezebroeck, punten = 52
// club = Charleroi, trainer = Mazzu, punten = 51

// Oefening 1
// Bepaal hoe vaak elk woord voorkomt, ongeacht hoofdletters en kleine letters
const tekst = "De wet van Zipf is oorspronkelijk de door George Kingsley Zipf geconstateerde en naar hem genoemde wetmatigheid in de taalkunde dat in natuurlijke taal de frequentie van voorkomen van een woord ruwweg dalend exponentieel is met de rang van het woord in de frequentietabel en wel zo dat het meest frequente woord ongeveer twee keer zo vaak voorkomt als het op een na frequentste woord dat weer twee keer zo vaak als het derde frequentste enzovoort";



// Oefening 2
// https://dodona.ugent.be/nl/exercises/798652413/
/*
Er staan n personen in een cirkel te wachten op hun executie. De personen worden in wijzerzin genummerd van 1 tot en met n. Het aftellen begint vanaf persoon 1, waarbij elke k-de nog levende persoon wordt ge�xecuteerd. De cirkel wordt hierbij in wijzerzin doorlopen en wordt steeds kleiner en kleiner naarmate er meer personen ge�xecuteerd worden. De laatste persoon die overblijft, wordt in leven gelaten. Kan je op voorhand een geschikte plaats in de cirkel kiezen, zodat je de executie overleeft?
*/