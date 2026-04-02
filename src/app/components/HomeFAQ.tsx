import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";
import { ArrowUpRight, Plus, Minus } from "lucide-react";

const HOME_FAQS = [
  {
    question: "How long does the tax resolution process take?",
    answer:
      "The timeline depends on the complexity of your case. Simple resolutions can take 2–4 months, while complex Offer in Compromise cases may take 6–12 months. However, we take immediate action within 24–48 hours to stop active collections, levies, or garnishments.",
  },
  {
    question: "Do I have to speak with the IRS myself?",
    answer:
      "No. Once you hire SympleTax, we file a Power of Attorney (Form 2848) with the IRS. This legally authorizes us to speak and negotiate on your behalf. You can stop taking their calls and let us handle all correspondence.",
  },
  {
    question: "What is an Offer in Compromise (OIC)?",
    answer:
      "An Offer in Compromise is an IRS program that allows qualified taxpayers to settle their full tax debt for a fraction of what they owe. Qualification is based on your income, expenses, and asset equity. We have a strong track record of negotiating successful settlements.",
  },
  {
    question: "Can you stop my wage garnishment immediately?",
    answer:
      "Yes. Wage garnishments and bank levies are often the most urgent problems. We can typically secure a release of levy within 24 to 48 hours of being retained, provided we can demonstrate a path toward resolution or financial hardship to the IRS.",
  },
  {
    question: "What makes SympleTax different from other companies?",
    answer:
      "Unlike firms that rely on sales reps, every case at SympleTax is handled directly by a licensed Enrolled Agent or CPA. We offer transparent, flat-fee pricing and a results-first guarantee. We focus on measurable outcomes — not just paperwork.",
  },
];

export function HomeFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-[120px]">
      <div className="max-w-[1330px] mx-auto px-[70px]">
        <div className="flex flex-col lg:flex-row gap-[120px] items-start">

          {/* Left: Sticky heading */}
          <div className="lg:w-[450px] shrink-0 sticky top-[120px]">
            <div className="flex flex-col gap-[22px]">
              <div className="flex items-center gap-[10px]">
                <div className="bg-[#2c3e50] h-px w-[35px]" />
                <span
                  className="font-['Inter'] font-medium uppercase text-[#2c3e50]"
                  style={{ fontSize: "14px", letterSpacing: "0.05em" }}
                >
                  Common Inquiries
                </span>
              </div>
              <h2
                className="font-['Inter'] font-bold text-[#2C3E50] leading-[1.08]"
                style={{ fontSize: "clamp(36px, 4vw, 48px)", textWrap: 'balance', letterSpacing: "-1.5px" }}
              >
                Everything About <span className="text-[#00838F]">Tax Resolution</span>
              </h2>
              <p
                className="font-['Inter'] font-normal text-[#636363] leading-[1.65] mt-4 max-w-[400px]"
                style={{ fontSize: "16px", letterSpacing: "-0.3px" }}
              >
                Navigating the IRS can feel overwhelming. Here are the questions our clients ask most often.
              </p>
              <div className="pt-8">
                <Link
                  to="/contact"
                  className="bg-[#00838F] inline-flex items-center gap-[10px] px-8 py-4 rounded-full shadow-lg shadow-[#00838F]/20 transition-transform hover:scale-105 group"
                >
                  <span className="font-['Inter'] font-semibold text-white text-[16px]">
                    Speak with an agent
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Premium FAQ Accordion */}
          <div className="flex-1 w-full flex flex-col gap-4">
            {HOME_FAQS.map((faq, idx) => {
              const isOpen = activeIndex === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-[#F7F7F7] rounded-xl overflow-hidden transition-all duration-300 border border-transparent hover:border-[#00838F]/10"
                >
                  <button
                    onClick={() => setActiveIndex(isOpen ? null : idx)}
                    className="flex items-center gap-6 w-full text-left px-8 py-6 group cursor-pointer"
                  >
                    <span className="font-['Inter'] font-bold text-[#00838F] text-[22px] shrink-0">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className={`font-['Inter'] font-semibold text-[18px] flex-grow transition-colors duration-300 ${isOpen ? 'text-[#00838F]' : 'text-[#2C3E50]'}`}>
                      {faq.question}
                    </span>
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#00838F] text-white rotate-180' : 'bg-white text-[#2C3E50] shadow-sm'}`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pl-[84px] pr-12">
                          <p className="font-['Inter'] font-normal text-[16px] text-[#636363] leading-[1.7] max-w-[650px]">
                            {faq.answer}
                          </p>
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
    </section>
  );
}
