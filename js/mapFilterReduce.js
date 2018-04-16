/*
Een array transformeren
*/
// In de volgende voorbeelden wordt het onderscheid geïllustreerd tussen de functies map, filter en reduce
// Als je al een array hebt en je wil exact dezelfde bewerking uitvoeren op elk van de elementen in de array
// en hetzelfde aantal elementen retourneren, maak dan gebruik van map
// Als je al een array hebt en je wil die elementen uit de array die aan bepaalde criteria voldoen
// maak dan gebruik van filter
// Als je al een array hebt en je wil de elementen uit de array gebruiken om iets nieuws te berekenen
// maak dan gebruik van reduce

const animals = [
  {
    name: 'cat',
    size: 'small',
    weight: 5
  },
  {
    name: 'dog',
    size: 'small',
    weight: 10
  },
  {
    name: 'lion',
    size: 'medium',
    weight: 150
  },
  {
    name: 'elephant',
    size: 'big',
    weight: 5000
  }
];

// Voorbeeld 1: We willen een array met de namen van de dieren
// for - lus
let animal_names_1 = [];
for (let i = 0; i < animals.length; i++) {
  animal_names_1.push(animals[i].name);
}
console.log(animal_names_1); // ["cat", "dog", "lion", "elephant"]

// map
let animal_names_2 = animals.map((value, index, array) => {
  return value.name;
});
console.log(animal_names_2); // ["cat", "dog", "lion", "elephant"]

// omdat er geen gebruik gemaakt wordt van index en array
// had je dit ook als volgt kunnen schrijven
let animal_names_3 = animals.map(value => {
  return value.name;
});
console.log(animal_names_3); // ["cat", "dog", "lion", "elephant"]

// Voorbeeld 2: We willen een array met de kleine dieren
// for - lus
let small_animals_1 = [];
for (let i = 0; i < animals.length; i++) {
  if (animals[i].size === 'small') {
    small_animals_1.push(animals[i]);
  }
}
console.log(small_animals_1); // [{name: "cat", size: "small", weight: 5}, {name: "dog", size: "small", weight: 10}]

// filter
let small_animals_2 = animals.filter((value, index, array) => {
  return value.size === 'small';
});
console.log(small_animals_2); // [{name: "cat", size: "small", weight: 5}, {name: "dog", size: "small", weight: 10}]

// omdat er geen gebruik gemaakt wordt van index en array
// had je dit ook als volgt kunnen schrijven
let small_animals_3 = animals.filter(value => {
  return value.size === 'small';
});
console.log(small_animals_3); // [{name: "cat", size: "small", weight: 5}, {name: "dog", size: "small", weight: 10}]

// Voorbeeld 3: We willen de totale som van de gewichten van de dieren kennen
// for - lus
let total_weight_1 = 0;
for (let i = 0; i < animals.length; i++) {
  total_weight_1 += animals[i].weight;
}
console.log(total_weight_1); // 5165

// reduce
let total_weight_2 = animals.reduce((result, value, index, array) => {
  return (result += value.weight);
}, 0);
console.log(total_weight_2); // 5165

// omdat er geen gebruik gemaakt wordt van index en array
// had je dit ook als volgt kunnen schrijven
let total_weight_3 = animals.reduce((result, value) => {
  return (result += value.weight);
}, 0);
console.log(total_weight_3); // 5165

// Hoe werkt dit?
// Bij de eerste run, krijgt result als initiële waarde het laatste argument van reduce en value is
// het eerste element van de array => result is 5
// Bij de tweede run, is result = 5 en value is het tweede element van de array => result is 15
// Bij de derde run, is result = 15 en value is het derde element van de array => result is 165
// Bij de vierde run, is result = 165 en value is het vierde element van de array => result is 5165

// Hoe kan je de code omvormen zodat het gewicht van de olifant niet meegerekend wordt?
let total_weight_4 = animals.reduce((result, value) => {
  return (result = value.name === 'elephant' ? result : result + value.weight);
}, 0);
console.log(total_weight_4); // 165

// Oefening1
const arr = [1, 2, 3, 4];

// Creëer een nieuwe array waarbij er 5 bij elk element opgeteld wordt

console.log(arrPlus5); // [6, 7, 8, 9]



// Creëer een nieuwe array waarbij de oneven getallen ongewijzigd blijven
// en de even getallen vermenigvuldigd worden met 2

console.log(newArr); // [1, 4, 3, 8]





// Zet alle elementen van de array om naar hoofdletters
const fruit = ['orange', 'pineapple', 'strawberry', 'blueberry', 'melon'];

console.log(fruitUppercase); // ["ORANGE", "PINEAPPLE", "STRAWBERRY", "BLUEBERRY", "MELON"]




// Bereken de gemiddelde leeftijd van users
const users = [
  { id: 1, firstname: 'Jan', lastname: 'Janssens', age: 25 },
  { id: 2, firstname: 'Eva', lastname: 'De Smet', age: 30 },
  { id: 3, firstname: 'Pieter', lastname: 'Martens', age: 29 }
];




// Schrijf een functie filterRange die de waarden van een array filtert
// die tussen een start- en stopwaarde gelegen zijn
// De oorspronkelijke array moet ongewijzigd blijven
const input = [5, 3, 8, 1];
const output = filterRange(input, 1, 4);
console.log(output);

function filterRange(input, start, stop) {
}



// Een opgegeven string bestaat enkel uit de karakters + en -
// Bereken hoeveel maal een wisseling optreedt van + naar − of omgekeerd.
// Je mag ervan uitgaan dat de invoerstring minstens 1 karakter bevat.
const plusMin = '++++----++--+';




// Een natuurlijk getal k dat bestaat uit n cijfers en dat gelijk is aan de som van de n-de machten van zijn cijfers
// wordt een narcistisch getal genoemd. Enkele voorbeelden:
// 153 = 1^3 + 5^3 + 3^3
// 1634 = 1^4 + 6^4 + 3^4 + 4^4
// 54748 = 5^5 + 4^5 + 7^5 + 4^5 + 8^5
// 548834 = 5^6 + 4^6 + 8^6 + 8^6 + 3^6 + 4^6
// 1741725 = 1^7 + 7^7 + 4^7 + 1^7+ 7^7 + 2^7 + 5^7
// Bepaal of een opgegeven getal een narcistisch getal is of niet


const getal = '548834';

