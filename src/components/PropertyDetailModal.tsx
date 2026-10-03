import React, { useState, useEffect } from 'react';
import { 
  X, Bookmark, Share2, MapPin, Check, Phone, MessageSquare, 
  Calendar, Shield, ArrowRight, Compass, Ruler, Car, Building2, 
  ExternalLink, Sparkles 
} from 'lucide-react';
import { Property } from '../types/property';
import { FloorPlanViewer } from './FloorPlanViewer';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (propertyId: string) => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
  isSaved,
  onToggleSave,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);
  const [viewingFormSubmitted, setViewingFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
    timeSlot: 'Morning (10:00 - 13:00)',
    ndaSigned: true,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!property) return null;

  const allImages = [property.images.hero, ...property.images.gallery];

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleViewingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setViewingFormSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#141312]/80 backdrop-blur-md flex justify-center animate-in fade-in duration-200">
      <div className="relative w-full max-w-[1360px] min-h-screen bg-[#FAF8F5] text-[#161514] shadow-2xl my-0 lg:my-6 border-x border-[#E2DDD5] flex flex-col">
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E2DDD5] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs tracking-widest text-[#71717A] uppercase">
              {property.refNumber}
            </span>
            <span className="text-[#A1A1AA]">/</span>
            <span className="font-mono text-xs tracking-wider text-[#161514] font-medium uppercase">
              {property.category}
            </span>
            <span className="hidden sm:inline text-[#A1A1AA]">/</span>
            <span className="hidden sm:inline font-mono text-xs text-[#71717A] uppercase">
              {property.city}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleShare}
              className="p-2 border border-[#E2DDD5] hover:border-[#161514] text-[#52525B] hover:text-[#161514] transition-colors cursor-pointer text-xs font-mono flex items-center gap-1.5"
              title="Share Property"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copiedLink ? 'COPIED' : 'SHARE'}</span>
            </button>

            <button
              onClick={() => onToggleSave(property.id)}
              className={`p-2 border transition-colors cursor-pointer text-xs font-mono flex items-center gap-1.5 ${
                isSaved
                  ? 'bg-[#161514] text-[#FAF8F5] border-[#161514]'
                  : 'border-[#E2DDD5] text-[#52525B] hover:text-[#161514]'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
              <span className="hidden sm:inline">{isSaved ? 'SAVED' : 'SAVE'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 border border-[#161514] bg-[#161514] text-[#FAF8F5] hover:bg-[#2A2826] transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4 stroke-[2]" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 lg:p-12 space-y-12">
          {/* Main Title & Valuation Banner */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#E2DDD5]">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#71717A] uppercase">
                <MapPin className="w-3.5 h-3.5 text-[#C2A87E]" />
                <span>{property.location}</span>
                <span>·</span>
                <span>{property.coordinates.formatted}</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#161514] leading-tight">
                {property.title}
              </h1>
              <p className="font-sans text-sm sm:text-base text-[#52525B] font-light">
                {property.subtitle}
              </p>
            </div>

            <div className="lg:text-right shrink-0">
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#71717A] block">
                VALUATION ESTIMATE
              </span>
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#161514] tracking-tight">
                {property.price}
              </div>
              {property.priceSubtext && (
                <div className="font-mono text-xs text-[#71717A] mt-1">
                  {property.priceSubtext}
                </div>
              )}
            </div>
          </div>

          {/* Cinematic Gallery Stage */}
          <div className="space-y-4">
            <div className="relative aspect-[16/9] w-full overflow-hidden border border-[#E2DDD5] bg-[#161514]">
              <img
                src={allImages[activeImageIndex]}
                alt={`${property.title} view ${activeImageIndex + 1}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white font-mono text-xs px-3 py-1 border border-white/20">
                {activeImageIndex + 1} / {allImages.length} PHOTOGRAPHS
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`aspect-[16/10] overflow-hidden border transition-all cursor-pointer ${
                    activeImageIndex === idx
                      ? 'border-[#161514] ring-2 ring-[#161514]'
                      : 'border-[#E2DDD5] opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Technical Data Panel with Architectural Dividers */}
          <div className="border border-[#E2DDD5] bg-white p-6 sm:p-8">
            <div className="font-mono text-xs tracking-widest text-[#71717A] uppercase pb-4 mb-6 border-b border-[#E2DDD5]">
              TECHNICAL SPECIFICATIONS & AUDIT
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 text-center sm:text-left">
              <div className="border-r last:border-r-0 border-[#E2DDD5] pr-2">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#71717A] block">
                  TRANSACTION
                </span>
                <span className="font-serif text-lg font-medium text-[#161514] block mt-1">
                  {property.transactionType}
                </span>
              </div>

              <div className="border-r last:border-r-0 border-[#E2DDD5] pr-2">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#71717A] block">
                  CARPET AREA
                </span>
                <span className="font-serif text-lg font-medium text-[#161514] block mt-1">
                  {property.areaSqFt.toLocaleString()} SQ FT
                </span>
              </div>

              <div className="border-r last:border-r-0 border-[#E2DDD5] pr-2">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#71717A] block">
                  BEDROOMS
                </span>
                <span className="font-serif text-lg font-medium text-[#161514] block mt-1">
                  {property.bedrooms > 0 ? `${property.bedrooms} Chambers` : 'Commercial'}
                </span>
              </div>

              <div className="border-r last:border-r-0 border-[#E2DDD5] pr-2">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#71717A] block">
                  BATHROOMS
                </span>
                <span className="font-serif text-lg font-medium text-[#161514] block mt-1">
                  {property.bathrooms} Ensuites
                </span>
              </div>

              <div className="border-r last:border-r-0 border-[#E2DDD5] pr-2">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#71717A] block">
                  PARKING
                </span>
                <span className="font-serif text-lg font-medium text-[#161514] block mt-1">
                  {property.parkingSpots} Reserved
                </span>
              </div>

              <div className="border-r last:border-r-0 border-[#E2DDD5] pr-2">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#71717A] block">
                  ELEVATION
                </span>
                <span className="font-serif text-lg font-medium text-[#161514] block mt-1">
                  {property.floorLevel}
                </span>
              </div>

              <div className="border-r last:border-r-0 border-[#E2DDD5] pr-2">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#71717A] block">
                  BUILT YEAR
                </span>
                <span className="font-serif text-lg font-medium text-[#161514] block mt-1">
                  {property.yearBuilt}
                </span>
              </div>

              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#71717A] block">
                  STATUS
                </span>
                <span className="font-serif text-lg font-medium text-emerald-800 block mt-1">
                  {property.status}
                </span>
              </div>
            </div>
          </div>

          {/* Narrative & Architectural Curation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-6">
              <span className="font-mono text-xs tracking-widest text-[#71717A] uppercase block">
                SPATIAL MONOGRAPH
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#161514]">
                Property Overview & Materiality
              </h3>
              <p className="font-sans text-base text-[#474542] leading-relaxed font-light whitespace-pre-line">
                {property.description}
              </p>

              {/* Highlights */}
              <div className="pt-4 border-t border-[#E2DDD5] space-y-3">
                <span className="font-mono text-xs tracking-wider uppercase text-[#71717A] block">
                  KEY ARCHITECTURAL HIGHLIGHTS
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#2A2826] font-sans">
                      <span className="text-[#C2A87E] font-serif text-base leading-none">▪</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Curator Note */}
              {property.editorialCuratorNote && (
                <div className="p-5 bg-[#EFECE6] border-l-2 border-[#161514] text-xs font-mono text-[#52525B] leading-relaxed">
                  <span className="font-semibold text-[#161514] block mb-1">
                    ARORA ADVISORY CURATION NOTE:
                  </span>
                  "{property.editorialCuratorNote}"
                </div>
              )}
            </div>

            {/* Amenities Panel */}
            <div className="lg:col-span-4 border border-[#E2DDD5] p-6 bg-white space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-[#E2DDD5]">
                <Shield className="w-4 h-4 text-[#161514]" />
                <span className="font-mono text-xs tracking-wider uppercase text-[#161514] font-medium">
                  CURATED AMENITIES & INFRASTRUCTURE
                </span>
              </div>
              <div className="flex flex-col gap-2.5 text-xs font-mono text-[#52525B]">
                {property.amenities.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-1 border-b border-[#E2DDD5]/50 last:border-b-0">
                    <span>{item.toUpperCase()}</span>
                    <Check className="w-3 h-3 text-[#C2A87E]" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Architectural Blueprint Section */}
          <FloorPlanViewer floorPlans={property.floorPlans} propertyTitle={property.title} />

          {/* Location & Landmark Connectivity ("WHERE IT ALL CONNECTS") */}
          <div className="border border-[#E2DDD5] p-6 sm:p-8 lg:p-10 bg-white space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#E2DDD5]">
              <div>
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#71717A] block">
                  TRANSIT & ARTERIAL PROXIMITY
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#161514]">
                  WHERE IT ALL CONNECTS.
                </h3>
              </div>
              <div className="font-mono text-xs text-[#71717A]">
                MICRO-MARKET: {property.subCity.toUpperCase()}
              </div>
            </div>

            {/* Landmark Distance Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {property.landmarks.map((landmark, idx) => (
                <div
                  key={idx}
                  className="p-4 border border-[#E2DDD5] hover:border-[#161514] transition-colors flex items-center justify-between bg-[#FAF8F5]"
                >
                  <div className="space-y-0.5">
                    <span className="font-mono text-[9px] tracking-widest text-[#71717A] uppercase block">
                      {landmark.category}
                    </span>
                    <span className="font-serif text-base font-normal text-[#161514]">
                      {landmark.name}
                    </span>
                  </div>
                  <div className="text-right pl-3">
                    <span className="font-mono text-xs font-semibold text-[#161514] tabular-nums">
                      {landmark.distance}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lead Booking / Private Viewing Scheduler */}
          <div className="border border-[#161514] bg-[#161514] text-[#FAF8F5] p-6 sm:p-10 lg:p-12">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="text-center space-y-2">
                <span className="font-mono text-xs tracking-[0.25em] text-[#C2A87E] uppercase block">
                  PRIVATE CONFIDENTIAL INQUIRY
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-light text-white">
                  Schedule a Private Viewing
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#A1A1AA] max-w-xl mx-auto">
                  Viewings are conducted strictly by appointment with our designated advisory partner. Full title dossiers and structural blueprints provided upon confirmation.
                </p>
              </div>

              {viewingFormSubmitted ? (
                <div className="p-8 bg-[#242220] border border-[#3F3D39] text-center space-y-3 animate-in fade-in">
                  <div className="w-10 h-10 rounded-full bg-[#C2A87E] text-[#141312] flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <h4 className="font-serif text-2xl text-white">
                    Viewing Request Received
                  </h4>
                  <p className="text-xs font-mono text-[#D4CEBF] max-w-md mx-auto">
                    Thank you, {formData.name}. Our designated advisory partner for {property.refNumber} will contact you at {formData.phone} within 2 hours to confirm your private viewing protocol.
                  </p>
                  <button
                    onClick={() => setViewingFormSubmitted(false)}
                    className="mt-4 px-4 py-2 text-xs font-mono border border-white/30 text-white hover:bg-white hover:text-[#161514] transition-colors"
                  >
                    SUBMIT ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleViewingSubmit} className="space-y-4 pt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block font-mono text-[10px] tracking-widest uppercase text-[#A1A1AA] mb-1">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Vikramaditya Singhania"
                        className="w-full bg-[#242220] border border-[#3F3D39] px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-[#C2A87E]"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] tracking-widest uppercase text-[#A1A1AA] mb-1">
                        CONTACT NUMBER *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98..."
                        className="w-full bg-[#242220] border border-[#3F3D39] px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-[#C2A87E]"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] tracking-widest uppercase text-[#A1A1AA] mb-1">
                        EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@familyoffice.com"
                        className="w-full bg-[#242220] border border-[#3F3D39] px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-[#C2A87E]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[10px] tracking-widest uppercase text-[#A1A1AA] mb-1">
                        PREFERRED VIEWING DATE
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full bg-[#242220] border border-[#3F3D39] px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-[#C2A87E]"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] tracking-widest uppercase text-[#A1A1AA] mb-1">
                        PREFERRED TIME WINDOW
                      </label>
                      <select
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full bg-[#242220] border border-[#3F3D39] px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-[#C2A87E]"
                      >
                        <option value="Morning (10:00 - 13:00)">Morning (10:00 - 13:00)</option>
                        <option value="Afternoon (14:00 - 17:00)">Afternoon (14:00 - 17:00)</option>
                        <option value="Golden Hour (17:00 - 19:00)">Golden Hour / Twilight (17:00 - 19:00)</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-[#A1A1AA]">
                      <Shield className="w-3.5 h-3.5 text-[#C2A87E]" />
                      <span>PRIVACY GUARANTEED · NON-DISCLOSURE PROTOCOL</span>
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 bg-[#FAF8F5] text-[#161514] hover:bg-white font-mono text-xs tracking-[0.18em] uppercase font-semibold transition-colors cursor-pointer"
                    >
                      REQUEST PRIVATE VIEWING →
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Sticky Mobile Action Bar (Call, WhatsApp, Enquire) */}
        <div className="sticky bottom-0 z-40 lg:hidden bg-[#FAF8F5] border-t border-[#E2DDD5] p-3 flex items-center gap-2 shadow-[0_-4px_12px_rgba(0,0,0,0.06)]">
          <a
            href="tel:+919811042800"
            className="flex-1 py-2.5 px-3 text-center border border-[#161514] font-mono text-xs text-[#161514] flex items-center justify-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>CALL</span>
          </a>
          <a
            href="https://wa.me/919811042800"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-3 text-center bg-emerald-800 text-white font-mono text-xs flex items-center justify-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WHATSAPP</span>
          </a>
          <button
            onClick={() => {
              const form = document.querySelector('form');
              form?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex-[1.5] py-2.5 px-3 text-center bg-[#161514] text-[#FAF8F5] font-mono text-xs tracking-wider uppercase font-semibold"
          >
            ENQUIRE NOW
          </button>
        </div>
      </div>
    </div>
  );
};
