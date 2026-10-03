import React, { useState, useEffect } from 'react';
import { Menu, X, Bookmark, Phone, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenSaved: () => void;
  savedCount: number;
  onOpenListProperty: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSaved,
  savedCount,
  onOpenListProperty,
  onNavigateSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'PROPERTIES', target: 'properties-section' },
    { label: 'BUY', target: 'properties-section', filter: 'Buy' },
    { label: 'RENT', target: 'rent-section' },
    { label: 'COMMERCIAL', target: 'properties-section', filter: 'Commercial' },
    { label: 'LOCATIONS', target: 'locations-section' },
    { label: 'INVESTMENT', target: 'investment-section' },
    { label: 'JOURNAL', target: 'journal-section' },
    { label: 'ABOUT', target: 'about-section' },
    { label: 'CONTACT', target: 'contact-section' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E2DDD5] py-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex flex-col tracking-tight"
          >
            <span className="font-serif text-xl sm:text-2xl font-semibold tracking-[0.08em] text-[#161514] uppercase">
              ARORA PROPERTIES
            </span>
            <span className="font-mono text-[9px] tracking-[0.25em] text-[#71717A] uppercase -mt-0.5">
              ADVISORY & BROKERAGE
            </span>
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.slice(0, 7).map((item) => (
              <button
                key={item.label}
                onClick={() => onNavigateSection(item.target)}
                className="text-[12px] font-mono tracking-[0.14em] text-[#52525B] hover:text-[#161514] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#161514] hover:after:w-full after:transition-all after:duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Saved Shortlist button */}
            <button
              onClick={onOpenSaved}
              aria-label="View saved properties"
              className="relative p-2.5 text-[#52525B] hover:text-[#161514] transition-colors rounded-none border border-transparent hover:border-[#E2DDD5]"
              title="Saved Properties"
            >
              <Bookmark className="w-4 h-4 stroke-[1.5]" />
              {savedCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#161514] text-[#FAF8F5] text-[9px] font-mono flex items-center justify-center tabular-nums">
                  {savedCount}
                </span>
              )}
            </button>

            {/* List Your Property CTA */}
            <button
              onClick={onOpenListProperty}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-[11px] font-mono tracking-[0.16em] uppercase text-[#FAF8F5] bg-[#161514] hover:bg-[#2A2826] transition-colors cursor-pointer border border-[#161514]"
            >
              <span>LIST YOUR PROPERTY</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.75]" />
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#161514] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 stroke-[1.5]" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#FAF8F5] flex flex-col px-6 py-8 lg:hidden animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-6 border-b border-[#E2DDD5]">
            <div className="flex flex-col">
              <span className="font-serif text-xl font-semibold tracking-[0.08em] text-[#161514]">
                ARORA PROPERTIES
              </span>
              <span className="font-mono text-[9px] tracking-[0.25em] text-[#71717A] uppercase">
                ESTABLISHED 2008 · NEW DELHI NCR
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#161514]"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 py-8 flex-1 overflow-y-auto">
            {navLinks.map((item, idx) => (
              <button
                key={item.label}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateSection(item.target);
                }}
                className="text-left font-serif text-2xl text-[#161514] hover:text-[#C2A87E] transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-[#A1A1AA]">0{idx + 1}</span>
              </button>
            ))}
          </nav>

          <div className="pt-6 border-t border-[#E2DDD5] space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenListProperty();
              }}
              className="w-full py-3.5 text-center text-xs font-mono tracking-[0.16em] uppercase text-[#FAF8F5] bg-[#161514]"
            >
              LIST YOUR PROPERTY →
            </button>
            <a
              href="tel:+919811042800"
              className="w-full py-3 text-center text-xs font-mono tracking-wider text-[#52525B] border border-[#E2DDD5] flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>DIRECT ADVISORY: +91 98110 42800</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
