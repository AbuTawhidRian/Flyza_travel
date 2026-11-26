"use client";

import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  MapPin,
  Calendar,
  Users,
  ChevronDown,
  Compass,
  ShieldCheck,
  Sparkles,
  Globe2,
  Move3d,
} from "lucide-react";

const LuxuryGlobe3D = dynamic(() => import("@/components/three/LuxuryGlobe3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-48 h-48 rounded-full border border-[#C5A059]/30 bg-[#081022]/60 animate-pulse flex items-center justify-center">
        <Globe2 className="w-10 h-10 text-[#C5A059]/60 animate-spin" style={{ animationDuration: "8s" }} />
      </div>
    </div>
  ),
});

export default function HeroSection() {
  const [destination, setDestination] = useState("");
  const [travelers, setTravelers] = useState("2 Guests (Couple)");

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden obsidian-mesh pt-28 pb-16 lg:pt-32 lg:pb-20">
      {/* Subtle Architectural Grid Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #C5A059 1px, transparent 1px), linear-gradient(to bottom, #C5A059 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Ambient Radial Gold Glow */}
      <div className="absolute top-1/3 right-1/4 w-[520px] h-[520px] bg-[#C5A059]/12 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* Left Editorial Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 shimmer-badge border border-[#C5A059]/40 rounded-full px-5 py-2 mb-7 shadow-xl">
              <span className="w-2 h-2 bg-[#E8C987] rounded-full animate-pulse" />
              <span className="text-[#F3DFB1] text-[11px] font-semibold tracking-[0.24em] uppercase">
                Curated Worldwide Journeys · Beyond Every Journey
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif-luxury font-normal text-white tracking-tight leading-[1.06] mb-6">
              Crafting Journeys of
              <br />
              <span className="italic font-normal gold-gradient-text">
                Incomparable Elegance
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-9 font-light leading-relaxed">
              From secluded Maldives lagoons and Swiss Alpine retreats to sacred Umrah packages and accredited medical tourism concierge—Flyza curates the extraordinary.
            </p>

            {/* 3D-Elevated Glassmorphic Concierge Console */}
            <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-4 sm:p-6 shadow-[0_32px_90px_rgba(0,0,0,0.55)] border border-white/80 text-left relative">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
                {/* Destination */}
                <div className="md:col-span-2 px-3 py-2 rounded-2xl hover:bg-slate-50 transition-colors">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-[0.18em] mb-1">
                    Destination or Experience
                  </label>
                  <div className="relative flex items-center">
                    <MapPin className="w-4 h-4 text-[#C5A059] flex-shrink-0 mr-2" />
                    <input
                      type="text"
                      placeholder="Where would you like to travel?"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full text-slate-900 font-semibold text-sm placeholder:text-slate-400 focus:outline-none bg-transparent"
                    />
                  </div>
                </div>

                {/* Travel Date */}
                <div className="px-3 py-2 border-t md:border-t-0 md:border-l border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-[0.18em] mb-1">
                    Preferred Dates
                  </label>
                  <div className="relative flex items-center">
                    <Calendar className="w-4 h-4 text-[#C5A059] flex-shrink-0 mr-2" />
                    <input
                      type="date"
                      className="w-full text-slate-900 font-semibold text-sm focus:outline-none bg-transparent"
                    />
                  </div>
                </div>

                {/* Travelers */}
                <div className="px-3 py-2 border-t md:border-t-0 md:border-l border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-[0.18em] mb-1">
                    Travel Party
                  </label>
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center flex-1 mr-2">
                      <Users className="w-4 h-4 text-[#C5A059] flex-shrink-0 mr-2" />
                      <select
                        value={travelers}
                        onChange={(e) => setTravelers(e.target.value)}
                        className="w-full text-slate-900 font-semibold text-sm focus:outline-none bg-transparent appearance-none cursor-pointer"
                      >
                        <option>1 Guest (Solo)</option>
                        <option>2 Guests (Couple)</option>
                        <option>Family (3-5 Guests)</option>
                        <option>Private Group (6+)</option>
                      </select>
                    </div>
                    <ChevronDown className="w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
                  <span className="font-bold text-slate-700 tracking-wider uppercase text-[10px] mr-1">
                    Trending:
                  </span>
                  {["Maldives", "Switzerland", "Dubai", "Umrah", "Turkey", "Japan"].map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setDestination(tag)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                        destination === tag
                          ? "bg-[#040812] text-[#E8C987] shadow-sm"
                          : "bg-slate-100 hover:bg-[#C5A059]/15 hover:text-[#9E7D3B] text-slate-600"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                <Link
                  href={destination ? `/tours?search=${encodeURIComponent(destination)}` : "/tours"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#040812] hover:bg-[#C5A059] text-white hover:text-[#040812] text-xs font-bold tracking-[0.18em] uppercase px-7 py-3.5 rounded-2xl transition-all duration-300 shadow-md hover:scale-[1.02] group"
                >
                  <Compass className="w-4 h-4 text-[#C5A059] group-hover:text-[#040812] transition-colors" />
                  <span>Explore Collection</span>
                </Link>
              </div>
            </div>

            {/* Trust Strip */}
            <div className="mt-9 flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-7 text-xs text-slate-300 font-medium">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                HQ at GEC, Chattogram
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                100% Bespoke Architecture
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span>✦ 24/7 Client Concierge</span>
            </div>
          </div>

          {/* Right 3D Interactive WebGL Globe Column */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[540px] h-[380px] sm:h-[460px] lg:h-[540px]">
              {/* Interactive 3D Globe */}
              <LuxuryGlobe3D />

              {/* Floating 3D Glass Telemetry Card - Top Right */}
              <div className="hidden sm:flex items-center gap-3 glass-obsidian px-4 py-3 rounded-2xl shadow-2xl absolute top-6 right-2 sm:right-4 animate-float-3d pointer-events-none">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#E8C987]">
                    Global Aviation Network
                  </div>
                  <div className="text-xs text-white font-medium">
                    45+ Curated Destinations
                  </div>
                </div>
              </div>

              {/* Floating 3D Interaction Hint - Bottom Left */}
              <div className="flex items-center gap-2.5 glass-obsidian px-4 py-2.5 rounded-full shadow-xl absolute bottom-4 left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0 pointer-events-none">
                <Move3d className="w-4 h-4 text-[#E8C987]" />
                <span className="text-[11px] font-medium text-slate-200 whitespace-nowrap">
                  Drag to rotate 3D globe · CGP Hub
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
