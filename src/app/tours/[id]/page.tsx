import Link from "next/link";
import { Clock, Users, Star, MapPin, CheckCircle2, ArrowLeft, Calendar, Shield, MessageCircle } from "lucide-react";

const tours: Record<string, {
  id: number; title: string; image: string; destination: string; duration: string;
  groupSize: string; price: number; rating: number; reviews: number; category: string;
  difficulty: string; description: string; highlights: string[]; includes: string[];
  excludes: string[]; itinerary: { day: string; title: string; desc: string }[];
}> = {
  "1": {
    id: 1, title: "Greek Odyssey: Private Yachting & Aegean Villas", image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1600&q=85",
    destination: "Santorini & Mykonos, Greece", duration: "10 Days / 9 Nights", groupSize: "Private / Couple", price: 2890, rating: 4.98,
    reviews: 142, category: "Luxury Escapes", difficulty: "Leisure",
    description: "Sail through the mythical Aegean Sea, experiencing the azure waters of Mykonos, secluded coves in Paros, and cliffside infinity pool suites in Santorini. Curated with private chartered catamarans and exclusive vineyard tastings.",
    highlights: ["Private Sunset Catamaran in Santorini Caldera", "VIP Helicopter Transfer Athens-Mykonos", "Exclusive Wine & Olive Degustation", "Private Archeological Tour of Acropolis & Delos"],
    includes: ["5-Star Clifftop Boutique Suite Accommodation", "Chauffeured Mercedes-Benz Private Transfers", "Daily Gourmet Champagne Breakfast", "Inter-island High-Speed Ferry & Yacht Charters", "Dedicated Flyza 24/7 Concierge"],
    excludes: ["International First/Business Airfares (Available on request)", "Personal Discretionary Expenses", "Optional Helicopter Excursions"],
    itinerary: [
      { day: "Day 01", title: "Arrival in Historical Athens", desc: "Private VIP airport meet & greet. Check-in at Hotel Grande Bretagne with rooftop dinner overlooking the illuminated Parthenon." },
      { day: "Day 02", title: "Private Acropolis & Ancient Wonders", desc: "Exclusive early-access guided exploration of the Acropolis, followed by private yacht transfer to Mykonos." },
      { day: "Day 03-04", title: "Mykonian Luxury & Beach Clubs", desc: "Private villa days, yachting to the sacred ruins of Delos, and sunset dining at Little Venice." },
      { day: "Day 05", title: "Voyage to Santorini Caldera", desc: "Private catamaran cruise to Santorini. Check-in to your cliffside cave villa in Oia with private infinity pool." },
      { day: "Day 06-07", title: "Santorini Wine Country & Sunset Cruise", desc: "Volcanic vineyard sommelier tour and romantic sunset dinner on board a luxury catamaran." },
      { day: "Day 08-09", title: "Untouched Paros & Naxos", desc: "Exploring marble mountain villages, secluded beaches, and fine Mediterranean culinary havens." },
      { day: "Day 10", title: "Farewell Greece", desc: "Scenic flight to Athens and chauffeured airport departure." },
    ],
  },
};

