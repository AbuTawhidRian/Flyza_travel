"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5"
          : "bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-xs py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo - Fixed whitespace to prevent any breaking */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0 group">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white p-1 shadow-xs border border-slate-100 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
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
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight font-poppins text-slate-900 leading-none">
                Flyza
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold text-amber-500 mt-0.5">
                Beyond Every Journey
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links - Guaranteed single-line with whitespace-nowrap */}
          <nav className="hidden xl:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] font-bold uppercase tracking-wider whitespace-nowrap py-1 relative transition-colors duration-200 ${
                    isActive
                      ? "text-amber-500"
                      : "text-slate-700 hover:text-amber-500"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Medium Screen Nav (Tablets/Laptops: 1024px - 1279px) */}
          <nav className="hidden lg:flex xl:hidden items-center gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-bold uppercase tracking-wide whitespace-nowrap py-1 relative transition-colors duration-200 ${
                    isActive
                      ? "text-amber-500"
                      : "text-slate-700 hover:text-amber-500"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Phone link */}
            <a
              href="tel:+8801334225588"
              className="hidden 2xl:flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-amber-600 bg-slate-50 hover:bg-amber-50 px-3 py-2 rounded-full border border-slate-200/80 transition-all whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>+880 1334-225588</span>
            </a>

            {/* WhatsApp link */}
            <a
              href="https://wa.me/8801334225588"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3.5 py-2.5 rounded-full shadow-xs transition-all hover:scale-105 whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Book Now Button */}
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 hover:from-amber-500 hover:to-amber-600 hover:text-slate-950 text-white font-bold px-5 py-2.5 rounded-full text-xs uppercase tracking-wider shadow-sm transition-all duration-200 hover:scale-105 whitespace-nowrap"
            >
              Book Now
            </Link>

            {/* Mobile / Tablet Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-slate-800" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100 border-t border-slate-100" : "max-h-0 opacity-0"
        } bg-white shadow-xl`}
      >
        <div className="px-5 py-5 flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`py-2.5 px-3.5 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors flex items-center justify-between ${
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

          <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href="tel:+8801334225588"
              className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-50 px-3.5 py-2.5 rounded-xl border border-slate-200"
            >
              <Phone className="w-4 h-4 text-amber-500" />
              <span>Hotline: +880 1334-225588</span>
            </a>

            <div className="grid grid-cols-2 gap-2 mt-1">
              <a
                href="https://wa.me/8801334225588"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-emerald-600 text-white text-xs font-bold py-3 rounded-xl shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center bg-slate-900 text-amber-400 font-bold text-xs uppercase tracking-wider py-3 rounded-xl shadow-xs"
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
