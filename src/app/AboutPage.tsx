import { motion } from "motion/react";
import { Link } from "react-router";
import { Navbar } from "./components/v2/Navbar";
import { Footer } from "./components/v2/Footer";
import { useEffect } from "react";
import { Shield, TrendingDown, Users, Eye, CheckCircle, Star } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const VALUES = [
  {
    icon: Eye,
    color: "#00A4A4",
    title: "Transparency",
    body: "Flat-fee pricing from day one. You know exactly what you're paying before we start — no hidden costs, no bait-and-switch, no upsell.",
  },
  {
    icon: Star,
    color: "#f59e0b",
    title: "Experience",
    body: "Every case is handled by a licensed CPA or former IRS professional — not a salesperson. Direct access to the expert working your file.",
  },
  {
    icon: TrendingDown,
    color: "#10b981",
    title: "Results",
    body: "We negotiate aggressively to get the maximum reduction legally available. Our track record: clients regularly settle for pennies on the dollar.",
  },
  {
    icon: Users,
    color: "#8b5cf6",
    title: "No Judgment",
    body: "Tax debt happens to good people. We don't lecture — we listen, investigate, and get to work. Your past doesn't define what we can achieve together.",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Free Consultation",
    duration: "Within 24 hours",
    body: "A licensed professional reviews your IRS account, outstanding balances, and the collection actions against you — then explains your options clearly, at no cost.",
    items: ["IRS account review", "Collection action assessment", "Clear explanation of options"],
  },
  {
    number: "02",
    title: "Investigation & Strategy",
    duration: "3–5 business days",
    body: "We pull your full IRS transcripts, file Power of Attorney (Form 2848), and stop active collections. Our team builds a complete picture and selects the optimal resolution path.",
    items: ["Full IRS transcript pull", "Power of Attorney filed", "Collections stopped immediately", "Resolution strategy selected"],
  },
  {
    number: "03",
    title: "Negotiation & Resolution",
    duration: "2–12 months",
    body: "We take over all IRS communication and negotiate the best possible outcome — whether that's an Offer in Compromise, Installment Agreement, Penalty Abatement, or CNC status.",
    items: ["All IRS communication handled", "Aggressive negotiation on your behalf", "Filing of missing returns if needed", "Full case closure"],
  },
];

const TEAM = [
  {
    name: "Ari Ehrenberg",
    title: "Founder & Principal",
    bio: "Ari founded SympleTax after watching clients get overcharged by large tax relief firms that prioritized revenue over results. His mission: make expert IRS representation accessible and honest.",
    credential: "Licensed Tax Professional",
    initials: "AE",
    bg: "#00A4A4",
  },
  {
    name: "Case Management Team",
    title: "Licensed CPAs & Tax Professionals",
    bio: "Every SympleTax case is assigned to a licensed professional — never a salesperson. Our team has collective experience across hundreds of resolved IRS cases.",
    credential: "Licensed CPAs · Former IRS Experience",
    initials: "ST",
    bg: "#0f172a",
  },
];

const TESTIMONIALS = [
  {
    quote: "SympleTax stopped my wage garnishment within 48 hours. I finally had my paycheck back and a real plan to move forward. Their team had my absolute best interests at heart.",
    name: "Michael R.",
    location: "Irvine, CA",
    tag: "Wage Garnishment Stopped",
  },
  {
    quote: "I owed over $150,000 in back taxes and thought my life was over. SympleTax settled it for just $4,500. Their expertise through the IRS process was unlike anything I'd seen.",
    name: "Leslie C.",
    location: "Austin, TX",
    tag: "$150K Settled for $4,500",
  },
  {
    quote: "After three terrifying IRS notices, I was paralyzed with fear. SympleTax resolved everything in six months. I never had to speak to the IRS once.",
    name: "Sarah T.",
    location: "Miami, FL",
    tag: "Full IRS Resolution",
  },
];

