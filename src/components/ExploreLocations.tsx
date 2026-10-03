import React from 'react';
import { ArrowRight, Compass, MapPin } from 'lucide-react';
import { LocationGuide } from '../types/property';
import { LOCATION_GUIDES } from '../data/properties';

interface ExploreLocationsProps {
  onSelectLocation: (locationName: string) => void;
}

export const ExploreLocations: React.FC<ExploreLocationsProps> = ({ onSelectLocation }) => {
  return (
    <section id="locations-section" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E2DDD5]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E2DDD5]">
          <div className="space-y-2">
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#71717A] block">
              GEOGRAPHICAL FOOTPRINT
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#161514] tracking-tight">
              EXPLORE BY LOCATION
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#52525B] max-w-md font-light">
            Our advisory practice focuses exclusively on prime micro-markets where supply is permanently constrained and capital preservation is enduring.
          </p>
        </div>

        {/* 4 Distinct Photographic Architectural Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LOCATION_GUIDES.map((loc) => (
            <div
              key={loc.id}
              onClick={() => onSelectLocation(loc.name)}
              className="group relative bg-[#181716] overflow-hidden border border-[#E2DDD5] hover:border-[#161514] transition-all duration-300 cursor-pointer aspect-[3/4] flex flex-col justify-between p-6"
            >
              {/* Image Background with Scrim */}
              <img
                src={loc.image}
                alt={loc.name}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover grayscale-[25%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 pointer-events-none" />

              {/* Top Meta Tag */}
              <div className="relative z-10 flex items-center justify-between text-[#FAF8F5]/80 font-mono text-[10px] tracking-widest uppercase">
                <span className="bg-black/40 px-2 py-0.5 border border-white/20">
                  {loc.state}
                </span>
                <span className="text-[#C2A87E]">{loc.coordinates}</span>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 space-y-3 text-white">
                <div className="space-y-1">
                  <span className="font-mono text-[9px] tracking-widest uppercase text-[#D4CEBF] block">
                    MICRO-MARKET DOSSIER
                  </span>
                  <h3 className="font-serif text-2xl font-normal leading-snug group-hover:text-[#FAF8F5] transition-colors">
                    {loc.name}
                  </h3>
                </div>

                <p className="font-sans text-xs text-[#D4CEBF] line-clamp-2 font-light">
                  {loc.tagline}
                </p>

                {/* Quantitative Data (Tabular numerals) */}
                <div className="pt-3 border-t border-white/20 grid grid-cols-2 gap-2 font-mono text-[11px] text-[#E0E0E0]">
                  <div>
                    <span className="text-[9px] text-[#A1A1AA] block uppercase">AVG CARPET</span>
                    <span className="tabular-nums font-semibold">{loc.avgSizeSqFt.toLocaleString()} SQ FT</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-[#A1A1AA] block uppercase">BENCHMARK</span>
                    <span className="tabular-nums font-semibold text-[#C2A87E]">{loc.avgPriceCr}</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between font-mono text-xs text-white group-hover:translate-x-1 transition-transform">
                  <span className="tracking-wider">EXPLORE LOCATION</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
