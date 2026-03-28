import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router";
import { Navbar } from "./components/v2/Navbar";
import { Footer } from "./components/v2/Footer";
import { Testimonials } from "./components/v2/Testimonials";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { useEffect, useRef } from "react";
import { Shield, TrendingDown, Users, Eye, CheckCircle, Star, Instagram } from "lucide-react";

import ariFounderPhoto from "../assets/ari-founder.jpg";
import feedImg1 from "../../650321405_122097914025122800_4577503060609393561_n.jpg";
import feedImg2 from "../../651173716_122102903487122800_4091566060201860687_n.jpg";
import feedImg3 from "../../652943268_122103584361122800_6297573296820253944_n.jpg";
import feedImg4 from "../../653106919_122102903481122800_5641194311721553293_n.jpg";
import feedImg5 from "../../654349707_122104586823122800_5314580373899672598_n.jpg";
import feedImg6 from "../../655591656_122104586829122800_5873864143193721839_n.jpg";
import feedImg7 from "../../649497464_122096904597122800_6185958289926593262_n.jpg";
import portraitRobert from "../assets/portrait_robert_new.jpg";
import portraitJames from "../assets/portrait_james_new.jpg";
import portraitRamon from "../assets/portrait_ramon_new.jpg";
import portraitElena from "../assets/portrait_elena_new.jpg";
import portraitSandra from "../assets/portrait_sandra_new.jpg";
import portraitNicole from "../assets/portrait_nicole_new.jpg";
import familyPhoto from "../assets/family-double-piggyback-small.jpg";
import seniorsPhoto from "../assets/depositphotos_12485569-Happy-senior-friends-having-breakfast.webp";

// ─── Data ────────────────────────────────────────────────────────────────────

