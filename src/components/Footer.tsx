import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="relative bg-[#F8F9FA] pt-20 pb-12 border-t border-neutral-200/70 overflow-hidden">
      {/* Giant Subtle Watermark matching Screenshot 10 */}
      <div className="font-display absolute bottom-6 left-1/2 -translate-x-1/2 text-[14vw] font-medium text-neutral-200/40 select-none pointer-events-none tracking-tighter whitespace-nowrap -z-0">
        Apex Flow
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start pb-16 border-b border-neutral-200/80">
          {/* Left Column: Brand & Bio */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-7 h-7 rounded-full border border-neutral-300 bg-gradient-to-tr from-neutral-800 via-neutral-600 to-neutral-200 shadow-xs flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-white" />
              </div>
              <span className="font-display text-xl font-semibold tracking-tight text-neutral-900">
                Apex Flow
              </span>
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed font-normal max-w-sm mb-8">
              Your master plumbing emergency team on demand. We diagnose, repair, and engineer modern residential and commercial mechanical systems so you never lose sleep over leaks.
            </p>

            <div className="space-y-3.5 text-xs text-neutral-700">
              <a
                href="mailto:service@apexflowplumbing.com"
                className="flex items-center gap-3 hover:text-neutral-950 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-700 shadow-2xs">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>service@apexflowplumbing.com</span>
              </a>

              <a
                href="tel:5128904100"
                className="flex items-center gap-3 hover:text-neutral-950 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-700 shadow-2xs">
                  <Phone className="w-3.5 h-3.5 text-[#E24B3C]" />
                </div>
                <span>(512) 890-4100</span>
              </a>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-700 shadow-2xs">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>Austin, Texas, USA · Licensed Texas Master Plumber #M-42910</span>
              </div>
            </div>
          </div>

          {/* Middle Column: Services Directory */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-bold text-neutral-900 tracking-tight mb-5">Services</h4>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li>
                <a href="#services" className="hover:text-neutral-950 transition-colors">
                  24/7 Emergency Dispatch
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-neutral-950 transition-colors">
                  Trenchless Sewer Relining
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-neutral-950 transition-colors">
                  Tankless Water Heater Install
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-neutral-950 transition-colors">
                  Acoustic Slab Leak Detection
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-neutral-950 transition-colors">
                  Hydro-Jetting Drain Service
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-neutral-950 transition-colors">
                  Whole-Home Copper Repiping
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column: Dark Card matching Screenshot 10 */}
          <div className="md:col-span-4">
            <div className="bg-[#18181B] text-white rounded-[28px] p-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div>
                <h4 className="font-display text-xl font-medium text-white mb-2">Emergency on site?</h4>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Book immediate priority dispatch or speak with our lead Texas master plumber right now.
                </p>
              </div>

              <div className="mt-8">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3.5 px-6 rounded-full bg-white hover:bg-neutral-100 text-neutral-900 text-sm font-bold transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 group"
                >
                  <span>Dispatch a Plumber</span>
                  <ArrowRight className="w-4 h-4 text-[#E24B3C] group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="mt-3 text-center">
                  <a
                    href="tel:5128904100"
                    className="text-xs font-semibold text-neutral-400 hover:text-white transition-colors"
                  >
                    Direct Line: (512) 890-4100
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & certification bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} Apex Flow Mechanical LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Regulated by Texas State Board of Plumbing Examiners</span>
            <span>·</span>
            <span>TSBPE License #M-42910</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
