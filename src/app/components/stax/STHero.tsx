import { motion } from "motion/react";
import { Link } from "react-router";
import { Star, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const AVATARS = [
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=80&h=80&fit=crop&crop=face&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face&q=80",
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&fit=crop&crop=face&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face&q=80",
];

export function STHero() {
  return (
    <section className="relative bg-white overflow-hidden pt-28 pb-10 md:pb-12">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#059669] opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at center, #059669 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="flex items-center gap-12 lg:gap-16">

          {/* Left: Text Content */}
          <div className="flex-1 min-w-0">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-[1.5px] bg-[#059669]" />
              <span className="font-['Inter'] font-medium text-[14px] uppercase tracking-wider text-[#059669]">
                IRS Tax Relief Experts
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-['Inter'] font-bold text-[#0b0b0b] leading-[1.08] tracking-tight mb-5"
              style={{ fontSize: "clamp(36px, 4.5vw, 64px)", textWrap: "balance" }}
            >
              Get the IRS Off{" "}
              <span className="font-['Playfair_Display'] italic font-normal text-[#059669]">
                Your Back
              </span>{" "}
              — For Good.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-['Inter'] text-[#4b5563] leading-[1.6] mb-8 max-w-lg"
              style={{ fontSize: "20px" }}
            >
              SympleTax resolves IRS and state tax debt<br />
              with professionals who actually fight for you.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <Link
                to="/contact"
                className="bg-[#059669] text-white px-8 py-4 rounded-full font-['Inter'] font-semibold text-[16px] flex items-center gap-3 hover:bg-[#047857] transition-colors shadow-lg shadow-[#059669]/20"
              >
                Get My Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-[#0b0b0b] text-[#0b0b0b] px-8 py-4 rounded-full font-['Inter'] font-semibold text-[16px] flex items-center gap-3 hover:bg-[#0b0b0b] hover:text-white transition-all"
              >
                See How It Works
              </Link>
            </motion.div>

            {/* Social Proof Row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-8"
            >
              {/* Avatars + count */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {AVATARS.map((src, i) => (
                    <div
                      key={i}
                      className="w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-md"
                    >
                      <ImageWithFallback src={src} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="font-['Inter'] font-bold text-[18px] text-[#0b0b0b]">100+</div>
                  <div className="font-['Inter'] text-[13px] text-[#4b5563]">Satisfied clients</div>
                </div>
              </div>

              {/* Star rating */}
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <span className="font-['Inter'] text-[14px] text-[#4b5563]">
                  Trusted by thousands of taxpayers
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right: Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block w-[480px] xl:w-[540px] shrink-0"
          >
            <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&q=80"
                alt="Tax relief professional consultation"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b]/40 via-transparent to-transparent" />

              {/* Floating result badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute bottom-6 left-6 right-6 bg-white rounded-xl px-5 py-4 shadow-xl flex items-center gap-4"
              >
                <div className="w-10 h-10 bg-[#059669]/10 rounded-full flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 10l4 4 6-8" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="font-['Inter'] font-bold text-[#0b0b0b] text-[15px]">$500M+ in tax debt resolved</div>
                  <div className="font-['Inter'] text-[#4b5563] text-[13px]">Across 12,000+ cases nationwide</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
