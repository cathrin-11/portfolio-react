import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../data/portfolioData';

const ProjectsSection = ({ onOpenAiDemo, onSelectProject }) => {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="font-mono text-xs tracking-[0.2em] uppercase text-[#D4AF37]/70 mb-3">
          02 // PROJECTS
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-10">
          Engineered Systems
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => {
                if (project.id === 'ai-nurse-matching') {
                  onOpenAiDemo();
                } else {
                  onSelectProject(project);
                }
              }}
              className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#0A0A0A]/80 p-6 group gold-glow-hover cursor-pointer"
            >
              <div className="dossier-shimmer-pass" />
              
              <div className="flex items-center mb-3">
                <span className="text-[10px] uppercase tracking-[0.14em] font-mono px-2.5 py-1 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] bg-[#D4AF37]/5">
                  {project.badge}
                </span>
              </div>

              <h3 className="font-display text-xl font-semibold text-white mt-3 mb-2 group-hover:text-[#FFE29A] transition-colors">
                {project.title}
              </h3>
              
              <p className="text-sm text-gray/70 text-[#a0a0a0]/70 leading-relaxed line-clamp-3 mb-4">
                {project.shortDesc}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {(project.techStack || project.tech || []).map((tech, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/8 text-[#a0a0a0]/60 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-[#D4AF37]">
                →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
