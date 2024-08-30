//! Aufgaben 2 - Promises-TS-Level-1_4
const headline = document.getElementById("head") as HTMLHeadingElement;
const paragraph = document.getElementById("paragraph") as HTMLParagraphElement;

const promise1 = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve("Exercise 1 done.");
  }, 2000);
});

const promise2 = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve("Exercise 2 done.");
  }, 3000);
});

const promise3 = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve("Exercise 3 done.");
  }, 4000);
});

promise1.then((message) => {
  paragraph.innerText = message;
});

promise2.then((message) => {
  paragraph.innerText += `\n${message}`;
});

promise3.then((message) => {
  paragraph.innerText += `\n${message}`;
});

Promise.all([promise1, promise2, promise3]).then(() => {
  headline.innerText = "Homework done.";
});
