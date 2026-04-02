import { motion } from "motion/react";
import { Link } from "react-router";
import { Navbar } from "./components/v2/Navbar";
import { Footer } from "./components/v2/Footer";
import { FloatingGradientCTA } from "./components/v2/FloatingGradientCTA";
import { usePageSEO } from "./hooks/usePageSEO";
import { ArrowRight, CheckCircle, AlertTriangle, Scale, FileText, DollarSign, Shield, RefreshCw } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const CORE_SERVICES = [
  {
    icon: Scale,
    color: "#00A4A4",
    title: "Tax Negotiation",
    slug: "tax-negotiation",
    headline: "We Go to Bat Against the IRS — So You Don't Have To",
    description: "We negotiate directly with the IRS on your behalf. Our licensed professionals leverage every legal tool available to reduce your liability and reach a resolution that fits your financial reality.",
    outcomes: ["Reduced total balance owed", "Elimination of penalties & interest", "Structured payment plans", "Lien and levy releases"],
    urgency: "Active IRS negotiations have deadlines — delays cost you options.",
  },
  {
    icon: Shield,
    color: "#8b5cf6",
    title: "Tax Relief",
    slug: "tax-relief",
    headline: "Stop IRS Collections in Their Tracks — Within 24 Hours",
    description: "Wage garnishment. Bank levy. Tax lien. These are devastating — but reversible. We identify the fastest legally available relief for your situation and act immediately.",
    outcomes: ["Wage garnishment release", "Bank levy release", "Federal tax lien withdrawal", "IRS collection halt"],
    urgency: "Every day of inaction is another paycheck garnished.",
  },
  {
    icon: DollarSign,
    color: "#10b981",
    title: "Tax Settlement",
    slug: "tax-settlement",
    headline: "Settle Your Tax Debt for a Fraction of What You Owe",
    description: "Through IRS programs like Offer in Compromise, many taxpayers can legally settle their full debt for significantly less. We evaluate every settlement option and build the strongest case for you.",
    outcomes: ["Offer in Compromise settlements", "Installment Agreements", "Penalty Abatement", "Currently Not Collectible status"],
    urgency: "Settlement windows can close — early action opens more options.",
  },
  {
    icon: FileText,
    color: "#f59e0b",
    title: "Tax Resolution",
    slug: "tax-resolution",
    headline: "Full-Service IRS Representation From Start to Case Closed",
    description: "We handle everything — IRS transcript pulls, Power of Attorney, negotiation, and case closure. You focus on your life. We handle every step of the resolution process.",
    outcomes: ["Complete IRS case management", "Power of Attorney representation", "All correspondence handled", "Full compliance restoration"],
    urgency: "Unresolved IRS debt compounds with interest and penalties daily.",
  },
];

