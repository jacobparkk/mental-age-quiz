export type GenerationType = 'BOOMER' | 'MILLENNIAL' | 'GEN_Z' | 'GEN_ALPHA';

export interface Stat {
  label: string;
  value: number;
}

export interface ResultProfile {
  id: GenerationType;
  label: string;
  oneLiner: string;
  color: string;
  accent: string;
  stats: Stat[];
}

export interface Option {
  text: string;
  type: GenerationType;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface QuizConfig {
  title: string;
  subtitle: string;
  totalQuestions: number;
}

export type GameState = 'INTRO' | 'QUIZ' | 'LOADING' | 'RESULT';

export interface Scores {
  BOOMER: number;
  MILLENNIAL: number;
  GEN_Z: number;
  GEN_ALPHA: number;
}