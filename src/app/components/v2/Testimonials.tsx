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
    rating: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1704655295066-681e61ecca6b?auto=format&fit=crop&q=80&w=800",
    quote: "I owed over $150,000 in back taxes. SympleTax settled it for just $4,500. Their team was professional, empathetic, and never stopped fighting for me.",
    name: "Leslie C.",
    location: "Austin, TX",
    caseTitle: "Tax Debt Settlement",
    savings: "$145,500 settled",
    rating: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1758518729459-235dcaadc611?auto=format&fit=crop&q=80&w=800",
    quote: "After receiving three scary IRS notices, I was paralyzed with fear. SympleTax took over all communication and resolved everything in six months.",
    name: "Sarah T.",
    location: "Miami, FL",
    caseTitle: "IRS Audit Defense",
    savings: "Full Audit Avoidance",
    rating: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
    quote: "They managed my payroll tax issue when I thought my small business was going under. Professional, fast, and highly effective.",
    name: "David L.",
    location: "Chicago, IL",
    caseTitle: "Payroll Tax Relief",
    savings: "$42,000 in penalties removed",
    rating: 5,
  },
];

const STATS = [
  { value: "$500M+", label: "In Tax Debt Resolved" },
  { value: "12,000+", label: "Clients Helped Nationwide" },
  { value: "98%", label: "Client Satisfaction Rate" },
  { value: "48 hrs", label: "Average Time to Stop Levies" },
];

export function Testimonials() {
  // Duplicate testimonials for continuous carousel
  const carouselItems = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-24 bg-[#0f172a] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-9 h-px bg-[#00A4A4]" />
            <span className="font-['Inter'] font-medium text-[14px] uppercase tracking-wider text-[#00A4A4]">
              Client Success Stories
            </span>
            <div className="w-9 h-px bg-[#00A4A4]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-['Inter'] font-bold text-4xl md:text-5xl text-white mb-6 tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            Real Cases. <span className="text-[#00A4A4]">Real Savings.</span>
          </motion.h2>
        </div>

        {/* Continuous Moving Carousel */}
        <div className="relative mb-24 -mx-6 md:-mx-10 px-6 md:px-10">
          <div className="overflow-hidden">
                        <motion.div
              className="flex gap-6 w-max"
              animate={{
                x: [0, -1 * (TESTIMONIALS.length * 480 + TESTIMONIALS.length * 24)],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 50,
                  ease: "linear",
                },
              }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {carouselItems.map((item, idx) => (
                <div
                  key={idx}
                  className="w-[480px] rounded-[12px] p-[40px] flex flex-col justify-between gap-[32px] shrink-0 shadow-[0_8px_32px_rgba(0,0,0,0.25)] border border-slate-100 bg-white"
                >
                  {/* Quote mark */}
                  <svg
                    width="32"
                    height="24"
                    viewBox="0 0 32 24"
                    fill="none"
                    className="shrink-0"
                  >
                    <path
                      d="M0 24V14.4C0 10.56 0.96 7.28 2.88 4.56C4.88 1.76 7.6 0 11.04 0L12 1.92C9.44 2.72 7.52 4.08 6.24 6C4.96 7.84 4.32 10 4.32 12.48H8.64V24H0ZM18.72 24V14.4C18.72 10.56 19.68 7.28 21.6 4.56C23.6 1.76 26.32 0 29.76 0L30.72 1.92C28.16 2.72 26.24 4.08 24.96 6C23.68 7.84 23.04 10 23.04 12.48H27.36V24H18.72Z"
                      fill="#00A4A4"
                    />
                  </svg>

                  {/* Text */}
                  <p
                    className="font-['Inter'] font-normal text-[18px] md:text-[20px] leading-[1.5] tracking-tight flex-grow text-[#0f172a]"
                  >
                    "{item.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-[16px] pt-[24px] border-t border-slate-100">
                    <div className="w-[56px] h-[56px] rounded-full overflow-hidden shrink-0 border-2 border-white shadow-md">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-['Inter'] font-bold text-[18px] text-[#0f172a]">
                        {item.name}
                      </span>
                      <span className="font-['Inter'] text-[14px] text-[#475569]">
                        {item.location} • {item.caseTitle}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Fades for smooth edge */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#0f172a] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#0f172a] to-transparent z-10 pointer-events-none" />
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border border-white/10 rounded-[16px] bg-white/5 grid grid-cols-4"
        >
          {STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col gap-[10px] px-[48px] py-[44px] ${idx < STATS.length - 1 ? "border-r border-white/10" : ""}`}
            >
              <span
                className="font-['Inter'] font-bold text-[#00A4A4] leading-none"
                style={{ fontSize: "44px", letterSpacing: "-2px" }}
              >
                {stat.value}
              </span>
              <span
                className="font-['Inter'] font-normal text-white/60 leading-[1.4]"
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
