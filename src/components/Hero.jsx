import React from 'react';
import { motion } from 'framer-motion';
import soundFX from '../utils/audio';
import { Download, Terminal, ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } 
  },
};

const Hero = ({ onOpenTerminal }) => {
  const techStack = [
    'REACT',
    'NODE.JS',
    'SPRING BOOT',
    'PYTHON',
    'JAVA',
    'C++',
    'MYSQL',
    'MONGODB',
    'AWS CLOUD',
    'MACHINE LEARNING'
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-[#050505] pt-24 pb-16">
      
      {/* Interactive Ambient Geometry / Holographic Telemetry Rings in Background */}
      <div className="absolute right-[-10%] sm:right-[2%] top-1/2 -translate-y-1/2 w-[340px] sm:w-[540px] h-[340px] sm:h-[540px] pointer-events-none opacity-20 z-0">
        <svg viewBox="0 0 500 500" className="w-full h-full animate-[spin_60s_linear_infinite]">
          <circle cx="250" cy="250" r="220" stroke="#D4AF37" strokeWidth="1" strokeDasharray="6 8" fill="none" opacity="0.4" />
          <circle cx="250" cy="250" r="170" stroke="#FFE29A" strokeWidth="1" strokeDasharray="3 6" fill="none" opacity="0.6" />
          <circle cx="250" cy="250" r="110" stroke="#D4AF37" strokeWidth="1.5" fill="none" opacity="0.3" />
          <circle cx="250" cy="250" r="50" stroke="#D4AF37" strokeWidth="1" strokeDasharray="2 4" fill="none" opacity="0.5" />
          <line x1="20" y1="250" x2="480" y2="250" stroke="#D4AF37" strokeWidth="0.8" opacity="0.25" />
          <line x1="250" y1="20" x2="250" y2="480" stroke="#D4AF37" strokeWidth="0.8" opacity="0.25" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start text-left"
        >
          {/* Top Status Line */}
          <motion.div 
            variants={fadeUp} 
            className="flex items-center gap-2.5 font-mono text-xs tracking-[0.14em] text-gray/60 uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#E5C76B] shadow-[0_0_8px_#E5C76B] animate-pulse" />
            <span>AVAILABLE FOR FULL-TIME ROLES</span>
            <span className="text-white/20 mx-1">/</span>
            <span>COIMBATORE, INDIA</span>
          </motion.div>

          {/* Eyebrow */}
          <motion.div 
            variants={fadeUp}
            className="font-mono text-xs tracking-[0.2em] uppercase text-gray/50 font-medium mb-3"
          >
            SOFTWARE DEVELOPMENT ENGINEER
          </motion.div>

          {/* Headline: CATHRIN R. (Left-aligned) */}
          <motion.h1 
            variants={fadeUp} 
            className="font-heading text-6xl sm:text-7xl lg:text-[88px] font-extrabold tracking-tight leading-none text-white mb-6 flex flex-wrap items-baseline gap-3 sm:gap-4 text-left"
          >
            <span className="text-white">CATHRIN</span>
            <span className="text-gold-gradient">R.</span>
          </motion.h1>

          {/* Best-in-Field Description Text */}
          <motion.p 
            variants={fadeUp} 
            className="font-sans text-base sm:text-lg text-gray/70 max-w-2xl leading-relaxed mb-8 text-left"
          >
            Software Development Engineer specializing in <strong className="text-white font-medium">full-stack web architectures</strong>, distributed <strong className="text-white font-medium">backend APIs</strong>, and intelligent <strong className="text-[#FFE29A] font-medium">computer vision &amp; machine learning pipelines</strong>. Building scalable, high-throughput systems with clean modular design.
          </motion.p>

          {/* Tech Row with Dividers */}
          <motion.div 
            variants={fadeUp}
            className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-[11px] sm:text-xs tracking-[0.12em] text-gray/60 mb-10"
          >
            {techStack.map((tech, idx) => (
              <React.Fragment key={tech}>
                <span className="hover:text-[#FFE29A] transition-colors">{tech}</span>
                {idx < techStack.length - 1 && (
                  <span className="text-white/15">|</span>
                )}
              </React.Fragment>
            ))}
          </motion.div>

          {/* 3 Action Buttons */}
          <motion.div 
            variants={fadeUp} 
            className="flex flex-wrap items-center gap-3 sm:gap-4"
          >
            {/* Explore Projects Button */}
            <a
              href="#work"
              onClick={() => soundFX.playClick()}
              onMouseEnter={() => soundFX.playHover()}
              className="px-6 py-3.5 rounded-lg border border-[#D4AF37]/50 bg-[#090909]/40 text-[#D4AF37] font-mono text-xs tracking-[0.14em] uppercase font-semibold hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.25)] transition-all flex items-center gap-3"
            >
              <span>EXPLORE ALL 8 PROJECTS</span>
              <ArrowRight size={14} className="text-[#D4AF37]" />
            </a>

            {/* Direct Download Resume Button */}
            <a
              href="/CATHRIN_RESUME.pdf"
              download="CATHRIN_RESUME.pdf"
              onClick={() => soundFX.playClick()}
              onMouseEnter={() => soundFX.playHover()}
              className="px-6 py-3.5 rounded-lg border border-white/10 bg-[#090909]/60 text-white font-mono text-xs tracking-[0.14em] uppercase font-semibold hover:border-white/30 hover:bg-white/5 transition-all flex items-center gap-2.5"
            >
              <Download size={14} className="text-gray/70" />
              <span>DOWNLOAD RESUME</span>
            </a>

            {/* CLI HUD Button */}
            {onOpenTerminal && (
              <button
                onClick={() => { soundFX.playClick(); onOpenTerminal(); }}
                onMouseEnter={() => soundFX.playHover()}
                className="px-6 py-3.5 rounded-lg border border-white/10 bg-[#090909]/60 text-white/70 font-mono text-xs tracking-[0.14em] uppercase font-semibold hover:border-white/30 hover:text-white hover:bg-white/5 transition-all flex items-center gap-2.5"
              >
                <Terminal size={14} className="text-gray/70" />
                <span>CLI HUD (CTRL+K)</span>
              </button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
