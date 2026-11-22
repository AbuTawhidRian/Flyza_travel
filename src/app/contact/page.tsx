"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageCircle, ArrowRight, ExternalLink } from "lucide-react";

const contactCards = [
  {
    icon: MapPin,
    title: "Visit Our Office",
    line1: "1st Floor, House No. 87, Road No. 7",
    line2: "O.R. Nizam Road (Beside Sanmar Ocean City), GEC, Chattogram, Bangladesh.",
    action: "Get Directions",
    href: "https://maps.google.com/?q=Sanmar+Ocean+City+GEC+Chattogram",
  },
  {
    icon: Phone,
    title: "Call Us for Assistance",
    line1: "+880 1334-225588",
    line2: "Direct Helpline & Consultation",
    action: "Call Now",
    href: "tel:+8801334225588",
  },
  {
    icon: Mail,
    title: "Reach Out via Email",
    line1: "infoflyza@gmail.com",
    line2: "Fast response within 2 hours",
    action: "Send Email",
    href: "mailto:infoflyza@gmail.com",
  },
  {
    icon: MessageCircle,
    title: "Instant WhatsApp Chat",
    line1: "+880 1334-225588",
    line2: "Instant support & itinerary quotes",
    action: "Chat on WhatsApp",
    href: "https://wa.me/8801334225588",
  },
];

