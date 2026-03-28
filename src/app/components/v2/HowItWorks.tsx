import { motion } from "motion/react";
import { SearchCheck, ShieldCheck } from "lucide-react";
import { Link } from "react-router";
import vectorPng from "../../../assets/vector.png";

const PHASES = [
  {
    number: "01",
    label: "Phase One",
    title: "Strategic Discovery",
    description:
      "Before we can resolve your tax debt, we need to fully understand your situation. We dig into the details so nothing surprises you — or us — during negotiations.",
    steps: [
      "Pull & analyze your full IRS transcripts",
      "Identify the best resolution path for your case",
      "File Power of Attorney (IRS Form 2848)",
      "Assess financial hardship qualifications",
      "Stop active collections, levies & garnishments",
    ],
    Icon: SearchCheck,
  },
  {
    number: "02",
    label: "Phase Two",
    title: "Resolution",
    description:
      "We take over all IRS communication and negotiate aggressively on your behalf. Our goal is the maximum reduction legally available to you.",
    steps: [
      "Negotiate directly with the IRS on your behalf",
      "Submit Offer in Compromise or Installment Agreement",
      "Resolve penalties, interest, liens & levies",
      "File any missing or unfiled tax returns",
      "Close your case & restore full tax compliance",
    ],
    Icon: ShieldCheck,
  },
];

export function HowItWorks() {
  return (
    <section className="py-[64px] lg:py-[120px] bg-white">
      <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px]">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[40px] lg:mb-[72px]"
        >
          <div className="flex items-center justify-center gap-[10px] mb-[20px]">
            <div className="bg-[#00A4A4] h-px w-[35px]" />
            <span
              className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
              style={{ fontSize: "14px", letterSpacing: "0.05em" }}
            >
              Our Process
            </span>
            <div className="bg-[#00A4A4] h-px w-[35px]" />
          </div>

          <h2
            className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.08] mb-[20px]"
            style={{ fontSize: "clamp(28px, 6.5vw, 58px)", letterSpacing: "-1.5px" }}
          >
            Our Two-Phase Approach
          </h2>

          <p
            className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.65] mx-auto"
            style={{ fontSize: "16px", letterSpacing: "-0.3px", maxWidth: "520px" }}
          >
            Every case follows the same proven two-phase process — built around transparency, speed, and the best possible outcome for you.
          </p>
        </motion.div>

        {/* Two Phase Cards — both teal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] items-stretch">
          {PHASES.map((phase, idx) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative rounded-[24px] overflow-hidden flex flex-col"
              style={{ backgroundColor: "#00A4A4" }}
            >
              {/* Subtle white top accent bar */}
              <div style={{ height: "4px", backgroundColor: "rgba(255,255,255,0.3)" }} />

              {/* Number — absolute extreme right corner, vertically aligned with icon */}
              <span
                className="absolute font-['DM_Sans'] font-bold text-white/20 leading-none pointer-events-none top-[32px] right-[8px] lg:top-[56px] lg:right-[12px]"
                style={{ fontSize: "clamp(52px, 12vw, 80px)", letterSpacing: "-4px", lineHeight: "0.85" }}
                aria-hidden="true"
              >
                {phase.number}
              </span>

              <div className="flex flex-col gap-[24px] p-[28px] lg:p-[52px] lg:gap-[32px] flex-1">

                {/* Icon row */}
                <div className="flex items-center">
                  <div
                    className="flex items-center justify-center rounded-[16px]"
                    style={{
                      width: "56px",
                      height: "56px",
                      backgroundColor: "rgba(255,255,255,0.18)",
                    }}
                    aria-hidden="true"
                  >
                    <phase.Icon className="w-[28px] h-[28px] text-white" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="font-['DM_Sans'] font-bold text-white leading-[1.1]"
                  style={{ fontSize: "clamp(28px, 2.5vw, 38px)", letterSpacing: "-1px" }}
                >
                  {phase.title}
                </h3>

                {/* Description */}
                <p
                  className="font-['DM_Sans'] font-normal text-white/70 leading-[1.65]"
                  style={{ fontSize: "16px", letterSpacing: "-0.3px" }}
                >
                  {phase.description}
                </p>

                {/* Steps */}
                <ul className="flex flex-col gap-[14px] flex-1">
                  {phase.steps.map((step) => (
                    <li key={step} className="flex items-start gap-[14px]">
                      <div
                        className="shrink-0 rounded-full flex items-center justify-center mt-[2px]"
                        style={{ width: "20px", height: "20px", backgroundColor: "rgba(255,255,255,0.2)", minWidth: "20px" }}
                        aria-hidden="true"
                      >
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span
                        className="font-['DM_Sans'] font-normal text-white/85 leading-[1.55]"
                        style={{ fontSize: "15px", letterSpacing: "-0.2px" }}
                      >
                        {step}
                      </span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA bar — white card with curved teal divider line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-[48px] relative overflow-hidden rounded-[20px] bg-white flex flex-col lg:flex-row items-center lg:items-start justify-between gap-[32px] text-center lg:text-left"
          style={{
            padding: "32px 48px",
            boxShadow: "0 4px 32px rgba(0,0,0,0.07)",
            border: "1px solid #e8edf2",
          }}
        >
          {/* Left: text */}
          <div className="flex flex-col gap-[6px] flex-1">
            <span
              className="font-['DM_Sans'] font-bold text-[#0f172a] text-[23px] lg:text-[20px]"
              style={{ letterSpacing: "-0.5px" }}
            >
              Ready to resolve your tax situation?
            </span>
            <span
              className="font-['DM_Sans'] font-normal text-[#64748b]"
              style={{ fontSize: "15px" }}
            >
              Free consultation — no obligation, no upfront fees.
            </span>
          </div>

          {/* Center: curved teal divider */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full pointer-events-none" style={{ transform: "translateX(-50%)" }} aria-hidden="true">
            <img
              src={vectorPng}
              alt=""
              className="h-full w-auto object-contain"
            />
          </div>

          {/* Right: buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-[16px] shrink-0">
            <Link
              to="https://ti.sympletax.com/free-consultation"
              className="inline-flex items-center justify-center bg-[#00A4A4] hover:bg-[#007a7a] text-white font-['DM_Sans'] font-bold rounded-full hover:scale-[1.02] transition-all duration-300 whitespace-nowrap"
              style={{ fontSize: "15px", padding: "14px 28px" }}
            >
              Get a Free Consultation
            </Link>
            <Link
              to="/services"
              className="font-['DM_Sans'] font-medium text-[#0f172a] hover:text-[#00A4A4] transition-colors whitespace-nowrap flex items-center gap-[5px]"
              style={{ fontSize: "15px" }}
            >
              View All Services →
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
