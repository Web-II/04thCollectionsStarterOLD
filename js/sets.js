/** 
 Set
 Een set is een collectie van waarden, waarbij elke waarde maar 1 keer mag voorkomen
 De belangrijkste methodes zijn

new Set(iterable) – creëert een set, eventueel vertrekkend van een array van waarden
set.add(value) – voegt de value toe aan de set. De set wordt geretourneerd
set.delete(value) – verwijdert de value. Retourneert true als de value bestond, anders false
set.has(value) – retourneert true als de value bestaat in de set, anders false
set.clear() – maakt de set leeg
set.size – retourneert het aantal elementen in de set
**/

let set = new Set();

let john = { firstname: 'John', lastname: 'Williams' };
let pete = { firstname: 'Pete', lastname: 'Johnsons' };
let mary = { firstname: 'Mary', lastname: 'Stevens' };

// We voegen aan de set de gebruikers toe wanneer iedere keer ze ons bezoeken
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// De set houdt enkel de unieke waarden bij
console.log(set.size); // 3

// Itereren over een set
// Meest frequent gebruikt
for (let user of set) {
  console.log(`${user.firstname} ${user.lastname}`);
}
// John Williams
// Pete Johnsons
// Mary Stevens

// Itereren over de keys
for (let user of set.keys()) {
  console.log(`${user.firstname} ${user.lastname}`);
}
// John Williams
// Pete Johnsons
// Mary Stevens

// Itereren over de values
// Dit is hetzelfde als itereren over de keys, dient voor de compatibiliteit met Map
for (let user of set.values()) {
  console.log(`${user.firstname} ${user.lastname}`);
}
// John Williams
// Pete Johnsons
// Mary Stevens

// Itereren over [key, value] entries
for (let [k, v] of set.entries()) {
  console.log(
    `key = ${k.firstname} ${k.lastname}, value = ${v.firstname} ${v.lastname}`
  );
}
// key = John Williams, value = John Williams
// key = Pete Johnsons, value = Pete Johnsons
// key = Mary Stevens, value = Mary Stevens

// Oefening 1
// Maak gebruik van een set om de unieke waarden van de array te retourneren

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
// Bepaal 3 *verschillende* random getallen tussen 1 en 6
