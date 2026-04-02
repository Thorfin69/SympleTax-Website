import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const imgThumbnail = "https://images.unsplash.com/photo-1758519288969-4806f015852d?auto=format&fit=crop&q=80&w=800";
const imgThumbnail1 = "https://images.unsplash.com/photo-1762427354251-f008b64dbc32?auto=format&fit=crop&q=80&w=800";
const imgDecorativeElement = "https://images.unsplash.com/photo-1681569685378-3c18bf84b504?auto=format&fit=crop&q=80&w=800";

const articles = [
  {
    image: imgThumbnail,
    title: "The future of modern financial consulting",
    excerpt:
      "Explore emerging trends shaping the world of finance and consulting",
    category: "Industry Trends",
    readTime: "5 min read",
  },
  {
    image: imgThumbnail1,
    title: "How to optimize budget for your business",
    excerpt: "Practical tips to cut costs, increase efficiency, and maximize profits",
    category: "Business Finance",
    readTime: "4 min read",
  },
  {
    image: imgDecorativeElement,
    title: "Navigating market volatility with confidence",
    excerpt:
      "Expert advice on portfolio resilience and long-term investment thinking",
    category: "Investment",
    readTime: "6 min read",
  },
];

const darkCard = {
  title: "Expert advice, industry trends, and practical tips to help you stay ahead",
  cta: "View all insights",
};

export function Insights() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-5"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-px bg-[#2C3E50]" />
              <span className="font-['Inter'] font-medium text-[14px] uppercase tracking-wider text-[#2C3E50]">
                Financial Insights
              </span>
            </div>
            <h2
              className="font-['Inter'] font-semibold text-[#2C3E50] tracking-tight leading-tight max-w-[520px]"
              style={{ fontSize: "clamp(36px, 4vw, 48px)" }}
            >
              Expert tips and emerging{" "}
              <span className="text-[#017984]">industry trends</span>
            </h2>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-[1fr_1fr_420px] gap-5">
          {/* Article Cards */}
          <div className="md:col-span-2 grid md:grid-cols-2 gap-5">
            {articles.slice(0, 2).map((article, idx) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.7 }}
                whileHover={{ y: -4 }}
                className="bg-[#F7F7F7] rounded-lg overflow-hidden flex flex-col group cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="h-[240px] overflow-hidden relative">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      delay: idx * 1.5,
                      repeatDelay: 3,
                    }}
                    className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 pointer-events-none"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 p-5">
                  <div className="flex items-center gap-3">
                    <span className="bg-[#2C3E50]/10 text-[#2C3E50] text-xs font-['Inter'] font-medium px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-[#636363] text-xs font-['Inter']">
                      {article.readTime}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-['Inter'] font-semibold text-[#2C3E50] text-[22px] tracking-tight leading-snug">
                      {article.title}
                    </h3>
                    <p className="font-['Inter'] text-[#636363] text-[15px] leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <motion.div
                    className="flex items-center gap-2 group/btn self-start cursor-pointer"
                    whileHover={{ x: 4 }}
                  >
                    <span className="font-['Inter'] text-[#2C3E50] text-[17px] border-b-2 border-[#2C3E50] pb-0.5">
                      Read more
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#2C3E50] transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dark Sidebar Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-[#2C3E50] rounded-lg p-8 flex flex-col justify-between min-h-[480px]"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-px bg-white/40" />
                <span className="font-['Inter'] font-medium text-[14px] uppercase tracking-wider text-white/60">
                  Stay Ahead
                </span>
              </div>
              <h3
                className="font-['Inter'] font-semibold text-[#F7F7F7] leading-snug tracking-tight"
                style={{ fontSize: "clamp(24px, 2vw, 28px)" }}
              >
                {darkCard.title}
              </h3>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#017984] text-white px-7 py-4 rounded-full font-['Inter'] font-semibold flex items-center gap-3 self-start group overflow-hidden relative"
            >
              <span className="relative z-10">{darkCard.cta}</span>
              <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <div className="absolute inset-0 bg-[#00838F] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
