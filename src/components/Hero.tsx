import React, { useState } from 'react';
import { Search, Compass, MapPin, ArrowRight } from 'lucide-react';
import { TransactionType } from '../types/property';

interface HeroProps {
  onSearch: (filters: {
    transaction: TransactionType;
    category: string;
    location: string;
    budget: string;
    bedrooms: string;
  }) => void;
  onExploreSelected: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch, onExploreSelected }) => {
  const [activeTab, setActiveTab] = useState<TransactionType>('Buy');
  const [category, setCategory] = useState('All');
  const [location, setLocation] = useState('All');
  const [budget, setBudget] = useState('All');
  const [bedrooms, setBedrooms] = useState('All');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      transaction: activeTab,
      category,
      location,
      budget,
      bedrooms,
    });
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 lg:pb-24 flex flex-col justify-between overflow-hidden bg-[#FAF8F5] border-b border-[#E2DDD5]">
      {/* Background Architectural Grid Lines & Atmospheric Tint */}
      <div className="absolute inset-0 bg-architectural-grid pointer-events-none opacity-60" />

      {/* Subtle Architectural Reference Lines */}
      <div className="absolute top-0 bottom-0 left-8 sm:left-16 border-r border-[#E2DDD5]/60 pointer-events-none hidden md:block" />
      <div className="absolute top-0 bottom-0 right-8 sm:right-16 border-l border-[#E2DDD5]/60 pointer-events-none hidden md:block" />

      {/* Main Container */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 sm:px-8 lg:px-12 flex-1 flex flex-col justify-between">
        {/* Top Metric & Geographical Coordinate Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 pb-8 border-b border-[#E2DDD5]/80 text-[#71717A] text-[11px] font-mono tracking-widest uppercase">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#161514]" />
            <span className="text-[#161514] font-medium">PRIVATE PROPERTY ADVISORY</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">NEW DELHI · GURUGRAM · NOIDA</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-[#161514]" />
              <span>28°36'48" N · 77°13'42" E</span>
            </div>
            <span className="hidden md:inline">PORTFOLIO ISSUE 2026.04</span>
          </div>
        </div>

        {/* Hero Editorial Typography & Cinematic Image Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end py-10 lg:py-16">
          {/* Left: Headlines */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#71717A] block">
                FINDING THE RIGHT SPACE
              </span>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[82px] font-normal leading-[1.04] text-[#161514] tracking-[-0.02em]">
                FIND A PLACE<br />
                THAT FEELS<br />
                <span className="italic font-light text-[#242220]">LIKE YOURS.</span>
              </h1>
            </div>

            <p className="font-sans text-base sm:text-lg text-[#52525B] max-w-xl font-light leading-relaxed">
              Arora Properties is a private real estate advisory firm representing exceptional residences, penthouses, independent estates, and institutional commercial spaces across the capital.
            </p>

            <div className="flex items-center gap-6 pt-2 font-mono text-xs text-[#71717A] tracking-wider uppercase">
              <span>Residential</span>
              <span className="text-[#A1A1AA]">·</span>
              <span>Commercial</span>
              <span className="text-[#A1A1AA]">·</span>
              <span>Investment Advisory</span>
            </div>
          </div>

          {/* Right: Marquee Hero Architectural Photo Preview */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] w-full overflow-hidden border border-[#E2DDD5] bg-[#EFECE6] group">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85"
                alt="Architectural Luxury Residence on Golf Course Road"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-[15%] contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

              {/* Architectural Label Overlay */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white/90 font-mono text-[10px] tracking-widest uppercase">
                <span className="bg-black/40 backdrop-blur-sm px-2.5 py-1 border border-white/20">
                  ARORA / 024
                </span>
                <span className="bg-black/40 backdrop-blur-sm px-2.5 py-1 border border-white/20 flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#C2A87E]" />
                  GURUGRAM
                </span>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="font-serif text-lg sm:text-xl font-medium tracking-tight">
                  The Camellias Sky Penthouse
                </div>
                <div className="flex items-center justify-between mt-1 font-mono text-xs text-white/80">
                  <span>4 BED · 7,400 SQ FT</span>
                  <span className="text-[#FAF8F5] font-semibold">₹ 28.50 CR</span>
                </div>
              </div>
            </div>

            {/* Architectural Grid Tag */}
            <div className="flex items-center justify-between mt-2.5 font-mono text-[10px] tracking-wider text-[#A1A1AA] uppercase">
              <span>DLF Phase 5 · Sector 42</span>
              <button
                onClick={onExploreSelected}
                className="text-[#161514] hover:underline flex items-center gap-1 font-medium"
              >
                <span>EXPLORE CURATED CATALOG</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Hero Architectural Search Engine Module */}
        <div className="w-full mt-4 pt-6 border-t border-[#E2DDD5]">
          <form
            onSubmit={handleSearchSubmit}
            className="bg-[#FAF8F5] border border-[#161514] p-5 sm:p-6 lg:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
          >
            {/* Search Tabs: Buy / Rent / Commercial */}
            <div className="flex items-center gap-1 sm:gap-2 mb-6 border-b border-[#E2DDD5] pb-3">
              {(['Buy', 'Rent', 'Commercial'] as TransactionType[]).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 text-xs font-mono tracking-[0.16em] uppercase transition-colors relative cursor-pointer ${
                    activeTab === tab
                      ? 'bg-[#161514] text-[#FAF8F5] font-semibold'
                      : 'bg-transparent text-[#71717A] hover:text-[#161514]'
                  }`}
                >
                  {tab === 'Commercial' ? 'COMMERCIAL & OFFICES' : tab.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Filter Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Field 1: Property Type */}
              <div className="space-y-1.5">
                <label className="block font-mono text-[10px] tracking-[0.18em] uppercase text-[#71717A]">
                  LOOKING FOR
                </label>
                <div className="relative">
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#D4CEBF] px-3.5 py-3 text-xs font-mono text-[#161514] focus:outline-none focus:border-[#161514] cursor-pointer appearance-none rounded-none"
                  >
                    <option value="All">All Categories</option>
                    <option value="Penthouse">Luxury Penthouses</option>
                    <option value="Contemporary Villa">Contemporary Villas</option>
                    <option value="Luxury Residence">Condominium Residences</option>
                    <option value="Independent Floor">South Delhi Floors</option>
                    <option value="Grade A Office">Grade A Commercial Offices</option>
                    <option value="Heritage Duplex">Heritage Duplexes</option>
                  </select>
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-[#71717A]">
                    ▼
                  </span>
                </div>
              </div>

              {/* Field 2: Location */}
              <div className="space-y-1.5">
                <label className="block font-mono text-[10px] tracking-[0.18em] uppercase text-[#71717A]">
                  LOCATION
                </label>
                <div className="relative">
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#D4CEBF] px-3.5 py-3 text-xs font-mono text-[#161514] focus:outline-none focus:border-[#161514] cursor-pointer appearance-none rounded-none"
                  >
                    <option value="All">All Prime Micro-Markets</option>
                    <option value="Golf Course Road">Golf Course Road, Gurugram</option>
                    <option value="Lutyens Bungalow Zone">Lutyens' & Central Delhi</option>
                    <option value="South Delhi">South Delhi Enclaves</option>
                    <option value="Noida Expressway">Noida Expressway & Golf Greens</option>
                  </select>
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-[#71717A]">
                    ▼
                  </span>
                </div>
              </div>

              {/* Field 3: Budget Range */}
              <div className="space-y-1.5">
                <label className="block font-mono text-[10px] tracking-[0.18em] uppercase text-[#71717A]">
                  BUDGET BRACKET
                </label>
                <div className="relative">
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#D4CEBF] px-3.5 py-3 text-xs font-mono text-[#161514] focus:outline-none focus:border-[#161514] cursor-pointer appearance-none rounded-none"
                  >
                    <option value="All">All Value Brackets</option>
                    <option value="under-15">Up to ₹ 15 CR</option>
                    <option value="15-30">₹ 15 CR — ₹ 30 CR</option>
                    <option value="above-30">₹ 30 CR & Above (Trophy)</option>
                    <option value="rentals">Lease / Rental Assets</option>
                  </select>
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-[#71717A]">
                    ▼
                  </span>
                </div>
              </div>

              {/* Field 4: Bedrooms / Scale */}
              <div className="space-y-1.5">
                <label className="block font-mono text-[10px] tracking-[0.18em] uppercase text-[#71717A]">
                  BEDROOMS / SCALE
                </label>
                <div className="relative">
                  <select
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#D4CEBF] px-3.5 py-3 text-xs font-mono text-[#161514] focus:outline-none focus:border-[#161514] cursor-pointer appearance-none rounded-none"
                  >
                    <option value="All">Any Scale</option>
                    <option value="3">3 Bedrooms</option>
                    <option value="4">4 Bedrooms</option>
                    <option value="5">5+ Bedrooms / Private Estate</option>
                    <option value="commercial">Commercial Floorplate</option>
                  </select>
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-[#71717A]">
                    ▼
                  </span>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E2DDD5]">
              <div className="font-mono text-[11px] text-[#71717A] tracking-wider">
                CURATED INVENTORY · DIRECT VERIFIED CLEAR TITLES ONLY
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#161514] hover:bg-[#2A2826] text-[#FAF8F5] font-mono text-xs tracking-[0.18em] uppercase transition-colors cursor-pointer border border-[#161514]"
              >
                <Search className="w-3.5 h-3.5" />
                <span>SEARCH PROPERTIES →</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
