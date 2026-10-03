import React from 'react';
import { Bookmark, ArrowRight, MapPin, Maximize2 } from 'lucide-react';
import { Property } from '../types/property';

interface PropertyCardProps {
  property: Property;
  onSelect: (property: Property) => void;
  isSaved: boolean;
  onToggleSave: (propertyId: string) => void;
  viewMode?: 'grid' | 'list';
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onSelect,
  isSaved,
  onToggleSave,
  viewMode = 'grid',
}) => {
  const isList = viewMode === 'list';

  return (
    <div
      onClick={() => onSelect(property)}
      className={`group relative bg-[#FAF8F5] border border-[#E2DDD5] hover:border-[#161514] transition-all duration-300 cursor-pointer flex ${
        isList ? 'flex-col md:flex-row' : 'flex-col'
      }`}
    >
      {/* Visual Image Stage */}
      <div
        className={`relative overflow-hidden bg-[#EFECE6] ${
          isList ? 'w-full md:w-[380px] lg:w-[440px] aspect-[16/10] shrink-0' : 'aspect-[16/11] w-full'
        }`}
      >
        <img
          src={property.images.hero}
          alt={property.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* Top Indicators: For Sale / Rent & Arora Ref */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="bg-[#161514] text-[#FAF8F5] px-2.5 py-0.5 text-[9px] font-mono tracking-[0.2em] uppercase">
              {property.transactionType === 'Rent' ? 'FOR LEASE' : 'FOR SALE'}
            </span>
            <span className="bg-[#FAF8F5]/90 backdrop-blur-sm text-[#161514] px-2 py-0.5 text-[9px] font-mono tracking-widest border border-[#E2DDD5]">
              {property.aroraCode}
            </span>
          </div>

          {/* Save Button (Interactive) */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave(property.id);
            }}
            aria-label={isSaved ? 'Remove from saved' : 'Save property'}
            className={`pointer-events-auto p-2 backdrop-blur-sm transition-colors cursor-pointer border ${
              isSaved
                ? 'bg-[#161514] text-[#FAF8F5] border-[#161514]'
                : 'bg-[#FAF8F5]/90 text-[#161514] hover:bg-[#161514] hover:text-[#FAF8F5] border-white/40'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Bottom Hover Reveal Bar */}
        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-[#FAF8F5] font-mono text-[10px] tracking-widest opacity-90 group-hover:opacity-100 transition-opacity">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#C2A87E]" />
            {property.subCity.toUpperCase()}
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            VIEW DOSSIER <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>

      {/* Property Information Container */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between border-t border-[#E2DDD5] md:border-t-0">
        <div>
          {/* Top Label & Location */}
          <div className="flex items-center justify-between text-[#71717A] text-[11px] font-mono tracking-wider uppercase mb-1.5">
            <span>{property.category}</span>
            <span>{property.city}</span>
          </div>

          {/* Main Title */}
          <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#161514] group-hover:text-[#242220] transition-colors leading-snug">
            {property.title}
          </h3>

          <p className="text-xs text-[#71717A] mt-1 line-clamp-1">
            {property.location}
          </p>

          {/* Unboxed Metadata (Zero-Pill Rule) */}
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-3 border-t border-[#E2DDD5]/70 text-[11px] font-mono text-[#52525B] tracking-wide">
            {property.bedrooms > 0 && (
              <>
                <span>{property.bedrooms} BEDROOMS</span>
                <span className="text-[#D4CEBF]">/</span>
              </>
            )}
            {property.bathrooms > 0 && (
              <>
                <span>{property.bathrooms} BATH</span>
                <span className="text-[#D4CEBF]">/</span>
              </>
            )}
            <span>{property.areaSqFt.toLocaleString()} SQ FT</span>
            <span className="text-[#D4CEBF]">/</span>
            <span>{property.status}</span>
          </div>
        </div>

        {/* Bottom Price & View Action */}
        <div className="mt-5 pt-4 border-t border-[#E2DDD5] flex items-center justify-between">
          <div>
            <span className="block font-mono text-[9px] tracking-widest uppercase text-[#71717A]">
              OFFERING VALUATION
            </span>
            <span className="font-serif text-2xl font-medium tracking-tight text-[#161514]">
              {property.price}
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 font-mono text-xs text-[#161514] group-hover:translate-x-1 transition-transform">
            <span className="font-medium tracking-wider">VIEW PROPERTY</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
};
