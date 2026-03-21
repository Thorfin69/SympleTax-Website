import { Navbar } from "./components/Navbar";
import { ServicesHero } from "./components/ServicesHero";
import { ServicesGridDetailed } from "./components/ServicesGridDetailed";
import { ServicesTestimonials } from "./components/ServicesTestimonials";
import { ServicesFAQ } from "./components/ServicesFAQ";
import { ServicesCTA } from "./components/ServicesCTA";
import { Footer } from "./components/Footer";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <ServicesHero />
        <ServicesGridDetailed />
        <ServicesTestimonials />
        <ServicesFAQ />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  );
}
