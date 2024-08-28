//! Aufgaben 1

import addNumbers from "./add-numbers";

addNumbers(1, 2, (sum) => console.log(sum));

//! Aufgaben 2
import { showAlert } from "./add-numbers";

addNumbers(1, 2, showAlert);

//! Aufgaben 3
import showMaximum, { powerOfTen } from "./max";

showMaximum([1, 2, 3, 4, 5], powerOfTen);

//! Aufgaben 4
import {
  calculateSumAndMore,
  doubleNumber,
  convertToBinary,
} from "./callback-cascade";

const result = calculateSumAndMore(1, 2, doubleNumber, convertToBinary);
console.log(result);
