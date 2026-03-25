import { Navbar } from "./components/v2/Navbar";
import { Hero } from "./components/v2/Hero";
import { Testimonials } from "./components/v2/Testimonials";
import { HowItWorks } from "./components/v2/HowItWorks";
import { SolutionsOverview } from "./components/v2/SolutionsOverview";
import { CaseResultSpotlight } from "./components/v2/CaseResultSpotlight";
import { HomeFAQ } from "./components/v2/HomeFAQ";
import { IRSNoticeCallout } from "./components/v2/IRSNoticeCallout";
import { Footer } from "./components/v2/Footer";
import { useEffect } from "react";

export default function HomePageV2() {
  useEffect(() => {
    document.title = "IRS Tax Relief Experts | SympleTax";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Resolve IRS and state tax debt with licensed professionals. Free consultation — no obligation.");
    }
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden selection:bg-[#00838F] selection:text-white">
      <Navbar />
      <main id="main-content">
        {/* Section 1: Hero */}
        <Hero />
        {/* Section 2: Carousel Reviews */}
        <Testimonials />
        {/* Section 3: Two-Phase Process (Strategic Discovery + Resolution) */}
        <HowItWorks />
        {/* Section 4: Our Expertise, Your Success */}
        <SolutionsOverview />
        {/* Section 5: Case Story — Ramon */}
        <CaseResultSpotlight />
        {/* Section 6: FAQ */}
        <HomeFAQ />
        {/* IRS Notice Center */}
        <IRSNoticeCallout />
      </main>
      <Footer />
    </div>
  );
}
