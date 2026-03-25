import { motion } from "motion/react";
import { Link } from "react-router";
import heroBannerImg from "../../../assets/hero-banner-img.png";

// 3 circles — centers at the bottom-center of the section, top halves visible
// Inner appears first, then middle, then outer
// Desktop sizes: 600px, 860px, 1120px
// Mobile sizes (~55%): 330px, 473px, 616px
const CIRCLES = [
  { size: 600,  opacity: 0.14, delay: 0,   mobileSize: 330  },
  { size: 860,  opacity: 0.09, delay: 0.4, mobileSize: 473  },
  { size: 1120, opacity: 0.05, delay: 0.8, mobileSize: 616  },
];

export function Hero() {
  return (
    <section
      className="relative overflow-hidden flex flex-col"
      style={{ minHeight: "100vh", backgroundColor: "#00A4A4" }}
    >
      {/* ── Concentric circles ─────────────────────────────────────────────────
          Center point = bottom-center of section.
          Each circle is positioned with its center AT (50%, 100%) of the section,
          so we see the upper half arcing upward from behind the family photo.
          Mobile uses smaller sizes so all 3 circles are visible.
      ─────────────────────────────────────────────────────────────────────── */}
      {CIRCLES.map(({ size, opacity, delay, mobileSize }) => (
        <motion.div
          key={size}
          className="absolute rounded-full pointer-events-none hidden max-[639px]:block"
          style={{
            width: `${mobileSize}px`,
            height: `${mobileSize}px`,
            background: `rgba(255,255,255,${opacity})`,
            bottom: 0,
            left: "50%",
            marginLeft: `-${mobileSize / 2}px`,
            transform: "translateY(50%)",
            zIndex: 1,
          }}
          initial={{ opacity: 0, scale: 0.72 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay, ease: "easeOut" }}
          aria-hidden="true"
        />
      ))}
      {CIRCLES.map(({ size, opacity, delay }) => (
        <motion.div
          key={`desktop-${size}`}
          className="absolute rounded-full pointer-events-none min-[640px]:block hidden"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            background: `rgba(255,255,255,${opacity})`,
            bottom: 0,
            left: "50%",
            marginLeft: `-${size / 2}px`,
            transform: "translateY(50%)",
            zIndex: 1,
          }}
          initial={{ opacity: 0, scale: 0.72 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay, ease: "easeOut" }}
          aria-hidden="true"
        />
      ))}

      {/* TOP: Centered large headline */}
      <div className="relative z-10 flex flex-col items-center text-center pt-[110px] lg:pt-[160px] px-[25px] lg:px-[40px]">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-[10px] mb-[20px] lg:mb-[28px]"
        >
          <div className="bg-white/40 h-px w-[30px]" />
          <span
            className="font-['DM_Sans'] font-medium uppercase text-white/75"
            style={{ fontSize: "12px", letterSpacing: "0.08em" }}
          >
            IRS Tax Relief Experts
          </span>
          <div className="bg-white/40 h-px w-[30px]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-['DM_Sans'] font-bold text-white leading-[1.08]"
          style={{
            fontSize: "clamp(30px, 8vw, 88px)",
            letterSpacing: "-2px",
            maxWidth: "900px",
          }}
        >
          Let's Resolve Your Tax Debt
        </motion.h1>

        {/* Mobile CTA — visible only on mobile, below headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-[12px] mt-[28px] lg:hidden"
        >
          <Link
            to="https://ti.sympletax.com"
            className="inline-flex items-center justify-center bg-white text-[#00A4A4] font-['DM_Sans'] font-bold rounded-full hover:scale-[1.02] hover:shadow-[0_16px_40px_rgba(0,0,0,0.2)] transition-all duration-300 shadow-[0_8px_28px_rgba(0,0,0,0.15)] w-full"
            style={{ fontSize: "16px", padding: "16px 40px", letterSpacing: "-0.3px" }}
            aria-label="Get started with a free tax consultation"
          >
            Get Started
          </Link>
          <p className="font-['DM_Sans'] font-normal text-white/60 text-center" style={{ fontSize: "12px" }}>
            &#9201; Free consultation · No credit card required
          </p>
        </motion.div>
      </div>

      {/* Mobile: Social proof first, then image at bottom right */}
      <div className="lg:hidden relative z-10 flex flex-col mt-[28px] flex-1">
        {/* Mobile social proof - ABOVE image */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-[24px] px-[25px] flex-wrap z-20 relative"
        >
          <div className="flex items-center gap-[6px]">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="#FFD700" aria-hidden="true">
                <path d="M10 1l2.39 4.84 5.34.78-3.86 3.77.91 5.31L10 13.27l-4.78 2.51.91-5.31L2.27 6.62l5.34-.78L10 1z" />
              </svg>
            ))}
            <span className="font-['DM_Sans'] font-semibold text-white ml-[4px]" style={{ fontSize: "13px" }}>5.0 Stars</span>
          </div>
          {["Licensed CPAs & EAs", "$99 Flat Fee"].map((badge) => (
            <div key={badge} className="flex items-center gap-[6px]">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="8" fill="rgba(255,255,255,0.2)" />
                <path d="M5 8l2.5 2.5L11 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-['DM_Sans'] font-medium text-white/75" style={{ fontSize: "12px" }}>{badge}</span>
            </div>
          ))}
        </motion.div>

        {/* Family image - positioned at bottom center (20% larger on mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.25 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[84%] max-w-[336px] z-10"
        >
          <img
            src={heroBannerImg}
            alt="Happy family relieved from IRS tax debt"
            width={1426}
            height={858}
            decoding="async"
            fetchPriority="high"
            className="w-full object-contain object-bottom"
            style={{ maxHeight: "54vh" }}
          />
        </motion.div>
      </div>

      {/* DESKTOP: CTA left | Image center | Social proof right */}
      <div className="hidden lg:flex relative z-10 flex-1 items-end justify-between" style={{ paddingBottom: "0px" }}>

        {/* Left: CTA */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col gap-[12px] w-fit"
          style={{ paddingLeft: "80px", paddingBottom: "80px" }}
        >
          <Link
            to="https://ti.sympletax.com"
            className="inline-flex items-center justify-center bg-white text-[#00A4A4] font-['DM_Sans'] font-bold rounded-full hover:scale-[1.02] hover:shadow-[0_16px_40px_rgba(0,0,0,0.2)] transition-all duration-300 shadow-[0_8px_28px_rgba(0,0,0,0.15)] w-full"
            style={{ fontSize: "16px", padding: "18px 48px", letterSpacing: "-0.3px" }}
            aria-label="Get started with a free tax consultation"
          >
            Get Started
          </Link>
          <p
            className="font-['DM_Sans'] font-normal text-white/60 text-center w-full"
            style={{ fontSize: "14px" }}
          >
            &#9201; Free consultation · No credit card required
          </p>
        </motion.div>

        {/* Center: Family image — sits in front of circles (z-10 inherited) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
          className="relative flex items-end justify-center"
          style={{ flex: "0 0 auto", maxWidth: "820px", width: "56vw" }}
        >
          <img
            src={heroBannerImg}
            alt="Happy family relieved from IRS tax debt"
            width={1426}
            height={858}
            decoding="async"
            fetchPriority="high"
            className="w-full object-contain object-bottom"
            style={{ maxHeight: "88vh" }}
          />
        </motion.div>

        {/* Right: Social proof */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col gap-[27px] items-end"
          style={{ paddingRight: "80px", paddingBottom: "80px", transform: "scale(0.95)", transformOrigin: "right bottom" }}
        >
          <div className="flex flex-col items-end gap-[11px]">
            <div className="flex items-center gap-[6px]">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="28" height="28" viewBox="0 0 20 20" fill="#FFD700" aria-hidden="true">
                  <path d="M10 1l2.39 4.84 5.34.78-3.86 3.77.91 5.31L10 13.27l-4.78 2.51.91-5.31L2.27 6.62l5.34-.78L10 1z" />
                </svg>
              ))}
            </div>
            <span className="font-['DM_Sans'] font-semibold text-white" style={{ fontSize: "21px" }}>
              5.0 Stars
            </span>
            <span className="font-['DM_Sans'] font-normal text-white/60" style={{ fontSize: "18px" }}>
              Licensed &amp; Accredited
            </span>
          </div>

          <div className="flex flex-col gap-[13px]">
            {[
              "Licensed CPAs &amp; EAs",
              "$99 Flat Fee — No Surprises",
              "256-bit Encrypted &amp; Secure",
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-[11px] justify-end">
                <span
                  className="font-['DM_Sans'] font-medium text-white/75"
                  style={{ fontSize: "18px" }}
                  dangerouslySetInnerHTML={{ __html: badge }}
                />
                <svg width="22" height="22" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="8" cy="8" r="8" fill="rgba(255,255,255,0.2)" />
                  <path d="M5 8l2.5 2.5L11 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
