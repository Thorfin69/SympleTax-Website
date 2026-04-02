import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const imgSectionDesktop = "https://images.unsplash.com/photo-1758519288969-4806f015852d?auto=format&fit=crop&q=80&w=1200";

export function ContactCTA() {
  return (
    <section className="py-24 md:py-32 bg-[#F7F7F7] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <ImageWithFallback
          src={imgSectionDesktop}
          alt=""
          className="w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-[#F7F7F7]/70" />
      </div>

      <div className="max-w-2xl mx-auto px-6 md:px-10 relative z-10 flex flex-col items-center text-center gap-8">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <div className="w-9 h-px bg-[#2C3E50]" />
          <span className="font-['Inter'] font-medium text-[14px] uppercase tracking-wider text-[#2C3E50]">
            Get started today
          </span>
          <div className="w-9 h-px bg-[#2C3E50]" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-['Inter'] font-semibold text-[#2C3E50] tracking-tight leading-tight"
          style={{ fontSize: "clamp(36px, 4vw, 48px)" }}
        >
          Take control of your{" "}
          <span className="text-[#017984]">financial future</span> today
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-['Inter'] text-[#636363] text-[16px] leading-relaxed max-w-md"
        >
          Partner with experts who understand your goals and help you achieve
          lasting success. Let's build a strategy tailored to your needs.
        </motion.p>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#2C3E50] text-white px-10 py-4 rounded-full font-['Inter'] font-semibold flex items-center gap-3 group overflow-hidden relative"
        >
          <span className="relative z-10">Contact us</span>
          <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          <div className="absolute inset-0 bg-[#017984] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </motion.button>
      </div>
    </section>
  );
}
