"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2.5"
          : "bg-gradient-to-b from-slate-950/80 via-slate-900/40 to-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-xl bg-white/90 p-1 shadow-sm transition-transform duration-300 group-hover:scale-105 flex items-center justify-center overflow-hidden">
              <Image
                src="/logo.png"
                alt="Flyza Tours & Travels"
                width={48}
                height={48}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-2xl font-bold tracking-tight font-poppins transition-colors duration-300 ${
                  scrolled ? "text-slate-900" : "text-white"
                }`}
              >
                Flyza
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-amber-500 -mt-1">
                Beyond Every Journey
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-amber-500 relative group py-1 ${
                  scrolled ? "text-slate-700" : "text-white/90"
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Quick Actions */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+8801334225588"
              className={`hidden lg:flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-full border transition-all duration-200 ${
                scrolled
                  ? "border-slate-200 text-slate-800 hover:border-amber-500 hover:text-amber-600 bg-slate-50"
                  : "border-white/20 text-white hover:border-amber-400 hover:text-amber-300 bg-white/10 backdrop-blur-sm"
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>+880 1334-225588</span>
            </a>

            <a
              href="https://wa.me/8801334225588"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3.5 py-2.5 rounded-full shadow-sm transition-all hover:scale-105"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="hidden md:inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold px-5 py-2.5 rounded-full text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              Book Now
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-xl transition-colors ${
                scrolled
                  ? "text-slate-800 hover:bg-slate-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-slate-900/98 backdrop-blur-xl border-t border-slate-800`}
      >
        <div className="px-5 py-6 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-200 font-medium py-2 px-3 rounded-lg hover:bg-white/10 hover:text-amber-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
            <a
              href="tel:+8801334225588"
              className="flex items-center gap-2 text-sm text-amber-400 font-semibold px-3 py-1"
            >
              <Phone className="w-4 h-4" />
              <span>+880 1334-225588</span>
            </a>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <a
                href="https://wa.me/8801334225588"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-emerald-600 text-white text-xs font-semibold py-3 rounded-xl"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs py-3 rounded-xl"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
