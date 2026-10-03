import React, { useState } from 'react';
import { X, Check, Shield } from 'lucide-react';

interface ListPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ListPropertyModal: React.FC<ListPropertyModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Golf Course Road, Gurugram',
    propertyType: 'Penthouse / Sky Residence',
    approximateSize: '',
    expectedPrice: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FAF8F5] border border-[#161514] p-6 sm:p-10 shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-[#E2DDD5]">
          <div className="space-y-0.5">
            <span className="font-mono text-[10px] tracking-widest text-[#71717A] uppercase block">
              PRIVATE CONVEYANCE MANDATE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#161514]">
              List Your Property with Arora
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 border border-[#161514] hover:bg-[#161514] hover:text-[#FAF8F5] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4 animate-in fade-in">
            <div className="w-12 h-12 rounded-full bg-[#161514] text-[#FAF8F5] flex items-center justify-center mx-auto">
              <Check className="w-6 h-6 stroke-[2.5]" />
            </div>
            <h4 className="font-serif text-2xl text-[#161514]">
              Listing Mandate Received
            </h4>
            <p className="font-mono text-xs text-[#52525B] max-w-md mx-auto">
              Thank you, {formData.name}. Our designated Managing Partner will contact you at {formData.phone} to coordinate the structural inspection and title dossier review.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 bg-[#161514] text-[#FAF8F5] font-mono text-xs uppercase"
            >
              CLOSE WINDOW
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-[10px] tracking-widest uppercase text-[#71717A] mb-1">
                  OWNER / PRINCIPAL NAME *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Full legal name"
                  className="w-full bg-white border border-[#D4CEBF] px-3.5 py-2.5 text-xs font-mono text-[#161514] focus:outline-none focus:border-[#161514]"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] tracking-widest uppercase text-[#71717A] mb-1">
                  DIRECT PHONE *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98..."
                  className="w-full bg-white border border-[#D4CEBF] px-3.5 py-2.5 text-xs font-mono text-[#161514] focus:outline-none focus:border-[#161514]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-[10px] tracking-widest uppercase text-[#71717A] mb-1">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@familyoffice.com"
                  className="w-full bg-white border border-[#D4CEBF] px-3.5 py-2.5 text-xs font-mono text-[#161514] focus:outline-none focus:border-[#161514]"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] tracking-widest uppercase text-[#71717A] mb-1">
                  MICRO-MARKET
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-white border border-[#D4CEBF] px-3.5 py-2.5 text-xs font-mono text-[#161514] focus:outline-none focus:border-[#161514]"
                >
                  <option value="Golf Course Road, Gurugram">Golf Course Road, Gurugram</option>
                  <option value="DLF Phase 1-5, Gurugram">DLF Phase 1-5, Gurugram</option>
                  <option value="Lutyens Bungalow Zone / Central">Lutyens' Bungalow Zone / Central</option>
                  <option value="South Delhi Enclaves (Panchsheel / Vasant Vihar)">South Delhi Enclaves</option>
                  <option value="Noida Expressway / Jaypee Greens">Noida Expressway / Jaypee Greens</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block font-mono text-[10px] tracking-widest uppercase text-[#71717A] mb-1">
                  TYPOLOGY
                </label>
                <select
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  className="w-full bg-white border border-[#D4CEBF] px-3.5 py-2.5 text-xs font-mono text-[#161514] focus:outline-none focus:border-[#161514]"
                >
                  <option value="Penthouse / Sky Residence">Penthouse</option>
                  <option value="Independent Luxury Villa">Villa</option>
                  <option value="South Delhi Independent Floor">South Delhi Floor</option>
                  <option value="Condominium Residence">Condominium</option>
                  <option value="Commercial Office Floorplate">Commercial Office</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-[10px] tracking-widest uppercase text-[#71717A] mb-1">
                  AREA SQ FT
                </label>
                <input
                  type="text"
                  value={formData.approximateSize}
                  onChange={(e) => setFormData({ ...formData, approximateSize: e.target.value })}
                  placeholder="e.g. 7,400"
                  className="w-full bg-white border border-[#D4CEBF] px-3.5 py-2.5 text-xs font-mono text-[#161514] focus:outline-none focus:border-[#161514]"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] tracking-widest uppercase text-[#71717A] mb-1">
                  EXPECTED VALUATION
                </label>
                <input
                  type="text"
                  value={formData.expectedPrice}
                  onChange={(e) => setFormData({ ...formData, expectedPrice: e.target.value })}
                  placeholder="e.g. ₹ 28 Cr"
                  className="w-full bg-white border border-[#D4CEBF] px-3.5 py-2.5 text-xs font-mono text-[#161514] focus:outline-none focus:border-[#161514]"
                />
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-[10px] font-mono text-[#71717A]">
                <Shield className="w-3.5 h-3.5" />
                <span>CONFIDENTIAL PRIVILEGED SUBMISSION</span>
              </div>

              <button
                type="submit"
                className="px-8 py-3 bg-[#161514] hover:bg-[#2A2826] text-[#FAF8F5] font-mono text-xs tracking-[0.16em] uppercase font-semibold transition-colors"
              >
                SUBMIT MANDATE →
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
