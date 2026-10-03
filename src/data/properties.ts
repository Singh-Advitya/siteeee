import { Property, LocationGuide, JournalArticle, Advisor } from '../types/property';

export const PROPERTIES: Property[] = [
  {
    id: 'camellias-sky-penthouse',
    refNumber: 'PROPERTY 024',
    aroraCode: 'ARORA / 024',
    title: 'The Camellias Sky Penthouse',
    subtitle: 'Ultra-Luxury Triplex Sky Residence with Private Plunge Pool',
    location: 'Golf Course Road, Sector 42',
    subCity: 'Golf Course Road',
    city: 'Gurugram',
    coordinates: {
      lat: 28.4595,
      lng: 77.0878,
      formatted: '28°27\'34" N · 77°05\'16" E'
    },
    transactionType: 'Buy',
    category: 'Penthouse',
    price: '₹ 28.50 CR',
    priceNumeric: 28.5,
    areaSqFt: 7400,
    bedrooms: 4,
    bathrooms: 5,
    parkingSpots: 4,
    floorLevel: '38th & 39th Floor',
    yearBuilt: 2024,
    status: 'Ready to Move',
    description: 'A monument of horizontal and vertical transparency suspended over the DLF Golf Course. Featuring 13-foot floor-to-ceiling double-glazed low-E thermal glazing, book-matched Greek Thassos marble, private high-speed elevator opening into an illuminated private lobby, and an open-sky cantilevered terrace with a heated infinity pool overlooking the Aravalli horizon.',
    highlights: [
      'Unobstructed 270° DLF Golf Course & Aravalli mountain views',
      'Private temperature-controlled heated plunge pool on terrace',
      'Double-height ceiling volume (26 ft) in the formal grand salon',
      'Dedicated staff quarter with independent access and service lift',
      'VRV 4-pipe air conditioning with HEPA air purification system'
    ],
    amenities: [
      'Private Infinity Pool',
      '24/7 White-Glove Concierge',
      'Championship Golf Access',
      '3-Tier Biometric Security',
      'Underground Private Garage',
      'Private High-Speed Elevator',
      'Sommelier Wine Cellar',
      'Full Home Automation (Lutron)',
      '100% Redundant Power Backup',
      'Wellness Pavilion & Spa'
    ],
    images: {
      hero: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80'
      ]
    },
    landmarks: [
      { name: 'DLF Golf and Country Club', distance: '300 M', category: 'Lifestyle' },
      { name: 'One Horizon Center', distance: '1.2 KM', category: 'Business' },
      { name: 'The Shri Ram School, Moulsari', distance: '2.4 KM', category: 'Education' },
      { name: 'Fortis Memorial Research Institute', distance: '4.8 KM', category: 'Healthcare' },
      { name: 'Indira Gandhi International Airport (IGI)', distance: '22 MIN', category: 'Transport' }
    ],
    floorPlans: [
      {
        id: 'fp-1',
        title: 'Level 38 — Grand Reception & Suites',
        level: 'Lower Level',
        areaSqFt: 4200,
        bedrooms: 2,
        bathrooms: 3,
        description: 'Features the dramatic double-height great room, dining gallery, chef show-kitchen, prep pantry, and 2 guest master suites with en-suite walk-in dressing galleries.',
        svgType: 'penthouse'
      },
      {
        id: 'fp-2',
        title: 'Level 39 — Master Sanctuary & Sky Terrace',
        level: 'Upper Level',
        areaSqFt: 3200,
        bedrooms: 2,
        bathrooms: 2,
        description: 'Dedicated primary master wing with private study, dual spa bathrooms clad in Statuario marble, outdoor heated plunge pool, and expansive landscaped sky deck.',
        svgType: 'penthouse'
      }
    ],
    featured: true,
    editorialCuratorNote: 'Considered among the top three residential developments in South Asia, The Camellias offers unmatched capital resilience and absolute prestige on Golf Course Road.'
  },
  {
    id: 'amrita-shergill-marg-estate',
    refNumber: 'PROPERTY 018',
    aroraCode: 'ARORA / 018',
    title: 'Lutyens\' Diplomatic Enclave Residence',
    subtitle: 'Private Colonial-Modernist Freehold Villa on 800 Sq Yard Plot',
    location: 'Amrita Shergill Marg, Lutyens\' Zone',
    subCity: 'Lutyens Bungalow Zone',
    city: 'New Delhi',
    coordinates: {
      lat: 28.5983,
      lng: 77.2215,
      formatted: '28°35\'53" N · 77°13\'17" E'
    },
    transactionType: 'Buy',
    category: 'Contemporary Villa',
    price: '₹ 72.00 CR',
    priceNumeric: 72.0,
    areaSqFt: 9800,
    bedrooms: 6,
    bathrooms: 7,
    parkingSpots: 6,
    floorLevel: 'G + 2 Independent Villa',
    yearBuilt: 2023,
    status: 'Ready to Move',
    description: 'A discreet architectural masterpiece situated inside the prestigious Lutyens Bungalow Zone boundary. Designed by an internationally acclaimed modernist studio, this residence blends historical New Delhi stone masonry with cantilevered glass pavilions, internal courtyard courtyards, reflective lotus ponds, and ancient banyan canopy views.',
    highlights: [
      'Extremely rare freehold clear-title estate in LBZ adjacent corridor',
      'Private 800 sq yard manicured perimeter with automated perimeter radar',
      'Temperature-controlled subterranean art gallery & private screening lounge',
      'Independent security detachment quarters & 6-bay covered vehicle gallery',
      'Geothermal climate moderation and passive architectural shading louvers'
    ],
    amenities: [
      'Private Courtyard Garden',
      'Diplomatic-Grade Security',
      'Heated Lap Pool',
      'Private Art Gallery Hall',
      '12-Seat Cinema Room',
      'Commercial Chef Pantry',
      'Full Staff Detachment Quarters',
      'Dual Generator Sync Grid',
      'Automated Landscape Irrigation',
      'Wine & Cigar Humidor'
    ],
    images: {
      hero: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
      ]
    },
    landmarks: [
      { name: 'Lodhi Gardens', distance: '400 M', category: 'Lifestyle' },
      { name: 'The Lodhi Hotel & Aman Spa', distance: '850 M', category: 'Lifestyle' },
      { name: 'Khan Market', distance: '1.1 KM', category: 'Lifestyle' },
      { name: 'India Habitat Centre', distance: '1.4 KM', category: 'Business' },
      { name: 'Diplomatic Enclave / Chanakyapuri', distance: '7 MIN', category: 'Business' }
    ],
    floorPlans: [
      {
        id: 'fp-villa-g',
        title: 'Ground Level — Courtyard & Formal Pavilion',
        level: 'Ground Floor',
        areaSqFt: 4800,
        bedrooms: 2,
        bathrooms: 3,
        description: 'Centered around a serene open-to-sky stone courtyard, formal banquet salon, diplomatic salon, and direct veranda access to the gardens.',
        svgType: 'villa'
      },
      {
        id: 'fp-villa-1',
        title: 'First Level — Family Chambers & Terrace',
        level: 'First Floor',
        areaSqFt: 3600,
        bedrooms: 4,
        bathrooms: 4,
        description: 'Primary master sanctuary with wrap-around balconies overlooking the Lodhi green canopy, private library, and three junior suites.',
        svgType: 'villa'
      }
    ],
    featured: true,
    editorialCuratorNote: 'The gold standard of generational real estate in India. LBZ properties rarely reach public markets; this acquisition represents singular permanence.'
  },
  {
    id: 'panchsheel-park-modernist-residence',
    refNumber: 'PROPERTY 015',
    aroraCode: 'ARORA / 015',
    title: 'The Panchsheel Modernist Residence',
    subtitle: 'Brand-New Architectural Independent Floor with Private Terrace',
    location: 'Panchsheel Park North',
    subCity: 'South Delhi',
    city: 'New Delhi',
    coordinates: {
      lat: 28.5463,
      lng: 77.2185,
      formatted: '28°32\'46" N · 77°13\'06" E'
    },
    transactionType: 'Buy',
    category: 'Independent Floor',
    price: '₹ 19.50 CR',
    priceNumeric: 19.5,
    areaSqFt: 5200,
    bedrooms: 4,
    bathrooms: 5,
    parkingSpots: 3,
    floorLevel: 'Top Floor with Exclusive Terrace',
    yearBuilt: 2025,
    status: 'Ready to Move',
    description: 'Built on an expansive 600 sq yard corner plot overlooking a protected park canopy. Features bespoke Italian travertine facades, Schuco acoustic triple-pane glazing, Miele kitchen appliances, private hydraulic glass elevator, and an architect-curated roof pavilion with outdoor barbeque and fire-pit lounge.',
    highlights: [
      'Corner plot with dual road access facing 4-acre landscaped municipal park',
      'Exclusive deeded roof rights with custom glass conservatory and pergola',
      'Statuario marble flooring throughout all living and chamber suites',
      'Triple basement stilt car parking with private level-2 EV fast charger'
    ],
    amenities: [
      'Private Rooftop Garden',
      'Schuco Acoustic Glazing',
      'Dedicated Glass Elevator',
      'Daikin VRV Air Conditioning',
      'Park-Facing Balconies',
      'CCTV & Video Intercom',
      '2 Dedicated Staff Rooms',
      'Water Treatment Plant'
    ],
    images: {
      hero: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
      ]
    },
    landmarks: [
      { name: 'Panchsheel Club', distance: '350 M', category: 'Lifestyle' },
      { name: 'Hauz Khas Metro Station', distance: '900 M', category: 'Transport' },
      { name: 'Max Super Speciality Hospital, Saket', distance: '2.8 KM', category: 'Healthcare' },
      { name: 'Select Citywalk Mall', distance: '3.1 KM', category: 'Lifestyle' },
      { name: 'Connaught Place', distance: '18 MIN', category: 'Business' }
    ],
    floorPlans: [
      {
        id: 'fp-pp-floor',
        title: 'Level 3 — Main Residence Floor',
        level: 'Third Floor',
        areaSqFt: 5200,
        bedrooms: 4,
        bathrooms: 5,
        description: 'Expansive family living lounge, continuous front balcony facing the park, 4 bedroom suites with en-suite baths, and imported Italian modular kitchen.',
        svgType: 'floor'
      }
    ],
    featured: true,
    editorialCuratorNote: 'South Delhi independent floors remain the favored asset for discerning legacy families seeking privacy without condominium governance restrictions.'
  },
  {
    id: 'sunder-nagar-heritage-duplex',
    refNumber: 'PROPERTY 009',
    aroraCode: 'ARORA / 009',
    title: 'The Sunder Nagar Heritage Duplex',
    subtitle: 'Quiet Colonial-Adjacent Luxury overlooking Delhi Golf Course Greens',
    location: 'Sunder Nagar, Mathura Road',
    subCity: 'Central Delhi',
    city: 'New Delhi',
    coordinates: {
      lat: 28.6041,
      lng: 77.2412,
      formatted: '28°36\'14" N · 77°14\'28" E'
    },
    transactionType: 'Buy',
    category: 'Heritage Duplex',
    price: '₹ 16.75 CR',
    priceNumeric: 16.75,
    areaSqFt: 4100,
    bedrooms: 3,
    bathrooms: 4,
    parkingSpots: 2,
    floorLevel: 'Ground & First Duplex',
    yearBuilt: 2022,
    status: 'Ready to Move',
    description: 'Nestled in Delhi’s most intellectual and serene enclave, this duplex opens directly onto private mature garden lawns. Retaining high architectural proportions with bespoke woodwork, brass hardware, and floor-to-ceiling glass looking toward the historic Purana Qila monuments.',
    highlights: [
      'Private 1,800 sq ft rear lawn with century-old neem and frangipani trees',
      'Walking distance to Delhi Golf Club, Khan Market, and National Gallery of Modern Art',
      'Dual-level internal wooden spiral and marble staircase',
      'Complete seismic reinforcement and heritage facade restoration'
    ],
    amenities: [
      'Private Mature Lawn',
      'Historic Monument Views',
      'Independent Entry Porch',
      'Imported Teak Parquet Flooring',
      'Wine Storage Cellar',
      'Private Security Kiosk'
    ],
    images: {
      hero: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
      ]
    },
    landmarks: [
      { name: 'Delhi Golf Club', distance: '500 M', category: 'Lifestyle' },
      { name: 'Sunder Nursery Heritage Park', distance: '600 M', category: 'Lifestyle' },
      { name: 'Humayun\'s Tomb', distance: '1.0 KM', category: 'Lifestyle' },
      { name: 'Khan Market', distance: '1.6 KM', category: 'Lifestyle' }
    ],
    floorPlans: [
      {
        id: 'fp-sn-duplex',
        title: 'Ground & First Floor Duplex Layout',
        level: 'Duplex',
        areaSqFt: 4100,
        bedrooms: 3,
        bathrooms: 4,
        description: 'Lower level hosting the grand library, formal salon, and dining room opening into the garden; upper level with three private suites.',
        svgType: 'floor'
      }
    ],
    featured: false,
    editorialCuratorNote: 'Sunder Nagar is known for having the lowest turnover of residences in all of Delhi NCR; properties here are kept across generations.'
  },
  {
    id: 'magnolias-golf-residence',
    refNumber: 'PROPERTY 031',
    aroraCode: 'ARORA / 031',
    title: 'The Magnolias Park Suite',
    subtitle: 'High-Floor 4-BHK Panoramic Golf View Residence',
    location: 'Golf Course Road, Sector 42',
    subCity: 'Golf Course Road',
    city: 'Gurugram',
    coordinates: {
      lat: 28.4612,
      lng: 77.0911,
      formatted: '28°27\'40" N · 77°05\'28" E'
    },
    transactionType: 'Buy',
    category: 'Luxury Residence',
    price: '₹ 22.00 CR',
    priceNumeric: 22.0,
    areaSqFt: 6200,
    bedrooms: 4,
    bathrooms: 5,
    parkingSpots: 3,
    floorLevel: '19th Floor',
    yearBuilt: 2021,
    status: 'Ready to Move',
    description: 'An iconic layout in the revered Magnolias enclave. This bespoke home features customized interiors by London-based design team, imported chevron white-oak flooring, Gaggenau kitchen, and wide 80-foot continuous balcony fronting hole 14 of the DLF Golf Course.',
    highlights: [
      'Direct panoramic golf fairway frontage from living room and master bedroom',
      'Bespoke walk-in dressing suites lined with fluted Italian glass',
      'Exclusive club membership offering Olympic lap pool, pilates studio & fine dining',
      'Zero traffic intrusion with dedicated underground arterial ring'
    ],
    amenities: [
      'Golf Course Frontage',
      'Olympic Swimming Pool',
      'Private Sports Club Access',
      'Valet & Concierge',
      'Underground Parking',
      '3-Tier Access Security'
    ],
    images: {
      hero: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
      ]
    },
    landmarks: [
      { name: 'DLF Club5', distance: '1.1 KM', category: 'Lifestyle' },
      { name: 'Cyber Hub', distance: '4.2 KM', category: 'Business' },
      { name: 'Medanta - The Medicity', distance: '6.5 KM', category: 'Healthcare' }
    ],
    floorPlans: [
      {
        id: 'fp-magnolias',
        title: 'Standard Residence Layout',
        level: '19th Floor',
        areaSqFt: 6200,
        bedrooms: 4,
        bathrooms: 5,
        description: 'Four ensuite master chambers, expansive central gallery, family entertainment den, and staff quarters.',
        svgType: 'penthouse'
      }
    ],
    featured: true,
    editorialCuratorNote: 'The benchmark of luxury condominium living in Northern India. Liquidity and rental demand for The Magnolias remain at historic highs.'
  },
  {
    id: 'horizon-prime-commercial-suite',
    refNumber: 'PROPERTY 055',
    aroraCode: 'ARORA / 055',
    title: 'One Horizon Center Executive Suite',
    subtitle: 'Grade A Institutional Commercial Floorplate with Pre-Lease Option',
    location: 'Golf Course Road, DLF Phase 5',
    subCity: 'Golf Course Road',
    city: 'Gurugram',
    coordinates: {
      lat: 28.4721,
      lng: 77.0945,
      formatted: '28°28\'19" N · 77°05\'40" E'
    },
    transactionType: 'Commercial',
    category: 'Grade A Office',
    price: '₹ 34.00 CR',
    priceNumeric: 34.0,
    priceSubtext: 'Also available for Lease at ₹ 18.5 L / month',
    areaSqFt: 11500,
    bedrooms: 0,
    bathrooms: 6,
    parkingSpots: 14,
    floorLevel: '14th Floor',
    yearBuilt: 2022,
    status: 'Ready to Move',
    description: 'A benchmark institutional commercial asset in India\'s most prized commercial address. LEED Platinum certified, column-free floor plate, high efficiency central air core, and multi-tenant flexibility with blue-chip corporate neighbors including Fortune 500 multinationals.',
    highlights: [
      'LEED Platinum Certified high-rise commercial architecture',
      'Column-free 11,500 sq ft contiguous carpet area for maximum layout agility',
      'Projected gross rental yield of 8.2% with immediate multinational corporate tenant interest',
      '14 allocated reserved underground basement car parking slots'
    ],
    amenities: [
      'LEED Platinum Certified',
      '14 Reserved Stilt Bays',
      'High-Speed Schindler Destination Elevators',
      'Double-Height Grand Corporate Lobby',
      'Integrated Retail & Fine Dining Plaza',
      '100% Dual Power Backup'
    ],
    images: {
      hero: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
      ]
    },
    landmarks: [
      { name: 'Sector 42-43 Rapid Metro', distance: '150 M', category: 'Transport' },
      { name: 'DLF Cyber City', distance: '3.8 KM', category: 'Business' },
      { name: 'Horizon Plaza Restaurants', distance: 'Direct Walk', category: 'Lifestyle' }
    ],
    floorPlans: [
      {
        id: 'fp-commercial',
        title: 'Executive Contiguous Floor Plate',
        level: '14th Floor',
        areaSqFt: 11500,
        description: 'Complete floor plate with dual elevator banks, core service shafts, executive boardroom zones, and open plan workstation capacity for 120+ seats.',
        svgType: 'commercial'
      }
    ],
    featured: false,
    editorialCuratorNote: 'Commercial assets on Golf Course Road present exceptional capital preservation and hedge against inflation with prime dollar-pegged corporate leases.'
  },
  {
    id: 'jaypee-greens-golf-villa',
    refNumber: 'PROPERTY 063',
    aroraCode: 'ARORA / 063',
    title: 'The Greg Norman Golf Villa',
    subtitle: 'Modernist Fairway-Front Independent Villa in Jaypee Greens',
    location: 'Sector 128, Noida-Greater Noida Expressway',
    subCity: 'Noida Expressway',
    city: 'Noida',
    coordinates: {
      lat: 28.5135,
      lng: 77.3712,
      formatted: '28°30\'48" N · 77°22\'16" E'
    },
    transactionType: 'Buy',
    category: 'Contemporary Villa',
    price: '₹ 11.50 CR',
    priceNumeric: 11.5,
    areaSqFt: 5800,
    bedrooms: 5,
    bathrooms: 6,
    parkingSpots: 4,
    floorLevel: 'G + 2 Independent Villa',
    yearBuilt: 2023,
    status: 'Ready to Move',
    description: 'Directly overlooking the 18-hole championship Greg Norman signature golf course. Designed with a clean Scandinavian and Mediterranean aesthetic featuring expansive pergolas, floor-to-ceiling glass, private plunge pool, and lush golf greens stretching as far as the eye can see.',
    highlights: [
      'Direct boundary with the 18-hole signature Greg Norman golf course',
      'Private 4,500 sq ft landscaped plot with heated swimming pool and sun deck',
      'Instant connectivity to Noida-Greater Noida Expressway and upcoming Jewar International Airport',
      'Exclusive resort club membership and equestrian centre access'
    ],
    amenities: [
      'Golf Course Frontage',
      'Private Swimming Pool',
      'Pergola BBQ Terrace',
      'Gated Golf Community',
      'Equestrian Club Access',
      'Private Covered Portico'
    ],
    images: {
      hero: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
      ]
    },
    landmarks: [
      { name: 'Jaypee Greens Golf & Spa Resort', distance: '400 M', category: 'Lifestyle' },
      { name: 'Jaypee Hospital', distance: '1.2 KM', category: 'Healthcare' },
      { name: 'Step by Step School', distance: '2.1 KM', category: 'Education' },
      { name: 'Upcoming Jewar International Airport (DXN)', distance: '38 MIN', category: 'Transport' }
    ],
    floorPlans: [
      {
        id: 'fp-jg-villa',
        title: 'Ground & Upper Villa Blueprint',
        level: 'Tri-Level',
        areaSqFt: 5800,
        bedrooms: 5,
        bathrooms: 6,
        description: 'Features triple living salons, private study, 5 bedroom chambers, chef pantry, and wide golf-view verandas.',
        svgType: 'villa'
      }
    ],
    featured: false,
    editorialCuratorNote: 'With the imminent opening of the Noida International Airport at Jewar, the Sector 128 expressway corridor is experiencing substantial institutional investment.'
  },
  {
    id: 'dlf-phase-5-designer-rental',
    refNumber: 'PROPERTY 042',
    aroraCode: 'ARORA / 042',
    title: 'The Belaire Sky Suite',
    subtitle: 'Fully Furnished Designer 4-BHK Turnkey Residence for Lease',
    location: 'DLF Phase 5, Golf Course Road',
    subCity: 'Golf Course Road',
    city: 'Gurugram',
    coordinates: {
      lat: 28.4552,
      lng: 77.0988,
      formatted: '28°27\'18" N · 77°05\'55" E'
    },
    transactionType: 'Rent',
    category: 'Luxury Residence',
    price: '₹ 3.85 L / MO',
    priceNumeric: 0.0385,
    areaSqFt: 4150,
    bedrooms: 4,
    bathrooms: 5,
    parkingSpots: 2,
    floorLevel: '24th Floor',
    yearBuilt: 2024,
    status: 'Ready to Move',
    description: 'Exclusively curated for expatriate executives and family relocations. Completely furnished with custom Italian pieces, Poliform wardrobes, sub-zero refrigeration, and comprehensive home automation.',
    highlights: [
      'Turnkey ready with designer imported furniture and art curation',
      'Panoramic Aravalli ridge views from high-elevation 24th floor',
      'Dedicated maintenance engineer and weekly concierge services included',
      'Immediate access to Golf Course Road rapid transit and commercial hubs'
    ],
    amenities: [
      'Fully Furnished Turnkey',
      'Poliform Fitted Closets',
      'Sub-Zero Appliances',
      'Private Clubhouse Access',
      'Tennis & Squash Courts',
      '24/7 Security Patrol'
    ],
    images: {
      hero: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
      ]
    },
    landmarks: [
      { name: 'South Point Mall', distance: '600 M', category: 'Lifestyle' },
      { name: 'Sector 53-54 Rapid Metro', distance: '400 M', category: 'Transport' },
      { name: 'DLF Cyber City', distance: '5.2 KM', category: 'Business' }
    ],
    floorPlans: [
      {
        id: 'fp-belaire',
        title: 'Sky Suite Floor Layout',
        level: '24th Floor',
        areaSqFt: 4150,
        bedrooms: 4,
        bathrooms: 5,
        description: 'Formal and casual living zones, master wing with panoramic corner glass, 3 additional suites, and staff area.',
        svgType: 'floor'
      }
    ],
    featured: false,
    editorialCuratorNote: 'A premier rental option for international corporate leadership demanding impeccable quality and zero relocation friction.'
  }
];

