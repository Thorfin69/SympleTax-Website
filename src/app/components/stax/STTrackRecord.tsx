import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

const METRICS = [
  { value: "$50M+", label: "Tax Debt Resolved" },
  { value: "2,000+", label: "Cases Closed" },
  { value: "98%", label: "Client Satisfaction" },
];

export function STTrackRecord() {
  return (
    <section className="relative py-14 overflow-hidden">

      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&h=400&fit=crop&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0b0b0b]/80" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* ── Left: Label + Stats + Trustpilot ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            {/* Track Record label */}
            <p className="font-['Inter'] font-semibold text-[11px] uppercase tracking-[0.2em] text-white/40 mb-6">
              Track Record
            </p>

            {/* Stats row + Trustpilot block */}
            <div className="flex flex-wrap gap-10 items-start">

              {/* Numeric metrics */}
              {METRICS.map((metric, idx) => (
                <motion.div
                  key={metric.value}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col"
                >
                  <span className="font-['Inter'] font-extrabold text-[42px] text-white leading-none">
                    {metric.value}
                  </span>
                  <span className="font-['Inter'] text-[13px] text-white/50 uppercase tracking-wider mt-1">
                    {metric.label}
                  </span>
                </motion.div>
              ))}

              {/* Trustpilot block */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col"
              >
                <div className="flex gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#00b67a] text-[18px]">
                      ★
                    </span>
                  ))}
                </div>
                <div className="font-['Inter'] font-bold text-white text-[22px] leading-none">
                  4.8
                </div>
                <div className="font-['Inter'] text-white/50 text-[12px]">
                  2,201 reviews
                </div>
                <div className="font-['Inter'] text-[#00b67a] text-[11px] font-semibold uppercase tracking-wider mt-1">
                  Trustpilot
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* ── Right: Tagline + CTA ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="lg:max-w-[380px]"
          >
            <h2
              className="font-['Inter'] font-bold text-[28px] text-white leading-[1.2] mb-6"
              style={{ textWrap: "balance" }}
            >
              Stop Dealing with the IRS Alone.
            </h2>

            <p className="font-['Inter'] text-[15px] text-white/70 mb-8">
              Talk to a tax relief expert today — completely free, no pressure.
            </p>

            <Link
              to="/contact"
              className="bg-[#D97706] hover:bg-[#B45309] text-white px-8 py-4 rounded-full font-['Inter'] font-semibold text-[16px] inline-flex items-center gap-3 transition-colors"
            >
              Get My Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>

            <p className="font-['Inter'] text-[13px] text-white/50 mt-4">
              No credit card. No commitment. Just answers.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
