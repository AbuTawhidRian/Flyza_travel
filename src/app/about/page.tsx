import Image from "next/image";
import Link from "next/link";
import { Award, Users, Globe, ShieldCheck, CheckCircle2, Phone, MapPin, Mail, Compass } from "lucide-react";

const stats = [
  { value: "10K+", label: "Distinguished Travelers" },
  { value: "45+", label: "Bespoke Destinations" },
  { value: "99.4%", label: "Satisfaction Benchmark" },
  { value: "24/7", label: "Private Concierge Care" },
];

const pillars = [
  {
    icon: Compass,
    title: "Bespoke Travel Architecture",
    description: "We don't sell standardized packages. We hand-craft journeys around your personal rhythm, privacy, and architectural aesthetics.",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Integrity",
    description: "Transparent pricing without hidden fees, markups, or referral commissions. Direct relationships with leading global hospitality partners.",
  },
  {
    icon: Award,
    title: "Global Aviation & IATA Standards",
    description: "Certified international airline ticketing, private charter coordination, and diplomatic visa facilitation.",
  },
  {
    icon: Users,
    title: "Dedicated Client Liaison",
    description: "Headquartered at GEC, Chattogram, our senior advisors manage every flight, private transfer, and hotel detail with utmost discretion.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      {/* Luxury Hero */}
      <div className="relative bg-[#050B14] pt-36 pb-24 text-white overflow-hidden border-b border-[#C5A059]/20">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 text-center">
          <span className="text-[#C5A059] font-bold text-xs uppercase tracking-[0.28em] block mb-4">
            ✦ The Flyza Legacy & Vision
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-luxury font-normal tracking-tight mb-6">
            Beyond Every Journey
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Headquartered in Chattogram, Bangladesh, Flyza Tours & Travels was founded to redefine high-end leisure, sacred spiritual pilgrimages, and accredited global medical travel.
          </p>
        </div>
      </div>

      {/* Stats Counter Strip */}
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14 -mt-10 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-white rounded-3xl p-8 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-slate-100">
          {stats.map((s, i) => (
            <div key={i} className="text-center p-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-[#0A1128]">
                <span className="gold-gradient-text">{s.value}</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-[0.16em] mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Story & Philosophy */}
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#C5A059] font-bold text-xs uppercase tracking-[0.25em] block">
              Our Heritage
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-normal text-[#0A1128] leading-tight">
              A Bespoke Travel Consultancy Born From a Passion for Discovery
            </h2>
            <p className="text-slate-600 leading-relaxed font-light text-base">
              At <strong>Flyza Tours & Travels</strong>, we believe travel is transformative. Located at O.R. Nizam Road, GEC, Chattogram, our senior advisors handle luxury vacations, VIP Umrah journeys, and accredited medical travel with unmatched care.
            </p>
            <p className="text-slate-600 leading-relaxed font-light text-base">
              Whether you are seeking the pristine seclusion of an overwater bungalow in the Maldives, private yacht charters through the Greek Islands, cultural immersion across Switzerland and Turkey, or accredited medical referrals via My 1 Health, Flyza coordinates every touchpoint with five-star precision.
            </p>

            <div className="space-y-3.5 pt-2">
              {[
                "Authorized Global Airline Ticketing & IATA Network",
                "Dedicated Medical Visa Advisory & Invitation Processing",
                "Customized Domestic & International Itineraries",
                "24/7 Dedicated Concierge Support from Departure to Arrival",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 flex flex-wrap gap-4">
              <Link
                href="/tours"
                className="bg-[#0A1128] hover:bg-[#C5A059] text-white hover:text-[#0A1128] font-bold text-xs uppercase tracking-[0.18em] px-8 py-4 rounded-xl shadow-md transition-all hover:scale-105"
              >
                Explore Curated Tours
              </Link>
              <Link
                href="/contact"
                className="border border-slate-300 hover:border-[#C5A059] text-[#0A1128] hover:text-[#C5A059] font-bold text-xs uppercase tracking-[0.18em] px-8 py-4 rounded-xl transition-all"
              >
                Contact Concierge
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=85"
                alt="Flyza Luxury Travel Consultancy"
                className="w-full h-[520px] object-cover filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B14]/90 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <span className="text-[#DFB76C] font-bold text-xs uppercase tracking-widest block mb-1">
                  Executive Headquarters
                </span>
                <div className="font-serif-luxury font-medium text-2xl">
                  GEC, Chattogram, Bangladesh
                </div>
                <p className="text-xs text-slate-300 font-light mt-1">
                  1st Floor, House No. 87, Road No. 7, O.R. Nizam Road (Beside Sanmar Ocean City)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-[#F8FAFC] py-24 border-y border-slate-200/60">
        <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C5A059] font-bold text-xs uppercase tracking-[0.25em] block mb-3">
              ✦ Core Principles
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-luxury font-normal text-[#0A1128] tracking-tight">
              The Tenets of Flyza
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-100 card-luxury"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#0A1128] text-[#C5A059] flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif-luxury font-bold text-[#0A1128] text-lg mb-2">
                    {v.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
