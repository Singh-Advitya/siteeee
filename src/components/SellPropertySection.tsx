import React, { useState } from 'react';
import { ArrowRight, Check, Shield, FileCheck, Building2, UserCheck } from 'lucide-react';
import { SELLER_STEPS } from '../data/properties';

export const SellPropertySection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Golf Course Road, Gurugram',
    propertyType: 'Penthouse / Sky Residence',
    approximateSize: '5,000+ sq ft',
    expectedPrice: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="sell-section" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E2DDD5]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#71717A] block">
            PRIVATE SELLER ADVISORY & DISPOSITION
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#161514] tracking-tight">
            THINKING OF SELLING?
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#52525B] font-light leading-relaxed">
            Present your property properly. Reach the right buyers. We represent premier residential and commercial assets to qualified family offices and high-net-worth principals.
          </p>
        </div>

        {/* 6-Step Editorial Process */}
        <div className="space-y-4">
          <div className="font-mono text-xs tracking-widest uppercase text-[#71717A] pb-2 border-b border-[#E2DDD5]">
            THE ARORA DISPOSITION METHODOLOGY
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SELLER_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-white border border-[#E2DDD5] p-6 sm:p-7 space-y-3 relative"
              >
                <span className="font-serif text-4xl font-light text-[#D4CEBF] block">
                  {step.step}
                </span>
                <h3 className="font-serif text-xl font-normal text-[#161514] tracking-wide">
                  {step.title}
                </h3>
                <p className="font-sans text-xs text-[#52525B] leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Seller Valuation & Listing Request Form */}
        <div className="bg-[#181716] border border-[#2A2826] text-[#FAF8F5] p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Deck */}
            <div className="lg:col-span-5 space-y-6">
              <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#C2A87E] block">
                COMPLIMENTARY VALUATION AUDIT
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-light text-white leading-tight">
                Request a Confidential Property Valuation
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#A1A1AA] leading-relaxed font-light">
                Receive an institutional micro-market comparative market analysis (CMA) based on verified registry transactions rather than speculative ask prices.
              </p>

              <div className="pt-4 border-t border-[#2A2826] space-y-3 font-mono text-xs text-[#D4CEBF]">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#C2A87E]" />
                  <span>Strict NDA Protocol & Discretion</span>
                </div>
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-[#C2A87E]" />
                  <span>Direct Principal-to-Principal Representation</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-[#C2A87E]" />
                  <span>Zero Public Circulation Without Authorization</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7 bg-[#1E1C1A] border border-[#3F3D39] p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-10 space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-[#C2A87E] text-[#161514] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <h4 className="font-serif text-2xl text-white">
                    Valuation Dossier Initiated
                  </h4>
                  <p className="font-mono text-xs text-[#D4CEBF] max-w-md mx-auto">
                    Thank you, {formData.name}. Our senior partner will prepare your confidential valuation report for {formData.propertyType} in {formData.location} and contact you directly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2.5 text-xs font-mono border border-white/30 text-white hover:bg-white hover:text-[#161514] transition-colors"
                  >
                    SUBMIT ANOTHER ASSET
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[10px] tracking-widest uppercase text-[#A1A1AA] mb-1">
                        PROPERTY OWNER / PRINCIPAL *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full bg-[#141312] border border-[#3F3D39] px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-[#C2A87E]"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] tracking-widest uppercase text-[#A1A1AA] mb-1">
                        CONFIDENTIAL PHONE *
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
                        placeholder="owner@enterprise.in"
                        className="w-full bg-[#141312] border border-[#3F3D39] px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-[#C2A87E]"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] tracking-widest uppercase text-[#A1A1AA] mb-1">
                        PROPERTY MICRO-MARKET
                      </label>
                      <select
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-[#141312] border border-[#3F3D39] px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-[#C2A87E]"
                      >
                        <option value="Golf Course Road, Gurugram">Golf Course Road, Gurugram</option>
                        <option value="DLF Phase 1-5, Gurugram">DLF Phase 1-5, Gurugram</option>
                        <option value="Lutyens Bungalow Zone / Central">Lutyens' Bungalow Zone / Central</option>
                        <option value="South Delhi Enclaves (Panchsheel / Vasant Vihar)">South Delhi Enclaves (Panchsheel / Vasant Vihar)</option>
                        <option value="Noida Expressway / Jaypee Greens">Noida Expressway / Jaypee Greens</option>
                        <option value="Other Prime NCR Location">Other Prime NCR Location</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block font-mono text-[10px] tracking-widest uppercase text-[#A1A1AA] mb-1">
                        TYPOLOGY
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full bg-[#141312] border border-[#3F3D39] px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-[#C2A87E]"
                      >
                        <option value="Penthouse / Sky Residence">Penthouse / Sky Residence</option>
                        <option value="Independent Luxury Villa">Independent Luxury Villa</option>
                        <option value="South Delhi Independent Floor">South Delhi Floor</option>
                        <option value="Condominium Residence">Condominium</option>
                        <option value="Commercial Office Floorplate">Commercial Floorplate</option>
                        <option value="Freehold Plot / Land Parcel">Freehold Plot / Land</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] tracking-widest uppercase text-[#A1A1AA] mb-1">
                        APPROX. CARPET AREA
                      </label>
                      <input
                        type="text"
                        value={formData.approximateSize}
                        onChange={(e) => setFormData({ ...formData, approximateSize: e.target.value })}
                        placeholder="e.g. 6,500 sq ft"
                        className="w-full bg-[#141312] border border-[#3F3D39] px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-[#C2A87E]"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] tracking-widest uppercase text-[#A1A1AA] mb-1">
                        TARGET VALUATION
                      </label>
                      <input
                        type="text"
                        value={formData.expectedPrice}
                        onChange={(e) => setFormData({ ...formData, expectedPrice: e.target.value })}
                        placeholder="e.g. ₹ 25 Cr"
                        className="w-full bg-[#141312] border border-[#3F3D39] px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-[#C2A87E]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] tracking-widest uppercase text-[#A1A1AA] mb-1">
                      ADDITIONAL PARTICULARS (OPTIONAL)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Park facing, custom Italian marble, tenanted till 2026..."
                      className="w-full bg-[#141312] border border-[#3F3D39] px-3.5 py-2 text-xs font-mono text-white focus:outline-none focus:border-[#C2A87E]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#FAF8F5] hover:bg-white text-[#161514] font-mono text-xs tracking-[0.2em] uppercase font-semibold transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>LIST YOUR PROPERTY WITH ARORA →</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