export const LOCATION_GUIDES: LocationGuide[] = [
  {
    id: 'golf-course-road',
    name: 'Golf Course Road & DLF Phase 5',
    state: 'Gurugram',
    tagline: 'The Financial & Super-Luxury Capital of Northern India',
    propertyCount: 38,
    avgSizeSqFt: 5400,
    avgPriceCr: '₹ 18.5 Cr',
    coordinates: '28.46° N · 77.09° E',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
    description: 'Home to The Camellias, The Magnolias, and The Aralias. Widely regarded as the most sought-after ultra-luxury residential and Grade-A commercial corridor in India.',
    keyNeighbourhoods: ['DLF Phase 5', 'Sector 42', 'Horizon Center District', 'DLF Phase 1']
  },
  {
    id: 'lutyens-central-delhi',
    name: 'Lutyens\' & Central Delhi',
    state: 'New Delhi',
    tagline: 'Colonial Elegance & Sovereign Diplomatic Permanence',
    propertyCount: 14,
    avgSizeSqFt: 8200,
    avgPriceCr: '₹ 65.0 Cr',
    coordinates: '28.60° N · 77.22° E',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80',
    description: 'The political and historical epicenter of India. Characterized by wide tree-lined boulevards, monumental architecture, private bungalows, and historic heritage estates.',
    keyNeighbourhoods: ['Amrita Shergill Marg', 'Prithviraj Road', 'Golf Links', 'Sunder Nagar', 'Jor Bagh']
  },
  {
    id: 'south-delhi-prime',
    name: 'South Delhi Prime Enclaves',
    state: 'New Delhi',
    tagline: 'Discreet Wealth, Boutique Living & Private Floors',
    propertyCount: 42,
    avgSizeSqFt: 4600,
    avgPriceCr: '₹ 15.8 Cr',
    coordinates: '28.55° N · 77.21° E',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    description: 'The preferred choice for legacy Delhi families and industrialists seeking freehold plot sovereignty, independent designer floors, and leafy neighborhood club lifestyle.',
    keyNeighbourhoods: ['Panchsheel Park', 'Shanti Niketan', 'Vasant Vihar', 'Greater Kailash', 'Friends Colony']
  },
  {
    id: 'noida-expressway',
    name: 'Noida Expressway & Jaypee Greens',
    state: 'Noida NCR',
    tagline: 'Master-Planned Golf Estates & Infrastructure Growth',
    propertyCount: 26,
    avgSizeSqFt: 5100,
    avgPriceCr: '₹ 9.4 Cr',
    coordinates: '28.51° N · 77.37° E',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000&q=80',
    description: 'Sprawling green fairways, integrated luxury villas, and direct highway corridors connecting to the upcoming Jewar International Airport.',
    keyNeighbourhoods: ['Sector 128', 'Jaypee Greens', 'Sector 132', 'Noida-Greater Noida Expressway']
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'golf-course-road-dynamics-2026',
    title: 'The Elevation of Golf Course Road: Capital Appreciation & Micro-Market Dynamics',
    slug: 'elevation-of-golf-course-road',
    category: 'Market Intelligence',
    date: 'March 2026',
    readTime: '6 min read',
    excerpt: 'An empirical analysis of capital values crossing ₹ 35,000 to ₹ 65,000 per sq ft in Gurugram’s prime residential strip, and what this signals for long-term luxury liquidity.',
    content: [
      'Over the past thirty-six months, the micro-market surrounding Golf Course Road in Gurugram has witnessed a fundamental repricing. Where transactions once mirrored regional cyclical patterns, assets within tier-one developments—notably The Camellias and The Magnolias—have decoupled from broader macroeconomic headwinds.',
      'Three critical structural drivers explain this shift: first, severe land scarcity along the prime DLF Phase 5 arterial; second, the consolidation of multinational corporate headquarters at One Horizon Center; and third, an influx of repatriating high-net-worth capital demanding international condominium amenities.',
      'Our advisory perspective indicates that while annualized percentage appreciation may normalize toward sustainable single-digit figures, baseline liquidity for pristine units will remain exceptionally robust through 2030.'
    ],
    author: {
      name: 'Rahul Arora',
      role: 'Founder & Managing Partner'
    }
  },
  {
    id: 'south-delhi-freehold-floors-vs-condominiums',
    title: 'Private Floors vs High-Rise Condominiums: The Spatial Philosophy of Delhi NCR',
    slug: 'private-floors-vs-condominiums',
    category: 'Spatial Advisory',
    date: 'February 2026',
    readTime: '5 min read',
    excerpt: 'Examining the cultural and financial divergence between South Delhi’s freehold independent floors and Gurugram’s serviced luxury towers.',
    content: [
      'The choice between an independent floor in South Delhi (Panchsheel Park, Vasant Vihar, Shanti Niketan) and a serviced sky residence in Gurugram is rarely an equation of price per square foot alone. It is an expression of philosophical preference regarding sovereignty versus shared governance.',
      'Independent floors offer land ownership proportion, complete structural autonomy, and intimate neighborhood familiarity. Conversely, high-rise condominiums provide institutional 3-tier perimeter security, uninterrupted power grids, and resort-caliber hospitality infrastructure.',
      'For family offices balancing multi-generational inheritance with privacy, our team recommends evaluating ongoing governance overhead alongside underlying plot appreciation.'
    ],
    author: {
      name: 'Meera Singhania',
      role: 'Senior Director — Ultra-Prime Residential'
    }
  },
  {
    id: 'commercial-grade-a-yields',
    title: 'Grade-A Commercial Assets: Hedging Inflation Through Institutional Leases',
    slug: 'commercial-grade-a-yields',
    category: 'Investment Advisory',
    date: 'January 2026',
    readTime: '7 min read',
    excerpt: 'How private family offices are deploying capital into pre-leased corporate floorplates to achieve 8%+ gross yields with blue-chip covenant guarantees.',
    content: [
      'Institutional commercial real estate in Delhi NCR continues to outperform conventional fixed-income instruments when measured across a rolling 7-year horizon.',
      'With foreign direct investment concentrating in tech-enabled and financial service clusters, vacancy rates for Grade-A institutional buildings with LEED Platinum certification remain below 4.5% across prime Gurugram corridors.',
      'Key considerations before entering pre-leased transactions include lock-in expiry timelines, rental escalation clauses (typically 15% every 36 months), and property management expense-loading structures.'
    ],
    author: {
      name: 'Vikramaditya Sen',
      role: 'Head of Commercial & Institutional Assets'
    }
  }
];

