import Link from "next/link";
import { MapPin } from "lucide-react";

const destinations = [
  {
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80",
    tours: 24,
    tag: "Romantic",
    tagColor: "bg-pink-500",
  },
  {
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80",
    tours: 36,
    tag: "Adventure",
    tagColor: "bg-orange-500",
  },
  {
    name: "Maldives",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80",
    tours: 18,
    tag: "Luxury",
    tagColor: "bg-purple-500",
  },
  {
    name: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80",
    tours: 29,
    tag: "Culture",
    tagColor: "bg-red-500",
  },
  {
    name: "Paris, France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80",
    tours: 42,
    tag: "Classic",
    tagColor: "bg-sky-500",
  },
  {
    name: "Safari, Kenya",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80",
    tours: 15,
    tag: "Wildlife",
    tagColor: "bg-green-500",
  },
];

export default function FeaturedDestinations() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-sky-500 font-semibold text-sm uppercase tracking-widest">
            Top Picks
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-poppins text-gray-900 mt-2 mb-4">
            Featured Destinations
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From sun-soaked beaches to ancient cultural wonders — discover the world's
            most breathtaking destinations, handpicked for you.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, i) => (
            <Link
              key={i}
              href="/destinations"
              className="group relative overflow-hidden rounded-2xl shadow-md card-hover block"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />

                {/* Tag */}
                <span
                  className={`absolute top-4 left-4 ${dest.tagColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}
                >
                  {dest.tag}
                </span>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-1.5 text-white/80 text-sm mb-1">
                    <MapPin className="w-4 h-4" />
                    <span>{dest.tours} tours available</span>
                  </div>
                  <h3 className="text-white text-xl font-bold font-poppins">
                    {dest.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 border-2 border-sky-500 text-sky-600 px-8 py-3 rounded-full font-semibold hover:bg-sky-500 hover:text-white transition-all duration-200"
          >
            View All Destinations
          </Link>
        </div>
      </div>
    </section>
  );
}
