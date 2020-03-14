// Initiële elementen opgeven
let fruit = ['orange', 'pear', 'kiwi', 'melon'];

// De klassieke manier
for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}

// Nog een manier met behulp van forEach
fruit.forEach(function(element) {
  console.log(element);
});
// orange
// pear
// kiwi
// melon

// Hetzelfde maar korter met behulp van arrow functies
fruit.forEach(element => console.log(element));

// Idem. Als er maar één parameter is moeten er geen ronde haakjes staan rond de parameter
fruit.forEach(element => console.log(element));

// De meest algemene vorm van forEach
fruit.forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});
// orange is at index 0 in orange,pear,kiwi,melon
// pear is at index 1 in orange,pear,kiwi,melon
// kiwi is at index 2 in orange,pear,kiwi,melon
// melon is at index 3 in orange,pear,kiwi,melon

// Stel dat we een array van objecten hebben. Hoe kunnen we een object terugvinden
// dat aan een specifieke voorwaarde voldoet
const users = [
  { id: 1, firstname: 'Jan', lastname: 'Janssens' },
  { id: 2, firstname: 'Eva', lastname: 'De Smet' },
  { id: 3, firstname: 'Pieter', lastname: 'Martens' }
];

const user = users.find(item => item.id === 1);
console.log(user); // {id: 1, firstname: "Jan", lastname: "Janssens"}

// De functie findIndex werkt analoog maar retourneert de index
const indexuser = users.findIndex(item => item.id === 1);
console.log(indexuser); // 0

// De functie find zoekt naar het enige (of eerste) element dat aan de voorwaarde voldoet
// Als er verschillende objecten aan de voorwaarden voldoen, kan je gebruik maken van filter
const someusers = users.filter(item => item.id < 3);
console.log(someusers);
// 0: {id: 1, firstname: "Jan", lastname: "Janssens"}
// 1: {id: 2, firstname: "Eva", lastname: "De Smet"}
console.log(someusers.length); // 2

// De functie sort sorteert de items van de array als strings by default
console.log(fruit.sort()); // ["blueberry", "melon", "orange", "pineapple", "strawberry"]

// Stel dat je je eigen sorteermethode wil meegeven, dan kan dat als volgt
// Je moet zelf een functie compare voorzien
// Algemene syntax van de functie compare
// function compare(a, b) {
//  if (a > b) return 1;  --> een positief getal betekent dat a groter is dan b
//  if (a == b) return 0;
//  if (a < b) return -1; --> een negatief getal betekent dat a kleiner is dan b
// }

// Stel dat we de strings willen sorteren op aantal letters
function sorterenOpAantalLetters(a, b) {
  if (a.length > b.length) return 1;
  if (a.length === b.length) return 0;
  if (a.length < b.length) return -1;
}
console.log(fruit.sort(sorterenOpAantalLetters)); // ["melon", "orange", "blueberry", "pineapple", "strawberry"]

// Je kan het voorgaande ook verkort schrijven als
fruit.sort(function(a, b) {
  if (a.length > b.length) return 1;
  if (a.length === b.length) return 0;
  if (a.length < b.length) return -1;
});

console.log(fruit); //  ["melon", "orange", "blueberry", "pineapple", "strawberry"]

// Het voorgaande kan je nog korter schrijven als volgt
// a.length > b.length => a.length - b.length > 0 --> een positief getal betekent dat a groter is dan b
// a.length === b.length => a.length - b.length is 0
// a.length < b.length => a.length - b.length < 0 --> een negatief getal betekent dat a kleiner is dan b
fruit.sort((a, b) => a.length - b.length);
console.log(fruit); //  ["melon", "orange", "blueberry", "pineapple", "strawberry"]

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


console.log(shapes);
