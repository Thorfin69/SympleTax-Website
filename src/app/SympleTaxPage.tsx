import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { STHero } from "./components/stax/STHero";
import { STTrustBar } from "./components/stax/STTrustBar";
import { STProblems } from "./components/stax/STProblems";
import { STTwoTrack } from "./components/stax/STTwoTrack";
import { STSolutionsBento } from "./components/stax/STSolutionsBento";
import { STHowItWorks } from "./components/stax/STHowItWorks";
import { STTestimonials } from "./components/stax/STTestimonials";
import { STCaseResults } from "./components/stax/STCaseResults";
import { STIRSNotice } from "./components/stax/STIRSNotice";
import { STStatsCTA } from "./components/stax/STStatsCTA";
import { STBlogPreview } from "./components/stax/STBlogPreview";
import { STTrackRecord } from "./components/stax/STTrackRecord";

export default function SympleTaxPage() {
  useEffect(() => {
    document.title = "IRS Tax Relief Experts | SympleTax";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Resolve IRS and state tax debt with licensed professionals. Free consultation — no obligation."
      );
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden selection:bg-[#059669] selection:text-white">
      {/* Section 01: Navbar */}
      <Navbar />

      <main>
        {/* Section 02: Hero */}
        <STHero />
        {/* Section 03: Trust Bar */}
        <STTrustBar />
        {/* Section 04: Problem Statement */}
        <STProblems />
        {/* Section 05: Two-Track Accordion */}
        <STTwoTrack />
        {/* Section 06: Solutions Bento */}
        <STSolutionsBento />
        {/* Section 07: How It Works */}
        <STHowItWorks />
        {/* Section 08: Testimonials */}
        <STTestimonials />
        {/* Section 09: Case Results */}
        <STCaseResults />
        {/* Section 10: IRS Notice Callout */}
        <STIRSNotice />
        {/* Section 11: Stats Mini CTA */}
        <STStatsCTA />
        {/* Section 12: Blog Preview */}
        <STBlogPreview />
        {/* Section 13: Track Record Bar */}
        <STTrackRecord />
      </main>

      {/* Section 14: Footer */}
      <Footer />
    </div>
  );
}
