export type TransactionType = 'Buy' | 'Rent' | 'Commercial';

export type PropertyCategory = 
  | 'Luxury Residence'
  | 'Penthouse'
  | 'Contemporary Villa'
  | 'Independent Floor'
  | 'Heritage Duplex'
  | 'Grade A Office'
  | 'Prime Retail';

export interface LandmarkDistance {
  name: string;
  distance: string;
  category: 'Transport' | 'Education' | 'Healthcare' | 'Lifestyle' | 'Business';
}

export interface FloorPlan {
  id: string;
  title: string;
  level: string;
  areaSqFt: number;
  bedrooms?: number;
  bathrooms?: number;
  description: string;
  svgType: 'penthouse' | 'villa' | 'floor' | 'commercial';
}

export interface Property {
  id: string;
  refNumber: string; // e.g. "PROPERTY 024"
  aroraCode: string; // e.g. "ARORA / 024"
  title: string;
  subtitle: string;
  location: string;
  subCity: string;
  city: string;
  coordinates: {
    lat: number;
    lng: number;
    formatted: string;
  };
  transactionType: TransactionType;
  category: PropertyCategory;
  price: string;
  priceNumeric: number; // In Crores or monthly Lakhs
  priceSubtext?: string;
  areaSqFt: number;
  bedrooms: number;
  bathrooms: number;
  parkingSpots: number;
  floorLevel: string;
  yearBuilt: number;
  status: 'Ready to Move' | 'Immediate Possession' | 'Under Development (2026)';
  description: string;
  highlights: string[];
  amenities: string[];
  images: {
    hero: string;
    gallery: string[];
  };
  landmarks: LandmarkDistance[];
  floorPlans: FloorPlan[];
  featured?: boolean;
  editorialCuratorNote?: string;
}

export interface LocationGuide {
  id: string;
  name: string;
  state: string;
  tagline: string;
  propertyCount: number;
  avgSizeSqFt: number;
  avgPriceCr: string;
  image: string;
  coordinates: string;
  description: string;
  keyNeighbourhoods: string[];
}

export interface JournalArticle {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  author: {
    name: string;
    role: string;
  };
}

export interface Advisor {
  id: string;
  name: string;
  role: string;
  specialization: string;
  phone: string;
  email: string;
  experienceYears: number;
  focusArea: string;
  bio: string;
}

export interface FilterState {
  transaction: TransactionType | 'All';
  location: string;
  propertyType: string;
  minPrice: number;
  maxPrice: number;
  bedrooms: string;
  searchQuery: string;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'area-desc';
}
