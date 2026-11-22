import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from "lucide-react";

const footerLinks = {
  QuickLinks: [
    { label: "Home", href: "/" },
    { label: "About Flyza", href: "/about" },
    { label: "Tour Packages", href: "/tours" },
    { label: "Channel Partner (My 1 Health)", href: "/channel-partner" },
    { label: "Destinations", href: "/destinations" },
    { label: "Contact Us", href: "/contact" },
  ],
  PopularTours: [
    { label: "Dubai & Desert Safari", href: "/tours" },
    { label: "Maldives Luxury Escape", href: "/tours" },
    { label: "Thailand Island Hopper", href: "/tours" },
    { label: "Turkey & Cappadocia", href: "/tours" },
    { label: "Umrah Special Packages", href: "/tours" },
  ],
  Services: [
    { label: "Medical Tourism & Hospital Booking", href: "/channel-partner" },
    { label: "Air Ticket Booking", href: "/contact" },
    { label: "Custom Holiday Packages", href: "/contact" },
    { label: "Visa Processing Assistance", href: "/contact" },
    { label: "Hotel & Resort Bookings", href: "/contact" },
    { label: "Corporate & Group Travel", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900">
      {/* Top Banner CTA */}
      <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 border-b border-slate-800/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
              Exclusive Travel Offers
            </span>
            <h3 className="text-white text-2xl font-bold font-poppins">
              Plan Your Dream Holiday with Flyza
            </h3>
            <p className="text-slate-400 text-sm max-w-xl">
              Get personalized itineraries and best flight & tour deals right in your inbox.
            </p>
          </div>
          <form className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email address..."
              className="w-full md:w-80 px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 text-sm"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 px-6 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap shadow-sm hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-2xl bg-white/95 p-1.5 shadow-md flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Flyza Tours & Travels Logo"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-2xl font-extrabold text-white font-poppins tracking-tight">
                  Flyza
                </span>
                <span className="block text-[11px] font-semibold tracking-[0.22em] text-amber-400 uppercase -mt-1">
                  Beyond Every Journey
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Flyza Tours & Travels is your premier gateway to world-class travel experiences,
              exclusive holiday packages, customized corporate getaways, and reliable ticketing services.
            </p>

            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="leading-snug">
                  1st Floor, House No. 87, Road No. 7, O.R. Nizam Road (Beside Sanmar Ocean City), GEC, Chattogram, Bangladesh.
                </span>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a
                  href="tel:+8801334225588"
                  className="hover:text-amber-400 transition-colors font-medium"
                >
                  +880 1334-225588
                </a>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a
                  href="mailto:infoflyza@gmail.com"
                  className="hover:text-amber-400 transition-colors"
                >
                  infoflyza@gmail.com
                </a>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/8801334225588"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600/90 hover:bg-emerald-600 text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp: +880 1334-225588
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold font-poppins text-base mb-4 border-l-2 border-amber-400 pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.QuickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-slate-600" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h4 className="text-white font-semibold font-poppins text-base mb-4 border-l-2 border-amber-400 pl-2.5">
              Popular Tours
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.PopularTours.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-slate-600" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold font-poppins text-base mb-4 border-l-2 border-amber-400 pl-2.5">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.Services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-slate-600" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Flyza Tours & Travels. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {[
              { label: "Facebook", href: "https://facebook.com", symbol: "f" },
              { label: "Instagram", href: "https://instagram.com", symbol: "in" },
              { label: "WhatsApp", href: "https://wa.me/8801334225588", symbol: "wa" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-xs font-bold text-slate-400 hover:text-amber-400 hover:border-amber-400 transition-colors"
              >
                {social.symbol}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
