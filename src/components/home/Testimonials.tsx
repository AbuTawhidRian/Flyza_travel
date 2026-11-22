import { Star } from "lucide-react";

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
    <section className="py-28 bg-[#F8FAFC] border-t border-slate-200/60">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#C5A059] font-bold text-xs uppercase tracking-[0.25em] block mb-3">
            ✦ Client Chronicles
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-normal text-[#0A1128] tracking-tight mb-4">
            Voices of Our Travelers
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-light">
            Memories etched in timeless comfort. Here is how our clients experience the Flyza standard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col justify-between card-luxury"
            >
              <div>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 font-serif-luxury italic text-base leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <div className="font-bold text-[#0A1128] text-sm font-sans tracking-wide">
                  {t.name}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {t.location}
                </div>
                <div className="text-[11px] text-[#C5A059] font-semibold mt-2 uppercase tracking-wider">
                  ✦ {t.tour}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
