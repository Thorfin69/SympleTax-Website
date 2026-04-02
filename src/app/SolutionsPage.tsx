import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { useState } from "react";
import { usePageSEO } from "./hooks/usePageSEO";
import { Navbar } from "./components/v2/Navbar";
import { Footer } from "./components/v2/Footer";
import { CaseResultSpotlight } from "./components/v2/CaseResultSpotlight";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import {
  CheckCircle, Calendar, Zap, Shield, UserCheck, FileText,
  TrendingDown, Scissors, Lock, AlertCircle, Search, FileX,
  Briefcase, Building2, Users, Heart,
  ArrowRight, Instagram, Plus, Minus,
} from "lucide-react";

import feedImg1 from "../../650321405_122097914025122800_4577503060609393561_n.jpg";
import feedImg2 from "../../651173716_122102903487122800_4091566060201860687_n.jpg";
import feedImg3 from "../../652943268_122103584361122800_6297573296820253944_n.jpg";
import feedImg4 from "../../653106919_122102903481122800_5641194311721553293_n.jpg";

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: CheckCircle,
    name: "Offer in Compromise",
    desc: "Settle your full tax debt for a fraction of what you owe — based on your ability to pay.",
    href: "/solutions/offer-in-compromise",
  },
  {
    icon: Calendar,
    name: "Installment Agreement",
    desc: "Break your balance into manageable monthly payments the IRS accepts.",
    href: "/solutions/installment-agreement",
  },
  {
    icon: Zap,
    name: "Penalty Abatement",
    desc: "Remove IRS penalties that have ballooned your balance — often without paying them at all.",
    href: "/solutions/penalty-abatement",
  },
  {
    icon: Shield,
    name: "Currently Not Collectible",
    desc: "Temporarily halt all IRS collection activity when paying would cause genuine hardship.",
    href: "/solutions/currently-not-collectible",
  },
  {
    icon: UserCheck,
    name: "Innocent Spouse Relief",
    desc: "Separate your liability from a spouse's tax mistakes when you had no knowledge of them.",
    href: "/solutions/innocent-spouse-relief",
  },
  {
    icon: FileText,
    name: "Unfiled Returns",
    desc: "Get back into compliance with missing returns — stopping penalties before they multiply.",
    href: "/solutions/unfiled-returns",
  },
];

const PROBLEMS = [
  {
    icon: TrendingDown,
    name: "Back Taxes",
    desc: "Unresolved balances from prior years, growing with interest and penalties.",
    href: "/solutions/back-taxes",
  },
  {
    icon: Scissors,
    name: "Wage Garnishment",
    desc: "The IRS is taking money directly from your paycheck — we can stop it fast.",
    href: "/solutions/wage-garnishment",
  },
  {
    icon: Lock,
    name: "Tax Levy",
    desc: "Bank accounts frozen or assets seized. We work to release levies immediately.",
    href: "/solutions/tax-levy",
  },
  {
    icon: AlertCircle,
    name: "Tax Lien",
    desc: "A lien on your property that blocks refinancing, credit, and asset sales.",
    href: "/solutions/tax-lien",
  },
  {
    icon: Search,
    name: "IRS Audit",
    desc: "Under IRS review or examination — don't face it alone without representation.",
    href: "/contact",
  },
  {
    icon: FileX,
    name: "Unfiled Taxes",
    desc: "Years of missing returns creating liability and collection exposure.",
    href: "/solutions/unfiled-returns",
  },
];