export default async function TourDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tour = tours[id] ?? tours["1"];

  const bookingMessage = `✈️ *FLYZA TOURS & TRAVELS*
_Beyond Every Journey_
━━━━━━━━━━━━━━━━━━━━
🏝️ *BESPOKE TOUR BOOKING INQUIRY*

📌 *Package:* ${tour.title}
🌍 *Destination:* ${tour.destination}
⏱️ *Duration:* ${tour.duration}
👥 *Travel Style:* ${tour.groupSize}

Hello Flyza Team, I would like to ask for pricing, luxury hotel selections, and available private dates for this itinerary.
━━━━━━━━━━━━━━━━━━━━
📍 _Office: GEC, Chattogram, Bangladesh_`;

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      {/* Cinematic Hero */}
      <div className="relative h-[72vh] overflow-hidden bg-slate-950">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={tour.image} alt={tour.title} className="w-full h-full object-cover filter brightness-[0.85]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/40 to-transparent" />
        
        <div className="absolute top-28 left-6 sm:left-10 lg:left-14">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-white/25 transition-all border border-white/20"
          >
            <ArrowLeft className="w-4 h-4" /> <span>Back to Catalog</span>
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-16">
          <div className="max-w-[1500px] mx-auto">
            <div className="flex flex-wrap gap-2.5 mb-4">
              <span className="bg-[#C5A059] text-[#0A1128] text-[10.5px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
                {tour.category}
              </span>
              <span className="bg-white/20 backdrop-blur-md text-white text-[10.5px] font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-white/20">
                {tour.difficulty}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif-luxury font-medium text-white mb-4 tracking-tight max-w-4xl">
              {tour.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-slate-300 text-xs sm:text-sm font-light">
              <span className="flex items-center gap-1.5 text-[#DFB76C] font-medium">
                <MapPin className="w-4 h-4" /> {tour.destination}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" /> {tour.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-slate-400" /> {tour.groupSize}
              </span>
              <span className="flex items-center gap-1.5 text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" /> {tour.rating} ({tour.reviews} reviews)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Body */}
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Details */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-100">
              <span className="text-[#C5A059] font-bold text-xs uppercase tracking-[0.25em] block mb-2">
                Itinerary Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-luxury text-[#0A1128] mb-4">
                The Journey Overview
              </h2>
              <p className="text-slate-600 font-light leading-relaxed text-base">
                {tour.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-100">
              <span className="text-[#C5A059] font-bold text-xs uppercase tracking-[0.25em] block mb-2">
                Exclusive Features
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-luxury text-[#0A1128] mb-6">
                Curated Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tour.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Day by Day */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-100">
              <span className="text-[#C5A059] font-bold text-xs uppercase tracking-[0.25em] block mb-2">
                Detailed Daily Program
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-luxury text-[#0A1128] mb-8">
                Day-by-Day Architecture
              </h2>
              <div className="space-y-6">
                {tour.itinerary.map((item, i) => (
                  <div key={i} className="flex gap-5 pb-6 border-b border-slate-100 last:border-b-0">
                    <div className="w-12 h-12 rounded-2xl bg-[#0A1128] text-[#C5A059] flex items-center justify-center text-xs font-black flex-shrink-0 font-serif-luxury">
                      {item.day}
                    </div>
                    <div>
                      <h4 className="font-serif-luxury font-bold text-lg text-[#0A1128] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-sm font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif-luxury text-emerald-800 text-lg font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Included Services</span>
                  </h3>
                  <ul className="space-y-2.5 text-sm text-slate-600 font-light">
                    {tour.includes.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif-luxury text-slate-800 text-lg font-bold mb-4 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full border border-slate-300 text-xs flex items-center justify-center text-slate-400">✗</span>
                    <span>Discretionary Exclusions</span>
                  </h3>
                  <ul className="space-y-2.5 text-sm text-slate-500 font-light">
                    {tour.excludes.map((exc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-slate-400">✗</span>
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sticky Booking Card */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-slate-100 p-8 sticky top-28">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#C5A059] block mb-1">
                Bespoke Travel Quotation
              </span>
              <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#0A1128] mb-2">
                Ask for Pricing on WhatsApp
              </div>

              <div className="flex items-center gap-1 text-xs text-amber-500 font-semibold mb-6 pb-6 border-b border-slate-100">
                <Star className="w-4 h-4 fill-amber-400" />
                <span className="text-slate-800 font-bold">{tour.rating}</span>
                <span className="text-slate-400">({tour.reviews} verified guest reviews)</span>
              </div>

              <div className="space-y-3 mb-6 text-xs text-slate-600">
                <div className="flex items-center justify-between py-2 border-b border-slate-50">
                  <span className="text-slate-400 font-medium">Duration:</span>
                  <span className="font-bold text-slate-800">{tour.duration}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-50">
                  <span className="text-slate-400 font-medium">Accommodation:</span>
                  <span className="font-bold text-slate-800">5-Star Verified</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-50">
                  <span className="text-slate-400 font-medium">Airport Transfers:</span>
                  <span className="font-bold text-slate-800">Private Chauffeur</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-slate-400 font-medium">Concierge:</span>
                  <span className="font-bold text-emerald-600">24/7 Dedicated</span>
                </div>
              </div>

              <a
                href={`https://wa.me/8801334225588?text=${encodeURIComponent(bookingMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-[0.18em] py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] mb-3"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book via WhatsApp</span>
              </a>

              <Link
                href="/contact"
                className="w-full flex items-center justify-center bg-[#0A1128] hover:bg-[#C5A059] text-white hover:text-[#0A1128] font-bold text-xs uppercase tracking-[0.18em] py-4 rounded-xl transition-all duration-300 shadow-sm"
              >
                Request Custom Quotation
              </Link>

              <div className="mt-6 pt-6 border-t border-slate-100 text-[11px] text-slate-400 text-center space-y-1 font-light">
                <p>🔒 Secure Booking & Dedicated Liaison</p>
                <p>Headquarters at GEC, Chattogram</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
