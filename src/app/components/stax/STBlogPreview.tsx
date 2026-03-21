import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowRight, Clock } from "lucide-react";

const POSTS = [
  {
    category: "Tax Resolution",
    title: "How to Successfully Apply for an Offer in Compromise",
    excerpt:
      "A step-by-step guide to qualifying for and submitting an IRS Offer in Compromise to settle your tax debt for less than you owe.",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&h=400&fit=crop&q=80",
  },
  {
    category: "IRS Help",
    title: "Stopping Wage Garnishment: Immediate Steps to Take",
    excerpt:
      "When the IRS garnishes your wages, you must act fast. Here are the exact steps to take in the first 48 hours.",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=700&h=400&fit=crop&q=80",
  },
  {
    category: "Tax Tips",
    title: "Understanding IRS CP2000 Notices: What You Must Do",
    excerpt:
      "A CP2000 notice means the IRS thinks you underreported income. Here's what it means and how to respond correctly.",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=700&h=400&fit=crop&q=80",
  },
];

export function STBlogPreview() {
  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">

          {/* Left: eyebrow + heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[1.5px] bg-[#059669]" />
              <span
                className="font-['Inter'] font-medium text-[14px] uppercase tracking-wider text-[#059669]"
              >
                Tax Relief Insights
              </span>
            </div>

            {/* H2 */}
            <h2
              className="font-['Inter'] font-bold text-[#0b0b0b] leading-[1.1] tracking-tight"
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                textWrap: "balance",
              }}
            >
              Know Your Options
            </h2>
          </motion.div>

          {/* Right: View All CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Link
              to="/resources"
              className="flex items-center gap-2 font-['Inter'] font-semibold text-[16px] text-[#059669] hover:gap-3 transition-all whitespace-nowrap"
            >
              View All Articles <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {POSTS.map((post, idx) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="h-[220px] rounded-2xl overflow-hidden mb-5">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Category badge */}
              <span className="inline-block bg-[#059669]/10 text-[#059669] font-['Inter'] font-semibold text-[12px] uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                {post.category}
              </span>

              {/* Title */}
              <h3
                className="font-['Inter'] font-bold text-[20px] text-[#0b0b0b] leading-[1.3] mb-3 group-hover:text-[#059669] transition-colors"
                style={{ textWrap: "balance" }}
              >
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="font-['Inter'] text-[15px] text-[#4b5563] leading-[1.7] mb-5">
                {post.excerpt}
              </p>

              {/* Footer: read time */}
              <div className="flex items-center gap-2 text-[#9ca3af] font-['Inter'] text-[13px]">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
