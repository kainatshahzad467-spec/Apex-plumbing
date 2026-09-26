import React, { useState } from 'react';
import { Gauge, Check, Sparkles, ChevronRight, Activity, Zap } from 'lucide-react';

interface ServicesStackProps {
  onOpenBooking: () => void;
}

export const ServicesStack: React.FC<ServicesStackProps> = ({ onOpenBooking }) => {
  const [activeService, setActiveService] = useState<number>(1);
  const [pressureTestActive, setPressureTestActive] = useState<boolean>(false);
  const [testedPSI, setTestedPSI] = useState<number>(55);

  const togglePressureTest = () => {
    if (pressureTestActive) {
      setPressureTestActive(false);
      setTestedPSI(55);
    } else {
      setPressureTestActive(true);
      setTestedPSI(82);
    }
  };

  const services = [
    {
      id: 1,
      num: '(01)',
      title: '24/7 Rapid Emergency Response',
      shortTitle: '24/7 Emergency Answering & Dispatch',
      description:
        'Never let an active burst pipe destroy flooring or sheetrock. Our licensed master plumbers arrive on-site in under 45 minutes with fully stocked mobile units to isolate breaches immediately.',
      tags: ['Always on 24/7', 'No overtime fees', 'Master plumbers'],
    },
    {
      id: 2,
      num: '(02)',
      title: 'Trenchless Sewer & Hydro-Jetting',
      shortTitle: 'Trenchless Sewer Restoration',
      description:
        'Clear heavy root blockages, scale, and grease backups with 4,000 PSI rotating hydro-jets and structural epoxy pipe lining that prevents costly trenching across your lawn or driveway.',
      tags: ['Zero lawn demo', '4K camera verified', '50-year warranty'],
    },
    {
      id: 3,
      num: '(03)',
      title: 'Tankless Water Heater Installation',
      shortTitle: 'Tankless & Boiler Engineering',
      description:
        'Switch to high-efficiency condensing tankless systems from Navien, Rinnai, and Rheem. Enjoy endless hot water on demand with up to 40% lower natural gas and electric utility costs.',
      tags: ['Endless hot water', 'Rebate eligible', 'Same-day install'],
    },
    {
      id: 4,
      num: '(04)',
      title: 'Acoustic & Thermal Leak Detection',
      shortTitle: 'Non-Invasive Pinhole Detection',
      description:
        'We pinpoint hidden slab leaks and pinhole copper drips through concrete foundations using acoustic ground microphones and FLIR thermal diagnostics without destructive wall demolition.',
      tags: ['Non-invasive', 'Sub-inch precision', 'Direct insurance claim docs'],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F4F4F6] border-y border-neutral-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Pill Kicker */}
        <div className="flex items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-neutral-200 text-xs font-semibold text-neutral-800 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#E24B3C]" />
            <span>Services</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Heading, intro & Physical R21 tactile monitor unit matching Screenshot 5 */}
          <div className="lg:col-span-5 sticky top-28">
            <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-[#1c1c1e] leading-[1.1]">
              How Our
              <br />
              Plumbing Works
            </h2>
            <p className="mt-5 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              We handle the diagnostic heavy lifting. You get a seamless, certified master plumbing resolution that safeguards your property, stops recurring leaks, and saves money.
            </p>

            {/* Tactile Hardware Device matching the white R21 module in Screenshot 5 */}
            <div className="mt-8 bg-gradient-to-b from-neutral-100 to-neutral-200/90 rounded-[28px] p-6 border border-white shadow-[0_16px_40px_rgba(0,0,0,0.06)] relative overflow-hidden group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#E24B3C]" />
                  <span className="text-xs font-bold text-neutral-800 uppercase tracking-wider">
                    Flow-Guard R21 Diagnostic
                  </span>
                </div>
                <span className="text-[11px] font-mono font-bold text-neutral-400">R21-PRO</span>
              </div>

              {/* Physical Dual Knob tactile styling matching reference */}
              <div className="bg-white/80 backdrop-blur-xs rounded-2xl p-5 border border-neutral-200/70 shadow-inner flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Dial 1 */}
                  <button
                    onClick={togglePressureTest}
                    title="Click to toggle test"
                    className="relative w-12 h-12 rounded-full bg-gradient-to-b from-neutral-800 to-neutral-950 shadow-[0_6px_12px_rgba(0,0,0,0.35)] flex items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-95 border border-neutral-700"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-[#E24B3C] shadow-[0_0_8px_#E24B3C]" />
                    <div className="absolute top-1 w-1 h-2 bg-neutral-400 rounded-full" />
                  </button>

                  {/* Dial 2 */}
                  <button
                    onClick={togglePressureTest}
                    title="Click to toggle test"
                    className="relative w-12 h-12 rounded-full bg-gradient-to-b from-neutral-800 to-neutral-950 shadow-[0_6px_12px_rgba(0,0,0,0.35)] flex items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-95 border border-neutral-700"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-400" />
                    <div className="absolute top-1 w-1 h-2 bg-neutral-400 rounded-full" />
                  </button>

                  <div className="ml-2">
                    <div className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">
                      Municipal Line Pressure
                    </div>
                    <div className="text-lg font-mono font-black text-neutral-900 flex items-center gap-1.5">
                      <span>{testedPSI} PSI</span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-sans font-bold ${
                          pressureTestActive
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-emerald-100 text-emerald-800'
                        }`}
                      >
                        {pressureTestActive ? 'Pressure Spike' : 'Optimal Flow'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-neutral-400 font-bold block">TEST SENSOR</span>
                  <button
                    onClick={togglePressureTest}
                    className="mt-1 text-xs font-semibold text-[#E24B3C] hover:underline flex items-center gap-1"
                  >
                    <span>{pressureTestActive ? 'Reset Test' : 'Simulate Spike'}</span>
                  </button>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between text-[11px] text-neutral-500">
                <span>Direct Telemetry to Master Van</span>
                <span className="font-mono text-neutral-700 font-bold">CALIBRATED 2026</span>
              </div>
            </div>
          </div>

          {/* Right Column: Stacked Cards matching Screenshot 4 & 5 */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {services.map((service) => {
              const isActive = activeService === service.id;

              return (
                <div
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`rounded-[26px] cursor-pointer transition-all duration-300 relative overflow-hidden ${
                    isActive
                      ? 'bg-[#18181B] text-white p-8 sm:p-9 shadow-xl scale-[1.01]'
                      : 'bg-white hover:bg-neutral-50/90 text-neutral-800 p-6 sm:p-7 border border-neutral-200/80 shadow-2xs'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-xs font-bold tracking-widest font-mono ${
                            isActive ? 'text-neutral-400' : 'text-neutral-400'
                          }`}
                        >
                          {service.num}
                        </span>
                        <h3
                          className={`font-display text-xl sm:text-2xl font-medium tracking-tight ${
                            isActive ? 'text-white' : 'text-neutral-800'
                          }`}
                        >
                          {isActive ? service.title : service.shortTitle}
                        </h3>
                      </div>

                      {isActive && (
                        <div className="mt-4 animate-in fade-in duration-300">
                          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal max-w-xl">
                            {service.description}
                          </p>

                          {/* Pill badges on dark card */}
                          <div className="mt-6 flex flex-wrap items-center gap-2">
                            {service.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3.5 py-1.5 rounded-full bg-[#27272A] border border-neutral-700/60 text-xs font-medium text-neutral-200"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="mt-7 pt-5 border-t border-neutral-800 flex items-center justify-between">
                            <span className="text-xs text-neutral-400">
                              Estimated on-site time: <strong>45 mins</strong>
                            </span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onOpenBooking();
                              }}
                              className="px-5 py-2 text-xs font-semibold bg-white text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors shadow-xs"
                            >
                              Dispatch for This Service
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="shrink-0 ml-4">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform ${
                          isActive
                            ? 'bg-neutral-800 text-white rotate-90'
                            : 'bg-neutral-100 text-neutral-500 hover:text-neutral-800'
                        }`}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
