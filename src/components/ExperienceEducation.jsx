import React from 'react';
import { motion } from 'framer-motion';
import { INTERNSHIPS, EDUCATION_AND_CERTIFICATIONS } from '../data/portfolioData';

const ExperienceEducation = () => {
  return (
    <section id="experience" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#D4AF37]/70 mb-3">
            05 // EXPERIENCE
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-10">
            Experience & Credentials
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Work History */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/5 bg-[#0A0A0A]/80 p-6 backdrop-blur-xl relative overflow-hidden group hover:border-[#D4AF37]/20 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-[#D4AF37] font-mono text-xs tracking-[0.14em] uppercase mb-6">
                WORK HISTORY
              </h3>
              <div className="space-y-8">
                {INTERNSHIPS.map((internship, index) => (
                  <div key={index} className="relative pl-4 border-l border-white/10 group-hover:border-[#D4AF37]/30 transition-colors">
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#D4AF37]/50 group-hover:bg-[#D4AF37] transition-colors"></div>
                    <h4 className="font-display text-lg font-semibold text-white mb-1">{internship.role}</h4>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[#D4AF37] font-mono text-sm">{internship.company}</span>
                      <span className="text-[#a0a0a0]/50 text-xs">—</span>
                      <span className="text-[#a0a0a0]/50 text-xs">{internship.period}</span>
                    </div>
                    {internship.description && (
                      <p className="text-[#a0a0a0]/70 text-sm leading-relaxed">{internship.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-white/5 bg-[#0A0A0A]/80 p-6 backdrop-blur-xl relative overflow-hidden group hover:border-[#D4AF37]/20 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-[#D4AF37] font-mono text-xs tracking-[0.14em] uppercase mb-6">
                DEGREES & CERTIFICATIONS
              </h3>
              <div className="space-y-4">
                {EDUCATION_AND_CERTIFICATIONS.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-[#D4AF37] mt-1">—</span>
                    <p className="text-sm text-[#a0a0a0]/70 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
