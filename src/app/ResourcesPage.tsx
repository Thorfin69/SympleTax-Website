import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { Navbar } from "./components/v2/Navbar";
import { Footer } from "./components/v2/Footer";
import { useState, useEffect } from "react";
import { ArrowRight, Search, X, Clock, BookOpen, ChevronDown } from "lucide-react";
import { ARTICLES, CATEGORIES, CATEGORY_GRADIENT, type Article } from "./data/articles";
import { SITE_ORIGIN } from "../config/site";

// ─── FAQ Data ─────────────────────────────────────────────────────────────────

const FAQS = [
  {
    id: "01",
    q: "How long does IRS tax resolution typically take?",
    a: "It depends on the resolution path. Installment agreements can be set up in days. An Offer in Compromise typically takes 6 to 24 months. Getting into Currently Not Collectible status can happen in weeks. We'll give you a realistic timeline for your specific situation during your free consultation.",
  },
  {
    id: "02",
    q: "Will I still owe money after an Offer in Compromise is accepted?",
    a: "No — once an OIC is accepted and all required payments are made, the remaining balance is permanently forgiven. That includes penalties and interest that accumulated over time. The one condition: you must stay compliant with all tax obligations for 5 years after acceptance.",
  },
  {
    id: "03",
    q: "Does SympleTax work directly with the IRS on my behalf?",
    a: "Yes. We file a Power of Attorney (Form 2848) which gives us legal authority to speak with the IRS on your behalf. Once filed, you no longer need to speak with the IRS directly — all communication runs through us. This also stops many active collection actions while we negotiate.",
  },
  {
    id: "04",
    q: "What if I genuinely cannot afford to pay anything right now?",
    a: "That's exactly the scenario that Currently Not Collectible (CNC) status was designed for. If your income minus allowable living expenses leaves nothing for IRS payments, the IRS will pause all collection activity. Interest still accrues, but no garnishments, levies, or new collection actions — giving you time to stabilize.",
  },
  {
    id: "05",
    q: "What IRS notices should I be most concerned about?",
    a: "The CP90 and LT11 are the most urgent — they're Final Notices of Intent to Levy with 30-day response deadlines. CP14 (first balance due notice) and CP503 (second notice) are earlier warning signs. Any notice with a deadline or the word 'levy' or 'seizure' should be treated as urgent.",
  },
  {
    id: "06",
    q: "Can the IRS come after my retirement accounts or my home?",
    a: "Yes — a levy can reach retirement accounts (subject to some protections), and a federal tax lien can attach to your home's equity. However, seizing a primary residence requires IRS management approval and court involvement, making it rare. Retirement account levies are more common. Either scenario underscores why acting before the IRS escalates is critical.",
  },
  {
    id: "07",
    q: "What's the real difference between an OIC and a payment plan?",
    a: "A payment plan (Installment Agreement) lets you pay your full balance over time — interest and penalties keep accruing throughout. An OIC settles the debt for less than you owe, permanently forgiving the remainder once paid. OICs are harder to qualify for but can result in a dramatically lower total payment. We'll tell you honestly which makes more financial sense for your situation.",
  },
  {
    id: "08",
    q: "Will getting tax help affect my credit score?",
    a: "Hiring a tax professional doesn't affect your credit. An IRS installment agreement doesn't appear on your credit report either. The thing that does affect credit is an IRS federal tax lien, which is a public record. Resolving your tax debt — especially before a lien is filed — protects your credit long-term.",
  },
];

// ─── Background Elements ──────────────────────────────────────────────────────

function DiagPattern({ dark = true }: { dark?: boolean }) {
  const color = dark ? "rgba(255,255,255,0.025)" : "rgba(0,164,164,0.025)";
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
      style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          ${color} 0px,
          ${color} 1px,
          transparent 1px,
          transparent 60px
        )`,
        backgroundSize: "60px 60px",
      }}
    />
  );
}

// ─── Article Thumbnail ────────────────────────────────────────────────────────

function ArticleThumbnail({ category, size = "sm" }: { category: string; size?: "sm" | "lg" }) {
  const [from, to] = CATEGORY_GRADIENT[category] ?? ["#0f172a", "#1e293b"];
  return (
    <div
      className="absolute inset-0"
      style={{ background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)` }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <BookOpen
        className="absolute text-white/10"
        style={{
          width: size === "lg" ? "64px" : "40px",
          height: size === "lg" ? "64px" : "40px",
          bottom: "20px",
          right: "20px",
        }}
        aria-hidden="true"
      />
    </div>
  );
}

