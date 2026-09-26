import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'process', 'diagnostic', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'process', label: 'Process', href: '#process' },
    { id: 'diagnostic', label: 'Diagnostic', href: '#diagnostic' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string, id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Island Navigation Pill Container matching reference screenshots */}
      <header className="fixed top-4 md:top-6 left-0 right-0 z-50 px-4 pointer-events-none">
        <div
          className={`max-w-4xl mx-auto rounded-full transition-all duration-300 pointer-events-auto flex items-center justify-between px-5 md:px-7 py-3 ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-xl shadow-[0_12px_32px_rgba(0,0,0,0.08)] border border-neutral-200/90'
              : 'bg-white/90 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.04)] border border-neutral-200/80'
          }`}
        >
          {/* Brand mark - circular dual-shade emblem matching screenshot */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home', 'home');
            }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-6 h-6 rounded-full border border-neutral-300 bg-gradient-to-tr from-neutral-800 via-neutral-600 to-neutral-200 shadow-xs flex items-center justify-center transition-transform group-hover:scale-105">
              <div className="w-2.5 h-2.5 rounded-full bg-white/90" />
            </div>
            <span className="font-display text-base font-semibold tracking-tight text-neutral-900 group-hover:text-neutral-700 transition-colors">
              Apex Flow
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href, item.id);
                  }}
                  className={`text-sm font-medium transition-all relative py-1 ${
                    isActive
                      ? 'text-neutral-900 font-semibold'
                      : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E24B3C] rounded-full animate-in fade-in" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Button - Dark Pill */}
          <div className="flex items-center gap-3">
            <a
              href="tel:5128904100"
              className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-neutral-900 px-3 py-1.5 rounded-full hover:bg-neutral-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E24B3C]" />
              (512) 890-4100
            </a>

            <button
              onClick={onOpenBooking}
              className="px-5 py-2 text-xs md:text-sm font-semibold text-white bg-[#18181B] hover:bg-black rounded-full transition-all duration-200 shadow-sm hover:shadow active:scale-95 whitespace-nowrap flex items-center gap-1.5"
            >
              <span>Book Now</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-70 hidden sm:inline" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-neutral-700 hover:text-neutral-900 rounded-full hover:bg-neutral-100"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden max-w-sm mx-auto mt-2 bg-white/95 backdrop-blur-xl border border-neutral-200 rounded-3xl p-5 shadow-2xl pointer-events-auto animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href, item.id);
                  }}
                  className={`text-sm py-2 px-3 rounded-xl transition-colors ${
                    activeSection === item.id
                      ? 'bg-neutral-100 text-[#E24B3C] font-semibold'
                      : 'text-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 border-t border-neutral-100 flex flex-col gap-2">
                <a
                  href="tel:5128904100"
                  className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-neutral-800 bg-neutral-100 rounded-2xl"
                >
                  <Phone className="w-4 h-4 text-[#E24B3C]" />
                  Call (512) 890-4100
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-2.5 text-sm font-semibold text-white bg-[#18181B] rounded-2xl shadow-sm"
                >
                  Book Immediate Service
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
