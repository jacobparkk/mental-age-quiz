import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { QUIZ_CONFIG } from '../constants';

interface IntroScreenProps {
  onStart: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center"
    >
      <div className="inline-block bg-black text-white px-4 py-1 rounded-full text-sm font-bold mb-6">
        Personality Quiz
      </div>
      <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6">
        MENTAL<br/>AGE<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">QUIZ</span>
      </h1>
      <p className="text-xl text-gray-800 mb-12 max-w-lg mx-auto font-medium">
        {QUIZ_CONFIG.subtitle}
      </p>
      <button 
        onClick={onStart}
        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-black font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:scale-105"
      >
        Start Analysis <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform"/>
      </button>
    </motion.div>
  );
};

export default IntroScreen;