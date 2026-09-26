import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Clock } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    phone: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F8F9FA] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Large Rounded Container matching Screenshot 9 */}
        <div className="bg-white rounded-[32px] border border-neutral-200/90 shadow-sm p-8 sm:p-14 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Info & Kicker */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-800 shadow-2xs mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#E24B3C]" />
                  <span>Contact</span>
                </div>

                <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-[#1c1c1e] leading-[1.1] mb-8">
                  Let’s Solve Your
                  <br />
                  Plumbing Today.
                </h2>

                <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed mb-10">
                  Immediate 24/7 master plumber dispatch across Greater Austin. Reach our direct line or submit your inquiry for a guaranteed 10-minute callback.
                </p>
              </div>

              {/* Contact Information Blocks with Rounded Icon Containers matching Screenshot 9 */}
              <div className="space-y-6">
                <a
                  href="mailto:service@apexflowplumbing.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-neutral-100 group-hover:bg-neutral-200 text-neutral-800 flex items-center justify-center transition-colors shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      E-mail address
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-neutral-900 group-hover:text-[#E24B3C] transition-colors">
                      service@apexflowplumbing.com
                    </div>
                  </div>
                </a>

                <a href="tel:5128904100" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-100 group-hover:bg-neutral-200 text-neutral-800 flex items-center justify-center transition-colors shrink-0">
                    <Phone className="w-5 h-5 text-[#E24B3C]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      Direct Dispatch Hotline (24/7)
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-neutral-900 group-hover:text-[#E24B3C] transition-colors">
                      (512) 890-4100
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-100 text-neutral-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      Austin Central Dispatch
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-neutral-900">
                      3401 Industrial Terrace, Austin, TX 78758
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-100 text-neutral-800 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      Operating Hours
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-neutral-900">
                      Open 24 Hours · 7 Days a Week · Zero Overtime Fees
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Underline Form matching Screenshot 9 */}
            <div className="lg:col-span-7">
              <h3 className="font-display text-2xl font-medium text-neutral-900 mb-8">Fill this form below</h3>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-950 mb-2">
                    Dispatch Request Received
                  </h4>
                  <p className="text-sm text-emerald-800 max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Our on-duty master dispatcher has prioritized your request and will call <strong>{formData.phone}</strong> within 10 minutes.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', service: '', phone: '', email: '' });
                    }}
                    className="mt-6 px-6 py-2.5 text-xs font-semibold bg-emerald-800 text-white rounded-full hover:bg-emerald-900 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Your Name */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2">
                        YOUR NAME
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your name"
                        className="w-full bg-transparent border-b border-neutral-300 py-3 text-neutral-900 placeholder:text-neutral-400 text-sm focus:outline-none focus:border-neutral-900 transition-colors"
                      />
                    </div>

                    {/* Service Needed */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2">
                        SERVICE NEEDED / PROPERTY TYPE
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        placeholder="e.g. Water heater leak, burst pipe, sewer backup"
                        className="w-full bg-transparent border-b border-neutral-300 py-3 text-neutral-900 placeholder:text-neutral-400 text-sm focus:outline-none focus:border-neutral-900 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Your Phone */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2">
                        YOUR PHONE
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(512) 000-0000"
                        className="w-full bg-transparent border-b border-neutral-300 py-3 text-neutral-900 placeholder:text-neutral-400 text-sm focus:outline-none focus:border-neutral-900 transition-colors"
                      />
                    </div>

                    {/* Your Email */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2">
                        YOUR EMAIL / ADDRESS
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@gmail.com"
                        className="w-full bg-transparent border-b border-neutral-300 py-3 text-neutral-900 placeholder:text-neutral-400 text-sm focus:outline-none focus:border-neutral-900 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Submit Button matching Screenshot 9 */}
                  <div className="flex justify-end pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-10 py-4 rounded-full bg-[#18181B] hover:bg-black text-white text-sm font-semibold transition-all shadow-md active:scale-95 cursor-pointer disabled:opacity-50"
                    >
                      {loading ? 'Transmitting Request...' : 'Submit Message'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