const GUARANTEE_POINTS = [
  "Enrolled in a resolution program or your money back",
  "We file all required returns — if we make an error, we fix it free",
  "All IRS communication handled exclusively by us",
  "You'll never be surprised by a hidden fee",
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function AboutPage() {
  useEffect(() => {
    document.title = "About SympleTax | Tax Relief Experts";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Meet the team behind SympleTax — licensed tax professionals helping everyday people resolve IRS debt.");
  }, []);

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

        {/* ── 01. Page Hero ─────────────────────────────────────────────────── */}
        <section
          className="pt-[120px] lg:pt-[160px] pb-[64px] lg:pb-[100px] relative overflow-hidden"
          style={{ backgroundColor: "#0f172a" }}
          aria-label="About SympleTax"
        >
          {/* Subtle teal radial glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              right: "0",
              top: "0",
              width: "600px",
              height: "600px",
              background: "radial-gradient(circle at 80% 20%, rgba(0,164,164,0.15) 0%, transparent 65%)",
            }}
            aria-hidden="true"
          />

          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px] relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-[760px]"
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-[10px] mb-[28px]">
                <div className="bg-[#00A4A4] h-px w-[35px]" />
                <span
                  className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                  style={{ fontSize: "13px", letterSpacing: "0.08em" }}
                >
                  Who We Are
                </span>
              </div>

              <h1
                className="font-['DM_Sans'] font-bold text-white leading-[1.06] mb-[28px]"
                style={{ fontSize: "clamp(36px, 5.5vw, 72px)", letterSpacing: "-2.5px" }}
              >
                We're in Your Corner<br />
                <span className="text-[#00A4A4]">When the IRS Isn't</span>
              </h1>

              <p
                className="font-['DM_Sans'] font-normal text-white/70 leading-[1.7]"
                style={{ fontSize: "clamp(16px, 1.5vw, 19px)", letterSpacing: "-0.3px", maxWidth: "580px" }}
              >
                SympleTax was built for one reason — to give everyday people a fighting chance against complex tax problems. No jargon. No fear tactics. Just expert professionals who work for you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── 02. Stats bar ─────────────────────────────────────────────────── */}
        <section className="py-[48px] lg:py-[64px] bg-[#00A4A4]" aria-label="Our results">
          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px]">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-[32px] lg:gap-[60px]">
              {[
                { value: "500+", label: "Cases Resolved" },
                { value: "99%", label: "Best Result Achieved" },
                { value: "$99", label: "Flat Fee to Start" },
                { value: "48hrs", label: "Average Response Time" },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="flex flex-col gap-[6px]"
                >
                  <span
                    className="font-['DM_Sans'] font-bold text-white leading-none"
                    style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-2px" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="font-['DM_Sans'] font-normal text-white/70"
                    style={{ fontSize: "14px", letterSpacing: "-0.1px" }}
                  >
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 03. Our Story ─────────────────────────────────────────────────── */}
        <section className="py-[64px] lg:py-[120px] bg-white" aria-label="Our story">
          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px]">
            <div className="flex flex-col gap-[48px] lg:flex-row lg:gap-[100px] lg:items-center">

              {/* Left: Founder photo */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="w-full lg:w-[400px] lg:shrink-0"
              >
                <div
                  className="relative rounded-[24px] overflow-hidden"
                  style={{ height: "clamp(280px, 50vw, 480px)", backgroundColor: "#f5f1e8" }}
                >
                  {/* Placeholder founder photo with initials */}
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #00A4A4 0%, #007a7a 100%)" }}
                  >
                    <span
                      className="font-['DM_Sans'] font-bold text-white/30"
                      style={{ fontSize: "120px", letterSpacing: "-4px" }}
                    >
                      AE
                    </span>
                  </div>
                  {/* Credential badge */}
                  <div
                    className="absolute bottom-[20px] left-[20px] right-[20px] bg-white rounded-[14px] px-[20px] py-[14px] flex items-center gap-[12px]"
                    style={{ boxShadow: "0 8px 28px rgba(0,0,0,0.12)" }}
                  >
                    <div className="w-[36px] h-[36px] bg-[#00A4A4] rounded-full flex items-center justify-center shrink-0">
                      <Shield className="w-[16px] h-[16px] text-white" />
                    </div>
                    <div>
                      <p className="font-['DM_Sans'] font-bold text-[#0f172a]" style={{ fontSize: "14px" }}>Ari Ehrenberg</p>
                      <p className="font-['DM_Sans'] font-normal text-[#94a3b8]" style={{ fontSize: "12px" }}>Founder · Licensed Tax Professional</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right: Story text */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="flex flex-col gap-[28px]"
              >
                <div>
                  <div className="flex items-center gap-[10px] mb-[20px]">
                    <div className="bg-[#00A4A4] h-px w-[35px]" />
                    <span
                      className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                      style={{ fontSize: "13px", letterSpacing: "0.08em" }}
                    >
                      Our Story
                    </span>
                  </div>
                  <h2
                    className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.08]"
                    style={{ fontSize: "clamp(28px, 3.5vw, 46px)", letterSpacing: "-1.5px" }}
                  >
                    Built Because The System Was Broken
                  </h2>
                </div>

                <p
                  className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.75]"
                  style={{ fontSize: "16px", letterSpacing: "-0.3px" }}
                >
                  SympleTax started out of frustration. Ari watched friends, family members, and strangers get railroaded by large tax relief mills — companies that charged thousands upfront and then did nothing for months. People in real financial distress were being exploited at their most vulnerable moment.
                </p>

                <p
                  className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.75]"
                  style={{ fontSize: "16px", letterSpacing: "-0.3px" }}
                >
                  The decision was simple: build a firm where licensed professionals handle every case personally, where pricing is flat and transparent, and where the goal is always the best possible outcome for the client — not the firm's revenue.
                </p>

                <p
                  className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.75]"
                  style={{ fontSize: "16px", letterSpacing: "-0.3px" }}
                >
                  Today, SympleTax operates as a division of Insaan Global — serving Americans across the country who are facing IRS debt, aggressive collection actions, and the stress that comes with them. We're a small team with one focus: <strong className="text-[#0f172a]">your resolution.</strong>
                </p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── 04. Values / Why Us ───────────────────────────────────────────── */}
        <section className="py-[64px] lg:py-[120px]" style={{ backgroundColor: "#f5f1e8" }} aria-label="Why clients choose SympleTax">
          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px]">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-[48px] lg:mb-[72px]"
            >
              <div className="flex items-center justify-center gap-[10px] mb-[20px]">
                <div className="bg-[#00A4A4] h-px w-[35px]" />
                <span
                  className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                  style={{ fontSize: "13px", letterSpacing: "0.08em" }}
                >
                  Why SympleTax
                </span>
                <div className="bg-[#00A4A4] h-px w-[35px]" />
              </div>
              <h2
                className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.08]"
                style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-1.5px" }}
              >
                Why Clients Choose SympleTax
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
              {VALUES.map((v, idx) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="bg-white rounded-[20px] p-[32px] lg:p-[40px] flex gap-[24px]"
                    style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.04)" }}
                  >
                    <div
                      className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center shrink-0"
                      style={{ backgroundColor: v.color + "18" }}
                      aria-hidden="true"
                    >
                      <Icon style={{ width: "22px", height: "22px", color: v.color }} />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                      <h3
                        className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.2]"
                        style={{ fontSize: "18px", letterSpacing: "-0.4px" }}
                      >
                        {v.title}
                      </h3>
                      <p
                        className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.65]"
                        style={{ fontSize: "15px", letterSpacing: "-0.2px" }}
                      >
                        {v.body}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ── 04b. Our Process ──────────────────────────────────────────────── */}
        <section className="py-[64px] lg:py-[120px] bg-white" aria-label="How SympleTax resolves your tax debt">
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
                  How It Works
                </span>
              </div>
              <h2
                className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.08]"
                style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-1.5px", maxWidth: "600px" }}
              >
                How SympleTax Resolves Your Tax Debt
              </h2>
            </motion.div>

            <div className="flex flex-col gap-[0px]">
              {PROCESS_STEPS.map((step, idx) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className="flex flex-col lg:flex-row gap-[24px] lg:gap-[60px] py-[40px] lg:py-[48px] border-b border-[#e8e4da]"
                >
                  {/* Step number */}
                  <div className="flex items-start gap-[20px] lg:w-[200px] lg:shrink-0">
                    <span
                      className="font-['DM_Sans'] font-bold text-[#00A4A4] leading-none shrink-0"
                      style={{ fontSize: "clamp(40px, 6vw, 64px)", letterSpacing: "-3px", lineHeight: "0.9" }}
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>
                    <div className="flex flex-col pt-[4px] lg:hidden">
                      <span
                        className="font-['DM_Sans'] font-bold text-[#0f172a]"
                        style={{ fontSize: "18px", letterSpacing: "-0.4px" }}
                      >
                        {step.title}
                      </span>
                      <span
                        className="font-['DM_Sans'] font-normal text-[#00A4A4]"
                        style={{ fontSize: "13px" }}
                      >
                        {step.duration}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col gap-[16px]">
                    <div className="hidden lg:block">
                      <h3
                        className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.2]"
                        style={{ fontSize: "22px", letterSpacing: "-0.5px" }}
                      >
                        {step.title}
                      </h3>
                      <span
                        className="font-['DM_Sans'] font-normal text-[#00A4A4]"
                        style={{ fontSize: "13px" }}
                      >
                        {step.duration}
                      </span>
                    </div>
                    <p
                      className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.7]"
                      style={{ fontSize: "15px", letterSpacing: "-0.2px" }}
                    >
                      {step.body}
                    </p>
                    <ul className="flex flex-col gap-[10px]">
                      {step.items.map((item) => (
                        <li key={item} className="flex items-center gap-[10px]">
                          <CheckCircle className="w-[16px] h-[16px] text-[#00A4A4] shrink-0" aria-hidden="true" />
                          <span
                            className="font-['DM_Sans'] font-normal text-[#475569]"
                            style={{ fontSize: "14px", letterSpacing: "-0.1px" }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* ── 05. Team / Credentials ────────────────────────────────────────── */}
        <section className="py-[64px] lg:py-[120px] bg-[#0f172a]" aria-label="Our team">
          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px]">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-[48px] lg:mb-[64px]"
            >
              <div className="flex items-center gap-[10px] mb-[20px]">
                <div className="bg-[#00A4A4] h-px w-[35px]" />
                <span
                  className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                  style={{ fontSize: "13px", letterSpacing: "0.08em" }}
                >
                  Our Team
                </span>
              </div>
              <h2
                className="font-['DM_Sans'] font-bold text-white leading-[1.08]"
                style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-1.5px" }}
              >
                The People Behind Your Resolution
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] mb-[48px] lg:mb-[64px]">
              {TEAM.map((member, idx) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-[24px] rounded-[20px] p-[28px] lg:p-[36px]"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {/* Avatar */}
                  <div
                    className="w-[60px] h-[60px] rounded-full flex items-center justify-center shrink-0 font-['DM_Sans'] font-bold text-white"
                    style={{ backgroundColor: member.bg, fontSize: "18px" }}
                    aria-hidden="true"
                  >
                    {member.initials}
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <div>
                      <h3
                        className="font-['DM_Sans'] font-bold text-white leading-[1.2]"
                        style={{ fontSize: "18px", letterSpacing: "-0.4px" }}
                      >
                        {member.name}
                      </h3>
                      <p
                        className="font-['DM_Sans'] font-normal text-[#00A4A4]"
                        style={{ fontSize: "13px" }}
                      >
                        {member.title}
                      </p>
                    </div>
                    <p
                      className="font-['DM_Sans'] font-normal text-white/60 leading-[1.65]"
                      style={{ fontSize: "14px", letterSpacing: "-0.1px" }}
                    >
                      {member.bio}
                    </p>
                    <div
                      className="inline-flex items-center gap-[6px] px-[12px] py-[5px] rounded-full mt-[4px] w-fit"
                      style={{ backgroundColor: "rgba(0,164,164,0.15)", border: "1px solid rgba(0,164,164,0.25)" }}
                    >
                      <Shield className="w-[12px] h-[12px] text-[#00A4A4]" aria-hidden="true" />
                      <span className="font-['DM_Sans'] font-medium text-[#00A4A4]" style={{ fontSize: "11px" }}>
                        {member.credential}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Credentials callout */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[20px] p-[28px] lg:p-[40px] flex flex-col lg:flex-row lg:items-center gap-[24px] lg:gap-[48px]"
              style={{ backgroundColor: "rgba(0,164,164,0.08)", border: "1px solid rgba(0,164,164,0.2)" }}
            >
              <p
                className="font-['DM_Sans'] font-normal text-white/70 leading-[1.6] flex-1"
                style={{ fontSize: "14px" }}
              >
                <strong className="text-white">Note:</strong> All SympleTax professionals are licensed CPAs or tax resolution specialists. We do not use salespeople for case management. Team profiles are updated regularly — contact us for current credentials.
              </p>
              <Link
                to="/contact"
                className="shrink-0 inline-flex items-center gap-[10px] bg-[#00A4A4] hover:bg-[#007a7a] text-white font-['DM_Sans'] font-bold rounded-full transition-all duration-300 hover:scale-[1.02]"
                style={{ fontSize: "14px", padding: "13px 28px", whiteSpace: "nowrap" }}
                aria-label="Contact SympleTax"
              >
                Meet Our Team
              </Link>
            </motion.div>

          </div>
        </section>

        {/* ── 06. Testimonials Strip ────────────────────────────────────────── */}
        <section className="py-[64px] lg:py-[120px]" style={{ backgroundColor: "#f5f1e8" }} aria-label="Client testimonials">
          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px]">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-[48px] lg:mb-[64px]"
            >
              <div className="flex items-center justify-center gap-[10px] mb-[20px]">
                <div className="bg-[#00A4A4] h-px w-[35px]" />
                <span
                  className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                  style={{ fontSize: "13px", letterSpacing: "0.08em" }}
                >
                  Client Stories
                </span>
                <div className="bg-[#00A4A4] h-px w-[35px]" />
              </div>
              <h2
                className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.08]"
                style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-1.5px" }}
              >
                People Who Trusted Us With Their Worst Fear
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px]">
              {TESTIMONIALS.map((t, idx) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-[20px] p-[32px] flex flex-col gap-[20px]"
                  style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}
                >
                  {/* Stars */}
                  <div className="flex gap-[4px]" aria-label="5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="#FFB800" aria-hidden="true">
                        <path d="M10 1l2.39 4.84 5.34.78-3.86 3.77.91 5.31L10 13.27l-4.78 2.51.91-5.31L2.27 6.62l5.34-.78L10 1z" />
                      </svg>
                    ))}
                  </div>

                  <p
                    className="font-['DM_Sans'] font-normal text-[#1e293b] leading-[1.7] flex-1"
                    style={{ fontSize: "15px", letterSpacing: "-0.2px" }}
                  >
                    "{t.quote}"
                  </p>

                  {/* Result tag */}
                  <div
                    className="inline-flex items-center gap-[6px] px-[12px] py-[5px] rounded-full w-fit"
                    style={{ backgroundColor: "rgba(0,164,164,0.1)", border: "1px solid rgba(0,164,164,0.2)" }}
                  >
                    <CheckCircle className="w-[12px] h-[12px] text-[#00A4A4]" aria-hidden="true" />
                    <span className="font-['DM_Sans'] font-medium text-[#00A4A4]" style={{ fontSize: "11px" }}>
                      {t.tag}
                    </span>
                  </div>

                  <div>
                    <p className="font-['DM_Sans'] font-bold text-[#0f172a]" style={{ fontSize: "14px" }}>{t.name}</p>
                    <p className="font-['DM_Sans'] font-normal text-[#94a3b8]" style={{ fontSize: "12px" }}>{t.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* ── 06b. Our Guarantee ────────────────────────────────────────────── */}
        <section className="py-[64px] lg:py-[120px] bg-white" aria-label="The SympleTax Guarantee">
          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px]">
            <div className="flex flex-col gap-[48px] lg:flex-row lg:gap-[80px] lg:items-center">

              {/* Left: text */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="flex-1 flex flex-col gap-[28px]"
              >
                <div>
                  <div className="flex items-center gap-[10px] mb-[20px]">
                    <div className="bg-[#00A4A4] h-px w-[35px]" />
                    <span
                      className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                      style={{ fontSize: "13px", letterSpacing: "0.08em" }}
                    >
                      Our Guarantee
                    </span>
                  </div>
                  <h2
                    className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.08]"
                    style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-1.5px" }}
                  >
                    The SympleTax Guarantee
                  </h2>
                </div>

                <p
                  className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.7]"
                  style={{ fontSize: "16px", letterSpacing: "-0.3px" }}
                >
                  We stand behind our work. If we take your case, we commit to seeing it through. Here's exactly what you can expect from us.
                </p>

                <ul className="flex flex-col gap-[16px]">
                  {GUARANTEE_POINTS.map((point) => (
                    <li key={point} className="flex items-start gap-[14px]">
                      <div
                        className="w-[24px] h-[24px] rounded-full bg-[#00A4A4] flex items-center justify-center shrink-0 mt-[1px]"
                        aria-hidden="true"
                      >
                        <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                          <path d="M1 4.5l3 3L10 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span
                        className="font-['DM_Sans'] font-normal text-[#0f172a] leading-[1.6]"
                        style={{ fontSize: "15px", letterSpacing: "-0.2px" }}
                      >
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                <p
                  className="font-['DM_Sans'] font-normal text-[#94a3b8] leading-[1.6] border-t border-[#e8e4da] pt-[20px]"
                  style={{ fontSize: "12px" }}
                >
                  Guarantee terms and conditions apply. Specific coverage details and exclusions are provided in writing before engagement. Contact us for full guarantee documentation.
                </p>

                <div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-[10px] bg-[#00A4A4] hover:bg-[#007a7a] text-white font-['DM_Sans'] font-bold rounded-full hover:scale-[1.02] transition-all duration-300 shadow-[0_8px_24px_rgba(0,164,164,0.3)]"
                    style={{ fontSize: "15px", padding: "15px 36px" }}
                    aria-label="See if you qualify for SympleTax"
                  >
                    See If You Qualify
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </motion.div>

              {/* Right: visual guarantee card */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="w-full lg:w-[400px] lg:shrink-0"
              >
                <div
                  className="rounded-[24px] p-[40px] flex flex-col gap-[24px] text-center"
                  style={{
                    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                    boxShadow: "0 24px 64px rgba(0,0,0,0.2)",
                  }}
                >
                  <div
                    className="w-[72px] h-[72px] rounded-full flex items-center justify-center mx-auto"
                    style={{ backgroundColor: "rgba(0,164,164,0.2)", border: "2px solid rgba(0,164,164,0.4)" }}
                  >
                    <Shield className="w-[32px] h-[32px] text-[#00A4A4]" />
                  </div>
                  <div>
                    <p
                      className="font-['DM_Sans'] font-bold text-white mb-[8px]"
                      style={{ fontSize: "22px", letterSpacing: "-0.5px" }}
                    >
                      Results-Backed Promise
                    </p>
                    <p
                      className="font-['DM_Sans'] font-normal text-white/60 leading-[1.6]"
                      style={{ fontSize: "14px" }}
                    >
                      If we enroll you in a resolution program and don't deliver results, we make it right. Period.
                    </p>
                  </div>
                  <div
                    className="rounded-[14px] p-[20px] text-left"
                    style={{ backgroundColor: "rgba(0,164,164,0.12)", border: "1px solid rgba(0,164,164,0.25)" }}
                  >
                    <p className="font-['DM_Sans'] font-bold text-[#00A4A4] mb-[8px]" style={{ fontSize: "13px" }}>
                      COVERS
                    </p>
                    <ul className="flex flex-col gap-[8px]">
                      {["Resolution program enrollment", "Error-free return preparation", "All IRS correspondence"].map((item) => (
                        <li key={item} className="flex items-center gap-[8px]">
                          <div className="w-[6px] h-[6px] rounded-full bg-[#00A4A4]" aria-hidden="true" />
                          <span className="font-['DM_Sans'] font-normal text-white/70" style={{ fontSize: "13px" }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── 07. Final CTA ─────────────────────────────────────────────────── */}
        <section className="py-[64px] lg:py-[120px] bg-[#00A4A4] relative overflow-hidden" aria-label="Get started">
          {/* Subtle radial overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(255,255,255,0.08) 0%, transparent 60%)" }}
            aria-hidden="true"
          />

          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px] text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-[640px] mx-auto flex flex-col gap-[28px] items-center"
            >
              <h2
                className="font-['DM_Sans'] font-bold text-white leading-[1.08]"
                style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-1.5px" }}
              >
                Ready to Talk to Someone Who Actually Listens?
              </h2>
              <p
                className="font-['DM_Sans'] font-normal text-white/75 leading-[1.65]"
                style={{ fontSize: "17px", letterSpacing: "-0.3px" }}
              >
                Schedule your free consultation. A licensed professional will review your case — no sales pressure, no obligation. Just honest answers.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-[12px] bg-white text-[#00A4A4] font-['DM_Sans'] font-bold rounded-full hover:scale-[1.02] hover:shadow-[0_20px_48px_rgba(0,0,0,0.2)] transition-all duration-300 shadow-[0_8px_28px_rgba(0,0,0,0.15)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#00A4A4]"
                style={{ fontSize: "16px", padding: "18px 48px" }}
                aria-label="Schedule your free consultation"
              >
                Schedule Your Free Consultation
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="#00A4A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <p className="font-['DM_Sans'] font-normal text-white/55" style={{ fontSize: "13px" }}>
                No credit card required · Results may vary · Licensed professionals only
              </p>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
