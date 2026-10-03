import React, { useState } from 'react';
import { Compass, ZoomIn, ZoomOut, Maximize2, Move, Ruler } from 'lucide-react';
import { FloorPlan } from '../types/property';

interface FloorPlanViewerProps {
  floorPlans: FloorPlan[];
  propertyTitle: string;
}

export const FloorPlanViewer: React.FC<FloorPlanViewerProps> = ({
  floorPlans,
  propertyTitle,
}) => {
  const [activePlanIndex, setActivePlanIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [showDimensions, setShowDimensions] = useState(true);

  const activePlan = floorPlans[activePlanIndex] || floorPlans[0];

  if (!activePlan) return null;

  return (
    <div className="bg-[#FAF8F5] border border-[#E2DDD5] p-6 sm:p-8 lg:p-10 my-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#E2DDD5]">
        <div>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#71717A] block">
            ARCHITECTURAL SCHEMATICS
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#161514] tracking-tight">
            SPACE, DRAWN TO SCALE.
          </h3>
        </div>

        {/* Level Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {floorPlans.map((plan, idx) => (
            <button
              key={plan.id}
              onClick={() => {
                setActivePlanIndex(idx);
                setZoomLevel(1);
              }}
              className={`px-4 py-2 text-xs font-mono tracking-wider transition-colors cursor-pointer border ${
                activePlanIndex === idx
                  ? 'bg-[#161514] text-[#FAF8F5] border-[#161514] font-medium'
                  : 'bg-[#FAF8F5] text-[#52525B] hover:text-[#161514] border-[#E2DDD5]'
              }`}
            >
              {plan.title.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Control Bar */}
      <div className="py-3 flex flex-wrap items-center justify-between gap-4 border-b border-[#E2DDD5] text-xs font-mono text-[#71717A]">
        <div className="flex items-center gap-4">
          <span className="text-[#161514] font-semibold">{activePlan.level}</span>
          <span>·</span>
          <span>{activePlan.areaSqFt.toLocaleString()} SQ FT CARPET</span>
          {activePlan.bedrooms && (
            <>
              <span>·</span>
              <span>{activePlan.bedrooms} BED CHAMBERS</span>
            </>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowDimensions(!showDimensions)}
            className={`px-2.5 py-1 text-[11px] border cursor-pointer ${
              showDimensions
                ? 'bg-[#161514] text-[#FAF8F5] border-[#161514]'
                : 'bg-white text-[#52525B] border-[#E2DDD5]'
            }`}
          >
            {showDimensions ? 'DIMENSIONS: ON' : 'DIMENSIONS: OFF'}
          </button>

          <button
            onClick={() => setZoomLevel((prev) => Math.min(1.5, prev + 0.15))}
            className="p-1.5 border border-[#E2DDD5] hover:bg-white text-[#161514] cursor-pointer"
            title="Zoom In"
            aria-label="Zoom in"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={() => setZoomLevel((prev) => Math.max(0.8, prev - 0.15))}
            className="p-1.5 border border-[#E2DDD5] hover:bg-white text-[#161514] cursor-pointer"
            title="Zoom Out"
            aria-label="Zoom out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            onClick={() => setZoomLevel(1)}
            className="px-2 py-1 text-[11px] border border-[#E2DDD5] hover:bg-white text-[#161514] cursor-pointer"
          >
            RESET
          </button>
        </div>
      </div>

      {/* Blueprint Visualizer Stage */}
      <div className="relative w-full h-[480px] sm:h-[540px] bg-[#0E1E2E] overflow-hidden border border-[#1A334B] my-6 select-none flex items-center justify-center">
        {/* Blueprint Grid Background */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-60 pointer-events-none" />

        {/* North Arrow Stamp */}
        <div className="absolute top-4 right-4 z-20 flex flex-col items-center gap-1 font-mono text-[9px] text-[#38BDF8]">
          <Compass className="w-5 h-5 text-[#38BDF8] animate-spin-slow" />
          <span>TRUE NORTH</span>
        </div>

        {/* Scale Ruler Stamp */}
        <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 font-mono text-[9px] text-[#38BDF8]">
          <Ruler className="w-3.5 h-3.5" />
          <div className="flex items-center gap-1">
            <span className="w-12 h-1 bg-[#38BDF8]" />
            <span>5 METRES</span>
          </div>
        </div>

        {/* Blueprint Vector Drawing (Architectural Cad Render) */}
        <div
          style={{ transform: `scale(${zoomLevel})` }}
          className="transition-transform duration-300 ease-out p-4 flex items-center justify-center max-w-full max-h-full"
        >
          <svg
            viewBox="0 0 800 520"
            className="w-[720px] max-w-full h-auto text-[#E0F2FE]"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer Exterior Envelope Walls (Thick double line) */}
            <rect
              x="60"
              y="50"
              width="680"
              height="410"
              fill="rgba(14, 116, 144, 0.08)"
              stroke="#38BDF8"
              strokeWidth="3.5"
            />
            <rect
              x="68"
              y="58"
              width="664"
              height="394"
              fill="none"
              stroke="#0284C7"
              strokeWidth="1.2"
              strokeDasharray="2 2"
            />

            {/* Room Partitions & Internal Walls */}
            {/* Grand Salon / Living Room */}
            <rect x="68" y="58" width="360" height="240" fill="none" stroke="#38BDF8" strokeWidth="2" />
            <text x="180" y="150" fill="#E0F2FE" fontSize="13" fontFamily="monospace" fontWeight="bold">
              FORMAL GRAND SALON
            </text>
            <text x="180" y="170" fill="#7DD3FC" fontSize="10" fontFamily="monospace">
              DOUBLE-HEIGHT 26 FT CEILING
            </text>
            {showDimensions && (
              <text x="180" y="190" fill="#94A3B8" fontSize="9" fontFamily="monospace">
                32' 6" × 24' 0" [780 SQ FT]
              </text>
            )}

            {/* Open Sky Cantilevered Terrace */}
            <rect
              x="68"
              y="298"
              width="360"
              height="154"
              fill="rgba(56, 189, 248, 0.05)"
              stroke="#38BDF8"
              strokeWidth="2"
              strokeDasharray="6 4"
            />
            <text x="170" y="360" fill="#E0F2FE" fontSize="12" fontFamily="monospace" fontWeight="bold">
              CANTILEVERED SKY TERRACE
            </text>
            {/* Private Plunge Pool Outline */}
            <rect x="85" y="380" width="160" height="55" fill="rgba(56, 189, 248, 0.2)" stroke="#38BDF8" strokeWidth="1.5" />
            <text x="110" y="412" fill="#E0F2FE" fontSize="9" fontFamily="monospace">
              HEATED PLUNGE POOL
            </text>

            {/* Dining Gallery & Culinary Suite */}
            <rect x="428" y="58" width="304" height="150" fill="none" stroke="#38BDF8" strokeWidth="2" />
            <text x="500" y="125" fill="#E0F2FE" fontSize="12" fontFamily="monospace" fontWeight="bold">
              DINING GALLERY & BAR
            </text>
            {showDimensions && (
              <text x="500" y="145" fill="#94A3B8" fontSize="9" fontFamily="monospace">
                22' 0" × 16' 4" [360 SQ FT]
              </text>
            )}

            {/* Show Kitchen & Prep Scullery */}
            <rect x="428" y="208" width="180" height="120" fill="none" stroke="#38BDF8" strokeWidth="1.8" />
            <text x="445" y="260" fill="#E0F2FE" fontSize="10" fontFamily="monospace">
              CHEF SHOW-KITCHEN
            </text>
            <text x="445" y="278" fill="#7DD3FC" fontSize="8" fontFamily="monospace">
              MIELE APPLIANCE SUITE
            </text>

            {/* Private Elevator Vestibule */}
            <rect x="608" y="208" width="124" height="120" fill="rgba(255,255,255,0.04)" stroke="#38BDF8" strokeWidth="1.8" />
            <text x="618" y="255" fill="#E0F2FE" fontSize="9" fontFamily="monospace" fontWeight="bold">
              PRIVATE LOBBY
            </text>
            <rect x="625" y="270" width="40" height="40" fill="none" stroke="#38BDF8" strokeWidth="1.2" strokeDasharray="3 3" />
            <text x="632" y="294" fill="#38BDF8" fontSize="8" fontFamily="monospace">
              LIFT
            </text>

            {/* Primary Master Chamber Suite */}
            <rect x="428" y="328" width="304" height="124" fill="none" stroke="#38BDF8" strokeWidth="2" />
            <text x="510" y="380" fill="#E0F2FE" fontSize="12" fontFamily="monospace" fontWeight="bold">
              MASTER SUITE I
            </text>
            <text x="510" y="400" fill="#7DD3FC" fontSize="9" fontFamily="monospace">
              STATUARIO MARBLE SPA ENSUITE
            </text>
            {showDimensions && (
              <text x="510" y="418" fill="#94A3B8" fontSize="9" fontFamily="monospace">
                24' 6" × 18' 0" [440 SQ FT]
              </text>
            )}

            {/* Architectural Door Swings (Quarter arcs) */}
            <path d="M 428 110 A 30 30 0 0 1 398 80" fill="none" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 2" />
            <path d="M 428 350 A 30 30 0 0 1 458 380" fill="none" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 2" />

            {/* Window Glazing Indicators (Double lines on exterior) */}
            <line x1="120" y1="50" x2="320" y2="50" stroke="#7DD3FC" strokeWidth="3" />
            <line x1="120" y1="46" x2="320" y2="46" stroke="#0284C7" strokeWidth="1.5" />
            <text x="180" y="40" fill="#7DD3FC" fontSize="8" fontFamily="monospace">
              FLOOR-TO-CEILING LOW-E GLAZING
            </text>
          </svg>
        </div>
      </div>

      {/* Description Deck */}
      <p className="font-sans text-xs sm:text-sm text-[#52525B] leading-relaxed max-w-3xl">
        {activePlan.description} Scaled CAD drawings and BIM specifications are available upon verified registration.
      </p>
    </div>
  );
};
