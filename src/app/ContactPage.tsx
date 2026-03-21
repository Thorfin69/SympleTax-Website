import { Navbar } from "./components/Navbar";
import { ContactHero } from "./components/ContactHero";
import { ContactPartners } from "./components/ContactPartners";
import { ContactStats } from "./components/ContactStats";
import { ContactFAQ } from "./components/ContactFAQ";
import { Footer } from "./components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <ContactHero />
        <ContactPartners />
        <ContactStats />
        <ContactFAQ />
      </main>
      <Footer />
    </div>
  );
}
