import { Navbar } from "./components/Navbar";
import { AboutHero } from "./components/AboutHero";
import { StatsSection } from "./components/AboutUs";
import { Timeline } from "./components/Timeline";
import { ServicesGrid } from "./components/ServicesGrid";
import { Testimonials } from "./components/Testimonials";
import { Team } from "./components/Team";
import { Insights } from "./components/Insights";
import { ContactCTA } from "./components/ContactCTA";
import { Footer } from "./components/Footer";

const aboutStats = [
  { label: "Successful Projects", value: 500, suffix: "+" },
  { label: "Industries Served", value: 20, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <AboutHero />
        <StatsSection
          stats={aboutStats}
          label="Our Impact in Numbers"
          title="Measurable success through the years"
        />
        <Timeline />
        <ServicesGrid />
        <Testimonials />
        <Team />
        <Insights />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
