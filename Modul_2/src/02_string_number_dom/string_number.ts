//! Aufgabe 1 -- String-Methods-TS-Level-1_1 //
const firstName: string = "Ahmed";
const lastName: string = "San";

console.log(firstName.length);
console.log(lastName.length);

const fullName: string = firstName.concat(" " + lastName);

console.log(fullName);
console.log(fullName.length);

//! Aufgabe 2 -- String-Methods-TS-Level-1_2 //

const earthQuote: string =
  "How inappropriate to call this planet Earth, when clearly it is Ocean.";

const h_indexOf: number = earthQuote.indexOf("h");
console.log(h_indexOf);

const earth_indexOf: number = earthQuote.indexOf("Earth");
console.log(earth_indexOf);

console.log(earthQuote.indexOf("Moon"));

//! Aufgabe 2 -- String-Methods-TS-Level-1_3 //

const num1 = prompt("Enter a number");
const num2 = 5;

console.log(num1, typeof num1);
console.log("Toplam: ", Number(num1) + num2);
