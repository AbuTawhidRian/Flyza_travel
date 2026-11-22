const reasons = [
  {
    icon: "🛡️",
    title: "100% Safe & Secure",
    description:
      "Your safety is our top priority. All tours are fully insured with 24/7 emergency support worldwide.",
  },
  {
    icon: "💰",
    title: "Best Price Guarantee",
    description:
      "We promise the lowest prices on all our packages. Found cheaper? We'll match it, no questions asked.",
  },
  {
    icon: "🌐",
    title: "Global Network",
    description:
      "With partners in 150+ countries, we ensure seamless experiences wherever your journey takes you.",
  },
  {
    icon: "🎯",
    title: "Tailored Experiences",
    description:
      "Every trip is custom-crafted to match your preferences, budget, and travel style perfectly.",
  },
  {
    icon: "👨‍✈️",
    title: "Expert Local Guides",
    description:
      "Our certified local guides bring destinations to life with authentic cultural insights and hidden gems.",
  },
  {
    icon: "⚡",
    title: "Instant Confirmation",
    description:
      "Book with confidence. Get instant booking confirmation and 24/7 customer support throughout.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sky-400 font-semibold text-sm uppercase tracking-widest">
            Why Flyza?
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-poppins text-white mt-2 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Over 15 years of turning dreams into memories. Here's why millions of
            travelers trust Flyza for their adventures.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-6 hover:bg-white/20 transition-colors duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                {reason.icon}
              </div>
              <h3 className="text-white font-bold text-lg font-poppins mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
