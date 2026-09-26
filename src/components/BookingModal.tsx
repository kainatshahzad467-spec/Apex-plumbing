import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Clock, Calendar, User, Phone, MapPin } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [service, setService] = useState('Emergency Leak & Burst Pipe');
  const [urgency, setUrgency] = useState('Immediate Emergency (Next 45 Mins)');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-[32px] p-6 sm:p-8 shadow-2xl border border-neutral-200 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {step === 'form' ? (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-[#E24B3C] text-xs font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E24B3C] animate-pulse" />
              <span>Direct Master Plumber Dispatch</span>
            </div>

            <h3 className="font-display text-2xl font-medium text-neutral-900 tracking-tight">
              Schedule Service
            </h3>
            <p className="text-xs text-neutral-500 mt-1 mb-6">
              Guaranteed upfront pricing. Licensed master technicians dispatching in 45 minutes or at your chosen time.
            </p>

            <form onSubmit={handleBooking} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5">
                  Select Plumbing Service
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-neutral-800 focus:outline-none focus:border-neutral-900"
                >
                  <option>Emergency Leak & Burst Pipe</option>
                  <option>Tankless Water Heater Diagnostic / Install</option>
                  <option>Clogged Sewer Line / Hydro-Jetting</option>
                  <option>Acoustic Slab Leak Inspection</option>
                  <option>Whole-Home Repiping Consultation</option>
                  <option>Gas Line Testing & Fixture Install</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5">
                  Required Arrival Window
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setUrgency('Immediate Emergency (Next 45 Mins)')}
                    className={`py-2 px-3 rounded-xl border text-center font-medium transition-all ${
                      urgency === 'Immediate Emergency (Next 45 Mins)'
                        ? 'bg-[#18181B] text-white border-[#18181B]'
                        : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                    }`}
                  >
                    ⚡ Immediate (45 Min)
                  </button>
                  <button
                    type="button"
                    onClick={() => setUrgency('Flexible Scheduled Window')}
                    className={`py-2 px-3 rounded-xl border text-center font-medium transition-all ${
                      urgency === 'Flexible Scheduled Window'
                        ? 'bg-[#18181B] text-white border-[#18181B]'
                        : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                    }`}
                  >
                    📅 Schedule Later
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full text-xs sm:text-sm bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-neutral-800 focus:outline-none focus:border-neutral-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(512) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-xs sm:text-sm bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-neutral-800 focus:outline-none focus:border-neutral-900"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5">
                    Austin Service Address
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Street, City, Zip"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full text-xs sm:text-sm bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-neutral-800 focus:outline-none focus:border-neutral-900"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#18181B] hover:bg-black text-white text-sm font-semibold transition-all shadow-md active:scale-95"
                >
                  Confirm & Dispatch Technician
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-neutral-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E24B3C]" />
                  Zero Upfront Cancellation Fee
                </span>
                <span>·</span>
                <span>Master Plumber Direct</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 animate-in fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-medium text-neutral-900">
              Technician Dispatched
            </h3>
            <p className="text-sm text-neutral-600 mt-2 max-w-sm mx-auto">
              Master Plumber unit <strong>#TX-04</strong> has been queued for <strong>{formData.address || 'your address'}</strong>.
            </p>

            <div className="mt-6 bg-neutral-50 border border-neutral-200 rounded-2xl p-4 text-xs text-left space-y-2">
              <div className="flex justify-between">
                <span className="text-neutral-500">Service:</span>
                <span className="font-semibold text-neutral-900">{service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Estimated Arrival:</span>
                <span className="font-bold text-emerald-700">35 - 45 Minutes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Assigned Tech:</span>
                <span className="font-semibold text-neutral-900">Marcus Vance (Master #M-38102)</span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 mt-4">
              A dispatch confirmation text with live GPS truck link has been sent to {formData.phone || 'your phone'}.
            </p>

            <button
              onClick={handleReset}
              className="mt-6 w-full py-3 bg-[#18181B] text-white rounded-full text-xs font-semibold hover:bg-black transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
