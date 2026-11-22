import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-950">
      {/* Background with luxury mood */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-sky-950/95" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Brand Bird Logo */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/95 rounded-3xl p-2.5 mb-6 shadow-2xl border border-amber-500/30 animate-float">
          <Image
            src="/logo.png"
            alt="Flyza Bird Logo"
            width={72}
            height={72}
            className="object-contain"
          />
        </div>

        <div className="text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] mb-3">
          Flyza Tours & Travels
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-poppins text-white mb-6 leading-tight">
          Beyond Every Journey,
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
            A Story Worth Telling
          </span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
          Let our dedicated travel consultants in Chattogram curate your dream vacation, flight bookings, or Umrah tour with personalized luxury and unmatched ease.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/tours"
            className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider shadow-xl hover:scale-105 transition-all inline-flex items-center justify-center gap-2"
          >
            <span>Explore Tour Packages</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="https://wa.me/8801334225588"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider shadow-lg hover:scale-105 transition-all inline-flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href="tel:+8801334225588"
            className="w-full sm:w-auto border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Call +880 1334-225588</span>
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800/80 text-xs text-slate-400 flex flex-wrap items-center justify-center gap-4">
          <span>✓ Official Office at GEC, Chattogram</span>
          <span>•</span>
          <span>✓ Authorized Ticket & Visa Services</span>
          <span>•</span>
          <span>✓ 24/7 Dedicated Trip Care</span>
        </div>
      </div>
    </section>
  );
}
