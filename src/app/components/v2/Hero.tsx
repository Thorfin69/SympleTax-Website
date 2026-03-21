import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { PaintStreak } from "../ui/PaintStreak";

const AVATARS = [
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=80&h=80&fit=crop&crop=face&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face&q=80",
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&fit=crop&crop=face&q=80",
];

export function Hero() {
  return (
    <section
      className="relative flex items-center overflow-hidden bg-[#0f172a]"
      style={{ minHeight: "calc(100vh - 72px)" }}
    >
      {/* Background — real photo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1800&h=1000&fit=crop&q=85"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Gradient overlay — heavy left (text), fades right so people show through */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15, 23, 42, 0.97) 0%, rgba(15, 23, 42, 0.90) 32%, rgba(15, 23, 42, 0.55) 60%, rgba(15, 23, 42, 0.18) 100%)",
        }}
      />

      {/* Content */}
      <div className="max-w-[1330px] mx-auto px-[70px] relative z-10 w-full">
        <div className="flex flex-col gap-[32px] items-start max-w-[620px]">

          {/* Pill badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <span
              className="inline-flex items-center font-['Outfit'] font-bold text-white border-[1.5px] border-white/50 rounded-[50px] px-[16px] py-[7px] uppercase"
              style={{ fontSize: "13px", letterSpacing: "0.06em" }}
            >
              tax help
            </span>
          </motion.div>

          {/* Headline + body */}
          <div className="flex flex-col gap-[20px] items-start w-full">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-['Outfit'] font-black text-white"
              style={{
                fontSize: "clamp(48px, 6vw, 80px)",
                lineHeight: "1.04",
                letterSpacing: "-2.5px",
              }}
            >
              Get the <PaintStreak color="pink">IRS</PaintStreak> Off{" "}
              <span className="font-['Outfit'] font-black text-[#00A4A4]">
                Your Back
              </span>{" "}
              — For Good.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="font-['Inter'] font-normal text-white/75"
              style={{
                fontSize: "20px",
                lineHeight: "1.55",
                letterSpacing: "-0.3px",
                maxWidth: "440px",
              }}
            >
              We resolve IRS and state tax debt fast —<br />
              free consultation, no obligation.
            </motion.p>
          </div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex items-center gap-[20px]"
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-[#00A4A4] to-[#007a7a] hover:from-[#007a7a] hover:to-[#005f5f] inline-flex items-center gap-[10px] px-[28px] rounded-full shadow-[0_8px_24px_rgba(0,164,164,0.3)] hover:shadow-[0_12px_32px_rgba(0,164,164,0.4)] hover:scale-[1.02] transition-all duration-300"
              style={{ paddingTop: "17px", paddingBottom: "17px" }}
            >
              <span
                className="font-['Inter'] font-semibold text-white leading-[17.6px] tracking-[-0.32px]"
                style={{ fontSize: "16px" }}
              >
                Get started
              </span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 13L13 3M13 3H5M13 3V11"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center px-[24px] rounded-full border border-white/40 text-white hover:bg-white/10 transition-all duration-300"
              style={{ paddingTop: "17px", paddingBottom: "17px" }}
            >
              <span
                className="font-['Inter'] font-semibold text-white leading-[17.6px] tracking-[-0.32px]"
                style={{ fontSize: "16px" }}
              >
                Explore our services
              </span>
            </Link>
          </motion.div>

          {/* Social proof avatars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="flex gap-[20px] items-center"
          >
            <div className="relative w-[100px] h-[40px] shrink-0">
              {AVATARS.map((src, i) => (
                <div
                  key={i}
                  className="absolute overflow-hidden rounded-full border-2 border-white"
                  style={{ left: `${i * 30}px`, top: 0, width: 40, height: 40 }}
                >
                  <ImageWithFallback
                    src={src}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-row items-baseline gap-[6px]">
              <span
                className="font-['Outfit'] font-bold text-white leading-[24px]"
                style={{ fontSize: "24px" }}
              >
                100+
              </span>
              <span
                className="font-['Inter'] font-normal text-white/75"
                style={{ fontSize: "16px", letterSpacing: "-0.96px" }}
              >
                Satisfied clients
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
