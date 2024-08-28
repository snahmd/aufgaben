//! Aufgaben 3

function showMaximum(numbers: number[], callback: (max: number) => number) {
  const max = Math.max(...numbers);
  console.log(max);
  const result = callback(max);
  console.log(result);
  console.log("Finished with showMaximum");
}

export function powerOfTen(number: number): number {
  return Math.pow(number, 10);
}

export default showMaximum;
