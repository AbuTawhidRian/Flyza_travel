import Link from "next/link";
import { ShieldCheck, ArrowRight, MessageCircle } from "lucide-react";
import TiltCard3D from "@/components/ui/TiltCard3D";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ChannelPartnerSection() {
  return (
    <section className="py-24 sm:py-28 obsidian-mesh text-white relative overflow-hidden">
      {/* Subtle luxury glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[780px] h-[380px] bg-[#C5A059]/12 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#E8C987] font-bold text-xs uppercase tracking-[0.25em] block mb-3">
              ✦ Strategic Global Healthcare Alliance
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-luxury font-normal text-white tracking-tight mb-4">
              Our Trusted Channel Partner
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              Flyza Tours & Travels proudly collaborates with <strong>My 1 Health</strong>, bridging the gap between world-class international travel and accredited global healthcare across 20+ countries.
            </p>
          </div>
        </ScrollReveal>

        {/* Master 3D Glassmorphic Showcase Card */}
        <TiltCard3D
          maxTilt={3.5}
          glareOpacity={0.1}
          scale={1.005}
          className="glass-obsidian rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#C5A059]/30 shadow-[0_32px_90px_rgba(0,0,0,0.6)] mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center preserve-3d">
            {/* Left: Official Handshake Banner with 3D Pop */}
            <div className="lg:col-span-6 translate-z-sm">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-slate-900 h-[240px] sm:h-[340px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/partner_banner.jpg"
                  alt="My 1 Health & Flyza Partnership"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-4 left-4 bg-[#040812]/85 backdrop-blur-md border border-[#C5A059]/40 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.16em] text-[#E8C987]">
                  Official Channel Partner
                </div>
              </div>
            </div>

            {/* Right: Partnership Pillars */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-[#E8C987] font-semibold text-xs uppercase tracking-[0.2em] block">
                Connecting You To Quality Healthcare Around The World
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif-luxury font-medium text-white leading-tight">
                Seamless Medical Concierge & Logistics
              </h3>
              <p className="text-slate-300 text-sm font-light leading-relaxed">
                Receive second opinions from world-leading physicians, confirmed appointments at top hospital networks (Apollo, Bumrungrad, Cleveland Clinic, Mayo Clinic, Acıbadem), with Flyza managing all flights, medical visas, accommodation, and private transfers.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Over 1,000+ Verified Hospitals across 20+ Countries",
                  "Direct Hospital Rates with Zero Referral Fees or Markups",
                  "Dedicated Patient & Family Concierge from Chattogram",
                  "Priority Visa Processing & Airport Ambulance / Transfers",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <ShieldCheck className="w-4 h-4 text-[#E8C987] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-3.5">
                <Link
                  href="/channel-partner"
                  className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#E8C987] text-[#040812] font-bold text-xs uppercase tracking-[0.18em] px-7 py-4 rounded-2xl shadow-lg transition-all hover:scale-[1.03]"
                >
                  <span>View Hospital Directory</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="https://wa.me/8801334225588?text=Hello%20Flyza%2C%20I%20would%20like%20to%20consult%20regarding%20Medical%20Tourism%20with%20My%201%20Health."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-[0.18em] px-7 py-4 rounded-2xl shadow-lg transition-all hover:scale-[1.03]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Medical Desk</span>
                </a>
              </div>
            </div>
          </div>
        </TiltCard3D>

        {/* Global Network Country Strips */}
        <div className="text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 block mb-5">
            Specialized Care Centers In:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {[
              { flag: "🇮🇳", name: "India" },
              { flag: "🇺🇸", name: "United States" },
              { flag: "🇸🇬", name: "Singapore" },
              { flag: "🇹🇭", name: "Thailand" },
              { flag: "🇰🇷", name: "South Korea" },
              { flag: "🇲🇾", name: "Malaysia" },
              { flag: "🇦🇪", name: "UAE" },
              { flag: "🇹🇷", name: "Turkey" },
              { flag: "🇬🇧", name: "United Kingdom" },
              { flag: "🇩🇪", name: "Germany" },
              { flag: "🇪🇸", name: "Spain" },
              { flag: "🇸🇦", name: "Saudi Arabia" },
            ].map((c) => (
              <Link
                key={c.name}
                href="/channel-partner"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#C5A059] hover:bg-white/10 text-xs text-slate-300 hover:text-white transition-all"
              >
                <span>{c.flag}</span>
                <span className="font-medium tracking-wide">{c.name}</span>
              </Link>
            ))}
            <Link
              href="/channel-partner"
              className="text-xs font-bold text-[#E8C987] hover:underline px-3 py-2"
            >
              +8 More Nations →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
