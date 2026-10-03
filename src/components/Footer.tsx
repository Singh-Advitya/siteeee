import React from 'react';
import { ArrowUp, Compass } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141312] text-[#FAF8F5] border-t border-[#2A2826] pt-16 pb-12">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Top Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#2A2826]">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-1">
              <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-wider text-white uppercase">
                ARORA PROPERTIES
              </span>
              <span className="font-mono text-[10px] tracking-[0.25em] text-[#C2A87E] uppercase block">
                PRIVATE PROPERTY ADVISORY & BROKERAGE
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-[#A1A1AA] leading-relaxed max-w-sm font-light">
              Representing premier residential and commercial assets with architectural perspective, empirical market rigor, and sovereign discretion across Delhi NCR.
            </p>
            <div className="pt-2 font-mono text-[11px] text-[#71717A] space-y-0.5">
              <div>RERA REGISTRATION: HRERA-PKL-GGM-1284 / 2024</div>
              <div>DELHI NCR MUNICIPAL ADVISORY ACCREDITATION</div>
            </div>
          </div>

          {/* Column 1: Holdings */}
          <div className="space-y-3 font-mono text-xs">
            <span className="text-[10px] tracking-widest text-[#C2A87E] uppercase block">
              PORTFOLIO
            </span>
            <ul className="space-y-2 text-[#A1A1AA]">
              <li>
                <button
                  onClick={() => onNavigateSection('properties-section')}
                  className="hover:text-white transition-colors"
                >
                  Selected Properties
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('properties-section')}
                  className="hover:text-white transition-colors"
                >
                  Sky Penthouses
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('properties-section')}
                  className="hover:text-white transition-colors"
                >
                  Contemporary Villas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('properties-section')}
                  className="hover:text-white transition-colors"
                >
                  South Delhi Floors
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('properties-section')}
                  className="hover:text-white transition-colors"
                >
                  Grade A Offices
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Advisory Practices */}
          <div className="space-y-3 font-mono text-xs">
            <span className="text-[10px] tracking-widest text-[#C2A87E] uppercase block">
              ADVISORY
            </span>
            <ul className="space-y-2 text-[#A1A1AA]">
              <li>
                <button
                  onClick={() => onNavigateSection('sell-section')}
                  className="hover:text-white transition-colors"
                >
                  Seller Disposition (6-Step)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('rent-section')}
                  className="hover:text-white transition-colors"
                >
                  Corporate Relocation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('investment-section')}
                  className="hover:text-white transition-colors"
                >
                  Yield & Capital Advisory
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('journal-section')}
                  className="hover:text-white transition-colors"
                >
                  Property Journal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('about-section')}
                  className="hover:text-white transition-colors"
                >
                  Partner Leadership
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Prime Territories */}
          <div className="space-y-3 font-mono text-xs">
            <span className="text-[10px] tracking-widest text-[#C2A87E] uppercase block">
              TERRITORIES
            </span>
            <ul className="space-y-2 text-[#A1A1AA]">
              <li>Golf Course Road, Gurugram</li>
              <li>DLF Phase 1 — Phase 5</li>
              <li>Lutyens' Bungalow Zone</li>
              <li>Panchsheel & Vasant Vihar</li>
              <li>Noida Sector 128 & Expressway</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] font-mono text-[#71717A]">
          <div className="flex items-center gap-4">
            <span>© 2026 ARORA PROPERTIES</span>
            <span>·</span>
            <span>FINDING THE RIGHT SPACE</span>
            <span>·</span>
            <span className="hidden md:inline">CONFIDENTIAL & PRIVILEGED</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer border border-[#2A2826] px-3 py-1.5"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
