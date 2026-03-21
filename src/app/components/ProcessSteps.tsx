import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const steps = [
  {
    id: "01",
    title: "Understanding your needs",
    description: "We start by truly discovering your business, mission, and objectives. Through comprehensive research, we identify challenges and opportunities, allowing us to create solutions tailored to your specific needs.",
    image: "https://images.unsplash.com/photo-1642345584279-9810f0b1359c?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    id: "02",
    title: "Strategic planning",
    description: "Once we understand your goals, we craft a detailed action plan. Our strategies are data-driven, adaptable, and focused on achieving measurable results while ensuring long-term sustainability.",
    image: "https://images.unsplash.com/photo-1629048733170-b4b3c5ec1eda?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    id: "03",
    title: "Implementation & Execution",
    description: "With a solid plan in place, we put it into motion. Our experienced team executes with precision, utilizing the latest tools and methodologies to drive success while keeping you informed along the way.",
    image: "https://images.unsplash.com/photo-1702047094974-a3475a6e37f5?auto=format&fit=crop&q=80&w=800&h=600",
  },
  {
    id: "04",
    title: "Continuous support",
    description: "We don't just deliver a solution and walk away. We monitor progress, analyze outcomes, and refine strategies as needed. Our ongoing support ensures sustained growth and maximum efficiency for your business.",
    image: "https://images.unsplash.com/photo-1763729805496-b5dbf7f00c79?auto=format&fit=crop&q=80&w=800&h=600",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-24 md:py-32 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-6 mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 justify-center"
          >
            <div className="w-9 h-px bg-[#2C3E50]" />
            <span className="font-['Inter'] font-medium text-[14px] uppercase tracking-wider text-[#2C3E50]">
              Work Process
            </span>
            <div className="w-9 h-px bg-[#2C3E50]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-['Inter'] font-semibold text-[#2C3E50] tracking-tight leading-tight max-w-[600px]"
            style={{ fontSize: "clamp(36px, 4vw, 48px)" }}
          >
            How we turn strategy <br />
            into success
          </motion.h2>
        </div>

        {/* Steps Grid */}
        <div className="flex flex-col gap-24 md:gap-32">
          {steps.map((step, idx) => (
            <div
              key={step.id}
              className={`flex flex-col ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-12 md:gap-24`}
            >
              {/* Image Column */}
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex-1 w-full"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-2xl shadow-black/5">
                  <ImageWithFallback
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>

              {/* Text Column */}
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex-1 flex flex-col gap-6"
              >
                <div className="w-12 h-12 bg-[#00838F] rounded-full flex items-center justify-center text-white font-['Inter'] font-bold text-lg shadow-lg">
                  {step.id}
                </div>
                <h3
                  className="font-['Inter'] font-semibold text-[#2C3E50] tracking-tight leading-tight"
                  style={{ fontSize: "clamp(28px, 3vw, 36px)" }}
                >
                  {step.title}
                </h3>
                <p className="font-['Inter'] text-[#636363] text-[17px] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
