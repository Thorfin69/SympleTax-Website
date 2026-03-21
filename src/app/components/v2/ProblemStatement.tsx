import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const PROBLEMS = [
  {
    id: "01",
    title: "Back Taxes & Penalties",
    description:
      "Unpaid taxes from prior years compound with interest and penalties daily. We stop the clock, reconstruct your liability, and negotiate with the IRS to reach a fair resolution.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=700&fit=crop&q=80",
  },
  {
    id: "02",
    title: "Unfiled Returns",
    description:
      "Missing returns trigger substitute filings and collection actions. We reconstruct records, prepare all delinquent returns, and minimize your total exposure.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=700&fit=crop&q=80",
  },
  {
    id: "03",
    title: "IRS Notices & Audits",
    description:
      "Notices escalate fast without expert intervention. We decode every IRS letter, respond on your behalf, and handle direct communication with agents.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=700&fit=crop&q=80",
  },
  {
    id: "04",
    title: "Wage Garnishment",
    description:
      "Levies and garnishments can be released — often within 24 to 48 hours. We act immediately to protect your income and establish alternative resolution paths.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=700&fit=crop&q=80",
  },
];

export function ProblemStatement() {
  const [activeId, setActiveId] = useState<string>("01");

  return (
    <section className="bg-[#f9fafb] py-[120px]">
      <div className="max-w-[1330px] mx-auto px-[70px]">

        {/* Section Header — h2 left, paragraph + CTA right */}
        <div className="flex items-end justify-between gap-12 mb-[60px]">
          <div className="flex flex-col gap-[22px]">
            <div className="flex items-center gap-[10px]">
              <div className="bg-[#00A4A4] h-px w-[35px] shrink-0" />
              <span className="font-['Inter'] font-medium text-[14px] uppercase tracking-[0.05em] text-[#00A4A4]">
                Why Choose Us
              </span>
            </div>
            <h2
              className="font-['Inter'] font-bold text-[#0f172a] leading-[1.08]"
              style={{ fontSize: "48px", textWrap: "balance", letterSpacing: "-1.5px" }}
            >
              Expert Guidance,{" "}
              <br />Proven Results
            </h2>
          </div>

          {/* Paragraph + CTA */}
          <div className="flex flex-col items-end gap-5 shrink-0 max-w-[320px]">
            <p
              className="font-['Inter'] font-medium text-[#475569] leading-[1.65] text-right"
              style={{ fontSize: "16px", letterSpacing: "-0.3px" }}
            >
              We provide tailored tax solutions to help you resolve your situation with confidence
            </p>
            <Link
              to="/services"
              className="bg-gradient-to-r from-[#00A4A4] to-[#007a7a] hover:from-[#007a7a] hover:to-[#005f5f] text-white flex items-center gap-4 px-8 py-4 rounded-full transition-all whitespace-nowrap shadow-[0_8px_24px_rgba(0,164,164,0.3)]"
            >
              <span className="font-['Inter'] font-semibold" style={{ fontSize: "16px" }}>
                View All Services
              </span>
              <ArrowUpRight className="size-5" />
            </Link>
          </div>
        </div>

        {/* Main Layout — 50/50 */}
        <div className="flex items-stretch gap-[60px]">

          {/* Left Image — 50%, crossfades on tab change */}
          <div className="hidden lg:block w-[50%] shrink-0 h-[540px] rounded-[8px] overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <ImageWithFallback
                  src={PROBLEMS.find(p => p.id === activeId)!.image}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Accordion — 50% */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="border-t border-slate-200">
              {PROBLEMS.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <div key={item.id} className="border-b border-slate-200">
                    <button
                      onClick={() => setActiveId(item.id)}
                      className="flex items-center gap-[24px] w-full text-left py-[28px] group"
                    >
                      <span className="font-['Inter'] font-medium text-[24px] text-[#94a3b8] shrink-0 w-[50px]">
                        [{item.id}]
                      </span>
                      <span className={`font-['Inter'] font-medium text-[24px] transition-colors ${isActive ? "text-[#0f172a]" : "text-[#94a3b8] group-hover:text-[#00A4A4]"}`}>
                        {item.title}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className="overflow-hidden"
                        >
                          <div className="pb-[40px] pl-[74px]">
                            <p className="font-['Inter'] font-normal text-[16px] text-[#475569] leading-[1.6] mb-6">
                              {item.description}
                            </p>
                            <motion.button
                              whileHover="hover"
                              className="flex items-center gap-3 group/btn"
                            >
                              <span className="font-['Inter'] font-medium text-[15px] text-[#00A4A4]">
                                Learn More
                              </span>
                              <motion.div
                                variants={{ hover: { x: 4 } }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                              >
                                <ArrowUpRight className="text-[#00A4A4] size-[18px]" />
                              </motion.div>
                            </motion.button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
