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

console.clear();
//! Aufgabe 2 -- String-Methods-TS-Level-1_3 //

let oceanQuote =
  "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";

const findVariable: number = oceanQuote.indexOf(";");
console.log(findVariable);

const findVariable1: number = oceanQuote.indexOf("green");
console.log(findVariable1);

const findVariable2: number = oceanQuote.indexOf("blue");
console.log(findVariable2);

console.clear();
//! Aufgabe 2 -- String-Methods-TS-Level-1_4 //

// const susisStatus = "Susi is going to codingschool";

// const susi = susisStatus.slice(0, 4);
// const is = susisStatus.slice(5, 7);
// const isGoingToSchool = susisStatus.slice(8, 23);
// const school = susisStatus.slice(23, 30);

// const susisStatus1 = `${susi} ${is} ${school}`;

// console.log(susisStatus1);

// document.querySelector(
//   ".innerAufgaben"
// ).innerHTML = `${susi} <br> ${is} <br> ${isGoingToSchool} <br> ${school} <br> ${susisStatus1}`;

//! Aufgabe 2 -- String-Methods-TS-Level-1_5 //
