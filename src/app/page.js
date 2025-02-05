import About from "@/components/about/About";
import ContactUs from "@/components/contact us/ContactUs";
import HeroSection from "@/components/Hero/HeroSection";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/reviews/Reviews";
import Service from "@/components/services/Service";
import WhyUs from "@/components/why us/WhyUs";

export default function Home() {
  return (
    <div className="flex flex-col space-y-10 max-w-7xl mx-auto">
      <HeroSection />
      <About />
      <Service />
      <WhyUs />
      <Reviews />
      <ContactUs />
    </div>
  );
}
