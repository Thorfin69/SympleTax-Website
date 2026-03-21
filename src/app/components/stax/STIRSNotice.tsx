import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowRight, Mail } from "lucide-react";

export function STIRSNotice() {
  return (
    <section className="bg-[#f9fafb] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[1.5px] bg-[#059669]" />
              <span className="font-['Inter'] font-medium text-[14px] uppercase tracking-wider text-[#059669]">
                IRS Correspondence
              </span>
            </div>

            {/* Heading */}
            <h2
              className="font-['Inter'] font-bold text-[#0b0b0b] leading-[1.1] tracking-tight mb-7"
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                textWrap: "balance",
              }}
            >
              Got an IRS Letter?
            </h2>

            {/* Body paragraphs */}
            <div className="space-y-5 mb-10">
              <p className="font-['Inter'] text-[17px] text-[#4b5563] leading-[1.7]">
                That letter in the mail from the IRS is not something you can ignore. Every IRS
                notice comes with a deadline — and missing it makes your situation significantly
                worse.
              </p>
              <p className="font-['Inter'] text-[17px] text-[#4b5563] leading-[1.7]">
                Our licensed CPAs can decode any IRS notice in minutes and tell you exactly what
                it means, what your options are, and what happens next. No jargon. No fear. Just
                answers.
              </p>
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-[#059669] text-white px-8 py-4 rounded-full font-['Inter'] font-semibold text-[16px] hover:bg-[#047857] transition-colors shadow-lg shadow-[#059669]/20 group"
            >
              Find Out What It Means
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right: Image + floating card */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            className="relative rounded-2xl overflow-hidden h-[400px]"
          >
            {/* Main image */}
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&h=500&fit=crop&q=80"
              alt="Professional reviewing IRS documents"
              className="w-full h-full object-cover"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b]/40 to-transparent" />

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
              className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-5 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-[#059669]/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#059669]" />
                </div>
                <div>
                  <div className="font-['Inter'] font-bold text-[15px] text-[#0b0b0b]">
                    IRS Letter Received?
                  </div>
                  <div className="font-['Inter'] text-[13px] text-[#4b5563]">
                    We respond within 24 hours
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
