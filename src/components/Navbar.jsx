import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import soundFX from '../utils/audio';
import { Terminal, Menu, X } from 'lucide-react';

const Navbar = ({ onOpenTerminal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    soundFX.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-[999] transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#050505]/85 backdrop-blur-xl border-b border-white/[0.06] py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' 
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        
        {/* Left: Clean Brand */}
        <button
          onClick={handleScrollToTop}
          onMouseEnter={() => soundFX.playHover()}
          className="font-display text-sm font-semibold tracking-[0.2em] uppercase text-white hover:text-[#FFE29A] transition-colors"
        >
          CATHRIN R
        </button>

        {/* Right: Clean Minimal Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => soundFX.playClick()}
              onMouseEnter={() => soundFX.playHover()}
              className="text-xs font-mono tracking-wider text-gray/70 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}

          {onOpenTerminal && (
            <button
              onClick={() => { soundFX.playClick(); onOpenTerminal(); }}
              onMouseEnter={() => soundFX.playHover()}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 text-gray/60 hover:text-[#FFE29A] hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5 text-xs font-mono tracking-wider transition-all"
            >
              <Terminal size={12} className="text-[#D4AF37]" />
              <span>HUD</span>
              <span className="text-[10px] text-gray/40 font-mono">⌘K</span>
            </button>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => { soundFX.playClick(); setMobileOpen(!mobileOpen); }}
          className="md:hidden text-gray/70 hover:text-white p-1"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#070707]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-5 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => { soundFX.playClick(); setMobileOpen(false); }}
                className="text-sm font-mono tracking-wider text-gray/80 hover:text-[#FFE29A] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}

            {onOpenTerminal && (
              <button
                onClick={() => {
                  soundFX.playClick();
                  setMobileOpen(false);
                  onOpenTerminal();
                }}
                className="flex items-center justify-between pt-3 border-t border-white/5 text-xs font-mono text-[#FFE29A]"
              >
                <span className="flex items-center gap-2">
                  <Terminal size={14} className="text-[#D4AF37]" />
                  <span>COMMAND HUD</span>
                </span>
                <span className="text-gray/40">CTRL+K</span>
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
