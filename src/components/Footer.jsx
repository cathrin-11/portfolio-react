import React from 'react';
import { motion } from 'framer-motion';
import soundFX from '../utils/audio';

const Footer = () => {
  const handleScrollTop = () => {
    soundFX.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="border-t border-white/5 py-6 px-6 relative z-10 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
        <div className="text-[#a0a0a0]/50 text-xs font-mono">
          Cathrin R © 2026
        </div>
        
        <div className="text-[#a0a0a0]/40 text-xs font-mono">
          Full Stack & Node.js Developer
        </div>
        
        <button 
          onClick={handleScrollTop}
          onMouseEnter={() => soundFX.playHover()}
          className="text-[#D4AF37]/70 text-xs font-mono uppercase tracking-wider hover:text-[#FFE29A] transition-colors flex items-center gap-1 group"
        >
          RETURN TOP <span className="group-hover:-translate-y-1 transition-transform duration-300">↑</span>
        </button>
      </div>
    </motion.footer>
  );
};

export default Footer;
