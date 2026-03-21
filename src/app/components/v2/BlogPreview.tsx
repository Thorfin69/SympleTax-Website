import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const POSTS = [
  {
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&h=420&fit=crop&q=80",
    category: "Tax Resolution",
    title: "How to Successfully Apply for an Offer in Compromise",
    description:
      "A step-by-step guide to qualifying for and submitting an IRS Offer in Compromise to settle your tax debt for less than you owe.",
  },
  {
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=700&h=420&fit=crop&q=80",
    category: "Wage Garnishment",
    title: "Stopping Wage Garnishment: Immediate Steps to Take",
    description:
      "Practical steps to release a wage levy and protect your paycheck when the IRS takes aggressive collection action.",
  },
];

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
      <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BlogPreview() {
  return (
    <section className="bg-white py-[120px]">
      <div className="max-w-[1330px] mx-auto px-[70px]">

        {/* Section Header */}
        <div className="flex items-end justify-between mb-[52px]">
          <div className="flex flex-col gap-[22px]">
            <div className="flex items-center gap-[10px]">
              <div className="bg-[#0f172a] h-px w-[35px]" />
              <span
                className="font-['Inter'] font-medium uppercase text-[#0f172a]"
                style={{ fontSize: "14px", letterSpacing: "0.05em" }}
              >
                Financial Insights
              </span>
            </div>
            <h2
              className="font-['Inter'] font-bold text-[#0f172a] leading-[1.08]"
              style={{ fontSize: "48px", letterSpacing: "-1.5px" }}
            >
              Expert Tips and Emerging<br />Industry Trends
            </h2>
          </div>
          <Link
            to="/resources"
            className="font-['Inter'] font-medium text-[#0f172a] border-b border-[#0f172a]/30 pb-0.5 hover:border-[#0f172a] transition-colors shrink-0"
            style={{ fontSize: "15px", letterSpacing: "-0.3px" }}
          >
            View all articles →
          </Link>
        </div>

        {/* Cards row */}
        <div className="flex gap-[24px] items-stretch">

          {/* Blog Cards */}
          {POSTS.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex-1 min-w-0 bg-[#f9fafb] rounded-[12px] overflow-hidden flex flex-col group hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
            >
              {/* Image — full bleed, no padding */}
              <div className="h-[280px] overflow-hidden relative shrink-0">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Category pill */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span
                    className="font-['Inter'] font-medium text-[#0f172a]"
                    style={{ fontSize: "11px", letterSpacing: "0.06em", textTransform: "uppercase" }}
                  >
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Text content */}
              <div className="flex flex-col flex-1 justify-between p-[28px] gap-[20px]">
                <div className="flex flex-col gap-[12px]">
                  <h3
                    className="font-['Inter'] font-bold text-[#0f172a] leading-[1.25]"
                    style={{ fontSize: "22px", letterSpacing: "-0.6px" }}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="font-['Inter'] font-normal text-[#475569] leading-[1.65]"
                    style={{ fontSize: "15px", letterSpacing: "-0.2px" }}
                  >
                    {post.description}
                  </p>
                </div>

                {/* Read More row */}
                <Link to="/resources" className="flex items-center justify-between group/cta">
                  <span
                    className="font-['Inter'] font-semibold text-[#0f172a] group-hover/cta:text-[#00A4A4] transition-colors"
                    style={{ fontSize: "16px", letterSpacing: "-0.3px" }}
                  >
                    Read More
                  </span>
                  <div className="w-[48px] h-[48px] rounded-full bg-[#0f172a] group-hover/cta:bg-[#00A4A4] transition-colors flex items-center justify-center text-white shrink-0">
                    <ArrowIcon />
                  </div>
                </Link>
              </div>
            </motion.article>
          ))}

          {/* Right: Dark editorial card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="w-[360px] shrink-0"
          >
            <Link to="/resources" className="block h-full">
              <div className="bg-[#0f172a] rounded-[12px] h-full flex flex-col justify-between p-[36px] relative overflow-hidden group">

                {/* Top content */}
                <div className="flex flex-col gap-[20px]">
                  {/* Eyebrow */}
                  <div className="flex items-center gap-[8px]">
                    <div className="w-[24px] h-px bg-[#00A4A4]" />
                    <span
                      className="font-['Inter'] font-medium uppercase text-[#00A4A4]"
                      style={{ fontSize: "11px", letterSpacing: "0.08em" }}
                    >
                      Our Blog
                    </span>
                  </div>

                  <h3
                    className="font-['Inter'] font-bold text-white leading-[1.2]"
                    style={{ fontSize: "28px", letterSpacing: "-1px" }}
                  >
                    Expert advice, industry trends, and practical tips to help you stay ahead.
                  </h3>

                  <p
                    className="font-['Inter'] font-normal text-white/50 leading-[1.65]"
                    style={{ fontSize: "14px", letterSpacing: "-0.2px" }}
                  >
                    Stay informed with guides written by licensed tax professionals — updated monthly.
                  </p>
                </div>

                {/* Bottom CTA */}
                <div className="flex items-center justify-between mt-[40px]">
                  <span
                    className="font-['Inter'] font-semibold text-white group-hover:text-[#00A4A4] transition-colors"
                    style={{ fontSize: "15px", letterSpacing: "-0.3px" }}
                  >
                    Browse All Articles
                  </span>
                  <div className="w-[48px] h-[48px] bg-[#00A4A4] rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#00A4A4] transition-colors shrink-0">
                    <ArrowIcon />
                  </div>
                </div>

                {/* Subtle decorative circle */}
                <div className="absolute -bottom-12 -right-12 w-[160px] h-[160px] rounded-full border border-white/[0.05] pointer-events-none" />
                <div className="absolute -bottom-4 -right-4 w-[100px] h-[100px] rounded-full border border-white/[0.05] pointer-events-none" />
              </div>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
