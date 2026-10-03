import React, { useState } from 'react';
import { MapPin, Navigation, Maximize2, Layers, Compass, ArrowRight, X } from 'lucide-react';
import { Property } from '../types/property';

interface InteractiveMapProps {
  properties: Property[];
  onSelectProperty: (property: Property) => void;
  selectedPropertyId?: string;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  properties,
  onSelectProperty,
  selectedPropertyId,
}) => {
  const [activePin, setActivePin] = useState<Property | null>(
    properties.find((p) => p.id === selectedPropertyId) || properties[0] || null
  );
  const [filterRegion, setFilterRegion] = useState<string>('all');

  // Delhi NCR bounding box map projections (approx lat: 28.40 to 28.70, lng: 77.00 to 77.45)
  const minLat = 28.42;
  const maxLat = 28.66;
  const minLng = 77.05;
  const maxLng = 77.40;

  const getCoordinatesPercent = (lat: number, lng: number) => {
    // Invert lat for SVG Y axis
    const y = ((maxLat - lat) / (maxLat - minLat)) * 80 + 10;
    const x = ((lng - minLng) / (maxLng - minLng)) * 80 + 10;
    return {
      x: Math.max(8, Math.min(92, x)),
      y: Math.max(8, Math.min(92, y)),
    };
  };

  const filteredProperties = properties.filter((p) => {
    if (filterRegion === 'all') return true;
    if (filterRegion === 'gurugram') return p.city === 'Gurugram';
    if (filterRegion === 'delhi') return p.city === 'New Delhi';
    if (filterRegion === 'noida') return p.city === 'Noida';
    return true;
  });

  return (
    <div className="relative w-full bg-[#181716] border border-[#2A2826] overflow-hidden text-[#FAF8F5]">
      {/* Top Map Bar */}
      <div className="p-4 sm:p-6 border-b border-[#2A2826] flex flex-wrap items-center justify-between gap-4 bg-[#1E1C1A]">
        <div>
          <div className="flex items-center gap-2 text-[#C2A87E] font-mono text-[10px] tracking-[0.2em] uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>DELHI NCR ARCHITECTURAL CARTOGRAPHY · 1:25,000 SCALE</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-light text-[#FAF8F5] mt-0.5">
            Geographic Portfolio Discovery
          </h3>
        </div>

        {/* Region Segmented Controls */}
        <div className="flex items-center gap-1 p-1 bg-[#141312] border border-[#2A2826]">
          {[
            { id: 'all', label: 'All Regions' },
            { id: 'delhi', label: 'New Delhi' },
            { id: 'gurugram', label: 'Gurugram' },
            { id: 'noida', label: 'Noida' },
          ].map((region) => (
            <button
              key={region.id}
              onClick={() => setFilterRegion(region.id)}
              className={`px-3 py-1.5 text-xs font-mono tracking-wider transition-colors cursor-pointer ${
                filterRegion === region.id
                  ? 'bg-[#2A2826] text-[#FAF8F5] font-medium'
                  : 'text-[#A1A1AA] hover:text-[#FAF8F5]'
              }`}
            >
              {region.label}
            </button>
          ))}
        </div>
      </div>

      {/* Map Canvas Stage */}
      <div className="relative w-full h-[520px] sm:h-[620px] bg-[#141312] select-none overflow-hidden">
        {/* Subtle Architectural Grid */}
        <div className="absolute inset-0 bg-architectural-grid-dark opacity-40 pointer-events-none" />

        {/* Vector Cartographic Backdrop (Yamuna River, Ring Roads, NH-48 Expressway corridors) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.06)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />

          {/* Yamuna River Curve */}
          <path
            d="M 52% 0% Q 54% 25%, 58% 45% T 72% 75% T 78% 100%"
            fill="none"
            stroke="rgba(56, 189, 248, 0.2)"
            strokeWidth="3.5"
            strokeDasharray="4 2"
          />
          <text x="59%" y="42%" fill="rgba(56, 189, 248, 0.4)" fontSize="9" fontFamily="monospace" letterSpacing="0.2em">
            YAMUNA CORRIDOR
          </text>

          {/* Major Expressways / Arterials */}
          {/* Delhi Ring Road */}
          <ellipse
            cx="48%"
            cy="36%"
            rx="18%"
            ry="14%"
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1.2"
          />
          <text x="44%" y="24%" fill="rgba(255,255,255,0.3)" fontSize="9" fontFamily="monospace">
            INNER RING ROAD
          </text>

          {/* NH-48 Expressway to Gurugram */}
          <path
            d="M 40% 38% L 22% 68% L 15% 92%"
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="2"
          />
          <text x="24%" y="54%" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="monospace" transform="rotate(-50 160 300)">
            NH-48 EXPRESSWAY
          </text>

          {/* Golf Course Road Arterial */}
          <path
            d="M 18% 66% L 26% 85%"
            fill="none"
            stroke="rgba(194, 168, 126, 0.35)"
            strokeWidth="2.5"
          />
          <text x="24%" y="78%" fill="rgba(194, 168, 126, 0.7)" fontSize="9" fontFamily="monospace">
            GOLF COURSE ROAD
          </text>

          {/* Noida-Greater Noida Expressway */}
          <path
            d="M 64% 54% L 82% 88%"
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="2"
          />
          <text x="70%" y="68%" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="monospace">
            NOIDA EXPRESSWAY
          </text>

          {/* Area Labels */}
          <text x="46%" y="36%" fill="rgba(255,255,255,0.25)" fontSize="11" fontFamily="serif" letterSpacing="0.15em">
            CENTRAL / LUTYENS'
          </text>
          <text x="44%" y="48%" fill="rgba(255,255,255,0.25)" fontSize="11" fontFamily="serif" letterSpacing="0.15em">
            SOUTH DELHI
          </text>
          <text x="14%" y="72%" fill="rgba(255,255,255,0.25)" fontSize="11" fontFamily="serif" letterSpacing="0.15em">
            GURUGRAM DLF 5
          </text>
          <text x="72%" y="60%" fill="rgba(255,255,255,0.25)" fontSize="11" fontFamily="serif" letterSpacing="0.15em">
            NOIDA SECTOR 128
          </text>
        </svg>

        {/* Property Pins */}
        {filteredProperties.map((prop) => {
          const { x, y } = getCoordinatesPercent(prop.coordinates.lat, prop.coordinates.lng);
          const isSelected = activePin?.id === prop.id;

          return (
            <div
              key={prop.id}
              style={{ left: `${x}%`, top: `${y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer"
              onClick={() => setActivePin(prop)}
            >
              {/* Pulse Ring when selected */}
              {isSelected && (
                <span className="absolute -inset-3 rounded-full border border-[#C2A87E] animate-ping opacity-60 pointer-events-none" />
              )}

              {/* Pin Bubble */}
              <div
                className={`flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono tracking-wider transition-all duration-200 border ${
                  isSelected
                    ? 'bg-[#C2A87E] text-[#141312] font-semibold border-white shadow-[0_0_15px_rgba(194,168,126,0.6)] scale-110'
                    : 'bg-[#1E1C1A] text-[#FAF8F5] border-[#3F3D39] hover:border-[#FAF8F5]'
                }`}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full ${
                    isSelected ? 'bg-[#141312]' : 'bg-[#C2A87E]'
                  }`}
                />
                <span>{prop.price}</span>
              </div>

              {/* Tiny Anchor line */}
              <div className="w-[1px] h-2 bg-[#C2A87E]/70 mx-auto" />
            </div>
          );
        })}

        {/* Selected Property Floating Preview Card (Desktop & Mobile) */}
        {activePin && (
          <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:w-[380px] bg-[#1E1C1A] border border-[#3F3D39] p-4 shadow-2xl z-30 animate-in fade-in slide-in-from-bottom-3 duration-200">
            <div className="flex items-start justify-between gap-3 pb-3 border-b border-[#2A2826]">
              <div className="space-y-0.5">
                <span className="text-[9px] font-mono tracking-widest text-[#C2A87E] uppercase block">
                  {activePin.aroraCode} · {activePin.category.toUpperCase()}
                </span>
                <h4 className="font-serif text-lg text-[#FAF8F5] font-normal leading-tight">
                  {activePin.title}
                </h4>
                <p className="text-[11px] text-[#A1A1AA] font-mono">
                  {activePin.location}
                </p>
              </div>
              <button
                onClick={() => setActivePin(null)}
                className="text-[#71717A] hover:text-[#FAF8F5] p-1"
                aria-label="Close preview"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-3 flex items-center gap-3">
              <div className="w-24 h-16 bg-[#141312] overflow-hidden shrink-0 border border-[#2A2826]">
                <img
                  src={activePin.images.hero}
                  alt={activePin.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1 text-xs font-mono text-[#D4CEBF]">
                <div className="font-serif text-xl font-medium text-[#FAF8F5]">
                  {activePin.price}
                </div>
                <div className="text-[10px] text-[#A1A1AA]">
                  {activePin.areaSqFt.toLocaleString()} SQ FT · {activePin.status}
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#2A2826] flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#71717A]">
                {activePin.coordinates.formatted}
              </span>
              <button
                onClick={() => onSelectProperty(activePin)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF8F5] hover:bg-white text-[#141312] text-xs font-mono tracking-wider uppercase font-semibold transition-colors"
              >
                <span>OPEN DOSSIER</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}

        {/* Bottom Legend */}
        <div className="absolute top-4 left-4 hidden sm:flex flex-col gap-1.5 p-3 bg-[#181716]/90 border border-[#2A2826] backdrop-blur-sm text-[10px] font-mono text-[#A1A1AA]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C2A87E]" />
            <span>Curated Portfolio Asset</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-0.5 bg-sky-400" />
            <span>Yamuna Ecological Belt</span>
          </div>
          <div className="text-[9px] text-[#71717A] pt-1 border-t border-[#2A2826]">
            CLICK ANY PIN TO INSPECT ASSET
          </div>
        </div>
      </div>
    </div>
  );
};