const PERSONAS = [
  {
    icon: Briefcase,
    type: "Self-Employed",
    problem: "Estimated taxes weren't paid, deductions are being questioned, and the bill keeps growing.",
    help: "We handle back taxes, audit representation, and penalty removal so you can focus on your business.",
  },
  {
    icon: Building2,
    type: "Small Business Owner",
    problem: "Payroll tax penalties, unfiled business returns, or an IRS notice threatening your operations.",
    help: "We negotiate directly with the IRS — protecting your business assets and getting collections stopped.",
  },
  {
    icon: Users,
    type: "Salaried Employee",
    problem: "Unexpected tax bill from a life change — divorce, side income, or an employer error.",
    help: "We find the right resolution program for your situation and handle all IRS communication.",
  },
  {
    icon: Heart,
    type: "Retiree",
    problem: "Old tax debt resurfacing, threatening retirement savings, Social Security, or a pension.",
    help: "We protect your fixed income and assets — negotiating CNC status or an OIC based on your real ability to pay.",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Free Consultation",
    duration: "Within 24 hours",
    body: "A licensed professional reviews your IRS account, outstanding balances, and active collection notices — then explains every option available to you, at no cost.",
    items: ["Full IRS balance review", "Collection action assessment", "Clear options explained"],
  },
  {
    number: "02",
    title: "Investigation & Strategy",
    duration: "3–5 business days",
    body: "We pull your complete IRS transcripts, file Power of Attorney (Form 2848), and immediately halt active collections. Our team selects the optimal resolution path.",
    items: ["IRS transcripts obtained", "POA filed — collections stopped", "Resolution strategy selected"],
  },
  {
    number: "03",
    title: "Negotiation & Resolution",
    duration: "2–12 months",
    body: "We take over all IRS communication and negotiate aggressively — whether that's an OIC, Installment Agreement, Penalty Abatement, or CNC status.",
    items: ["All IRS communication handled", "Maximum reduction negotiated", "Missing returns filed if needed", "Full case closure"],
  },
];

const RESULTS = [
  {
    situation: "Back Tax Debt — Unresolved Federal Assessment",
    from: "$94,000",
    to: "$4,200",
    reduction: "96%",
    detail: "Offer in Compromise negotiated after full IRS transcript review and financial analysis.",
    accent: "#e4f8f8",
    border: "rgba(0,164,164,0.15)",
    featured: true,
  },
  {
    situation: "Payroll Tax Penalties — Small Business",
    from: "$67,000",
    to: "$3,800",
    reduction: "94%",
    detail: "Penalty abatement + installment agreement. Business remained open.",
    accent: "#eef2ff",
    border: "rgba(99,102,241,0.12)",
    featured: false,
  },
  {
    situation: "Wage Garnishment & Back Taxes",
    from: "$31,000",
    to: "$2,400",
    reduction: "92%",
    detail: "Garnishment released within 48 hours. CNC status secured.",
    accent: "#fdf8ee",
    border: "rgba(245,158,11,0.15)",
    featured: false,
  },
  {
    situation: "Unfiled Returns + IRS Audit",
    from: "$18,500",
    to: "$900",
    reduction: "95%",
    detail: "Returns reconstructed, audit representation provided, penalty abatement approved.",
    accent: "#f0fdf4",
    border: "rgba(34,197,94,0.12)",
    featured: false,
  },
];

const FAQS = [
  {
    id: "01",
    question: "How long does tax resolution take?",
    answer:
      "It depends on your situation. Penalty abatement and installment agreements can be resolved in 30–90 days. Offer in Compromise cases typically take 6–12 months from submission to IRS acceptance. We set realistic timelines upfront — no false promises.",
  },
  {
    id: "02",
    question: "Will I still owe money after an Offer in Compromise?",
    answer:
      "If accepted, an OIC settles your entire tax debt for the negotiated amount. You pay the agreed sum — and the remaining balance is legally eliminated. However, not everyone qualifies. We evaluate your full financial picture before recommending this path.",
  },
  {
    id: "03",
    question: "Do you work with the IRS directly on my behalf?",
    answer:
      "Yes. We file Form 2848 (Power of Attorney) which legally authorizes us to speak, negotiate, and correspond with the IRS for you. You stop taking their calls. We handle everything.",
  },
  {
    id: "04",
    question: "What if I can't afford to pay anything right now?",
    answer:
      "Currently Not Collectible (CNC) status may be the right path. It temporarily halts all IRS collection activity — no levies, no garnishments — while you stabilize. We assess your income and expenses to determine if you qualify.",
  },
  {
    id: "05",
    question: "What happens if I have unfiled tax returns?",
    answer:
      "Unfiled returns must be addressed before the IRS considers any resolution. SympleTax prepares and files missing returns as part of your case — in many cases, this actually reduces your total balance before we even start negotiating.",
  },
  {
    id: "06",
    question: "How much does SympleTax charge?",
    answer:
      "We use flat-fee pricing — you know exactly what you're paying before we start. No hourly rates, no hidden fees, no upsells. The fee is based on the complexity of your case and is disclosed during your free consultation.",
  },
  {
    id: "07",
    question: "Can you stop a wage garnishment or bank levy quickly?",
    answer:
      "Yes. These are our most urgent cases. Once retained, we can typically secure a garnishment release or levy hold within 24–48 hours by demonstrating hardship or a pending resolution plan to the IRS.",
  },
  {
    id: "08",
    question: "Which resolution program is best for my situation?",
    answer:
      "That's exactly what we determine during your free consultation. After reviewing your IRS account, income, expenses, and assets — we recommend the program most likely to get you the best outcome. We don't apply a one-size-fits-all approach.",
  },
];

