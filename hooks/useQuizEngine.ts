import { useState } from 'react';
import { RESULTS, QUESTIONS } from '../constants';
import { GameState, Scores, ResultProfile, GenerationType } from '../types';

export const useQuizEngine = () => {
  const [gameState, setGameState] = useState<GameState>('INTRO');
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState<Scores>({ BOOMER: 0, MILLENNIAL: 0, GEN_Z: 0, GEN_ALPHA: 0 });
  const [finalResult, setFinalResult] = useState<ResultProfile | null>(null);

  const startQuiz = () => setGameState('QUIZ');

  const handleAnswer = (type: GenerationType) => {
    const newScores = { ...scores, [type]: scores[type] + 1 };
    setScores(newScores);

    if (currentQ < QUESTIONS.length - 1) {
      setTimeout(() => setCurrentQ((curr) => curr + 1), 250); 
    } else {
      calculateResult(newScores);
    }
  };

  const calculateResult = (finalScores: Scores) => {
    setGameState('LOADING');
    // Simple max score logic
    const winner = Object.keys(finalScores).reduce((a, b) => 
      finalScores[a as GenerationType] > finalScores[b as GenerationType] ? a : b
    ) as GenerationType;
    
    setFinalResult(RESULTS[winner]);

    setTimeout(() => {
      setGameState('RESULT');
    }, 1500);
  };

  const resetQuiz = () => {
    setScores({ BOOMER: 0, MILLENNIAL: 0, GEN_Z: 0, GEN_ALPHA: 0 });
    setCurrentQ(0);
    setGameState('INTRO');
  };

  return {
    gameState,
    currentQ,
    finalResult,
    startQuiz,
    handleAnswer,
    resetQuiz
  };
};