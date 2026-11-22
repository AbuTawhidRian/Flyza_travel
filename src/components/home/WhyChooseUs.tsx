import { Compass, ShieldCheck, HeartHandshake, Award, Clock, Banknote } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Bespoke Itinerary Architecture",
    description: "Every journey is customized around your personal pace, culinary tastes, luxury villa preferences, and cultural interests.",
  },
  {
    icon: ShieldCheck,
    title: "Verified 5-Star Partner Networks",
    description: "Exclusive access to private aviation charters, luxury boutique hotels, private yachting, and accredited hospital suites.",
  },
  {
    icon: Clock,
    title: "Dedicated 24/7 Private Concierge",
    description: "From departure to return, your personal travel coordinator in Chattogram ensures round-the-clock priority care.",
  },
  {
    icon: Banknote,
    title: "Complete Price Transparency",
    description: "Transparent luxury pricing with no hidden charges, markups, or referral fees. Authentic value guaranteed.",
  },
  {
    icon: Award,
    title: "IATA & Aviation Standards",
    description: "Fully certified ticketing and visa protocols ensuring zero stress and seamless international border clearances.",
  },
  {
    icon: HeartHandshake,
    title: "Medical & Wellness Expertise",
    description: "Specialized liaison for medical tourism with My 1 Health, coordinating appointments with world-renowned specialists.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-28 bg-[#FDFDFD]">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#C5A059] font-bold text-xs uppercase tracking-[0.25em] block mb-3">
            ✦ The Flyza Standard of Excellence
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-normal text-[#0A1128] tracking-tight mb-4">
            Why Discerning Travelers Choose Us
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-light leading-relaxed">
            Over a decade of orchestrating remarkable global journeys with absolute discretion, integrity, and bespoke luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] card-luxury group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0A1128] text-[#DFB76C] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#C5A059] group-hover:text-[#0A1128] transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif-luxury font-medium text-[#0A1128] mb-3 group-hover:text-[#C5A059] transition-colors">
                  {p.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