// ─── FAQ Item ──────────────────────────────────────────────────────────────────

function FAQItem({
  faq,
  activeId,
  setActiveId,
}: {
  faq: (typeof FAQS)[0];
  activeId: string | null;
  setActiveId: (id: string | null) => void;
}) {
  const isOpen = activeId === faq.id;
  return (
    <div
      className="border-b"
      style={{ borderColor: "#e8ecf0" }}
    >
      <button
        onClick={() => setActiveId(isOpen ? null : faq.id)}
        className="flex items-center justify-between gap-[20px] w-full text-left cursor-pointer py-[22px]"
        aria-expanded={isOpen}
      >
        <span
          className="font-['DM_Sans'] font-semibold leading-[1.35] text-[#0f172a]"
          style={{ fontSize: "16px", letterSpacing: "-0.3px" }}
        >
          {faq.question}
        </span>
        <span
          className="shrink-0 w-[28px] h-[28px] rounded-full border flex items-center justify-center transition-colors duration-200"
          style={{
            borderColor: isOpen ? "#00A4A4" : "#d1d5db",
            color: isOpen ? "#00A4A4" : "#94a3b8",
            minWidth: "28px",
          }}
          aria-hidden="true"
        >
          {isOpen
            ? <Minus style={{ width: "12px", height: "12px" }} />
            : <Plus style={{ width: "12px", height: "12px" }} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key={faq.id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-[22px]">
              <p
                className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.7]"
                style={{ fontSize: "15px" }}
              >
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function SolutionsPage() {
  const [faqActive, setFaqActive] = useState<string | null>("01");

  usePageSEO({
    title: "IRS Tax Solutions & Programs | SympleTax",
    description:
      "Browse tax problems and resolution paths — wage garnishment, bank levies, liens, back taxes, unfiled returns, OIC, installment agreements, CNC, and more. Find the right program for your case.",
    path: "/solutions",
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

        {/* ── 01. Hero ──────────────────────────────────────────────────────── */}
        <section
          className="pt-[120px] lg:pt-[160px] pb-[72px] lg:pb-[100px] relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #009090 0%, #00A4A4 40%, #007a7a 100%)" }}
          aria-label="Solutions hero"
        >
          {/* Subtle grid lines */}
          <div
            className="absolute pointer-events-none inset-0"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute pointer-events-none inset-0"
            style={{ background: "radial-gradient(ellipse at 70% 30%, rgba(255,255,255,0.12) 0%, transparent 55%)" }}
            aria-hidden="true"
          />
          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px] relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-[740px]"
            >
              <div className="flex items-center gap-[10px] mb-[28px]">
                <div className="bg-white/70 h-px w-[35px]" />
                <span
                  className="font-['DM_Sans'] font-medium uppercase text-white/85"
                  style={{ fontSize: "14px", letterSpacing: "0.05em" }}
                >
                  IRS Tax Resolution Services
                </span>
              </div>
              <h1
                className="font-['DM_Sans'] font-bold text-white leading-[1.06] mb-[24px]"
                style={{ fontSize: "clamp(36px, 5.5vw, 72px)", letterSpacing: "-2.5px" }}
              >
                There's a Solution for<br />
                <span className="text-white">Your Tax Problem</span>
              </h1>
              <p
                className="font-['DM_Sans'] font-normal text-white/70 leading-[1.7] mb-[40px]"
                style={{ fontSize: "clamp(16px, 1.5vw, 19px)", letterSpacing: "-0.3px", maxWidth: "560px" }}
              >
                We match your situation to the right resolution strategy — and handle everything from start to finish. Licensed professionals. No sales reps.
              </p>
              <div className="flex flex-col sm:flex-row gap-[16px]">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-[10px] text-[#007a7a] font-['DM_Sans'] font-bold rounded-full transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)]"
                  style={{
                    fontSize: "16px",
                    padding: "17px 40px",
                    background: "white",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.14)",
                  }}
                >
                  Talk to an Expert
                  <ArrowRight className="w-[16px] h-[16px]" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-[8px] font-['DM_Sans'] font-medium text-white/80 hover:text-white border border-white/20 hover:border-white/40 rounded-full transition-all duration-300"
                  style={{ fontSize: "15px", padding: "17px 32px" }}
                >
                  How We Work
                </Link>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ── 02. Two-Track Grid ────────────────────────────────────────────── */}
        <section className="py-[64px] lg:py-[120px]" style={{ backgroundColor: "#f9fafb" }} aria-label="Resolution programs and tax problems">
          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px]">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-[56px]"
            >
              <div className="flex items-center gap-[10px] mb-[20px]">
                <div className="bg-[#00A4A4] h-px w-[35px]" />
                <span
                  className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                  style={{ fontSize: "14px", letterSpacing: "0.05em" }}
                >
                  Find Your Path
                </span>
              </div>
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-[16px]">
                <h2
                  className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.08]"
                  style={{ fontSize: "clamp(28px, 3.5vw, 48px)", letterSpacing: "-1.5px" }}
                >
                  Two Ways to Get Started
                </h2>
                <p
                  className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.6] lg:text-right lg:max-w-[360px] lg:shrink-0"
                  style={{ fontSize: "15px", letterSpacing: "-0.2px" }}
                >
                  Know the program you need — or just know the problem you're facing. Either way, we'll get you to the right resolution.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">

              {/* LEFT: Resolution Programs */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-[24px] overflow-hidden"
                style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.05)" }}
              >
                {/* Column header */}
                <div
                  className="px-[16px] sm:px-[28px] py-[22px] flex flex-nowrap items-center justify-between gap-[8px] lg:gap-[12px]"
                  style={{ background: "linear-gradient(135deg, #00A4A4 0%, #007a7a 100%)" }}
                >
                  <div className="flex min-w-0 flex-nowrap items-center gap-[12px]">
                    <div className="w-[8px] h-[8px] shrink-0 rounded-full bg-white/60" aria-hidden="true" />
                    <span
                      className="font-['DM_Sans'] font-bold text-white whitespace-nowrap"
                      style={{ fontSize: "15px", letterSpacing: "-0.3px" }}
                    >
                      I Know What I Need
                    </span>
                  </div>
                  <span
                    className="font-['DM_Sans'] font-normal text-white/60 shrink-0 whitespace-nowrap text-[12px] lg:text-[13px]"
                    style={{ letterSpacing: "-0.2px" }}
                  >
                    Resolution Programs
                  </span>
                </div>

                <div className="divide-y divide-slate-100">
                  {SERVICES.map((svc, idx) => {
                    const Icon = svc.icon;
                    return (
                      <motion.div
                        key={svc.name}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.06 }}
                      >
                        <Link
                          to={svc.href}
                          className="flex items-start gap-[16px] px-[28px] py-[20px] group hover:bg-[#f9fafb] transition-colors duration-200"
                        >
                          <div
                            className="w-[40px] h-[40px] rounded-[10px] flex items-center justify-center shrink-0 transition-colors duration-200 group-hover:bg-[#00A4A4]"
                            style={{ backgroundColor: "rgba(0,164,164,0.08)" }}
                            aria-hidden="true"
                          >
                            <Icon
                              className="transition-colors duration-200 group-hover:text-white"
                              style={{ width: "18px", height: "18px", color: "#00A4A4" }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p
                              className="font-['DM_Sans'] font-bold text-[#0f172a] mb-[3px] group-hover:text-[#00A4A4] transition-colors duration-200"
                              style={{ fontSize: "15px", letterSpacing: "-0.3px" }}
                            >
                              {svc.name}
                            </p>
                            <p
                              className="font-['DM_Sans'] font-normal text-[#94a3b8] leading-[1.5]"
                              style={{ fontSize: "13px" }}
                            >
                              {svc.desc}
                            </p>
                          </div>
                          <ArrowRight
                            className="shrink-0 mt-[3px] text-[#cbd5e1] group-hover:text-[#00A4A4] transition-colors duration-200"
                            style={{ width: "16px", height: "16px" }}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* RIGHT: Tax Problems */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-[24px] overflow-hidden"
                style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.05)" }}
              >
                {/* Column header */}
                <div
                  className="px-[16px] sm:px-[28px] py-[22px] flex flex-nowrap items-center justify-between gap-[8px] lg:gap-[12px]"
                  style={{ backgroundColor: "#0f172a" }}
                >
                  <div className="flex min-w-0 flex-nowrap items-center gap-[12px]">
                    <div className="w-[8px] h-[8px] shrink-0 rounded-full bg-[#00A4A4]/60" aria-hidden="true" />
                    <span
                      className="font-['DM_Sans'] font-bold text-white whitespace-nowrap"
                      style={{ fontSize: "15px", letterSpacing: "-0.3px" }}
                    >
                      I Have a Tax Problem
                    </span>
                  </div>
                  <span
                    className="font-['DM_Sans'] font-normal text-white/40 shrink-0 whitespace-nowrap text-[12px] lg:text-[13px]"
                    style={{ letterSpacing: "-0.2px" }}
                  >
                    Find Your Solution
                  </span>
                </div>

                <div className="divide-y divide-slate-100">
                  {PROBLEMS.map((prob, idx) => {
                    const Icon = prob.icon;
                    return (
                      <motion.div
                        key={prob.name}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.06 + 0.1 }}
                      >
                        <Link
                          to={prob.href}
                          className="flex items-start gap-[16px] px-[28px] py-[20px] group hover:bg-[#f9fafb] transition-colors duration-200"
                        >
                          <div
                            className="w-[40px] h-[40px] rounded-[10px] flex items-center justify-center shrink-0 transition-colors duration-200"
                            style={{ backgroundColor: "rgba(15,23,42,0.06)" }}
                            aria-hidden="true"
                          >
                            <Icon
                              className="text-[#475569] group-hover:text-[#00A4A4] transition-colors duration-200"
                              style={{ width: "18px", height: "18px" }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p
                              className="font-['DM_Sans'] font-bold text-[#0f172a] mb-[3px] group-hover:text-[#00A4A4] transition-colors duration-200"
                              style={{ fontSize: "15px", letterSpacing: "-0.3px" }}
                            >
                              {prob.name}
                            </p>
                            <p
                              className="font-['DM_Sans'] font-normal text-[#94a3b8] leading-[1.5]"
                              style={{ fontSize: "13px" }}
                            >
                              {prob.desc}
                            </p>
                          </div>
                          <ArrowRight
                            className="shrink-0 mt-[3px] text-[#cbd5e1] group-hover:text-[#00A4A4] transition-colors duration-200"
                            style={{ width: "16px", height: "16px" }}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── 03. Who We Help ──────────────────────────────────────────────── */}
        <section className="py-[64px] lg:py-[120px] bg-white" aria-label="Who we help">
          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px]">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-[52px]"
            >
              <div className="flex items-center gap-[10px] mb-[20px]">
                <div className="bg-[#00A4A4] h-px w-[35px]" />
                <span
                  className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                  style={{ fontSize: "14px", letterSpacing: "0.05em" }}
                >
                  Our Clients
                </span>
              </div>
              <h2
                className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.08]"
                style={{ fontSize: "clamp(28px, 3.5vw, 48px)", letterSpacing: "-1.5px" }}
              >
                We Help People Like You
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
              {PERSONAS.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.type}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="rounded-[20px] p-[28px] flex flex-col gap-[20px]"
                    style={{
                      backgroundColor: "#f9fafb",
                      border: "1px solid rgba(0,0,0,0.05)",
                    }}
                  >
                    <div
                      className="w-[48px] h-[48px] rounded-[13px] flex items-center justify-center"
                      style={{ backgroundColor: "rgba(0,164,164,0.09)", border: "1px solid rgba(0,164,164,0.15)" }}
                      aria-hidden="true"
                    >
                      <Icon style={{ width: "20px", height: "20px", color: "#00A4A4" }} />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                      <h3
                        className="font-['DM_Sans'] font-bold text-[#0f172a]"
                        style={{ fontSize: "17px", letterSpacing: "-0.4px" }}
                      >
                        {p.type}
                      </h3>
                      <p
                        className="font-['DM_Sans'] font-normal text-[#64748b] leading-[1.6]"
                        style={{ fontSize: "13px" }}
                      >
                        <span className="font-medium text-[#475569]">The problem: </span>
                        {p.problem}
                      </p>
                      <p
                        className="font-['DM_Sans'] font-normal text-[#00A4A4] leading-[1.6]"
                        style={{ fontSize: "13px" }}
                      >
                        <span className="font-semibold">How we help: </span>
                        {p.help}
                      </p>
                    </div>
                    <Link
                      to="/contact"
                      className="mt-auto inline-flex items-center gap-[6px] font-['DM_Sans'] font-semibold text-[#00A4A4] hover:text-[#007a7a] transition-colors"
                      style={{ fontSize: "13px" }}
                    >
                      Get Help Now
                      <ArrowRight style={{ width: "13px", height: "13px" }} />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 04. Process Overview ─────────────────────────────────────────── */}
        <section className="py-[64px] lg:py-[120px] relative overflow-hidden" style={{ backgroundColor: "#f4f7f6" }} aria-label="Our process">
          {/* Background grid lines */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgba(0,164,164,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,164,164,0.06) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-[1330px] mx-auto px-[25px] lg:px-[70px]">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-[72px] lg:mb-[80px]"
            >
              <div className="flex items-center gap-[10px] mb-[20px]">
                <div className="bg-[#00A4A4] h-px w-[35px]" />
                <span
                  className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                  style={{ fontSize: "14px", letterSpacing: "0.05em" }}
                >
                  How It Works
                </span>
              </div>
              <h2
                className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.08]"
                style={{ fontSize: "clamp(28px, 3.5vw, 48px)", letterSpacing: "-1.5px" }}
              >
                From Call to Resolution — Step by Step
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
              {PROCESS_STEPS.map((step, idx) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className="relative p-[36px] lg:p-[40px] flex flex-col gap-[20px]"
                  style={{
                    backgroundColor: "white",
                    border: "1px solid rgba(0,164,164,0.12)",
                    borderRadius: "20px",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                  }}
                >
                  {/* Step number */}
                  <div className="flex items-start gap-[16px]">
                    <span
                      className="font-['DM_Sans'] font-bold text-[#00A4A4] leading-none"
                      style={{ fontSize: "clamp(40px, 5vw, 56px)", letterSpacing: "-3px", lineHeight: "0.9" }}
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>
                    <div className="pt-[6px]">
                      <h3
                        className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.2]"
                        style={{ fontSize: "18px", letterSpacing: "-0.4px" }}
                      >
                        {step.title}
                      </h3>
                      <span
                        className="font-['DM_Sans'] font-normal text-[#00A4A4]"
                        style={{ fontSize: "12px" }}
                      >
                        {step.duration}
                      </span>
                    </div>
                  </div>

                  <p
                    className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.7]"
                    style={{ fontSize: "14px", letterSpacing: "-0.1px" }}
                  >
                    {step.body}
                  </p>

                  <ul className="flex flex-col gap-[8px]">
                    {step.items.map((item) => (
                      <li key={item} className="flex items-center gap-[10px]">
                        <CheckCircle className="w-[14px] h-[14px] text-[#00A4A4] shrink-0" aria-hidden="true" />
                        <span
                          className="font-['DM_Sans'] font-normal text-[#64748b]"
                          style={{ fontSize: "13px" }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Connector arrow — desktop only */}
                  {idx < PROCESS_STEPS.length - 1 && (
                    <div
                      className="absolute top-[50%] -right-[14px] hidden lg:flex items-center justify-center w-[28px] h-[28px] rounded-full z-10"
                      style={{
                        backgroundColor: "white",
                        border: "2px solid rgba(0,164,164,0.4)",
                        transform: "translateY(-50%)",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      }}
                      aria-hidden="true"
                    >
                      <ArrowRight style={{ width: "12px", height: "12px", color: "#00A4A4" }} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* ── 05. Case Results ──────────────────────────────────────────────── */}
        <CaseResultSpotlight />

        {/* ── 06. FAQ ───────────────────────────────────────────────────────── */}
        <section className="py-[64px] lg:py-[120px] bg-white" aria-label="Frequently asked questions">
          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px]">

            <div className="flex flex-col lg:flex-row gap-[64px] lg:gap-[100px]">

              {/* Left: heading + CTA */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:w-[360px] lg:shrink-0 flex flex-col gap-[28px]"
              >
                <div>
                  <div className="flex items-center gap-[10px] mb-[20px]">
                    <div className="bg-[#00A4A4] h-px w-[35px]" />
                    <span
                      className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                      style={{ fontSize: "14px", letterSpacing: "0.05em" }}
                    >
                      FAQ
                    </span>
                  </div>
                  <h2
                    className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.08]"
                    style={{ fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-1.5px" }}
                  >
                    Questions We Hear Every Day
                  </h2>
                </div>
                <p
                  className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.7]"
                  style={{ fontSize: "15px", letterSpacing: "-0.2px" }}
                >
                  Not finding your answer? Our licensed team will walk you through your specific situation — for free.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-[10px] text-white font-['DM_Sans'] font-bold rounded-full transition-all duration-300 hover:scale-[1.02] self-start"
                  style={{
                    fontSize: "14px",
                    padding: "14px 28px",
                    background: "linear-gradient(135deg, #00A4A4 0%, #007a7a 100%)",
                    boxShadow: "0 8px 24px rgba(0,164,164,0.28)",
                  }}
                >
                  Ask a Question
                  <ArrowRight style={{ width: "14px", height: "14px" }} />
                </Link>
              </motion.div>

              {/* Right: accordion */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex-1"
              >
                {FAQS.map((faq) => (
                  <FAQItem
                    key={faq.id}
                    faq={faq}
                    activeId={faqActive}
                    setActiveId={setFaqActive}
                  />
                ))}
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── 07. Instagram Feed ───────────────────────────────────────────── */}
        <section className="py-[64px] lg:py-[120px] bg-white" aria-label="SympleTax social feed">
          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-[20px] mb-[40px]"
            >
              <div>
                <div className="flex items-center gap-[10px] mb-[16px]">
                  <div className="bg-[#00A4A4] h-px w-[35px]" />
                  <span
                    className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                    style={{ fontSize: "14px", letterSpacing: "0.05em" }}
                  >
                    From Our Feed
                  </span>
                </div>
                <h2
                  className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.08]"
                  style={{ fontSize: "clamp(24px, 3vw, 40px)", letterSpacing: "-1.5px" }}
                >
                  Tax Help, Plain And Simple
                </h2>
              </div>
              <a
                href="https://www.instagram.com/sympletax"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-[8px] font-['DM_Sans'] font-medium text-[#00A4A4] hover:text-[#007a7a] transition-colors shrink-0"
                style={{ fontSize: "15px" }}
              >
                <Instagram className="w-[18px] h-[18px]" />
                Follow @sympletax
              </a>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-[16px]">
              {[feedImg1, feedImg2, feedImg3, feedImg4].map((src, idx) => (
                <motion.a
                  key={idx}
                  href="https://www.instagram.com/sympletax"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group relative rounded-[16px] overflow-hidden block aspect-square"
                  style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
                  aria-label="View on Instagram"
                >
                  <ImageWithFallback
                    src={src}
                    alt="SympleTax social media post"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[#0f172a]/0 group-hover:bg-[#0f172a]/30 transition-all duration-300 flex items-center justify-center">
                    <Instagram className="w-[28px] h-[28px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>


      </main>
      <Footer />
    </div>
  );
}
