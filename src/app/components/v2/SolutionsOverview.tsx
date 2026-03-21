import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const SERVICES = [
  { title: "IRS Tax Resolution & Defense", href: "/services" },
  { title: "Offer in Compromise Negotiations", href: "/services" },
  { title: "Penalty & Interest Abatement", href: "/services" },
  { title: "Wage Garnishment & Levy Release", href: "/services" },
  { title: "Installment Agreements & Plans", href: "/services" },
  { title: "Unfiled Returns & Back Tax Filing", href: "/services" },
];

function ArrowIcon({ white = true }: { white?: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 13L13 3M13 3H5M13 3V11"
        stroke={white ? "white" : "#0f172a"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SolutionsOverview() {
  return (
    <section className="bg-white py-[120px] relative overflow-hidden">
      {/* Background gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(235deg, rgba(15, 23, 42, 0) 0%, rgb(15, 23, 42) 50%)",
        }}
      />

      <div className="max-w-[1330px] mx-auto px-[70px] relative">
        <div className="flex gap-[120px] items-start">

          {/* Left Column */}
          <div className="w-[520px] shrink-0 flex flex-col gap-[60px]">

            {/* Header */}
            <div className="flex flex-col gap-[22px]">
              <div className="flex items-center gap-[10px]">
                <div className="bg-[#00A4A4] h-px w-[35px] shrink-0" />
                <span
                  className="font-['Inter'] font-medium uppercase text-[#f9fafb]"
                  style={{ fontSize: "14px", letterSpacing: "-0.28px" }}
                >
                  Tailored Solutions
                </span>
              </div>
              <h2
                className="font-['Inter'] font-bold text-[#f9fafb] leading-[1.08] whitespace-pre-line"
                style={{ fontSize: "48px", letterSpacing: "-1.5px" }}
              >
                {"Our Expertise,\nYour Success"}
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-['Inter'] font-normal text-[#f9fafb]/80 leading-[1.65] max-w-[440px]"
                style={{ fontSize: "16px", letterSpacing: "-0.3px" }}
              >
                We offer a comprehensive range of tax resolution services designed to protect your assets, reduce your liability, and help you move forward with confidence.
              </motion.p>
            </div>

            {/* Image + Button */}
            <div className="flex flex-col gap-[18.8px]">
              <div className="h-[270px] rounded-[8px] overflow-hidden w-full relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=700&h=400&fit=crop&q=80"
                  alt="Expert tax resolution team"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="pt-[13.2px]">
                <Link
                  to="/services"
                  className="bg-gradient-to-r from-[#00A4A4] to-[#007a7a] hover:from-[#007a7a] hover:to-[#005f5f] inline-flex items-center gap-[10px] px-7 rounded-full shadow-[0_8px_24px_rgba(0,164,164,0.3)] transition-all"
                  style={{ paddingTop: "17px", paddingBottom: "17px" }}
                >
                  <span
                    className="font-['Inter'] font-semibold text-white leading-[17.6px] tracking-[-0.32px]"
                    style={{ fontSize: "16px" }}
                  >
                    Explore all services
                  </span>
                  <ArrowIcon white />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Service Links */}
          <div className="flex-1 flex flex-col justify-center self-stretch">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Link
                  to={service.href}
                  className="flex items-center gap-[20px] py-[30px] relative group"
                >
                  {/* Title */}
                  <div className="flex-1 h-[32px] overflow-hidden relative">
                    <div
                      className="absolute top-0 left-0 font-['Inter'] font-semibold text-[#f9fafb] leading-[28.8px] tracking-[-0.96px] whitespace-nowrap group-hover:top-[-32px] transition-all duration-300"
                      style={{ fontSize: "24px" }}
                    >
                      {service.title}
                    </div>
                    <div
                      className="absolute top-[32px] left-0 font-['Inter'] font-semibold text-[#f9fafb] leading-[28.8px] tracking-[-0.96px] whitespace-nowrap group-hover:top-0 transition-all duration-300"
                      style={{ fontSize: "24px" }}
                    >
                      {service.title}
                    </div>
                  </div>

                  {/* Arrow Circle */}
                  <div className="w-[50px] h-[50px] bg-[#007a7a] rounded-full flex items-center justify-center shrink-0">
                    <ArrowIcon white />
                  </div>

                  {/* Bottom border */}
                  <div className="absolute inset-0 border-b border-[rgba(148,163,184,0.5)] pointer-events-none" />
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
