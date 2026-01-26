import React from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';
import ProgressBar from './ProgressBar';
import { Question, GenerationType } from '../types';

interface QuestionCardProps {
  question: Question;
  currentQ: number;
  totalQ: number;
  onAnswer: (type: GenerationType) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, currentQ, totalQ, onAnswer }) => {
  return (
    <motion.div 
      key={question.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="w-full"
    >
      <div className="flex justify-between items-end mb-2">
        <span className="text-sm font-bold uppercase tracking-wider text-gray-600">
          Question {currentQ + 1} / {totalQ}
        </span>
        <Brain className="text-gray-500" />
      </div>
      <ProgressBar current={currentQ} total={totalQ} />
      
      <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight text-gray-900">
        {question.text}
      </h2>

      <div className="grid grid-cols-1 gap-4">
        {question.options.map((option, idx) => (
          <motion.button
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => onAnswer(option.type)}
            className="group flex items-center w-full p-6 text-left bg-white border-2 border-gray-200 rounded-2xl hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-y-1 active:shadow-none"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold mr-4 group-hover:bg-black group-hover:text-white transition-colors text-gray-700">
              {String.fromCharCode(65 + idx)}
            </div>
            <span className="text-lg font-bold text-gray-900">{option.text}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default QuestionCard;