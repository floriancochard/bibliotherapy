import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import HowItWorks from "@/components/how-it-works";
import Features from "@/components/features";
import TherapistSection from "@/components/therapist-section";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import Footer from "@/components/footer";
import WhatIsBibliography from "@/components/what-is-bibliography";
import ClosingCTA from "@/components/closing-cta";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <WhatIsBibliography />
        <HowItWorks />
        <Features />
        <TherapistSection />
        <Testimonials />
        <Pricing />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
}
