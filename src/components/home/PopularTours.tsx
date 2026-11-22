import Link from "next/link";
import { Clock, Users, Star, MapPin, ArrowRight } from "lucide-react";

const luxuryTours = [
  {
    id: 1,
    title: "Greek Odyssey: Private Yachting & Aegean Villas",
    destination: "Santorini & Mykonos, Greece",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1000&q=85",
    duration: "10 Days / 9 Nights",
    group: "Private / Couple",
    price: 2890,
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
    price: 3450,
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
    price: 3950,
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
    price: 2190,
    rating: 4.99,
    reviews: 310,
    badge: "SACRED PILGRIMAGE",
  },
];

export default function PopularTours() {
  return (
    <section className="py-28 bg-[#F8FAFC] border-t border-slate-200/60">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#C5A059] font-bold text-xs uppercase tracking-[0.25em] block mb-3">
              ✦ Handcrafted Curations
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-luxury font-normal text-[#0A1128] tracking-tight">
              Bespoke Tour Packages
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-4 font-light leading-relaxed">
              Every detail carefully orchestrated—private chauffeured transfers, verified 5-star properties, English-speaking specialist guides, and VIP airport services.
            </p>
          </div>
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0A1128] hover:text-[#C5A059] transition-colors pb-1 border-b-2 border-[#0A1128] hover:border-[#C5A059] self-start md:self-auto"
          >
            <span>Browse Full Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {luxuryTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col justify-between card-luxury group"
            >
              <div>
                {/* Photo with Overlay */}
                <div className="relative h-64 w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#0A1128]/90 backdrop-blur-md text-[#DFB76C] text-[9.5px] font-bold tracking-[0.16em] uppercase px-3 py-1.5 rounded-full border border-[#C5A059]/30">
                      {tour.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-[#C5A059] font-semibold uppercase tracking-wider mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{tour.destination}</span>
                  </div>

                  <h3 className="font-serif-luxury font-medium text-lg text-[#0A1128] leading-snug mb-4 group-hover:text-[#C5A059] transition-colors">
                    {tour.title}
                  </h3>

                  <div className="flex items-center justify-between text-xs text-slate-500 py-3 border-y border-slate-100 mb-4">
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

              {/* Price & Action */}
              <div className="p-6 pt-0">
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <span className="text-[10.5px] uppercase tracking-wider text-slate-400 block font-medium">
                      All-Inclusive From
                    </span>
                    <div className="text-2xl font-serif-luxury font-bold text-[#0A1128]">
                      ${tour.price.toLocaleString()}
                      <span className="text-xs text-slate-400 font-sans font-normal ml-1">
                        /person
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold text-slate-700">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>{tour.rating}</span>
                  </div>
                </div>

                <Link
                  href={`/tours/${tour.id}`}
                  className="w-full flex items-center justify-center gap-2 bg-[#0A1128] hover:bg-[#C5A059] text-white hover:text-[#0A1128] text-xs font-bold uppercase tracking-[0.16em] py-3 rounded-xl transition-all duration-300"
                >
                  <span>View Itinerary</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
