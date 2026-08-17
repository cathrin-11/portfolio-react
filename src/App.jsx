import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsMatrix from './components/SkillsMatrix';
import ProjectsSection from './components/ProjectsSection';
import ExperienceEducation from './components/ExperienceEducation';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import TerminalModal from './components/TerminalModal';
import AiNurseDemoModal from './components/AiNurseDemoModal';
import ProjectDetailsModal from './components/ProjectDetailsModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [aiDemoOpen, setAiDemoOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Keyboard shortcut: Ctrl+K or Cmd+K to launch CLI HUD
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setTerminalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div id="top" style={{ minHeight: '100vh', backgroundColor: '#09090b', color: '#fafafa', fontFamily: 'Plus Jakarta Sans, sans-serif', position: 'relative' }}>
      
      {/* Background Mesh Grid */}
      <div className="bg-grid-mesh"></div>

      {/* Responsive Navbar */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
      />

      {/* Classy High-Tech Hero Section */}
      <Hero
        onOpenResume={() => setResumeOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenAiDemo={() => setAiDemoOpen(true)}
      />

      {/* Internships, Education & Certifications */}
      <ExperienceEducation />

      {/* Technical Skills Matrix */}
      <SkillsMatrix />

      {/* Projects Showcase & AI Matcher Sandbox */}
      <ProjectsSection 
        onOpenAiDemo={() => setAiDemoOpen(true)}
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* Direct Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Interactive Cyber Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Interactive CLI HUD Terminal Modal */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onOpenResume={() => { setTerminalOpen(false); setResumeOpen(true); }}
        onOpenAiDemo={() => { setTerminalOpen(false); setAiDemoOpen(true); }}
      />

      {/* Interactive Live AI Nurse Cosine Matcher Demo Modal */}
      <AiNurseDemoModal
        isOpen={aiDemoOpen}
        onClose={() => setAiDemoOpen(false)}
      />

      {/* Project System Architecture Breakdown Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
}
