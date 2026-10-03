import React, { useState } from 'react';
import { ArrowRight, BookOpen, Clock, Calendar, X, User } from 'lucide-react';
import { JOURNAL_ARTICLES } from '../data/properties';
import { JournalArticle } from '../types/property';

export const JournalSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  return (
    <section id="journal-section" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E2DDD5]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E2DDD5]">
          <div className="space-y-2">
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#71717A] block">
              RESEARCH & MONOGRAPHS
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#161514] tracking-tight">
              PROPERTY JOURNAL
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#52525B] max-w-md font-light">
            Empirical commentary on capital values, architectural trends, regulatory evolution, and micro-market absorption in Delhi NCR.
          </p>
        </div>

        {/* 3 Journal Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNAL_ARTICLES.map((article, idx) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group bg-white border border-[#E2DDD5] hover:border-[#161514] transition-all duration-300 p-6 sm:p-8 cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-[#71717A] pb-3 border-b border-[#E2DDD5]/70">
                  <span className="text-[#C2A87E] uppercase">{article.category}</span>
                  <span>{article.readTime}</span>
                </div>

                <span className="font-mono text-[10px] text-[#A1A1AA] uppercase block">
                  ISSUE 2026.0{idx + 1} · {article.date.toUpperCase()}
                </span>

                <h3 className="font-serif text-2xl font-normal text-[#161514] group-hover:text-[#242220] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#52525B] leading-relaxed font-light line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E2DDD5] flex items-center justify-between">
                <div className="font-mono text-xs text-[#71717A]">
                  BY {article.author.name.toUpperCase()}
                </div>
                <div className="inline-flex items-center gap-1.5 font-mono text-xs text-[#161514] group-hover:translate-x-1 transition-transform">
                  <span className="font-medium">READ ESSAY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Reading Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#141312]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-[#FAF8F5] border border-[#E2DDD5] p-6 sm:p-10 lg:p-12 shadow-2xl space-y-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#E2DDD5]">
              <div className="font-mono text-xs text-[#71717A] uppercase">
                {selectedArticle.category} · {selectedArticle.date} · {selectedArticle.readTime}
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 border border-[#161514] text-[#161514] hover:bg-[#161514] hover:text-[#FAF8F5] transition-colors cursor-pointer"
                aria-label="Close article"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#161514] font-normal leading-tight">
                {selectedArticle.title}
              </h2>
              <div className="font-mono text-xs text-[#52525B] flex items-center gap-2">
                <span>By {selectedArticle.author.name}</span>
                <span>·</span>
                <span>{selectedArticle.author.role}</span>
              </div>
            </div>

            <div className="prose prose-stone max-w-none space-y-4 font-sans text-sm sm:text-base text-[#383735] leading-relaxed font-light">
              <p className="italic font-serif text-lg text-[#161514] border-l-2 border-[#161514] pl-4 py-1">
                "{selectedArticle.excerpt}"
              </p>
              {selectedArticle.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-[#E2DDD5] flex items-center justify-between">
              <span className="font-mono text-xs text-[#71717A]">
                ARORA ADVISORY RESEARCH DESK · NEW DELHI NCR
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 bg-[#161514] text-white font-mono text-xs uppercase"
              >
                CLOSE ESSAY
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
