import React, { useState } from 'react';
import { ArrowRight, Check, MapPin, Phone, Mail, Clock, ShieldCheck, Compass } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [interest, setInterest] = useState<'Buying' | 'Selling' | 'Renting' | 'Commercial' | 'Investment'>('Buying');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Golf Course Road, Gurugram',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact-section" className="py-24 lg:py-32 bg-[#141312] text-[#FAF8F5] relative overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-architectural-grid-dark opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#2A2826]">
          <div className="space-y-4">
            <span className="font-mono text-xs tracking-[0.25em] text-[#C2A87E] uppercase block">
              DISCREET ADVISORY CONSULTATION
            </span>
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight">
              LET'S FIND<br />
              YOUR NEXT<br />
              <span className="italic text-[#D4CEBF]">PROPERTY.</span>
            </h2>
          </div>

          <div className="max-w-md space-y-4">
            <p className="font-sans text-sm sm:text-base text-[#A1A1AA] leading-relaxed font-light">
              Connect directly with our advisory partners. Whether acquiring a trophy sky penthouse, disposing of a legacy estate, or structuring commercial cash flows, we bring unmatched perspective.
            </p>
            <div className="flex items-center gap-2 font-mono text-xs text-[#C2A87E]">
              <Compass className="w-3.5 h-3.5" />
              <span>HEADQUARTERS: DLF PHASE 5, GURUGRAM & CONNAUGHT PLACE, NEW DELHI</span>
            </div>
          </div>
        </div>

        {/* 2-Column: Form + Office Coordinates */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-[#1C1A19] border border-[#2F2D2A] p-8 sm:p-10">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-[#C2A87E] text-[#141312] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h3 className="font-serif text-3xl text-white">
                  Consultation Initiated
                </h3>
                <p className="font-mono text-xs text-[#D4CEBF] max-w-md mx-auto">
                  Thank you, {formData.name}. A designated advisory partner specializing in {interest} across {formData.location} will contact you at {formData.phone} shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 text-xs font-mono border border-white/30 text-white hover:bg-white hover:text-black transition-colors"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Interest Selector */}
                <div className="space-y-2">
                  <label className="block font-mono text-[10px] tracking-widest uppercase text-[#A1A1AA]">
                    I AM INTERESTED IN:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {(['Buying', 'Selling', 'Renting', 'Commercial', 'Investment'] as const).map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setInterest(opt)}
                        className={`px-3.5 py-1.5 text-xs font-mono tracking-wider transition-colors cursor-pointer border ${
                          interest === opt
                            ? 'bg-[#C2A87E] text-[#141312] border-[#C2A87E] font-medium'
                            : 'bg-[#141312] text-[#A1A1AA] border-[#3F3D39] hover:border-white/50'
                        }`}
                      >
                        {opt.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[10px] tracking-widest uppercase text-[#A1A1AA] mb-1">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sanjeev Kapoor"
                      className="w-full bg-[#141312] border border-[#3F3D39] px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-[#C2A87E]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] tracking-widest uppercase text-[#A1A1AA] mb-1">
                      DIRECT PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98..."
                      className="w-full bg-[#141312] border border-[#3F3D39] px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-[#C2A87E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[10px] tracking-widest uppercase text-[#A1A1AA] mb-1">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full bg-[#141312] border border-[#3F3D39] px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-[#C2A87E]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] tracking-widest uppercase text-[#A1A1AA] mb-1">
                      PREFERRED LOCATION
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-[#141312] border border-[#3F3D39] px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-[#C2A87E]"
                    >
                      <option value="Golf Course Road, Gurugram">Golf Course Road, Gurugram</option>
                      <option value="Lutyens Bungalow Zone, Delhi">Lutyens Bungalow Zone, Delhi</option>
                      <option value="South Delhi Enclaves">South Delhi Enclaves</option>
                      <option value="Noida Expressway / Jaypee Greens">Noida Expressway / Jaypee Greens</option>
                      <option value="DLF Cyber City / Commercial">DLF Cyber City / Commercial</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[10px] tracking-widest uppercase text-[#A1A1AA] mb-1">
                    YOUR SPATIAL / INVESTMENT CRITERIA
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your requirements (e.g. 4+ BHK sky residence with private terrace, minimum 6,000 sq ft, move-in within 6 months...)"
                    className="w-full bg-[#141312] border border-[#3F3D39] px-3.5 py-2 text-xs font-mono text-white focus:outline-none focus:border-[#C2A87E]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#FAF8F5] hover:bg-white text-[#141312] font-mono text-xs tracking-[0.2em] uppercase font-semibold transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>START A CONVERSATION →</span>
                </button>
              </form>
            )}
          </div>

          {/* Office Coordinates & Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            {/* Gurugram HQ */}
            <div className="p-6 bg-[#1A1918] border border-[#2F2D2A] space-y-3">
              <div className="flex items-center justify-between text-[#C2A87E] font-mono text-[10px] tracking-widest uppercase">
                <span>HEAD OFFICE · GURUGRAM</span>
                <span>28°27' N · 77°05' E</span>
              </div>
              <h4 className="font-serif text-xl text-white">
                Golf Course Road Advisory Suite
              </h4>
              <p className="font-sans text-xs text-[#A1A1AA] leading-relaxed">
                Level 12, Two Horizon Center, DLF Phase 5, Sector 43, Gurugram, Haryana 122002
              </p>
              <div className="pt-2 border-t border-[#2A2826] font-mono text-xs text-[#D4CEBF] space-y-1">
                <div>PHONE: +91 98110 42800</div>
                <div>OFFICE: +91 124 492 8100</div>
              </div>
            </div>

            {/* New Delhi Central Office */}
            <div className="p-6 bg-[#1A1918] border border-[#2F2D2A] space-y-3">
              <div className="flex items-center justify-between text-[#C2A87E] font-mono text-[10px] tracking-widest uppercase">
                <span>REPRESENTATIVE SUITE · NEW DELHI</span>
                <span>28°37' N · 77°13' E</span>
              </div>
              <h4 className="font-serif text-xl text-white">
                Barakhamba Road Chambers
              </h4>
              <p className="font-sans text-xs text-[#A1A1AA] leading-relaxed">
                Level 6, Gopaldas Bhawan, 28 Barakhamba Road, Connaught Place, New Delhi 110001
              </p>
              <div className="pt-2 border-t border-[#2A2826] font-mono text-xs text-[#D4CEBF] space-y-1">
                <div>DIRECT: +91 98101 54920</div>
                <div>EMAIL: advisory@aroraproperties.in</div>
              </div>
            </div>

            {/* Hours & Protocol */}
            <div className="flex items-center gap-3 text-xs font-mono text-[#A1A1AA]">
              <Clock className="w-4 h-4 text-[#C2A87E]" />
              <span>CONSULTATIONS BY PRIOR APPOINTMENT · MON — SAT, 09:30 — 19:30</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
