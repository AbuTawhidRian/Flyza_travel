"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, MapPin, Calendar, Users, ChevronDown, Compass, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  const [destination, setDestination] = useState("");
  const [travelers, setTravelers] = useState("2 Guests (Couple)");

  return (
    <section className="relative min-h-[96vh] flex items-center justify-center overflow-hidden bg-[#050B14]">
      {/* Cinematic Background with Vignette */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transform transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=2000&q=85')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/65 to-[#050B14]/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,11,20,0.7)_100%)]" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20 text-center">
        {/* Prestige Heritage Badge */}
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-[#C5A059]/40 rounded-full px-6 py-2 mb-8 shadow-xl">
          <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-full animate-ping" />
          <span className="text-[#F9E7B9] text-xs font-semibold tracking-[0.25em] uppercase">
            Bespoke Luxury Travel · Beyond Every Journey
          </span>
        </div>

        {/* Master Serif Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif-luxury font-medium text-white tracking-tight leading-[1.08] mb-6 max-w-5xl mx-auto">
          Crafting Journeys of
          <br />
          <span className="italic font-normal gold-gradient-text">
            Incomparable Elegance
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-300/90 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
          From secluded Maldives lagoons and Swiss Alpine retreats to sacred Umrah packages and accredited medical tourism concierge—Flyza curates the extraordinary.
        </p>

        {/* Floating Architectural Booking Concierge Bar */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] border border-white/60 max-w-5xl mx-auto text-left">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            {/* Destination */}
            <div className="md:col-span-2 px-3 py-1">
              <label className="block text-[10.5px] font-bold text-slate-400 uppercase tracking-[0.16em] mb-1">
                Where would you like to travel?
              </label>
              <div className="relative">
                <MapPin className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C5A059]" />
                <input
                  type="text"
                  placeholder="e.g. Switzerland, Maldives, Dubai, Umrah..."
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full pl-7 pr-3 py-2 text-slate-900 font-semibold text-sm placeholder:text-slate-400 focus:outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Travel Date */}
            <div className="px-3 py-1 border-t md:border-t-0 md:border-l border-slate-100">
              <label className="block text-[10.5px] font-bold text-slate-400 uppercase tracking-[0.16em] mb-1">
                Departure Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C5A059]" />
                <input
                  type="date"
                  className="w-full pl-7 pr-2 py-2 text-slate-900 font-semibold text-sm focus:outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="px-3 py-1 border-t md:border-t-0 md:border-l border-slate-100">
              <label className="block text-[10.5px] font-bold text-slate-400 uppercase tracking-[0.16em] mb-1">
                Travelers
              </label>
              <div className="relative">
                <Users className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C5A059]" />
                <select
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  className="w-full pl-7 pr-6 py-2 text-slate-900 font-semibold text-sm focus:outline-none bg-transparent appearance-none"
                >
                  <option>1 Guest (Solo)</option>
                  <option>2 Guests (Couple)</option>
                  <option>Family (3-5 Guests)</option>
                  <option>Private Group (6+)</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span className="font-semibold text-slate-700 tracking-wider uppercase text-[11px]">
                Trending:
              </span>
              {["Maldives", "Switzerland", "Dubai", "Umrah", "Turkey", "Bangkok"].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setDestination(tag)}
                  className="px-3 py-1 rounded-full bg-slate-100/90 hover:bg-[#C5A059]/15 hover:text-[#C5A059] text-slate-600 transition-colors text-xs font-medium"
                >
                  {tag}
                </button>
              ))}
            </div>

            <Link
              href="/tours"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0A1128] hover:bg-[#C5A059] text-white hover:text-[#0A1128] text-xs font-bold tracking-[0.18em] uppercase px-8 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:scale-[1.02]"
            >
              <Compass className="w-4 h-4 text-[#C5A059] group-hover:text-[#0A1128]" />
              <span>Explore Collection</span>
            </Link>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-300 font-medium">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
            Official Headquarters at GEC, Chattogram
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span>✦ 100% Bespoke Travel Design</span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span>✦ 24/7 Dedicated Client Concierge</span>
        </div>
      </div>
    </section>
  );
}
