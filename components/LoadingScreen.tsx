import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center h-64 text-center"
    >
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <Zap size={64} className="text-black mb-6" fill="currentColor" />
      </motion.div>
      <h2 className="text-2xl font-black mb-2 text-gray-900">Calculating Vibe...</h2>
      <p className="text-gray-600 font-medium">Analyzing your cringiness levels.</p>
    </motion.div>
  );
}