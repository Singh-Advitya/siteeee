import React from 'react';
import { X, Bookmark, ArrowRight, Trash2, MapPin } from 'lucide-react';
import { Property } from '../types/property';

interface SavedPropertiesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedProperties: Property[];
  onRemoveSaved: (propertyId: string) => void;
  onSelectProperty: (property: Property) => void;
}

export const SavedPropertiesDrawer: React.FC<SavedPropertiesDrawerProps> = ({
  isOpen,
  onClose,
  savedProperties,
  onRemoveSaved,
  onSelectProperty,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] border-l border-[#E2DDD5] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-[#E2DDD5] flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#71717A] block">
                PRIVATE SHORTLIST
              </span>
              <h3 className="font-serif text-2xl font-normal text-[#161514]">
                Saved Holdings ({savedProperties.length})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 border border-[#E2DDD5] hover:border-[#161514] text-[#161514] transition-colors"
              aria-label="Close drawer"
            >
              <X className="w-4 h-4 stroke-[1.5]" />
            </button>
          </div>

          {/* List Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {savedProperties.length === 0 ? (
              <div className="py-20 text-center space-y-3">
                <Bookmark className="w-8 h-8 text-[#A1A1AA] stroke-[1] mx-auto" />
                <p className="font-serif text-xl text-[#52525B]">
                  No properties shortlisted yet.
                </p>
                <p className="font-mono text-xs text-[#A1A1AA] max-w-xs mx-auto">
                  Click the bookmark icon on any property card to save it to your private review dossier.
                </p>
              </div>
            ) : (
              savedProperties.map((prop) => (
                <div
                  key={prop.id}
                  className="bg-white border border-[#E2DDD5] p-4 flex gap-4 relative group"
                >
                  <div
                    onClick={() => {
                      onClose();
                      onSelectProperty(prop);
                    }}
                    className="w-24 h-24 bg-[#EFECE6] shrink-0 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={prop.images.hero}
                      alt={prop.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div
                      onClick={() => {
                        onClose();
                        onSelectProperty(prop);
                      }}
                      className="cursor-pointer space-y-1"
                    >
                      <span className="font-mono text-[9px] tracking-widest text-[#71717A] uppercase block">
                        {prop.aroraCode} · {prop.city}
                      </span>
                      <h4 className="font-serif text-base text-[#161514] font-medium line-clamp-1 group-hover:underline">
                        {prop.title}
                      </h4>
                      <div className="font-serif text-lg font-medium text-[#161514]">
                        {prop.price}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-[#E2DDD5]/70">
                      <span className="font-mono text-[10px] text-[#71717A]">
                        {prop.areaSqFt.toLocaleString()} SQ FT
                      </span>
                      <button
                        onClick={() => onRemoveSaved(prop.id)}
                        className="text-[#A1A1AA] hover:text-red-700 p-1"
                        title="Remove from saved"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Bottom Actions */}
          {savedProperties.length > 0 && (
            <div className="p-6 border-t border-[#E2DDD5] bg-white space-y-3">
              <a
                href="#contact-section"
                onClick={onClose}
                className="w-full py-3.5 bg-[#161514] hover:bg-[#2A2826] text-[#FAF8F5] font-mono text-xs tracking-[0.16em] uppercase text-center block transition-colors"
              >
                REQUEST ADVISORY ON SHORTLIST →
              </a>
              <div className="text-center font-mono text-[10px] text-[#71717A]">
                NON-DISCLOSURE VERIFIED HOLDINGS
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
