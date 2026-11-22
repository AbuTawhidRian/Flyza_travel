import Link from "next/link";
import { ArrowUpRight, MapPin, Compass } from "lucide-react";

const continentPortfolios = [
  {
    continent: "Europe & Mediterranean",
    description: "Centuries of art, architecture, clifftop coastal havens, and alpine splendors.",
    destinations: [
      {
        name: "Santorini & Cyclades",
        country: "Greece",
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1000&q=85",
        tours: "12 Curated Itineraries",
        highlight: "Private Catamaran Caldera Sailing",
      },
      {
        name: "The Swiss Alps",
        country: "Switzerland",
        image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1000&q=85",
        tours: "8 Curated Itineraries",
        highlight: "Glacier Express & Zermatt Chalets",
      },
      {
        name: "Amalfi Coast & Capri",
        country: "Italy",
        image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1000&q=85",
        tours: "11 Curated Itineraries",
        highlight: "Positano Clifftop Villas & Yacht Charters",
      },
      {
        name: "Paris & French Riviera",
        country: "France",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1000&q=85",
        tours: "14 Curated Itineraries",
        highlight: "Haute Couture & Côte d'Azur Privé",
      },
    ],
  },
  {
    continent: "Asia & Indian Ocean",
    description: "Sacred temples, secluded tropical atolls, ancient culinary masters, and ultra-modern skylines.",
    destinations: [
      {
        name: "Baa Atoll & Malé",
        country: "Maldives",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1000&q=85",
        tours: "15 Curated Itineraries",
        highlight: "Overwater Pavilion & Coral Reef Escapes",
      },
      {
        name: "Kyoto & Tokyo",
        country: "Japan",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1000&q=85",
        tours: "9 Curated Itineraries",
        highlight: "Imperial Ryokan & High-Speed Shinkansen",
      },
      {
        name: "Ubud & Seminyak",
        country: "Indonesia",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1000&q=85",
        tours: "10 Curated Itineraries",
        highlight: "Private Rainforest Villas & Temple Blessings",
      },
      {
        name: "Phuket & Phang Nga",
        country: "Thailand",
        image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=1000&q=85",
        tours: "12 Curated Itineraries",
        highlight: "Limestone Island Speedboats & 5-Star Resorts",
      },
    ],
  },
  {
    continent: "Middle East & Sacred Lands",
    description: "Golden desert dunes, ultramodern architectural marvels, and profound spiritual sanctuaries.",
    destinations: [
      {
        name: "Makkah & Madinah",
        country: "Saudi Arabia",
        image: "https://images.unsplash.com/photo-1565552684305-7e23f0449914?w=1000&q=85",
        tours: "16 Sacred Packages",
        highlight: "VIP 5-Star Clock Tower Facing Suites",
      },
      {
        name: "Dubai & Palm Jumeirah",
        country: "UAE",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1000&q=85",
        tours: "18 Curated Itineraries",
        highlight: "Private Desert Glamping & Supercar Tours",
      },
      {
        name: "Istanbul & Cappadocia",
        country: "Turkey",
        image: "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=1000&q=85",
        tours: "13 Curated Itineraries",
        highlight: "Sunrise Hot Air Ballooning & Bosphorus Yacht",
      },
      {
        name: "Maasai Mara Safari",
        country: "Kenya",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1000&q=85",
        tours: "7 Curated Itineraries",
        highlight: "Exclusive Tented Camp & Big Five Migration",
      },
    ],
  },
];

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      {/* Luxury Hero */}
      <div className="relative bg-[#050B14] pt-36 pb-24 text-white overflow-hidden border-b border-[#C5A059]/20">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 text-center">
          <span className="text-[#C5A059] font-bold text-xs uppercase tracking-[0.28em] block mb-4">
            ✦ Worldwide Portfolios
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-luxury font-normal tracking-tight mb-4">
            Curated Destinations
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            From iconic royal capitals to untouched private coastlines, explore destinations curated for travelers of discerning taste.
          </p>
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14 py-20">
        {continentPortfolios.map((region, rIdx) => (
          <div key={rIdx} className="mb-24 last:mb-0">
            {/* Region Title */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-slate-200/80">
              <div>
                <span className="text-[#C5A059] font-bold text-xs uppercase tracking-[0.2em] block mb-1">
                  Region Portfolio 0{rIdx + 1}
                </span>
                <h2 className="text-2xl sm:text-4xl font-serif-luxury font-normal text-[#0A1128]">
                  {region.continent}
                </h2>
              </div>
              <p className="text-slate-500 text-xs sm:text-sm max-w-md font-light leading-relaxed">
                {region.description}
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
              {region.destinations.map((dest, dIdx) => (
                <Link
                  key={dIdx}
                  href="/tours"
                  className="group block relative overflow-hidden rounded-3xl bg-slate-900 card-luxury"
                >
                  <div className="relative h-[380px] w-full overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.9]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050B14]/95 via-[#050B14]/40 to-transparent" />

                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <span className="text-[#DFB76C] text-xs font-bold uppercase tracking-widest block mb-1">
                        {dest.country}
                      </span>
                      <h3 className="text-xl font-serif-luxury font-medium text-white mb-2 group-hover:text-[#F9E7B9] transition-colors">
                        {dest.name}
                      </h3>
                      <p className="text-xs text-slate-300/90 font-light mb-3">
                        {dest.highlight}
                      </p>
                      <div className="text-[11px] text-[#C5A059] font-bold uppercase tracking-wider pt-2 border-t border-white/20 flex items-center justify-between">
                        <span>{dest.tours}</span>
                        <span>View →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
