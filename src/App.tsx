import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesStack } from './components/ServicesStack';
import { ProcessSection } from './components/ProcessSection';
import { DiagnosticWidget } from './components/DiagnosticWidget';
import { BentoFeatures } from './components/BentoFeatures';
import { PhotoShowcase } from './components/PhotoShowcase';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleOpenBooking = () => setBookingOpen(true);
  const handleCloseBooking = () => setBookingOpen(false);

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#121214] antialiased selection:bg-[#E24B3C]/15 selection:text-[#E24B3C]">
      {/* Floating Pill Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with ambient coral aura & trust marquee */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onExploreServices={handleExploreServices}
        />

        {/* About Section with Asymmetrical Cards */}
        <AboutSection onOpenBooking={handleOpenBooking} />

        {/* Interactive Services Section & R21 Hardware Device */}
        <ServicesStack onOpenBooking={handleOpenBooking} />

        {/* Process Section with Slider */}
        <ProcessSection />

        {/* Real-time Interactive Diagnostic & Dispatch Console */}
        <DiagnosticWidget onOpenBooking={handleOpenBooking} />

        {/* High-Fidelity Master Plumbing Photography Showcase */}
        <PhotoShowcase onOpenBooking={handleOpenBooking} />

        {/* Bento Feature Cards */}
        <BentoFeatures onOpenBooking={handleOpenBooking} />

        {/* Contact Section with Underline Form */}
        <ContactSection />
      </main>

      {/* Footer with Watermark and Emergency Block */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Interactive Booking Modal */}
      <BookingModal isOpen={bookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}
