import Link from "next/link";
import { Clock, Users, Star, MapPin, ArrowRight, MessageCircle } from "lucide-react";
import TiltCard3D from "@/components/ui/TiltCard3D";
import ScrollReveal from "@/components/ui/ScrollReveal";

const luxuryTours = [
  {
    id: 1,
    title: "Greek Odyssey: Private Yachting & Aegean Villas",
    destination: "Santorini & Mykonos, Greece",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1000&q=85",
    duration: "10 Days / 9 Nights",
    group: "Private / Couple",
    rating: 4.98,
    reviews: 142,
    badge: "SIGNATURE EXPERIENCE",
  },
  {
    id: 2,
    title: "Swiss Alpine Serenity: Zermatt & St. Moritz Express",
    destination: "Zurich & Alps, Switzerland",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1000&q=85",
    duration: "8 Days / 7 Nights",
    group: "Bespoke Itinerary",
    rating: 4.95,
    reviews: 98,
    badge: "LUXURY EXPRESS",
  },
  {
    id: 3,
    title: "Maldives Overwater Sanctuary & Coral Atolls",
    destination: "North Malé Atoll, Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1000&q=85",
    duration: "6 Days / 5 Nights",
    group: "Private Pool Villa",
    rating: 5.0,
    reviews: 86,
    badge: "HONEYMOON SPECIAL",
  },
  {
    id: 4,
    title: "Sacred Umrah & Spiritual Elegance Journey",
    destination: "Makkah & Madinah, Saudi Arabia",
    image: "https://images.unsplash.com/photo-1565552684305-7e23f0449914?w=1000&q=85",
    duration: "12 Days / 11 Nights",
    group: "5-Star Haram View",
    rating: 4.99,
    reviews: 310,
    badge: "SACRED PILGRIMAGE",
  },
];

export default function PopularTours() {
  return (
    <section className="py-24 sm:py-28 bg-white border-t border-slate-200/70">
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl">
              <span className="text-[#9E7D3B] font-bold text-xs uppercase tracking-[0.25em] block mb-3">
                ✦ Handcrafted Curations
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif-luxury font-normal text-[#040812] tracking-tight">
                Bespoke Tour Packages
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3 font-light leading-relaxed">
                Every detail carefully orchestrated—private chauffeured transfers, verified 5-star properties, specialist guides, and VIP airport services.
              </p>
            </div>
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#040812] hover:text-[#9E7D3B] transition-colors pb-1.5 border-b-2 border-[#040812] hover:border-[#9E7D3B] self-start md:self-auto"
            >
              <span>Browse Full Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Tour Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {luxuryTours.map((tour) => {
            const waText = `Hello Flyza, I would like to ask for pricing and availability for "${tour.title}" (${tour.destination}, ${tour.duration}).`;
            return (
              <TiltCard3D
                key={tour.id}
                maxTilt={6}
                glareOpacity={0.14}
                scale={1.02}
                className="bg-[#FAF9F6] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(4,8,18,0.06)] border border-slate-200/80 flex flex-col justify-between group"
              >
                <div className="preserve-3d">
                  {/* Photo with Floating 3D Badge */}
                  <div className="relative h-64 w-full overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040812]/50 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 translate-z-md">
                      <span className="bg-[#040812]/90 backdrop-blur-md text-[#E8C987] text-[9.5px] font-bold tracking-[0.16em] uppercase px-3 py-1.5 rounded-full border border-[#C5A059]/35 shadow-md">
                        {tour.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 translate-z-md bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1 text-xs font-bold text-[#040812] shadow-md">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                      <span>{tour.rating}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-[11px] text-[#9E7D3B] font-bold uppercase tracking-wider mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{tour.destination}</span>
                    </div>

                    <h3 className="font-serif-luxury font-medium text-lg text-[#040812] leading-snug mb-4 group-hover:text-[#9E7D3B] transition-colors">
                      {tour.title}
                    </h3>

                    <div className="flex items-center justify-between text-xs text-slate-500 py-3 border-y border-slate-200/70">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {tour.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-slate-400" />
                        {tour.group}
                      </span>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Pricing & Itinerary Actions */}
                <div className="p-6 pt-0 space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] text-slate-500 pb-1">
                    <span className="uppercase tracking-wider font-semibold text-[#9E7D3B]">
                      Tailored Quotation
                    </span>
                    <span className="font-medium">{tour.reviews} reviews</span>
                  </div>

                  <a
                    href={`https://wa.me/8801334225588?text=${encodeURIComponent(waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-[0.14em] py-3 rounded-2xl transition-all duration-300 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Ask Price on WhatsApp</span>
                  </a>

                  <Link
                    href={`/tours/${tour.id}`}
                    className="w-full flex items-center justify-center gap-2 bg-[#040812] hover:bg-[#C5A059] text-white hover:text-[#040812] text-xs font-bold uppercase tracking-[0.16em] py-3 rounded-2xl transition-all duration-300 shadow-sm"
                  >
                    <span>View Itinerary</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </TiltCard3D>
            );
          })}
        </div>
      </div>
    </section>
  );
}
