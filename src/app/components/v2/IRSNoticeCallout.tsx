import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const NOTICE_TYPES = [
  { code: "CP2000", label: "Proposed Changes to Your Return" },
  { code: "CP90", label: "Final Notice — Intent to Levy" },
  { code: "CP503", label: "Second Notice — Balance Due" },
  { code: "LT11", label: "Final Notice Before Levy" },
  { code: "1058", label: "Last Chance Before Collection" },
  { code: "CP14", label: "First Balance Due Notice" },
];

export function IRSNoticeCallout() {
  return (
    <section className="bg-white py-[60px]">
      <div className="max-w-[1330px] mx-auto px-[70px]">

        {/* Full-width photo card */}
        <div className="relative rounded-[12px] overflow-hidden" style={{ height: "640px" }}>

          {/* Background photo */}
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1800&h=900&fit=crop&q=85"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Full dark overlay */}
          <div className="absolute inset-0 bg-[#0f172a]/85" />

          {/* Right-side gradient to make notice list readable */}
          <div className="absolute inset-0 bg-gradient-to-l from-[#0f172a]/70 via-transparent to-transparent" />

          {/* Floating card — left side */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="absolute top-[48px] left-[48px] bottom-[48px] flex flex-col justify-between rounded-[10px] p-[40px] shadow-[0_24px_64px_rgba(0,0,0,0.4)] border border-white/10"
            style={{ width: "400px", backgroundColor: "#0c4a6e" }}
          >
            {/* Top: eyebrow + heading + paragraph */}
            <div className="flex flex-col gap-[20px]">
              <div className="flex items-center gap-[10px]">
                <div className="bg-[#00A4A4] h-px w-[28px]" />
                <span
                  className="font-['Inter'] font-medium uppercase text-[#00A4A4]"
                  style={{ fontSize: "12px", letterSpacing: "0.08em" }}
                >
                  Emergency Response
                </span>
              </div>

              <h2
                className="font-['Inter'] font-bold text-white leading-[1.08]"
                style={{ fontSize: "36px", letterSpacing: "-1.5px" }}
              >
                Got a Letter From the IRS or State?
              </h2>

              <p
                className="font-['Inter'] font-normal text-white/70 leading-[1.65]"
                style={{ fontSize: "15px", letterSpacing: "-0.3px" }}
              >
                Don't panic — but don't wait. Whether it's an audit, a levy notice, or a balance due, our licensed experts are ready to decode it and respond within 24 hours.
              </p>
            </div>

            {/* Bottom: CTA */}
            <div className="flex flex-col gap-[16px]">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#00A4A4] to-[#007a7a] hover:from-[#007a7a] hover:to-[#005f5f] inline-flex items-center gap-[10px] px-6 rounded-full w-fit transition-all shadow-[0_8px_24px_rgba(0,164,164,0.3)]"
                style={{ paddingTop: "15px", paddingBottom: "15px" }}
              >
                <span
                  className="font-['Inter'] font-semibold text-white whitespace-nowrap"
                  style={{ fontSize: "15px", letterSpacing: "-0.3px" }}
                >
                  Analyze My Notice
                </span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 13L13 3M13 3H5M13 3V11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <div className="flex items-center gap-[8px]">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span
                  className="font-['Inter'] font-normal text-white/50"
                  style={{ fontSize: "13px", letterSpacing: "-0.2px" }}
                >
                  Free 24h review
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right side: IRS notice list over photo */}
          <div className="absolute top-0 right-0 bottom-0 flex flex-col justify-center" style={{ left: "520px", paddingRight: "64px" }}>
            {NOTICE_TYPES.map((notice, idx) => (
              <motion.div
                key={notice.code}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="group"
              >
                <Link
                  to="/contact"
                  className="flex items-center gap-[32px] py-[22px] border-b border-white/10 hover:border-white/30 transition-colors"
                >
                  <span
                    className="font-['Inter'] font-semibold shrink-0 w-[80px] text-[#00A4A4]"
                    style={{ fontSize: "14px", letterSpacing: "-0.2px" }}
                  >
                    {notice.code}
                  </span>
                  <span
                    className="font-['Inter'] font-semibold text-white/90 group-hover:text-white transition-colors flex-1"
                    style={{ fontSize: "18px", letterSpacing: "-0.5px" }}
                  >
                    {notice.label}
                  </span>
                  <svg className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 13L13 3M13 3H5M13 3V11" stroke="#00A4A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
