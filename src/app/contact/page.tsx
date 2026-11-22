"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageCircle, ArrowRight, ExternalLink, ShieldCheck } from "lucide-react";

const contactCards = [
  {
    icon: MapPin,
    title: "Headquarters",
    line1: "1st Floor, House No. 87, Road No. 7",
    line2: "O.R. Nizam Road (Beside Sanmar Ocean City), GEC, Chattogram, Bangladesh.",
    action: "Get Directions",
    href: "https://maps.google.com/?q=Sanmar+Ocean+City+GEC+Chattogram",
  },
  {
    icon: Phone,
    title: "Concierge Helpline",
    line1: "+880 1334-225588",
    line2: "Direct Telephone & VIP Line",
    action: "Call Concierge",
    href: "tel:+8801334225588",
  },
  {
    icon: Mail,
    title: "Official Correspondence",
    line1: "infoflyza@gmail.com",
    line2: "Guaranteed response within 2 business hours",
    action: "Write Email",
    href: "mailto:infoflyza@gmail.com",
  },
  {
    icon: MessageCircle,
    title: "Instant WhatsApp Liaison",
    line1: "+880 1334-225588",
    line2: "Instant itinerary quotes & booking assistance",
    action: "Chat Directly",
    href: "https://wa.me/8801334225588",
  },
];

