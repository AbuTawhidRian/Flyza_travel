import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, MessageCircle, ArrowRight, Globe } from "lucide-react";

const footerNavigation = {
  Portfolios: [
    { label: "Bespoke Tour Packages", href: "/tours" },
    { label: "Featured Destinations", href: "/destinations" },
    { label: "Channel Partner (My 1 Health)", href: "/channel-partner" },
    { label: "Sacred Umrah Journeys", href: "/tours" },
    { label: "Private Island Escapes", href: "/tours" },
  ],
  Services: [
    { label: "International Air Ticketing", href: "/contact" },
    { label: "Global Medical Tourism", href: "/channel-partner" },
    { label: "Visa Processing & Advisory", href: "/contact" },
    { label: "Luxury Hotel & Resort Bookings", href: "/contact" },
    { label: "Corporate Travel Management", href: "/contact" },
  ],
  Company: [
    { label: "About Flyza Legacy", href: "/about" },
    { label: "Client Concierge & Inquiries", href: "/contact" },
    { label: "Terms of Reservation", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#050B14] text-slate-300 border-t border-slate-800/80">
      {/* Newsletter Bar */}
      <div className="border-b border-slate-800/70 py-12">
        <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-[#C5A059] text-[11px] font-bold uppercase tracking-[0.25em] block mb-1">
              ✦ The Flyza Private Journal
            </span>
            <h3 className="text-white text-2xl font-serif-luxury font-medium">
              Subscribe to Curated Travel Dispatches
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 font-light">
              Receive private invitations, seasonal flight perks, and exclusive destination previews.
            </p>
          </div>

          <form className="flex w-full md:w-auto gap-2 max-w-md">
            <input
              type="email"
              placeholder="Your preferred email address..."
              className="w-full md:w-80 px-4 py-3 rounded-full bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#C5A059]"
            />
            <button
              type="submit"
              className="bg-[#C5A059] hover:bg-[#DFB76C] text-[#0A1128] font-bold text-xs uppercase tracking-[0.16em] px-6 py-3 rounded-full transition-all whitespace-nowrap shadow-sm hover:scale-105"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Identity & Head Office */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3.5">
              <div className="relative w-12 h-12 rounded-full bg-white p-1 shadow-sm flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Flyza"
                  width={46}
                  height={46}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black font-brand-heading text-white tracking-[0.06em]">
                  Flyza
                </span>
                <span className="text-[10px] uppercase tracking-[0.24em] font-extrabold text-[#C5A059] mt-0.5">
                  Beyond Every Journey
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed max-w-md">
              A premier travel management consultancy orchestrating world-class leisure journeys, sacred pilgrimages, corporate charters, and international medical travel with uncompromising excellence.
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  1st Floor, House No. 87, Road No. 7, O.R. Nizam Road (Beside Sanmar Ocean City), GEC, Chattogram, Bangladesh.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <a href="tel:+8801334225588" className="hover:text-[#C5A059] transition-colors font-semibold">
                  +880 1334-225588
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <a href="mailto:infoflyza@gmail.com" className="hover:text-[#C5A059] transition-colors">
                  infoflyza@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Portfolios */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-5 border-l-2 border-[#C5A059] pl-3">
              Portfolios
            </h4>
            <ul className="space-y-3">
              {footerNavigation.Portfolios.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-slate-400 hover:text-[#C5A059] transition-colors inline-flex items-center gap-2 font-light"
                  >
                    <ArrowRight className="w-3 h-3 text-slate-600" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-5 border-l-2 border-[#C5A059] pl-3">
              Services
            </h4>
            <ul className="space-y-3">
              {footerNavigation.Services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-slate-400 hover:text-[#C5A059] transition-colors inline-flex items-center gap-2 font-light"
                  >
                    <ArrowRight className="w-3 h-3 text-slate-600" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-5 border-l-2 border-[#C5A059] pl-3">
              The Firm
            </h4>
            <ul className="space-y-3">
              {footerNavigation.Company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-slate-400 hover:text-[#C5A059] transition-colors inline-flex items-center gap-2 font-light"
                  >
                    <ArrowRight className="w-3 h-3 text-slate-600" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="border-t border-slate-900 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Flyza Tours & Travels. All rights reserved. BEYOND EVERY JOURNEY.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/8801334225588"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-500 hover:text-emerald-400 flex items-center gap-1.5 font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
            <span>•</span>
            <span className="text-slate-400">GEC, Chattogram</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
