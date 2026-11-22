import Image from "next/image";
import Link from "next/link";
import { Award, Users, Globe, ShieldCheck, CheckCircle2, Phone, MapPin, Mail } from "lucide-react";

const stats = [
  { value: "10K+", label: "Happy Travelers" },
  { value: "45+", label: "Global Destinations" },
  { value: "99%", label: "Satisfaction Rate" },
  { value: "24/7", label: "Customer Assistance" },
];

const values = [
  {
    icon: Globe,
    title: "Beyond Boundaries",
    description: "Curating journeys that take you beyond standard itineraries into authentic, unforgettable cultural moments.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Transparency",
    description: "Clear pricing with no hidden charges. Reliable visa counseling, air ticketing, and verified hotel stays.",
  },
  {
    icon: Award,
    title: "Excellence in Service",
    description: "From our Chattogram headquarters to worldwide partners, our dedicated team ensures five-star service.",
  },
  {
    icon: Users,
    title: "Client-Centric Care",
    description: "Tailoring every vacation to your individual desires, family comforts, and corporate group demands.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 pt-32 pb-24 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4">
            About Flyza Tours & Travels
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-poppins mb-6 tracking-tight">
            Beyond Every Journey
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Headquartered in Chattogram, Bangladesh, Flyza Tours & Travels is committed to redefining your travel experience through tailored itineraries, transparent bookings, and world-class care.
          </p>
        </div>
      </div>

      {/* Stats Counter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100">
          {stats.map((s, i) => (
            <div key={i} className="text-center p-3">
              <div className="text-3xl sm:text-4xl font-extrabold font-poppins text-slate-900">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Story & Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-amber-600 font-bold text-xs uppercase tracking-widest">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-slate-900 mt-2 mb-6">
              Your Reliable Travel Partner in Bangladesh & Beyond
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">
              At <strong>Flyza Tours & Travels</strong>, we believe every trip is more than just a flight ticket—it’s a memory to cherish. Located at O.R. Nizam Road, GEC, Chattogram, our experienced team provides end-to-end travel management for holidaymakers, pilgrims, corporate groups, and independent explorers.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
              Whether you are planning a serene retreat in the Maldives, an exhilarating desert safari in Dubai, cultural exploration across Europe and Turkey, or sacred Umrah journeys, Flyza crafts seamless experiences with trusted airlines, premier hotels, and local guides.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Authorized Ticketing & IATA Partner Network",
                "Dedicated Visa Advisory & Processing Support",
                "Customized Domestic & International Tour Packages",
                "24/7 Dedicated Assistance for Every Traveler",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/tours"
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-xl transition-all"
              >
                Explore Tour Packages
              </Link>
              <Link
                href="/contact"
                className="border border-slate-300 text-slate-800 hover:border-amber-500 hover:text-amber-600 font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-xl transition-all"
              >
                Contact Our Team
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=900&q=80"
                alt="Flyza Travel Experience"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-amber-400 font-bold text-xs uppercase tracking-wider">
                  Flyza Headquarters
                </div>
                <div className="font-poppins font-bold text-lg mt-0.5">
                  GEC, Chattogram, Bangladesh
                </div>
                <div className="text-xs text-slate-300 mt-1">
                  1st Floor, House No. 87, Road No. 7, O.R. Nizam Road
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-slate-50 py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-600 font-bold text-xs uppercase tracking-widest">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-slate-900 mt-2">
              Why Travelers Choose Flyza
            </h2>
            <p className="text-slate-500 text-sm mt-3">
              We uphold standard-setting service with personalized care for every customer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold font-poppins text-slate-900 text-lg mb-2">
                    {v.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contact Quick Box */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950 rounded-3xl p-10 sm:p-14 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-4xl font-extrabold font-poppins mb-4">
              Ready to embark on your journey?
            </h3>
            <p className="text-slate-300 text-sm mb-8">
              Speak directly with our travel planners at Chattogram for customized quotations, group discounts, and immediate assistance.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a
                href="tel:+8801334225588"
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call +880 1334-225588</span>
              </a>
              <a
                href="mailto:infoflyza@gmail.com"
                className="border border-white/20 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>infoflyza@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
