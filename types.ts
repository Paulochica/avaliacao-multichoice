export enum Category {
  WEB2 = 'Web 2.0 Concepts',
  NETWORK = 'Networking & Protocols',
  HTML_CSS = 'HTML & CSS',
  JS = 'JavaScript & DOM'
}

export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
  correctAnswerId: string;
  category: Category;
}

export interface UserAnswer {
  questionId: number;
  selectedOptionId: string;
  isCorrect: boolean;
}

export type AppView = 'welcome' | 'quiz' | 'results';