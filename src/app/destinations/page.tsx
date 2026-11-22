import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const destinations = [
  {
    continent: "Europe",
    places: [
      { name: "Santorini, Greece", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=500&q=80", tours: 24, description: "Iconic blue domes, volcanic beaches and world-class sunsets." },
      { name: "Paris, France", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&q=80", tours: 42, description: "The city of love — art, fashion, cuisine and the Eiffel Tower." },
      { name: "Amalfi Coast, Italy", image: "https://images.unsplash.com/photo-1534308143481-c55f00dc7c78?w=500&q=80", tours: 18, description: "Dramatic cliffs, turquoise waters and charming hilltop villages." },
      { name: "Iceland", image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=500&q=80", tours: 15, description: "Witness the northern lights, geysers and volcanic landscapes." },
    ],
  },
  {
    continent: "Asia",
    places: [
      { name: "Bali, Indonesia", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500&q=80", tours: 36, description: "Tropical paradise of temples, terraced rice fields and surf." },
      { name: "Tokyo, Japan", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500&q=80", tours: 29, description: "Ultra-modern city blending ancient tradition with futuristic innovation." },
      { name: "Maldives", image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=500&q=80", tours: 18, description: "Crystal-clear lagoons, overwater bungalows and pristine coral reefs." },
      { name: "Phuket, Thailand", image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=500&q=80", tours: 27, description: "Vibrant beach culture, stunning limestone cliffs and Thai cuisine." },
    ],
  },
  {
    continent: "Africa & Americas",
    places: [
      { name: "Safari, Kenya", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&q=80", tours: 15, description: "Witness the Great Migration and Africa's magnificent Big Five wildlife." },
      { name: "Marrakech, Morocco", image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=500&q=80", tours: 20, description: "Ancient medinas, vibrant souks and the Sahara desert at your door." },
      { name: "Machu Picchu, Peru", image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=500&q=80", tours: 12, description: "The lost Incan city perched among Andean peaks and cloud forests." },
      { name: "New York, USA", image: "https://images.unsplash.com/photo-1547636780-e41c18f0e49c?w=500&q=80", tours: 32, description: "The city that never sleeps — iconic skyline, culture and cuisine." },
    ],
  },
];

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-indigo-700 to-sky-600 pt-28 pb-20">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80')", backgroundSize: "cover" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            🌍 150+ Destinations Worldwide
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold font-poppins text-white mb-4">
            Explore Destinations
          </h1>
          <p className="text-indigo-100 text-xl max-w-2xl mx-auto">
            From the mountains to the sea — discover the world's most breathtaking
            destinations, all curated by our travel experts.
          </p>
        </div>
      </div>

      {/* Destinations by continent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {destinations.map((group, gi) => (
          <div key={gi} className="mb-16">
            <h2 className="text-3xl font-extrabold font-poppins text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-10 h-1 bg-sky-500 rounded" />
              {group.continent}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {group.places.map((place, pi) => (
                <Link
                  key={pi}
                  href="/tours"
                  className="group block bg-white rounded-2xl overflow-hidden shadow-md card-hover border border-gray-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex items-center gap-1 text-white/80 text-xs mb-1">
                        <MapPin className="w-3 h-3" />
                        <span>{place.tours} tours</span>
                      </div>
                      <h3 className="text-white font-bold font-poppins text-sm">{place.name}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">{place.description}</p>
                    <div className="flex items-center gap-1 text-sky-600 text-sm font-medium group-hover:gap-2 transition-all">
                      <span>Explore Tours</span>
                      <ArrowRight className="w-4 h-4" />
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
