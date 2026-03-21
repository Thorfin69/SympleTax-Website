import { motion } from "motion/react";

export function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#2C3E50]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 mb-16"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-px bg-white/50" />
            <span className="font-['Inter'] font-medium text-[14px] uppercase tracking-wider text-white/70">
              Our Services
            </span>
          </div>

          <h1
            className="font-['Inter'] font-bold text-white leading-tight tracking-tight max-w-3xl"
            style={{ fontSize: 'clamp(40px, 6vw, 84px)', textWrap: 'balance' }}
          >
            Unlock potential <br />
            with our expertise
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[600px]"
        >
          {/* CSS-only banner background */}
          <div className="absolute inset-0 bg-[#2C3E50]" />

          {/* Dot-grid pattern overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at center, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Teal glow */}
          <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#00838F] opacity-10 blur-[100px] rounded-full" />

          {/* Gradient overlay matching original */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/40 to-transparent" />

          {/* Floating Badge */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-10 right-10 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-[#00838F] rounded-full flex items-center justify-center text-white font-bold">
              ✓
            </div>
            <div className="flex flex-col">
              <span className="font-['Inter'] font-bold text-[#2C3E50] text-lg">98% Success</span>
              <span className="font-['Inter'] text-xs text-gray-500 uppercase tracking-wider">Client satisfaction</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
