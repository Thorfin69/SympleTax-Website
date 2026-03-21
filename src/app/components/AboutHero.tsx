import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const imgInnerBanner = "https://images.unsplash.com/photo-1739298061757-7a3339cee982?auto=format&fit=crop&q=80&w=1200";

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#2C3E50] overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#fff_1px,_transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col gap-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="w-9 h-px bg-white/50" />
            <span className="font-['Inter'] font-medium text-[14px] uppercase tracking-wider text-white/70">
              Who we are
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-['Inter'] font-bold text-white leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(40px, 5vw, 72px)", textWrap: 'balance' }}
          >
            About us: your <br />
            <span className="text-[#00838F]">financial path</span>
          </motion.h1>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="mt-16 md:mt-24 w-full h-[400px] md:h-[550px] relative">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="w-full h-full"
        >
          <ImageWithFallback
            src={imgInnerBanner}
            alt="About Finovo"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C3E50]/20 via-transparent to-transparent" />
      </div>
    </section>
  );
}