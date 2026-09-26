import React, { useState } from 'react';
import { Search, Zap, Rocket, ChevronLeft, ChevronRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [scrollIndex, setScrollIndex] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Discover & Scope',
      duration: '30-45 MINS',
      icon: Search,
      iconBg: 'bg-rose-50 text-[#E24B3C]',
      description:
        'We pinpoint the root failure with 4K optic pipe scopes and electronic acoustic listening tools. You receive an upfront written diagnostic report before any wrench turns.',
      deliverables: ['Full 4K camera pipe footage', 'Transparent fixed-price quote', 'Code violation check'],
    },
    {
      num: '02',
      title: 'Precision Surgical Repair',
      duration: 'SAME DAY',
      icon: Zap,
      iconBg: 'bg-orange-50 text-amber-600',
      description:
        'Licensed master plumbers lay neoprene floor protective runners and perform exact code-compliant repairs with commercial-grade Viega ProPress brass and type-L copper.',
      deliverables: ['Zero-mess workspace protection', 'Lead-free heavy brass fittings', 'Licensed master technicians'],
    },
    {
      num: '03',
      title: 'Hydro-Test & Warranty',
      duration: '100% VERIFIED',
      icon: ShieldCheck,
      iconBg: 'bg-emerald-50 text-emerald-600',
      description:
        'Every repair undergoes a 15-minute hydrostatic pressure hold test, full area sanitization, and official issuance of our 10-Year Transferable Craftsmanship Guarantee.',
      deliverables: ['Static pressure gauge hold test', 'Signed 10-year warranty certificate', 'Digital customer archive'],
    },
    {
      num: '04',
      title: 'Proactive Health Check',
      duration: 'ANNUAL COMP',
      icon: Rocket,
      iconBg: 'bg-blue-50 text-blue-600',
      description:
        'Our smart monitoring program includes automated yearly water hardness tests, water heater anode inspection, and main shut-off valve servicing to stop emergencies early.',
      deliverables: ['Annual water quality report', 'Emergency valve tagging', 'Priority dispatch hotline'],
    },
  ];

  const handlePrev = () => {
    setScrollIndex((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
  };

  const handleNext = () => {
    setScrollIndex((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="process" className="py-20 md:py-28 bg-[#F8F9FA] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header with Pill & Navigation Controls matching Screenshot 6 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-neutral-200 text-xs font-semibold text-neutral-800 shadow-2xs mb-4">
              <span className="w-2 h-2 rounded-full bg-[#E24B3C]" />
              <span>Process</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-[#1c1c1e] leading-[1.1]">
              From Inspection
              <br />
              to Guaranteed Fix
            </h2>
          </div>

          {/* Slider Buttons matching Screenshot 6 */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous step"
              className="w-12 h-12 rounded-full bg-white border border-neutral-200 shadow-2xs hover:bg-neutral-100 flex items-center justify-center text-neutral-700 hover:text-neutral-900 transition-all active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next step"
              className="w-12 h-12 rounded-full bg-[#18181B] hover:bg-black text-white shadow-sm flex items-center justify-center transition-all active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.slice(0, 3).map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white rounded-[28px] p-8 border border-neutral-200/90 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon badge matching reference */}
                  <div
                    className={`w-12 h-12 rounded-2xl ${step.iconBg} flex items-center justify-center mb-6 shadow-2xs transition-transform group-hover:scale-105`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-display text-xl font-medium tracking-tight text-neutral-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed font-normal mb-6">
                    {step.description}
                  </p>

                  <div className="space-y-2 mb-6 pt-4 border-t border-neutral-100">
                    {step.deliverables.map((d, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-neutral-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E24B3C] shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom line: Duration & Big Number */}
                <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    {step.duration}
                  </span>
                  <span className="text-3xl font-extrabold text-neutral-200 font-mono select-none">
                    {step.num}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
