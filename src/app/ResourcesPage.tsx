import { motion } from "motion/react";
import { Link } from "react-router";
import { Navbar } from "./components/v2/Navbar";
import { Footer } from "./components/v2/Footer";
import { useEffect, useState } from "react";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

// ─── Blog Data ────────────────────────────────────────────────────────────────

const CATEGORIES = ["All", "IRS Notices", "Tax Relief Programs", "Tax Resolution", "Tax Debt", "Tax Tips"];

const ARTICLES = [
  {
    id: 1,
    title: "What Is an Offer in Compromise — And Do You Qualify?",
    excerpt: "An Offer in Compromise lets you settle your IRS debt for less than you owe. Here's exactly how it works, who qualifies, and what the process looks like from start to finish.",
    category: "Tax Relief Programs",
    readTime: "7 min read",
    date: "March 2026",
    featured: true,
  },
  {
    id: 2,
    title: "IRS CP90 Notice: What It Means and How to Respond",
    excerpt: "A CP90 is one of the IRS's most serious notices — it's a Final Notice of Intent to Levy. If you received one, you have 30 days to respond before the IRS can seize your assets.",
    category: "IRS Notices",
    readTime: "5 min read",
    date: "March 2026",
    featured: false,
  },
  {
    id: 3,
    title: "Wage Garnishment: How to Stop the IRS from Taking Your Paycheck",
    excerpt: "The IRS can garnish a significant portion of your paycheck with very little warning. Learn how wage garnishments work, your rights, and the fastest ways to get a release.",
    category: "Tax Resolution",
    readTime: "6 min read",
    date: "February 2026",
    featured: false,
  },
  {
    id: 4,
    title: "Currently Not Collectible Status: A Lifeline When You Can't Pay",
    excerpt: "If you genuinely cannot pay your tax debt, the IRS can put your account in Currently Not Collectible status — temporarily halting all collection actions. Here's how to qualify.",
    category: "Tax Relief Programs",
    readTime: "5 min read",
    date: "February 2026",
    featured: false,
  },
  {
    id: 5,
    title: "How Many Years of Unfiled Tax Returns Is Too Many?",
    excerpt: "Missing one year of tax returns is common. Missing several is a serious IRS problem. We explain the consequences, the statute of limitations, and how to come back into compliance.",
    category: "Tax Debt",
    readTime: "8 min read",
    date: "February 2026",
    featured: false,
  },
  {
    id: 6,
    title: "Penalty Abatement: How to Get the IRS to Waive Your Penalties",
    excerpt: "The IRS charges substantial penalties for late filing and late payment — but they can be waived under the right circumstances. Here's how First Time Abatement works and how to apply.",
    category: "Tax Relief Programs",
    readTime: "6 min read",
    date: "January 2026",
    featured: false,
  },
  {
    id: 7,
    title: "IRS Tax Lien vs. Tax Levy: What's the Difference?",
    excerpt: "Most people confuse these two, but they're very different IRS actions. A lien is a legal claim on your property. A levy is the actual seizure of it. Here's what each means for you.",
    category: "Tax Debt",
    readTime: "5 min read",
    date: "January 2026",
    featured: false,
  },
  {
    id: 8,
    title: "5 Red Flags That Signal You Need a Tax Professional — Not a DIY Solution",
    excerpt: "Plenty of minor tax issues are solvable on your own. But some situations demand a licensed professional. Here are the five scenarios where going solo is a costly mistake.",
    category: "Tax Tips",
    readTime: "4 min read",
    date: "January 2026",
    featured: false,
  },
  {
    id: 9,
    title: "What Is an Installment Agreement and Is It Right for You?",
    excerpt: "An IRS Installment Agreement lets you pay your tax debt in monthly payments. It's not always the best option — but sometimes it's exactly right. Here's how to evaluate it.",
    category: "Tax Resolution",
    readTime: "5 min read",
    date: "December 2025",
    featured: false,
  },
];

// ─── Sub-Components ───────────────────────────────────────────────────────────

