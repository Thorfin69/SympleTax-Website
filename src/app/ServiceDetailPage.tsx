import { useParams, Navigate, Link } from "react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight, ChevronDown, Phone,
  CheckCircle2, ArrowUpRight, ChevronRight, Clock, BookOpen,
} from "lucide-react";
import { Navbar } from "./components/v2/Navbar";
import { Footer } from "./components/v2/Footer";
import { FloatingGradientCTA } from "./components/v2/FloatingGradientCTA";
import { getServiceBySlug, getRelatedServices } from "./serviceContent";
import { ARTICLES, CATEGORY_GRADIENT } from "./data/articles";

// ─── Service → related article slugs map ──────────────────────────────────────

const SERVICE_ARTICLES: Record<string, string[]> = {
  "offer-in-compromise":    ["offer-in-compromise", "installment-agreement", "penalty-abatement"],
  "installment-agreement":  ["installment-agreement", "offer-in-compromise", "when-to-hire-professional"],
  "penalty-abatement":      ["penalty-abatement", "offer-in-compromise", "installment-agreement"],
  "currently-not-collectible": ["currently-not-collectible", "when-to-hire-professional", "offer-in-compromise"],
  "innocent-spouse-relief": ["when-to-hire-professional", "tax-lien-vs-levy", "offer-in-compromise"],
  "unfiled-returns":        ["unfiled-tax-returns", "penalty-abatement", "when-to-hire-professional"],
  "fresh-start-program":    ["offer-in-compromise", "installment-agreement", "when-to-hire-professional"],
  "back-taxes":             ["tax-lien-vs-levy", "irs-cp90-notice", "offer-in-compromise"],
  "wage-garnishment":       ["wage-garnishment", "irs-cp90-notice", "tax-lien-vs-levy"],
  "tax-levy":               ["wage-garnishment", "irs-cp90-notice", "tax-lien-vs-levy"],
  "tax-lien":               ["tax-lien-vs-levy", "irs-cp90-notice", "when-to-hire-professional"],
};

