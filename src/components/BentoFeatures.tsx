import React from 'react';
import { Shield, Sparkles, Video, FileText, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface BentoFeaturesProps {
  onOpenBooking: () => void;
}

export const BentoFeatures: React.FC<BentoFeaturesProps> = ({ onOpenBooking }) => {
  const cards = [
    {
      icon: Shield,
      title: 'Hospital-Grade Zero-Mess Rule',
      description:
        'Neoprene floor track runners, sanitary boot covers, and HEPA particulate vacuums on every dispatch. We treat your hardwood, marble, and carpeting with surgical care.',
      highlight: '100% Cleanliness Guarantee',
    },
    {
      icon: Video,
      title: 'Fiber-Optic Sewer & Pipe Scans',
      description:
        'Watch your sewer lateral and drain health in high-definition 4K color. We provide recorded digital video links of all lines before and after hydro-jetting.',
      highlight: 'Cloud Video Archive Included',
    },
    {
      icon: FileText,
      title: 'Guaranteed Upfront Fixed Pricing',
      description:
        'We never meter your wallet with ticking hourly charges. You receive a guaranteed written quote before our technicians touch a tool. No surprises, ever.',
      highlight: 'Zero Overtime Surcharges',
    },
    {
      icon: Sparkles,
      title: 'Texas Master Plumber Oversight',
      description:
        'Every installation is engineered and signed off by licensed Texas Master Plumbers (#M-42910) following strict ASME, UPC, and City of Austin mechanical codes.',
      highlight: 'Fully Bonded & $2M Insured',
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-[#F8F9FA] border-t border-neutral-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-neutral-200 text-xs font-semibold text-neutral-800 shadow-2xs mb-4">
            <span className="w-2 h-2 rounded-full bg-[#E24B3C]" />
            <span>The Apex Standard</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-[#1c1c1e] leading-[1.1]">
            Engineering Quality Into
            <br />
            Every Connection.
          </h2>
        </div>

        {/* 4 Bento Cards matching Screenshot 8 styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-[28px] p-8 sm:p-10 border border-neutral-200/90 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Black rounded square icon container matching reference */}
                  <div className="w-14 h-14 rounded-2xl bg-[#18181B] text-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="font-display text-2xl font-medium tracking-tight text-neutral-900 mb-3">
                    {card.title}
                  </h3>

                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-neutral-800">
                    <CheckCircle2 className="w-4 h-4 text-[#E24B3C]" />
                    <span>{card.highlight}</span>
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="text-neutral-400 group-hover:text-neutral-900 flex items-center gap-1 font-semibold transition-colors"
                  >
                    <span>Learn details</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
