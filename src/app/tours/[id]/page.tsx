import Link from "next/link";
import { Clock, Users, Star, MapPin, CheckCircle, ArrowLeft, Calendar, Shield } from "lucide-react";

const tours: Record<string, {
  id: number; title: string; image: string; destination: string; duration: string;
  groupSize: string; price: number; rating: number; reviews: number; category: string;
  difficulty: string; description: string; highlights: string[]; includes: string[];
  excludes: string[]; itinerary: { day: string; title: string; desc: string }[];
}> = {
  "1": {
    id: 1, title: "Greek Island Hopping", image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=1200&q=80",
    destination: "Greece", duration: "10 Days", groupSize: "Max 12", price: 2499, rating: 4.9,
    reviews: 128, category: "Luxury", difficulty: "Easy",
    description: "Sail through the stunning Greek islands, visiting Santorini's iconic blue domes, the vibrant nightlife of Mykonos, ancient Athens, and hidden gems only locals know. This is the ultimate Mediterranean dream.",
    highlights: ["Santorini caldera views", "Mykonos beach clubs", "Athens Acropolis tour", "Private catamaran cruise", "Authentic local tavernas", "Sunset sailing"],
    includes: ["Accommodation (boutique hotels)", "Daily breakfast", "Airport transfers", "Island ferry tickets", "Expert English guide", "Welcome dinner"],
    excludes: ["International flights", "Travel insurance", "Personal expenses", "Optional activities"],
    itinerary: [
      { day: "Day 1", title: "Arrive in Athens", desc: "Welcome dinner at a rooftop restaurant with Acropolis views." },
      { day: "Day 2", title: "Athens & History", desc: "Full-day guided tour of the Acropolis, Parthenon, and National Museum." },
      { day: "Day 3", title: "Ferry to Santorini", desc: "Morning ferry to Santorini. Arrive in Fira and check into your clifftop hotel." },
      { day: "Day 4", title: "Santorini Explorer", desc: "Oia village, volcano hike, and sunset catamaran cruise." },
      { day: "Day 5", title: "Santorini Beach Day", desc: "Free morning then ferry to Mykonos. Evening at Little Venice." },
      { day: "Day 6-7", title: "Mykonos", desc: "Windmills, beaches, and world-famous nightlife. Day trip to Delos optional." },
      { day: "Day 8-9", title: "Paros & Naxos", desc: "Hidden gems, marble villages and pristine beaches." },
      { day: "Day 10", title: "Farewell Athens", desc: "Return to Athens, farewell dinner, transfer to airport." },
    ],
  },
};

export default function TourDetailPage({ params }: { params: { id: string } }) {
  const tour = tours[params.id] ?? tours["1"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative h-[70vh] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />
        <div className="absolute top-6 left-6">
          <Link href="/tours" className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm hover:bg-white/30 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Tours
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-sky-500 text-white text-xs font-semibold px-3 py-1 rounded-full">{tour.category}</span>
              <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">{tour.difficulty}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold font-poppins text-white mb-3">{tour.title}</h1>
            <div className="flex flex-wrap gap-4 text-white/80 text-sm">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{tour.destination}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{tour.duration}</span>
              <span className="flex items-center gap-1"><Users className="w-4 h-4" />{tour.groupSize}</span>
              <span className="flex items-center gap-1"><Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />{tour.rating} ({tour.reviews} reviews)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7">
              <h2 className="text-2xl font-bold font-poppins text-gray-900 mb-4">Tour Overview</h2>
              <p className="text-gray-600 leading-relaxed">{tour.description}</p>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7">
              <h2 className="text-2xl font-bold font-poppins text-gray-900 mb-4">Tour Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tour.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-sky-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7">
              <h2 className="text-2xl font-bold font-poppins text-gray-900 mb-6">Day-by-Day Itinerary</h2>
              <div className="space-y-4">
                {tour.itinerary.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-9 h-9 bg-sky-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      {i < tour.itinerary.length - 1 && <div className="w-0.5 h-full bg-sky-100 my-1" />}
                    </div>
                    <div className="pb-4">
                      <div className="text-xs text-sky-500 font-semibold mb-0.5">{item.day}</div>
                      <div className="font-semibold text-gray-900 mb-1">{item.title}</div>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Includes/Excludes */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7">
              <h2 className="text-2xl font-bold font-poppins text-gray-900 mb-6">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                    <span className="text-green-500">✓</span> Included
                  </h3>
                  <ul className="space-y-2">
                    {tour.includes.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                    <span className="text-red-400">✗</span> Not Included
                  </h3>
                  <ul className="space-y-2">
                    {tour.excludes.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="w-4 h-4 flex items-center justify-center text-red-400 flex-shrink-0">✗</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-24">
              <div className="mb-4">
                <span className="text-xs text-gray-400">Starting from</span>
                <div className="text-4xl font-extrabold font-poppins text-sky-600 mt-0.5">
                  ${tour.price.toLocaleString()}
                  <span className="text-sm text-gray-400 font-normal">/person</span>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-5">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-sm">{tour.rating}</span>
                <span className="text-gray-400 text-xs">({tour.reviews} reviews)</span>
              </div>

              {/* Quick info */}
              <div className="border border-gray-100 rounded-xl divide-y divide-gray-100 mb-6">
                {[
                  { label: "Duration", value: tour.duration, icon: Clock },
                  { label: "Group Size", value: tour.groupSize, icon: Users },
                  { label: "Difficulty", value: tour.difficulty, icon: Shield },
                  { label: "Start Date", value: "Flexible", icon: Calendar },
                ].map(({ label, value, icon: Icon }) => (
                  <div key={label} className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Icon className="w-4 h-4" />
                      <span>{label}</span>
                    </div>
                    <span className="text-gray-900 font-medium text-sm">{value}</span>
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/8801334225588?text=${encodeURIComponent(
                  `✈️ *FLYZA TOURS & TRAVELS*\n_Beyond Every Journey_\n━━━━━━━━━━━━━━━━━━━━\n🏝️ *TOUR BOOKING INQUIRY*\n\n📌 *Package:* ${tour.title}\n🌍 *Destination:* ${tour.destination}\n⏱️ *Duration:* ${tour.duration}\n👥 *Group Size:* ${tour.groupSize}\n💰 *Price:* $${tour.price}/person\n\nHello Flyza Team, I would like to book this tour package. Please share available travel dates, hotel details, and the reservation procedure!\n\n━━━━━━━━━━━━━━━━━━━━\n📍 _Office: GEC, Chattogram, Bangladesh_`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white py-4 rounded-xl font-bold hover:shadow-xl hover:scale-[1.02] transition-all duration-200 mb-3"
              >
                Book This Tour via WhatsApp
              </a>
              <Link
                href="/contact"
                className="block w-full text-center border-2 border-slate-200 hover:border-amber-500 text-slate-700 hover:text-amber-600 py-3 rounded-xl font-semibold hover:bg-amber-50/50 transition-colors text-sm"
              >
                Custom Request / Contact Form
              </Link>

              <p className="text-center text-xs text-gray-400 mt-4">
                🔒 Secure booking · Free cancellation · No fees
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
