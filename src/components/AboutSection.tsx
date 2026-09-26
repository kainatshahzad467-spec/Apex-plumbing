import React from 'react';
import { Star, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F8F9FA] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Pill Kicker matching Screenshot 3 */}
        <div className="flex items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-neutral-200 text-xs font-semibold text-neutral-800 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#E24B3C]" />
            <span>About Us</span>
          </div>
        </div>

        {/* Section Headline with muted second line */}
        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#1c1c1e] leading-[1.1] mb-12">
          Master-Level Precision,
          <br />
          <span className="text-neutral-400 font-normal">Built for Longevity</span>
        </h2>

        {/* 2 Asymmetric Feature Cards matching Screenshot 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Dark Card - Austin TX Hero Anchor */}
          <div className="lg:col-span-6 bg-[#121214] text-white rounded-[28px] p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between shadow-xl min-h-[380px]">
            {/* Top status indicator */}
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1E1E22] border border-neutral-700/60 text-xs font-medium text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-[#E24B3C] animate-pulse" />
                <span>On-call fleet active 24/7/365</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-neutral-400" />
              </div>
            </div>

            {/* Center Focal Statement */}
            <div className="my-8">
              <p className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-2">
                Licensed Texas Master Plumber
              </p>
              <h3 className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-white leading-tight">
                Based in <span className="text-[#E24B3C]">Austin, Texas</span>
              </h3>
              <p className="mt-3 text-sm text-neutral-400 max-w-md font-normal leading-relaxed">
                Headquartered off Industrial Terrace. Serving Travis, Williamson, and Hays counties with rapid GPS-dispatched emergency units.
              </p>
            </div>

            {/* Bottom Action */}
            <div className="flex items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-full bg-[#27272A] hover:bg-neutral-800 text-white text-sm font-semibold border border-neutral-700/70 transition-all flex items-center gap-2 group active:scale-95"
              >
                <span>Request a Master Plumber</span>
                <ArrowRight className="w-4 h-4 text-[#E24B3C] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Background subtle radial glow */}
            <div className="absolute -bottom-16 -right-16 w-60 h-60 bg-[#E24B3C]/10 rounded-full blur-2xl pointer-events-none" />
          </div>

          {/* Right Light Card - Social Proof & 1,400+ Watermark */}
          <div className="lg:col-span-6 bg-white text-neutral-900 rounded-[28px] p-8 sm:p-12 border border-neutral-200/90 relative overflow-hidden flex flex-col justify-between shadow-2xs min-h-[380px]">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-[#E24B3C]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Reliability Benchmark
                </span>
              </div>
              <p className="text-lg sm:text-xl font-medium text-neutral-800 leading-relaxed max-w-md">
                Trusted by 1,400+ clients across 4 service sectors — diagnosing and repairing critical plumbing failures in 45 minutes or less with zero surprise markups.
              </p>
            </div>

            {/* Trustpilot Review Badge & Watermark */}
            <div className="mt-10 pt-6 border-t border-neutral-100 flex items-end justify-between relative">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-800 mb-2">
                  <Star className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                  <span>Trustpilot Certified Reviews</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-5 h-5 bg-emerald-600 flex items-center justify-center rounded-xs"
                    >
                      <Star className="w-3 h-3 text-white fill-white" />
                    </div>
                  ))}
                  <span className="ml-2 text-xs font-bold text-neutral-700">4.9 / 5.0 (380+ reviews)</span>
                </div>
              </div>

              {/* Large subtle gray watermark number matching screenshot */}
              <div className="font-display text-6xl sm:text-8xl font-medium text-neutral-100 select-none pointer-events-none tracking-tighter -mb-3">
                1,400+
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
