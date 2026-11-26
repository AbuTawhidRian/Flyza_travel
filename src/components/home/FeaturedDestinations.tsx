import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import TiltCard3D from "@/components/ui/TiltCard3D";
import ScrollReveal from "@/components/ui/ScrollReveal";

const curatedDestinations = [
  {
    title: "Santorini & The Cyclades",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=85",
    tag: "ISLAND RETREAT",
    badge: "Bespoke Yachting",
    tours: "12 Curated Itineraries",
    span: "lg:col-span-2 lg:row-span-2 min-h-[420px] lg:min-h-[540px]",
  },
  {
    title: "Kyoto & Mount Fuji",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=85",
    tag: "ANCIENT HERITAGE",
    badge: "Ryokan Sanctuary",
    tours: "9 Curated Itineraries",
    span: "lg:col-span-1 min-h-[260px]",
  },
  {
    title: "Baa Atoll & Malé",
    country: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=85",
    tag: "OVERWATER SANCTUARY",
    badge: "Private Lagoon",
    tours: "15 Curated Itineraries",
    span: "lg:col-span-1 min-h-[260px]",
  },
  {
    title: "The Swiss Alps & Zermatt",
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1200&q=85",
    tag: "ALPINE PRESTIGE",
    badge: "Scenic Express",
    tours: "8 Curated Itineraries",
    span: "lg:col-span-2 min-h-[300px]",
  },
  {
    title: "Amalfi Coast & Capri",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&q=85",
    tag: "MEDITERRANEAN",
    badge: "Clifftop Villas",
    tours: "11 Curated Itineraries",
    span: "lg:col-span-1 min-h-[300px]",
  },
  {
    title: "Maasai Mara Safari",
    country: "Kenya",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=85",
    tag: "WILDLIFE EXPEDITION",
    badge: "Tented Luxury",
    tours: "7 Curated Itineraries",
    span: "lg:col-span-1 min-h-[300px]",
  },
];

export default function FeaturedDestinations() {
  return (
    <section className="py-24 sm:py-28 bg-[#F7F5F0]">
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl">
              <span className="text-[#9E7D3B] font-bold text-xs uppercase tracking-[0.28em] block mb-3">
                ✦ Exclusive Travel Portfolios
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif-luxury font-normal text-[#040812] tracking-tight">
                Featured Destinations
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3 font-light leading-relaxed">
                Handpicked havens where dramatic landscapes meet bespoke comfort. Each destination is personally vetted by Flyza travel specialists.
              </p>
            </div>
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#040812] hover:text-[#9E7D3B] transition-colors pb-1.5 border-b-2 border-[#040812] hover:border-[#9E7D3B] self-start md:self-auto"
            >
              <span>View All Destinations</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Modern 3D Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {curatedDestinations.map((dest, i) => (
            <div key={i} className={dest.span}>
              <TiltCard3D
                maxTilt={6}
                glareOpacity={0.18}
                scale={1.015}
                className="h-full rounded-3xl overflow-hidden bg-slate-900 shadow-[0_14px_40px_rgba(4,8,18,0.12)]"
              >
                <Link href="/destinations" className="group block relative h-full w-full preserve-3d">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-[0.88]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040812]/95 via-[#040812]/35 to-transparent" />

                  {/* Floating 3D Top Pill */}
                  <div className="absolute top-5 left-5 translate-z-md">
                    <span className="bg-white/95 backdrop-blur-md text-[#040812] text-[10px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full shadow-lg">
                      {dest.tag}
                    </span>
                  </div>

                  <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-z-md">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>

                  {/* Floating 3D Bottom Copy */}
                  <div className="absolute bottom-6 left-6 right-6 text-white translate-z-sm">
                    <span className="text-[#E8C987] text-xs font-bold uppercase tracking-widest block mb-1">
                      {dest.country} · {dest.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif-luxury font-medium text-white mb-2 group-hover:text-[#FFF2CC] transition-colors">
                      {dest.title}
                    </h3>
                    <div className="text-xs text-slate-300 font-light flex items-center justify-between pt-3 border-t border-white/20">
                      <span>{dest.tours}</span>
                      <span className="text-[#E8C987] font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Explore →
                      </span>
                    </div>
                  </div>
                </Link>
              </TiltCard3D>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
