"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MessageCircle, Phone, Calendar, ArrowRight, ShieldCheck, HeartPulse, Building2, Globe2, X, Send, Award } from "lucide-react";

interface PartnerCountry {
  country: string;
  flag: string;
  tier: string;
  hospitals: string[];
}

const partnerCountries: PartnerCountry[] = [
  {
    country: "India",
    flag: "🇮🇳",
    tier: "JCI Accredited Centers",
    hospitals: [
      "Apollo Hospitals Network",
      "Fortis Healthcare Group",
      "Max Super Speciality Hospitals",
      "Medanta – The Medicity",
      "Manipal Hospitals",
      "Narayana Institute of Cardiac Sciences",
    ],
  },
  {
    country: "United States",
    flag: "🇺🇸",
    tier: "World #1 Ranked Centers",
    hospitals: [
      "Mayo Clinic (Rochester)",
      "Cleveland Clinic (Ohio)",
      "Johns Hopkins Medicine (Baltimore)",
      "The Mount Sinai Hospital (NYC)",
      "Massachusetts General Hospital (Boston)",
      "Stanford Health Care (California)",
    ],
  },
  {
    country: "Singapore",
    flag: "🇸🇬",
    tier: "Premier Asian Hub",
    hospitals: [
      "Mount Elizabeth Hospital (Orchard & Novena)",
      "Gleneagles Hospital Singapore",
      "Raffles Hospital",
      "Thomson Medical Centre",
    ],
  },
  {
    country: "Thailand",
    flag: "🇹🇭",
    tier: "Asia's Medical Tourism Flagship",
    hospitals: [
      "Bumrungrad International Hospital",
      "Bangkok Hospital Headquarters",
      "Samitivej Sukhumvit Hospital",
      "BDMS Network (Bangkok Dusit)",
      "Yanhee International Hospital",
      "Vejthani Orthopedic Super Center",
    ],
  },
  {
    country: "South Korea",
    flag: "🇰🇷",
    tier: "Advanced Oncology & Aesthetics",
    hospitals: [
      "Asan Medical Center",
      "Samsung Medical Center",
      "Severance Hospital (Yonsei University)",
      "Seoul National University Hospital",
      "JK Plastic Surgery Center",
    ],
  },
  {
    country: "Malaysia",
    flag: "🇲🇾",
    tier: "Global Healthcare Travel Awardee",
    hospitals: [
      "Prince Court Medical Centre (Kuala Lumpur)",
      "Gleneagles Kuala Lumpur",
      "Sunway Medical Centre",
      "KPJ Healthcare Berhad",
      "Subang Jaya Medical Centre",
    ],
  },
  {
    country: "United Arab Emirates",
    flag: "🇦🇪",
    tier: "Gulf Luxury Medical Facilities",
    hospitals: [
      "Cleveland Clinic Abu Dhabi",
      "American Hospital Dubai",
      "Burjeel Hospital Dubai & Abu Dhabi",
      "Fakeeh University Hospital",
      "Mediclinic Middle East",
      "King's College Hospital London (Dubai)",
    ],
  },
  {
    country: "Turkey",
    flag: "🇹🇷",
    tier: "Eurasian Excellence Hub",
    hospitals: [
      "Acıbadem Healthcare Group",
      "Memorial Healthcare Group",
      "Medicana Health Group",
      "Anadolu Medical Center (Johns Hopkins Affiliate)",
      "Medical Park Hospitals",
      "Florence Nightingale Hospital",
    ],
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    tier: "Harley Street Royal Specialists",
    hospitals: [
      "The Harley Street Clinic",
      "The London Clinic",
      "Great Ormond Street Hospital for Children",
      "Bupa Cromwell Hospital",
      "King's College Hospital Private Care",
      "Royal Brompton & Harefield Hospitals",
    ],
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    tier: "Pinnacle European Research & Medicine",
    hospitals: [
      "Charité – Universitätsmedizin Berlin",
      "Heidelberg University Hospital",
      "Asklepios Kliniken Hamburg",
      "University Hospital Frankfurt",
    ],
  },
  {
    country: "Spain",
    flag: "🇪🇸",
    tier: "Leading European Surgical Centers",
    hospitals: [
      "Quironsalud Hospital Group",
      "Centro Médico Teknon (Barcelona)",
      "Hospital Clínic de Barcelona",
      "HM Hospitales Madrid",
    ],
  },
  {
    country: "Egypt",
    flag: "🇪🇬",
    tier: "Middle East & North Africa Centers",
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
    tier: "East Africa Healthcare Leader",
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
    tier: "Kingdom VIP Healthcare",
    hospitals: [
      "King Faisal Specialist Hospital & Research Centre",
      "Dr. Sulaiman Al Habib Medical Group",
      "Mouwasat Hospitals",
      "Dallah Hospital Riyadh",
    ],
  },
  {
    country: "Czech Republic",
    flag: "🇨🇿",
    tier: "European Rehabilitation & Diagnostics",
    hospitals: [
      "Motol University Hospital (Prague)",
      "Malvazinky Rehabilitation Clinic",
      "Asklepion Aesthetic Clinic",
    ],
  },
  {
    country: "Jordan",
    flag: "🇯🇴",
    tier: "Specialized Oncology Hub",
    hospitals: [
      "King Hussein Cancer Center",
      "Abdali Hospital Amman",
      "Jordan Hospital",
    ],
  },
  {
    country: "Nigeria",
    flag: "🇳🇬",
    tier: "West Africa Super Speciality",
    hospitals: [
      "Lagoon Hospitals Lagos",
      "Reddington Hospital",
      "First Cardiology Consultants",
    ],
  },
  {
    country: "South Africa",
    flag: "🇿🇦",
    tier: "Southern Africa Tertiary Centers",
    hospitals: [
      "Netcare Hospitals Group",
      "Life Healthcare Group",
      "Mediclinic Southern Africa",
    ],
  },
  {
    country: "Indonesia",
    flag: "🇮🇩",
    tier: "Premier Archipelago Care",
    hospitals: [
      "Siloam Hospitals Lippo Village",
      "Pondok Indah Hospital Jakarta",
      "Mayapada Healthcare Group",
    ],
  },
  {
    country: "Rwanda",
    flag: "🇷🇼",
    tier: "Modern Referral Centers",
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
_Global Medical Tourism Concierge_
━━━━━━━━━━━━━━━━━━━━
🏥 *APPOINTMENT / TREATMENT INQUIRY*

👤 *Patient Name:* ${patientName}
📞 *Contact Phone:* ${patientPhone}
🌍 *Destination Country:* ${selectedCountry.country}
🏥 *Selected Medical Center:* ${preferredHospital}
🩺 *Specialty / Department:* ${specialty || "Comprehensive Consultation"}

Please arrange doctor consultation availability, treatment cost estimation, and medical visa facilitation.
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
_Global Medical Tourism Concierge_
━━━━━━━━━━━━━━━━━━━━
🏥 *CONSULTATION INQUIRY: ${country.toUpperCase()}*

I am requesting consultation & treatment details for accredited hospitals in *${country}*:
• ${hospitals.slice(0, 3).join("\n• ")}

Please connect me with a senior Flyza medical tourism concierge.
━━━━━━━━━━━━━━━━━━━━
📍 _Flyza Tours & Travels · GEC, Chattogram_`;

    const whatsappUrl = `https://wa.me/8801334225588?text=${encodeURIComponent(message)}`;
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      {/* Luxury Hero Banner */}
      <div className="relative bg-[#050B14] pt-36 pb-24 text-white overflow-hidden border-b border-[#C5A059]/20">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 text-center">
          <span className="text-[#C5A059] font-bold text-xs uppercase tracking-[0.28em] block mb-4">
            ✦ Strategic Global Healthcare Alliance
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-luxury font-normal tracking-tight mb-6">
            Our Trusted Channel Partner
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Flyza Tours & Travels is proud to collaborate with <strong>My 1 Health</strong>, connecting patients with world-class medical treatments, specialized care, and affordable healthcare solutions.
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-14 py-16 -mt-12">
        {/* Partnership Visual Showcase Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_20px_70px_rgba(0,0,0,0.08)] border border-slate-100 mb-20">
          <div className="relative w-full h-[240px] sm:h-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-inner bg-slate-900 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/partner_banner.jpg"
              alt="My 1 Health & Flyza Collaboration"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-500 px-2 font-medium">
            <span className="text-slate-800 font-semibold tracking-wide">
              ✦ Official Strategic Collaboration: Flyza Tours & Travels × My 1 Health
            </span>
            <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Over 1,000+ Accredited Hospitals Across 20+ Countries</span>
            </div>
          </div>
        </div>

        {/* Narrative & Description Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-slate-100 mb-20 max-w-5xl mx-auto">
          <span className="text-[#C5A059] font-bold text-xs uppercase tracking-[0.25em] block mb-2">
            World-Class Care Access
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-normal text-[#0A1128] mb-8 leading-tight">
            Connecting You To Quality Healthcare Around the World
          </h2>

          <div className="space-y-6 text-slate-600 leading-relaxed font-light text-base">
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

          <div className="my-12 p-8 sm:p-10 bg-[#050B14] rounded-2xl text-white border border-[#C5A059]/30 shadow-xl">
            <h3 className="text-2xl font-serif-luxury text-[#DFB76C] mb-3">
              Our Partnership with My 1 Health
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-6">
              Through our trusted channel partnership, Flyza and My 1 Health provide seamless, stress-free medical tourism packages. From obtaining medical visa approval to personalized treatment planning, airport-to-hospital transfers, dedicated patient coordination, and comprehensive post-care support, we ensure your medical journey is smooth, comfortable, and cost-effective.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              Direct your care needs to our team and let us connect you to specialized healthcare institutions worldwide with ease and peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Direct Hospital Rates", desc: "Pay direct hospital invoice rates with absolute zero referral fees or markups." },
              { title: "Turnkey Travel Logistics", desc: "Flights, medical visas, executive transport, and family hotel suites managed by Flyza." },
              { title: "Specialist Pre-Evaluation", desc: "Telemedicine second opinions & confirmed appointment slots with chief surgeons." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50/70 rounded-2xl p-6 border border-slate-100">
                <ShieldCheck className="w-5 h-5 text-[#C5A059] mb-3" />
                <h4 className="font-bold text-[#0A1128] text-sm mb-1.5">{item.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Global Healthcare Partners Grid */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C5A059] font-bold text-xs uppercase tracking-[0.25em] block mb-3">
              ✦ International Network
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-luxury font-normal text-[#0A1128] tracking-tight mb-4">
              Associated Healthcare Partners by Country
            </h2>
            <p className="text-slate-500 text-sm sm:text-base font-light">
              Select any country below to view associated hospital networks and request confirmed appointment scheduling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerCountries.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-7 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-100 card-luxury flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{partner.flag}</span>
                      <div>
                        <h3 className="font-serif-luxury font-bold text-[#0A1128] text-lg sm:text-xl">
                          Our Associated Healthcare Partners in {partner.country}
                        </h3>
                        <span className="text-[11px] font-semibold text-[#C5A059] uppercase tracking-wider block mt-0.5">
                          {partner.tier}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {partner.hospitals.map((hospital, hIndex) => (
                      <li
                        key={hIndex}
                        className="flex items-start gap-2.5 text-sm text-slate-700 font-light"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-2 flex-shrink-0" />
                        <span className="font-medium">{hospital}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleBookAppointment(partner)}
                    className="flex-1 py-3.5 px-4 rounded-xl bg-[#0A1128] hover:bg-[#C5A059] text-white hover:text-[#0A1128] font-bold text-xs uppercase tracking-[0.16em] transition-all text-center"
                  >
                    BOOK AN APPOINTMENT
                  </button>
                  <button
                    onClick={() => handleDirectWhatsApp(partner.country, partner.hospitals)}
                    className="py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-[0.16em] transition-all inline-flex items-center justify-center gap-2"
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
        <div className="bg-[#050B14] rounded-3xl p-8 sm:p-14 text-white text-center relative overflow-hidden border border-[#C5A059]/25 shadow-2xl">
          <div className="max-w-2xl mx-auto">
            <span className="text-[#C5A059] font-bold text-xs uppercase tracking-[0.25em] block mb-3">
              Dedicated Medical Desk
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif-luxury font-normal mb-4">
              Need Medical Treatment or Second Opinion Abroad?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base font-light mb-8 leading-relaxed">
              Our patient concierge in Chattogram provides end-to-end liaison with chief doctors, hospital cost estimates, visa invitation letters, and travel bookings in a single confidential window.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/8801334225588?text=Hello%20Flyza%2C%20I%20would%20like%20to%20inquire%20about%20Medical%20Tourism%20and%20Doctor%20Appointments%20with%20My%201%20Health."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-[0.18em] px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Medical Desk WhatsApp (+880 1334-225588)</span>
              </a>
              <a
                href="tel:+8801334225588"
                className="border border-white/30 text-white hover:bg-white/10 font-bold text-xs uppercase tracking-[0.18em] px-8 py-4 rounded-full transition-all inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Call Hotline</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Appointment Modal */}
      {selectedCountry && (
        <div className="fixed inset-0 z-50 bg-[#050B14]/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative animate-fadeInUp max-h-[90vh] overflow-y-auto border border-slate-100">
            <button
              onClick={() => setSelectedCountry(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-5">
              <span className="text-3xl">{selectedCountry.flag}</span>
              <div>
                <h3 className="text-xl font-serif-luxury font-bold text-[#0A1128]">
                  Appointment Request · {selectedCountry.country}
                </h3>
                <p className="text-xs text-[#C5A059] font-bold uppercase tracking-wider">
                  Flyza & My 1 Health Concierge
                </p>
              </div>
            </div>

            <form onSubmit={handleModalSubmit} className="space-y-4">
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
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]/20 focus:border-[#C5A059]"
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
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]/20 focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Selected Hospital
                </label>
                <select
                  value={preferredHospital}
                  onChange={(e) => setPreferredHospital(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]/20 focus:border-[#C5A059] bg-white font-medium"
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
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]/20 focus:border-[#C5A059]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-[0.18em] flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send Request to WhatsApp Concierge</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
