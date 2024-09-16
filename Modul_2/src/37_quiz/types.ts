export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export type Difficulty = "easy" | "hard";
export type Language = "en" | "de";

export interface QuizApp {
  questions: QuizQuestion[];
  currentQuestionIndex: number;
  score: number;
  init(difficulty: Difficulty, language: Language): Promise<void>;
  renderQuestion(): void;
  checkAnswer(selectedAnswer: string): void;
  showFinalResult(): void;
}
