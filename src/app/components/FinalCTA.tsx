import { motion } from "motion/react";
import { Link } from "react-router";

export function FinalCTA() {
  return (
    <section className="py-[120px] bg-[#f7f7f7] relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-40">
        <div
          className="w-full h-full bg-gradient-to-br from-[#00838F]/15 to-transparent blur-[80px] rounded-full"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-[1330px] mx-auto px-[70px] relative">
        <div className="flex flex-col items-center text-center gap-[40px]">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-[10px]"
          >
            <div className="bg-[#2c3e50] h-px w-[35px]" />
            <span
              className="font-['Inter'] font-medium uppercase text-[#2c3e50]"
              style={{ fontSize: "14px", letterSpacing: "0.05em" }}
            >
              Get Started Today
            </span>
            <div className="bg-[#2c3e50] h-px w-[35px]" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Inter'] font-semibold text-[#2c3e50] max-w-[700px]"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.1", letterSpacing: "-2px", textWrap: 'balance' }}
          >
            Take Control of Your Financial Future Today
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-['Inter'] font-normal text-[#636363] leading-[1.65] max-w-[560px]"
            style={{ fontSize: "16px", letterSpacing: "-0.3px" }}
          >
            Thousands of Americans have already resolved their IRS debt with our licensed professionals. A free, confidential consultation is your first step toward financial peace of mind.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="bg-[#017984] inline-flex items-center gap-[10px] px-8 rounded-full"
              style={{ paddingTop: "17px", paddingBottom: "17px" }}
            >
              <span
                className="font-['Inter'] font-semibold text-white leading-[17.6px] tracking-[-0.32px]"
                style={{ fontSize: "16px" }}
              >
                Schedule a Free Consultation
              </span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 13L13 3M13 3H5M13 3V11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 pt-4"
          >
            {[
              "Licensed Enrolled Agents & CPAs",
              "No Upfront Fees",
              "Free Confidential Consultation",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8.5L6.5 12L13 5" stroke="#017984" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span
                  className="font-['Inter'] font-normal text-[#636363]"
                  style={{ fontSize: "14px", letterSpacing: "-0.28px" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
