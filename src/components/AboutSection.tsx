import React from 'react';
import { Mail, Phone, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { ADVISORS } from '../data/properties';

export const AboutSection: React.FC = () => {
  return (
    <section id="about-section" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E2DDD5]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 space-y-20">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-8 border-b border-[#E2DDD5]">
          <div className="lg:col-span-7 space-y-4">
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#71717A] block">
              ORIGINS & PRINCIPLES
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#161514] tracking-tight">
              PROPERTY IS PERSONAL.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="font-sans text-base sm:text-lg text-[#52525B] font-light leading-relaxed">
              Arora Properties was founded on the belief that acquiring or conveying high-value real estate requires the discretion, legal rigor, and architectural intelligence of a private family office.
            </p>
          </div>
        </div>

        {/* 3 Editorial Pillars: Our Story, Our Approach, Our Markets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#71717A] tracking-wider uppercase block">
              01 · OUR STORY
            </span>
            <h3 className="font-serif text-2xl font-normal text-[#161514]">
              Founded in Delhi NCR
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#52525B] leading-relaxed font-light">
              Established in 2008, Arora Properties began as a discreet advisory for prominent legacy families navigating land title regularizations in South Delhi. Over eighteen years, our practice expanded into prime high-rises along Golf Course Road and institutional grade commercial assets.
            </p>
          </div>

          <div className="space-y-3">
            <span className="font-mono text-xs text-[#71717A] tracking-wider uppercase block">
              02 · OUR APPROACH
            </span>
            <h3 className="font-serif text-2xl font-normal text-[#161514]">
              Architectural & Legal Rigor
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#52525B] leading-relaxed font-light">
              We decline more representations than we accept. Each home or commercial parcel undergoes comprehensive structural audits, zoning review, and title chain authentication before entering our portfolio catalogue.
            </p>
          </div>

          <div className="space-y-3">
            <span className="font-mono text-xs text-[#71717A] tracking-wider uppercase block">
              03 · OUR MARKETS
            </span>
            <h3 className="font-serif text-2xl font-normal text-[#161514]">
              Hyper-Local Knowledge
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#52525B] leading-relaxed font-light">
              We operate exclusively where we maintain deep institutional relationships: DLF Phase 5 and Golf Course Road in Gurugram, the Lutyens Bungalow Zone and premier South Delhi colonies in New Delhi, and expressway golf corridors in Noida.
            </p>
          </div>
        </div>

        {/* Advisory Leadership / Partners Section */}
        <div className="space-y-8 pt-8 border-t border-[#E2DDD5]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs tracking-widest text-[#71717A] uppercase block">
                PARTNER-LED PRACTICE
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#161514]">
                Private Advisory Leadership
              </h3>
            </div>
            <p className="font-mono text-xs text-[#71717A]">
              EVERY ENGAGEMENT IS DIRECTLY HEADED BY A SENIOR PARTNER
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ADVISORS.map((advisor) => (
              <div
                key={advisor.id}
                className="bg-white border border-[#E2DDD5] p-6 sm:p-8 space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="font-mono text-[10px] tracking-widest text-[#C2A87E] uppercase">
                    {advisor.experienceYears}+ YEARS EXPERIENCE · {advisor.focusArea.toUpperCase()}
                  </div>
                  <h4 className="font-serif text-2xl font-normal text-[#161514]">
                    {advisor.name}
                  </h4>
                  <div className="font-mono text-xs text-[#71717A]">
                    {advisor.role}
                  </div>
                  <div className="font-mono text-xs text-[#161514] font-medium pt-1">
                    {advisor.specialization}
                  </div>
                  <p className="font-sans text-xs text-[#52525B] leading-relaxed font-light pt-2 border-t border-[#E2DDD5]/60">
                    {advisor.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2DDD5] space-y-2 font-mono text-xs">
                  <a
                    href={`tel:${advisor.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-2 text-[#52525B] hover:text-[#161514] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{advisor.phone}</span>
                  </a>
                  <a
                    href={`mailto:${advisor.email}`}
                    className="flex items-center gap-2 text-[#52525B] hover:text-[#161514] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{advisor.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
