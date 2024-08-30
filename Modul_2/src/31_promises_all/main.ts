//! Aufgaben 1

import { sayHello, greetingCallback } from "./greeting";

sayHello("Ahmed", greetingCallback);

//! Aufgaben 3

function processData(
  numbers: number[],
  sortCallback: (numbers: number[]) => number[],
  doubleCallback: (numbers: number[]) => number[]
): number[] {
  const sortedNumbers = sortCallback(numbers);
  const doubledNumbers = doubleCallback(sortedNumbers);
  return doubledNumbers;
}

function sortDescending(numbers: number[]): number[] {
  return numbers.sort((a, b) => b - a);
}

function doubleAll(numbers: number[]): number[] {
  return numbers.map((number) => number * 2);
}

const numbers1 = [2, 5, 1, 3, 4];
const numbers2 = [10, 20, 30, 50, 40];

console.log(processData(numbers1, sortDescending, doubleAll));
console.log(processData(numbers2, sortDescending, doubleAll));
