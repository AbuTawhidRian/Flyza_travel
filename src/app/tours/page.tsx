"use client";

import { useState } from "react";
import { Clock, Users, Star, MapPin, Search, SlidersHorizontal } from "lucide-react";
import Link from "next/link";

const allTours = [
  {
    id: 1, title: "Greek Island Hopping", image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=600&q=80",
    destination: "Greece", duration: "10 Days", groupSize: "Max 12", price: 2499, originalPrice: 2999,
    rating: 4.9, reviews: 128, category: "Luxury", difficulty: "Easy",
    highlights: ["Santorini", "Mykonos", "Athens", "Boat tours"],
  },
  {
    id: 2, title: "Bali Spiritual Retreat", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    destination: "Indonesia", duration: "7 Days", groupSize: "Max 8", price: 1699, originalPrice: 2199,
    rating: 4.8, reviews: 95, category: "Wellness", difficulty: "Easy",
    highlights: ["Yoga sessions", "Temple visits", "Cooking class", "Rice terraces"],
  },
  {
    id: 3, title: "Tokyo Cultural Experience", image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=600&q=80",
    destination: "Japan", duration: "8 Days", groupSize: "Max 15", price: 2899, originalPrice: 3299,
    rating: 4.9, reviews: 142, category: "Culture", difficulty: "Easy",
    highlights: ["Tea ceremony", "Mount Fuji", "Kyoto temples", "Sushi making"],
  },
  {
    id: 4, title: "Maldives Overwater Paradise", image: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=600&q=80",
    destination: "Maldives", duration: "5 Days", groupSize: "Couples", price: 3999, originalPrice: 4999,
    rating: 5.0, reviews: 67, category: "Romantic", difficulty: "Easy",
    highlights: ["Overwater villa", "Snorkeling", "Sunset cruise", "Private beach"],
  },
  {
    id: 5, title: "Kenya Wildlife Safari", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80",
    destination: "Kenya", duration: "9 Days", groupSize: "Max 10", price: 3299, originalPrice: 3999,
    rating: 4.8, reviews: 83, category: "Adventure", difficulty: "Moderate",
    highlights: ["Big Five", "Maasai Mara", "Hot air balloon", "Local village"],
  },
  {
    id: 6, title: "Paris Romance Tour", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80",
    destination: "France", duration: "6 Days", groupSize: "Couples", price: 2199, originalPrice: 2699,
    rating: 4.7, reviews: 211, category: "Romantic", difficulty: "Easy",
    highlights: ["Eiffel Tower", "Louvre", "Seine cruise", "Versailles"],
  },
  {
    id: 7, title: "Amazon Jungle Adventure", image: "https://images.unsplash.com/photo-1536183922588-166604504d5e?w=600&q=80",
    destination: "Brazil", duration: "8 Days", groupSize: "Max 10", price: 2799, originalPrice: 3499,
    rating: 4.6, reviews: 54, category: "Adventure", difficulty: "Challenging",
    highlights: ["Jungle trek", "River piranha fishing", "Indigenous tribes", "Anaconda spotting"],
  },
  {
    id: 8, title: "Northern Lights Iceland", image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&q=80",
    destination: "Iceland", duration: "6 Days", groupSize: "Max 20", price: 2599, originalPrice: 3099,
    rating: 4.9, reviews: 178, category: "Adventure", difficulty: "Easy",
    highlights: ["Aurora viewing", "Golden Circle", "Blue Lagoon", "Glacier walk"],
  },
  {
    id: 9, title: "Himalayan Trekking Expedition", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
    destination: "Nepal", duration: "14 Days", groupSize: "Max 8", price: 1999, originalPrice: 2499,
    rating: 4.7, reviews: 92, category: "Adventure", difficulty: "Challenging",
    highlights: ["Everest Base Camp", "Sherpa culture", "Namche Bazaar", "Mountain views"],
  },
];

const categories = ["All", "Luxury", "Adventure", "Romantic", "Culture", "Wellness"];

export default function ToursPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");

  const filtered = allTours.filter((t) => {
    const matchSearch = t.title.toLowerCase().includes(search.toLowerCase()) ||
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
    <div className="min-h-screen bg-gray-50">
      {/* Page Hero */}
      <div className="relative bg-gradient-to-br from-sky-600 to-indigo-700 pt-28 pb-16">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80')", backgroundSize: "cover" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold font-poppins text-white mb-4">
            Our Tour Packages
          </h1>
          <p className="text-sky-100 text-xl max-w-2xl mx-auto">
            {allTours.length}+ handcrafted experiences waiting to be explored
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-8 flex flex-col md:flex-row gap-4 items-center">
          {/* Search */}
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search tours or destinations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-sky-500 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-gray-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <p className="text-gray-500 text-sm mb-6">
          Showing <span className="font-semibold text-gray-800">{filtered.length}</span> tours
        </p>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden card-hover border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={tour.image} alt={tour.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                <div className="absolute top-3 left-3 bg-sky-500 text-white text-xs font-semibold px-3 py-1 rounded-full">{tour.category}</div>
                <div className="absolute top-3 right-3 bg-white/90 text-gray-700 text-xs font-medium px-2 py-1 rounded-lg">{tour.difficulty}</div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-1 text-gray-500 text-xs mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{tour.destination}</span>
                </div>
                <h3 className="font-bold text-gray-900 font-poppins text-lg mb-2">{tour.title}</h3>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {tour.highlights.slice(0, 3).map((h, i) => (
                    <span key={i} className="text-xs bg-sky-50 text-sky-600 px-2 py-0.5 rounded-md">{h}</span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{tour.duration}</span>
                  <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{tour.groupSize}</span>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold">{tour.rating}</span>
                  <span className="text-xs text-gray-400">({tour.reviews})</span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-xs text-gray-400 line-through">${tour.originalPrice.toLocaleString()}</span>
                    <div className="text-xl font-extrabold text-sky-600 font-poppins">
                      ${tour.price.toLocaleString()}
                      <span className="text-xs text-gray-400 font-normal">/person</span>
                    </div>
                  </div>
                  <Link
                    href={`/tours/${tour.id}`}
                    className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:shadow-md transition-all"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700">No tours found</h3>
            <p className="text-gray-400 mt-2">Try a different search or category</p>
          </div>
        )}
      </div>
    </div>
  );
}
