"use client";

import { useState } from "react";
import { Clock, Users, Star, MapPin, Search, SlidersHorizontal, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

const allTours = [
  {
    id: 1,
    title: "Greek Odyssey: Private Yachting & Aegean Villas",
    destination: "Santorini & Mykonos, Greece",
    duration: "10 Days / 9 Nights",
    groupSize: "Private / Couple",
    price: 2890,
    originalPrice: 3400,
    rating: 4.98,
    reviews: 142,
    category: "Luxury Escapes",
    difficulty: "Leisure",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1000&q=85",
    highlights: ["Private Catamaran Cruise", "Caldera Sunset Villa", "Acropolis VIP Access"],
  },
  {
    id: 2,
    title: "Swiss Alpine Serenity: Zermatt & St. Moritz Express",
    destination: "Zurich & Alps, Switzerland",
    duration: "8 Days / 7 Nights",
    groupSize: "Bespoke Itinerary",
    price: 3450,
    originalPrice: 4100,
    rating: 4.95,
    reviews: 98,
    category: "Alpine & Nature",
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1000&q=85",
    highlights: ["Glacier Express First Class", "Matterhorn Chalet", "Lake Geneva Cruise"],
  },
  {
    id: 3,
    title: "Maldives Overwater Sanctuary & Coral Atolls",
    destination: "North Malé Atoll, Maldives",
    duration: "6 Days / 5 Nights",
    groupSize: "Private Pool Villa",
    price: 3950,
    originalPrice: 4700,
    rating: 5.0,
    reviews: 86,
    category: "Luxury Escapes",
    difficulty: "Leisure",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1000&q=85",
    highlights: ["Overwater Sunrise Villa", "Private Seaplane", "Submarine Dining"],
  },
  {
    id: 4,
    title: "Sacred Umrah & Spiritual Elegance Journey",
    destination: "Makkah & Madinah, Saudi Arabia",
    duration: "12 Days / 11 Nights",
    groupSize: "5-Star Haram View",
    price: 2190,
    originalPrice: 2600,
    rating: 4.99,
    reviews: 310,
    category: "Sacred Pilgrimages",
    difficulty: "Leisure",
    image: "https://images.unsplash.com/photo-1565552684305-7e23f0449914?w=1000&q=85",
    highlights: ["Direct Clock Tower Facing", "Haramain High-Speed Train", "Private Ziyarah"],
  },
  {
    id: 5,
    title: "Kyoto Heritage & Imperial Tokyo Immersion",
    destination: "Kyoto & Tokyo, Japan",
    duration: "9 Days / 8 Nights",
    groupSize: "Small VIP Group",
    price: 3200,
    originalPrice: 3800,
    rating: 4.96,
    reviews: 115,
    category: "Cultural Heritage",
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1000&q=85",
    highlights: ["Private Tea Master Ceremony", "Shinkansen Bullet Train", "Onsen Sanctuary"],
  },
  {
    id: 6,
    title: "Maasai Mara Great Migration & Tented Luxury",
    destination: "Nairobi & Mara, Kenya",
    duration: "7 Days / 6 Nights",
    groupSize: "Private 4x4 Safari",
    price: 3600,
    originalPrice: 4300,
    rating: 4.97,
    reviews: 74,
    category: "Wild Expeditions",
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1000&q=85",
    highlights: ["Hot Air Balloon Dawn Safari", "Big Five Tracking", "Exclusive Tented Camp"],
  },
  {
    id: 7,
    title: "Cappadocia Cave Suites & Bosphorus Elegance",
    destination: "Istanbul & Cappadocia, Turkey",
    duration: "8 Days / 7 Nights",
    groupSize: "Bespoke Couple",
    price: 2350,
    originalPrice: 2800,
    rating: 4.93,
    reviews: 130,
    category: "Cultural Heritage",
    difficulty: "Leisure",
    image: "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=1000&q=85",
    highlights: ["Sunrise Hot Air Balloon", "Private Yacht Sunset Cruise", "Historical Sultanahmet"],
  },
  {
    id: 8,
    title: "Bali Royal Sanctuary & Ubud Wellness Retreat",
    destination: "Ubud & Seminyak, Indonesia",
    duration: "7 Days / 6 Nights",
    groupSize: "Private Pool Villa",
    price: 1850,
    originalPrice: 2200,
    rating: 4.91,
    reviews: 165,
    category: "Wellness & Spa",
    difficulty: "Leisure",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1000&q=85",
    highlights: ["Holistic Ayurvedic Therapies", "Sacred Water Temple", "Private Chef Dinners"],
  },
];

const categories = ["All", "Luxury Escapes", "Sacred Pilgrimages", "Cultural Heritage", "Alpine & Nature", "Wild Expeditions", "Wellness & Spa"];

export default function ToursPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");

  const filtered = allTours.filter((t) => {
    const matchSearch =
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.destination.toLowerCase().includes(search.toLowerCase());
    const matchCat = selectedCategory === "All" || t.category === selectedCategory;
    return matchSearch && matchCat;
  }).sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      {/* Hero */}
      <div className="relative bg-[#050B14] pt-36 pb-24 text-white overflow-hidden border-b border-[#C5A059]/20">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 text-center">
          <span className="text-[#C5A059] font-bold text-xs uppercase tracking-[0.28em] block mb-4">
            ✦ Curated Travel Catalog
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-luxury font-normal tracking-tight mb-4">
            Bespoke Tour Packages
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Every itinerary is personally orchestrated with verified 5-star properties, private transfers, and 24/7 dedicated concierge care.
          </p>
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14 py-14">
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.04)] border border-slate-100 p-6 mb-12 flex flex-col lg:flex-row gap-5 items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C5A059]" />
            <input
              type="text"
              placeholder="Search by destination or package name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]/20 focus:border-[#C5A059]"
            />
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-2 w-full lg:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? "bg-[#0A1128] text-[#C5A059] shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sorter */}
          <div className="flex items-center gap-2 self-end lg:self-auto flex-shrink-0">
            <SlidersHorizontal className="w-4 h-4 text-slate-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-[#C5A059]/20 bg-white"
            >
              <option value="featured">Featured Curations</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
          Showing <span className="text-[#0A1128] font-black">{filtered.length}</span> Curated Packages
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filtered.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col justify-between card-luxury group"
            >
              <div>
                <div className="relative h-64 w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#0A1128]/90 backdrop-blur-md text-[#DFB76C] text-[9.5px] font-bold tracking-[0.16em] uppercase px-3 py-1.5 rounded-full border border-[#C5A059]/30">
                      {tour.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-[#C5A059] font-semibold uppercase tracking-wider mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{tour.destination}</span>
                  </div>

                  <h3 className="font-serif-luxury font-medium text-lg text-[#0A1128] leading-snug mb-3 group-hover:text-[#C5A059] transition-colors">
                    {tour.title}
                  </h3>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {tour.highlights.map((h, hi) => (
                      <span key={hi} className="text-[10.5px] bg-slate-50 text-slate-600 px-2.5 py-1 rounded-md font-medium">
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-500 py-3 border-y border-slate-100">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {tour.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      {tour.groupSize}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-medium">
                      Starting From
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
                  <span>Explore Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
