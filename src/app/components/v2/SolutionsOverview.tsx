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

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 13L13 3M13 3H5M13 3V11"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BackgroundLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1400 700"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      <path d="M-100,180 C200,80 500,320 800,200 C1100,80 1300,280 1500,160" stroke="#0f172a" strokeWidth="1.2" opacity="0.05" />
      <path d="M-100,320 C150,200 450,440 750,320 C1050,200 1250,400 1500,280" stroke="#0f172a" strokeWidth="1" opacity="0.04" />
      <path d="M-100,480 C200,360 480,560 780,440 C1080,320 1300,500 1500,400" stroke="#0f172a" strokeWidth="0.8" opacity="0.03" />
      <path d="M900,0 C1000,150 950,350 1100,500 C1200,600 1350,650 1400,700" stroke="#0f172a" strokeWidth="1.5" opacity="0.04" />
      <path d="M600,0 C700,200 650,400 800,550 C900,660 1050,700 1100,700" stroke="#0f172a" strokeWidth="1" opacity="0.03" />
    </svg>
  );
}

export function SolutionsOverview() {
  return (
    <section className="py-[64px] lg:py-[120px] relative overflow-hidden" style={{ backgroundColor: "#f8fafc" }}>
      <BackgroundLines />
      <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px] relative">
        <div className="flex flex-col gap-[48px] lg:flex-row lg:gap-[100px] items-start">

          {/* Left Column */}
          <div className="w-full lg:w-[500px] lg:shrink-0 flex flex-col gap-[32px]">

            {/* Header */}
            <div className="flex flex-col gap-[20px]">
              {/* Pill Badge */}
              <div>
                <span
                  className="font-['DM_Sans'] font-bold uppercase text-[#0f172a] border-[1.5px] border-[#0f172a] rounded-[50px] px-[16px] py-[7px] inline-block"
                  style={{ fontSize: "12px", letterSpacing: "0.08em" }}
                >
                  Our Services
                </span>
              </div>

              <h2
                className="font-['DM_Sans'] font-black text-[#0f172a] leading-[1.05]"
                style={{ fontSize: "clamp(28px, 8vw, 64px)", letterSpacing: "-2px" }}
              >
                Our{" "}
                <span className="text-[#00A4A4]">Expertise</span>
                ,{" "}
                <br />
                Your Success
              </h2>
            </div>

            {/* Office consultation image */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-[16px] overflow-hidden"
              style={{ height: "340px" }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=660&h=420&fit=crop&q=80"
                alt="SympleTax professionals reviewing a tax case with a client"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* CTA Button */}
            <Link
              to="/services"
              className="bg-[#00A4A4] hover:bg-[#007a7a] hover:scale-[1.02] inline-flex items-center gap-[10px] rounded-full transition-all duration-300 w-fit"
              style={{ padding: "14px 28px" }}
            >
              <span
                className="font-['DM_Sans'] font-semibold text-white"
                style={{ fontSize: "15px", letterSpacing: "-0.2px" }}
              >
                Explore All Services
              </span>
              <ArrowIcon />
            </Link>
          </div>

          {/* Right Column: Service Links */}
          <div className="flex-1 flex flex-col justify-center self-stretch">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
              >
                <Link
                  to={service.href}
                  className="flex items-center gap-[16px] py-[22px] lg:py-[28px] relative group border-b border-slate-200"
                >
                  <div className="flex-1">
                    <span
                      className="font-['DM_Sans'] font-bold text-[#0f172a] group-hover:text-[#00A4A4] transition-colors duration-300"
                      style={{ fontSize: "clamp(15px, 2vw, 20px)", letterSpacing: "-0.4px", lineHeight: "1.3" }}
                    >
                      {service.title}
                    </span>
                  </div>

                  <div className="w-[44px] h-[44px] bg-[#00A4A4] rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#007a7a] transition-colors duration-300">
                    <ArrowIcon />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