// ─── FAQ Accordion ────────────────────────────────────────────────────────────

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className="border-b font-['DM_Sans']"
      style={{ borderColor: "#e2e8f0" }}
    >
      <button
        onClick={onToggle}
        className="w-full text-left flex items-start justify-between gap-[20px] py-[22px] focus:outline-none group"
        aria-expanded={isOpen}
      >
        <span
          className="font-semibold text-[#0f172a] leading-[1.35] group-hover:text-[#00A4A4] transition-colors"
          style={{ fontSize: "clamp(15px, 1.4vw, 17px)" }}
        >
          {q}
        </span>
        <span className="shrink-0 mt-[2px]">
          <ChevronDown
            className="w-[18px] h-[18px] transition-transform duration-300"
            style={{ color: isOpen ? "#00A4A4" : "#94a3b8", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p
              className="pb-[22px] leading-[1.7] text-[#475569]"
              style={{ fontSize: "15px" }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug ?? "");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!service) {
    return <Navigate to="/solutions" replace />;
  }

  const related = getRelatedServices(service.relatedSlugs);
  const isResolution = service.type === "resolution";

  // Related articles from blog data
  const articleSlugsForService = SERVICE_ARTICLES[service.slug] ?? [];
  const relatedArticles = articleSlugsForService
    .map((s) => ARTICLES.find((a) => a.slug === s))
    .filter(Boolean)
    .slice(0, 3) as typeof ARTICLES;

  // Problem-type related services for 05b section (max 3)
  const relatedProblems = related.filter((r) => r.type === "problem").slice(0, 3);
  const relatedResolutions = related.filter((r) => r.type === "resolution").slice(0, 3);
  const problemCards = relatedProblems.length >= 2 ? relatedProblems : related.slice(0, 3);

  // Service JSON-LD schema
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": service.eyebrow,
      "description": service.seoDesc,
      "provider": {
        "@type": "ProfessionalService",
        "name": "SympleTax",
        "url": "https://sympletax.com",
      },
      "serviceType": isResolution ? "Tax Resolution" : "Tax Problem Resolution",
      "areaServed": "United States",
      "url": `https://sympletax.com/solutions/${service.slug}`,
    };
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = `schema-service-${service.slug}`;
    el.textContent = JSON.stringify(schema);
    document.head.appendChild(el);
    document.title = service.seoTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", service.seoDesc);
    return () => { el.remove(); };
  }, [service.slug]);

  void relatedResolutions;

  return (
    <>
      <Navbar />

      <main id="main-content">

        {/* ── 01 HERO ─────────────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden pt-[140px] pb-[100px] lg:pt-[160px] lg:pb-[120px]"
          style={{ background: "linear-gradient(135deg, #0a1628 0%, #0f2040 50%, #0a1628 100%)" }}
        >
          {/* Background grid lines */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgba(0,164,164,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,164,164,0.07) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
          {/* Diagonal accent lines */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 80px, rgba(0,164,164,0.04) 80px, rgba(0,164,164,0.04) 81px)",
            }}
          />
          {/* Glow orb */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-120px", left: "50%", transform: "translateX(-50%)",
              width: "900px", height: "500px",
              background: "radial-gradient(ellipse at center, rgba(0,164,164,0.13) 0%, transparent 65%)",
            }}
          />

          <div className="relative z-10 max-w-[1330px] mx-auto px-[24px] lg:px-[70px]">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-[8px] mb-[32px]" aria-label="Breadcrumb">
              <Link
                to="/"
                className="font-['DM_Sans'] text-white/40 hover:text-white/70 transition-colors"
                style={{ fontSize: "13px" }}
              >
                Home
              </Link>
              <ChevronRight className="w-[12px] h-[12px] text-white/25" />
              <Link
                to="/solutions"
                className="font-['DM_Sans'] text-white/40 hover:text-white/70 transition-colors"
                style={{ fontSize: "13px" }}
              >
                Solutions
              </Link>
              <ChevronRight className="w-[12px] h-[12px] text-white/25" />
              <span className="font-['DM_Sans'] text-[#00A4A4]" style={{ fontSize: "13px" }}>
                {service.eyebrow}
              </span>
            </nav>

            {/* Eyebrow */}
            <div className="flex items-center gap-[10px] mb-[20px]">
              <div className="h-px w-[35px]" style={{ background: "#00A4A4" }} />
              <span
                className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                style={{ fontSize: "13px", letterSpacing: "0.07em" }}
              >
                {isResolution ? "Resolution Program" : "Tax Problem"}
              </span>
            </div>

            <div className="max-w-[800px]">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-['DM_Sans'] font-bold text-white leading-[1.07] mb-[24px]"
                style={{
                  fontSize: "clamp(36px, 5vw, 64px)",
                  letterSpacing: "-2px",
                }}
              >
                {service.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-['DM_Sans'] font-normal text-white/70 leading-[1.65] mb-[48px]"
                style={{ fontSize: "clamp(16px, 1.4vw, 18px)", maxWidth: "600px" }}
              >
                {service.subtitle}
              </motion.p>


              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.3 }}
                className="flex flex-wrap gap-[14px]"
              >
                <a
                  href="https://ti.sympletax.com/free-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-[10px] font-['DM_Sans'] font-bold text-white rounded-full transition-all duration-300 hover:scale-[1.03]"
                  style={{
                    fontSize: "15px",
                    padding: "14px 28px",
                    background: "linear-gradient(135deg, #00A4A4 0%, #007a7a 100%)",
                    boxShadow: "0 8px 28px rgba(0,164,164,0.38)",
                  }}
                >
                  Get a Free Case Evaluation
                  <ArrowRight className="w-[16px] h-[16px]" />
                </a>
                <a
                  href="tel:+19492873015"
                  className="inline-flex items-center gap-[10px] font-['DM_Sans'] font-semibold rounded-full transition-all duration-300 hover:bg-white/15"
                  style={{
                    fontSize: "15px",
                    padding: "14px 28px",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "white",
                  }}
                >
                  <Phone className="w-[15px] h-[15px]" />
                  (949) 287-3015
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── 02 WHAT IS IT ────────────────────────────────────────────────────── */}
        <section className="py-[80px] lg:py-[120px] bg-white">
          <div className="max-w-[1330px] mx-auto px-[24px] lg:px-[70px]">
            <div className="grid lg:grid-cols-[1fr_440px] gap-[60px] lg:gap-[80px] items-start">
              {/* Left */}
              <div>
                <div className="flex items-center gap-[10px] mb-[20px]">
                  <div className="h-px w-[35px] bg-[#00A4A4]" />
                  <span
                    className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                    style={{ fontSize: "13px", letterSpacing: "0.07em" }}
                  >
                    Overview
                  </span>
                </div>
                <h2
                  className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.08] mb-[32px]"
                  style={{ fontSize: "clamp(28px, 3vw, 42px)", letterSpacing: "-1.5px" }}
                >
                  {service.whatItIs.heading}
                </h2>
                <div className="flex flex-col gap-[18px]">
                  {service.whatItIs.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.7]"
                      style={{ fontSize: "16px" }}
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              {/* Right — Callout card */}
              <div className="lg:sticky lg:top-[120px]">
                <div
                  className="rounded-[24px] overflow-hidden"
                  style={{ background: "linear-gradient(145deg, #fdf8f0 0%, #f5ede0 100%)", border: "1px solid rgba(0,164,164,0.15)" }}
                >
                  <div className="p-[40px]">
                    <p
                      className="font-['DM_Sans'] font-bold text-[#00A4A4] leading-[1.05]"
                      style={{ fontSize: "clamp(28px, 3.6vw, 44px)", letterSpacing: "-1.5px" }}
                    >
                      {service.whatItIs.callout.big}
                    </p>
                    <p
                      className="font-['DM_Sans'] font-semibold text-[#0f172a] mt-[12px] leading-[1.3]"
                      style={{ fontSize: "17px" }}
                    >
                      {service.whatItIs.callout.label}
                    </p>
                    {service.whatItIs.callout.sub && (
                      <p
                        className="font-['DM_Sans'] text-[#64748b] mt-[8px]"
                        style={{ fontSize: "13px" }}
                      >
                        {service.whatItIs.callout.sub}
                      </p>
                    )}
                  </div>
                  <div
                    className="px-[40px] pb-[40px] pt-[8px]"
                    style={{ borderTop: "1px solid rgba(0,164,164,0.12)" }}
                  >
                    <p
                      className="font-['DM_Sans'] text-[#475569] mb-[20px]"
                      style={{ fontSize: "14px", lineHeight: "1.6" }}
                    >
                      Speak with a licensed professional today. We'll tell you honestly if you qualify — and what your best path forward is.
                    </p>
                    <a
                      href="https://ti.sympletax.com/free-consultation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-[8px] font-['DM_Sans'] font-bold text-white rounded-full transition-all duration-300 hover:scale-[1.02]"
                      style={{
                        fontSize: "14px",
                        padding: "13px 24px",
                        background: "linear-gradient(135deg, #00A4A4 0%, #007a7a 100%)",
                        boxShadow: "0 6px 20px rgba(0,164,164,0.35)",
                      }}
                    >
                      Free Case Evaluation
                      <ArrowRight className="w-[14px] h-[14px]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 03 HOW IT WORKS ─────────────────────────────────────────────────── */}
        <section className="py-[80px] lg:py-[120px] bg-white">
          <div className="max-w-[1330px] mx-auto px-[24px] lg:px-[70px]">
            <div className="flex items-center gap-[10px] mb-[20px]">
              <div className="h-px w-[35px] bg-[#00A4A4]" />
              <span
                className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                style={{ fontSize: "13px", letterSpacing: "0.07em" }}
              >
                The Process
              </span>
            </div>
            <h2
              className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.08] mb-[48px]"
              style={{ fontSize: "clamp(28px, 3vw, 42px)", letterSpacing: "-1.5px", maxWidth: "600px" }}
            >
              {service.howItWorks.heading}
            </h2>

            <div className="flex flex-col" style={{ borderTop: "1px solid #f1f5f9" }}>
              {service.howItWorks.steps.map((step, i) => (
                <div
                  key={step.title}
                  className="flex gap-[28px] lg:gap-[48px] py-[28px]"
                  style={{ borderBottom: "1px solid #f1f5f9" }}
                >
                  <span
                    className="font-['DM_Sans'] font-bold text-[#00A4A4] shrink-0 leading-none"
                    style={{ fontSize: "13px", letterSpacing: "0.04em", paddingTop: "3px", minWidth: "28px" }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3
                      className="font-['DM_Sans'] font-bold text-[#0f172a] mb-[8px]"
                      style={{ fontSize: "clamp(16px, 1.4vw, 18px)", letterSpacing: "-0.4px" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="font-['DM_Sans'] text-[#475569] leading-[1.7]"
                      style={{ fontSize: "15px" }}
                    >
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 04 QUALIFY / SIGNS ──────────────────────────────────────────────── */}
        <section className="py-[80px] lg:py-[120px] bg-white">
          <div className="max-w-[1330px] mx-auto px-[24px] lg:px-[70px]">
            <div className="flex items-center gap-[10px] mb-[20px]">
              <div className="h-px w-[35px] bg-[#00A4A4]" />
              <span
                className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                style={{ fontSize: "13px", letterSpacing: "0.07em" }}
              >
                {isResolution ? "Eligibility" : "Identify the Problem"}
              </span>
            </div>
            <div className="grid lg:grid-cols-[1fr_1fr] gap-[48px] lg:gap-[80px] items-start">
              <div>
                <h2
                  className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.08] mb-[20px]"
                  style={{ fontSize: "clamp(26px, 2.8vw, 40px)", letterSpacing: "-1.5px" }}
                >
                  {service.qualify.heading}
                </h2>
                <p
                  className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.7]"
                  style={{ fontSize: "16px" }}
                >
                  {service.qualify.desc}
                </p>

                <div className="mt-[40px]">
                  <a
                    href="https://ti.sympletax.com/free-consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-[10px] font-['DM_Sans'] font-bold text-white rounded-full transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      fontSize: "14px",
                      padding: "13px 26px",
                      background: "linear-gradient(135deg, #00A4A4 0%, #007a7a 100%)",
                      boxShadow: "0 6px 20px rgba(0,164,164,0.3)",
                    }}
                  >
                    Check If You Qualify
                    <ArrowRight className="w-[14px] h-[14px]" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col" style={{ borderTop: "1px solid #f1f5f9" }}>
                {service.qualify.points.map((point, i) => (
                  <div
                    key={point.title}
                    className="flex gap-[20px] py-[22px]"
                    style={{ borderBottom: "1px solid #f1f5f9" }}
                  >
                    <span
                      className="font-['DM_Sans'] font-bold text-[#00A4A4] shrink-0 leading-none"
                      style={{ fontSize: "13px", letterSpacing: "0.04em", paddingTop: "2px", minWidth: "24px" }}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p
                        className="font-['DM_Sans'] font-semibold text-[#0f172a] mb-[4px]"
                        style={{ fontSize: "15px" }}
                      >
                        {point.title}
                      </p>
                      <p
                        className="font-['DM_Sans'] text-[#64748b] leading-[1.6]"
                        style={{ fontSize: "14px" }}
                      >
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 05 SYMPLETAX APPROACH ────────────────────────────────────────────── */}
        <section className="py-[80px] lg:py-[120px] bg-white">
          <div className="max-w-[1330px] mx-auto px-[24px] lg:px-[70px]">
            <div className="flex items-center gap-[10px] mb-[20px]">
              <div className="h-px w-[35px] bg-[#00A4A4]" />
              <span
                className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                style={{ fontSize: "13px", letterSpacing: "0.07em" }}
              >
                Our Approach
              </span>
            </div>
            <h2
              className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.08] mb-[48px]"
              style={{ fontSize: "clamp(28px, 3vw, 42px)", letterSpacing: "-1.5px", maxWidth: "560px" }}
            >
              {service.approach.heading}
            </h2>

            <div
              className="grid lg:grid-cols-3"
              style={{ borderTop: "1px solid #f1f5f9" }}
            >
              {service.approach.steps.map((step, i) => (
                <div
                  key={step.number}
                  className="flex flex-col gap-[14px] py-[36px] lg:py-[40px]"
                  style={{
                    borderBottom: "1px solid #f1f5f9",
                    paddingLeft: i > 0 ? "40px" : "0",
                    borderLeft: i > 0 ? "1px solid #f1f5f9" : "none",
                  }}
                >
                  <span
                    className="font-['DM_Sans'] font-bold text-[#00A4A4]"
                    style={{ fontSize: "13px", letterSpacing: "0.04em" }}
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                  <h3
                    className="font-['DM_Sans'] font-bold text-[#0f172a]"
                    style={{ fontSize: "clamp(16px, 1.4vw, 18px)", letterSpacing: "-0.4px" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="font-['DM_Sans'] text-[#475569] leading-[1.7]"
                    style={{ fontSize: "15px" }}
                  >
                    {step.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-[48px] flex flex-wrap gap-[16px] items-center">
              <a
                href="https://ti.sympletax.com/free-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-[10px] font-['DM_Sans'] font-bold text-white rounded-full transition-all duration-300 hover:scale-[1.02]"
                style={{
                  fontSize: "15px",
                  padding: "14px 28px",
                  background: "linear-gradient(135deg, #00A4A4 0%, #007a7a 100%)",
                  boxShadow: "0 8px 28px rgba(0,164,164,0.38)",
                }}
              >
                Start Your Free Evaluation
                <ArrowRight className="w-[16px] h-[16px]" />
              </a>
              <a
                href="tel:+19492873015"
                className="font-['DM_Sans'] font-semibold text-[#64748b] hover:text-[#0f172a] transition-colors"
                style={{ fontSize: "14px" }}
              >
                Or call (949) 287-3015
              </a>
            </div>
          </div>
        </section>

        {/* ── 05b RELATED PROBLEMS — removed ──────────────────────────────────── */}
        {false && problemCards.length > 0 && (
          <section className="py-[80px] lg:py-[100px]" style={{ background: "#f8fafc" }}>
            <div className="max-w-[1330px] mx-auto px-[24px] lg:px-[70px]">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[20px] mb-[48px]">
                <div>
                  <div className="flex items-center gap-[10px] mb-[14px]">
                    <div className="h-px w-[35px] bg-[#00A4A4]" />
                    <span
                      className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                      style={{ fontSize: "13px", letterSpacing: "0.07em" }}
                    >
                      Related Situations
                    </span>
                  </div>
                  <h2
                    className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.08]"
                    style={{ fontSize: "clamp(24px, 2.5vw, 34px)", letterSpacing: "-1.2px" }}
                  >
                    This Solution May Help If You Have…
                  </h2>
                </div>
                <a
                  href="https://ti.sympletax.com/free-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-[8px] font-['DM_Sans'] font-bold text-white rounded-full transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    fontSize: "14px",
                    padding: "12px 24px",
                    background: "linear-gradient(135deg, #00A4A4 0%, #007a7a 100%)",
                    boxShadow: "0 6px 20px rgba(0,164,164,0.3)",
                  }}
                >
                  Free Case Review
                  <ArrowRight className="w-[14px] h-[14px]" />
                </a>
              </div>

              {/* Horizontal list rows */}
              <div className="flex flex-col">
                {problemCards.map((card, i) => (
                  <motion.div
                    key={card.slug}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: i * 0.09 }}
                    style={{ borderTop: i === 0 ? "1px solid #e2e8f0" : "none", borderBottom: "1px solid #e2e8f0" }}
                  >
                    <Link
                      to={`/solutions/${card.slug}`}
                      className="group flex items-center justify-between gap-[24px] py-[24px] lg:py-[28px] transition-all duration-200 hover:pl-[6px]"
                    >
                      {/* Left: number + content */}
                      <div className="flex items-center gap-[24px] lg:gap-[36px] flex-1 min-w-0">
                        <span
                          className="font-['DM_Sans'] font-bold text-[#00A4A4] shrink-0 leading-none"
                          style={{ fontSize: "13px", letterSpacing: "0.04em", minWidth: "24px" }}
                          aria-hidden="true"
                        >
                          0{i + 1}
                        </span>
                        <div className="flex flex-col gap-[4px] min-w-0">
                          <span
                            className="font-['DM_Sans'] font-medium uppercase text-[#94a3b8]"
                            style={{ fontSize: "11px", letterSpacing: "0.08em" }}
                          >
                            {card.type === "problem" ? "Tax Problem" : "Resolution"}
                          </span>
                          <h3
                            className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.2] truncate"
                            style={{ fontSize: "clamp(15px, 1.4vw, 18px)", letterSpacing: "-0.3px" }}
                          >
                            {card.eyebrow}
                          </h3>
                          <p
                            className="font-['DM_Sans'] font-normal text-[#64748b] leading-[1.5] hidden lg:block"
                            style={{ fontSize: "13px" }}
                          >
                            {card.subtitle.slice(0, 90)}{card.subtitle.length > 90 ? "…" : ""}
                          </p>
                        </div>
                      </div>

                      {/* Right: arrow */}
                      <div
                        className="shrink-0 w-[40px] h-[40px] rounded-full flex items-center justify-center border border-[#e2e8f0] group-hover:border-[#00A4A4] group-hover:bg-[#00A4A4] transition-all duration-200"
                        aria-hidden="true"
                      >
                        <ArrowRight className="w-[15px] h-[15px] text-[#94a3b8] group-hover:text-white transition-colors duration-200" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── 05c RELATED ARTICLES ─────────────────────────────────────────────── */}
        {relatedArticles.length > 0 && (
          <section className="py-[80px] lg:py-[100px]" style={{ background: "#f1f5f9" }}>
            <div className="max-w-[1330px] mx-auto px-[24px] lg:px-[70px]">
              <div className="flex items-center gap-[10px] mb-[20px]">
                <div className="h-px w-[35px] bg-[#00A4A4]" />
                <span
                  className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                  style={{ fontSize: "13px", letterSpacing: "0.07em" }}
                >
                  From Our Blog
                </span>
              </div>
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-[20px] mb-[44px]">
                <h2
                  className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.08]"
                  style={{ fontSize: "clamp(26px, 2.8vw, 38px)", letterSpacing: "-1.5px", maxWidth: "500px" }}
                >
                  Related Resources
                </h2>
                <Link
                  to="/resources"
                  className="inline-flex shrink-0 items-center gap-[8px] font-['DM_Sans'] font-semibold text-[#00A4A4] hover:text-[#007a7a] transition-colors"
                  style={{ fontSize: "14px" }}
                >
                  View all articles
                  <ArrowUpRight className="w-[14px] h-[14px]" />
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                {relatedArticles.map((article, i) => {
                  const [gradFrom, gradTo] = CATEGORY_GRADIENT[article.category] ?? ["#0f172a", "#0a1628"];
                  return (
                    <motion.div
                      key={article.slug}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.38, delay: i * 0.08 }}
                    >
                      <Link
                        to={`/resources/${article.slug}`}
                        className="group flex flex-col h-full rounded-[20px] overflow-hidden bg-white transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
                        style={{ border: "1px solid #e2e8f0" }}
                      >
                        {/* Thumbnail */}
                        <div
                          className="h-[130px] relative overflow-hidden flex items-end p-[20px]"
                          style={{ background: `linear-gradient(135deg, ${gradFrom} 0%, ${gradTo} 100%)` }}
                        >
                          {/* Dot grid overlay */}
                          <div
                            className="absolute inset-0"
                            style={{
                              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
                              backgroundSize: "18px 18px",
                            }}
                          />
                          <span
                            className="relative z-10 font-['DM_Sans'] font-medium text-white/70 rounded-full px-[10px] py-[4px]"
                            style={{ fontSize: "11px", letterSpacing: "0.05em", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
                          >
                            {article.category}
                          </span>
                        </div>
                        {/* Body */}
                        <div className="flex flex-col flex-1 p-[24px]">
                          <div className="flex items-center gap-[12px] mb-[12px]">
                            <span
                              className="flex items-center gap-[5px] font-['DM_Sans'] text-[#94a3b8]"
                              style={{ fontSize: "12px" }}
                            >
                              <Clock className="w-[12px] h-[12px]" />
                              {article.readTime}
                            </span>
                            <span
                              className="font-['DM_Sans'] text-[#94a3b8]"
                              style={{ fontSize: "12px" }}
                            >
                              {article.date}
                            </span>
                          </div>
                          <h3
                            className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.3] mb-[10px] group-hover:text-[#00A4A4] transition-colors"
                            style={{ fontSize: "clamp(15px, 1.3vw, 17px)", letterSpacing: "-0.3px" }}
                          >
                            {article.title}
                          </h3>
                          <p
                            className="font-['DM_Sans'] text-[#64748b] leading-[1.65] flex-1"
                            style={{ fontSize: "13px" }}
                          >
                            {article.excerpt.slice(0, 100)}{article.excerpt.length > 100 ? "…" : ""}
                          </p>
                          <div
                            className="mt-[18px] flex items-center gap-[6px] font-['DM_Sans'] font-semibold text-[#00A4A4] group-hover:gap-[10px] transition-all duration-200"
                            style={{ fontSize: "13px" }}
                          >
                            <BookOpen className="w-[13px] h-[13px]" />
                            Read article
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ── 06 FAQ ───────────────────────────────────────────────────────────── */}
        <section className="py-[80px] lg:py-[100px] bg-white">
          <div className="max-w-[1330px] mx-auto px-[24px] lg:px-[70px]">
            <div className="grid lg:grid-cols-[360px_1fr] gap-[60px] lg:gap-[80px]">
              {/* Left */}
              <div className="lg:sticky lg:top-[120px] lg:self-start">
                <div className="flex items-center gap-[10px] mb-[20px]">
                  <div className="h-px w-[35px] bg-[#00A4A4]" />
                  <span
                    className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                    style={{ fontSize: "13px", letterSpacing: "0.07em" }}
                  >
                    Common Questions
                  </span>
                </div>
                <h2
                  className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.1] mb-[16px]"
                  style={{ fontSize: "clamp(24px, 2.5vw, 34px)", letterSpacing: "-1.2px" }}
                >
                  Frequently Asked Questions
                </h2>
                <p
                  className="font-['DM_Sans'] text-[#64748b] leading-[1.7] mb-[28px]"
                  style={{ fontSize: "15px" }}
                >
                  Everything you need to know about {service.eyebrow.toLowerCase()}.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-[8px] font-['DM_Sans'] font-semibold text-[#00A4A4] hover:text-[#007a7a] transition-colors"
                  style={{ fontSize: "14px" }}
                >
                  Have another question?
                  <ArrowRight className="w-[14px] h-[14px]" />
                </a>
              </div>

              {/* Right — accordion */}
              <div>
                {service.faqs.map((faq, i) => (
                  <FAQItem
                    key={i}
                    q={faq.q}
                    a={faq.a}
                    isOpen={openFaq === i}
                    onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 07 RELATED SERVICES — removed ───────────────────────────────────── */}
        {false && related.length > 0 && (
          <section className="py-[80px] lg:py-[100px] bg-white">
            <div className="max-w-[1330px] mx-auto px-[24px] lg:px-[70px]">
              <div className="flex items-center gap-[10px] mb-[20px]">
                <div className="h-px w-[35px] bg-[#00A4A4]" />
                <span
                  className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                  style={{ fontSize: "13px", letterSpacing: "0.07em" }}
                >
                  You Might Also Need
                </span>
              </div>
              <h2
                className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.08] mb-[44px]"
                style={{ fontSize: "clamp(26px, 2.8vw, 38px)", letterSpacing: "-1.5px" }}
              >
                Related Services & Solutions
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[16px]">
                {related.map((rel, i) => (
                  <motion.div
                    key={rel.slug}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.35, delay: i * 0.07 }}
                  >
                    <Link
                      to={`/solutions/${rel.slug}`}
                      className="group flex flex-col h-full p-[24px] rounded-[18px] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-[2px]"
                      style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
                    >
                      <span
                        className="font-['DM_Sans'] font-medium text-[#64748b] uppercase mb-[10px]"
                        style={{ fontSize: "11px", letterSpacing: "0.07em" }}
                      >
                        {rel.type === "resolution" ? "Resolution" : "Tax Problem"}
                      </span>
                      <h3
                        className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.25] mb-[10px] group-hover:text-[#00A4A4] transition-colors"
                        style={{ fontSize: "clamp(15px, 1.3vw, 17px)", letterSpacing: "-0.3px" }}
                      >
                        {rel.eyebrow}
                      </h3>
                      <p
                        className="font-['DM_Sans'] text-[#64748b] leading-[1.6] flex-1"
                        style={{ fontSize: "13px" }}
                      >
                        {rel.subtitle.slice(0, 90)}
                        {rel.subtitle.length > 90 ? "…" : ""}
                      </p>
                      <div className="mt-[16px] flex items-center gap-[6px] text-[#00A4A4] font-['DM_Sans'] font-semibold group-hover:gap-[10px] transition-all duration-200" style={{ fontSize: "13px" }}>
                        Learn more
                        <ArrowUpRight className="w-[13px] h-[13px]" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        <FloatingGradientCTA
          title="Ready to Resolve Your Tax Problem?"
          description="Our licensed professionals will review your case for free and tell you exactly what your options are."
          secondaryLabel="View All Solutions"
          secondaryTo="/solutions"
        />

      </main>

      <Footer />
    </>
  );
}
