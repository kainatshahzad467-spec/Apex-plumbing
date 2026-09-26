import React from 'react';
import { Award, CheckCircle, ShieldCheck, Wrench } from 'lucide-react';

interface PhotoShowcaseProps {
  onOpenBooking: () => void;
}

export const PhotoShowcase: React.FC<PhotoShowcaseProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 bg-[#F4F4F6] border-y border-neutral-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-neutral-200 text-xs font-semibold text-neutral-800 shadow-2xs mb-4">
              <span className="w-2 h-2 rounded-full bg-[#E24B3C]" />
              <span>Certified Field Standards</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-[#1c1c1e] leading-[1.1]">
              Architectural Rigor.
              <br />
              Zero Compromise.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-600 max-w-md font-normal leading-relaxed">
            Every manifold, pressure regulator, and heater assembly is executed with millimeter-precise alignment, premium Viega ProPress brass, and rigid hydrostatic testing.
          </p>
        </div>

        {/* 2 High-Fidelity Photographic Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Tankless & Mechanical Excellence */}
          <div className="bg-white rounded-[28px] overflow-hidden border border-neutral-200/90 shadow-2xs flex flex-col group">
            <div className="relative aspect-16/10 overflow-hidden bg-neutral-100">
              <img
                src="/src/assets/images/hero_plumbing_system_1790411549913.jpg"
                alt="High-end tankless water heater and brass copper mechanical plumbing manifold"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-semibold tracking-wide">
                  Mechanical Room Architecture
                </span>
              </div>
            </div>

            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-medium text-neutral-900 mb-2">
                  High-Efficiency Mechanical Systems
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Precision piped with certified copper and lead-free brass. We build mechanical installations that increase property value and operate with silent efficiency for decades.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-700">
                <span className="flex items-center gap-1.5">
                  <Wrench className="w-4 h-4 text-[#E24B3C]" />
                  Navien & Rinnai Certified
                </span>
                <span className="text-[#E24B3C]">15-Yr Heat Exchanger Warranty</span>
              </div>
            </div>
          </div>

          {/* Card 2: Master Technicians at Work */}
          <div className="bg-white rounded-[28px] overflow-hidden border border-neutral-200/90 shadow-2xs flex flex-col group">
            <div className="relative aspect-16/10 overflow-hidden bg-neutral-100">
              <img
                src="/src/assets/images/plumber_technician_1790411570017.jpg"
                alt="Licensed master plumber technician performing digital diagnostic check"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-semibold tracking-wide">
                  Certified Master Plumbers Only
                </span>
              </div>
            </div>

            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-medium text-neutral-900 mb-2">
                  Direct Field Expertise & Accountability
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  No junior apprentices learning on your home. Our leads hold master plumbing certifications, full background clearances, and drug-free compliance.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-700">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#E24B3C]" />
                  Licensed, Bonded & Insured
                </span>
                <span className="text-emerald-700">Texas License #M-42910</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
