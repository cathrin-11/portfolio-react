import React from 'react';
import { X, Printer, FileText, MapPin, Mail, Phone, Download } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, INTERNSHIPS, SKILLS, EDUCATION_AND_CERTIFICATIONS } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md print:p-0 print:bg-white print:static">
      <div className="glass-card bg-[#0b0f19] border-cyan-500/40 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl print:max-h-none print:shadow-none print:border-none print:rounded-none print:bg-white print:text-slate-900">
        
        {/* Modal Controls Bar */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between sticky top-0 bg-[#0b0f19]/95 z-10 print:hidden">
          <div className="flex items-center gap-2">
            <FileText size={18} className="text-[#a3e635]" />
            <span className="font-mono text-sm font-bold text-white">CATHRIN_RESUME.pdf</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Direct PDF File Download Link */}
            <a
              href="/CATHRIN_RESUME.pdf"
              download="CATHRIN_RESUME.pdf"
              className="btn-primary py-1.5 px-4 text-xs font-mono flex items-center gap-2 text-decoration-none"
            >
              <Download size={14} />
              <span>Download Resume PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="btn-secondary py-1.5 px-3 text-xs font-mono"
            >
              <Printer size={14} />
              <span>Print Document</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Resume Document View */}
        <div className="p-8 sm:p-12 space-y-8 font-sans print:p-6 print:text-black">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 print:border-slate-300">
            <h1 className="text-3xl font-extrabold text-white print:text-black tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <div className="text-[#a3e635] font-mono text-base font-semibold mt-1 print:text-blue-700">
              {PERSONAL_INFO.title}
            </div>

            <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 mt-3 print:text-slate-700">
              <div className="flex items-center gap-1">
                <Phone size={13} className="text-[#a3e635] print:text-slate-700" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail size={13} className="text-[#a3e635] print:text-slate-700" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={13} className="text-[#a3e635] print:text-slate-700" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-[#a3e635] hover:underline print:text-blue-700">
                Github – Cathrin-11
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-[#a3e635] hover:underline print:text-blue-700">
                LinkedIn – Cathrin R
              </a>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="text-xs font-mono text-[#a3e635] uppercase tracking-widest font-bold mb-2 print:text-slate-800">
              CAREER OBJECTIVE
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed print:text-slate-800">
              {PERSONAL_INFO.objective}
            </p>
          </div>

          {/* Internships */}
          <div>
            <h2 className="text-xs font-mono text-[#a3e635] uppercase tracking-widest font-bold mb-3 print:text-slate-800">
              INTERNSHIPS
            </h2>
            {INTERNSHIPS.map((exp, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-xs font-mono font-bold text-white print:text-black">
                  <span>{exp.role} - {exp.company}, {exp.location}</span>
                  <span className="text-[#a3e635] print:text-slate-600">{exp.period}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-mono text-[#a3e635] uppercase tracking-widest font-bold mb-2 print:text-slate-800">
              SKILLS
            </h2>
            <p className="text-xs font-mono text-slate-200 print:text-slate-900 leading-relaxed">
              {SKILLS.join(', ')}
            </p>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono text-[#a3e635] uppercase tracking-widest font-bold mb-4 print:text-slate-800">
              PROJECTS
            </h2>
            <div className="space-y-6">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-2">
                  <h3 className="text-sm font-bold text-white font-mono print:text-black">
                    {proj.title}
                  </h3>
                  <ul className="space-y-1 pl-4 list-disc text-xs text-slate-300 print:text-slate-800">
                    {proj.bullets.map((hl, idx) => (
                      <li key={idx}>{hl}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education and Certifications */}
          <div>
            <h2 className="text-xs font-mono text-[#a3e635] uppercase tracking-widest font-bold mb-3 print:text-slate-800">
              EDUCATION AND CERTIFICATIONS
            </h2>
            <ul className="space-y-2 pl-4 list-disc text-xs text-slate-300 print:text-slate-800">
              {EDUCATION_AND_CERTIFICATIONS.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
