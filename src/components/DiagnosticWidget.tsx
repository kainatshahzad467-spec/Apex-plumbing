import React, { useState } from 'react';
import { Sparkles, Send, CheckCircle, AlertTriangle, ShieldCheck, ChevronRight, UserCheck } from 'lucide-react';

interface DiagnosticWidgetProps {
  onOpenBooking: () => void;
}

interface Message {
  sender: 'bot' | 'user';
  text: string;
  estimate?: string;
  triageTip?: string;
  canDispatch?: boolean;
}

export const DiagnosticWidget: React.FC<DiagnosticWidgetProps> = ({ onOpenBooking }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: "Hi there! I'm David, Lead Master Dispatcher at Apex Flow. Select your plumbing symptom below or describe what's happening for an instant upfront diagnostic & ETA.",
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickScenarios = [
    {
      label: 'Burst Pipe / Active Leak',
      userQuery: 'I have an active burst pipe leaking water right now.',
      response:
        'CRITICAL: Please shut off your main water valve immediately (usually located near the front street curb or garage). Open an exterior hose spigot to depressurize the line. Our nearest mobile truck is in North Austin and can arrive in 35 minutes.',
      estimate: '$190 - $340 Fixed Upfront',
      triageTip: 'Turn off main water shutoff valve immediately to prevent sheetrock damage.',
    },
    {
      label: 'Water Heater Leaking / No Hot Water',
      userQuery: 'My water heater is leaking from the bottom and water is lukewarm.',
      response:
        'If water is pooling around the base tank, the inner tank lining may have fractured or the temperature & pressure (T&P) relief valve is stuck open. Turn off the gas/breaker switch and do not touch electrical connections.',
      estimate: '$160 - $280 Repair / $1,850+ Complete Replacement',
      triageTip: 'Switch breaker off and attach a garden hose to the bottom drain bib if flooding.',
    },
    {
      label: 'Main Sewer Line Backup',
      userQuery: 'Multiple toilets and tubs are gurgling and backing up water.',
      response:
        'This indicates a main trunk sewer stoppage or tree root blockage. Avoid running washing machines or dishwashers immediately to prevent sewage overflow into lowest shower basins.',
      estimate: '$250 - $480 HD Camera Scope & Clear',
      triageTip: 'Locate exterior cleanout cap in front flower bed to relieve pressure.',
    },
    {
      label: 'Low Water Pressure / Slab Leak',
      userQuery: 'Low water pressure throughout the house and warm spot on floor.',
      response:
        'A warm floor spot with pressure drop is a classic signature of an under-slab hot water manifold pinhole breach. Our non-invasive acoustic sensor can isolate the exact slab coordinate without jackhammering.',
      estimate: '$320 - $550 Diagnostic & Ultrasonic Pinpoint',
      triageTip: 'Check water meter dial on curb with all faucets closed to confirm leak.',
    },
  ];

  const handleSelectScenario = (scenario: (typeof quickScenarios)[0]) => {
    const userMsg: Message = { sender: 'user', text: scenario.userQuery };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: scenario.response,
          estimate: scenario.estimate,
          triageTip: scenario.triageTip,
          canDispatch: true,
        },
      ]);
      setIsTyping(false);
    }, 600);
  };

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    setInputValue('');
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: `Thank you for the details. Based on "${userText}", our master plumber will perform a non-invasive diagnostic check. Standard diagnostic is fully credited toward any authorized repair.`,
          estimate: '$89 Standard Diagnostic (Waived with repair)',
          triageTip: 'Keep area clear and dry so our technician can inspect immediately.',
          canDispatch: true,
        },
      ]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <section id="diagnostic" className="py-20 md:py-28 bg-[#F4F4F6] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and value propositions */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-neutral-200 text-xs font-semibold text-neutral-800 shadow-2xs mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#E24B3C]" />
              <span>Interactive Diagnostic Triage</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-[#1c1c1e] leading-[1.1] mb-6">
              Experience the Future of
              <br />
              Plumbing Care.
            </h2>

            <p className="text-base text-neutral-600 leading-relaxed font-normal mb-8">
              We don't do vague quotes or endless phone trees. Select your symptom or describe the issue to receive an immediate clinical assessment, emergency mitigation steps, and transparent price expectations.
            </p>

            {/* Bullets with red icons matching Screenshot 7 */}
            <div className="space-y-4 text-sm font-semibold text-neutral-800">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-[#E24B3C] shadow-2xs shrink-0">
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
                <span>Understands complex residential & commercial symptoms</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-[#E24B3C] shadow-2xs shrink-0">
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
                <span>Retrieves instant upfront price brackets in seconds</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-[#E24B3C] shadow-2xs shrink-0">
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
                <span>Direct link to on-call GPS technician dispatch queue</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Chat Console matching Screenshot 7 */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[28px] border border-neutral-200 shadow-lg overflow-hidden flex flex-col h-[560px]">
              {/* Dispatcher Header */}
              <div className="px-6 py-4 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/70">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E24B3C] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-neutral-900 leading-tight">
                      David Keller
                    </div>
                    <div className="text-[11px] font-semibold text-neutral-400 tracking-wider uppercase">
                      Apex Flow Lead Dispatcher
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>ONLINE & STANDBY</span>
                </div>
              </div>

              {/* Chat Message Scroll Body */}
              <div className="flex-1 p-5 overflow-y-auto space-y-4 text-sm bg-[#FAFBFB]">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex flex-col ${
                      msg.sender === 'user' ? 'items-end' : 'items-start'
                    } animate-in fade-in duration-200`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-[#18181B] text-white rounded-br-xs'
                          : 'bg-white border border-neutral-200 text-neutral-800 shadow-2xs rounded-bl-xs'
                      }`}
                    >
                      {msg.text}
                    </div>

                    {/* Rich Diagnostic Card Attached */}
                    {msg.estimate && (
                      <div className="mt-2.5 max-w-[85%] bg-amber-50/90 border border-amber-200/70 rounded-2xl p-4 text-xs space-y-2">
                        <div className="flex items-center gap-1.5 font-bold text-amber-900">
                          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                          <span>Emergency Mitigation Action</span>
                        </div>
                        <p className="text-amber-800 leading-normal">{msg.triageTip}</p>

                        <div className="pt-2 border-t border-amber-200/50 flex items-center justify-between">
                          <span className="text-neutral-600 font-medium">Estimated Pricing:</span>
                          <span className="font-bold text-neutral-900 font-mono text-sm">
                            {msg.estimate}
                          </span>
                        </div>

                        {msg.canDispatch && (
                          <button
                            onClick={onOpenBooking}
                            className="w-full mt-2 py-2 px-3 bg-[#18181B] hover:bg-black text-white font-semibold rounded-xl transition-all shadow-xs flex items-center justify-center gap-1.5"
                          >
                            <span>Dispatch On-Call Plumber (35 min ETA)</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-1 text-neutral-400 text-xs py-2">
                    <span className="w-2 h-2 rounded-full bg-neutral-300 animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-neutral-300 animate-bounce delay-100" />
                    <span className="w-2 h-2 rounded-full bg-neutral-300 animate-bounce delay-200" />
                    <span className="ml-1">David is reviewing schematics...</span>
                  </div>
                )}
              </div>

              {/* Quick Select Issue Buttons */}
              <div className="p-3 bg-white border-t border-neutral-100 overflow-x-auto flex gap-2 no-scrollbar">
                {quickScenarios.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectScenario(s)}
                    className="whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-semibold bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors shrink-0"
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              {/* Input Form at Bottom */}
              <form
                onSubmit={handleSendCustom}
                className="p-3 bg-white border-t border-neutral-100 flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Describe your issue (e.g., leaking fixture, boiler noise)..."
                  className="flex-1 text-xs sm:text-sm px-4 py-2.5 rounded-full bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#E24B3C]/30 focus:border-[#E24B3C]"
                />
                <button
                  type="submit"
                  aria-label="Send message"
                  className="w-10 h-10 rounded-full bg-[#18181B] hover:bg-black text-white flex items-center justify-center shrink-0 transition-all shadow-xs"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