const FRESH_START_PROGRAMS = [
  {
    icon: DollarSign,
    color: "#00A4A4",
    title: "Offer in Compromise",
    description: "Settle your full IRS debt for less than you owe. Based on your ability to pay, income, expenses, and asset equity — we analyze your case and build the strongest possible offer.",
  },
  {
    icon: RefreshCw,
    color: "#8b5cf6",
    title: "Penalty Abatement",
    description: "The IRS charges steep penalties for late filing and payment — but they can often be waived. We identify your eligibility for First Time Abatement or Reasonable Cause relief and submit the request.",
  },
  {
    icon: Shield,
    color: "#10b981",
    title: "Currently Not Collectible",
    description: "If you cannot pay without causing genuine financial hardship, the IRS will put your account in CNC status — halting all collection actions. We establish this status and monitor your case.",
  },
  {
    icon: Scale,
    color: "#f59e0b",
    title: "Innocent Spouse Relief",
    description: "If your spouse or former spouse created the tax liability without your knowledge, you may qualify for full relief from that debt. We evaluate your eligibility and file all required forms.",
  },
  {
    icon: FileText,
    color: "#ef4444",
    title: "Unfiled Tax Returns",
    description: "Unfiled returns must be resolved before any IRS program can proceed. We prepare and file missing returns as part of your case — often at no additional charge — which frequently reduces your total balance.",
  },
  {
    icon: AlertTriangle,
    color: "#06b6d4",
    title: "Installment Agreement",
    description: "A structured monthly payment plan can stop IRS collections while you pay over time. We negotiate the terms to ensure the payment amount works for your budget — not just the IRS.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  usePageSEO({
    title: "Tax Resolution Services | SympleTax",
    description:
      "Comprehensive IRS tax resolution — negotiation, relief, settlements, and full case management. Offer in Compromise, penalty abatement, garnishment release, and more. Licensed specialists, flat-fee pricing.",
    path: "/services",
  });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-[#00A4A4] focus:text-white focus:px-4 focus:py-2 focus:rounded-full font-['DM_Sans'] font-bold"
        style={{ fontSize: "14px" }}
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section
          className="pt-[120px] lg:pt-[160px] pb-[64px] lg:pb-[100px] relative overflow-hidden"
          style={{ backgroundColor: "#00A4A4" }}
          aria-label="Tax resolution services"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 95% 50%, rgba(0,164,164,0.12) 0%, transparent 50%)" }}
            aria-hidden="true"
          />

          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px] relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between lg:gap-[60px]">

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-[680px]"
              >
                <div className="flex items-center gap-[10px] mb-[24px]">
                  <div className="bg-white h-px w-[35px]" />
                  <span
                    className="font-['DM_Sans'] font-medium uppercase text-white"
                    style={{ fontSize: "13px", letterSpacing: "0.08em" }}
                  >
                    Tax Resolution Services
                  </span>
                </div>
                <h1
                  className="font-['DM_Sans'] font-bold text-white leading-[1.06] mb-[24px]"
                  style={{ fontSize: "clamp(32px, 5.5vw, 72px)", letterSpacing: "-2.5px" }}
                >
                  Our Expertise,<br />
                  <span className="text-white">Your Success</span>
                </h1>
                <p
                  className="font-['DM_Sans'] font-normal text-white/70 leading-[1.65]"
                  style={{ fontSize: "clamp(15px, 1.5vw, 18px)", letterSpacing: "-0.3px", maxWidth: "520px" }}
                >
                  From IRS negotiation to penalty abatement, we offer every tax resolution service available — all handled by licensed professionals with a track record of real results.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="hidden lg:flex flex-col gap-[12px] shrink-0"
              >
                <Link
                  to="https://ti.sympletax.com/free-consultation"
                  className="inline-flex items-center gap-[10px] bg-white hover:bg-white/90 text-[#00A4A4] font-['DM_Sans'] font-bold rounded-full hover:scale-[1.02] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  style={{ fontSize: "15px", padding: "16px 36px" }}
                >
                  Get Free Consultation
                  <ArrowRight className="w-[15px] h-[15px]" aria-hidden="true" />
                </Link>
                <p className="text-center font-['DM_Sans'] text-white/40" style={{ fontSize: "12px" }}>
                  No obligation · Licensed professionals only
                </p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── Core Services ─────────────────────────────────────────────────── */}
        <section className="py-[64px] lg:py-[120px] bg-white" aria-label="Core tax resolution services">
          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px]">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-[48px] lg:mb-[72px]"
            >
              <div className="flex items-center gap-[10px] mb-[20px]">
                <div className="bg-[#00A4A4] h-px w-[35px]" />
                <span
                  className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                  style={{ fontSize: "13px", letterSpacing: "0.08em" }}
                >
                  Core Services
                </span>
              </div>
              <h2
                className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.08]"
                style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-1.5px", maxWidth: "600px" }}
              >
                Core Tax Resolution Services
              </h2>
            </motion.div>

            <div className="flex flex-col gap-[32px]">
              {CORE_SERVICES.map((service, idx) => {
                const Icon = service.icon;
                const isEven = idx % 2 === 1;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.08 }}
                    className={`rounded-[24px] overflow-hidden flex flex-col lg:flex-row ${isEven ? "lg:flex-row-reverse" : ""}`}
                    style={{
                      border: "1px solid #e8e4da",
                      boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
                    }}
                  >
                    {/* Color accent panel */}
                    <div
                      className="lg:w-[280px] lg:shrink-0 p-[40px] flex flex-col justify-between gap-[24px]"
                      style={{ backgroundColor: service.color + "12", borderRight: isEven ? "none" : `1px solid ${service.color}20`, borderLeft: isEven ? `1px solid ${service.color}20` : "none" }}
                    >
                      <div
                        className="w-[56px] h-[56px] rounded-[16px] flex items-center justify-center"
                        style={{ backgroundColor: service.color + "20" }}
                        aria-hidden="true"
                      >
                        <Icon style={{ width: "24px", height: "24px", color: service.color }} />
                      </div>
                      <div>
                        <span
                          className="font-['DM_Sans'] font-bold uppercase block mb-[8px]"
                          style={{ fontSize: "11px", letterSpacing: "0.08em", color: service.color }}
                        >
                          {service.title}
                        </span>
                        <p
                          className="font-['DM_Sans'] font-normal text-[#94a3b8] leading-[1.55]"
                          style={{ fontSize: "12px" }}
                        >
                          {service.urgency}
                        </p>
                      </div>
                      <Link
                        to="https://ti.sympletax.com/free-consultation"
                        className="inline-flex items-center gap-[8px] font-['DM_Sans'] font-bold rounded-full transition-all duration-200 hover:scale-[1.02] focus:outline-none focus-visible:ring-2"
                        style={{
                          fontSize: "13px",
                          padding: "11px 20px",
                          backgroundColor: service.color,
                          color: "white",
                        }}
                        aria-label={`Get help with ${service.title}`}
                      >
                        Get Help Now
                        <ArrowRight className="w-[13px] h-[13px]" aria-hidden="true" />
                      </Link>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-[32px] lg:p-[48px] flex flex-col gap-[20px]">
                      <h3
                        className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.2]"
                        style={{ fontSize: "clamp(18px, 2vw, 24px)", letterSpacing: "-0.5px" }}
                      >
                        {service.headline}
                      </h3>
                      <p
                        className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.7]"
                        style={{ fontSize: "15px", letterSpacing: "-0.2px" }}
                      >
                        {service.description}
                      </p>
                      <div>
                        <p className="font-['DM_Sans'] font-semibold text-[#0f172a] mb-[12px]" style={{ fontSize: "13px" }}>
                          OUTCOMES WE DELIVER
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px]">
                          {service.outcomes.map((outcome) => (
                            <div key={outcome} className="flex items-center gap-[10px]">
                              <CheckCircle
                                className="w-[15px] h-[15px] shrink-0"
                                style={{ color: service.color }}
                                aria-hidden="true"
                              />
                              <span
                                className="font-['DM_Sans'] font-normal text-[#475569]"
                                style={{ fontSize: "13px" }}
                              >
                                {outcome}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ── Fresh Start Programs ──────────────────────────────────────────── */}
        <section
          className="py-[64px] lg:py-[120px]"
          style={{ backgroundColor: "#f5f1e8" }}
          aria-label="IRS Fresh Start Programs"
        >
          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px]">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-[24px] mb-[48px] lg:mb-[72px]"
            >
              <div>
                <div className="flex items-center gap-[10px] mb-[20px]">
                  <div className="bg-[#00A4A4] h-px w-[35px]" />
                  <span
                    className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                    style={{ fontSize: "13px", letterSpacing: "0.08em" }}
                  >
                    IRS Programs
                  </span>
                </div>
                <h2
                  className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.08]"
                  style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-1.5px" }}
                >
                  IRS Fresh Start Programs
                </h2>
              </div>
              <p
                className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.65] lg:max-w-[360px] lg:text-right"
                style={{ fontSize: "15px" }}
              >
                The IRS offers multiple pathways to resolution. We identify which ones you qualify for and handle every step.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px]">
              {FRESH_START_PROGRAMS.map((program, idx) => {
                const Icon = program.icon;
                return (
                  <motion.div
                    key={program.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
                    className="bg-white rounded-[20px] p-[32px] flex flex-col gap-[16px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-[2px] transition-all duration-300"
                    style={{ border: "1px solid #e8e4da" }}
                  >
                    <div
                      className="w-[48px] h-[48px] rounded-[14px] flex items-center justify-center"
                      style={{ backgroundColor: program.color + "15" }}
                      aria-hidden="true"
                    >
                      <Icon style={{ width: "20px", height: "20px", color: program.color }} />
                    </div>

                    <div>
                      <h3
                        className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.2] mb-[10px]"
                        style={{ fontSize: "18px", letterSpacing: "-0.4px" }}
                      >
                        {program.title}
                      </h3>
                      <p
                        className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.65] flex-1"
                        style={{ fontSize: "14px", letterSpacing: "-0.1px" }}
                      >
                        {program.description}
                      </p>
                    </div>

                    <Link
                        to="https://ti.sympletax.com/free-consultation"
                      className="inline-flex items-center gap-[6px] font-['DM_Sans'] font-semibold hover:gap-[10px] transition-all duration-200 focus:outline-none focus-visible:underline mt-auto"
                      style={{ fontSize: "13px", color: program.color }}
                      aria-label={`Learn more about ${program.title}`}
                    >
                      See If I Qualify
                      <ArrowRight className="w-[13px] h-[13px]" aria-hidden="true" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

        <FloatingGradientCTA
          ariaLabel="Not sure which service"
          title="Not Sure Which Service You Need?"
          description="Start with a free consultation. We'll review your IRS situation and tell you exactly which program gives you the best possible outcome — no guessing, no upselling."
          secondaryLabel="View All Solutions"
          secondaryTo="/solutions"
          footnote="No credit card · No obligation · Licensed professionals"
        />

      </main>
      <Footer />
    </div>
  );
}