function CategoryPill({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="font-['DM_Sans'] font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A4A4]"
      style={{
        fontSize: "13px",
        padding: "8px 18px",
        backgroundColor: active ? "#00A4A4" : "white",
        color: active ? "white" : "#475569",
        border: active ? "1.5px solid #00A4A4" : "1.5px solid #e2e8f0",
        whiteSpace: "nowrap",
      }}
      aria-pressed={active}
    >
      {label}
    </button>
  );
}

function ArticleCard({
  article,
  idx,
  featured = false,
}: {
  article: typeof ARTICLES[0];
  idx: number;
  featured?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
      className={`group bg-white rounded-[20px] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] hover:-translate-y-[2px] ${featured ? "lg:flex-row" : ""}`}
      style={{ border: "1px solid #e8e4da" }}
    >
      {/* Image placeholder */}
      <div
        className={`relative overflow-hidden shrink-0 ${featured ? "lg:w-[420px]" : "h-[200px]"}`}
        style={{
          height: featured ? undefined : "200px",
          minHeight: featured ? "260px" : undefined,
          background: "linear-gradient(135deg, #00A4A4 0%, #007a7a 60%, #0f172a 100%)",
        }}
        aria-hidden="true"
      >
        {/* Decorative pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 40%, white 1px, transparent 1px), radial-gradient(circle at 70% 60%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Category badge */}
        <div className="absolute top-[14px] left-[14px]">
          <span
            className="font-['DM_Sans'] font-medium px-[12px] py-[5px] rounded-full bg-white/20 text-white backdrop-blur-sm"
            style={{ fontSize: "11px", letterSpacing: "0.02em" }}
          >
            {article.category}
          </span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <BookOpen className="w-[40px] h-[40px] text-white/20" aria-hidden="true" />
        </div>
      </div>

      {/* Content */}
      <div className={`flex flex-col gap-[16px] p-[28px] ${featured ? "flex-1" : ""}`}>
        <div className="flex items-center gap-[10px]">
          <span
            className="font-['DM_Sans'] font-medium text-[#00A4A4] uppercase"
            style={{ fontSize: "11px", letterSpacing: "0.05em" }}
          >
            {article.category}
          </span>
          <span className="text-[#e2e8f0]">·</span>
          <span className="flex items-center gap-[4px] font-['DM_Sans'] font-normal text-[#94a3b8]" style={{ fontSize: "11px" }}>
            <Clock className="w-[11px] h-[11px]" aria-hidden="true" />
            {article.readTime}
          </span>
        </div>

        <h3
          className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.25] group-hover:text-[#00A4A4] transition-colors duration-200"
          style={{ fontSize: featured ? "clamp(20px, 2vw, 26px)" : "18px", letterSpacing: "-0.4px" }}
        >
          {article.title}
        </h3>

        <p
          className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.65] flex-1"
          style={{ fontSize: "14px", letterSpacing: "-0.1px" }}
        >
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between pt-[4px]">
          <span className="font-['DM_Sans'] font-normal text-[#94a3b8]" style={{ fontSize: "12px" }}>
            {article.date}
          </span>
          <Link
            to={`/resources/${article.id}`}
            className="inline-flex items-center gap-[6px] font-['DM_Sans'] font-semibold text-[#00A4A4] hover:gap-[10px] transition-all duration-200 focus:outline-none focus-visible:underline"
            style={{ fontSize: "13px" }}
            aria-label={`Read: ${article.title}`}
          >
            Read Article
            <ArrowRight className="w-[14px] h-[14px]" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ResourcesPage() {
  useEffect(() => {
    document.title = "Tax Resources & Blog | SympleTax";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Free expert guides on IRS notices, tax relief programs, and tax resolution. Written by licensed professionals.");
  }, []);

  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? ARTICLES
    : ARTICLES.filter((a) => a.category === activeCategory);

  const featured = ARTICLES.find((a) => a.featured)!;
  const rest = filtered.filter((a) => !a.featured || activeCategory !== "All");

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-[#00A4A4] focus:text-white focus:px-4 focus:py-2 focus:rounded-full font-['DM_Sans'] font-bold"
        style={{ fontSize: "14px" }}
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section
          className="pt-[120px] lg:pt-[160px] pb-[64px] lg:pb-[80px] relative overflow-hidden"
          style={{ backgroundColor: "#0f172a" }}
          aria-label="Tax Resources"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(0,164,164,0.12) 0%, transparent 60%)" }}
            aria-hidden="true"
          />

          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px] relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between lg:gap-[60px]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex items-center gap-[10px] mb-[24px]">
                  <div className="bg-[#00A4A4] h-px w-[35px]" />
                  <span
                    className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                    style={{ fontSize: "13px", letterSpacing: "0.08em" }}
                  >
                    Tax Knowledge Center
                  </span>
                </div>
                <h1
                  className="font-['DM_Sans'] font-bold text-white leading-[1.06] mb-[20px]"
                  style={{ fontSize: "clamp(34px, 5vw, 64px)", letterSpacing: "-2.5px" }}
                >
                  Free Guides From<br />
                  <span className="text-[#00A4A4]">Our Tax Experts</span>
                </h1>
                <p
                  className="font-['DM_Sans'] font-normal text-white/65 leading-[1.65]"
                  style={{ fontSize: "clamp(15px, 1.5vw, 18px)", letterSpacing: "-0.3px", maxWidth: "520px" }}
                >
                  Plain-English guides on IRS notices, tax relief programs, and resolution strategies — written by licensed professionals who handle these cases every day.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="hidden lg:flex flex-col gap-[12px] shrink-0"
              >
                <div className="text-right">
                  <p className="font-['DM_Sans'] font-bold text-white" style={{ fontSize: "36px", letterSpacing: "-1.5px" }}>50+</p>
                  <p className="font-['DM_Sans'] font-normal text-white/50" style={{ fontSize: "14px" }}>Expert Articles</p>
                </div>
                <div className="text-right">
                  <p className="font-['DM_Sans'] font-bold text-[#00A4A4]" style={{ fontSize: "36px", letterSpacing: "-1.5px" }}>Free</p>
                  <p className="font-['DM_Sans'] font-normal text-white/50" style={{ fontSize: "14px" }}>Always</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Featured Article ──────────────────────────────────────────────── */}
        {activeCategory === "All" && (
          <section className="py-[48px] lg:py-[64px]" style={{ backgroundColor: "#f5f1e8" }} aria-label="Featured article">
            <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px]">
              <div className="flex items-center gap-[10px] mb-[24px]">
                <div className="bg-[#00A4A4] h-px w-[35px]" />
                <span
                  className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                  style={{ fontSize: "13px", letterSpacing: "0.08em" }}
                >
                  Featured Article
                </span>
              </div>
              <ArticleCard article={featured} idx={0} featured />
            </div>
          </section>
        )}

        {/* ── Category Filter + Article Grid ───────────────────────────────── */}
        <section className="py-[64px] lg:py-[100px] bg-white" aria-label="All articles">
          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px]">

            {/* Category filter */}
            <div className="mb-[40px] lg:mb-[56px]">
              <div className="flex items-center gap-[10px] mb-[24px]">
                <div className="bg-[#00A4A4] h-px w-[35px]" />
                <span
                  className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                  style={{ fontSize: "13px", letterSpacing: "0.08em" }}
                >
                  Browse By Topic
                </span>
              </div>
              <div
                className="flex gap-[10px] overflow-x-auto pb-[8px]"
                style={{ scrollbarWidth: "none" }}
                role="group"
                aria-label="Filter articles by category"
              >
                {CATEGORIES.map((cat) => (
                  <CategoryPill
                    key={cat}
                    label={cat}
                    active={activeCategory === cat}
                    onClick={() => setActiveCategory(cat)}
                  />
                ))}
              </div>
            </div>

            {/* Article grid */}
            {rest.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px]">
                {rest.map((article, idx) => (
                  <ArticleCard key={article.id} article={article} idx={idx} />
                ))}
              </div>
            ) : (
              <div className="text-center py-[64px]">
                <BookOpen className="w-[48px] h-[48px] text-[#e2e8f0] mx-auto mb-[16px]" aria-hidden="true" />
                <p className="font-['DM_Sans'] font-normal text-[#94a3b8]" style={{ fontSize: "16px" }}>
                  No articles found in this category yet — more coming soon.
                </p>
              </div>
            )}

            {/* Load more placeholder */}
            {rest.length > 0 && (
              <div className="text-center mt-[56px]">
                <p className="font-['DM_Sans'] font-normal text-[#94a3b8] mb-[20px]" style={{ fontSize: "14px" }}>
                  Showing {rest.length} of 50+ articles
                </p>
                <button
                  className="inline-flex items-center gap-[10px] border-[1.5px] border-[#00A4A4] text-[#00A4A4] font-['DM_Sans'] font-bold rounded-full hover:bg-[#00A4A4] hover:text-white transition-all duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A4A4]"
                  style={{ fontSize: "14px", padding: "13px 32px" }}
                >
                  Load More Articles
                  <ArrowRight className="w-[14px] h-[14px]" aria-hidden="true" />
                </button>
              </div>
            )}

          </div>
        </section>

        {/* ── Newsletter CTA ────────────────────────────────────────────────── */}
        <section className="py-[64px] lg:py-[100px] bg-[#0f172a]" aria-label="Newsletter signup">
          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px]">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[32px]">

              <div>
                <h2
                  className="font-['DM_Sans'] font-bold text-white leading-[1.08] mb-[12px]"
                  style={{ fontSize: "clamp(24px, 3vw, 40px)", letterSpacing: "-1.5px" }}
                >
                  Get Tax Tips Straight to Your Inbox
                </h2>
                <p className="font-['DM_Sans'] font-normal text-white/55 leading-[1.6]" style={{ fontSize: "15px" }}>
                  Plain-English IRS updates and resolution strategies. No spam — ever.
                </p>
              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row gap-[12px] lg:shrink-0 w-full lg:w-auto lg:min-w-[400px]"
                aria-label="Newsletter signup"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 border border-white/10 bg-white/8 rounded-full font-['DM_Sans'] text-white placeholder-white/35 focus:outline-none focus:border-[#00A4A4] focus:ring-2 focus:ring-[#00A4A4]/30 transition-all"
                  style={{ fontSize: "15px", padding: "14px 20px", backgroundColor: "rgba(255,255,255,0.06)" }}
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  className="bg-[#00A4A4] hover:bg-[#007a7a] text-white font-['DM_Sans'] font-bold rounded-full transition-all duration-200 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A4A4] shrink-0"
                  style={{ fontSize: "14px", padding: "14px 28px", whiteSpace: "nowrap" }}
                >
                  Subscribe
                </button>
              </form>

            </div>
          </div>
        </section>

        {/* ── CTA Banner ────────────────────────────────────────────────────── */}
        <section className="py-[48px] lg:py-[64px] bg-[#00A4A4]" aria-label="Get help now">
          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px]">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[24px]">
              <div>
                <h2
                  className="font-['DM_Sans'] font-bold text-white leading-[1.08] mb-[8px]"
                  style={{ fontSize: "clamp(22px, 2.5vw, 34px)", letterSpacing: "-1px" }}
                >
                  Ready to Resolve Your Tax Debt?
                </h2>
                <p className="font-['DM_Sans'] font-normal text-white/75" style={{ fontSize: "15px" }}>
                  Reading is a great start — but a licensed professional can review your specific case for free.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-[10px] bg-white text-[#00A4A4] font-['DM_Sans'] font-bold rounded-full hover:scale-[1.02] hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] transition-all duration-300 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#00A4A4]"
                style={{ fontSize: "15px", padding: "15px 36px", whiteSpace: "nowrap" }}
                aria-label="Get a free tax consultation"
              >
                Get a Free Consultation
                <ArrowRight className="w-[14px] h-[14px]" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
