import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    text: "Thanks to their strategic advice, our $85k tax debt was resolved for less than $5,000. SympleTax stopped the wage garnishment and implemented a fresh start strategy. We finally feel confident about our financial future.",
    author: "Sarah Lewis",
    role: "Small Business Owner",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=80&h=80&fit=crop&crop=face&q=80",
    dark: false,
  },
  {
    text: "After 4 years of unfiled returns, I was terrified of the IRS. SympleTax stepped in, handled all the paperwork, and negotiated a reasonable payment plan. Their expert guidance truly saved my sanity and my business.",
    author: "Jess Parker",
    role: "Founder, Parker Enterprises",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face&q=80",
    dark: true,
  },
  {
    text: "Their financial expertise transformed our situation. They removed $12k in penalties and stopped a bank levy in just 48 hours. Within a year, we saw significant business growth without the IRS shadow.",
    author: "Michael Carter",
    role: "CEO, Sunrise Tech",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&fit=crop&crop=face&q=80",
    dark: false,
  },
];

export function ServicesTestimonials() {
  return (
    <section className="bg-white py-[120px]">
      <div className="max-w-[1330px] mx-auto px-[70px]">

        {/* Header */}
        <div className="flex items-end justify-between mb-[60px]">
          <div className="flex flex-col gap-[22px]">
            <div className="flex items-center gap-[10px]">
              <div className="bg-[#2c3e50] h-px w-[35px]" />
              <span
                className="font-['Inter'] font-medium uppercase text-[#2c3e50]"
                style={{ fontSize: "14px", letterSpacing: "0.05em" }}
              >
                Success Stories
              </span>
            </div>
            <h2
              className="font-['Inter'] font-semibold text-[#2c3e50] leading-[52.8px] tracking-[-1.92px]"
              style={{ fontSize: "48px" }}
            >
              What our clients{" "}
              <br />say about us
            </h2>
          </div>

          <Link
            to="/about"
            className="bg-[#017984] inline-flex items-center gap-[10px] px-7 rounded-full shrink-0 mb-2"
            style={{ paddingTop: "17px", paddingBottom: "17px" }}
          >
            <span
              className="font-['Inter'] font-semibold text-white leading-[17.6px] tracking-[-0.32px]"
              style={{ fontSize: "16px" }}
            >
              Read all reviews
            </span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 13L13 3M13 3H5M13 3V11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-3 gap-[20px]">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`rounded-[8px] p-[30px] flex flex-col justify-between gap-[24px] ${
                t.dark ? "bg-[#2c3e50]" : "bg-[#f7f7f7]"
              }`}
            >
              {/* Quote mark */}
              <svg
                width="32"
                height="24"
                viewBox="0 0 32 24"
                fill="none"
                className="shrink-0"
              >
                <path
                  d="M0 24V14.4C0 10.56 0.96 7.28 2.88 4.56C4.88 1.76 7.6 0 11.04 0L12 1.92C9.44 2.72 7.52 4.08 6.24 6C4.96 7.84 4.32 10 4.32 12.48H8.64V24H0ZM18.72 24V14.4C18.72 10.56 19.68 7.28 21.6 4.56C23.6 1.76 26.32 0 29.76 0L30.72 1.92C28.16 2.72 26.24 4.08 24.96 6C23.68 7.84 23.04 10 23.04 12.48H27.36V24H18.72Z"
                  fill={t.dark ? "#017984" : "#017984"}
                  opacity="0.6"
                />
              </svg>

              {/* Text */}
              <p
                className={`font-['Inter'] font-normal leading-[20.8px] tracking-[-0.96px] flex-grow ${
                  t.dark ? "text-[#f7f7f7]" : "text-[#343434]"
                }`}
                style={{ fontSize: "16px" }}
              >
                {t.text}
              </p>

              {/* Author */}
              <div
                className={`flex items-center gap-[12px] pt-[20px] border-t ${
                  t.dark ? "border-white/10" : "border-[rgba(176,176,176,0.3)]"
                }`}
              >
                <div className="w-[48px] h-[48px] rounded-full overflow-hidden shrink-0 border-2 border-white">
                  <ImageWithFallback src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <span
                    className={`font-['Inter'] font-semibold leading-[28.8px] tracking-[-0.96px] ${
                      t.dark ? "text-[#f7f7f7]" : "text-[#222]"
                    }`}
                    style={{ fontSize: "18px" }}
                  >
                    {t.author}
                  </span>
                  <span
                    className={`font-['Inter'] font-normal leading-[20.8px] tracking-[-0.96px] ${
                      t.dark ? "text-[#f7f7f7]/60" : "text-[#636363]"
                    }`}
                    style={{ fontSize: "14px" }}
                  >
                    {t.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
