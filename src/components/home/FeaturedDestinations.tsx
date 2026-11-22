import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const curatedDestinations = [
  {
    title: "Santorini & The Cyclades",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=85",
    tag: "ISLAND RETREAT",
    badge: "Bespoke Yachting",
    tours: "12 Curated Itineraries",
  },
  {
    title: "Kyoto & Mount Fuji",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=85",
    tag: "ANCIENT HERITAGE",
    badge: "Ryokan Sanctuary",
    tours: "9 Curated Itineraries",
  },
  {
    title: "Baa Atoll & Malé",
    country: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=85",
    tag: "OVERWATER SANCTUARY",
    badge: "Private Lagoon",
    tours: "15 Curated Itineraries",
  },
  {
    title: "The Swiss Alps & Zermatt",
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1200&q=85",
    tag: "ALPINE PRESTIGE",
    badge: "Scenic Express",
    tours: "8 Curated Itineraries",
  },
  {
    title: "Amalfi Coast & Capri",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&q=85",
    tag: "MEDITERRANEAN CHARM",
    badge: "Clifftop Villas",
    tours: "11 Curated Itineraries",
  },
  {
    title: "Maasai Mara Luxury Safari",
    country: "Kenya",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=85",
    tag: "WILDLIFE EXPEDITION",
    badge: "Tented Luxury",
    tours: "7 Curated Itineraries",
  },
];

export default function FeaturedDestinations() {
  return (
    <section className="py-28 bg-[#FDFDFD]">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#C5A059] font-bold text-xs uppercase tracking-[0.25em] block mb-3">
              ✦ Exclusive Travel Portfolios
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-luxury font-normal text-[#0A1128] tracking-tight">
              Featured Destinations
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-4 font-light leading-relaxed">
              Handpicked havens where dramatic landscapes meet bespoke comfort. Each destination is personally vetted by Flyza travel specialists.
            </p>
          </div>
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0A1128] hover:text-[#C5A059] transition-colors pb-1 border-b-2 border-[#0A1128] hover:border-[#C5A059] self-start md:self-auto"
          >
            <span>View All Destinations</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {curatedDestinations.map((dest, i) => (
            <Link
              key={i}
              href="/destinations"
              className="group block relative overflow-hidden rounded-3xl bg-slate-900 card-luxury"
            >
              <div className="relative h-[440px] w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.9]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/95 via-[#0A1128]/40 to-transparent" />

                {/* Top Pill */}
                <div className="absolute top-5 left-5">
                  <span className="bg-white/90 backdrop-blur-md text-[#0A1128] text-[10px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full shadow-sm">
                    {dest.tag}
                  </span>
                </div>

                <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>

                {/* Bottom Card Copy */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[#DFB76C] text-xs font-bold uppercase tracking-widest block mb-1">
                    {dest.country} · {dest.badge}
                  </span>
                  <h3 className="text-2xl font-serif-luxury font-medium text-white mb-2 group-hover:text-[#F9E7B9] transition-colors">
                    {dest.title}
                  </h3>
                  <div className="text-xs text-slate-300 font-light flex items-center justify-between pt-2 border-t border-white/20">
                    <span>{dest.tours}</span>
                    <span className="text-[#C5A059] font-semibold">Explore Journey →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
