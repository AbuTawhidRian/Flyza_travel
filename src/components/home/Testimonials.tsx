const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    avatar: "https://i.pravatar.cc/80?img=1",
    rating: 5,
    text:
      "Flyza made our honeymoon in Maldives absolutely magical. Every detail was perfect — the overwater villa, the sunset cruise, the private beach dinner. We couldn't have asked for more!",
    tour: "Maldives Overwater Paradise",
  },
  {
    name: "Ahmed Al-Rashid",
    location: "Dubai, UAE",
    avatar: "https://i.pravatar.cc/80?img=3",
    rating: 5,
    text:
      "The Japan cultural tour exceeded all expectations. Our guide Kenji was phenomenal — taking us to places we'd never have found on our own. Flyza is truly world-class.",
    tour: "Tokyo Cultural Experience",
  },
  {
    name: "Emma Thompson",
    location: "London, UK",
    avatar: "https://i.pravatar.cc/80?img=5",
    rating: 5,
    text:
      "I've booked three trips with Flyza now and each one has been better than the last. The team is incredibly responsive and the value for money is unbeatable. Highly recommend!",
    tour: "Greek Island Hopping",
  },
  {
    name: "Carlos Rivera",
    location: "Mexico City, Mexico",
    avatar: "https://i.pravatar.cc/80?img=7",
    rating: 5,
    text:
      "The Bali retreat was a life-changing experience. The yoga sessions at sunrise, temple visits, and cooking classes were incredibly well-organized. Flyza really understands travelers.",
    tour: "Bali Spiritual Retreat",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sky-500 font-semibold text-sm uppercase tracking-widest">
            Traveler Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-poppins text-gray-900 mt-2 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Don't just take our word for it — hear from thousands of happy adventurers who
            trusted Flyza with their journeys.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 card-hover border border-gray-100"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <span key={s} className="text-yellow-400">⭐</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">
                "{t.text}"
              </p>

              {/* Tour tag */}
              <div className="inline-block bg-sky-50 text-sky-600 text-xs font-medium px-3 py-1 rounded-full mb-4">
                📍 {t.tour}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-sky-200"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
