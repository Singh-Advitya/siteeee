import React, { useState } from 'react';
import { LayoutGrid, List, Map, ArrowRight, Bookmark, MapPin, SlidersHorizontal } from 'lucide-react';
import { Property, TransactionType } from '../types/property';
import { PropertyCard } from './PropertyCard';
import { InteractiveMap } from './InteractiveMap';

interface FeaturedPropertiesProps {
  properties: Property[];
  onSelectProperty: (property: Property) => void;
  savedPropertyIds: string[];
  onToggleSave: (propertyId: string) => void;
  initialTransactionFilter?: TransactionType | 'All';
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  properties,
  onSelectProperty,
  savedPropertyIds,
  onToggleSave,
  initialTransactionFilter = 'All',
}) => {
  const [transactionFilter, setTransactionFilter] = useState<TransactionType | 'All'>(
    initialTransactionFilter
  );
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'map'>('grid');

  // Filter properties
  const filtered = properties.filter((p) => {
    if (transactionFilter !== 'All' && p.transactionType !== transactionFilter) return false;
    if (categoryFilter !== 'All' && p.category !== categoryFilter) return false;
    return true;
  });

  // Featured marquee item
  const marqueeProperty = properties.find((p) => p.featured) || properties[0];
  const regularProperties = filtered.filter((p) => p.id !== marqueeProperty?.id);

  return (
    <section id="properties-section" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E2DDD5]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E2DDD5]">
          <div className="space-y-2">
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#71717A] block">
              CURATED CATALOG · ISSUE 2026
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#161514] tracking-tight">
              SELECTED PROPERTIES
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#52525B] max-w-xl font-light">
              Every property represented by Arora Properties is vetted for clear legal title, structural excellence, and long-term capital preservation.
            </p>
          </div>

          {/* View Mode & Filter Controls */}
          <div className="flex flex-wrap items-center gap-3">
            {/* View Mode Switcher */}
            <div className="flex items-center p-1 bg-[#EFECE6] border border-[#E2DDD5]">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer ${
                  viewMode === 'grid' ? 'bg-[#161514] text-[#FAF8F5]' : 'text-[#71717A] hover:text-[#161514]'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">GRID</span>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer ${
                  viewMode === 'list' ? 'bg-[#161514] text-[#FAF8F5]' : 'text-[#71717A] hover:text-[#161514]'
                }`}
                title="List View"
              >
                <List className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">LIST</span>
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`p-2 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer ${
                  viewMode === 'map' ? 'bg-[#161514] text-[#FAF8F5]' : 'text-[#71717A] hover:text-[#161514]'
                }`}
                title="Cartography Map View"
              >
                <Map className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">MAP VIEW</span>
              </button>
            </div>
          </div>
        </div>

        {/* Secondary Filter Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          {/* Transaction Tabs */}
          <div className="flex items-center gap-2">
            {(['All', 'Buy', 'Rent', 'Commercial'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setTransactionFilter(tab)}
                className={`px-4 py-1.5 text-xs font-mono tracking-wider transition-colors cursor-pointer border ${
                  transactionFilter === tab
                    ? 'bg-[#161514] text-[#FAF8F5] border-[#161514]'
                    : 'bg-transparent text-[#71717A] hover:text-[#161514] border-transparent hover:border-[#E2DDD5]'
                }`}
              >
                {tab === 'All' ? 'ALL PORTFOLIO' : tab.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="font-mono text-xs text-[#71717A]">
            SHOWING {filtered.length} CURATED HOLDINGS
          </div>
        </div>

        {/* MAP VIEW MODE */}
        {viewMode === 'map' ? (
          <InteractiveMap
            properties={filtered}
            onSelectProperty={onSelectProperty}
          />
        ) : (
          <div className="space-y-12">
            {/* LARGE FEATURE EDITORIAL PROPERTY (Full Width Hero Property) */}
            {marqueeProperty && transactionFilter === 'All' && (
              <div
                onClick={() => onSelectProperty(marqueeProperty)}
                className="group relative bg-[#181716] text-[#FAF8F5] border border-[#2A2826] overflow-hidden cursor-pointer shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
                  {/* Image Column */}
                  <div className="lg:col-span-8 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-black">
                    <img
                      src={marqueeProperty.images.hero}
                      alt={marqueeProperty.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                    {/* Top stamp */}
                    <div className="absolute top-5 left-5 font-mono text-[10px] tracking-[0.2em] bg-black/60 backdrop-blur-sm border border-white/20 px-3 py-1">
                      MARQUEE EXHIBIT · {marqueeProperty.aroraCode}
                    </div>

                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs font-mono text-white/80">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#C2A87E]" />
                        {marqueeProperty.location}
                      </span>
                      <span>{marqueeProperty.coordinates.formatted}</span>
                    </div>
                  </div>

                  {/* Editorial Text Column */}
                  <div className="lg:col-span-4 p-8 sm:p-10 flex flex-col justify-between bg-[#161514] border-t lg:border-t-0 lg:border-l border-[#2A2826]">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono tracking-widest text-[#C2A87E] uppercase">
                          {marqueeProperty.category}
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleSave(marqueeProperty.id);
                          }}
                          className={`p-2 border transition-colors ${
                            savedPropertyIds.includes(marqueeProperty.id)
                              ? 'bg-[#C2A87E] text-black border-[#C2A87E]'
                              : 'border-[#3F3D39] text-white hover:border-white'
                          }`}
                        >
                          <Bookmark className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight group-hover:text-[#D4CEBF] transition-colors">
                        {marqueeProperty.title}
                      </h3>

                      <p className="font-sans text-xs sm:text-sm text-[#A1A1AA] line-clamp-3 leading-relaxed font-light">
                        {marqueeProperty.description}
                      </p>

                      <div className="pt-4 border-t border-[#2A2826] space-y-2 font-mono text-xs text-[#D4CEBF]">
                        <div className="flex justify-between">
                          <span className="text-[#71717A]">CARPET AREA:</span>
                          <span>{marqueeProperty.areaSqFt.toLocaleString()} SQ FT</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#71717A]">BEDROOMS:</span>
                          <span>{marqueeProperty.bedrooms} BED CHAMBERS</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#71717A]">STATUS:</span>
                          <span className="text-emerald-400">{marqueeProperty.status}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-[#2A2826] flex items-center justify-between">
                      <div>
                        <span className="text-[9px] font-mono tracking-widest uppercase text-[#71717A] block">
                          VALUATION
                        </span>
                        <span className="font-serif text-3xl text-white font-medium">
                          {marqueeProperty.price}
                        </span>
                      </div>

                      <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FAF8F5] group-hover:translate-x-1 transition-transform">
                        <span>OPEN DOSSIER</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Asymmetric Companion Properties Grid / List */}
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                  : 'flex flex-col gap-6'
              }
            >
              {(transactionFilter === 'All' ? regularProperties : filtered).map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onSelect={onSelectProperty}
                  isSaved={savedPropertyIds.includes(property.id)}
                  onToggleSave={onToggleSave}
                  viewMode={viewMode}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
