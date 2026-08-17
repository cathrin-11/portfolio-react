import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { PERSONAL_INFO } from '../data/portfolioData';
import soundFX from '../utils/audio';

const EMAILJS_SERVICE_ID = 'service_ul359yp';
const EMAILJS_TEMPLATE_ID = 'template_da05111';
const EMAILJS_PUBLIC_KEY = '8Gq-OQOLep-F3PsOr';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [transmitted, setTransmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    soundFX.playClick();
    setIsTransmitting(true);
    setErrorMessage('');

    try {
      // EmailJS Automated Dispatch
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          from_name: formData.name,
          email: formData.email,
          from_email: formData.email,
          reply_to: formData.email,
          message: formData.message,
          to_name: 'Cathrin R',
        },
        EMAILJS_PUBLIC_KEY
      );

      setIsTransmitting(false);
      setTransmitted(true);
      soundFX.playGlitch();
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setTransmitted(false);
      }, 5000);
    } catch (error) {
      console.error('EmailJS transmission error:', error);
      setIsTransmitting(false);
      setErrorMessage('Transmission encountered an error. Please email directly.');
      setTimeout(() => setErrorMessage(''), 6000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    soundFX.playHover();
  };

  return (
    <section id="contact" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#D4AF37]/70 mb-3">
            06 // CONTACT
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
            Let's Build<br />
            <span className="text-gold-gradient">Something Meaningful.</span>
          </h2>
        </motion.div>

        {/* Direct Contact Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <a 
            href={`mailto:${PERSONAL_INFO.email}`}
            onMouseEnter={() => soundFX.playHover()}
            onClick={() => soundFX.playClick()}
            className="px-5 py-2.5 rounded-full border border-[#D4AF37]/25 text-[#E5C76B] text-sm font-mono hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 hover:text-[#FFE29A] transition-all"
          >
            {PERSONAL_INFO.email}
          </a>
          <a 
            href={`tel:${PERSONAL_INFO.phone}`}
            onMouseEnter={() => soundFX.playHover()}
            onClick={() => soundFX.playClick()}
            className="px-5 py-2.5 rounded-full border border-[#D4AF37]/25 text-[#E5C76B] text-sm font-mono hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 hover:text-[#FFE29A] transition-all"
          >
            {PERSONAL_INFO.phone}
          </a>
          <a 
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundFX.playHover()}
            onClick={() => soundFX.playClick()}
            className="px-5 py-2.5 rounded-full border border-[#D4AF37]/25 text-[#E5C76B] text-sm font-mono hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 hover:text-[#FFE29A] transition-all"
          >
            GITHUB
          </a>
          <a 
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundFX.playHover()}
            onClick={() => soundFX.playClick()}
            className="px-5 py-2.5 rounded-full border border-[#D4AF37]/25 text-[#E5C76B] text-sm font-mono hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 hover:text-[#FFE29A] transition-all"
          >
            LINKEDIN
          </a>
        </motion.div>

        {/* Live Automated Email Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-white/5 bg-[#0A0A0A]/80 p-6 mt-12 max-w-lg mx-auto backdrop-blur-xl relative overflow-hidden"
        >
          {transmitted ? (
            <div className="py-12 flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-full border border-[#D4AF37] flex items-center justify-center mb-4 bg-[#D4AF37]/10">
                <svg className="w-6 h-6 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-white font-display text-xl mb-2">Message Dispatched Successfully ✓</h3>
              <p className="text-[#a0a0a0]/70 font-mono text-sm">Automated transmission delivered to Cathrin R.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="NAME // ALIAS" 
                  required
                  className="w-full bg-[#090909] border border-white/10 rounded-lg px-4 py-3 text-white font-mono text-sm placeholder-[#a0a0a0]/40 focus:border-[#D4AF37] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="COMM LINK // EMAIL" 
                  required
                  className="w-full bg-[#090909] border border-white/10 rounded-lg px-4 py-3 text-white font-mono text-sm placeholder-[#a0a0a0]/40 focus:border-[#D4AF37] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="TRANSMISSION DATA..." 
                  required
                  rows={4}
                  className="w-full bg-[#090909] border border-white/10 rounded-lg px-4 py-3 text-white font-mono text-sm placeholder-[#a0a0a0]/40 focus:border-[#D4AF37] focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              {errorMessage && (
                <div className="text-red-400 font-mono text-xs py-1">
                  {errorMessage}
                </div>
              )}

              <button 
                type="submit" 
                disabled={isTransmitting}
                onMouseEnter={() => soundFX.playHover()}
                className="w-full py-3 rounded-lg bg-[#D4AF37] text-black font-semibold font-mono text-sm tracking-wider uppercase hover:bg-[#E5C76B] active:scale-[0.98] transition-all disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isTransmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin"></span>
                    TRANSMITTING PAYLOAD...
                  </>
                ) : (
                  'INITIATE PROTOCOL →'
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
