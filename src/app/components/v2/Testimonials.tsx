import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const TESTIMONIALS = [
  {
    image: "https://images.unsplash.com/photo-1666113604293-d34734339acb?auto=format&fit=crop&q=80&w=800",
    quote: "SympleTax stopped my wage garnishment within 48 hours. I finally had my paycheck back and a plan to move forward. They are literal lifesavers.",
    name: "Michael R.",
    location: "Irvine, CA",
    caseTitle: "Wage Garnishment Release",
    savings: "$12,400 recovered",
    amountResolved: "Resolved $12K in debt",
    rating: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1704655295066-681e61ecca6b?auto=format&fit=crop&q=80&w=800",
    quote: "I owed over $150,000 in back taxes. SympleTax settled it for just $4,500. Their team was professional, empathetic, and never stopped fighting for me.",
    name: "Leslie C.",
    location: "Austin, TX",
    caseTitle: "Tax Debt Settlement",
    savings: "$145,500 settled",
    amountResolved: "Resolved $150K in debt",
    rating: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1758518729459-235dcaadc611?auto=format&fit=crop&q=80&w=800",
    quote: "After receiving three scary IRS notices, I was paralyzed with fear. SympleTax took over all communication and resolved everything in six months.",
    name: "Sarah T.",
    location: "Miami, FL",
    caseTitle: "IRS Audit Defense",
    savings: "Full Audit Avoidance",
    amountResolved: "Full Audit Avoidance",
    rating: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
    quote: "They managed my payroll tax issue when I thought my small business was going under. Professional, fast, and highly effective.",
    name: "David L.",
    location: "Chicago, IL",
    caseTitle: "Payroll Tax Relief",
    savings: "$42,000 in penalties removed",
    amountResolved: "Resolved $87K in debt",
    rating: 5,
  },
];

const STATS = [
  { value: "$500M+", label: "In Tax Debt Resolved" },
  { value: "12,000+", label: "Clients Helped Nationwide" },
  { value: "98%", label: "Client Satisfaction Rate" },
  { value: "48 hrs", label: "Average Time to Stop Levies" },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-[4px]">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 20 20" fill="#FFB800">
          <path d="M10 1l2.39 4.84 5.34.78-3.86 3.77.91 5.31L10 13.27l-4.78 2.51.91-5.31L2.27 6.62l5.34-.78L10 1z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  // Duplicate testimonials for continuous carousel
  const carouselItems = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      className="py-[120px] bg-[#0f172a] overflow-hidden relative"
    >
      {/* Large teal circle blob — decorative */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "700px",
          height: "700px",
          background: "#00A4A4",
          opacity: 0.08,
          top: "-180px",
          right: "-180px",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "400px",
          height: "400px",
          background: "#00A4A4",
          opacity: 0.05,
          bottom: "60px",
          left: "-120px",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-[1330px] mx-auto px-[70px] relative z-[1]">

        {/* Section header */}
        <div className="text-center mb-[64px]">
          {/* Pill badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center mb-[24px]"
          >
            <span
              className="font-['Inter'] font-medium uppercase text-white border-[1.5px] border-white/40 rounded-[50px] px-[16px] py-[7px]"
              style={{ fontSize: "12px", letterSpacing: "0.08em" }}
            >
              Client Stories
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-['Outfit'] font-black text-white leading-[1.0]"
            style={{
              fontSize: "clamp(40px, 5vw, 64px)",
              letterSpacing: "-2px",
            }}
          >
            Real Cases.{" "}
            <span className="text-[#00A4A4]">Real Savings.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-['Inter'] font-normal text-white/50 leading-[1.65] mt-[20px] mx-auto"
            style={{ fontSize: "17px", letterSpacing: "-0.3px", maxWidth: "520px" }}
          >
            Thousands of Americans have trusted SympleTax to fight the IRS on their behalf — and won.
          </motion.p>
        </div>

      </div>

      {/* Continuous Moving Carousel — full bleed */}
      <div className="relative mb-[80px]">
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-[24px] w-max"
            animate={{
              x: [0, -1 * (TESTIMONIALS.length * 500 + TESTIMONIALS.length * 24)],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 50,
                ease: "linear",
              },
            }}
            style={{ paddingLeft: "70px" }}
          >
            {carouselItems.map((item, idx) => (
              <div
                key={idx}
                className="shrink-0 flex flex-col rounded-[20px] overflow-hidden"
                style={{
                  width: "500px",
                  background: "#1e293b",
                  padding: "40px",
                  gap: "0px",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.35)",
                }}
              >
                {/* Large opening quote in teal */}
                <div
                  className="font-['Outfit'] font-black text-[#00A4A4] leading-[0.75] mb-[16px] select-none"
                  style={{ fontSize: "80px" }}
                  aria-hidden="true"
                >
                  &ldquo;
                </div>

                {/* Stars */}
                <div className="mb-[16px]">
                  <StarRating count={item.rating} />
                </div>

                {/* Quote text */}
                <p
                  className="font-['Inter'] font-normal text-white/80 leading-[1.6] flex-grow mb-[28px]"
                  style={{ fontSize: "17px", letterSpacing: "-0.2px" }}
                >
                  {item.quote}
                </p>

                {/* Amount resolved badge */}
                <div className="mb-[24px]">
                  <span
                    className="font-['Outfit'] font-black text-[#00A4A4] bg-[#00A4A4]/10 rounded-[50px] px-[14px] py-[6px]"
                    style={{ fontSize: "13px", letterSpacing: "-0.3px" }}
                  >
                    {item.amountResolved}
                  </span>
                </div>

                {/* Author */}
                <div
                  className="flex items-center gap-[14px] pt-[24px]"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div
                    className="rounded-full overflow-hidden shrink-0"
                    style={{
                      width: "52px",
                      height: "52px",
                      border: "2px solid #00A4A4",
                    }}
                  >
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <span
                      className="font-['Outfit'] font-black text-white"
                      style={{ fontSize: "17px", letterSpacing: "-0.4px" }}
                    >
                      {item.name}
                    </span>
                    <span
                      className="font-['Inter'] font-normal text-white/40"
                      style={{ fontSize: "13px", letterSpacing: "-0.1px" }}
                    >
                      {item.location} &bull; {item.caseTitle}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Edge fades */}
        <div
          className="absolute inset-y-0 left-0 pointer-events-none z-[10]"
          style={{
            width: "180px",
            background: "linear-gradient(to right, #0f172a, transparent)",
          }}
        />
        <div
          className="absolute inset-y-0 right-0 pointer-events-none z-[10]"
          style={{
            width: "180px",
            background: "linear-gradient(to left, #0f172a, transparent)",
          }}
        />
      </div>

      {/* Stats strip */}
      <div className="max-w-[1330px] mx-auto px-[70px] relative z-[1]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-4 rounded-[20px] overflow-hidden"
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          {STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className="flex flex-col gap-[10px] px-[48px] py-[48px]"
              style={{
                borderRight: idx < STATS.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
              }}
            >
              <span
                className="font-['Outfit'] font-black text-[#00A4A4] leading-none"
                style={{ fontSize: "52px", letterSpacing: "-2.5px" }}
              >
                {stat.value}
              </span>
              <span
                className="font-['Inter'] font-normal text-white/50 leading-[1.4]"
                style={{ fontSize: "15px", letterSpacing: "-0.2px" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
