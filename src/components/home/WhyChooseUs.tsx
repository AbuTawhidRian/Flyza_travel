import { Compass, ShieldCheck, HeartHandshake, Award, Clock, Banknote } from "lucide-react";
import TiltCard3D from "@/components/ui/TiltCard3D";
import ScrollReveal from "@/components/ui/ScrollReveal";

const pillars = [
  {
    num: "01",
    icon: Compass,
    title: "Bespoke Itinerary Architecture",
    description: "Every journey is customized around your personal pace, culinary tastes, luxury villa preferences, and cultural interests.",
  },
  {
    num: "02",
    icon: ShieldCheck,
    title: "Verified 5-Star Partner Networks",
    description: "Exclusive access to private aviation charters, luxury boutique hotels, private yachting, and accredited hospital suites.",
  },
  {
    num: "03",
    icon: Clock,
    title: "Dedicated 24/7 Private Concierge",
    description: "From departure to return, your personal travel coordinator in Chattogram ensures round-the-clock priority care.",
  },
  {
    num: "04",
    icon: Banknote,
    title: "Complete Price Transparency",
    description: "Transparent luxury pricing with no hidden charges, markups, or referral fees. Authentic value guaranteed.",
  },
  {
    num: "05",
    icon: Award,
    title: "IATA & Aviation Standards",
    description: "Fully certified ticketing and visa protocols ensuring zero stress and seamless international border clearances.",
  },
  {
    num: "06",
    icon: HeartHandshake,
    title: "Medical & Wellness Expertise",
    description: "Specialized liaison for medical tourism with My 1 Health, coordinating appointments with world-renowned specialists.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-28 bg-[#F7F5F0]">
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#9E7D3B] font-bold text-xs uppercase tracking-[0.25em] block mb-3">
              ✦ The Flyza Standard of Excellence
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-luxury font-normal text-[#040812] tracking-tight mb-4">
              Why Discerning Travelers Choose Us
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
              Over a decade of orchestrating remarkable global journeys with absolute discretion, integrity, and bespoke luxury.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <TiltCard3D
                key={idx}
                maxTilt={6}
                glareOpacity={0.14}
                className="bg-white rounded-3xl p-8 sm:p-9 border border-slate-200/70 shadow-[0_6px_30px_rgba(4,8,18,0.04)] group"
              >
                <div className="preserve-3d">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#040812] text-[#E8C987] flex items-center justify-center translate-z-md group-hover:bg-[#C5A059] group-hover:text-[#040812] transition-all duration-300 shadow-lg">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-serif-luxury text-3xl text-slate-200 group-hover:text-[#C5A059]/40 transition-colors select-none">
                      {p.num}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif-luxury font-medium text-[#040812] mb-3 group-hover:text-[#9E7D3B] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-light">
                    {p.description}
                  </p>
                </div>
              </TiltCard3D>
            );
          })}
        </div>
      </div>
    </section>
  );
}
