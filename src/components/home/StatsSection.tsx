const stats = [
  { number: "10K+", label: "Happy Travelers", icon: "😊" },
  { number: "150+", label: "Destinations", icon: "🌍" },
  { number: "500+", label: "Tour Packages", icon: "✈️" },
  { number: "15+", label: "Years Experience", icon: "🏆" },
];

export default function StatsSection() {
  return (
    <section className="bg-gradient-to-r from-sky-600 to-indigo-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center text-white group"
            >
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-200">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-extrabold font-poppins mb-1">
                {stat.number}
              </div>
              <div className="text-sky-100 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
