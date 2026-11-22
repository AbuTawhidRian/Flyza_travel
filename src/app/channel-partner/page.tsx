"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MessageCircle, Phone, Calendar, ArrowRight, ShieldCheck, HeartPulse, Building2, Globe2, X, Send } from "lucide-react";

interface PartnerCountry {
  country: string;
  flag: string;
  hospitals: string[];
}

const partnerCountries: PartnerCountry[] = [
  {
    country: "India",
    flag: "🇮🇳",
    hospitals: [
      "Apollo Hospitals",
      "Fortis Healthcare",
      "Max Healthcare",
      "Medanta – The Medicity",
      "Manipal Hospitals",
      "Narayana Health",
    ],
  },
  {
    country: "United States",
    flag: "🇺🇸",
    hospitals: [
      "Mayo Clinic",
      "Cleveland Clinic",
      "Johns Hopkins Medicine",
      "Mount Sinai Hospital",
      "Massachusetts General Hospital",
      "Stanford Health Care",
    ],
  },
  {
    country: "Singapore",
    flag: "🇸🇬",
    hospitals: [
      "Mount Elizabeth Hospital",
      "Gleneagles Hospital",
      "Raffles Hospital",
      "Thomson Medical Centre",
    ],
  },
  {
    country: "Thailand",
    flag: "🇹🇭",
    hospitals: [
      "Bumrungrad International Hospital",
      "Bangkok Hospital",
      "Samitivej Hospital",
      "BDMS (Bangkok Dusit Medical Services)",
      "Yanhee International Hospital",
      "Vejthani Hospital",
    ],
  },
  {
    country: "South Korea",
    flag: "🇰🇷",
    hospitals: [
      "Asan Medical Center",
      "Samsung Medical Center",
      "Severance Hospital",
      "Seoul National University Hospital",
      "JK Plastic Surgery Center",
    ],
  },
  {
    country: "Malaysia",
    flag: "🇲🇾",
    hospitals: [
      "Prince Court Medical Centre",
      "Gleneagles Kuala Lumpur",
      "Sunway Medical Centre",
      "KPJ Healthcare",
      "Subang Jaya Medical Centre",
    ],
  },
  {
    country: "United Arab Emirates",
    flag: "🇦🇪",
    hospitals: [
      "Cleveland Clinic Abu Dhabi",
      "American Hospital Dubai",
      "Burjeel Hospital",
      "Fakeeh University Hospital",
      "Mediclinic Middle East",
      "King's College Hospital Dubai",
    ],
  },
  {
    country: "Turkey",
    flag: "🇹🇷",
    hospitals: [
      "Acıbadem Healthcare Group",
      "Memorial Healthcare Group",
      "Medicana Health Group",
      "Anadolu Medical Center",
      "Medical Park Hospitals",
      "Florence Nightingale Hospital",
    ],
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    hospitals: [
      "The Harley Street Clinic",
      "The London Clinic",
      "Great Ormond Street Hospital",
      "Bupa Cromwell Hospital",
      "King's College Hospital",
      "Royal Brompton Hospital",
    ],
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    hospitals: [
      "Charité – Universitätsmedizin Berlin",
      "Heidelberg University Hospital",
      "Asklepios Kliniken",
      "University Hospital Frankfurt",
    ],
  },
  {
    country: "Spain",
    flag: "🇪🇸",
    hospitals: [
      "Quironsalud Hospital Group",
      "Centro Médico Teknon",
      "Hospital Clínic de Barcelona",
      "HM Hospitales",
    ],
  },
  {
    country: "Egypt",
    flag: "🇪🇬",
    hospitals: [
      "As-Salam International Hospital",
      "Cleopatra Hospitals Group",
      "Dar Al Fouad Hospital",
      "Saudi German Hospital Cairo",
    ],
  },
  {
    country: "Kenya",
    flag: "🇰🇪",
    hospitals: [
      "The Nairobi Hospital",
      "Aga Khan University Hospital Nairobi",
      "MP Shah Hospital",
      "Gertrude's Children's Hospital",
    ],
  },
  {
    country: "Saudi Arabia",
    flag: "🇸🇦",
    hospitals: [
      "King Faisal Specialist Hospital & Research Centre",
      "Dr. Sulaiman Al Habib Medical Group",
      "Mouwasat Hospitals",
      "Dallah Hospital",
    ],
  },
  {
    country: "Czech Republic",
    flag: "🇨🇿",
    hospitals: [
      "Motol University Hospital",
      "Malvazinky Rehabilitation Clinic",
      "Asklepion Clinic",
    ],
  },
  {
    country: "Jordan",
    flag: "🇯🇴",
    hospitals: [
      "King Hussein Cancer Center",
      "Abdali Hospital",
      "Jordan Hospital",
    ],
  },
  {
    country: "Nigeria",
    flag: "🇳🇬",
    hospitals: [
      "Lagoon Hospitals",
      "Reddington Hospital",
      "First Cardiology Consultants",
    ],
  },
  {
    country: "South Africa",
    flag: "🇿🇦",
    hospitals: [
      "Netcare Hospitals Group",
      "Life Healthcare Group",
      "Mediclinic Southern Africa",
    ],
  },
  {
    country: "Indonesia",
    flag: "🇮🇩",
    hospitals: [
      "Siloam Hospitals Group",
      "Pondok Indah Hospital",
      "Mayapada Hospital",
    ],
  },
  {
    country: "Rwanda",
    flag: "🇷🇼",
    hospitals: [
      "King Faisal Hospital Kigali",
      "Butaro Cancer Center of Excellence",
    ],
  },
];

