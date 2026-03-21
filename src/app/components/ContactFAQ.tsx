import { motion } from "motion/react";

const faqs = [
  {
    question: "What industries do you specialize in?",
    answer: "We specialize in a wide range of industries including fintech, healthcare, e-commerce, and green energy.",
  },
  {
    question: "What industries do you specialize in for clients?",
    answer: "Our expertise spans across various sectors, ensuring tailored financial strategies for every client.",
  },
  {
    question: "How can your services help my business grow?",
    answer: "We help businesses optimize their cash flow and implement growth-focused strategies for long-term success.",
  },
  {
    question: "How do I get started with your services?",
    answer: "Simply contact us for an initial consultation where we'll discuss your needs and how we can help.",
  },
  {
    question: "Do you offer customized financial solutions?",
    answer: "Yes, we provide fully customized financial solutions that align with your specific goals and needs.",
  },
  {
    question: "Do you offer support if I need assistance?",
    answer: "Our team provides ongoing support to ensure your financial strategies remain effective over time.",
  },
  {
    question: "How do I get started with your services?",
    answer: "You can start by filling out our contact form or calling our expert team for immediate assistance.",
  },
  {
    question: "What makes your services different from others?",
    answer: "Our combination of deep expertise, personalized approach, and focus on long-term results sets us apart.",
  },
];

export function ContactFAQ() {
  return (
    <section className="py-24 md:py-32 bg-[#F7F7F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col items-center gap-16">
        <div className="flex flex-col gap-6 text-center max-w-2xl">
          <div className="flex items-center gap-3 justify-center">
            <div className="w-9 h-px bg-[#2C3E50]" />
            <span className="font-['Inter'] font-medium text-[14px] uppercase tracking-[-0.28px] text-[#2C3E50]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <div className="w-9 h-px bg-[#2C3E50]" />
          </div>
          <h2
            className="font-['Inter'] font-semibold text-[#2C3E50] tracking-[-2px] leading-tight"
            style={{ fontSize: "clamp(32px, 3.5vw, 48px)" }}
          >
            Everything you need to know <br />
            about our services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 w-full">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="bg-white p-6 md:p-8 rounded-[12px] flex items-center justify-between group cursor-pointer hover:shadow-lg transition-all duration-300 border border-transparent"
            >
              <h3 className="font-['Inter'] font-bold text-[#2C3E50] text-[18px] md:text-[20px] tracking-[-0.4px] pr-6">
                {faq.question}
              </h3>
              <div className="w-10 h-10 bg-[#00838F] rounded-full flex items-center justify-center text-white shrink-0">
                <ArrowIcon />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 17L17 7M17 7H8M17 7V16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
