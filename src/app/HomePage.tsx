import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { ProblemStatement } from "./components/ProblemStatement";
import { TwoTrackLayout } from "./components/TwoTrackLayout";
import { SolutionsOverview } from "./components/SolutionsOverview";
import { HowItWorks } from "./components/HowItWorks";
import { MidCTA } from "./components/MidCTA";
import { Testimonials } from "./components/Testimonials";
import { CaseResultSpotlight } from "./components/CaseResultSpotlight";
import { IRSNoticeCallout } from "./components/IRSNoticeCallout";
import { ResultsNumbers } from "./components/ResultsNumbers";
import { HomeFAQ } from "./components/HomeFAQ";
import { HomeContactForm } from "./components/HomeContactForm";
import { BlogPreview } from "./components/BlogPreview";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    // Set meta tags for SEO
    document.title = "IRS Tax Relief Experts | SympleTax";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Resolve IRS and state tax debt with licensed professionals. Free consultation — no obligation.");
    }
    
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden selection:bg-[#00838F] selection:text-white">
      {/* Section 01: Global Navigation */}
      <Navbar />
      
      <main>
        {/* Section 02: Hero - The Entrance */}
        <Hero />
        
        {/* Section 03: Trust Bar - Immediate Credibility */}
        <TrustBar />
        
        {/* Section 04: Problem Statement - Tabbed Interaction */}
        <ProblemStatement />
        
        {/* Section 05: Two-Track Problem/Solution - Narrative Anchor */}
        <TwoTrackLayout />
        
        {/* Section 06: Solutions Overview - Stacking Cards Effect */}
        <SolutionsOverview />
        
        {/* Section 07: How It Works - The Process Commitment */}
        <HowItWorks />

        {/* Mid-page CTA Banner */}
        <MidCTA />

        {/* Section 08: Results & Numbers - Bento Grid Performance */}
        <ResultsNumbers />
        
        {/* Section 09: Testimonials - Success Stories (Improved Design) */}
        <Testimonials />
        
        {/* Section 10: Case Result Spotlight - Proof in Action */}
        <CaseResultSpotlight />
        
        {/* Section 11: IRS Notice Callout - Emergency Response */}
        <IRSNoticeCallout />

        {/* Section 12: Home FAQ - Addressing Concerns */}
        <HomeFAQ />

        {/* Section 13: Home Contact Form - The Main Conversion Point */}
        <HomeContactForm />
        
        {/* Section 14: Blog / Resources Preview - Thought Leadership */}
        <BlogPreview />
        
        {/* Section 15: Final CTA Banner - The Closing Argument */}
        <FinalCTA />
      </main>
      
      {/* Section 16: Global Footer */}
      <Footer />
    </div>
  );
}
