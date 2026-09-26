import React from 'react';
import { ArrowDown, ShieldCheck, Clock, Award } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  const scrollToMore = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden hero-mesh-gradient border-b border-neutral-200/60"
    >
      {/* Ambient background glow aura matching the screenshot */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[450px] md:h-[600px] rounded-full blur-3xl pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(255, 120, 105, 0.22) 0%, rgba(255, 160, 145, 0.12) 40%, rgba(255, 255, 255, 0) 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Main Headline - Space Grotesk font-medium matching reference */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.85rem] font-medium tracking-tight text-[#1c1c1e] leading-[1.06] max-w-5xl mx-auto text-balance">
          You Didn’t Build Your Home to Lose Sleep Over Plumbing Leaks.
        </h1>

        {/* Descriptive Subtitle - Inter font-medium */}
        <p className="mt-8 lg:mt-10 text-[15px] lg:text-[17px] text-[#4a4a4c] max-w-3xl mx-auto font-medium leading-relaxed">
          Our licensed master plumbers answer every call 24/7, pinpoint issues with surgical accuracy, and guarantee upfront fixed quotes — with absolute zero mess left behind.
        </p>

        {/* Action Buttons Matching Screenshot */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onExploreServices}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#18181B] text-white text-sm md:text-base font-semibold shadow-md hover:bg-black hover:shadow-lg transition-all transform active:scale-95"
          >
            Explore Services
          </button>
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-neutral-900 border border-neutral-200 text-sm md:text-base font-semibold shadow-xs hover:bg-neutral-50 hover:border-neutral-300 transition-all transform active:scale-95"
          >
            View Upfront Pricing
          </button>
        </div>

        {/* Floating "Scroll for more" Pill matching Screenshot 2 */}
        <div className="mt-14 flex justify-center">
          <button
            onClick={scrollToMore}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/90 border border-neutral-200/90 text-xs font-medium text-neutral-700 shadow-xs hover:bg-white hover:text-neutral-900 hover:shadow-sm transition-all group"
          >
            <span>Scroll for more</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#E24B3C] group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Fast Assurance Indicators */}
        <div className="mt-12 pt-8 border-t border-neutral-200/60 grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-3xl mx-auto text-xs text-neutral-600">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#E24B3C] shrink-0" />
            <span><strong>45-Min</strong> Emergency Response</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#E24B3C] shrink-0" />
            <span><strong>Fixed Price</strong> Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#E24B3C] shrink-0" />
            <span><strong>Master License</strong> #M-42910</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
            <span><strong>Zero-Mess</strong> Cleanliness Rule</span>
          </div>
        </div>
      </div>

      {/* Brand Trust Bar matching Reference Image 2: Single continuous horizontal row with text on left and 5 brand columns */}
      <div className="mt-20 border-t border-neutral-200/80 bg-[#F4F4F6]/60 backdrop-blur-xs py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <div className="text-left w-full md:w-auto shrink-0">
            <p className="text-[13px] md:text-sm text-neutral-500 font-medium leading-snug">
              Trusted by 100+
              <br />
              top-tier brands
            </p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:flex md:items-center md:justify-around gap-6 md:gap-4">
            {['ACME Corp', 'LUMINA', 'NOVA', 'VERTEX', 'QUANTUM'].map((brand) => (
              <span
                key={brand}
                className="font-display text-sm md:text-base lg:text-lg font-bold tracking-wider text-neutral-400/90 hover:text-neutral-700 transition-colors uppercase text-center select-none"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
