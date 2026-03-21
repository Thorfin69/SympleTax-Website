import { motion } from "motion/react";
import { Star } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const TESTIMONIALS = [
  {
    quote:
      "SympleTax stopped my wage garnishment within 48 hours. I finally had my paycheck back and a plan to move forward. They are literal lifesavers.",
    name: "Michael R.",
    location: "Irvine, CA",
    result: "Wage Garnishment Released",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&q=80",
    rating: 5,
  },
  {
    quote:
      "I owed over $150,000 in back taxes. SympleTax settled it for just $4,500. Their team was professional, empathetic, and never stopped fighting for me.",
    name: "Leslie C.",
    location: "Austin, TX",
    result: "$145,500 Settled",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=80&h=80&fit=crop&crop=face&q=80",
    rating: 5,
  },
  {
    quote:
      "After three scary IRS notices, I was paralyzed with fear. SympleTax took over all communication and resolved everything in six months.",
    name: "Sarah T.",
    location: "Miami, FL",
    result: "Full Audit Avoidance",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&fit=crop&crop=face&q=80",
    rating: 5,
  },
  {
    quote:
      "They managed my payroll tax issue when I thought my small business was going under. Professional, fast, and highly effective.",
    name: "David L.",
    location: "Chicago, IL",
    result: "$42,000 in Penalties Removed",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face&q=80",
    rating: 5,
  },
  {
    quote:
      "From start to finish, SympleTax handled everything. My stress went from a 10 to zero. I can sleep again. Worth every penny.",
    name: "Carmen V.",
    location: "Los Angeles, CA",
    result: "IRS Lien Removed",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=80&h=80&fit=crop&crop=face&q=80",
    rating: 5,
  },
];

const STATS = [
  { value: "$240K+", label: "Average Tax Debt Resolved Per Case" },
  { value: "48 Hrs", label: "Average Time to Stop Wage Levies" },
];

// Duplicate for seamless infinite loop
const carouselItems = [...TESTIMONIALS, ...TESTIMONIALS];

// Card width + gap in px — must match the CSS below
const CARD_WIDTH = 420;
const GAP = 24;
const TOTAL_OFFSET = (CARD_WIDTH + GAP) * TESTIMONIALS.length;

export function STTestimonials() {
  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-10 h-[1.5px] bg-[#059669]" />
            <span className="font-['Inter'] font-medium text-[14px] uppercase tracking-wider text-[#059669]">
              Client Success Stories
            </span>
            <div className="w-10 h-[1.5px] bg-[#059669]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-['Inter'] font-bold text-[#0b0b0b] leading-[1.1] tracking-tight"
            style={{
              fontSize: "clamp(32px, 4vw, 56px)",
              textWrap: "balance",
            }}
          >
            Real People.{" "}
            <span className="text-[#059669]">Real Results.</span>
          </motion.h2>
        </div>
      </div>

      {/* Carousel — full bleed */}
      <div className="relative overflow-hidden -mx-6 md:-mx-10 mb-20">
        {/* Left fade */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex"
          style={{ gap: `${GAP}px`, paddingLeft: "24px", paddingRight: "24px" }}
          animate={{ x: [0, -TOTAL_OFFSET] }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
        >
          {carouselItems.map((item, idx) => {
            const isGreen = idx % 2 !== 0;
            return (
              <div
                key={idx}
                className={`shrink-0 rounded-2xl p-8 flex flex-col gap-6 border border-gray-100 ${
                  isGreen
                    ? "bg-[#059669]"
                    : "bg-[#f9fafb]"
                }`}
                style={{ width: `${CARD_WIDTH}px` }}
              >
                {/* Quote SVG mark */}
                <svg
                  width="32"
                  height="24"
                  viewBox="0 0 32 24"
                  fill="none"
                  className="shrink-0"
                >
                  <path
                    d="M0 24V14.4C0 10.56 0.96 7.28 2.88 4.56C4.88 1.76 7.6 0 11.04 0L12 1.92C9.44 2.72 7.52 4.08 6.24 6C4.96 7.84 4.32 10 4.32 12.48H8.64V24H0ZM18.72 24V14.4C18.72 10.56 19.68 7.28 21.6 4.56C23.6 1.76 26.32 0 29.76 0L30.72 1.92C28.16 2.72 26.24 4.08 24.96 6C23.68 7.84 23.04 10 23.04 12.48H27.36V24H18.72Z"
                    fill="#059669"
                    fillOpacity={isGreen ? 0.35 : 1}
                  />
                </svg>

                {/* Stars */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]"
                    />
                  ))}
                </div>

                {/* Quote text */}
                <p
                  className={`font-['Inter'] text-[17px] leading-[1.6] flex-grow ${
                    isGreen ? "text-white/90" : "text-[#0b0b0b]"
                  }`}
                >
                  "{item.quote}"
                </p>

                {/* Author row */}
                <div
                  className={`flex items-center gap-4 pt-6 border-t ${
                    isGreen ? "border-white/20" : "border-gray-200"
                  }`}
                >
                  <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1 min-w-0">
                    <span
                      className={`font-['Inter'] font-bold text-[16px] leading-tight ${
                        isGreen ? "text-white" : "text-[#0b0b0b]"
                      }`}
                    >
                      {item.name}
                    </span>
                    <span
                      className={`font-['Inter'] text-[13px] ${
                        isGreen ? "text-white/60" : "text-[#4b5563]"
                      }`}
                    >
                      {item.location}
                    </span>
                    {/* Result badge */}
                    <span
                      className={`font-['Inter'] font-medium text-[12px] uppercase tracking-wider mt-0.5 ${
                        isGreen
                          ? "text-white/80"
                          : "text-[#059669]"
                      }`}
                    >
                      {item.result}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Stat callout blocks */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#0b0b0b] rounded-2xl p-8 text-white flex items-center gap-6 relative overflow-hidden"
            >
              {/* Decorative glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#059669]/10 rounded-full translate-x-10 -translate-y-10 pointer-events-none" />

              <div className="flex flex-col relative z-10">
                <span className="font-['Inter'] font-extrabold text-4xl text-[#059669] mb-1">
                  {stat.value}
                </span>
                <span className="font-['Inter'] text-white/60 uppercase tracking-wider text-[13px] font-medium">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
