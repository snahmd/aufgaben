// interface Question {
//   question: string;
//   correct: number;
//   answers: string[];
// }

// const userNameInput = document.getElementById("userInput") as HTMLInputElement;
const difficultySelect = document.getElementById(
  "difficulty"
) as HTMLSelectElement;
//const startBtn = document.getElementById("startBtn") as HTMLButtonElement;
const form = document.getElementById("form") as HTMLFormElement;
const startScreen = document.getElementById("start-screen")!;
// const clientInfoDiv = document.getElementById("client-info")!;
const answersDiv = document.getElementById("answers-div") as HTMLDivElement;
let questionDiv = document.getElementById("question-div") as HTMLDivElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchQuizData();
});
let questionIndex: number = 0;
let score: number = 0;

async function fetchQuizData() {
  let difficulty = difficultySelect.value;
  const data = await fetch(
    `https://vz-wd-24-01.github.io/typescript-quiz/questions/${difficulty}.json`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Netzwerkantwort war nicht ok.");
      } else {
        return response.json();
      }
    })
    .then((data) => {
      return data;
    });

  if (questionIndex <= 19) {
    function ekranaSoruyuVeCevaplariniBas(questionIndex: number) {
      `
        question-div icerisine sorunun verisini basar. 
      `;
      questionDiv.innerHTML = "";
      const questionElement = document.createElement(
        "h3"
      ) as HTMLHeadingElement;
      questionElement.innerText = data[questionIndex].question;
      questionDiv.appendChild(questionElement);
      console.log(data[questionIndex]);
      for (let i = 0; i < 4; i++) {
        const answerButton = document.createElement("button");
        answerButton.innerHTML = data[questionIndex].answers[i];
        questionDiv.appendChild(answerButton);
        answerButton.addEventListener("click", () => {
          if (i == data[questionIndex].correct) {
            score++;
          }
          questionIndex++;
          ekranaSoruyuVeCevaplariniBas(questionIndex);
        });
      }
    }
    ekranaSoruyuVeCevaplariniBas(questionIndex);
  } else {
    console.log("jhvcdshj");
  }

  console.log(data[questionIndex].correct);
}

// ....
/// ....
/// []

// let questions: Question[] = [];
// let currentQuestionIndex = 0;
// let score = 0;
// const userNameInput = document.getElementById("userInput") as HTMLInputElement;
// const languageSelect = document.getElementById("language") as HTMLSelectElement;
// const difficultySelect = document.getElementById(
//   "difficulty"
// ) as HTMLSelectElement;
// //const startBtn = document.getElementById("startBtn") as HTMLButtonElement;
// const form = document.getElementById("form") as HTMLFormElement;
// const startScreen = document.getElementById("start-screen")!;
// const clientInfoDiv = document.getElementById("client-info")!;
// const answersDiv = document.getElementById("answers-div") as HTMLDivElement;
// const questionDiv = document.getElementById("question-div") as HTMLDivElement;

// form?.addEventListener("submit", (event) => {
//   event.preventDefault(); // Verhindert das Standardverhalten des Formulars
//   startQuiz();
// });

// async function startQuiz() {
//   const userName = userNameInput.value;
//   const difficulty = difficultySelect.value;

//   const apiUrl = `https://vz-wd-24-01.github.io/typescript-quiz/questions/${difficulty}.json`;

//   try {
//     const response = await fetch(apiUrl);
//     if (!response.ok) {
//       throw new Error("Netzwerkantwort war nicht ok.");
//     }
//     questions = await response.json();
//     currentQuestionIndex = 0;
//     score = 0;

//     startScreen.style.display = "none"; // Verstecke den Startbildschirm
//     questionDiv.style.display = "block"; // Zeige die Fragen an
//     clientInfoDiv.innerHTML = `<h2>Willkommen, ${userName}!</h2>`;
//     showQuestion();
//   } catch (error) {
//     console.error("Fehler beim Abrufen der Daten:", error);
//   }
// }
// function showQuestion() {
//   const currentQuestion = questions[currentQuestionIndex];
//   const questionElement = document.createElement("h3");
//   questionElement.innerText = currentQuestion.question;

//   answersDiv.innerHTML = ""; // Leere vorherige Antworten
//   const indexElement = document.createElement("p");
//   indexElement.innerText = `Frage ${currentQuestionIndex + 1} von ${
//     questions.length
//   }`;
//   answersDiv.appendChild(indexElement);
//   answersDiv.appendChild(questionElement);

//   const answers = currentQuestion.answers;
//   answers.sort(() => Math.random() - 0.5); // Mische die Antworten

//   answers.forEach((answer) => {
//     const button = document.createElement("button");
//     button.innerText = answer;
//     button.addEventListener("click", () => checkAnswer(answer));
//     answersDiv.appendChild(button);
//   });
// }

// function checkAnswer(selectedAnswer: string) {
//   const currentQuestion = questions[currentQuestionIndex];
//   const resultElement = document.createElement("div");

//   if (selectedAnswer === currentQuestion.answers[currentQuestion.correct]) {
//     resultElement.innerHTML = "Richtig!";
//     score++;
//   } else {
//     resultElement.innerHTML =
//       "Falsch! Die richtige Antwort ist: " +
//       currentQuestion.answers[currentQuestion.correct];
//   }

//   answersDiv.appendChild(resultElement);
//   currentQuestionIndex++;

//   if (currentQuestionIndex < questions.length) {
//     setTimeout(showQuestion, 2000); // Warte 2 Sekunden, bevor die nächste Frage angezeigt wird
//   } else {
//     showFinalResult();
//   }
// }

// function showFinalResult() {
//   questionDiv.innerHTML = `<h2>Quiz beendet!</h2><p>Ihr Ergebnis: ${score} von ${questions.length}</p>`;
// }