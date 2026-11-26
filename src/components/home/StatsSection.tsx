import TiltCard3D from "@/components/ui/TiltCard3D";

export default function StatsSection() {
  const stats = [
    { value: "10,000+", label: "Distinguished Travelers", sub: "Curated experiences since 2009" },
    { value: "45+", label: "Global Destinations", sub: "Across 6 continents" },
    { value: "1,000+", label: "Accredited Partner Hospitals", sub: "Strategic healthcare network" },
    { value: "99.4%", label: "Client Satisfaction", sub: "Five-star concierge rating" },
  ];

  return (
    <section className="bg-[#040812] border-y border-white/10 py-14 relative overflow-hidden">
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, idx) => (
            <TiltCard3D
              key={idx}
              maxTilt={7}
              glareOpacity={0.12}
              className="rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-7 text-center hover:border-[#C5A059]/40 transition-colors"
            >
              <div className="preserve-3d">
                <div className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-normal tracking-tight mb-2 translate-z-sm">
                  <span className="gold-gradient-text">{s.value}</span>
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-slate-200 uppercase tracking-[0.16em]">
                  {s.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-1.5 font-light">
                  {s.sub}
                </div>
              </div>
            </TiltCard3D>
          ))}
        </div>
      </div>
    </section>
  );
}
