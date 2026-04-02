import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const STEPS = [
  {
    id: "01",
    title: "Deep Collaboration",
    description:
      "We work as an extension of your team—immersing ourselves in your goals, challenges, and vision to ensure aligned outcomes. We believe great results come from working closely together.",
    features: ["Joint Strategy Sessions", "Dedicated Account Manager", "Transparent Communication"],
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=900&h=600&fit=crop&q=80",
  },
  {
    id: "02",
    title: "Expertise",
    description:
      "Our team brings decades of combined experience in tax resolution, law, and accounting to every case. We provide the mastery needed for complex tax relief.",
    features: ["Enrolled Agent Oversight", "Tax Attorney Consultation", "CPA-Led Financial Reviews"],
    image: "https://images.unsplash.com/photo-1554224311-beee4686418d?w=900&h=600&fit=crop&q=80",
  },
  {
    id: "03",
    title: "Tailored Solutions",
    description:
      "No two tax cases are the same. We develop bespoke resolution paths that prioritize your financial stability and long-term peace of mind.",
    features: ["Custom Relief Roadmaps", "Asset Protection Focus", "Bespoke Negotiation Tactics"],
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=900&h=600&fit=crop&q=80",
  },
  {
    id: "04",
    title: "Impact",
    description:
      "Our focus is on measurable results—stopping collections, reducing liabilities, and giving you back your financial freedom and confidence.",
    features: ["IRS Debt Reduction", "Lien & Levy Removal", "Penalty Abatement Success"],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&h=600&fit=crop&q=80",
  },
];

