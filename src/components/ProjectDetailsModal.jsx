import React from 'react';
import { X, Sparkles, Server, CheckCircle2, ArrowRight, Code, Database, Terminal, Shield } from 'lucide-react';
import { soundFX } from '../utils/audio';

export default function ProjectDetailsModal({ project, onClose, onLaunchAiDemo }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="glass-card bg-[#0b0f19] border-cyan-500/40 w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl shadow-[0_0_50px_rgba(0,242,254,0.2)]">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between sticky top-0 bg-[#0b0f19]/95 z-10">
          <div>
            <span className="tech-pill text-[10px] mb-1" style={{ borderColor: project.accentColor, color: project.accentColor }}>
              {project.badge}
            </span>
            <h3 className="text-2xl font-bold text-white font-mono mt-1">
              {project.title}
            </h3>
          </div>
          <button
            onClick={() => { soundFX.playClick(); onClose(); }}
            className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-8">
          
          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
              System Overview & Objectives
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.shortDesc}
            </p>
          </div>

          {/* Architecture Flow Breakdown */}
          <div>
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">
              Architectural Pipeline Flow
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.architecture.map((arch, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
                  <div className="text-xs font-mono font-bold text-cyan-300 mb-2">
                    {arch.step}
                  </div>
                  <div className="text-xs text-slate-400">
                    {arch.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Full Bullet Achievements */}
          <div>
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">
              Implementation Highlights & Deliverables
            </h4>
            <div className="space-y-3">
              {project.highlights.map((hl, i) => (
                <div key={i} className="flex items-start gap-3 text-xs text-slate-300 p-3 rounded-lg bg-slate-900/50 border border-slate-800/80">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Exposed REST Endpoints / Specs */}
          <div>
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">
              Exposed API Specs & Endpoint Interfaces
            </h4>
            <div className="space-y-2 font-mono text-xs">
              {project.apiEndpoints.map((api, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                      api.method === 'POST' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                      api.method === 'GET' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :
                      'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                    }`}>
                      {api.method}
                    </span>
                    <span className="text-slate-200">{api.path}</span>
                  </div>
                  <span className="text-slate-500 text-[11px]">{api.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Action Footer */}
          <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
            {project.id === 'ai-nurse-matching' && (
              <button
                onClick={() => {
                  onClose();
                  onLaunchAiDemo();
                }}
                className="btn-primary py-2 px-4 text-xs font-mono"
              >
                <Sparkles size={14} />
                <span>Launch Live AI Sandbox</span>
              </button>
            )}
            <button
              onClick={() => { soundFX.playClick(); onClose(); }}
              className="btn-secondary py-2 px-4 text-xs font-mono"
            >
              Close System Spec
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
