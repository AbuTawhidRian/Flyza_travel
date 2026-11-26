"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageCircle, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Packages", href: "/tours" },
  { label: "My 1 Health", href: "/channel-partner" },
  { label: "Destinations", href: "/destinations" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-10 pt-3 sm:pt-4 pointer-events-none">
        <div
          className={`pointer-events-auto max-w-[1460px] mx-auto rounded-full transition-all duration-500 ${
            scrolled
              ? "bg-white/92 backdrop-blur-xl shadow-[0_12px_40px_rgba(4,8,18,0.12)] border border-slate-200/80 px-5 sm:px-7 py-2.5"
              : "bg-white/90 backdrop-blur-lg shadow-[0_8px_30px_rgba(4,8,18,0.18)] border border-white/60 px-5 sm:px-7 py-3"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            {/* Brand Identity */}
            <Link href="/" className="flex items-center group flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Flyza Tours & Travels - Beyond Every Journey"
                width={175}
                height={54}
                className="h-10 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                priority
              />
            </Link>

            {/* Desktop Navigation Pill Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-slate-100/70 px-2 py-1.5 rounded-full border border-slate-200/60">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-[11.5px] font-semibold tracking-[0.12em] uppercase whitespace-nowrap px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-[#040812] text-[#E8C987] shadow-sm"
                        : "text-slate-600 hover:text-[#040812] hover:bg-white/80"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Area */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href="tel:+8801334225588"
                className="hidden xl:inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-[#9E7D3B] transition-colors px-3 py-2 rounded-full hover:bg-slate-100/70"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="tracking-wide">+880 1334-225588</span>
              </a>

              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center justify-center gap-1.5 bg-[#040812] hover:bg-[#C5A059] text-white hover:text-[#040812] text-[11px] font-bold tracking-[0.18em] uppercase px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02]"
              >
                <span>Book Now</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2.5 rounded-full text-[#040812] bg-slate-100 hover:bg-slate-200 transition-colors"
                aria-label="Toggle Navigation"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`pointer-events-auto lg:hidden max-w-[1460px] mx-auto mt-2 rounded-3xl transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen
              ? "max-h-[520px] opacity-100 border border-slate-200 shadow-2xl"
              : "max-h-0 opacity-0 pointer-events-none"
          } bg-white/95 backdrop-blur-xl`}
        >
          <div className="px-5 py-5 flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-3 px-4 rounded-2xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-[#040812] text-[#E8C987]"
                      : "text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#C5A059]" />}
                </Link>
              );
            })}

            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href="tel:+8801334225588"
                className="flex items-center justify-center gap-2 text-xs font-bold text-slate-700 bg-slate-50 py-3 rounded-2xl border border-slate-200"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Hotline: +880 1334-225588</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://wa.me/8801334225588"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-emerald-600 text-white text-xs font-bold py-3.5 rounded-2xl shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center bg-[#040812] text-[#E8C987] font-bold text-xs uppercase tracking-wider py-3.5 rounded-2xl shadow-xs"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Floating WhatsApp Concierge Pill */}
      <a
        href="https://wa.me/8801334225588"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Concierge"
        className="fixed bottom-6 right-6 z-40 bg-[#040812] hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-[0_14px_35px_rgba(4,8,18,0.35)] hover:scale-110 transition-all duration-300 flex items-center gap-2 group border border-[#C5A059]/60"
      >
        <MessageCircle className="w-5 h-5 text-emerald-400 group-hover:text-white transition-colors" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-xs pr-1">
          Flyza Concierge
        </span>
      </a>
    </>
  );
}
