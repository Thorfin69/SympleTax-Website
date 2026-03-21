import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const imgWhyChooseUsImage = "https://images.unsplash.com/photo-1758519288969-4806f015852d?auto=format&fit=crop&q=80&w=800";

const features = [
  {
    number: "01",
    title: "Personalized\nStrategies",
    description:
      "We craft financial solutions based on your unique goals and industry needs",
  },
  {
    number: "02",
    title: "Transparent\nProcesses",
    description:
      "Clear, honest, and genuinely data-driven insights for better decision-making",
  },
  {
    number: "03",
    title: "Proven Track\nRecord",
    description:
      "Extensive experience in helping businesses achieve sustainable growth",
  },
];

export function WhyChooseUs() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[1fr_1fr] gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-10"
          >
            {/* Label */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-px bg-[#2C3E50]" />
              <span className="font-['Inter'] font-medium text-[14px] uppercase tracking-wider text-[#2C3E50]">
                Why Choose Us
              </span>
            </div>

            <h2 className="font-['Inter'] font-semibold text-[#2C3E50] leading-[1.1] tracking-tight" style={{ fontSize: 'clamp(36px, 4vw, 48px)', textWrap: 'balance' }}>
              Expert guidance,{" "}
              <span className="block">proven results</span>
            </h2>

            {/* Feature Rows */}
            <div className="flex flex-col">
              {features.map((feature, idx) => (
                <motion.div
                  key={feature.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className="flex items-center justify-between py-6 border-t border-b border-[rgba(176,176,176,0.5)] -mb-px group cursor-pointer"
                >
                  <div className="flex items-center gap-12">
                    <div className="w-10 h-10 bg-[#2C3E50] rounded-full flex items-center justify-center shrink-0">
                      <span className="font-['Inter'] font-medium text-[#F7F7F7] text-[16px]">
                        {feature.number}
                      </span>
                    </div>
                    <h3 className="font-['Inter'] font-medium text-[#2C3E50] text-[18px] leading-tight whitespace-pre-line" style={{ textWrap: 'balance' }}>
                      {feature.title}
                    </h3>
                  </div>
                  <p className="font-['Inter'] text-[#636363] text-[15px] leading-relaxed max-w-[310px] hidden md:block">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#017984] text-white px-7 py-4 rounded-full font-['Inter'] font-semibold flex items-center self-start gap-3 group overflow-hidden relative"
            >
              <span className="relative z-10">Learn more about us</span>
              <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <div className="absolute inset-0 bg-[#2C3E50] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative h-[420px] rounded-lg overflow-hidden"
          >
            <ImageWithFallback
              src={imgWhyChooseUsImage}
              alt="Why Choose Us"
              className="w-full h-full object-cover"
            />
            {/* Overlay shimmer */}
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 3, repeatDelay: 2 }}
              className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
