import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, RefreshCcw, Twitter, Facebook, MessageCircle, Link2, Check } from 'lucide-react';
import { ResultProfile } from '../types';

interface ResultCardProps {
  result: ResultProfile | null;
  onRestart: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ result, onRestart }) => {
  const [copied, setCopied] = useState(false);

  if (!result) return null;

  const shareUrl = window.location.href;
  const shareText = `I got ${result.label}! ${result.oneLiner} What is your Mental Age?`;

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Mental Age Quiz',
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        // User cancelled or error, fallback to copy
        handleCopyLink();
      }
    } else {
      handleCopyLink();
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      label: 'Twitter',
      color: 'hover:text-blue-400'
    },
    {
      icon: MessageCircle, // Using as WhatsApp proxy
      href: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
      label: 'WhatsApp',
      color: 'hover:text-green-500'
    },
    {
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      label: 'Facebook',
      color: 'hover:text-blue-600'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-md mx-auto"
    >
      <div className={`relative overflow-hidden border-4 ${result.accent} rounded-3xl p-8 ${result.color} shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`}>
        {/* Badge */}
        <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full">
          Verified
        </div>

        {/* Header */}
        <h2 className="text-sm font-bold uppercase tracking-widest opacity-70 mb-2">Mental Age Result</h2>
        <h1 className="text-4xl font-black leading-tight mb-4">{result.label}</h1>
        <p className="text-lg font-medium leading-relaxed mb-8 border-l-4 border-black pl-4 opacity-90">
          "{result.oneLiner}"
        </p>

        {/* Sliders */}
        <div className="space-y-4 mb-8">
          {result.stats.map((stat, idx) => (
            <div key={idx}>
              <div className="flex justify-between text-xs font-bold uppercase mb-1">
                <span>{stat.label}</span>
                <span>{stat.value}%</span>
              </div>
              <div className="h-4 bg-black/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${stat.value}%` }}
                  transition={{ delay: 0.2 + (idx * 0.1), duration: 1, type: "spring" }}
                  className="h-full bg-black"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Action Area */}
        <div className="space-y-3">
          <div className="flex gap-3">
            <button 
              onClick={handleNativeShare}
              className="flex-1 bg-black text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.div
                    key="copied"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Check size={20} /> Copied!
                  </motion.div>
                ) : (
                  <motion.div
                    key="share"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Share2 size={20} /> Share Result
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
            <button 
              onClick={onRestart}
              className="bg-white/50 p-4 rounded-xl hover:bg-white/80 transition-colors border-2 border-black"
              title="Restart Quiz"
            >
              <RefreshCcw size={20} className="text-black" />
            </button>
          </div>

          {/* Social Icons Row */}
          <div className="flex justify-center gap-4 pt-2">
            {socialLinks.map((link, idx) => (
              <a 
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full bg-white/40 border border-black/10 transition-colors ${link.color} hover:bg-white`}
                title={`Share on ${link.label}`}
              >
                <link.icon size={20} />
              </a>
            ))}
            <button
               onClick={handleCopyLink}
               className="p-2 rounded-full bg-white/40 border border-black/10 transition-colors hover:text-purple-600 hover:bg-white"
               title="Copy Link"
            >
              <Link2 size={20} />
            </button>
          </div>
        </div>
      </div>
      
      <p className="text-center text-gray-600 mt-6 text-sm font-medium">
        Screenshot this card to roast your friends.
      </p>
    </motion.div>
  );
};

export default ResultCard;