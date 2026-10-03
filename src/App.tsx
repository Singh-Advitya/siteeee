import React, { useState, useEffect } from 'react';
import { Property, TransactionType } from './types/property';
import { PROPERTIES } from './data/properties';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProperties } from './components/FeaturedProperties';
import { ExploreLocations } from './components/ExploreLocations';
import { PropertyCategories } from './components/PropertyCategories';
import { WhyArora } from './components/WhyArora';
import { SellPropertySection } from './components/SellPropertySection';
import { RentSection } from './components/RentSection';
import { InvestmentSection } from './components/InvestmentSection';
import { JournalSection } from './components/JournalSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { SavedPropertiesDrawer } from './components/SavedPropertiesDrawer';
import { ListPropertyModal } from './components/ListPropertyModal';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [savedPropertyIds, setSavedPropertyIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('arora_saved_properties');
      return stored ? JSON.parse(stored) : ['camellias-sky-penthouse'];
    } catch {
      return ['camellias-sky-penthouse'];
    }
  });
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);
  const [isListModalOpen, setIsListModalOpen] = useState(false);
  const [activeTransactionFilter, setActiveTransactionFilter] = useState<TransactionType | 'All'>('All');
  const [initialLoading, setInitialLoading] = useState(true);

  // Sync saved properties to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('arora_saved_properties', JSON.stringify(savedPropertyIds));
    } catch {
      // ignore
    }
  }, [savedPropertyIds]);

  // Initial loading intro simulation (brief architectural reveal)
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  const toggleSaveProperty = (propertyId: string) => {
    setSavedPropertyIds((prev) =>
      prev.includes(propertyId)
        ? prev.filter((id) => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  const handleHeroSearch = (filters: {
    transaction: TransactionType;
    category: string;
    location: string;
    budget: string;
    bedrooms: string;
  }) => {
    setActiveTransactionFilter(filters.transaction);
    const propertiesSection = document.getElementById('properties-section');
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectLocation = (locationName: string) => {
    const propertiesSection = document.getElementById('properties-section');
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (category: string) => {
    const propertiesSection = document.getElementById('properties-section');
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const savedPropertiesList = PROPERTIES.filter((p) =>
    savedPropertyIds.includes(p.id)
  );

  const rentalPropertiesList = PROPERTIES.filter((p) => p.transactionType === 'Rent');

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#161514] selection:bg-[#161514] selection:text-[#FAF8F5]">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Initial Architectural Loading Reveal */}
      {initialLoading && (
        <div className="fixed inset-0 z-50 bg-[#141312] text-[#FAF8F5] flex flex-col items-center justify-center p-6 animate-out fade-out duration-700 pointer-events-none">
          <div className="space-y-3 text-center">
            <span className="font-serif text-3xl sm:text-4xl tracking-[0.15em] uppercase text-white font-semibold">
              ARORA PROPERTIES
            </span>
            <div className="w-32 h-[1px] bg-[#C2A87E] mx-auto animate-pulse" />
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#A1A1AA] block">
              FINDING THE RIGHT SPACE
            </span>
          </div>
        </div>
      )}

      {/* Top Navigation Bar */}
      <Navbar
        onOpenSaved={() => setIsSavedDrawerOpen(true)}
        savedCount={savedPropertyIds.length}
        onOpenListProperty={() => setIsListModalOpen(true)}
        onNavigateSection={scrollToSection}
      />

      <main>
        {/* 01: HERO SECTION */}
        <Hero
          onSearch={handleHeroSearch}
          onExploreSelected={() => scrollToSection('properties-section')}
        />

        {/* 02: FEATURED SELECTED PROPERTIES */}
        <FeaturedProperties
          properties={PROPERTIES}
          onSelectProperty={(prop) => setSelectedProperty(prop)}
          savedPropertyIds={savedPropertyIds}
          onToggleSave={toggleSaveProperty}
          initialTransactionFilter={activeTransactionFilter}
        />

        {/* 03: EXPLORE BY LOCATION */}
        <ExploreLocations onSelectLocation={handleSelectLocation} />

        {/* 04: PROPERTY CATEGORIES */}
        <PropertyCategories onSelectCategory={handleSelectCategory} />

        {/* 05: WHY ARORA PROPERTIES */}
        <WhyArora />

        {/* 06: SELL YOUR PROPERTY */}
        <SellPropertySection />

        {/* 07: RENT WITH ARORA */}
        <RentSection
          onSelectProperty={(prop) => setSelectedProperty(prop)}
          rentalProperties={rentalPropertiesList}
        />

        {/* 08: INVESTMENT SECTION & FINANCIAL SIMULATOR */}
        <InvestmentSection />

        {/* 09: PROPERTY JOURNAL */}
        <JournalSection />

        {/* 10: TESTIMONIALS */}
        <TestimonialsSection />

        {/* 11: CONTACT SECTION */}
        <ContactSection />
      </main>

      {/* 12: CATALOGUE FOOTER */}
      <Footer onNavigateSection={scrollToSection} />

      {/* Full Property Detail Modal Experience */}
      {selectedProperty && (
        <PropertyDetailModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
          isSaved={savedPropertyIds.includes(selectedProperty.id)}
          onToggleSave={toggleSaveProperty}
        />
      )}

      {/* Saved Properties Shortlist Drawer */}
      <SavedPropertiesDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedProperties={savedPropertiesList}
        onRemoveSaved={toggleSaveProperty}
        onSelectProperty={(prop) => {
          setIsSavedDrawerOpen(false);
          setSelectedProperty(prop);
        }}
      />

      {/* List Your Property Mandate Modal */}
      <ListPropertyModal
        isOpen={isListModalOpen}
        onClose={() => setIsListModalOpen(false)}
      />
    </div>
  );
}
