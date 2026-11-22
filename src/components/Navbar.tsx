"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "PACKAGES", href: "/tours" },
  { label: "OUR PARTNER", href: "/channel-partner" },
  { label: "DESTINATIONS", href: "/destinations" },
  { label: "CONTACT US", href: "/contact" },
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
            ? "bg-white/98 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3"
            : "bg-white border-b border-slate-100 shadow-2xs py-4"
        }`}
      >
        <div className="w-full max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="flex items-center justify-between">
            {/* 1. Left: Brand Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
              <div className="relative w-11 h-11 rounded-xl bg-white p-1 shadow-2xs border border-slate-100 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Flyza Tours & Travels"
                  width={44}
                  height={44}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col whitespace-nowrap">
                <span className="text-2xl font-black tracking-tight font-poppins text-slate-900 leading-none">
                  Flyza
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] font-extrabold text-amber-500 mt-1">
                  Beyond Every Journey
                </span>
              </div>
            </Link>

            {/* 2. Center: Spacious Navigation Menu (Desktop) */}
            <nav className="hidden lg:flex items-center justify-center gap-8 xl:gap-11">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-[13px] font-bold tracking-wider uppercase whitespace-nowrap py-2 transition-colors duration-200 relative group ${
                      isActive
                        ? "text-amber-500"
                        : "text-slate-700 hover:text-amber-500"
                    }`}
                  >
                    <span>{link.label}</span>
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-amber-500"
                          : "bg-transparent group-hover:bg-amber-400/60"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* 3. Right: Clean Action Area (Matching Figma) */}
            <div className="flex items-center gap-4 flex-shrink-0">
              {/* Optional clean phone badge on wider screens */}
              <a
                href="tel:+8801334225588"
                className="hidden 2xl:flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-amber-600 px-3.5 py-2 rounded-full border border-slate-200 bg-slate-50/60 transition-colors whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <span>+880 1334-225588</span>
              </a>

              {/* Primary BOOK NOW Button - Exactly like Figma design */}
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center bg-[#0B1E3F] hover:bg-amber-500 hover:text-slate-950 text-white font-bold px-7 py-2.5 rounded-full text-xs uppercase tracking-widest shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 whitespace-nowrap"
              >
                BOOK NOW
              </Link>

              {/* Mobile / Tablet Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors"
                aria-label="Toggle Navigation"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-slate-800" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[500px] opacity-100 border-t border-slate-100 mt-3" : "max-h-0 opacity-0"
          } bg-white shadow-xl`}
        >
          <div className="px-6 py-6 flex flex-col gap-2.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-amber-50 text-amber-600"
                      : "text-slate-800 hover:bg-slate-50 hover:text-amber-600"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-amber-500" />}
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="tel:+8801334225588"
                className="flex items-center justify-center gap-2 text-xs font-bold text-slate-700 bg-slate-50 py-3 rounded-xl border border-slate-200"
              >
                <Phone className="w-4 h-4 text-amber-500" />
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
                  className="flex items-center justify-center bg-[#0B1E3F] text-amber-400 font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-xs"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Floating Bottom-Right WhatsApp Quick Contact (Modern Travel Agency Standard) */}
      <a
        href="https://wa.me/8801334225588"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center gap-2 group border-2 border-white"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-xs pr-1">
          Chat With Flyza
        </span>
      </a>
    </>
  );
}
