import { Navbar } from "./components/v2/Navbar";
import { Footer } from "./components/v2/Footer";
import { usePageSEO } from "./hooks/usePageSEO";

export default function FreeConsultationPage() {
  usePageSEO({
    title: "Free Consultation | SympleTax",
    description: "Schedule your free IRS tax relief consultation with SympleTax today.",
    path: "/free-consultation",
  });

  return (
    <div className="flex flex-col min-h-screen bg-white font-['DM_Sans']">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <iframe
          src="https://ti.sympletax.com/free-consultation"
          title="Free Consultation"
          className="w-full flex-1 border-0"
          style={{ minHeight: "calc(100vh - 80px)" }}
          allow="fullscreen"
        />
      </main>
      <Footer />
    </div>
  );
}