export default function ChannelPartnerPage() {
  const [selectedCountry, setSelectedCountry] = useState<PartnerCountry | null>(null);
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [preferredHospital, setPreferredHospital] = useState("");

  const handleBookAppointment = (country: PartnerCountry) => {
    setSelectedCountry(country);
    setPreferredHospital(country.hospitals[0]);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCountry) return;

    const message = `✈️ *FLYZA & MY 1 HEALTH*
_Healthcare Channel Partner Appointment_
━━━━━━━━━━━━━━━━━━━━
🏥 *MEDICAL APPOINTMENT BOOKING*

👤 *Patient Name:* ${patientName}
📞 *Contact Number:* ${patientPhone}
🌍 *Country:* ${selectedCountry.country}
🏥 *Preferred Hospital:* ${preferredHospital}
🩺 *Medical Department / Specialty:* ${specialty || "General Consultation / Not specified"}

Please guide us on doctor availability, hospital appointment confirmation, and medical visa assistance.
━━━━━━━━━━━━━━━━━━━━
📍 _Flyza Tours & Travels · GEC, Chattogram_`;

    const whatsappUrl = `https://wa.me/8801334225588?text=${encodeURIComponent(message)}`;
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank");
    }
    setSelectedCountry(null);
  };

  const handleDirectWhatsApp = (country: string, hospitals: string[]) => {
    const message = `✈️ *FLYZA & MY 1 HEALTH*
_Healthcare Channel Partner Inquiry_
━━━━━━━━━━━━━━━━━━━━
🏥 *INQUIRY: ${country.toUpperCase()}*

I am interested in scheduling an appointment with partner hospitals in *${country}*:
• ${hospitals.slice(0, 3).join("\n• ")}

Please connect me with a healthcare consultant and share appointment details!
━━━━━━━━━━━━━━━━━━━━
📍 _Flyza Tours & Travels · GEC, Chattogram_`;

    const whatsappUrl = `https://wa.me/8801334225588?text=${encodeURIComponent(message)}`;
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Banner */}
      <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 pt-32 pb-20 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Global Medical Tourism & Healthcare
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-poppins mb-4 tracking-tight">
            OUR TRUSTED CHANNEL PARTNER
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Flyza Tours & Travels is proud to collaborate with <strong>My 1 Health</strong>, a trusted healthcare partner connecting patients with world-class medical treatments, specialized care, and affordable healthcare solutions worldwide.
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-10">
        {/* Partnership Visual Banner */}
        <div className="relative bg-white rounded-3xl p-4 sm:p-8 shadow-2xl border border-slate-100 overflow-hidden mb-16">
          <div className="relative w-full h-[220px] sm:h-[320px] md:h-[380px] rounded-2xl overflow-hidden shadow-inner bg-gradient-to-r from-sky-50 via-white to-amber-50 flex items-center justify-center">
            {/* Extracted partner banner */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/partner_banner.jpg"
              alt="My 1 Health & Flyza Collaboration"
              className="w-full h-full object-cover sm:object-contain object-center"
            />
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-500 px-2">
            <span className="font-semibold text-slate-700">
              🤝 Official Strategic Healthcare Partnership
            </span>
            <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Over 1,000+ Verified Hospitals Across 20+ Countries</span>
            </div>
          </div>
        </div>

        {/* Narrative & Description Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 mb-16">
          <div className="max-w-4xl mx-auto">
            <span className="text-amber-600 font-bold text-xs uppercase tracking-widest block mb-2">
              Global Healthcare Network
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-slate-900 mb-6 leading-tight">
              Connecting You To Quality Healthcare Around the World
            </h2>

            <div className="space-y-5 text-slate-600 leading-relaxed text-sm sm:text-base">
              <p>
                <strong>My 1 Health</strong> is a global medical referral service dedicated to providing patients access to world-class medical treatments and specialized care at top-ranked hospitals and clinics across the globe.
              </p>
              <p>
                With a patient-focused approach, My 1 Health guides individuals through their entire medical journey, from initial specialist consultations and second medical opinions to treatment coordination, visa and travel logistics, accommodation arrangements, and post-treatment follow-up.
              </p>
              <p>
                With over 1,000 partner hospitals worldwide, My 1 Health ensures that patients receive the highest quality care at competitive rates, without any referral fees or hidden charges.
              </p>
              <p>
                Through our exclusive partnership, <strong>Flyza Tours & Travels</strong> bridges the gap between travel and healthcare. We handle your flight ticketing, medical visa assistance, hotel accommodation, airport transfers, and local transport, while My 1 Health coordinates all your medical appointments, hospital admissions, and doctor consultations.
              </p>
            </div>

            <div className="my-10 p-6 sm:p-8 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 rounded-2xl text-white shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold font-poppins text-amber-400 mb-3">
                Our Partnership with My 1 Health
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                Through our trusted channel partnership, Flyza and My 1 Health provide seamless, stress-free medical tourism packages. From obtaining medical visa approval to personalized treatment planning, airport-to-hospital transfers, dedicated patient coordination, and comprehensive post-care support, we ensure your medical journey is smooth, comfortable, and cost-effective.
              </p>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">
                Direct your care needs to our team and let us connect you to specialized healthcare institutions worldwide with ease and peace of mind.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { title: "No Referral Fees", desc: "Pay direct hospital rates with zero markup or hidden charges." },
                { title: "Complete Travel Logistics", desc: "Flights, medical visas, local transport, and patient-family hotel stays." },
                { title: "Specialist Matching", desc: "Immediate second opinions & doctor appointments with renowned surgeons." },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 mb-2" />
                  <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Global Healthcare Partners Grid */}
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-amber-600 font-bold text-xs uppercase tracking-widest">
              Worldwide Hospital Network
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-slate-900 mt-2 mb-3">
              Associated Healthcare Partners by Country
            </h2>
            <p className="text-slate-500 text-sm">
              Explore leading hospitals and medical centers available through the Flyza & My 1 Health network. Click to book an appointment directly with our medical desk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {partnerCountries.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-slate-100 hover:shadow-xl hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Country Flag & Title */}
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                    <span className="text-3xl">{partner.flag}</span>
                    <h3 className="font-bold font-poppins text-slate-900 text-base sm:text-lg">
                      Our Associated Healthcare Partners in {partner.country}
                    </h3>
                  </div>

                  {/* Hospital List */}
                  <ul className="space-y-2.5 mb-6">
                    {partner.hospitals.map((hospital, hIndex) => (
                      <li
                        key={hIndex}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                        <span className="font-medium">{hospital}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => handleBookAppointment(partner)}
                    className="flex-1 py-3 px-4 rounded-xl border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold text-xs uppercase tracking-wider transition-all text-center"
                  >
                    BOOK AN APPOINTMENT
                  </button>
                  <button
                    onClick={() => handleDirectWhatsApp(partner.country, partner.hospitals)}
                    className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center justify-center gap-1.5"
                    title="Inquire on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Contact Help Callout */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950 rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold font-poppins mb-3">
              Need Medical Treatment or Second Opinion Abroad?
            </h3>
            <p className="text-slate-300 text-sm mb-8 leading-relaxed font-light">
              Contact our dedicated Medical Tourism team in Chattogram. We arrange doctor opinions, treatment estimates, visa invitation letters, and travel bookings in a single window.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/8801334225588?text=Hello%20Flyza%2C%20I%20would%20like%20to%20inquire%20about%20Medical%20Tourism%20and%20Doctor%20Appointments%20with%20My%201%20Health."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Medical Desk WhatsApp (+880 1334-225588)</span>
              </a>
              <a
                href="tel:+8801334225588"
                className="border border-white/30 text-white hover:bg-white/10 font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-all inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Hotline</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Appointment Modal */}
      {selectedCountry && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-fadeInUp max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedCountry(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{selectedCountry.flag}</span>
              <div>
                <h3 className="text-xl font-bold font-poppins text-slate-900">
                  Book Appointment in {selectedCountry.country}
                </h3>
                <p className="text-xs text-amber-600 font-semibold uppercase tracking-wider">
                  Flyza & My 1 Health Network
                </p>
              </div>
            </div>

            <form onSubmit={handleModalSubmit} className="space-y-4 mt-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Patient Full Name *
                </label>
                <input
                  required
                  type="text"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="e.g. Mohammad Rahim"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Contact Phone / WhatsApp *
                </label>
                <input
                  required
                  type="tel"
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  placeholder="e.g. +880 1800-000000"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Hospital
                </label>
                <select
                  value={preferredHospital}
                  onChange={(e) => setPreferredHospital(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 bg-white"
                >
                  {selectedCountry.hospitals.map((h, i) => (
                    <option key={i} value={h}>{h}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Department / Treatment Specialty
                </label>
                <input
                  type="text"
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  placeholder="e.g. Cardiology, Oncology, Orthopedics, Neurology..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send Request to WhatsApp Desk</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
