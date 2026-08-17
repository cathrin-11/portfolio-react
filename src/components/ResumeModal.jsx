import React from 'react';
import { X, Printer, FileText, Mail, Phone, Download, Server } from 'lucide-react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, PROJECTS, INTERNSHIPS, SKILLS, EDUCATION_AND_CERTIFICATIONS } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

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
        className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0A0A0A] border border-[#D4AF37]/25 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(212,175,55,0.12)] relative"
      >
        {/* Modal Controls Bar */}
        <div className="p-4 sm:px-6 border-b border-white/5 flex items-center justify-between sticky top-0 bg-[#0A0A0A]/95 backdrop-blur-xl z-10">
          <div className="flex items-center gap-2.5">
            <FileText size={18} className="text-[#D4AF37]" />
            <span className="font-mono text-xs sm:text-sm font-semibold text-white">
              CATHRIN_RESUME.pdf
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="/CATHRIN_RESUME.pdf"
              download="CATHRIN_RESUME.pdf"
              className="h-9 px-3.5 rounded-lg bg-[#D4AF37] text-black text-xs font-mono font-semibold flex items-center gap-1.5 hover:bg-[#E5C76B] transition-colors"
            >
              <Download size={14} />
              <span>PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="h-9 px-3 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-mono flex items-center gap-1.5 hover:border-[#D4AF37]/40 transition-colors"
            >
              <Printer size={14} className="text-[#D4AF37]" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-gray/70 hover:text-white flex items-center justify-center transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="p-6 sm:p-10 flex flex-col gap-8">
          {/* Header */}
          <div className="border-b border-white/5 pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <div className="text-[#D4AF37] font-mono text-sm sm:text-base font-semibold mt-1">
              {PERSONAL_INFO.title} · FULL STACK & NODE.JS DEVELOPER
            </div>

            <div className="flex flex-wrap gap-4 text-xs font-mono text-gray/70 mt-3">
              <div className="flex items-center gap-1.5">
                <Phone size={13} className="text-[#D4AF37]" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail size={13} className="text-[#D4AF37]" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Server size={13} className="text-[#D4AF37]" />
                <span>Node.js Developer</span>
              </div>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-[#D4AF37] hover:underline">
                GitHub: Cathrin-11
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-[#D4AF37] hover:underline">
                LinkedIn: Cathrin-R
              </a>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="text-xs font-mono text-[#D4AF37] uppercase tracking-[0.15em] font-semibold mb-2">
              CAREER OBJECTIVE
            </h2>
            <p className="text-xs sm:text-sm text-gray/80 leading-relaxed font-sans">
              {PERSONAL_INFO.objective}
            </p>
          </div>

          {/* Core Skills */}
          <div>
            <h2 className="text-xs font-mono text-[#D4AF37] uppercase tracking-[0.15em] font-semibold mb-2.5">
              CORE SKILLS & TECHNOLOGIES
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {SKILLS.map((skill) => (
                <span 
                  key={skill} 
                  className="text-xs font-mono px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-gray/70"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono text-[#D4AF37] uppercase tracking-[0.15em] font-semibold mb-3">
              WORK EXPERIENCE & INTERNSHIPS
            </h2>
            {INTERNSHIPS.map((exp, i) => (
              <div key={i} className="flex flex-col gap-1.5 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex justify-between flex-wrap gap-2">
                  <div className="font-semibold text-sm sm:text-base text-white">{exp.role} — {exp.company}</div>
                  <div className="text-xs font-mono text-[#D4AF37]">{exp.period} | {exp.location}</div>
                </div>
                <p className="text-xs text-gray/70 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono text-[#D4AF37] uppercase tracking-[0.15em] font-semibold mb-3">
              ENGINEERED PROJECT SYSTEMS
            </h2>
            <div className="flex flex-col gap-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col gap-1">
                  <div className="font-semibold text-sm text-white font-display">{proj.title}</div>
                  <div className="text-xs text-gray/70 leading-relaxed">{proj.shortDesc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono text-[#D4AF37] uppercase tracking-[0.15em] font-semibold mb-2.5">
              EDUCATION & CERTIFICATIONS
            </h2>
            <div className="flex flex-col gap-2 text-xs text-gray/80 font-mono">
              {EDUCATION_AND_CERTIFICATIONS.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-[#D4AF37]">—</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
