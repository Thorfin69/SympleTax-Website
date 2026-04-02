import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function ServicesCTA() {
  return (
    <section className="py-24 md:py-32 bg-[#F7F7F7] overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-10 flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <div className="flex items-center gap-3 justify-center">
            <div className="w-9 h-px bg-[#00838F]" />
            <span className="font-['Inter'] font-medium text-[14px] uppercase tracking-wider text-[#00838F]">
              GET STARTED TODAY
            </span>
            <div className="w-9 h-px bg-[#00838F]" />
          </div>

          <h2
            className="font-['Inter'] font-semibold text-[#2C3E50] tracking-tight leading-tight"
            style={{ fontSize: "clamp(32px, 4.5vw, 64px)" }}
          >
            Take control of your <br />
            financial future today
          </h2>

          <p className="font-['Inter'] text-[#636363] text-[18px] md:text-[20px] leading-relaxed max-w-2xl mx-auto">
            Partner with experts who understand your goals and help you achieve lasting success. Let's build a strategy tailored to your needs.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#2C3E50] text-white px-10 py-5 rounded-full font-['Inter'] font-bold flex items-center justify-center gap-3 self-center shadow-2xl shadow-[#2C3E50]/20 mt-4 group overflow-hidden relative"
          >
            <span className="relative z-10">Contact us</span>
            <ArrowUpRight className="w-5 h-5 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            <div className="absolute inset-0 bg-[#00838F] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
