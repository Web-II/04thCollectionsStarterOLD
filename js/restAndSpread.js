// De rest operator kwam al aan bod
// De rest operator verzamelt de resterende elementen van een iterable in een array
// Voorbeeld
const [a, ...b] = ['Jan', 'Piet', 'Korneel', 'Steven', 'Maarten'];
console.log(b); // ["Piet", "Korneel", "Steven", "Maarten"]

// Nog een voorbeeld van de rest operator
function showName(lastname, ...firstnames) {
  const i = firstnames.reduce((initials, current) => initials + current[0], '');
  return `${i} ${lastname}`;
}

console.log(showName('Rowling', 'Joanne', 'Kathleen')); // JK Rowling
console.log(showName('Rubens', 'Pieter', 'Paul')); // PP Rubens

// De spread operator doet net het omgekeerde van de rest operator
// en vormt de items van een iterable om tot individuele elementen
console.log(Math.max(-1, 5, 11, 3)); // 11
// Het volgende werkt niet omdat de functie max werkt niet op arrays
console.log(Math.max([-1, 5, 11, 3])); // NaN
// De spread operator wordt gebruikt om dit probleem op te lossen
console.log(Math.max(...[-1, 5, 11, 3])); // 11
// In tegenstelling tot de rest operator, kan je de spread operator
// op een willekeurige plaats in de sequentie gebruiken
console.log(Math.max(-1, ...[-1, 5, 11], 3)); // 11
// Nog een voorbeeld
const arr1 = ['Jan', 'Piet'];
const arr2 = ['Joris', 'Korneel'];
const arr12 = [...arr1, ...arr2];
console.log(arr12); // ["Jan", "Piet", "Joris", "Korneel"]
// Een andere mogelijkheid
arr1.push(...arr2);
console.log(arr1); // ["Jan", "Piet", "Joris", "Korneel"]

// Nog een voorbeeld
const str = 'Hello';
console.log([...str]); // ["H", "e", "l", "l", "o"]

// Met behulp van de spread operator kan je een iterable omvormen naar een array als volgt
// Een set wordt omgevormd naar een array
const set = new Set([11, -1, 6]);
const arr = [...set];
console.log(arr); // [11, -1, 6]

// Op Arrays kan je de bewerkingen map() en filter() uitvoeren.
// Dit bestaat niet voor Maps
// De oplossing gaat als volgt door de iterable in een tussenstap om te vormen naar een array
// zoals getoond in het vorige voorbeeld
// stap 1: Converteer de Map naar een Array van [key, value] paren
// stap 2: Maak gebruik van map of filter op de Array
// stap 3: Converteer het resultaat terug naar een Map
// Bijvoorbeeld: elke ploeg krijgt 3 extra punten

const originalMap = new Map();
originalMap.set('Club Brugge', 64);
originalMap.set('Anderlecht', 52);
originalMap.set('Charleroi', 51);
console.log(originalMap); // Map(3) {"Club Brugge" => 64, "Anderlecht" => 52, "Charleroi" => 51}

const mappedMap = new Map([...originalMap].map(([k, v]) => [k, v + 3]));
console.log(mappedMap); // Map(3) {"Club Brugge" => 67, "Anderlecht" => 55, "Charleroi" => 54}

// stap 1 --> [...originalMap]
// stap 2 --> [...originalMap].map(([k, v]) => [k, v + 3])
// stap 3 --> new Map([...originalMap].map(([k, v]) => [k, v + 3]))

// Nog een voorbeeld, maar nu voor filter()
// Geef de ploegen met meer dan 60 punten
const filteredMap = new Map([...originalMap].filter(([k, v]) => v > 60));
console.log(filteredMap); // Map(1) {"Club Brugge" => 64}
// stap 1 --> [...originalMap]
// stap 2 --> [...originalMap].filter(([k, v]) => v > 60)
// stap 3 --> new Map([...originalMap].filter(([k, v]) => v > 60))

// Je kan de spread operator ook gebruiken om bijvoorbeeld maps te combineren
const anotherMap = new Map();
anotherMap.set('AA Gent', 47);
anotherMap.set('RC Genk', 44);
anotherMap.set('Standard', 41);

const combinedMap = new Map([...originalMap, ...anotherMap]);
console.log(combinedMap); // Map(6) {"Club Brugge" => 64, "Anderlecht" => 52, "Charleroi" => 51, "AA Gent" => 47, "RC Genk" => 44, …}

// Oefening 1
// Maak gebruik van de spreadoperator om een *array* van unieke waarden van de array values te retourneren
const values = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O'
];

// Oefening 2
// Bepaal 3 *gesorteerde* verschillende random getallen tussen 1 en 6

// Oefening 3
// Bepaal een gesorteerde lijst van hoe vaak elk woord voorkomt, ongeacht hoofdletters en kleine letters
// Van vaakst naar minder vaak voorkomen
const tekst =
  'De wet van Zipf is oorspronkelijk de door George Kingsley Zipf geconstateerde en naar hem genoemde wetmatigheid in de taalkunde dat in natuurlijke taal de frequentie van voorkomen van een woord ruwweg dalend exponentieel is met de rang van het woord in de frequentietabel en wel zo dat het meest frequente woord ongeveer twee keer zo vaak voorkomt als het op een na frequentste woord dat weer twee keer zo vaak als het derde frequentste enzovoort';
