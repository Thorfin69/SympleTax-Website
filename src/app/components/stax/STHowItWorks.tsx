import { motion } from "motion/react";
import { Link } from "react-router";
import { PhoneCall, ClipboardList, CheckCircle2, ArrowRight } from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "Free Consultation",
    description:
      "We review your full tax situation — IRS transcripts, notices, and history — at no cost and with zero obligation.",
    icon: PhoneCall,
  },
  {
    number: "02",
    title: "Custom Strategy",
    description:
      "We build a personalized resolution plan — whether that's an OIC, payment plan, penalty removal, or another program — tailored to your situation.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Resolution",
    description:
      "We negotiate directly with the IRS and handle all communication, paperwork, and follow-up — so you can move forward with your life.",
    icon: CheckCircle2,
  },
];

export function STHowItWorks() {
  return (
    <section className="bg-[#f9fafb] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-10 h-[1.5px] bg-[#059669]" />
            <span className="font-['Inter'] font-medium text-[14px] uppercase tracking-wider text-[#059669]">
              Our Process
            </span>
            <div className="w-10 h-[1.5px] bg-[#059669]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-['Inter'] font-bold text-[#0b0b0b] leading-[1.1] tracking-tight mb-5"
            style={{
              fontSize: "clamp(32px, 4vw, 56px)",
              textWrap: "balance",
            }}
          >
            3 Steps to Tax Relief
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            viewport={{ once: true }}
            className="font-['Inter'] text-[16px] md:text-[18px] text-[#4b5563] leading-relaxed max-w-xl mx-auto"
          >
            From your first call to full resolution — we handle everything.
          </motion.p>
        </div>

        {/* Step cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 relative">
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-[52px] left-[calc(16.66%+40px)] right-[calc(16.66%+40px)] h-[1.5px] bg-gradient-to-r from-[#059669]/20 via-[#059669] to-[#059669]/20" />

          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm relative flex flex-col items-center"
              >
                {/* Number circle */}
                <div className="w-16 h-16 bg-[#059669] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#059669]/20 relative z-10">
                  <span className="font-['Inter'] font-bold text-white text-[20px]">
                    {step.number}
                  </span>
                </div>

                {/* Icon below number circle */}
                <div className="flex justify-center mb-4">
                  <Icon className="w-8 h-8 text-[#059669]" />
                </div>

                {/* Title */}
                <h3
                  className="font-['Inter'] font-bold text-[22px] text-[#0b0b0b] text-center mb-4"
                  style={{ textWrap: "balance" }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-['Inter'] text-[16px] text-[#4b5563] leading-[1.7] text-center">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          viewport={{ once: true }}
          className="flex justify-center mt-14"
        >
          <Link
            to="/contact"
            className="bg-[#059669] text-white px-8 py-4 rounded-full font-['Inter'] font-semibold text-[16px] flex items-center gap-3 hover:bg-[#047857] transition-colors shadow-lg shadow-[#059669]/20"
          >
            Start With a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
