import { Star } from "lucide-react";
import TiltCard3D from "@/components/ui/TiltCard3D";
import ScrollReveal from "@/components/ui/ScrollReveal";

const testimonials = [
  {
    quote: "Flyza curated our honeymoon in the Maldives to perfection. From our private seaplane transfer to the overwater pavilion, the attention to detail was exceptional. Truly beyond every journey.",
    name: "Dr. Kazi Fahim & Anika",
    location: "Chattogram, Bangladesh",
    tour: "Maldives Private Lagoon Retreat",
  },
  {
    quote: "Our family Umrah trip was flawlessly organized. 5-star hotel right on the Haram boundary, comfortable VIP transport, and round-the-clock guidance. Flyza handled everything with supreme grace.",
    name: "Engr. Mostafa Kamal",
    location: "Dhaka, Bangladesh",
    tour: "VIP Sacred Umrah Experience",
  },
  {
    quote: "When my father needed specialized cardiac consultation in Apollo Chennai, Flyza and My 1 Health handled hospital appointments, medical visas, and airport transfers within 48 hours. Lifesaving service.",
    name: "Syed Rehan Ahmed",
    location: "Sylhet, Bangladesh",
    tour: "Medical Concierge · Apollo Hospitals",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-28 bg-white border-t border-slate-200/70">
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#9E7D3B] font-bold text-xs uppercase tracking-[0.25em] block mb-3">
              ✦ Client Chronicles
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-luxury font-normal text-[#040812] tracking-tight mb-4">
              Voices of Our Travelers
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-light">
              Memories etched in timeless comfort. Here is how our clients experience the Flyza standard.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TiltCard3D
              key={i}
              maxTilt={5}
              glareOpacity={0.12}
              className="bg-[#FAF9F6] rounded-3xl p-8 sm:p-9 shadow-[0_8px_30px_rgba(4,8,18,0.04)] border border-slate-200/80 flex flex-col justify-between"
            >
              <div className="preserve-3d">
                <div className="flex items-center gap-1 mb-6 translate-z-sm">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 text-amber-500 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 font-serif-luxury italic text-base leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200/70">
                <div className="font-bold text-[#040812] text-sm font-sans tracking-wide">
                  {t.name}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {t.location}
                </div>
                <div className="text-[11px] text-[#9E7D3B] font-semibold mt-2 uppercase tracking-wider">
                  ✦ {t.tour}
                </div>
              </div>
            </TiltCard3D>
          ))}
        </div>
      </div>
    </section>
  );
}