const faqs = [
  {
    q: "Where is Flyza Tours & Travels situated?",
    a: "Our executive headquarters is located at 1st Floor, House No. 87, Road No. 7, O.R. Nizam Road, directly beside Sanmar Ocean City at GEC Circle, Chattogram, Bangladesh.",
  },
  {
    q: "What travel management services do you offer?",
    a: "We curate bespoke international holidays, sacred VIP Umrah tours, worldwide medical tourism with My 1 Health, airline ticketing, luxury hotel bookings, and comprehensive visa advisory services.",
  },
  {
    q: "How does the WhatsApp consultation work?",
    a: "When you submit your inquiry form below, all your selected parameters (dates, guests, destinations, preferences) are structured and transferred directly to our WhatsApp support team (+880 1334-225588) for prompt handling.",
  },
  {
    q: "Can itineraries be customized for private groups or families?",
    a: "Yes. Every itinerary is individually crafted by our senior travel designers according to your schedule, flight preferences, hotel star tier, and budget.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    serviceType: "Bespoke Holiday Package",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `✈️ *FLYZA TOURS & TRAVELS*
_Beyond Every Journey_
━━━━━━━━━━━━━━━━━━━━
📋 *VIP CONSULTATION & BOOKING INQUIRY*

👤 *Client Name:* ${form.name}
📞 *Phone Number:* ${form.phone}
✉️ *Email Address:* ${form.email}
🌍 *Destination / Country:* ${form.destination || "Flexible / Not decided"}
🛎️ *Service Category:* ${form.serviceType}

📝 *Travel Details & Requirements:*
${form.message ? form.message : "Please provide customized itinerary options, flight schedules, and luxury package quotes."}

━━━━━━━━━━━━━━━━━━━━
📍 _Office: GEC, Chattogram, Bangladesh_`;

    const encodedText = encodeURIComponent(formattedMessage);
    const targetUrl = `https://wa.me/8801334225588?text=${encodedText}`;

    setWhatsappUrl(targetUrl);
    setSubmitted(true);

    if (typeof window !== "undefined") {
      window.open(targetUrl, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      {/* Luxury Header Banner */}
      <div className="relative bg-[#050B14] pt-36 pb-24 text-white overflow-hidden border-b border-[#C5A059]/20">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 text-center">
          <span className="text-[#C5A059] font-bold text-xs uppercase tracking-[0.28em] block mb-3">
            ✦ Client Liaison & Inquiries
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-luxury font-normal tracking-tight mb-4">
            Connect With Flyza
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Begin the curation of your next voyage. Our senior consultants at Chattogram are at your service.
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14 py-16 -mt-12">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <a
                key={i}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="bg-white rounded-3xl p-7 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-100 card-luxury flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0A1128] text-[#C5A059] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#C5A059] group-hover:text-[#0A1128] transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-[#0A1128] font-serif-luxury font-bold text-lg mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-slate-800 text-sm font-semibold mb-1 leading-snug">
                    {card.line1}
                  </p>
                  <p className="text-slate-400 text-xs leading-relaxed font-light">
                    {card.line2}
                  </p>
                </div>
                <div className="pt-4 mt-5 border-t border-slate-100 text-xs font-bold text-[#C5A059] group-hover:text-[#0A1128] flex items-center gap-1.5 uppercase tracking-wider">
                  <span>{card.action}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Form & Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          {/* Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-slate-100">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5 border border-emerald-200">
                  <MessageCircle className="w-10 h-10 animate-bounce" />
                </div>
                <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full inline-block mb-3">
                  ✓ Inquiry Formatted for WhatsApp Concierge
                </span>
                <h3 className="text-3xl font-serif-luxury text-[#0A1128] mb-3">
                  Forwarding to WhatsApp...
                </h3>
                <p className="text-slate-500 text-sm max-w-md mx-auto mb-8 font-light leading-relaxed">
                  Your customized inquiry has been prepared for Flyza (+880 1334-225588). If WhatsApp did not open automatically, tap the button below.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-[0.16em] px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open WhatsApp Now</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        destination: "",
                        serviceType: "Bespoke Holiday Package",
                        message: "",
                      });
                    }}
                    className="w-full sm:w-auto text-xs text-slate-500 hover:text-slate-800 font-semibold px-6 py-4 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors uppercase tracking-wider"
                  >
                    New Consultation
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200/80 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Auto-Forward to WhatsApp (+880 1334-225588)</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-serif-luxury font-medium text-[#0A1128]">
                    Book a Consultation / Tour Inquiry
                  </h2>
                  <p className="text-slate-500 text-sm mt-2 font-light">
                    Share your vision with us. Once submitted, our senior travel advisors receive your message directly via WhatsApp for immediate response.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Client Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Tanvir Ahmed"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]/20 focus:border-[#C5A059]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number / WhatsApp *
                      </label>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="e.g. +880 1800-000000"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]/20 focus:border-[#C5A059]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="e.g. you@example.com"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]/20 focus:border-[#C5A059]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Destination Preference
                      </label>
                      <input
                        type="text"
                        value={form.destination}
                        onChange={(e) => setForm({ ...form, destination: e.target.value })}
                        placeholder="e.g. Maldives / Switzerland / Umrah"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]/20 focus:border-[#C5A059]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Service Category
                    </label>
                    <select
                      value={form.serviceType}
                      onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]/20 focus:border-[#C5A059] bg-white font-medium"
                    >
                      <option>Bespoke Holiday & Tour Packages</option>
                      <option>VIP Umrah & Sacred Journeys</option>
                      <option>Global Medical Tourism (My 1 Health)</option>
                      <option>First & Business Class Air Tickets</option>
                      <option>Visa Processing & Legal Advisory</option>
                      <option>Corporate Retreats & Luxury Charters</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Travel Details & Specific Preferences
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Share your travel dates, number of guests, preferred hotel tiers, or special requests..."
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]/20 focus:border-[#C5A059] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#0A1128] hover:bg-[#C5A059] text-white hover:text-[#0A1128] font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2.5 shadow-lg transition-all duration-300 hover:scale-[1.01]"
                  >
                    <MessageCircle className="w-4 h-4 text-[#C5A059] group-hover:text-[#0A1128]" />
                    <span>Send Inquiry to WhatsApp Concierge</span>
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Right Info Box & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#050B14] text-white rounded-3xl p-8 sm:p-10 border border-[#C5A059]/30 shadow-xl">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-800">
                <div className="w-14 h-14 bg-white rounded-full p-2 flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="Flyza"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-brand-heading font-black text-xl text-white">
                    Flyza Tours & Travels
                  </h3>
                  <p className="text-[10px] text-[#C5A059] uppercase tracking-[0.24em] font-extrabold mt-0.5">
                    Beyond Every Journey
                  </p>
                </div>
              </div>

              <div className="space-y-5 text-xs sm:text-sm text-slate-300 font-light">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white uppercase tracking-wider text-[11px] mb-1">
                      Headquarters Address
                    </span>
                    <span className="text-slate-400 leading-relaxed text-xs">
                      1st Floor, House No. 87, Road No. 7, O.R. Nizam Road (Beside Sanmar Ocean City), GEC, Chattogram, Bangladesh.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white uppercase tracking-wider text-[11px] mb-1">
                      Telephone Helpline
                    </span>
                    <a href="tel:+8801334225588" className="text-[#DFB76C] font-bold hover:underline">
                      +880 1334-225588
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white uppercase tracking-wider text-[11px] mb-1">
                      Electronic Mail
                    </span>
                    <a href="mailto:infoflyza@gmail.com" className="text-slate-300 hover:text-[#C5A059] hover:underline">
                      infoflyza@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white uppercase tracking-wider text-[11px] mb-1">
                      Concierge Hours
                    </span>
                    <span className="text-slate-400 text-xs">
                      Saturday – Thursday: 10:00 AM – 8:00 PM<br />
                      Friday: By Prior Appointment / 24/7 WhatsApp Emergency
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <a
                  href="https://wa.me/8801334225588"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-[0.16em] transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Direct WhatsApp: +880 1334-225588</span>
                </a>
              </div>
            </div>

            {/* Google Map Embed for GEC, Chattogram */}
            <div className="rounded-3xl overflow-hidden shadow-sm border border-slate-200 h-64 bg-slate-100 relative">
              <iframe
                title="Flyza Office Location"
                src="https://maps.google.com/maps?q=Sanmar+Ocean+City,+O.R.+Nizam+Road,+GEC,+Chattogram,+Bangladesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <span className="text-[#C5A059] font-bold text-xs uppercase tracking-[0.25em] block mb-2">
              Concierge Guidance
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-normal text-[#0A1128]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-100"
              >
                <h4 className="font-serif-luxury font-bold text-[#0A1128] text-base sm:text-lg mb-3 flex items-start gap-2.5">
                  <span className="text-[#C5A059] font-sans font-extrabold">Q.</span>
                  {faq.q}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed pl-6 font-light">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
