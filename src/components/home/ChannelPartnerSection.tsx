import Link from "next/link";
import { ShieldCheck, HeartPulse, ArrowRight, Building2, Globe2, MessageCircle } from "lucide-react";

export default function ChannelPartnerSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full text-amber-600 text-xs font-bold uppercase tracking-widest mb-3">
            Strategic Healthcare Collaboration
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-poppins text-slate-900 tracking-tight mb-4">
            OUR TRUSTED CHANNEL PARTNER
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Flyza Tours & Travels is proud to collaborate with <strong>My 1 Health</strong>, connecting patients with world-class medical treatments, specialized care, and affordable healthcare solutions across 20+ countries.
          </p>
        </div>

        {/* Partnership Card / Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-100 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Handshake Banner */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-md bg-sky-50 border border-slate-100 h-[220px] sm:h-[280px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/partner_banner.jpg"
                  alt="My 1 Health & Flyza Collaboration"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Right: Overview & Points */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-amber-600 font-bold text-xs uppercase tracking-wider">
                Connecting You To Quality Healthcare Around the World
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-poppins text-slate-900">
                End-to-End Medical Travel Support
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                From initial specialist consultations and second opinions to medical visa processing, hospital admission, hotel accommodations, and airport-to-hospital transfers.
              </p>

              <div className="space-y-2.5 pt-2">
                {[
                  "1,000+ Top Partner Hospitals Worldwide",
                  "Direct hospital rates with zero referral fees",
                  "Priority doctor appointments & telemedicine options",
                  "Dedicated patient care coordinator from Flyza & My 1 Health",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <Link
                  href="/channel-partner"
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all hover:scale-105 shadow-md"
                >
                  <span>Explore Partner Hospitals</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </Link>

                <a
                  href="https://wa.me/8801334225588?text=Hello%20Flyza%2C%20I%20would%20like%20to%20inquire%20about%20Medical%20Tourism%20and%20Doctor%20Appointments%20with%20My%201%20Health."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Medical Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Country Badges */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-4">
            Partner Hospitals Available In:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { name: "India", flag: "🇮🇳" },
              { name: "United States", flag: "🇺🇸" },
              { name: "Singapore", flag: "🇸🇬" },
              { name: "Thailand", flag: "🇹🇭" },
              { name: "South Korea", flag: "🇰🇷" },
              { name: "Malaysia", flag: "🇲🇾" },
              { name: "UAE", flag: "🇦🇪" },
              { name: "Turkey", flag: "🇹🇷" },
              { name: "United Kingdom", flag: "🇬🇧" },
              { name: "Germany", flag: "🇩🇪" },
              { name: "Spain", flag: "🇪🇸" },
              { name: "Saudi Arabia", flag: "🇸🇦" },
            ].map((c) => (
              <Link
                key={c.name}
                href="/channel-partner"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs text-slate-700 hover:border-amber-400 hover:text-amber-700 transition-colors shadow-2xs"
              >
                <span>{c.flag}</span>
                <span className="font-medium">{c.name}</span>
              </Link>
            ))}
            <Link
              href="/channel-partner"
              className="text-xs font-bold text-amber-600 hover:underline px-2 py-1"
            >
              +8 More Countries →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