function CheckIcon() {
  return (
    <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 14 11">
      <path
        d="M13.5815 1.36138L5.08146 9.86138C5.00743 9.93567 4.91946 9.99462 4.8226 10.0348C4.72574 10.0751 4.62189 10.0958 4.51701 10.0958C4.41213 10.0958 4.30828 10.0751 4.21142 10.0348C4.11456 9.93567 4.02659 9.93567 3.95255 9.86138L0.233804 6.14263C0.159679 6.06851 0.10088 5.98051 0.0607637 5.88366C0.0206475 5.78681 1.10455e-09 5.68301 0 5.57818C-1.10455e-09 5.47335 0.0206475 5.36955 0.0607637 5.2727C0.10088 5.17585 0.159679 5.08785 0.233804 5.01373C0.307929 4.9396 0.395928 4.8808 0.492777 4.84069C0.589626 4.80057 0.693429 4.77992 0.798257 4.77992C0.903086 4.77992 1.00689 4.80057 1.10374 4.84069C1.20059 4.8808 1.28859 4.9396 1.36271 5.01373L4.51767 8.16869L12.4539 0.233804C12.6036 0.0841017 12.8066 0 13.0183 0C13.23 0 13.4331 0.0841017 13.5828 0.233804C13.7325 0.383506 13.8166 0.586546 13.8166 0.798257C13.8166 1.00997 13.7325 1.21301 13.5828 1.36271L13.5815 1.36138Z"
        fill="#00838F"
      />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg className="size-[20px]" fill="none" viewBox="0 0 16 14">
      <path
        d="M15.3485 7.22788L9.72431 12.852C9.54822 13.0281 9.30938 13.1271 9.06035 13.1271C8.81132 13.1271 8.57248 13.0281 8.39639 12.852C8.22029 12.6759 8.12137 12.4371 8.12137 12.1881C8.12137 11.939 8.22029 11.7002 8.39639 11.5241L12.42 7.50206H0.937358C0.688755 7.50206 0.450335 7.4033 0.274546 7.22751C0.0987571 7.05172 0 6.8133 0 6.5647C0 6.31609 0.0987571 6.07767 0.274546 5.90188C0.450335 5.7261 0.688755 5.62734 0.937358 5.62734H12.42L8.39795 1.60295C8.22186 1.42685 8.12293 1.18802 8.12293 0.938984C8.12293 0.68995 8.22186 0.451116 8.39795 0.275022C8.57404 0.0989282 8.81288 2.624e-09 9.06191 0C9.31095 -2.624e-09 9.54978 0.0989282 9.72587 0.275022L15.35 5.89917C15.4374 5.98637 15.5067 6.08998 15.554 6.20405C15.6012 6.31811 15.6255 6.44039 15.6253 6.56385C15.6252 6.68731 15.6007 6.80953 15.5531 6.92348C15.5056 7.03744 15.4361 7.14088 15.3485 7.22788Z"
        fill="#00838F"
      />
    </svg>
  );
}

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState<string>("01");

  return (
    <section className="bg-white py-[120px]">
      <div className="max-w-[1330px] mx-auto px-[70px]">
        {/* Section Header */}
        <div className="flex flex-col gap-[22px] mb-20">
          <div className="flex items-center gap-[10px]">
            <div className="bg-[#2c3e50] h-px w-[35px]" />
            <span
              className="font-['Inter'] font-medium uppercase text-[#2c3e50]"
              style={{ fontSize: "14px", letterSpacing: "0.05em" }}
            >
              Our Approach
            </span>
          </div>
          <div className="flex items-end justify-between gap-12">
            <h2
              className="font-['Inter'] font-bold text-[#2C3E50] leading-[1.08]"
              style={{ fontSize: "48px", textWrap: 'balance', letterSpacing: "-1.5px" }}
            >
              How We <span className="text-[#00838F]">Deliver Results</span>
            </h2>
            <p
              className="font-['Inter'] font-normal text-[#636363] leading-[1.65] shrink-0 max-w-[380px] text-right"
              style={{ fontSize: "16px", letterSpacing: "-0.3px" }}
            >
              Every case is different. Our process is built around deep expertise, transparent communication, and measurable outcomes for every client we serve.
            </p>
          </div>
        </div>

                <div className="flex flex-col lg:flex-row gap-[40px] items-stretch">
          {/* Left: Real high-fidelity image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-[50%] min-h-[452px] relative rounded-[8px] overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <ImageWithFallback
                  src={STEPS.find(s => s.id === activeTab)!.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right: Boxed Premium Accordion from Figma Design */}
          <div className="lg:w-[50%] flex flex-col h-full shrink-0">
            <div className="bg-[#F2F8F9] rounded-[12px] w-full max-w-[500px] xl:max-w-none overflow-clip border border-[rgba(0,131,143,0.05)]">
              <div className="flex flex-col items-center px-[30px] py-[20px] size-full">
                {STEPS.map((step, idx) => {
                  const isOpen = activeTab === step.id;
                  return (
                    <div key={step.id} className="w-full">
                      <div className="flex flex-col gap-[12px] items-start py-[20px]">
                        <button
                          onClick={() => setActiveTab(step.id)}
                          className="flex items-center justify-between w-full text-left"
                        >
                          <div className="flex items-center gap-[10px]">
                            {/* Brand Active Circle */}
                            <div 
                              className={`rounded-[100px] shrink-0 size-[10px] transition-all duration-300 ${isOpen ? 'bg-[#00838F]' : 'bg-transparent'}`} 
                            />
                            <div className={`font-['Inter'] font-medium text-[18px] transition-colors duration-300 ${isOpen ? 'text-[#2C3E50]' : 'text-[rgba(44,62,80,0.7)]'}`}>
                              {step.title}
                            </div>
                          </div>

                          {/* Brand Plus/Minus Icon */}
                          <div className={`relative shrink-0 size-[28px] rounded-[28px] transition-all duration-300 flex items-center justify-center ${isOpen ? 'bg-[#F2F8F9]' : 'bg-[#00838F]'}`}>
                            <div className={`h-[2px] w-[12px] rounded-[10px] transition-colors duration-300 ${isOpen ? 'bg-[#00838F]' : 'bg-white'}`} />
                            {!isOpen && (
                              <div className="absolute h-[12px] w-[2px] bg-white rounded-[10px]" />
                            )}
                          </div>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                              className="overflow-hidden w-full"
                            >
                              <div className="font-['Inter'] font-normal text-[16px] text-[rgba(44,62,80,0.75)] leading-[1.6] max-w-[500px] whitespace-pre-wrap pt-2 pb-2">
                                {step.description}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {idx < STEPS.length - 1 && (
                        <div className="bg-[rgba(0,0,0,0.07)] h-px shrink-0 w-full" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
