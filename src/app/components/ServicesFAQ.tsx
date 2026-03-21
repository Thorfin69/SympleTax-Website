import { motion } from "motion/react";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "What industries do you specialize in?",
    answer: "We specialize in a wide range of industries including fintech, healthcare, e-commerce, and green energy. Our experts tailor financial strategies to the unique challenges and opportunities of each sector.",
  },
  {
    question: "How can your services help my business grow?",
    answer: "Through expert financial planning, tax optimization, and risk management, we help businesses optimize their cash flow and implement growth-focused strategies that lead to sustainable long-term success.",
  },
  {
    question: "Do you offer customized financial solutions?",
    answer: "Yes, every business is unique. We provide fully customized financial solutions that align with your specific goals, market conditions, and operational needs.",
  },
  {
    question: "How do I get started with your services?",
    answer: "Getting started is easy! Simply click the 'See our process' button below or contact us to schedule an initial consultation where we'll discuss your needs and how we can help.",
  },
];

export function ServicesFAQ() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row gap-16">
        {/* Left Side - Content */}
        <div className="md:w-1/2 flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-px bg-[#00838F]" />
              <span className="font-['Inter'] font-medium text-[14px] uppercase tracking-wider text-[#00838F]">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h2
              className="font-['Inter'] font-semibold text-[#2C3E50] tracking-tight leading-tight"
              style={{ fontSize: "clamp(32px, 3.5vw, 48px)" }}
            >
              Everything you <br />
              need to know <br />
              about our services
            </h2>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#00838F] text-white px-8 py-4 rounded-full font-['Inter'] font-semibold flex items-center justify-center gap-3 self-start shadow-lg shadow-[#00838F]/20"
          >
            See our process <ArrowUpRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Right Side - FAQ Accordion */}
        <div className="md:w-1/2">
          <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`}
                className="bg-[#F7F7F7] border-none rounded-xl px-6 py-2 overflow-hidden"
              >
                <AccordionTrigger className="hover:no-underline py-4 text-left group">
                  <div className="flex items-center gap-6">
                    <span className="font-['Inter'] font-bold text-[#00838F] text-[20px]">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="font-['Inter'] font-semibold text-[#2C3E50] text-[18px]">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="font-['Inter'] text-[#636363] text-[16px] leading-relaxed pb-6 pl-14">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
