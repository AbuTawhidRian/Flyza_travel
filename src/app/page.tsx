import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import FeaturedDestinations from "@/components/home/FeaturedDestinations";
import PopularTours from "@/components/home/PopularTours";
import ChannelPartnerSection from "@/components/home/ChannelPartnerSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturedDestinations />
      <PopularTours />
      <ChannelPartnerSection />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </>
  );
}