export const ADVISORS: Advisor[] = [
  {
    id: 'rahul-arora',
    name: 'Rahul Arora',
    role: 'Managing Partner & Founder',
    specialization: 'Ultra-Prime Residential & Trophy Acquisitions',
    phone: '+91 98110 42800',
    email: 'r.arora@aroraproperties.in',
    experienceYears: 18,
    focusArea: 'Lutyens\' Delhi & DLF Phase 5',
    bio: 'With nearly two decades advising business leaders, diplomats, and industrialists across South Asia, Rahul established Arora Properties to bring transparency, architectural rigor, and discreet private advisory to luxury real estate.'
  },
  {
    id: 'meera-singhania',
    name: 'Meera Singhania',
    role: 'Senior Director — Prime Residential',
    specialization: 'South Delhi Independent Floors & Heritage Enclaves',
    phone: '+91 98101 54920',
    email: 'm.singhania@aroraproperties.in',
    experienceYears: 14,
    focusArea: 'Panchsheel Park, Vasant Vihar & Golf Links',
    bio: 'Meera leads our South Delhi private advisory practice. Her deep mastery of title verification, municipal zoning ordinances, and private off-market listings provides clients an invaluable strategic advantage.'
  },
  {
    id: 'vikramaditya-sen',
    name: 'Vikramaditya Sen',
    role: 'Head of Commercial Acquisitions',
    specialization: 'Institutional Grade-A Offices & Land Parcels',
    phone: '+91 98712 88310',
    email: 'v.sen@aroraproperties.in',
    experienceYears: 16,
    focusArea: 'Cyber City, Golf Course Road & Expressway',
    bio: 'Formerly director of institutional investments at a global property consultancy, Vikramaditya oversees commercial leasing, family office acquisitions, and high-yield structured real estate portfolios.'
  }
];

