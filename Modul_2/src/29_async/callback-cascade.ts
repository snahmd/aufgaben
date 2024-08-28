//! Aufgaben 4

export function calculateSumAndMore(
  a: number,
  b: number,
  callback1: (result1: number) => number,
  callback2: (result2: number) => number
): number {
  const sum = a + b;
  const result1 = callback1(sum);
  console.log("result1: " + result1);
  const result2 = callback2(result1);
  console.log("result2: " + result2);
  return result2;
}

export function doubleNumber(number: number): number {
  return number * 2;
}

export function convertToBinary(number: number): number {
  return parseInt(number.toString(2));
}
