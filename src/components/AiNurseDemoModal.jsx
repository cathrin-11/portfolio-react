import React, { useState } from 'react';
import { X, Sparkles, Brain, MapPin, MessageSquare, Send, CheckCircle, RefreshCw, Sliders, ShieldCheck } from 'lucide-react';
import { soundFX } from '../utils/audio';

export default function AiNurseDemoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [patientNeeds, setPatientNeeds] = useState("Post-operative cardiac recovery, IV medication monitoring, ICU background");
  const [distanceKm, setDistanceKm] = useState(4.2);
  const [isCalculating, setIsCalculating] = useState(false);
  const [matchResult, setMatchResult] = useState(null);

  // Chat simulator state
  const [chatMessages, setChatMessages] = useState([
    { sender: 'System', text: 'AI Match confirmed. Pre-confirmation consultation channel opened with Nurse Sarah M.' },
    { sender: 'Nurse', text: 'Hello! I have reviewed your cardiac care requirements and medical history. I am available starting 8:00 AM tomorrow.' }
  ]);
  const [inputMsg, setInputMsg] = useState('');

  const sampleNurses = [
    {
      id: "N-101",
      name: "Sarah Miller, RN",
      skills: "Cardiac ICU Specialist, Advanced IV Therapy, 8 Yrs Experience",
      vectorScore: 0.94,
      coords: "11.0168° N, 76.9558° E",
      distanceKm: 4.2
    },
    {
      id: "N-102",
      name: "Priya Raman, B.Sc Nursing",
      skills: "Geriatric & Post-op Recovery, Tracheostomy Care, 5 Yrs Exp",
      vectorScore: 0.81,
      coords: "11.0280° N, 76.9620° E",
      distanceKm: 7.8
    },
    {
      id: "N-103",
      name: "David Chen, RN",
      skills: "Pediatric & General Medical Nursing, Wound Care",
      vectorScore: 0.63,
      coords: "11.0500° N, 76.9900° E",
      distanceKm: 14.1
    }
  ];

  const handleRunMatch = () => {
    soundFX.playBeep();
    setIsCalculating(true);
    setMatchResult(null);

    setTimeout(() => {
      // Simulate cosine similarity calculation output
      const matched = sampleNurses[0];
      setMatchResult({
        primaryNurse: matched,
        vectorDimensions: 384,
        haversineRadiusLimit: 15,
        executionTimeMs: 18.4,
        status: "OPTIMAL MATCH"
      });
      setIsCalculating(false);
      soundFX.playBeep();
    }, 1200);
  };

  const handleSendChat = (e) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;
    soundFX.playTerminalKey();
    const userMessage = inputMsg;
    setChatMessages(prev => [...prev, { sender: 'Patient', text: userMessage }]);
    setInputMsg('');

    setTimeout(() => {
      soundFX.playClick();
      setChatMessages(prev => [
        ...prev,
        { sender: 'Nurse', text: `Understood! I will bring the requested equipment and follow the physician protocol for ${userMessage}.` }
      ]);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="glass-card bg-[#0b0f19] border-cyan-500/40 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-[0_0_50px_rgba(0,242,254,0.2)]">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between sticky top-0 bg-[#0b0f19]/95 z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
              <Brain size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white font-mono">
                  AI Clinical-Fit Matching Engine
                </h3>
                <span className="tech-pill text-[10px]">NLP + Haversine GIS</span>
              </div>
              <p className="text-xs text-slate-400">
                MiniLM Cosine Similarity Vector Sandbox (Interactive Simulation)
              </p>
            </div>
          </div>
          <button
            onClick={() => { soundFX.playClick(); onClose(); }}
            className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body Grid */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Sandbox Inputs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <label className="block text-xs font-mono text-cyan-400 uppercase tracking-wider">
                1. Patient Requirement Vector Input (Natural Language)
              </label>
              <textarea
                value={patientNeeds}
                onChange={(e) => setPatientNeeds(e.target.value)}
                rows={3}
                className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-mono focus:border-cyan-400 outline-none"
                placeholder="Describe medical needs, required certifications, acuity..."
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-400">Haversine Max Radius (GIS Constraint)</span>
                <span className="text-emerald-400 font-bold">{distanceKm} km</span>
              </div>
              <input
                type="range"
                min="1"
                max="25"
                step="0.5"
                value={distanceKm}
                onChange={(e) => setDistanceKm(parseFloat(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            {/* Run Button */}
            <button
              onClick={handleRunMatch}
              disabled={isCalculating}
              className="btn-primary w-full font-mono text-xs py-3 flex items-center justify-center gap-2"
            >
              {isCalculating ? (
                <>
                  <RefreshCw size={16} className="animate-spin" />
                  <span>Computing MiniLM Embeddings...</span>
                </>
              ) : (
                <>
                  <Sparkles size={16} />
                  <span>Execute Vector Cosine & Haversine Match</span>
                </>
              )}
            </button>

            {/* Candidate List */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <span className="text-xs font-mono text-slate-400 uppercase">Available Nurse Pool</span>
              {sampleNurses.map((nurse) => (
                <div key={nurse.id} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs font-mono">
                  <div>
                    <div className="text-slate-200 font-bold">{nurse.name}</div>
                    <div className="text-[11px] text-slate-400">{nurse.skills}</div>
                  </div>
                  <div className="text-right shrink-0 ml-2">
                    <div className="text-cyan-400 font-bold">{(nurse.vectorScore * 100).toFixed(1)}% match</div>
                    <div className="text-[10px] text-slate-500">{nurse.distanceKm} km away</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Results & Pre-confirm Chat Simulator */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Realtime Matching Diagnostic Output */}
            <div className="terminal-window p-4 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                <span>SYSTEM LOG: /api/v1/match/nurse</span>
                <span className="text-emerald-400 text-[10px]">HEALTHY</span>
              </div>
              
              {isCalculating ? (
                <div className="py-6 text-center text-cyan-400 animate-pulse">
                  &gt; [NLP Pipeline] Generating 384-dimensional MiniLM embeddings...
                </div>
              ) : matchResult ? (
                <div className="space-y-2 text-slate-300">
                  <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle size={14} /> STATUS: {matchResult.status} ({matchResult.executionTimeMs}ms)
                  </div>
                  <div>Nurse Assigned: <span className="text-cyan-300 font-bold">{matchResult.primaryNurse.name}</span></div>
                  <div>Semantic Cosine Score: <span className="text-amber-400 font-bold">{(matchResult.primaryNurse.vectorScore * 100).toFixed(1)}%</span></div>
                  <div>Haversine Distance: <span className="text-indigo-300">{matchResult.primaryNurse.distanceKm} km</span></div>
                </div>
              ) : (
                <div className="py-4 text-slate-500 text-center">
                  Click 'Execute Vector Cosine & Haversine Match' to run live AI nurse allocation logic.
                </div>
              )}
            </div>

            {/* Pre-confirmation Interactive Consultation Chat */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col h-64">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono">
                <div className="flex items-center gap-2 text-cyan-400">
                  <MessageSquare size={14} />
                  <span>Pre-Confirmation Nurse Chat Channel</span>
                </div>
                <span className="text-[10px] text-emerald-400">WEBSOCKET OPEN</span>
              </div>

              {/* Chat Stream */}
              <div className="flex-1 overflow-y-auto py-3 space-y-2 text-xs font-mono">
                {chatMessages.map((msg, i) => (
                  <div key={i} className={`p-2.5 rounded-lg max-w-[85%] ${
                    msg.sender === 'Patient' 
                      ? 'ml-auto bg-cyan-500/20 text-cyan-200 border border-cyan-500/30'
                      : msg.sender === 'System'
                      ? 'mx-auto bg-slate-800 text-slate-400 text-[10px] text-center'
                      : 'bg-slate-800 text-slate-200 border border-slate-700'
                  }`}>
                    {msg.sender !== 'System' && <div className="text-[10px] text-slate-400 mb-0.5">{msg.sender}</div>}
                    <div>{msg.text}</div>
                  </div>
                ))}
              </div>

              {/* Send Form */}
              <form onSubmit={handleSendChat} className="pt-2 flex gap-2 border-t border-slate-800">
                <input
                  type="text"
                  value={inputMsg}
                  onChange={(e) => setInputMsg(e.target.value)}
                  placeholder="Ask nurse about equipment or schedule..."
                  className="flex-1 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 text-xs font-mono focus:border-cyan-400 outline-none"
                />
                <button type="submit" className="p-2 rounded-lg bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-bold">
                  <Send size={14} />
                </button>
              </form>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
