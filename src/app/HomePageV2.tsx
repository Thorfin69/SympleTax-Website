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
import { usePageSEO, DEFAULT_OG_IMAGE_PATH } from "./hooks/usePageSEO";
import { HOME_PAGE_DESCRIPTION, HOME_PAGE_TITLE } from "./seo/homePageSeo";

export default function HomePageV2() {
  usePageSEO({
    title: HOME_PAGE_TITLE,
    description: HOME_PAGE_DESCRIPTION,
    path: "/",
  });

  useEffect(() => {
    const jsonLdId = "sympletax-jsonld-home";
    const orgId = `${SITE_ORIGIN}/#organization`;
    const webId = `${SITE_ORIGIN}/#website`;
    let script = document.getElementById(jsonLdId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = jsonLdId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": orgId,
          name: "SympleTax",
          url: SITE_ORIGIN,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_ORIGIN}${DEFAULT_OG_IMAGE_PATH}`,
          },
          telephone: "+1-260-254-8538",
          description: HOME_PAGE_DESCRIPTION,
          areaServed: { "@type": "Country", name: "United States" },
        },
        {
          "@type": "WebSite",
          "@id": webId,
          name: "SympleTax",
          url: `${SITE_ORIGIN}/`,
          description: HOME_PAGE_DESCRIPTION,
          publisher: { "@id": orgId },
          inLanguage: "en-US",
        },
        {
          "@type": "ProfessionalService",
          name: "SympleTax",
          description: HOME_PAGE_DESCRIPTION,
          url: `${SITE_ORIGIN}/`,
          telephone: "+1-260-254-8538",
          parentOrganization: { "@id": orgId },
          areaServed: { "@type": "Country", name: "United States" },
          serviceType: "IRS tax resolution and tax debt relief",
        },
      ],
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