export const TRUST_PILLARS = [
  {
    number: '01',
    title: 'LOCAL KNOWLEDGE',
    deck: 'Deep empirical understanding of the micro-markets we serve across New Delhi, Gurugram, and Noida.'
  },
  {
    number: '02',
    title: 'CURATED PORTFOLIO',
    deck: 'Strictly vetted properties rather than thousands of unverified listings. Every asset meets architectural and title benchmarks.'
  },
  {
    number: '03',
    title: 'PRIVATE GUIDANCE',
    deck: 'End-to-end discrete advisory from initial spatial discovery and legal diligence through to final registration.'
  },
  {
    number: '04',
    title: 'TRANSPARENT PROCESS',
    deck: 'No obscured encumbrances or artificial price markups. Direct negotiations grounded in verified sales comps.'
  },
  {
    number: '05',
    title: 'INSTITUTIONAL RIGOR',
    deck: 'Advising on residential, commercial, and investment holdings with the analytical precision of a private wealth office.'
  }
];

export const SELLER_STEPS = [
  {
    step: '01',
    title: 'PROPERTY ASSESSMENT',
    description: 'Thorough spatial inspection, title verification, architectural documentation, and professional valuation.'
  },
  {
    step: '02',
    title: 'MARKET POSITIONING',
    description: 'Determining optimal price discovery based on recent comparable transactions and micro-market absorption trends.'
  },
  {
    step: '03',
    title: 'ARCHITECTURAL MARKETING',
    description: 'Editorial photography, architectural floor plans, high-fidelity video monographs, and private dossier creation.'
  },
  {
    step: '04',
    title: 'QUALIFIED BUYERS',
    description: 'Private introductions exclusively to vetted high-net-worth purchasers and family office representatives.'
  },
  {
    step: '05',
    title: 'NEGOTIATION & TERMS',
    description: 'Expert advocacy ensuring fair transaction structuring, payment schedule safety, and mutual alignment.'
  },
  {
    step: '06',
    title: 'CLOSING & CONVEYANCE',
    description: 'Complete legal diligence, clear title clearance, stamp duty coordination, and official registrar conveyance.'
  }
];

