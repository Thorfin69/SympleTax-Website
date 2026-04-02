import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Plus } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const imgSolutionImage = "https://images.unsplash.com/photo-1762427354251-f008b64dbc32?auto=format&fit=crop&q=80&w=1200";

const tabs = [
  {
    title: "Financial Planning and Strategy",
    info: "Comprehensive strategy sessions to align your business goals with financial reality. We work closely with your leadership team to build multi-year financial plans that adapt as your business evolves.",
  },
  {
    title: "Tax Optimization and Compliance",
    info: "Navigating complex tax laws to minimize liabilities and ensure full compliance. Our tax specialists stay current with all regulatory changes to protect your business and maximize returns.",
  },
  {
    title: "Investment and Portfolio Advisory",
    info: "Tailored investment advice to grow your assets and manage risks effectively. We analyze market opportunities and craft diversified portfolios aligned with your risk appetite and growth targets.",
  },
  {
    title: "Risk Management and Insurance",
    info: "Identifying potential risks and providing robust insurance solutions for protection. From operational risks to market volatility, we help you build resilient financial defenses.",
  },
  {
    title: "Mergers and Acquisitions Support",
    info: "Expert guidance through the entire M&A process for seamless transitions. Due diligence, valuation, negotiation support, and post-merger integration — we're with you every step.",
  },
  {
    title: "Retirement and Legacy Planning",
    info: "Securing your future and ensuring your legacy is preserved for generations. We create comprehensive retirement roadmaps and estate planning strategies tailored to your life goals.",
  },
];

export function TailoredSolutions() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  return (
    <section
      id="solutions"
      className="py-24 md:py-32 bg-[#2C3E50] relative overflow-hidden"
    >
      {/* BG Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(235deg, rgba(44,62,80,0) 0%, rgb(44,62,80) 50%)",
        }}
      />
      {/* Background solution image */}
      <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none opacity-20 hidden lg:block">
        <ImageWithFallback
          src={imgSolutionImage}
          alt=""
          className="w-full h-full object-cover object-left"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C3E50] via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-[520px_1fr] gap-16 items-start">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-14 sticky top-24"
          >
            {/* Label */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-px bg-white/50" />
                <span className="font-['Inter'] font-medium text-[14px] uppercase tracking-wider text-white/70">
                  Tailored Solutions
                </span>
              </div>

              <h2
                className="font-['Inter'] font-medium text-white leading-tight tracking-tight"
                style={{ fontSize: "clamp(32px, 3.5vw, 48px)" }}
              >
                Financial strategy for{" "}
                <span className="text-[#00838F]">your future</span>
              </h2>
            </div>

            <div className="flex flex-col gap-5">
              <p className="font-['Inter'] font-medium text-white/70 text-[16px] leading-relaxed">
                We provide tailored financial solutions to help your business
                grow with confidence
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#017984] text-white px-7 py-4 rounded-full font-['Inter'] font-semibold flex items-center self-start gap-3 group overflow-hidden relative"
              >
                <span className="relative z-10">Explore solutions</span>
                <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <div className="absolute inset-0 bg-[#00838F] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side - Expandable Tabs */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col"
          >
            {tabs.map((tab, index) => (
              <motion.div
                key={index}
                initial={false}
                className="w-full cursor-pointer border-b border-[rgba(176,176,176,0.3)] last:border-b-0"
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? -1 : index)
                }
              >
                <div className="flex items-center justify-between py-6 gap-5">
                  <div className="flex-1">
                    <motion.h3
                      animate={{
                        color:
                          expandedIndex === index
                            ? "#FFFFFF"
                            : "rgba(247,247,247,0.75)",
                      }}
                      transition={{ duration: 0.3 }}
                      className="font-['Inter'] font-semibold text-[22px] tracking-tight leading-tight"
                    >
                      {tab.title}
                    </motion.h3>
                  </div>
                  <motion.div
                    animate={{
                      backgroundColor:
                        expandedIndex === index ? "#017984" : "#017984",
                      rotate: expandedIndex === index ? 45 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-10 bg-[#017984] rounded-full flex items-center justify-center shrink-0"
                  >
                    <Plus className="w-4 h-4 text-white" />
                  </motion.div>
                </div>

                <AnimatePresence initial={false}>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.p
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        exit={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="font-['Inter'] text-white/60 text-[15px] leading-relaxed pb-6 pr-14"
                      >
                        {tab.info}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}