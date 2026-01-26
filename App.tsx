import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useQuizEngine } from './hooks/useQuizEngine';
import { QUESTIONS } from './constants';
import IntroScreen from './components/IntroScreen';
import QuestionCard from './components/QuestionCard';
import LoadingScreen from './components/LoadingScreen';
import ResultCard from './components/ResultCard';

export default function App() {
  const { 
    gameState, 
    currentQ, 
    finalResult, 
    startQuiz, 
    handleAnswer, 
    resetQuiz 
  } = useQuizEngine();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans selection:bg-black selection:text-white">
      <div className="w-full max-w-2xl">
        <AnimatePresence mode="wait">
          
          {gameState === 'INTRO' && (
            <IntroScreen key="intro" onStart={startQuiz} />
          )}

          {gameState === 'QUIZ' && (
            <QuestionCard 
              key="question"
              question={QUESTIONS[currentQ]} 
              currentQ={currentQ}
              totalQ={QUESTIONS.length}
              onAnswer={handleAnswer}
            />
          )}

          {gameState === 'LOADING' && (
            <LoadingScreen key="loading" />
          )}

          {gameState === 'RESULT' && (
            <ResultCard key="result" result={finalResult} onRestart={resetQuiz} />
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}