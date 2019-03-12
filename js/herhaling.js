// Een lege array creëren
let leeg1 = new Array();
let leeg2 = [];

// Initiële elementen opgeven
let fruit = ['apple', 'pear', 'lemon'];

// Individuele elementen gebruiken
console.log(fruit[1]); // pear

// Een element vervangen
fruit[2] = 'kiwi';

// Een nieuw element toevoegen
fruit[3] = 'grape';

// Het aantal elementen weergeven
console.log(fruit.length); // 4

// De ganse array tonen
console.log(fruit); // ["apple", "pear", "kiwi", "grape"]

// Een array kan elementen van verschillende types bijhouden
let arr = [
  'apple',
  { firstname: 'Jan', lastname: 'Janssens' },
  true,
  function() {
    console.log(`Hello!`);
  }
];

// de firstname laten zien van het element op positie 1
console.log(arr[1].firstname); // Jan

// de functie gebruiken op positie 3
arr[3](); // Hello!

// pop verwijdert het laatste element en retourneert het
console.log(fruit.pop()); // grape

// push voegt een nieuw element achteraan toe
fruit.push('melon');
console.log(fruit); // ["apple", "pear", "kiwi", "melon"]

// shift verwijdert het eerste element en retourneert het
console.log(fruit.shift()); // apple

// met unshift kan je een element vooraan de array toevoegen
fruit.unshift('orange');
console.log(fruit); // ["orange", "pear", "kiwi", "melon"]
/*
Oefening
*/
// Creëer een array stijlen met de items "jazz" en "blues"
// Voeg achteraan "rock-n-roll" toe
// Verwijder de waarde in het midden door "klassiek". Je code moet werken voor alle arrays met een oneven aantal elementen
// Verwijder het eerste element en toon het
// Voeg vooraan "rap" en "reggae" toe

/*
Lussen
*/
// De klassieke manier
for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}

// Nieuws sinds ES6
for (const f of fruit) {
  console.log(f);
}
// orange
// pear
// kiwi
// melon

// Elementen verwijderen
// Verwijder het element op positie 1
delete fruit[1];
console.log(fruit); // ["orange", empty, "kiwi", "melon"]

// De functie splice
// Verwijder 2 elementen vertrekkend van positie 1 en voeg "pineapple", "strawberry", "blueberry" in
// De verwijderde elementen worden geretourneerd
console.log(fruit.splice(1, 2, 'pineapple', 'strawberry', 'blueberry')); // [empty, "kiwi"]
console.log(fruit); // ["orange", "pineapple", "strawberry", "blueberry", "melon"]

// De functie slice retourneert een nieuwe array waarbij alle items gekopieerd worden
// vanaf de startindex tot (niet tot en met) de eindindex
console.log(fruit.slice(2, 5)); // ["strawberry", "blueberry", "melon"]

// Zoeken in een array
// De functie indexOf(item, from) zoekt naar item startend van positie from (default waarde 0)
// en retourneert de index waar het gezochte item gevonden werd. Anders wordt er -1 geretourneerd
console.log(fruit.indexOf('blueberry')); // 3
console.log(fruit.indexOf('orange')); // -1

// De functie lastIndexOf(item, from) doet hetzelfde maar zoekt van rechts naar links
console.log(fruit.lastIndexOf('blueberry')); // 3
console.log(fruit.lastIndexOf('orange')); // -1

// De functie includes(item, from) zoekt naar item startend van positie from
// en retourneert true wanneer het gezochte item werd gevonden
console.log(fruit.includes('blueberry')); // true
console.log(fruit.includes('blueberry', 4)); // false
console.log(fruit.includes('orange')); // false

// De functie reverse keert de volgorde van de elementen in de array om
fruit.reverse();
console.log(fruit); // ["strawberry", "pineapple", "blueberry", "orange", "melon"]

// De functie split splitst de meegegeven string op in stukken op basis van het opgegeven scheidingsteken
let namen = 'Bilbo, Gandalf, Nazgul';
let arrNamen1 = namen.split(',');
console.log(arrNamen1); // ["Bilbo", " Gandalf", " Nazgul"]

// De split methode heeft een optioneel tweede argument, namelijk de maximumlengte van de array
// Als dit tweede argument opgegeven wordt, worden alle extra elementen genegeerd;
let arrNamen2 = namen.split(',', 2);
console.log(arrNamen2); // ["Bilbo", " Gandalf"]

let str = 'test';
console.log(str.split('')); // ["t", "e", "s", "t"]

// De functie join is de omgekeerde bewerking. De functie join creëert een join waarbij
// de items gescheiden worden door het opgegeven scheidingsteken
let arrNamen3 = ['Bilbo', 'Gandalf', 'Nazgul'];
let strNamen3 = arrNamen3.join(';');
console.log(strNamen3); // Bilbo;Gandalf;Nazgul

// Oefening
// Sorteer de array animals op basis van gewicht: van lichter naar zwaarder
const animals = [
  {
    name: 'lion',
    size: 'medium',
    weight: 150
  },
  {
    name: 'dog',
    size: 'small',
    weight: 10
  },
  {
    name: 'elephant',
    size: 'big',
    weight: 5000
  },
  {
    name: 'cat',
    size: 'small',
    weight: 5
  }
];

console.log(animals);

// Oefening
// Sorteer de onderstaande array op het aantal zijden
let shapes = [
  [5, 'Pentagon'],
  [3, 'Triangle'],
  [8, 'Octagon'],
  [4, 'Rectangle']
];

// Oefening
// Schrijf een functie die controleert of een woord een permutatie is van een ander woord, bijvoorbeeld SLAAPT en PLAATS

function isPermutatie(woord1, woord2) {}
console.log(isPermutatie('SLAAPT', 'PLAATS'));
