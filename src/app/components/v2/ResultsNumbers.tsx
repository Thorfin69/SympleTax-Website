import { motion, useSpring, useTransform, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const MAP_AVATARS = [
  { src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=80&h=80&fit=crop&crop=face&q=80", top: "30%", left: "15%" },
  { src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face&q=80", top: "16%", right: "18%" },
  { src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&fit=crop&crop=face&q=80", top: "50%", right: "28%" },
  { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face&q=80", top: "65%", left: "6%" },
];

const CTA_AVATARS = [
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=80&h=80&fit=crop&crop=face&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face&q=80",
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&fit=crop&crop=face&q=80",
];

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const spring = useSpring(0, { mass: 1, stiffness: 60, damping: 25 });
  const transformed = useTransform(spring, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) spring.set(value);
  }, [isInView, spring, value]);

  useEffect(() => {
    return transformed.on("change", setDisplay);
  }, [transformed]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export function ResultsNumbers() {
  return (
    <section className="bg-white py-[120px]">
      <div className="max-w-[1330px] mx-auto px-[70px]">
        <div className="flex items-stretch gap-[80px]">

          {/* Left: World Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative min-h-[480px] min-w-0"
          >
            <div className="w-full h-full relative rounded-[8px] overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.15)]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=900&h=500&fit=crop&q=80"
                alt="Clients across the nation"
                className="w-full h-full object-cover rounded-[8px]"
                style={{ opacity: 0.85 }}
              />
            </div>

            {/* Floating Avatars */}
            {MAP_AVATARS.map((avatar, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  scale: { type: "spring", delay: idx * 0.12 + 0.4 },
                  opacity: { delay: idx * 0.12 + 0.4, duration: 0.3 },
                  y: { type: "tween", ease: "easeInOut", repeat: Infinity, duration: 3, delay: idx * 0.7 },
                }}
                animate={{ y: [0, -5, 0] }}
                style={{
                  top: avatar.top,
                  left: avatar.left,
                  right: avatar.right,
                  position: "absolute",
                }}
                className="w-[52px] h-[52px] rounded-full overflow-hidden border-2 border-white shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
              >
                <ImageWithFallback src={avatar.src} alt="" className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Text + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="w-[520px] shrink-0 flex flex-col gap-[40px]"
          >
            {/* Header */}
            <div className="flex flex-col gap-[22px]">
              <div className="flex items-center gap-[10px]">
                <div className="bg-[#00A4A4] h-px w-[35px]" />
                <span
                  className="font-['Inter'] font-medium uppercase text-[#00A4A4]"
                  style={{ fontSize: "14px", letterSpacing: "0.05em" }}
                >
                  Proven Performance
                </span>
              </div>
              <h2
                className="font-['Inter'] font-bold text-[#0f172a] leading-[1.08]"
                style={{ fontSize: "40px", textWrap: 'balance', letterSpacing: "-1.5px" }}
              >
                Our Valued Clients{" "}
                <span className="text-[#00A4A4]">Trust Our Results</span>
              </h2>
              <p
                className="font-['Inter'] font-normal text-[#475569] leading-[1.65]"
                style={{ fontSize: "16px", letterSpacing: "-0.3px" }}
              >
                We help individuals and businesses across the country navigate complex tax situations with confidence. Our experts offer real resolution — not just paperwork.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-x-[60px] gap-y-[30px]">
              {[
                { value: 98, suffix: "%", label: "Client Satisfaction Rate" },
                { value: 10, suffix: "+", label: "Years of IRS Experience" },
                { value: 500, suffix: "M+", label: "In Tax Debt Resolved" },
                { value: 12000, suffix: "+", label: "Clients Helped Nationwide" },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                  className="flex flex-col gap-[4px]"
                >
                  <span
                    className="font-['Inter'] font-bold text-[#00A4A4] leading-[1.1]"
                    style={{ fontSize: "32px", letterSpacing: "-1px" }}
                  >
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span
                    className="font-['Inter'] font-normal text-[#475569] leading-[1.4]"
                    style={{ fontSize: "14px", letterSpacing: "-0.2px" }}
                  >
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Row */}
            <div className="flex items-center gap-[24px]">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#00A4A4] to-[#007a7a] hover:from-[#007a7a] hover:to-[#005f5f] inline-flex items-center gap-[10px] px-7 rounded-full shadow-[0_8px_24px_rgba(0,164,164,0.3)] hover:shadow-[0_12px_32px_rgba(0,164,164,0.4)] transition-all"
                style={{ paddingTop: "17px", paddingBottom: "17px" }}
              >
                <span
                  className="font-['Inter'] font-semibold text-white whitespace-nowrap"
                  style={{ fontSize: "16px", letterSpacing: "-0.32px" }}
                >
                  Schedule Consultation
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 13L13 3M13 3H5M13 3V11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {CTA_AVATARS.map((src, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full overflow-hidden border-2 border-white"
                    >
                      <ImageWithFallback src={src} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <span
                  className="font-['Inter'] font-normal text-[#475569]"
                  style={{ fontSize: "14px", letterSpacing: "-0.28px" }}
                >
                  Join 12,000+ resolved cases
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
