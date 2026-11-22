import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Flyza Tours & Travels | Beyond Every Journey",
  description:
    "Flyza Tours & Travels – Beyond Every Journey. Curators of bespoke worldwide journeys, luxury escapes, sacred Umrah tours, and global medical concierge services. Headquartered in GEC, Chattogram, Bangladesh.",
  keywords: "Flyza, Flyza Tours and Travels, luxury travel agency, chattogram travel agency, bespoke tours, umrah packages, medical tourism, beyond every journey",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FDFDFD] text-[#0F172A] antialiased selection:bg-[#C5A059] selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
