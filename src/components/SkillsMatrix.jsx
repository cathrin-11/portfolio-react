import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const SkillsMatrix = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="font-mono text-xs tracking-[0.2em] uppercase text-[#D4AF37]/70 mb-3">
          04 // SKILLS
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-10">
          Technical Stack
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-2xl border border-white/5 bg-[#0A0A0A]/80 p-5 gold-glow-hover relative overflow-hidden group"
            >
              <div className="text-[#D4AF37]/70 font-mono text-xs tracking-[0.14em] mb-2">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="font-display text-lg font-semibold text-white mb-3">
                {category.title}
              </h3>
              
              <ul className="space-y-1.5">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40" />
                    <span className="text-sm text-[#a0a0a0]/70 group-hover:text-[#fafafa]/90 transition-colors">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMatrix;
