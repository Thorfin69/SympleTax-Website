import { Navbar } from "./components/v2/Navbar";
import { Hero } from "./components/v2/Hero";
import { TrustBar } from "./components/v2/TrustBar";
import { ProblemStatement } from "./components/v2/ProblemStatement";
import { TwoTrackLayout } from "./components/v2/TwoTrackLayout";
import { SolutionsOverview } from "./components/v2/SolutionsOverview";
import { HowItWorks } from "./components/v2/HowItWorks";
import { MidCTA } from "./components/v2/MidCTA";
import { Testimonials } from "./components/v2/Testimonials";
import { CaseResultSpotlight } from "./components/v2/CaseResultSpotlight";
import { IRSNoticeCallout } from "./components/v2/IRSNoticeCallout";
import { ResultsNumbers } from "./components/v2/ResultsNumbers";
import { HomeFAQ } from "./components/v2/HomeFAQ";
import { HomeContactForm } from "./components/v2/HomeContactForm";
import { BlogPreview } from "./components/v2/BlogPreview";
import { FinalCTA } from "./components/v2/FinalCTA";
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
      <main>
        <Hero />
        <TrustBar />
        <ProblemStatement />
        <TwoTrackLayout />
        <SolutionsOverview />
        <HowItWorks />
        <MidCTA />
        <ResultsNumbers />
        <Testimonials />
        <CaseResultSpotlight />
        <IRSNoticeCallout />
        <HomeFAQ />
        <HomeContactForm />
        <BlogPreview />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
