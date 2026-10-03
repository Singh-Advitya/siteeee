import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/properties';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((curr) => (curr === 0 ? TESTIMONIALS.length - 1 : curr - 1));
  };

  const next = () => {
    setActiveIndex((curr) => (curr === TESTIMONIALS.length - 1 ? 0 : curr + 1));
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E2DDD5]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#E2DDD5]">
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#71717A]">
            CLIENT TESTIMONY & CONFIDENTIAL ADVOCACY
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="p-2 border border-[#E2DDD5] hover:border-[#161514] text-[#161514] transition-colors cursor-pointer"
              aria-label="Previous quote"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <span className="font-mono text-xs text-[#71717A] px-2 tabular-nums">
              0{activeIndex + 1} / 0{TESTIMONIALS.length}
            </span>
            <button
              onClick={next}
              className="p-2 border border-[#E2DDD5] hover:border-[#161514] text-[#161514] transition-colors cursor-pointer"
              aria-label="Next quote"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Big Editorial Quote Layout */}
        <div className="max-w-4xl mx-auto text-center space-y-8 py-6">
          <p className="font-serif text-2xl sm:text-4xl lg:text-5xl font-light text-[#161514] leading-snug tracking-tight">
            “{current.quote}”
          </p>

          <div className="space-y-1.5 pt-4">
            <div className="font-serif text-xl sm:text-2xl font-normal text-[#161514]">
              {current.author}
            </div>
            <div className="font-mono text-xs text-[#71717A]">
              {current.designation}
            </div>
            <div className="font-mono text-[10px] tracking-widest text-[#C2A87E] uppercase pt-1">
              {current.context}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
