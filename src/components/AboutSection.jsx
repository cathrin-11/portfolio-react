import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, SKILLS } from '../data/portfolioData';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="font-mono text-xs tracking-[0.2em] uppercase text-[#D4AF37]/70 mb-3">
          03 // ABOUT
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-8">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative overflow-hidden rounded-2xl border border-white/5 bg-[#0A0A0A]/80 p-6 dossier-border-breathe"
          >
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4AF37]/70 mb-4">
              WHO I AM
            </div>
            <div className="text-[#a0a0a0]/80 text-sm leading-relaxed mb-8">
              {PERSONAL_INFO.objective}
            </div>

            <div className="space-y-3 font-mono text-xs">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-3 text-[#a0a0a0] hover:text-[#FFE29A] transition-colors">
                <span className="text-[#D4AF37]/50">EMAIL</span> {PERSONAL_INFO.email}
              </a>
              <div className="flex items-center gap-3 text-[#a0a0a0]">
                <span className="text-[#D4AF37]/50">PHONE</span> {PERSONAL_INFO.phone}
              </div>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#a0a0a0] hover:text-[#FFE29A] transition-colors">
                <span className="text-[#D4AF37]/50">GITHUB</span> Profile
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#a0a0a0] hover:text-[#FFE29A] transition-colors">
                <span className="text-[#D4AF37]/50">LINKEDIN</span> Network
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 rounded-2xl border border-white/5 bg-[#0A0A0A]/80 p-6"
          >
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4AF37]/70 mb-6">
              CAPABILITIES
            </div>
            
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1.5 rounded-full border border-[#D4AF37]/20 text-[#E5C76B]/75 font-mono hover:border-[#D4AF37]/50 hover:text-[#FFE29A] hover:bg-[#D4AF37]/5 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
