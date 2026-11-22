import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ArrowRight, Phone } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative py-32 bg-[#050B14] text-white overflow-hidden">
      {/* Background with luxury gradient & glow */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=2000&q=85')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/85 to-[#050B14]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C5A059]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center">
        {/* Emblem */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/95 p-3 mb-8 shadow-2xl border border-[#C5A059]/40">
          <Image
            src="/logo.png"
            alt="Flyza"
            width={72}
            height={72}
            className="object-contain"
          />
        </div>

        <span className="text-[#C5A059] font-bold text-xs uppercase tracking-[0.3em] block mb-4">
          Flyza Tours & Travels
        </span>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-luxury font-medium text-white mb-6 tracking-tight leading-[1.12]">
          Your Next Extraordinary Chapter
          <br />
          <span className="italic font-normal gold-gradient-text">
            Begins with a Conversation
          </span>
        </h2>

        <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed mb-12">
          Connect directly with our senior travel curators in Chattogram for customized itineraries, private charters, VIP Umrah, or medical tourism support.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C5A059] hover:bg-[#DFB76C] text-[#0A1128] font-bold text-xs uppercase tracking-[0.2em] px-9 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span>Request Bespoke Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="https://wa.me/8801334225588"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Concierge</span>
          </a>

          <a
            href="tel:+8801334225588"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/25 hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full transition-all"
          >
            <Phone className="w-4 h-4 text-[#C5A059]" />
            <span>+880 1334-225588</span>
          </a>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 text-xs text-slate-400 font-light flex flex-wrap items-center justify-center gap-6">
          <span>✦ Headquartered at GEC, Chattogram</span>
          <span>✦ IATA & Aviation Partners</span>
          <span>✦ 24/7 Global Client Care</span>
        </div>
      </div>
    </section>
  );
}