const VALUES = [
  {
    icon: Eye,
    title: "Transparency",
    body: "Flat-fee pricing from day one. You know exactly what you're paying before we start — no hidden costs, no bait-and-switch, no upsell.",
  },
  {
    icon: Star,
    title: "Experience",
    body: "Every case is handled by a licensed CPA or former IRS professional — not a salesperson. Direct access to the expert working your file.",
  },
  {
    icon: TrendingDown,
    title: "Results",
    body: "We negotiate aggressively to get the maximum reduction legally available. Our track record: clients regularly settle for pennies on the dollar.",
  },
  {
    icon: Users,
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
    name: "Ari AlaEddin",
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


const CAROUSEL_IMAGES = [
  portraitRobert, portraitJames, portraitRamon,
  portraitElena, portraitSandra, portraitNicole,
];

const CARD_COLORS = ["#e4f8f8", "#eef2ff", "#fdf8ee"];
const CARD_BORDER = ["rgba(0,164,164,0.15)", "rgba(99,102,241,0.12)", "rgba(245,158,11,0.15)"];

const GUARANTEE_POINTS = [
  "Enrolled in a resolution program or your money back",
  "We file all required returns — if we make an error, we fix it free",
  "All IRS communication handled exclusively by us",
  "You'll never be surprised by a hidden fee",
];

// ─── ProcessCard ──────────────────────────────────────────────────────────────

function ProcessCard({ step, colorIdx }: { step: (typeof PROCESS_STEPS)[0]; colorIdx: number }) {
  return (
    <div
      className="w-full h-full rounded-[24px] p-[28px] lg:p-[40px] flex flex-col lg:flex-row gap-[24px] lg:gap-[40px]"
      style={{
        backgroundColor: CARD_COLORS[colorIdx],
        border: `1px solid ${CARD_BORDER[colorIdx]}`,
        boxShadow: "0 16px 48px rgba(0,0,0,0.09)",
      }}
    >
      {/* Step number */}
      <div className="shrink-0 flex flex-row lg:flex-col gap-[12px] items-center lg:items-start">
        <div
          className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center font-['DM_Sans'] font-bold text-white"
          style={{
            background: "linear-gradient(135deg, #00A4A4 0%, #007a7a 100%)",
            boxShadow: "0 8px 20px rgba(0,164,164,0.35)",
            fontSize: "20px",
            letterSpacing: "-0.5px",
          }}
          aria-label={`Step ${step.number}`}
        >
          {step.number}
        </div>
        <span className="font-['DM_Sans'] font-medium text-[#00A4A4] lg:hidden" style={{ fontSize: "13px" }}>
          {step.duration}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col gap-[12px]">
        <div>
          <h3
            className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.2]"
            style={{ fontSize: "clamp(18px, 2vw, 22px)", letterSpacing: "-0.5px" }}
          >
            {step.title}
          </h3>
          <span className="font-['DM_Sans'] font-medium text-[#00A4A4] hidden lg:block" style={{ fontSize: "13px" }}>
            {step.duration}
          </span>
        </div>
        <p
          className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.7]"
          style={{ fontSize: "15px", letterSpacing: "-0.2px" }}
        >
          {step.body}
        </p>
        <ul className="flex flex-col gap-[8px]">
          {step.items.map((item) => (
            <li key={item} className="flex items-center gap-[10px]">
              <CheckCircle className="w-[14px] h-[14px] text-[#00A4A4] shrink-0" aria-hidden="true" />
              <span className="font-['DM_Sans'] font-normal text-[#475569]" style={{ fontSize: "13px", letterSpacing: "-0.1px" }}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right CTA */}
      <div className="shrink-0 flex flex-row lg:flex-col items-center justify-start lg:justify-center gap-[8px] lg:min-w-[140px]">
        <Link
          to="/contact"
          className="inline-flex items-center gap-[8px] text-white font-['DM_Sans'] font-bold rounded-full transition-all duration-300 hover:scale-[1.02] whitespace-nowrap"
          style={{
            fontSize: "13px",
            padding: "12px 20px",
            background: "linear-gradient(135deg, #00A4A4 0%, #007a7a 100%)",
            boxShadow: "0 8px 20px rgba(0,164,164,0.28)",
          }}
          aria-label={`Get started — ${step.title}`}
        >
          Get Started
        </Link>
        <p className="font-['DM_Sans'] font-normal text-[#94a3b8]" style={{ fontSize: "11px" }}>
          Free · No obligation
        </p>
      </div>
    </div>
  );
}

// ─── ProcessStack ──────────────────────────────────────────────────────────────

function ProcessStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Card 1 gradually shifts up and scales back as later cards stack on top
  const y1 = useTransform(scrollYProgress, [0.2, 0.45, 0.55, 0.8], [0, -22, -22, -44]);
  const scale1 = useTransform(scrollYProgress, [0.2, 0.45, 0.55, 0.8], [1, 0.97, 0.97, 0.94]);

  // Card 2 slides in from bottom, then shifts up when card 3 arrives
  const y2 = useTransform(scrollYProgress, [0.18, 0.45, 0.55, 0.8], [560, 0, 0, -22]);
  const scale2 = useTransform(scrollYProgress, [0.55, 0.8], [1, 0.97]);

  // Card 3 slides in last
  const y3 = useTransform(scrollYProgress, [0.53, 0.8], [560, 0]);

  return (
    <div ref={containerRef} style={{ height: "320vh" }}>
      <div className="sticky top-0 overflow-hidden" style={{ height: "100vh" }}>
        <div className="h-full flex items-center">
          <div className="max-w-[1330px] mx-auto px-[70px] w-full">
            <div className="relative w-full" style={{ height: "clamp(340px, 48vh, 440px)" }}>

              {/* Card 1 */}
              <motion.div
                className="absolute inset-0"
                style={{ y: y1, scale: scale1, zIndex: 1, transformOrigin: "top center" }}
              >
                <ProcessCard step={PROCESS_STEPS[0]} colorIdx={0} />
              </motion.div>

              {/* Card 2 */}
              <motion.div
                className="absolute inset-0"
                style={{ y: y2, scale: scale2, zIndex: 2, transformOrigin: "top center" }}
              >
                <ProcessCard step={PROCESS_STEPS[1]} colorIdx={1} />
              </motion.div>

              {/* Card 3 */}
              <motion.div
                className="absolute inset-0"
                style={{ y: y3, zIndex: 3 }}
              >
                <ProcessCard step={PROCESS_STEPS[2]} colorIdx={2} />
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
          className="relative overflow-hidden bg-white flex flex-col"
          style={{ minHeight: "100svh" }}
          aria-label="About SympleTax"
        >
          {/* Animated floating circles background */}
          <motion.div
            className="absolute pointer-events-none rounded-full"
            style={{
              width: "700px", height: "700px",
              top: "-200px", left: "-180px",
              background: "radial-gradient(circle, rgba(0,164,164,0.07) 0%, transparent 70%)",
            }}
            animate={{ y: [-30, 30, -30], x: [-15, 15, -15] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />
          <motion.div
            className="absolute pointer-events-none rounded-full"
            style={{
              width: "500px", height: "500px",
              top: "60px", right: "-60px",
              background: "radial-gradient(circle, rgba(0,164,164,0.06) 0%, transparent 70%)",
            }}
            animate={{ y: [20, -25, 20], x: [12, -12, 12] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />
          <motion.div
            className="absolute pointer-events-none rounded-full"
            style={{
              width: "380px", height: "380px",
              bottom: "220px", left: "35%",
              background: "radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)",
            }}
            animate={{ y: [-12, 22, -12], x: [-18, 8, -18] }}
            transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />
          <motion.div
            className="absolute pointer-events-none rounded-full"
            style={{
              width: "260px", height: "260px",
              bottom: "260px", right: "15%",
              background: "radial-gradient(circle, rgba(0,164,164,0.08) 0%, transparent 70%)",
            }}
            animate={{ y: [15, -20, 15], x: [-8, 18, -8] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />

          {/* Text content */}
          <div className="flex-1 relative z-10 pt-[120px] lg:pt-[160px]">
            <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px] pb-[48px] lg:pb-[64px]">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-[720px]"
              >
                {/* Eyebrow */}
                <div className="flex items-center gap-[10px] mb-[28px]">
                  <div className="bg-[#00A4A4] h-px w-[35px]" />
                  <span
                    className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                    style={{ fontSize: "14px", letterSpacing: "0.05em" }}
                  >
                    Who We Are
                  </span>
                </div>

                <h1
                  className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.06] mb-[28px]"
                  style={{ fontSize: "clamp(36px, 5.5vw, 72px)", letterSpacing: "-2.5px" }}
                >
                  We're in Your Corner<br />
                  <span className="text-[#00A4A4]">When the IRS Isn't</span>
                </h1>

                <p
                  className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.7] mb-[40px]"
                  style={{ fontSize: "clamp(16px, 1.5vw, 19px)", letterSpacing: "-0.3px", maxWidth: "560px" }}
                >
                  SympleTax was built for one reason — to give everyday people a fighting chance against complex tax problems. No jargon. No fear tactics. Just expert professionals who work for you.
                </p>

                <div className="flex flex-col sm:flex-row gap-[14px]">
                  <Link
                    to="https://ti.sympletax.com/free-consultation"
                    className="inline-flex items-center justify-center text-white font-['DM_Sans'] font-bold rounded-full transition-all duration-300 hover:scale-[1.02] whitespace-nowrap"
                    style={{
                      fontSize: "15px",
                      padding: "16px 32px",
                      background: "linear-gradient(135deg, #00A4A4 0%, #007a7a 100%)",
                      boxShadow: "0 8px 24px rgba(0,164,164,0.3)",
                    }}
                  >
                    Get a Free Consultation
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center font-['DM_Sans'] font-medium text-[#0f172a] hover:text-[#00A4A4] transition-colors whitespace-nowrap rounded-full"
                    style={{ fontSize: "15px", padding: "16px 32px", border: "1.5px solid #e2e8f0" }}
                  >
                    Contact Us →
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Infinite scroll image carousel — stays in viewport at bottom of hero */}
          <div className="relative z-10 overflow-hidden pb-[40px] lg:pb-[56px]">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 65, ease: "linear", repeat: Infinity }}
              className="flex gap-[18px] pl-[18px]"
              style={{ width: "max-content" }}
            >
              {[...CAROUSEL_IMAGES, ...CAROUSEL_IMAGES].map((src, i) => (
                <div
                  key={i}
                  className="shrink-0 rounded-[24px] overflow-hidden"
                  style={{
                    width: "clamp(200px, 17vw, 270px)",
                    height: "clamp(280px, 32vh, 400px)",
                  }}
                >
                  <ImageWithFallback
                    src={src}
                    alt=""
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── 03. Our Story ─────────────────────────────────────────────────── */}
        <section className="py-[64px] lg:py-[120px] bg-white" aria-label="Our story">
          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px]">
            <div className="flex flex-col gap-[48px] lg:flex-row lg:gap-[100px] lg:items-stretch">

              {/* Left: Story photo */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="w-full lg:w-[420px] lg:shrink-0 group"
              >
                <div
                  className="relative rounded-[24px] overflow-hidden h-full"
                  style={{ minHeight: "480px" }}
                >
                  <ImageWithFallback
                    src={familyPhoto}
                    alt="Happy family relieved after resolving their tax debt"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  {/* Subtle dark overlay that lightens on hover */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                    style={{ background: "linear-gradient(180deg, transparent 40%, rgba(15,23,42,0.35) 100%)" }}
                    aria-hidden="true"
                  />
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
                      style={{ fontSize: "14px", letterSpacing: "0.05em" }}
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
        <section className="py-[64px] lg:py-[120px]" style={{ backgroundColor: "#f9fafb" }} aria-label="Why clients choose SympleTax">
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
                  style={{ fontSize: "14px", letterSpacing: "0.05em" }}
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
              {VALUES.map((v, idx) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="bg-white rounded-[20px] p-[32px] lg:p-[36px] flex flex-col gap-[20px]"
                    style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.06)" }}
                  >
                    {/* Icon */}
                    <div
                      className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center"
                      style={{ backgroundColor: "rgba(0,164,164,0.08)", border: "1px solid rgba(0,164,164,0.15)" }}
                      aria-hidden="true"
                    >
                      <Icon style={{ width: "22px", height: "22px", color: "#00A4A4" }} />
                    </div>

                    {/* Text */}
                    <div className="flex flex-col gap-[10px] flex-1">
                      <h3
                        className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.2]"
                        style={{ fontSize: "22px", letterSpacing: "-0.5px" }}
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

                    {/* Learn More */}
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-[6px] font-['DM_Sans'] font-semibold text-[#00A4A4] hover:text-[#007a7a] transition-colors"
                      style={{ fontSize: "15px" }}
                    >
                      Learn More
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* ── Inline CTA strip ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-[24px] bg-white rounded-[20px] px-[32px] lg:px-[48px] py-[32px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[24px] overflow-hidden relative"
              style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.06)" }}
            >
              {/* Decorative teal arc */}
              <svg
                className="absolute right-[160px] bottom-[-20px] pointer-events-none hidden lg:block"
                width="160" height="100" viewBox="0 0 160 100" fill="none"
                aria-hidden="true"
              >
                <path d="M0 80 Q80 0 160 60" stroke="#00A4A4" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.25" />
              </svg>

              <div className="flex flex-col gap-[6px]">
                <p
                  className="font-['DM_Sans'] font-bold text-[#0f172a]"
                  style={{ fontSize: "22px", letterSpacing: "-0.5px" }}
                >
                  Ready to resolve your tax situation?
                </p>
                <p
                  className="font-['DM_Sans'] font-normal text-[#475569]"
                  style={{ fontSize: "15px" }}
                >
                  Free consultation — no obligation, no upfront fees.
                </p>
              </div>

              <div className="flex items-center gap-[16px] shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-[8px] text-white font-['DM_Sans'] font-bold rounded-full transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    fontSize: "15px",
                    padding: "14px 28px",
                    background: "linear-gradient(135deg, #00A4A4 0%, #007a7a 100%)",
                    boxShadow: "0 8px 24px rgba(0,164,164,0.3)",
                  }}
                >
                  Get Free Consultation
                </Link>
                <Link
                  to="/services"
                  className="font-['DM_Sans'] font-medium text-[#0f172a] hover:text-[#00A4A4] transition-colors inline-flex items-center gap-[6px]"
                  style={{ fontSize: "15px" }}
                >
                  View All Services
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </motion.div>

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

            <div className="flex flex-col gap-[16px]">
              {PROCESS_STEPS.map((step, idx) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className="flex flex-col lg:flex-row gap-[24px] lg:gap-[60px] py-[40px] px-[32px] lg:py-[48px] lg:px-[40px] rounded-[20px]"
                  style={{ border: "1px solid #e2e8f0", backgroundColor: "#ffffff" }}
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
        <section className="py-[64px] lg:py-[120px]" style={{ backgroundColor: "#f9fafb" }} aria-label="Our team">
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
                  style={{ fontSize: "14px", letterSpacing: "0.05em" }}
                >
                  Our Team
                </span>
              </div>
              <h2
                className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.08]"
                style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-1.5px" }}
              >
                The People Behind Your Resolution
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[28px]">
              {TEAM.map((member, idx) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className="rounded-[24px] overflow-hidden relative"
                  style={{
                    height: "clamp(380px, 50vw, 480px)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                  }}
                >
                  {/* Photo / gradient background */}
                  {idx === 0 ? (
                    <ImageWithFallback
                      src={ariFounderPhoto}
                      alt="Ari AlaEddin, Founder of SympleTax"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                  ) : (
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" }}
                    >
                      <span
                        className="font-['DM_Sans'] font-bold text-white/20 select-none"
                        style={{ fontSize: "clamp(80px, 15vw, 140px)", letterSpacing: "-4px" }}
                        aria-hidden="true"
                      >
                        {member.initials}
                      </span>
                    </div>
                  )}

                  {/* Bottom frosted overlay */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-[28px] lg:p-[32px]"
                    style={{
                      background: "linear-gradient(transparent 0%, rgba(15,23,42,0.85) 35%, rgba(15,23,42,0.97) 100%)",
                    }}
                  >
                    <h3
                      className="font-['DM_Sans'] font-bold text-white leading-[1.2] mb-[4px]"
                      style={{ fontSize: "clamp(18px, 2.5vw, 22px)", letterSpacing: "-0.5px" }}
                    >
                      {member.name}
                    </h3>
                    <p
                      className="font-['DM_Sans'] font-medium text-[#00A4A4] mb-[10px]"
                      style={{ fontSize: "14px" }}
                    >
                      {member.title}
                    </p>
                    <p
                      className="font-['DM_Sans'] font-normal text-white/65 leading-[1.6]"
                      style={{ fontSize: "14px", letterSpacing: "-0.1px" }}
                    >
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-[48px] text-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-[10px] bg-[#00A4A4] hover:bg-[#007a7a] text-white font-['DM_Sans'] font-bold rounded-full transition-all duration-300 hover:scale-[1.02] shadow-[0_8px_24px_rgba(0,164,164,0.3)]"
                style={{ fontSize: "15px", padding: "15px 36px" }}
                aria-label="Work with the SympleTax team"
              >
                Work With Our Team
              </Link>
            </motion.div>

          </div>
        </section>

        {/* ── 06. Client Testimonials ───────────────────────────────────────── */}
        <Testimonials />

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
                      style={{ fontSize: "14px", letterSpacing: "0.05em" }}
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

                <ul className="flex flex-col">
                  {GUARANTEE_POINTS.map((point, idx) => (
                    <li
                      key={point}
                      className="flex items-start gap-[20px] py-[18px]"
                      style={{ borderBottom: idx < GUARANTEE_POINTS.length - 1 ? "1px solid #e8edf2" : "none" }}
                    >
                      <span
                        className="font-['DM_Sans'] font-bold text-[#00A4A4] shrink-0 leading-none"
                        style={{ fontSize: "13px", letterSpacing: "0.04em", paddingTop: "3px", minWidth: "24px" }}
                        aria-hidden="true"
                      >
                        0{idx + 1}
                      </span>
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

              {/* Right: image + CTA card */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="w-full lg:w-[420px] lg:shrink-0"
              >
                <div
                  className="rounded-[24px] overflow-hidden relative flex flex-col justify-between"
                  style={{ minHeight: "420px", boxShadow: "0 12px 48px rgba(0,0,0,0.12)" }}
                >
                  {/* Background image */}
                  <ImageWithFallback
                    src={seniorsPhoto}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    aria-hidden="true"
                  />

                  {/* Teal overlay — reduced opacity so image shows through */}
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(160deg, rgba(0,164,164,0.52) 0%, rgba(0,80,80,0.72) 100%)" }}
                    aria-hidden="true"
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col justify-between h-full p-[36px] gap-[32px]" style={{ minHeight: "420px" }}>
                    <div className="flex flex-col gap-[16px]">
                      <span
                        className="font-['DM_Sans'] font-medium uppercase text-white/70"
                        style={{ fontSize: "12px", letterSpacing: "0.1em" }}
                      >
                        The SympleTax Promise
                      </span>
                      <h3
                        className="font-['DM_Sans'] font-bold text-white leading-[1.1]"
                        style={{ fontSize: "clamp(26px, 3vw, 36px)", letterSpacing: "-1px" }}
                      >
                        Your Resolution.<br />Our Responsibility.
                      </h3>
                      <p
                        className="font-['DM_Sans'] font-normal text-white/75 leading-[1.6]"
                        style={{ fontSize: "14px" }}
                      >
                        We don't just file paperwork — we stay in your corner until your case is closed and your life moves forward.
                      </p>
                    </div>

                    <Link
                      to="https://ti.sympletax.com/free-consultation"
                      className="inline-flex items-center justify-center bg-white font-['DM_Sans'] font-bold rounded-full hover:scale-[1.02] transition-all duration-200 self-start"
                      style={{ fontSize: "14px", padding: "13px 26px", color: "#00A4A4" }}
                    >
                      Start Free Consultation
                    </Link>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── 07. Social Feed ───────────────────────────────────────────────── */}
        <section className="py-[64px] lg:py-[120px] bg-white" aria-label="SympleTax social feed">
          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-[24px] mb-[40px]"
            >
              <div>
                <div className="flex items-center gap-[10px] mb-[16px]">
                  <div className="bg-[#00A4A4] h-px w-[35px]" />
                  <span className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]" style={{ fontSize: "14px", letterSpacing: "0.05em" }}>
                    From Our Feed
                  </span>
                </div>
                <h2
                  className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.08]"
                  style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-1.5px" }}
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
              {[feedImg1, feedImg2, feedImg3, feedImg4, feedImg5, feedImg6, feedImg7].slice(0, 4).map((src, idx) => (
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
