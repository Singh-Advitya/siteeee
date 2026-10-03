import React, { useState } from 'react';
import { TrendingUp, BarChart3, Calculator, ShieldCheck, ArrowRight, PieChart } from 'lucide-react';

export const InvestmentSection: React.FC = () => {
  const [assetValueCr, setAssetValueCr] = useState<number>(25); // In Crores
  const [assetType, setAssetType] = useState<'residential' | 'commercial'>('residential');
  const [yieldPercent, setYieldPercent] = useState<number>(3.8); // 3.8% residential vs 8.2% commercial

  // Handlers
  const handleTypeChange = (type: 'residential' | 'commercial') => {
    setAssetType(type);
    setYieldPercent(type === 'residential' ? 3.8 : 8.2);
  };

  // Calculations
  const assetValueRupees = assetValueCr * 10000000;
  const annualRentalIncomeRupees = assetValueRupees * (yieldPercent / 100);
  const monthlyRentalIncomeLakhs = (annualRentalIncomeRupees / 12) / 100000;
  const projected10YrValuationCr = assetValueCr * (assetType === 'residential' ? 2.15 : 1.95);

  return (
    <section id="investment-section" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E2DDD5]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#71717A] block">
            PORTFOLIO STRUCTURING & CAPITAL ADVISORY
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#161514] tracking-tight">
            PROPERTY IS MORE THAN A PURCHASE.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#52525B] font-light leading-relaxed">
            Explore opportunities. Understand the market. Compare properties. Arora Properties advises family offices and institutional investors on capital preservation, inflation hedging, and risk-adjusted yield across Delhi NCR.
          </p>
        </div>

        {/* 3 Macro Market Comparative Indicator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#E2DDD5] p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E2DDD5]">
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#71717A]">
                MICRO-MARKET ALPHA
              </span>
              <TrendingUp className="w-4 h-4 text-[#161514]" />
            </div>
            <h3 className="font-serif text-2xl font-normal text-[#161514]">
              Golf Course Road Corridor
            </h3>
            <p className="font-sans text-xs text-[#52525B] leading-relaxed font-light">
              Permanently constrained greenfield land parcels. Capital values have demonstrated compounding resilience across economic cycles due to Fortune 500 HQ density.
            </p>
            <div className="pt-4 border-t border-[#E2DDD5] grid grid-cols-2 gap-2 font-mono text-xs">
              <div>
                <span className="text-[9px] text-[#A1A1AA] block uppercase">RENTAL RANGE</span>
                <span className="font-semibold text-[#161514]">3.2% — 4.2%</span>
              </div>
              <div>
                <span className="text-[9px] text-[#A1A1AA] block uppercase">LIQUIDITY SCORE</span>
                <span className="font-semibold text-emerald-800">VERY HIGH</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#E2DDD5] p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E2DDD5]">
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#71717A]">
                SOVEREIGN PRESERVATION
              </span>
              <ShieldCheck className="w-4 h-4 text-[#161514]" />
            </div>
            <h3 className="font-serif text-2xl font-normal text-[#161514]">
              South Delhi Freehold Plots
            </h3>
            <p className="font-sans text-xs text-[#52525B] leading-relaxed font-light">
              Clear-title land ownership in Panchsheel, Vasant Vihar, and Shanti Niketan. High barrier to entry and enduring prestige across multi-generational estates.
            </p>
            <div className="pt-4 border-t border-[#E2DDD5] grid grid-cols-2 gap-2 font-mono text-xs">
              <div>
                <span className="text-[9px] text-[#A1A1AA] block uppercase">LAND VALUE BIAS</span>
                <span className="font-semibold text-[#161514]">~78% OF TOTAL</span>
              </div>
              <div>
                <span className="text-[9px] text-[#A1A1AA] block uppercase">REPLACEABILITY</span>
                <span className="font-semibold text-amber-800">NEAR ZERO</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#E2DDD5] p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E2DDD5]">
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#71717A]">
                INSTITUTIONAL YIELD
              </span>
              <BarChart3 className="w-4 h-4 text-[#161514]" />
            </div>
            <h3 className="font-serif text-2xl font-normal text-[#161514]">
              Pre-Leased Grade-A Offices
            </h3>
            <p className="font-sans text-xs text-[#52525B] leading-relaxed font-light">
              Column-free LEED Platinum commercial floorplates with multinational covenants, 9-year lock-in leases, and 15% periodic rental step-ups every 36 months.
            </p>
            <div className="pt-4 border-t border-[#E2DDD5] grid grid-cols-2 gap-2 font-mono text-xs">
              <div>
                <span className="text-[9px] text-[#A1A1AA] block uppercase">GROSS YIELD</span>
                <span className="font-semibold text-[#161514]">7.8% — 8.6%</span>
              </div>
              <div>
                <span className="text-[9px] text-[#A1A1AA] block uppercase">ESCALATION</span>
                <span className="font-semibold text-[#161514]">15% / 3 YRS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Advisory Yield & Capital Calculator */}
        <div className="bg-white border border-[#161514] p-8 sm:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#E2DDD5]">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-[#71717A] uppercase">
                <Calculator className="w-4 h-4 text-[#161514]" />
                <span>INTERACTIVE FINANCIAL ARCHITECTURE SIMULATOR</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#161514]">
                Yield & Cashflow Modeling
              </h3>
            </div>

            {/* Asset Type Switcher */}
            <div className="flex items-center p-1 bg-[#FAF8F5] border border-[#E2DDD5]">
              <button
                type="button"
                onClick={() => handleTypeChange('residential')}
                className={`px-4 py-2 text-xs font-mono tracking-wider transition-colors cursor-pointer ${
                  assetType === 'residential'
                    ? 'bg-[#161514] text-[#FAF8F5] font-semibold'
                    : 'text-[#71717A] hover:text-[#161514]'
                }`}
              >
                SUPER-PRIME RESIDENTIAL
              </button>
              <button
                type="button"
                onClick={() => handleTypeChange('commercial')}
                className={`px-4 py-2 text-xs font-mono tracking-wider transition-colors cursor-pointer ${
                  assetType === 'commercial'
                    ? 'bg-[#161514] text-[#FAF8F5] font-semibold'
                    : 'text-[#71717A] hover:text-[#161514]'
                }`}
              >
                GRADE-A COMMERCIAL
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-8 items-center">
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-6">
              {/* Asset Valuation Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-[#71717A] uppercase">CAPITAL ALLOCATION</span>
                  <span className="font-serif text-xl font-medium text-[#161514]">
                    ₹ {assetValueCr} CRORES
                  </span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={100}
                  step={1}
                  value={assetValueCr}
                  onChange={(e) => setAssetValueCr(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#E2DDD5] accent-[#161514] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#A1A1AA]">
                  <span>₹ 5 CR (BOUTIQUE)</span>
                  <span>₹ 50 CR</span>
                  <span>₹ 100 CR (TROPHY ESTATE)</span>
                </div>
              </div>

              {/* Yield Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-[#71717A] uppercase">EXPECTED GROSS RENTAL YIELD</span>
                  <span className="font-serif text-xl font-medium text-[#161514]">
                    {yieldPercent.toFixed(1)}% PER ANNUM
                  </span>
                </div>
                <input
                  type="range"
                  min={assetType === 'residential' ? 2.5 : 6.0}
                  max={assetType === 'residential' ? 5.5 : 10.0}
                  step={0.1}
                  value={yieldPercent}
                  onChange={(e) => setYieldPercent(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#E2DDD5] accent-[#161514] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#A1A1AA]">
                  <span>CONSERVATIVE</span>
                  <span>MICRO-MARKET MEAN</span>
                  <span>OPTIMISTIC</span>
                </div>
              </div>

              <p className="font-mono text-[10px] text-[#A1A1AA] leading-relaxed">
                *Projections are educational models based on verified historical market data across Gurugram DLF Phase 5 and South Delhi micro-markets. Actual returns depend on lease covenants, property tax, and maintenance provisions.
              </p>
            </div>

            {/* Results Display Board */}
            <div className="lg:col-span-6 bg-[#FAF8F5] border border-[#E2DDD5] p-6 sm:p-8 space-y-6">
              <div className="font-mono text-xs tracking-widest uppercase text-[#71717A] pb-3 border-b border-[#E2DDD5]">
                PROJECTED ANNUAL RETURN METRICS
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#71717A] block">
                    MONTHLY CASH FLOW
                  </span>
                  <div className="font-serif text-2xl sm:text-3xl font-medium text-[#161514] mt-1 tabular-nums">
                    ₹ {monthlyRentalIncomeLakhs.toFixed(2)} LACS
                  </div>
                  <span className="font-mono text-[10px] text-[#71717A]">Net before personal tax</span>
                </div>

                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#71717A] block">
                    ANNUAL GROSS LEASE
                  </span>
                  <div className="font-serif text-2xl sm:text-3xl font-medium text-[#161514] mt-1 tabular-nums">
                    ₹ {(annualRentalIncomeRupees / 10000000).toFixed(2)} CR
                  </div>
                  <span className="font-mono text-[10px] text-[#71717A]">Annual recurring yield</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2DDD5] flex items-center justify-between">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#71717A] block">
                    CONSERVATIVE 10-YEAR HORIZON VALUATION
                  </span>
                  <div className="font-serif text-xl sm:text-2xl font-semibold text-emerald-900 mt-0.5 tabular-nums">
                    ₹ {projected10YrValuationCr.toFixed(1)} CRORES
                  </div>
                </div>

                <a
                  href="#contact-section"
                  className="px-4 py-2.5 bg-[#161514] hover:bg-[#2A2826] text-[#FAF8F5] text-xs font-mono tracking-wider uppercase transition-colors"
                >
                  DISCUSS PORTFOLIO →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
