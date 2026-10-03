import React from 'react';
import { TRUST_PILLARS } from '../data/properties';

export const WhyArora: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E2DDD5]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E2DDD5]">
          <div className="space-y-2">
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#71717A] block">
              INSTITUTIONAL INTEGRITY & ADVISORY STANDARD
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#161514] tracking-tight">
              WHY ARORA PROPERTIES
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#52525B] max-w-md font-light">
            We operate as a private real estate advisory firm, prioritizing rigorous market research, title security, and generational value over volume.
          </p>
        </div>

        {/* 5 Editorial Pillars with Large Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {TRUST_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="border-t border-[#161514] pt-6 space-y-4 flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-5xl font-light text-[#D4CEBF] block">
                  {pillar.number}
                </span>
                <h3 className="font-serif text-xl font-normal text-[#161514] tracking-wide mt-2">
                  {pillar.title}
                </h3>
              </div>
              <p className="font-sans text-xs text-[#52525B] leading-relaxed font-light">
                {pillar.deck}
              </p>
            </div>
          ))}
        </div>

        {/* Verified Institutional Credentials Strip */}
        <div className="border border-[#E2DDD5] bg-white p-6 sm:p-8 lg:p-10">
          <div className="font-mono text-xs tracking-widest uppercase text-[#71717A] pb-4 mb-6 border-b border-[#E2DDD5]">
            GOVERNANCE CREDENTIALS & MARKET PRESENCE
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#71717A] block">
                RERA ACCREDITATION
              </span>
              <span className="font-serif text-lg font-medium text-[#161514] block mt-1">
                HRERA-PKL-GGM-1284
              </span>
              <span className="font-mono text-[10px] text-[#A1A1AA]">Haryana Real Estate Regulatory Authority</span>
            </div>

            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#71717A] block">
                YEARS OF ADVISORY
              </span>
              <span className="font-serif text-2xl font-medium text-[#161514] block mt-1 tabular-nums">
                18+ YEARS
              </span>
              <span className="font-mono text-[10px] text-[#A1A1AA]">Continuous Delhi NCR leadership</span>
            </div>

            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#71717A] block">
                TRANSACTION DISPOSITION
              </span>
              <span className="font-serif text-2xl font-medium text-[#161514] block mt-1 tabular-nums">
                ₹ 4,200+ CR
              </span>
              <span className="font-mono text-[10px] text-[#A1A1AA]">Residential & Commercial assets</span>
            </div>

            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#71717A] block">
                PORTFOLIO SELECTION
              </span>
              <span className="font-serif text-2xl font-medium text-[#161514] block mt-1 tabular-nums">
                100% VETTED
              </span>
              <span className="font-mono text-[10px] text-[#A1A1AA]">Zero disputed encumbrance policy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
