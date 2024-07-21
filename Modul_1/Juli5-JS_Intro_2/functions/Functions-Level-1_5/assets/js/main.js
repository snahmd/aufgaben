function intro5(num1, num2) {
  let multi = `Multiplikation von ${num1} und ${num2}: ${num1 * num2}`;
  let div = `Division von ${num1} und ${num2}: ${num1 / num2}`;
  return multi, div;
}

console.log(intro5(10, 2).div); // ["Multiplikation von 5 und 10: 50", "Division von 5 und 10: 0.5"]
