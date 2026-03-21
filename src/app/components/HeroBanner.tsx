import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const imgHeroBannerSection = "https://images.unsplash.com/photo-1758519288969-4806f015852d?auto=format&fit=crop&q=80&w=1200";
const imgAvatar = "https://images.unsplash.com/photo-1742569184536-77ff9ae46c99?auto=format&fit=crop&q=80&w=100&h=100";
const imgAvatar1 = "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?auto=format&fit=crop&q=80&w=100&h=100";
const imgAvatar2 = "https://images.unsplash.com/photo-1758598497414-3ddd779e2611?auto=format&fit=crop&q=80&w=100&h=100";

export function HeroBanner() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1E1E1E]">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <ImageWithFallback
          src={imgHeroBannerSection}
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(99.99deg, rgba(0,0,0,0.75) 33%, rgba(30,30,30,0.1) 53%)",
          }}
        />
      </div>

      {/* Animated particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          animate={{
            y: [0, -60, 0],
            opacity: [0, 1, 0],
            x: [0, Math.sin(i) * 30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + i * 0.7,
            delay: i * 0.5,
          }}
          style={{
            left: `${15 + i * 12}%`,
            bottom: `${20 + (i % 3) * 10}%`,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 w-full">
        <div className="flex flex-col gap-10 max-w-[600px]">
          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {[imgAvatar, imgAvatar1, imgAvatar2].map((img, idx) => (
                <div
                  key={idx}
                  className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                >
                  <ImageWithFallback src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <span className="font-['Inter'] font-medium text-[#F7F7F7] text-[24px] tracking-tight leading-none">
                100+
              </span>
              <span className="font-['Inter'] text-white/70 text-[15px]">
                Satisfied clients
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="flex flex-col gap-6"
          >
            <h1
              className="font-['Inter'] font-semibold text-[#F7F7F7] leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(48px, 6vw, 72px)" }}
            >
              Smart solution for{" "}
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.7 }}
                className="block text-[#00838F]"
              >
                a stronger future
              </motion.span>
            </h1>
            <p className="font-['Inter'] text-white/70 text-[16px] leading-relaxed max-w-[380px]">
              We provide expert accounting and financial consulting to help your
              business grow with confidence
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#017984] text-white px-8 py-4 rounded-full font-['Inter'] font-semibold flex items-center gap-3 group overflow-hidden relative"
            >
              <span className="relative z-10">Get started</span>
              <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <div className="absolute inset-0 bg-[#2C3E50] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, borderColor: "white" }}
              whileTap={{ scale: 0.97 }}
              className="border border-white/60 text-white px-8 py-4 rounded-full font-['Inter'] font-semibold hover:bg-white/10 transition-colors"
            >
              Explore our services
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
