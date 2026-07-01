export interface QuickAnswer {
  id: number;
  question: string;
  answer: string;
}

export interface QuickAnswersProps {
  answers: QuickAnswer[];
}
