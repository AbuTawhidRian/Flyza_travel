import Link from "next/link";
import { Clock, Users, Star, MapPin, ArrowRight } from "lucide-react";

const tours = [
  {
    id: 1,
    title: "Greek Island Hopping",
    image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=600&q=80",
    destination: "Greece",
    duration: "10 Days",
    groupSize: "Max 12",
    price: 2499,
    originalPrice: 2999,
    rating: 4.9,
    reviews: 128,
    category: "Luxury",
  },
  {
    id: 2,
    title: "Bali Spiritual Retreat",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    destination: "Indonesia",
    duration: "7 Days",
    groupSize: "Max 8",
    price: 1699,
    originalPrice: 2199,
    rating: 4.8,
    reviews: 95,
    category: "Wellness",
  },
  {
    id: 3,
    title: "Tokyo Cultural Experience",
    image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=600&q=80",
    destination: "Japan",
    duration: "8 Days",
    groupSize: "Max 15",
    price: 2899,
    originalPrice: 3299,
    rating: 4.9,
    reviews: 142,
    category: "Culture",
  },
  {
    id: 4,
    title: "Maldives Overwater Paradise",
    image: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=600&q=80",
    destination: "Maldives",
    duration: "5 Days",
    groupSize: "Couples",
    price: 3999,
    originalPrice: 4999,
    rating: 5.0,
    reviews: 67,
    category: "Romantic",
  },
];

export default function PopularTours() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-sky-500 font-semibold text-sm uppercase tracking-widest">
              Best Sellers
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-poppins text-gray-900 mt-2">
              Popular Tours
            </h2>
            <p className="text-gray-500 mt-3 max-w-lg">
              Our most loved packages, chosen by thousands of happy travelers.
            </p>
          </div>
          <Link
            href="/tours"
            className="flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700 group"
          >
            View All Tours
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden card-hover border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-3 left-3 bg-sky-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {tour.category}
                </div>
                <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
                  SALE
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-1 text-gray-500 text-xs mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{tour.destination}</span>
                </div>
                <h3 className="font-bold text-gray-900 font-poppins text-base mb-3 leading-tight">
                  {tour.title}
                </h3>

                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {tour.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    {tour.groupSize}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold text-gray-800">{tour.rating}</span>
                  <span className="text-xs text-gray-400">({tour.reviews} reviews)</span>
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-400 line-through">${tour.originalPrice.toLocaleString()}</span>
                    <div className="text-xl font-extrabold text-sky-600 font-poppins">
                      ${tour.price.toLocaleString()}
                      <span className="text-xs text-gray-400 font-normal">/person</span>
                    </div>
                  </div>
                  <Link
                    href={`/tours/${tour.id}`}
                    className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-xs font-semibold px-4 py-2 rounded-xl hover:shadow-md hover:scale-105 transition-all"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
