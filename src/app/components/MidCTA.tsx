import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function MidCTA() {
  return (
    <section className="bg-white py-[60px]">
      <div className="max-w-[1330px] mx-auto px-[70px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[12px]"
          style={{ height: "420px" }}
        >
          {/* Background photo */}
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&h=600&fit=crop&q=85"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#0b0b0b]/72" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-[64px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[1.5px] bg-[#00838F]" />
              <span className="font-['Inter'] font-medium text-[13px] uppercase tracking-widest text-[#00838F]">
                Free consultation
              </span>
              <div className="w-8 h-[1.5px] bg-[#00838F]" />
            </div>

            {/* Heading */}
            <h2
              className="font-['Inter'] font-bold text-white leading-[1.08] mb-4"
              style={{ fontSize: "clamp(32px, 3.5vw, 48px)", letterSpacing: "-1.5px" }}
            >
              Stop Fighting the IRS Alone.
            </h2>

            {/* Paragraph */}
            <p
              className="font-['Inter'] text-white/65 leading-[1.65] mb-8"
              style={{ fontSize: "16px", letterSpacing: "-0.3px", maxWidth: "480px" }}
            >
              Our licensed professionals have resolved over $500M in tax debt.
              A free consultation costs you nothing — inaction costs you everything.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-4">
              <Link
                to="/contact"
                className="bg-[#00838F] text-white px-7 py-3.5 rounded-full font-['Inter'] font-semibold text-[15px] hover:bg-[#017984] transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/services"
                className="border border-white/40 text-white px-7 py-3.5 rounded-full font-['Inter'] font-semibold text-[15px] hover:border-white transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
