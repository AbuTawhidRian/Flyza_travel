"use client";

import { Search, MapPin, Calendar, Users, ChevronDown, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const [destination, setDestination] = useState("");
  const [travelers, setTravelers] = useState("2 Travelers");

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background with luxury gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90" />

      {/* Subtle luxury glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
        {/* Brand Badge */}
        <div className="inline-flex items-center gap-2.5 bg-slate-900/80 backdrop-blur-md border border-amber-500/30 rounded-full px-5 py-2 mb-8 shadow-lg">
          <span className="w-2 h-2 bg-amber-400 rounded-full animate-ping" />
          <span className="text-amber-300 text-xs sm:text-sm font-semibold tracking-wide uppercase">
            Flyza Tours & Travels · Beyond Every Journey
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white font-poppins leading-[1.15] mb-6 tracking-tight">
          Discover Extraordinary
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600">
            Destinations Worldwide
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          From Maldives overwater villas to holy Umrah pilgrimages and scenic European holidays—we craft experiences that elevate your soul.
        </p>

        {/* Search / Filter Card */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-5 md:p-7 max-w-4xl mx-auto border border-white/40">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-left">
            {/* Destination input */}
            <div className="md:col-span-2">
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 px-1">
                Where would you like to go?
              </label>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-500" />
                <input
                  type="text"
                  placeholder="e.g. Dubai, Maldives, Thailand, Turkey..."
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                />
              </div>
            </div>

            {/* Travel Date */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 px-1">
                Departure Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-500" />
                <input
                  type="date"
                  className="w-full pl-10 pr-3 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 bg-white"
                />
              </div>
            </div>

            {/* Travelers */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 px-1">
                Guests
              </label>
              <div className="relative">
                <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-500" />
                <select
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  className="w-full pl-10 pr-8 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 appearance-none bg-white font-medium"
                >
                  <option>1 Traveler</option>
                  <option>2 Travelers (Couple)</option>
                  <option>Family (3-5)</option>
                  <option>Corporate Group (6+)</option>
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3 items-center justify-between">
            {/* Quick popular chips */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Trending:</span>
              {["Dubai", "Maldives", "Thailand", "Umrah", "Cox's Bazar", "Turkey"].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setDestination(tag)}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-amber-50 hover:text-amber-700 text-slate-700 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>

            <Link
              href="/tours"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-7 py-3 rounded-xl text-sm shadow-md hover:shadow-xl transition-all hover:scale-105"
            >
              <Search className="w-4 h-4" />
              <span>Search Packages</span>
            </Link>
          </div>
        </div>

        {/* Quick Contact Ribbon */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-300">
          <a
            href="tel:+8801334225588"
            className="flex items-center gap-2 hover:text-amber-400 transition-colors"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Hotline: +880 1334-225588</span>
          </a>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <a
            href="https://wa.me/8801334225588"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Available</span>
          </a>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="flex items-center gap-2 text-slate-400">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>GEC, Chattogram, Bangladesh</span>
          </span>
        </div>
      </div>
    </section>
  );
}
