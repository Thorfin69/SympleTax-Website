import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Play } from "lucide-react";

const imgInnerBanner = "https://images.unsplash.com/photo-1770681381576-f1fdceb2ea01?auto=format&fit=crop&q=80&w=1920";

export function ProcessHero() {
  return (
    <section className="relative bg-[#2C3E50] pt-[180px] md:pt-[240px] pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-20 md:mb-32">
        <div className="flex flex-col gap-6 md:gap-8 max-w-[800px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="w-9 h-px bg-[#F7F7F7]" />
            <span className="font-['Inter'] font-medium text-[14px] uppercase tracking-wider text-[#F7F7F7]">
              How we work
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-['Inter'] font-semibold text-white tracking-tight leading-[1.1]"
            style={{ fontSize: "clamp(48px, 6vw, 72px)", textWrap: 'balance' }}
          >
            Our process for <br />
            <span className="text-[#017984]">delivering results</span>
          </motion.h1>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="w-full h-[400px] md:h-[550px] relative overflow-hidden"
      >
        <ImageWithFallback
          src={imgInnerBanner}
          alt="Financial data and reports"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#2C3E50] px-4 py-2 rounded-full font-['Inter'] font-semibold flex items-center gap-2 text-sm shadow-lg"
          >
            <Play className="w-3 h-3 fill-current" />
            Watch full video
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
