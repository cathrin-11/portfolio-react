import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import soundFX from '../utils/audio';

export default function ProjectDetailsModal({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[10001] flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-2xl max-h-[88vh] overflow-y-auto bg-[#0A0A0A] border border-[#D4AF37]/25 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(212,175,55,0.12)] relative"
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-[#0E0E0E] border-b border-white/5 flex items-center justify-between sticky top-0 z-10">
          <div>
            <span className="text-[10px] uppercase tracking-[0.14em] font-mono px-2.5 py-1 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] bg-[#D4AF37]/5 inline-block mb-2">
              {project.badge}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              {project.title}
            </h3>
          </div>
          <button
            onClick={() => { soundFX.playClick(); onClose(); }}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray/70 hover:text-white hover:border-[#D4AF37]/40 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 flex flex-col gap-6">
          {/* System Overview */}
          <div>
            <h4 className="text-xs font-mono text-[#D4AF37] uppercase tracking-[0.14em] font-semibold mb-2">
              SYSTEM OVERVIEW & PURPOSE
            </h4>
            <p className="text-sm text-gray/80 leading-relaxed font-sans">
              {project.shortDesc}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-mono text-[#D4AF37] uppercase tracking-[0.14em] font-semibold mb-2.5">
              TECHNOLOGY STACK INTEGRATION
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span 
                  key={t} 
                  className="text-xs font-mono px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights & Bullets */}
          <div>
            <h4 className="text-xs font-mono text-[#D4AF37] uppercase tracking-[0.14em] font-semibold mb-3">
              KEY ARCHITECTURAL HIGHLIGHTS
            </h4>
            <div className="flex flex-col gap-2.5">
              {project.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray/80 leading-relaxed">
                  <CheckCircle2 size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