// ─── Article Card ─────────────────────────────────────────────────────────────

function ArticleCard({
  article,
  idx,
}: {
  article: Article;
  idx: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
      className="group bg-white rounded-[20px] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] hover:-translate-y-[3px]"
      style={{ border: "1px solid #e8ecf2" }}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden shrink-0" style={{ height: "200px" }}>
        <ArticleThumbnail category={article.category} />
        {/* Category badge */}
        <div className="absolute top-[14px] left-[14px] z-10">
          <span
            className="font-['DM_Sans'] font-medium px-[12px] py-[5px] rounded-full bg-white/20 text-white backdrop-blur-sm"
            style={{ fontSize: "11px", letterSpacing: "0.04em" }}
          >
            {article.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-[14px] p-[28px] flex-1">
        <div className="flex items-center gap-[10px]">
          <span
            className="font-['DM_Sans'] font-medium text-[#00A4A4] uppercase"
            style={{ fontSize: "11px", letterSpacing: "0.06em" }}
          >
            {article.category}
          </span>
          <span className="w-[3px] h-[3px] rounded-full bg-[#cbd5e1]" aria-hidden="true" />
          <span
            className="flex items-center gap-[4px] font-['DM_Sans'] font-normal text-[#94a3b8]"
            style={{ fontSize: "12px" }}
          >
            <Clock className="w-[11px] h-[11px]" aria-hidden="true" />
            {article.readTime}
          </span>
        </div>

        <h3
          className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.3] group-hover:text-[#00A4A4] transition-colors duration-200"
          style={{ fontSize: "18px", letterSpacing: "-0.4px" }}
        >
          {article.title}
        </h3>

        <p
          className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.65] flex-1"
          style={{ fontSize: "14px", letterSpacing: "-0.1px" }}
        >
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between pt-[8px] border-t border-[#f1f5f9]">
          <span
            className="font-['DM_Sans'] font-normal text-[#94a3b8]"
            style={{ fontSize: "12px" }}
          >
            {article.date}
          </span>
          <Link
            to={`/resources/${article.slug}`}
            className="inline-flex items-center gap-[6px] font-['DM_Sans'] font-semibold text-[#00A4A4] hover:gap-[10px] transition-all duration-200 focus:outline-none focus-visible:underline"
            style={{ fontSize: "13px" }}
            aria-label={`Read article: ${article.title}`}
          >
            Read Article
            <ArrowRight className="w-[13px] h-[13px]" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

// ─── Spotlight Card ───────────────────────────────────────────────────────────

function SpotlightCard({ article }: { article: Article }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group flex flex-col lg:flex-row bg-white rounded-[24px] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_64px_rgba(0,0,0,0.12)] hover:-translate-y-[2px]"
      style={{ border: "1px solid #e8ecf2" }}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden shrink-0 lg:w-[480px]" style={{ minHeight: "300px" }}>
        <ArticleThumbnail category={article.category} size="lg" />
        {/* Featured badge */}
        <div className="absolute top-[20px] left-[20px] z-10">
          <span
            className="font-['DM_Sans'] font-bold uppercase bg-[#00A4A4] text-white px-[14px] py-[6px] rounded-full"
            style={{ fontSize: "10px", letterSpacing: "0.1em" }}
          >
            Featured Article
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center gap-[20px] p-[40px] lg:p-[52px] flex-1">
        <div className="flex items-center gap-[10px]">
          <span
            className="font-['DM_Sans'] font-medium text-[#00A4A4] uppercase"
            style={{ fontSize: "12px", letterSpacing: "0.06em" }}
          >
            {article.category}
          </span>
          <span className="w-[3px] h-[3px] rounded-full bg-[#cbd5e1]" aria-hidden="true" />
          <span
            className="flex items-center gap-[5px] font-['DM_Sans'] font-normal text-[#94a3b8]"
            style={{ fontSize: "12px" }}
          >
            <Clock className="w-[12px] h-[12px]" aria-hidden="true" />
            {article.readTime}
          </span>
          <span className="w-[3px] h-[3px] rounded-full bg-[#cbd5e1]" aria-hidden="true" />
          <span className="font-['DM_Sans'] font-normal text-[#94a3b8]" style={{ fontSize: "12px" }}>
            {article.date}
          </span>
        </div>

        <h2
          className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.15] group-hover:text-[#00A4A4] transition-colors duration-300"
          style={{ fontSize: "clamp(22px, 2.5vw, 32px)", letterSpacing: "-1px" }}
        >
          {article.title}
        </h2>

        <p
          className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.7]"
          style={{ fontSize: "16px", letterSpacing: "-0.2px", maxWidth: "560px" }}
        >
          {article.excerpt}
        </p>

        <div className="flex items-center gap-[20px] pt-[4px]">
          <Link
            to={`/resources/${article.slug}`}
            className="inline-flex items-center gap-[10px] text-white font-['DM_Sans'] font-bold rounded-full transition-all duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A4A4]"
            style={{
              fontSize: "14px",
              padding: "14px 28px",
              background: "linear-gradient(135deg, #00A4A4 0%, #007a7a 100%)",
              boxShadow: "0 8px 24px rgba(0,164,164,0.3)",
              whiteSpace: "nowrap",
            }}
            aria-label={`Read featured article: ${article.title}`}
          >
            Read Article
            <ArrowRight className="w-[14px] h-[14px]" aria-hidden="true" />
          </Link>
          <span className="font-['DM_Sans'] font-normal text-[#94a3b8]" style={{ fontSize: "13px" }}>
            {article.author}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

// ─── Category Pill ────────────────────────────────────────────────────────────

function CategoryPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="font-['DM_Sans'] font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A4A4] shrink-0"
      style={{
        fontSize: "13px",
        padding: "9px 20px",
        backgroundColor: active ? "#00A4A4" : "white",
        color: active ? "white" : "#475569",
        border: active ? "1.5px solid #00A4A4" : "1.5px solid #e2e8f0",
        whiteSpace: "nowrap",
        boxShadow: active ? "0 4px 12px rgba(0,164,164,0.25)" : "none",
      }}
      aria-pressed={active}
    >
      {label}
    </button>
  );
}

