import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = ((current + 1) / total) * 100;
  
  return (
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-8">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: "circOut" }}
        className="h-full bg-black"
      />
    </div>
  );
}