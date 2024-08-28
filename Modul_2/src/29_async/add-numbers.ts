//! Aufgaben 1

function addNumbers(a: number, b: number, callback: (sum: number) => void) {
  callback(a + b);
}

export default addNumbers;

//! Aufgaben 2

export function showAlert(sum: number) {
  alert(sum);
}
