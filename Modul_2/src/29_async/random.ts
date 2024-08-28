//! Aufgaben 5

const headline = document.getElementById("headline") as HTMLHeadingElement;
const randomButton = document.getElementById(
  "randomButton"
) as HTMLButtonElement;

function randomNumber(): string {
  return Math.floor(Math.random() * 100).toString();
}

function randomText(): string {
  const textArray = ["Hello", "World", "Random", "Text"];
  return textArray[Math.floor(Math.random() * textArray.length)];
}

function randomBoolean(): string {
  return Math.random() > 0.5 ? "true" : "false";
}

function randomEmoji(): string {
  const emojis = ["😀", "😂", "🤣", "😍", "😎"];
  return emojis[Math.floor(Math.random() * emojis.length)];
}

function updateHeadline(callback: () => string): void {
  headline.innerText = callback();
}

randomButton.addEventListener("click", () => {
  const randomFunction = [randomNumber, randomText, randomBoolean, randomEmoji];
  const randomIndex = Math.floor(Math.random() * randomFunction.length);
  updateHeadline(randomFunction[randomIndex]);
});