const faqs = [
  {
    q: "Where is Flyza Tours & Travels located?",
    a: "Our head office is conveniently located at 1st Floor, House No. 87, Road No. 7, O.R. Nizam Road, right beside Sanmar Ocean City at GEC Circle, Chattogram, Bangladesh.",
  },
  {
    q: "What travel services does Flyza provide?",
    a: "We offer worldwide tour packages (Dubai, Maldives, Thailand, Turkey, Europe, etc.), domestic tours across Bangladesh, Umrah & Hajj packages, international air ticketing, hotel reservations, and visa processing assistance.",
  },
  {
    q: "Can I customize an itinerary for my family or group?",
    a: "Absolutely! We specialize in tailored itineraries according to your dates, preferences, group size, and budget. Call us at +880 1334-225588 or drop a message anytime.",
  },
  {
    q: "How can I make a booking or enquiry?",
    a: "You can call us directly, reach out via WhatsApp at +880 1334-225588, email infoflyza@gmail.com, or fill out the contact form below. Our travel consultants will assist you immediately.",
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
    serviceType: "Holiday & Tour Packages",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format professional structured WhatsApp message
    const formattedMessage = `✈️ *FLYZA TOURS & TRAVELS*
_Beyond Every Journey_
━━━━━━━━━━━━━━━━━━━━
📋 *NEW CONSULTATION / TOUR INQUIRY*

👤 *Name:* ${form.name}
📞 *Phone:* ${form.phone}
✉️ *Email:* ${form.email}
🌍 *Destination:* ${form.destination || "Flexible / Not decided yet"}
🛎️ *Service Required:* ${form.serviceType}

📝 *Travel Details & Requirements:*
${form.message ? form.message : "I would like to get package options, pricing, and available itinerary dates."}

━━━━━━━━━━━━━━━━━━━━
📍 _Office: GEC, Chattogram, Bangladesh_`;

    const encodedText = encodeURIComponent(formattedMessage);
    const targetUrl = `https://wa.me/8801334225588?text=${encodedText}`;

    setWhatsappUrl(targetUrl);
    setSubmitted(true);

    // Automatically trigger WhatsApp in a new tab/window
    if (typeof window !== "undefined") {
      window.open(targetUrl, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Banner */}
      <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 pt-32 pb-20 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Connect With Flyza
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-poppins mb-4 tracking-tight">
            Contact Us
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto font-light">
            Have questions or planning your next adventure? Our team at Chattogram is ready to guide you Beyond Every Journey.
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-8">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {contactCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <a
                key={i}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-amber-400/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-slate-900 font-bold font-poppins text-base mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-slate-800 text-sm font-semibold mb-1 leading-snug">
                    {card.line1}
                  </p>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {card.line2}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-bold text-amber-600 group-hover:text-amber-700 flex items-center gap-1">
                  <span>{card.action}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Form & Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner">
                  <MessageCircle className="w-10 h-10 animate-bounce" />
                </div>
                <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-block mb-3">
                  ✓ Information Formatted for WhatsApp
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-poppins text-slate-900 mb-2">
                  Redirecting to WhatsApp...
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                  All your inquiry details have been assembled into a ready-to-send message for Flyza Tours & Travels on WhatsApp (+880 1334-225588).
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-all"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Open WhatsApp Now</span>
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        destination: "",
                        serviceType: "Holiday & Tour Packages",
                        message: "",
                      });
                    }}
                    className="w-full sm:w-auto text-xs text-slate-500 hover:text-slate-800 font-semibold px-5 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    Submit New Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200/80 px-3 py-1 rounded-full text-xs font-semibold mb-2">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Auto-Forward to WhatsApp (+880 1334-225588)</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins text-slate-900 mt-1">
                    Book a Consultation / Tour Inquiry
                  </h2>
                  <p className="text-slate-500 text-sm mt-1">
                    Fill out the form below. Once submitted, all details are automatically transferred directly to our WhatsApp support team!
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Tanvir Ahmed"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="e.g. +880 1800-000000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="e.g. you@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Desired Destination
                      </label>
                      <input
                        type="text"
                        value={form.destination}
                        onChange={(e) => setForm({ ...form, destination: e.target.value })}
                        placeholder="e.g. Maldives / Dubai / Cox's Bazar"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Service Required
                    </label>
                    <select
                      value={form.serviceType}
                      onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 bg-white"
                    >
                      <option>Holiday & Tour Packages</option>
                      <option>International Air Tickets</option>
                      <option>Umrah Packages</option>
                      <option>Visa Processing & Assistance</option>
                      <option>Hotel & Resort Reservations</option>
                      <option>Custom Corporate Tour</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Message / Specific Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Share your preferred travel dates, number of persons (adults/children), or budget..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800 text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-xl transition-all hover:scale-[1.01]"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Send Inquiry to WhatsApp</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Right Info Box & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-xl p-1 flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="Flyza"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg font-poppins">Flyza Tours & Travels</h3>
                  <p className="text-xs text-amber-400 uppercase tracking-widest font-semibold">
                    Beyond Every Journey
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">Office Address:</span>
                    <span className="text-xs text-slate-400 leading-relaxed">
                      1st Floor, House No. 87, Road No. 7, O.R. Nizam Road (Beside Sanmar Ocean City), GEC, Chattogram, Bangladesh.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">Call Us:</span>
                    <a href="tel:+8801334225588" className="text-amber-400 font-bold hover:underline">
                      +880 1334-225588
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">Email Us:</span>
                    <a href="mailto:infoflyza@gmail.com" className="text-slate-300 hover:text-amber-400 hover:underline">
                      infoflyza@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">Working Hours:</span>
                    <span className="text-xs text-slate-400">
                      Saturday – Thursday: 10:00 AM – 8:00 PM<br />
                      Friday: By appointment / Emergency support
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800">
                <a
                  href="https://wa.me/8801334225588"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold text-xs tracking-wide transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Direct WhatsApp: +880 1334-225588
                </a>
              </div>
            </div>

            {/* Google Map Embed for GEC, Chattogram (Sanmar Ocean City Area) */}
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

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <span className="text-amber-600 font-semibold text-xs uppercase tracking-wider">
              Common Questions
            </span>
            <h2 className="text-3xl font-extrabold font-poppins text-slate-900 mt-1">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
              >
                <h4 className="font-bold text-slate-900 text-base mb-2 flex items-start gap-2">
                  <span className="text-amber-500 font-extrabold">Q.</span>
                  {faq.q}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed pl-6">
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
