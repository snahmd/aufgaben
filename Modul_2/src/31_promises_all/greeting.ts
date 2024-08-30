//! Aufgaben 1 - callback-TS-Level-1_3

export function sayHello(name: string, callback: (message: string) => void) {
  const message = `Hello ${name}!`;
  callback(message);
}

export function greetingCallback(message: string) {
  console.log(message);
}
