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
import { SITE_ORIGIN } from "../config/site";

const HOME_DESCRIPTION =
  "Resolve IRS and state tax debt with licensed professionals. Free consultation — no obligation.";

export default function HomePageV2() {
  useEffect(() => {
    document.title = "IRS Tax Relief Experts | SympleTax";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", HOME_DESCRIPTION);
    }
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", `${SITE_ORIGIN}/`);
    }
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", `${SITE_ORIGIN}/`);
    }

    const jsonLdId = "sympletax-jsonld-home";
    let script = document.getElementById(jsonLdId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = jsonLdId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "SympleTax",
      description: HOME_DESCRIPTION,
      url: `${SITE_ORIGIN}/`,
      telephone: "+1-949-287-3015",
      areaServed: { "@type": "Country", name: "United States" },
      serviceType: "IRS tax resolution and tax debt relief",
    });

    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
      document.getElementById(jsonLdId)?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden selection:bg-[#00838F] selection:text-white">
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
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
