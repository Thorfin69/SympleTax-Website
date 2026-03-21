import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const STATS = [
  { value: "$2.3B+", label: "IRS Debt Resolved" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "90 Days", label: "Avg. Resolution Time" },
];

export function STStatsCTA() {
  return (
    <section className="bg-[#0b0b0b] py-16 overflow-hidden relative">

      {/* Dot-grid background decoration */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left: Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-center"
          >
            {STATS.map((stat, idx) => (
              <div key={stat.label} className="flex items-center gap-8 sm:gap-12">
                {/* Stat item */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: idx * 0.1, ease: "easeOut" }}
                  className="flex flex-col items-center sm:items-start text-center sm:text-left"
                >
                  <span className="font-['Inter'] font-extrabold text-[48px] text-[#059669] leading-none">
                    {stat.value}
                  </span>
                  <span className="font-['Inter'] text-[14px] text-white/60 uppercase tracking-wider mt-1">
                    {stat.label}
                  </span>
                </motion.div>

                {/* Vertical divider — shown between items, hidden after last */}
                {idx < STATS.length - 1 && (
                  <div className="hidden sm:block w-px h-14 bg-white/10 shrink-0" />
                )}
              </div>
            ))}
          </motion.div>

          {/* Right: Tagline + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start gap-7 lg:ml-auto text-center lg:text-left"
          >
            <h2
              className="font-['Inter'] font-bold text-[28px] md:text-[36px] text-white leading-[1.2] max-w-sm"
              style={{ textWrap: "balance" }}
            >
              The Fastest Growing Tax Relief Company in the Nation
            </h2>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-[#059669] text-white px-8 py-4 rounded-full font-['Inter'] font-semibold text-[16px] hover:bg-[#047857] transition-colors shadow-lg shadow-[#059669]/30 group"
            >
              Start Your Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
