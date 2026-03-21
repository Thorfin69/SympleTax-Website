import { Navbar } from "./components/Navbar";
import { ProcessHero } from "./components/ProcessHero";
import { ProcessCommitment } from "./components/ProcessCommitment";
import { ProcessSteps } from "./components/ProcessSteps";
import { Team } from "./components/Team";
import { Insights } from "./components/Insights";
import { ContactCTA } from "./components/ContactCTA";
import { Footer } from "./components/Footer";

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <ProcessHero />
        <ProcessCommitment />
        <ProcessSteps />
        <Team />
        <Insights />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
