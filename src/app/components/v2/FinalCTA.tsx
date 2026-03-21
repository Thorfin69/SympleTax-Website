import { motion } from "motion/react";
import { Link } from "react-router";
import { PaintStreak } from "../ui/PaintStreak";

export function FinalCTA() {
  return (
    <section className="overflow-hidden relative" style={{ backgroundColor: "#f5f1e8" }}>

      {/* Top: cream section with huge bold text */}
      <div className="max-w-[1330px] mx-auto px-[70px] pt-[120px] pb-[80px] relative">

        {/* Teal circle blob — top right decorative */}
        <div
          className="absolute top-[-60px] right-[-40px] rounded-full pointer-events-none"
          style={{ width: "320px", height: "320px", backgroundColor: "#00A4A4", opacity: 0.12 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-start gap-[32px] max-w-[800px]"
        >
          {/* Pill badge */}
          <div className="inline-flex items-center border-[1.5px] border-[#0f172a] rounded-[50px] px-[16px] py-[7px]">
            <span
              className="font-['Outfit'] font-semibold text-[#0f172a]"
              style={{ fontSize: "13px", letterSpacing: "0.04em" }}
            >
              get started
            </span>
          </div>

          {/* Massive headline — like the FB ad */}
          <h2
            className="font-['Outfit'] font-black text-[#0f172a] leading-[1.0]"
            style={{ fontSize: "clamp(48px, 6vw, 80px)", letterSpacing: "-3px" }}
          >
            Stop Dealing<br />
            With The IRS{" "}
            <PaintStreak color="blue-gray">Alone.</PaintStreak>
          </h2>

          <p
            className="font-['Inter'] font-normal text-[#475569] leading-[1.65]"
            style={{ fontSize: "18px", letterSpacing: "-0.3px", maxWidth: "560px" }}
          >
            Talk to a tax relief expert today — completely free, no pressure, no obligation.
          </p>

          {/* CTA Row */}
          <div className="flex flex-wrap items-center gap-[20px]">
            <Link
              to="/contact"
              className="bg-[#00A4A4] hover:bg-[#007a7a] text-white font-['Outfit'] font-bold rounded-full px-[36px] transition-all duration-300 shadow-[0_8px_24px_rgba(0,164,164,0.3)] hover:shadow-[0_12px_32px_rgba(0,164,164,0.4)]"
              style={{ paddingTop: "18px", paddingBottom: "18px", fontSize: "17px" }}
            >
              Get My Free Consultation
            </Link>
            <span
              className="font-['Inter'] text-[#94a3b8]"
              style={{ fontSize: "14px" }}
            >
              No credit card. No commitment. Just answers.
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom: teal bar — mirrors trust strip from FB ad */}
      <div style={{ backgroundColor: "#00A4A4" }}>
        <div className="max-w-[1330px] mx-auto px-[70px] py-[28px]">
          <div className="flex flex-wrap items-center justify-between gap-[24px]">
            {[
              { icon: "🔒", text: "256-bit encryption" },
              { icon: "📋", text: "100% Online. No Pressure. Fully Secured and Confidential." },
              { icon: "⭐", text: "Licensed CPAs — Not Enrolled Agents" },
              { icon: "💬", text: "Free Consultation — No Upfront Fees" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-[10px]">
                <span style={{ fontSize: "18px" }}>{item.icon}</span>
                <span
                  className="font-['Inter'] font-medium text-white/90"
                  style={{ fontSize: "13px" }}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