// ─── FAQ Accordion Item ───────────────────────────────────────────────────────

function FaqItem({
  item,
  active,
  onClick,
}: {
  item: typeof FAQS[0];
  active: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className="border-b transition-colors duration-200"
      style={{ borderColor: active ? "rgba(0,164,164,0.2)" : "#e8ecf2" }}
    >
      <button
        onClick={onClick}
        className="w-full flex items-start justify-between gap-[20px] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A4A4] rounded-[4px]"
        style={{ padding: "24px 0" }}
        aria-expanded={active}
      >
        <span
          className="font-['DM_Sans'] font-semibold text-[#0f172a] leading-[1.4] flex-1"
          style={{ fontSize: "16px", letterSpacing: "-0.3px" }}
        >
          {item.q}
        </span>
        <div
          className="w-[28px] h-[28px] rounded-full flex items-center justify-center shrink-0 transition-all duration-300 mt-[1px]"
          style={{
            backgroundColor: active ? "#00A4A4" : "#f1f5f9",
            transform: active ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <ChevronDown
            className="transition-colors duration-200"
            style={{
              width: "14px",
              height: "14px",
              color: active ? "white" : "#64748b",
            }}
            aria-hidden="true"
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {active && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.7] pb-[24px]"
              style={{ fontSize: "15px", letterSpacing: "-0.2px" }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ResourcesPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeFaq, setActiveFaq] = useState<string>("01");

  const featured = ARTICLES.find((a) => a.featured)!;
  const showSpotlight = !query && activeCategory === "All";

  const gridArticles = ARTICLES.filter((a) => {
    if (a.featured && showSpotlight) return false;
    const matchCat = activeCategory === "All" || a.category === activeCategory;
    const matchQuery =
      !query ||
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery;
  });

  useEffect(() => {
    document.title = "Tax Help & Resources | SympleTax";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Tax guides, IRS insights, and practical advice — written for real people, not accountants."
      );
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", `${SITE_ORIGIN}/resources`);

    // FAQPage structured data
    const jsonLdId = "sympletax-jsonld-resources";
    let script = document.getElementById(jsonLdId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = jsonLdId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    return () => {
      document.getElementById(jsonLdId)?.remove();
    };
  }, []);

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

        {/* ── 02. Blog Header ───────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden pt-[120px] lg:pt-[160px] pb-[80px] lg:pb-[100px]"
          style={{ backgroundColor: "#faf8f5" }}
          aria-label="Resources hub"
        >
          {/* Decorative background */}
          <DiagPattern dark={false} />
          <div
            className="absolute pointer-events-none"
            aria-hidden="true"
            style={{
              top: 0,
              right: 0,
              width: "720px",
              height: "720px",
              background:
                "radial-gradient(circle at 85% 20%, rgba(0,164,164,0.08) 0%, transparent 60%)",
            }}
          />

          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px] relative z-10">
            <div className="flex flex-col gap-[0px]">

              {/* Heading block */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-[760px]"
              >
                <div className="flex items-center gap-[10px] mb-[24px]">
                  <div className="bg-[#00A4A4] h-px w-[35px]" />
                  <span
                    className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                    style={{ fontSize: "14px", letterSpacing: "0.05em" }}
                  >
                    Tax Knowledge Center
                  </span>
                </div>

                <h1
                  className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.06] mb-[20px]"
                  style={{ fontSize: "clamp(36px, 5.5vw, 72px)", letterSpacing: "-2.5px" }}
                >
                  Know Your Options.{" "}
                  <span className="text-[#00A4A4]">Know Your Rights.</span>
                </h1>

                <p
                  className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.7] mb-[40px]"
                  style={{
                    fontSize: "clamp(15px, 1.5vw, 18px)",
                    letterSpacing: "-0.3px",
                    maxWidth: "560px",
                  }}
                >
                  Tax guides, IRS insights, and practical advice — written for real people, not
                  accountants.
                </p>

                {/* Search bar */}
                <div className="relative" style={{ maxWidth: "540px" }}>
                  <Search
                    className="absolute text-[#94a3b8] pointer-events-none"
                    style={{ width: "18px", height: "18px", left: "20px", top: "50%", transform: "translateY(-50%)" }}
                    aria-hidden="true"
                  />
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search articles — OIC, CP90, wage garnishment…"
                    className="w-full bg-white border border-[#e2e8f0] text-[#0f172a] placeholder-[#94a3b8] rounded-full font-['DM_Sans'] focus:outline-none focus:border-[#00A4A4] focus:ring-2 focus:ring-[#00A4A4]/20 transition-all shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                    style={{ fontSize: "15px", padding: "16px 48px 16px 52px" }}
                    aria-label="Search tax articles"
                  />
                  {query && (
                    <button
                      onClick={() => setQuery("")}
                      className="absolute text-[#94a3b8] hover:text-[#475569] transition-colors focus:outline-none"
                      style={{ right: "18px", top: "50%", transform: "translateY(-50%)" }}
                      aria-label="Clear search"
                    >
                      <X style={{ width: "16px", height: "16px" }} />
                    </button>
                  )}
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── 03. Spotlight Article ─────────────────────────────────────────── */}
        <AnimatePresence>
          {showSpotlight && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-[60px] lg:py-[80px] relative overflow-hidden"
              style={{ backgroundColor: "#f8fafc" }}
              aria-label="Featured article"
            >
              <DiagPattern dark={false} />
              <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px] relative z-10">
                <div className="flex items-center gap-[10px] mb-[32px]">
                  <div className="bg-[#00A4A4] h-px w-[35px]" />
                  <span
                    className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                    style={{ fontSize: "14px", letterSpacing: "0.05em" }}
                  >
                    Spotlight Article
                  </span>
                </div>
                <SpotlightCard article={featured} />
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* ── 04. Article Grid ──────────────────────────────────────────────── */}
        <section
          className="py-[64px] lg:py-[100px] bg-white relative overflow-hidden"
          aria-label="All articles"
        >
          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px] relative z-10">

            {/* Section header */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-[24px] mb-[40px]">
              <div>
                <div className="flex items-center gap-[10px] mb-[16px]">
                  <div className="bg-[#00A4A4] h-px w-[35px]" />
                  <span
                    className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                    style={{ fontSize: "14px", letterSpacing: "0.05em" }}
                  >
                    Browse By Topic
                  </span>
                </div>
                <h2
                  className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.08]"
                  style={{ fontSize: "clamp(28px, 3.5vw, 48px)", letterSpacing: "-1.5px" }}
                >
                  {query
                    ? `Results for "${query}"`
                    : activeCategory !== "All"
                    ? activeCategory
                    : "All Articles"}
                </h2>
              </div>
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="inline-flex items-center gap-[8px] font-['DM_Sans'] font-medium text-[#475569] hover:text-[#0f172a] transition-colors"
                  style={{ fontSize: "14px" }}
                >
                  <X style={{ width: "14px", height: "14px" }} />
                  Clear search
                </button>
              )}
            </div>

            {/* Category filter pills */}
            <div
              className="flex gap-[10px] overflow-x-auto pb-[16px] mb-[48px]"
              style={{ scrollbarWidth: "none" }}
              role="group"
              aria-label="Filter articles by topic"
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

            {/* Grid or empty state */}
            {gridArticles.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px]">
                {gridArticles.map((article, idx) => (
                  <ArticleCard key={article.slug} article={article} idx={idx} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-[80px] flex flex-col items-center gap-[16px]"
              >
                <div
                  className="w-[72px] h-[72px] rounded-full flex items-center justify-center mb-[8px]"
                  style={{ backgroundColor: "#f1f5f9" }}
                >
                  <BookOpen
                    style={{ width: "30px", height: "30px", color: "#cbd5e1" }}
                    aria-hidden="true"
                  />
                </div>
                <p
                  className="font-['DM_Sans'] font-semibold text-[#0f172a]"
                  style={{ fontSize: "18px" }}
                >
                  No articles found
                </p>
                <p
                  className="font-['DM_Sans'] font-normal text-[#94a3b8]"
                  style={{ fontSize: "15px" }}
                >
                  Try a different search term or browse all categories.
                </p>
                <button
                  onClick={() => { setQuery(""); setActiveCategory("All"); }}
                  className="inline-flex items-center gap-[8px] font-['DM_Sans'] font-semibold text-[#00A4A4] hover:text-[#007a7a] transition-colors"
                  style={{ fontSize: "14px" }}
                >
                  View all articles
                  <ArrowRight style={{ width: "14px", height: "14px" }} />
                </button>
              </motion.div>
            )}

            {/* Load more */}
            {gridArticles.length > 0 && (
              <div className="text-center mt-[60px]">
                <p
                  className="font-['DM_Sans'] font-normal text-[#94a3b8] mb-[20px]"
                  style={{ fontSize: "14px" }}
                >
                  Showing {gridArticles.length} article{gridArticles.length !== 1 ? "s" : ""} — 50+
                  total coming soon
                </p>
                <button
                  className="inline-flex items-center gap-[10px] border-[1.5px] border-[#00A4A4] text-[#00A4A4] font-['DM_Sans'] font-bold rounded-full hover:bg-[#00A4A4] hover:text-white transition-all duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A4A4]"
                  style={{ fontSize: "14px", padding: "14px 36px" }}
                >
                  Load More Articles
                  <ArrowRight style={{ width: "14px", height: "14px" }} aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ── 04b. FAQ Section ──────────────────────────────────────────────── */}
        <section
          className="py-[64px] lg:py-[120px] relative overflow-hidden"
          style={{ backgroundColor: "#f8fafc" }}
          aria-label="Common questions"
        >
          <DiagPattern dark={false} />
          <div
            className="absolute pointer-events-none"
            aria-hidden="true"
            style={{
              top: "-100px",
              right: "-100px",
              width: "600px",
              height: "600px",
              background: "radial-gradient(circle at 70% 30%, rgba(0,164,164,0.07) 0%, transparent 65%)",
            }}
          />

          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px] relative z-10">
            <div className="flex flex-col lg:flex-row gap-[64px] lg:gap-[100px]">

              {/* Left: sticky heading + CTA */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:w-[360px] lg:shrink-0 flex flex-col gap-[28px]"
              >
                <div>
                  <div className="flex items-center gap-[10px] mb-[20px]">
                    <div className="bg-[#00A4A4] h-px w-[35px]" />
                    <span
                      className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                      style={{ fontSize: "14px", letterSpacing: "0.05em" }}
                    >
                      Common Questions
                    </span>
                  </div>
                  <h2
                    className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.08]"
                    style={{ fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-1.5px" }}
                  >
                    Questions From Real Taxpayers
                  </h2>
                </div>

                <p
                  className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.7]"
                  style={{ fontSize: "16px", letterSpacing: "-0.3px" }}
                >
                  These are the questions we hear most often from people dealing with IRS debt for
                  the first time. Plain answers, no jargon.
                </p>

                <div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-[10px] text-white font-['DM_Sans'] font-bold rounded-full transition-all duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A4A4]"
                    style={{
                      fontSize: "14px",
                      padding: "15px 28px",
                      background: "linear-gradient(135deg, #00A4A4 0%, #007a7a 100%)",
                      boxShadow: "0 8px 24px rgba(0,164,164,0.3)",
                    }}
                    aria-label="Get a free tax consultation"
                  >
                    Ask a Real Expert
                    <ArrowRight style={{ width: "14px", height: "14px" }} aria-hidden="true" />
                  </Link>
                  <p
                    className="font-['DM_Sans'] font-normal text-[#94a3b8] mt-[10px]"
                    style={{ fontSize: "12px" }}
                  >
                    Free · No commitment
                  </p>
                </div>
              </motion.div>

              {/* Right: accordion */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex-1"
              >
                {FAQS.map((item) => (
                  <FaqItem
                    key={item.id}
                    item={item}
                    active={activeFaq === item.id}
                    onClick={() => {
                      if (activeFaq !== item.id) setActiveFaq(item.id);
                    }}
                  />
                ))}
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── 05. Lead Capture ──────────────────────────────────────────────── */}
        <section
          className="py-[80px] lg:py-[120px] relative overflow-hidden"
          style={{ backgroundColor: "#faf8f5" }}
          aria-label="Get your free case review"
        >
          <DiagPattern dark={false} />
          <div
            className="absolute pointer-events-none"
            aria-hidden="true"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "800px",
              height: "800px",
              background:
                "radial-gradient(circle, rgba(0,164,164,0.06) 0%, transparent 65%)",
            }}
          />

          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px] relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center flex flex-col items-center gap-[28px]"
            >
              <div className="flex items-center gap-[10px]">
                <div className="bg-[#00A4A4] h-px w-[35px]" />
                <span
                  className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                  style={{ fontSize: "14px", letterSpacing: "0.05em" }}
                >
                  Get Your Free Review
                </span>
                <div className="bg-[#00A4A4] h-px w-[35px]" />
              </div>

              <h2
                className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.08]"
                style={{ fontSize: "clamp(30px, 4.5vw, 58px)", letterSpacing: "-1.5px", maxWidth: "760px" }}
              >
                Still Not Sure Where To Start?
              </h2>

              <p
                className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.7]"
                style={{ fontSize: "clamp(15px, 1.5vw, 18px)", maxWidth: "500px" }}
              >
                Every SympleTax consultation starts with an honest review of your IRS account — what you actually owe, what actions are pending, and what your real options are.
              </p>

              <div className="flex flex-col items-center gap-[14px]">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-[12px] text-white font-['DM_Sans'] font-bold rounded-full transition-all duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A4A4]"
                  style={{
                    fontSize: "16px",
                    padding: "18px 44px",
                    background: "linear-gradient(135deg, #00A4A4 0%, #007a7a 100%)",
                    boxShadow: "0 12px 32px rgba(0,164,164,0.3)",
                  }}
                  aria-label="Get a free tax consultation with SympleTax"
                >
                  Get a Free Consultation
                  <ArrowRight style={{ width: "16px", height: "16px" }} aria-hidden="true" />
                </Link>
                <p
                  className="font-['DM_Sans'] font-normal text-[#94a3b8]"
                  style={{ fontSize: "13px", letterSpacing: "-0.1px" }}
                >
                  No cost. No commitment. Just clarity.
                </p>
              </div>

            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
