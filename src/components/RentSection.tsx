import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Key, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { Property } from '../types/property';

interface RentSectionProps {
  onSelectProperty: (property: Property) => void;
  rentalProperties: Property[];
}

export const RentSection: React.FC<RentSectionProps> = ({
  onSelectProperty,
  rentalProperties,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const rentalFeatures = [
    {
      title: 'MOVE-IN READY',
      deck: 'Turnkey architectural furnishings by Poliform, Minotti, and B&B Italia. Move in within 48 hours of lease execution.',
      icon: Sparkles,
    },
    {
      title: 'DIPLOMATIC & FAMILY LEASES',
      deck: 'High security enclaves, diplomatic registry clearance, dual staff quarters, and dedicated clubhouse memberships.',
      icon: ShieldCheck,
    },
    {
      title: 'PREMIUM SERVICED PENTHOUSES',
      deck: 'Private plunge pools, dedicated maintenance engineers, 100% redundant utilities, and direct concierge service.',
      icon: Key,
    },
    {
      title: 'GRADE-A COMMERCIAL LEASING',
      deck: 'Contiguous corporate floorplates with scalable lease tenures, LEED certifications, and prime transit proximity.',
      icon: Clock,
    },
  ];

  return (
    <section id="rent-section" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E2DDD5]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E2DDD5]">
          <div className="space-y-2">
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#71717A] block">
              PREMIER LEASING & EXPEDIATED TENANCY
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#161514] tracking-tight">
              A BETTER WAY TO RENT.
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#52525B] max-w-md font-light">
            Catering to multinational leadership, expatriates, and sovereign embassies seeking verified premium leaseholds with zero friction.
          </p>
        </div>

        {/* 4 Architectural Rental Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rentalFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E2DDD5] p-6 space-y-3"
              >
                <div className="flex items-center justify-between pb-3 border-b border-[#E2DDD5]/60">
                  <Icon className="w-4 h-4 text-[#161514]" />
                  <span className="font-mono text-[10px] text-[#A1A1AA]">0{idx + 1}</span>
                </div>
                <h3 className="font-serif text-lg font-normal text-[#161514]">
                  {feat.title}
                </h3>
                <p className="font-sans text-xs text-[#52525B] leading-relaxed font-light">
                  {feat.deck}
                </p>
              </div>
            );
          })}
        </div>

        {/* Featured Curated Rental Highlight */}
        {rentalProperties.length > 0 && (
          <div className="border border-[#E2DDD5] bg-white p-6 sm:p-10">
            <div className="font-mono text-xs tracking-widest uppercase text-[#71717A] pb-4 mb-6 border-b border-[#E2DDD5] flex items-center justify-between">
              <span>SPOTLIGHT LEASEHOLD HOLDING</span>
              <span className="text-[#161514] font-medium">AVAILABLE FOR IMMEDIATE OCCUPANCY</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 aspect-[16/10] overflow-hidden bg-[#EFECE6] border border-[#E2DDD5]">
                <img
                  src={rentalProperties[0].images.hero}
                  alt={rentalProperties[0].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#71717A] uppercase mb-1">
                    <span>{rentalProperties[0].aroraCode}</span>
                    <span>·</span>
                    <span>{rentalProperties[0].location}</span>
                  </div>
                  <h3 className="font-serif text-3xl font-normal text-[#161514]">
                    {rentalProperties[0].title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#52525B] mt-2 font-light leading-relaxed">
                    {rentalProperties[0].description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2DDD5] grid grid-cols-3 gap-2 font-mono text-xs text-[#52525B]">
                  <div>
                    <span className="text-[9px] text-[#A1A1AA] block uppercase">CARPET</span>
                    <span className="tabular-nums font-semibold text-[#161514]">{rentalProperties[0].areaSqFt} SQ FT</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-[#A1A1AA] block uppercase">BEDROOMS</span>
                    <span className="font-semibold text-[#161514]">{rentalProperties[0].bedrooms} CHAMBERS</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-[#A1A1AA] block uppercase">FURNISHING</span>
                    <span className="font-semibold text-emerald-800">DESIGNER TURNKEY</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2DDD5] flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-mono text-[#71717A] uppercase block">
                      MONTHLY LEASEHOLD
                    </span>
                    <span className="font-serif text-2xl font-medium text-[#161514]">
                      {rentalProperties[0].price}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectProperty(rentalProperties[0])}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#161514] hover:bg-[#2A2826] text-[#FAF8F5] font-mono text-xs tracking-wider uppercase transition-colors"
                  >
                    <span>VIEW DOSSIER</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
