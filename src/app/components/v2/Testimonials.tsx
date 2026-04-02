import { motion } from "motion/react";
import { Link } from "react-router";

const TESTIMONIALS = [
  {
    quote:
      "SympleTax stopped my wage garnishment within 48 hours. I finally had my paycheck back and a real plan to move forward. Their team had my absolute best interests at heart — calm, confident, and professional every step of the way.",
    name: "Michael R.",
    location: "Irvine, CA",
  },
  {
    quote:
      "I owed over $150,000 in back taxes and thought my life was over. SympleTax settled it for just $4,500. Their expertise and persistence through the IRS process was unlike anything I'd seen from other tax professionals.",
    name: "Leslie C.",
    location: "Austin, TX",
  },
  {
    quote:
      "After three terrifying IRS notices, I was paralyzed with fear. SympleTax took over all communication and resolved everything in six months. I never had to speak to the IRS once — it was like having your very own family fighting for you.",
    name: "Sarah T.",
    location: "Miami, FL",
  },
  {
    quote:
      "They resolved my payroll tax issue when I thought my small business was going under. Taxes had become so complicated and I'd worked with other professionals who just didn't communicate. SympleTax was different — fast, clear, and effective.",
    name: "David L.",
    location: "Chicago, IL",
  },
  {
    quote:
      "I had unfiled returns going back seven years and a lien on my home. Within 60 days they had the lien released and all my returns filed. I can't say enough about how professional and thorough their team was throughout the entire process.",
    name: "Patricia M.",
    location: "Phoenix, AZ",
  },
  {
    quote:
      "SympleTax negotiated an Offer in Compromise that settled $88,000 for under $3,000. I was skeptical at first but their track record speaks for itself. They handled every detail and kept me informed the whole way through.",
    name: "James K.",
    location: "Denver, CO",
  },
];

// Duplicate for infinite loop
const CAROUSEL_ITEMS = [...TESTIMONIALS, ...TESTIMONIALS];

export function Testimonials() {
  return (
    <section className="py-[64px] lg:py-[120px] overflow-hidden" style={{ backgroundColor: "#f5f1e8" }}>
      <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px]">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-[20px] lg:flex-row lg:items-end lg:justify-between lg:gap-[48px] mb-[40px] lg:mb-[64px]"
        >
          <div className="flex flex-col gap-[20px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-[10px]">
              <div className="bg-[#00A4A4] h-px w-[35px]" />
              <span
                className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                style={{ fontSize: "14px", letterSpacing: "0.05em" }}
              >
                Client Stories
              </span>
            </div>

            <h2
              className="font-['DM_Sans'] font-black text-[#0f172a] leading-[1.05]"
              style={{ fontSize: "clamp(28px, 7vw, 58px)", letterSpacing: "-2px" }}
            >
              Real Cases.{" "}
              <span className="text-[#00A4A4]">Real People.</span>
            </h2>
          </div>

          <p
            className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.65] lg:shrink-0 lg:max-w-[360px] lg:text-right"
            style={{ fontSize: "16px", letterSpacing: "-0.3px" }}
          >
            Thousands of Americans have trusted SympleTax to fight the IRS on their behalf — and won.
          </p>
        </motion.div>

      </div>

      {/* Full-bleed carousel */}
      <div className="relative">
        <motion.div
          className="flex gap-[16px] md:gap-[24px] w-max"
          animate={{
            x: [0, -(TESTIMONIALS.length * 340 + TESTIMONIALS.length * 16)],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear",
            },
          }}
          style={{ paddingLeft: "25px" }}
        >
          {CAROUSEL_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="shrink-0"
              style={{ width: "320px" }}
            >
              {/* Card */}
              <div
                className="flex flex-col justify-between bg-white px-[24px] py-[28px] rounded-[20px]"
                style={{ minHeight: "260px", borderRight: "1.5px solid rgba(0,164,164,0.25)" }}
              >
                {/* Stars */}
                <div className="flex items-center gap-[4px] mb-[20px]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="18" height="18" viewBox="0 0 20 20" fill="#FFB800">
                      <path d="M10 1l2.39 4.84 5.34.78-3.86 3.77.91 5.31L10 13.27l-4.78 2.51.91-5.31L2.27 6.62l5.34-.78L10 1z" />
                    </svg>
                  ))}
                </div>

                {/* Quote body */}
                <p
                  className="font-['DM_Sans'] font-normal text-[#1e293b] leading-[1.7] flex-1"
                  style={{ fontSize: "16px", letterSpacing: "-0.2px" }}
                >
                  {item.quote}
                </p>

                {/* Bottom row: name left, big quote mark right */}
                <div className="flex items-end justify-between mt-[32px]">
                  <div className="flex flex-col gap-[4px]">
                    <span
                      className="font-['DM_Sans'] font-bold text-[#00A4A4] uppercase"
                      style={{ fontSize: "16px", letterSpacing: "0.06em" }}
                    >
                      {item.name}
                    </span>
                    <span
                      className="font-['DM_Sans'] font-normal text-[#94a3b8] uppercase"
                      style={{ fontSize: "11px", letterSpacing: "0.06em" }}
                    >
                      {item.location}
                    </span>
                  </div>

                  {/* Large decorative open-quote */}
                  <span
                    className="font-['DM_Sans'] font-black text-[#00A4A4] leading-none select-none"
                    style={{ fontSize: "72px", lineHeight: "0.7", opacity: 0.45 }}
                    aria-hidden="true"
                  >
                    &#x201C;
                  </span>
                </div>
              </div>

            </div>
          ))}
        </motion.div>

        {/* Edge fades */}
        <div
          className="absolute inset-y-0 left-0 pointer-events-none z-[10]"
          style={{
            width: "120px",
            background: "linear-gradient(to right, #f5f1e8, transparent)",
          }}
        />
        <div
          className="absolute inset-y-0 right-0 pointer-events-none z-[10]"
          style={{
            width: "120px",
            background: "linear-gradient(to left, #f5f1e8, transparent)",
          }}
        />
      </div>

      {/* "See All Case Studies" button */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center mt-[56px]"
      >
        <a
          href="https://ti.sympletax.com/free-consultation"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-[10px] border-[1.5px] border-[#00A4A4] text-[#00A4A4] font-['DM_Sans'] font-bold rounded-full hover:bg-[#00A4A4] hover:text-white transition-all duration-300 hover:scale-[1.02]"
          style={{ fontSize: "15px", padding: "14px 36px", letterSpacing: "-0.2px" }}
          aria-label="See all case studies"
        >
          See All Case Studies
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </motion.div>

    </section>
  );
}