export const TESTIMONIALS = [
  {
    id: 't-1',
    quote: 'From our first viewing to the final paperwork at the registrar, the entire process felt exceptionally clear. Arora Properties approaches real estate with the intellectual rigor of a private family bank.',
    author: 'Rajiv Mehra',
    designation: 'Managing Director, Horizon Equity Partners',
    context: 'RESIDENTIAL PURCHASE · THE CAMELLIAS, GURUGRAM'
  },
  {
    id: 't-2',
    quote: 'Selling a legacy property in South Delhi is fraught with emotional and legal complexities. Rahul and his advisory team structured the positioning with absolute discretion and achieved our target valuation in under 40 days.',
    author: 'Suniti Chawla',
    designation: 'Architect & Collector',
    context: 'ESTATE CONVEYANCE · PANCHSHEEL PARK, NEW DELHI'
  },
  {
    id: 't-3',
    quote: 'Their advisory on our 24,000 sq ft corporate office acquisition on Golf Course Road was indispensable. Vikramaditya’s micro-market comps saved us millions in the long-term lease restructuring.',
    author: 'Aditya Oberoi',
    designation: 'Chief Executive Officer, Astra Global Technologies',
    context: 'COMMERCIAL ACQUISITION · ONE HORIZON CENTER'
  }
];
