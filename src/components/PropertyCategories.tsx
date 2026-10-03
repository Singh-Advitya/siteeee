import React from 'react';
import { ArrowRight, Building, Home, Key, Landmark, Briefcase, Sparkles } from 'lucide-react';

interface PropertyCategoriesProps {
  onSelectCategory: (category: string) => void;
}

export const PropertyCategories: React.FC<PropertyCategoriesProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      id: 'Penthouse',
      title: 'PENTHOUSES & SKY SUITES',
      deck: 'Multi-level sky residences, private heated plunge pools, and uninterrupted 360-degree fairway horizons.',
      tag: 'DLF Phase 5 · Golf Course Road',
      count: '8 Properties Available',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'Contemporary Villa',
      title: 'CONTEMPORARY VILLAS',
      deck: 'Private architectural freehold estates, subterranean galleries, private verandas and security detachment zones.',
      tag: 'Lutyens\' Delhi · Jaypee Greens',
      count: '6 Properties Available',
      icon: Home,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'Independent Floor',
      title: 'SOUTH DELHI INDEPENDENT FLOORS',
      deck: 'Bespoke private floors on 400 to 1,200 sq yard plots with deeded exclusive roof rights and private hydraulic lifts.',
      tag: 'Panchsheel · Vasant Vihar',
      count: '14 Properties Available',
      icon: Building,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'Luxury Residence',
      title: 'LUXURY CONDOMINIUMS',
      deck: 'Gated enclave residences offering concierge services, 100% redundant utilities, and private sports pavilions.',
      tag: 'The Magnolias · The Belaire',
      count: '19 Properties Available',
      icon: Key,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'Grade A Office',
      title: 'GRADE A COMMERCIAL OFFICES',
      deck: 'LEED Platinum high-rise contiguous floorplates, institutional blue-chip corporate covenants and high yields.',
      tag: 'One Horizon · Cyber City',
      count: '11 Floorplates Available',
      icon: Briefcase,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'Heritage Duplex',
      title: 'HERITAGE ENCLAVES & DUPLEXES',
      deck: 'Rare historic colonial-adjacent residences overlooking Purana Qila, Sunder Nursery, and Delhi Golf Club.',
      tag: 'Sunder Nagar · Golf Links',
      count: '4 Rare Offerings',
      icon: Landmark,
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E2DDD5]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E2DDD5]">
          <div className="space-y-2">
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#71717A] block">
              PORTFOLIO CLASSIFICATION
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#161514] tracking-tight">
              FIND YOUR NEXT SPACE
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#52525B] max-w-md font-light">
            Whether acquiring a generational home or expanding institutional commercial holdings, explore our distinct architectural typologies.
          </p>
        </div>

        {/* 6 Category Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="group relative bg-white border border-[#E2DDD5] hover:border-[#161514] transition-all duration-300 p-6 sm:p-8 cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E2DDD5]/70">
                    <Icon className="w-4 h-4 text-[#161514]" />
                    <span className="font-mono text-[10px] tracking-widest text-[#71717A] uppercase">
                      {cat.count}
                    </span>
                  </div>

                  <div className="aspect-[16/9] overflow-hidden bg-[#EFECE6] border border-[#E2DDD5]">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale-[15%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#161514] group-hover:text-[#242220] transition-colors leading-snug">
                    {cat.title}
                  </h3>

                  <p className="font-sans text-xs text-[#52525B] leading-relaxed font-light">
                    {cat.deck}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2DDD5] flex items-center justify-between font-mono text-xs text-[#161514]">
                  <span className="text-[10px] text-[#71717A] uppercase">{cat.tag}</span>
                  <div className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>EXPLORE</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
