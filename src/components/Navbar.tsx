"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageCircle, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Packages", href: "/tours" },
  { label: "Channel Partner", href: "/channel-partner" },
  { label: "Destinations", href: "/destinations" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/98 backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.06)] py-3 border-b border-slate-100"
            : "bg-white/95 backdrop-blur-sm py-4 border-b border-slate-100/80"
        }`}
      >
        <div className="w-full max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="flex items-center justify-between">
            {/* Brand Identity */}
            <Link href="/" className="flex items-center gap-3.5 group flex-shrink-0">
              <div className="relative w-11 h-11 rounded-full p-1 bg-gradient-to-tr from-[#0A1128] via-[#0F1E36] to-[#0A1128] shadow-sm flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Flyza"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black font-brand-heading tracking-[0.05em] text-[#0A1128] leading-none">
                  Flyza
                </span>
                <span className="text-[9.5px] uppercase tracking-[0.24em] font-bold text-[#C5A059] mt-1">
                  Beyond Every Journey
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-11">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-[12.5px] font-semibold tracking-[0.14em] uppercase whitespace-nowrap py-2 transition-all duration-200 relative group ${
                      isActive
                        ? "text-[#C5A059]"
                        : "text-[#334155] hover:text-[#C5A059]"
                    }`}
                  >
                    <span>{link.label}</span>
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-300 ${
                        isActive
                          ? "bg-[#C5A059]"
                          : "bg-transparent group-hover:bg-[#C5A059]/40"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Area */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <a
                href="tel:+8801334225588"
                className="hidden xl:inline-flex items-center gap-2 text-xs font-semibold text-[#334155] hover:text-[#C5A059] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="tracking-wide">+880 1334-225588</span>
              </a>

              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center justify-center bg-[#0A1128] hover:bg-[#C5A059] text-white hover:text-[#0A1128] text-[11px] font-bold tracking-[0.2em] uppercase px-7 py-3 rounded-full transition-all duration-300 hover:shadow-lg shadow-sm hover:scale-[1.02]"
              >
                Book Now
              </Link>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg text-[#0A1128] hover:bg-slate-100 transition-colors"
                aria-label="Toggle Navigation"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[500px] opacity-100 border-t border-slate-100 mt-3" : "max-h-0 opacity-0"
          } bg-white`}
        >
          <div className="px-6 py-6 flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-amber-50/70 text-[#C5A059]"
                      : "text-slate-800 hover:bg-slate-50 hover:text-[#C5A059]"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#C5A059]" />}
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="tel:+8801334225588"
                className="flex items-center justify-center gap-2 text-xs font-bold text-slate-700 bg-slate-50 py-3 rounded-xl border border-slate-200"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Hotline: +880 1334-225588</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://wa.me/8801334225588"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-emerald-600 text-white text-xs font-bold py-3.5 rounded-xl shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center bg-[#0A1128] text-[#C5A059] font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-xs"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Floating WhatsApp Contact Button */}
      <a
        href="https://wa.me/8801334225588"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Concierge"
        className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-[0_10px_30px_rgba(5,150,105,0.4)] hover:scale-110 transition-all duration-300 flex items-center gap-2 group border-2 border-white"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-xs pr-1">
          Flyza Concierge
        </span>
      </a>
    </>
  );
}
