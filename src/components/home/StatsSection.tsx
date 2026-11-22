const stats = [
  { value: "10,000+", label: "Distinguished Travelers", sub: "Curated experiences since 2009" },
  { value: "45+", label: "Global Destinations", sub: "Across 6 continents" },
  { value: "1,000+", label: "Accredited Partner Hospitals", sub: "Strategic healthcare network" },
  { value: "99.4%", label: "Client Satisfaction", sub: "Five-star concierge rating" },
];

export default function StatsSection() {
  return (
    <section className="bg-[#050B14] border-y border-[#C5A059]/20 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y sm:divide-y-0 sm:divide-x divide-slate-800/80">
          {stats.map((s, idx) => (
            <div key={idx} className="text-center px-4 pt-6 sm:pt-0">
              <div className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-white tracking-tight mb-2">
                <span className="gold-gradient-text">{s.value}</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 uppercase tracking-[0.16em]">
                {s.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-1 font-light">
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
