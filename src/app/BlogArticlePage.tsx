import { motion } from "motion/react";
import { Link, useParams, useNavigate } from "react-router";
import { Navbar } from "./components/v2/Navbar";
import { Footer } from "./components/v2/Footer";
import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  BookOpen,
  ChevronRight,
  User,
} from "lucide-react";
import {
  CATEGORY_GRADIENT,
  type Article,
  type ContentBlock,
} from "./data/articles";
import {
  getArticleBySlug,
  canAccessArticleSlug,
  getAccessibleRelated,
} from "./data/articleAccess";
import { SITE_ORIGIN } from "../config/site";
import { applyPageMeta } from "./hooks/usePageSEO";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

// ─── Background Decoration ────────────────────────────────────────────────────

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

// ─── Related Article Card ─────────────────────────────────────────────────────

function RelatedCard({ article, idx }: { article: Article; idx: number }) {
  const [from, to] = CATEGORY_GRADIENT[article.category] ?? ["#0f172a", "#1e293b"];
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="group bg-white rounded-[20px] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] hover:-translate-y-[3px]"
      style={{ border: "1px solid #e8ecf2" }}
    >
      <div className="relative shrink-0" style={{ height: "180px" }}>
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)` }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "25px 25px",
            }}
          />
        </div>
        <div className="absolute top-[12px] left-[12px] z-10">
          <span
            className="font-['DM_Sans'] font-medium px-[10px] py-[4px] rounded-full bg-white/20 text-white backdrop-blur-sm"
            style={{ fontSize: "10px", letterSpacing: "0.04em" }}
          >
            {article.category}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-[12px] p-[24px] flex-1">
        <div className="flex items-center gap-[8px]">
          <Clock style={{ width: "11px", height: "11px", color: "#94a3b8" }} aria-hidden="true" />
          <span className="font-['DM_Sans'] font-normal text-[#94a3b8]" style={{ fontSize: "12px" }}>
            {article.readTime}
          </span>
        </div>

        <h3
          className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.3] group-hover:text-[#00A4A4] transition-colors duration-200"
          style={{ fontSize: "17px", letterSpacing: "-0.4px" }}
        >
          {article.title}
        </h3>

        <p
          className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.65] flex-1"
          style={{ fontSize: "13px", letterSpacing: "-0.1px" }}
        >
          {article.excerpt}
        </p>

        <Link
          to={`/resources/${article.slug}`}
          className="inline-flex items-center gap-[6px] font-['DM_Sans'] font-semibold text-[#00A4A4] hover:gap-[10px] transition-all duration-200 mt-[4px] focus:outline-none focus-visible:underline"
          style={{ fontSize: "13px" }}
          aria-label={`Read: ${article.title}`}
        >
          Read Article
          <ArrowRight style={{ width: "13px", height: "13px" }} aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  );
}

// ─── Content Renderer ─────────────────────────────────────────────────────────

function InlineCTA() {
  return (
    <div
      className="my-[48px] rounded-[20px] p-[36px] flex flex-col lg:flex-row lg:items-center gap-[24px] lg:gap-[40px]"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1a2744 100%)",
        border: "1px solid rgba(0,164,164,0.2)",
      }}
    >
      <div className="flex-1">
        <p
          className="font-['DM_Sans'] font-bold text-white leading-[1.3] mb-[8px]"
          style={{ fontSize: "clamp(18px, 2vw, 22px)", letterSpacing: "-0.5px" }}
        >
          Need help with this? Talk to a SympleTax expert — free.
        </p>
        <p
          className="font-['DM_Sans'] font-normal text-white/55"
          style={{ fontSize: "14px" }}
        >
          We'll review your IRS account, explain your options, and tell you exactly what's possible in your situation.
        </p>
      </div>
      <Link
        to="https://ti.sympletax.com/free-consultation"
        className="inline-flex items-center gap-[10px] text-white font-['DM_Sans'] font-bold rounded-full transition-all duration-300 hover:scale-[1.02] shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A4A4]"
        style={{
          fontSize: "14px",
          padding: "14px 28px",
          background: "linear-gradient(135deg, #00A4A4 0%, #007a7a 100%)",
          whiteSpace: "nowrap",
        }}
        aria-label="Get a free tax consultation"
      >
        Get My Free Consultation
        <ArrowRight style={{ width: "14px", height: "14px" }} aria-hidden="true" />
      </Link>
    </div>
  );
}

function renderBlock(block: ContentBlock, idx: number): React.ReactNode {
  switch (block.type) {
    case "p":
      return (
        <p
          key={idx}
          className="font-['DM_Sans'] font-normal text-[#334155] leading-[1.85]"
          style={{ fontSize: "17px", letterSpacing: "-0.2px" }}
        >
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2
          key={idx}
          id={block.id}
          className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.2] mt-[48px] mb-[8px]"
          style={{ fontSize: "clamp(22px, 2.5vw, 28px)", letterSpacing: "-0.8px", scrollMarginTop: "120px" }}
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={idx}
          id={block.id}
          className="font-['DM_Sans'] font-semibold text-[#0f172a] leading-[1.3] mt-[32px] mb-[6px]"
          style={{ fontSize: "clamp(18px, 2vw, 21px)", letterSpacing: "-0.4px", scrollMarginTop: "120px" }}
        >
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul
          key={idx}
          className="flex flex-col gap-[10px] my-[4px]"
          style={{ paddingLeft: "0" }}
        >
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-[12px]">
              <div
                className="w-[6px] h-[6px] rounded-full bg-[#00A4A4] shrink-0"
                style={{ marginTop: "10px" }}
                aria-hidden="true"
              />
              <span
                className="font-['DM_Sans'] font-normal text-[#334155] leading-[1.75]"
                style={{ fontSize: "16px", letterSpacing: "-0.1px" }}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={idx} className="flex flex-col gap-[10px] my-[4px]">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-[16px]">
              <span
                className="font-['DM_Sans'] font-bold text-[#00A4A4] shrink-0 leading-none"
                style={{ fontSize: "14px", minWidth: "24px", marginTop: "3px" }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}.
              </span>
              <span
                className="font-['DM_Sans'] font-normal text-[#334155] leading-[1.75]"
                style={{ fontSize: "16px", letterSpacing: "-0.1px" }}
              >
                {item}
              </span>
            </li>
          ))}
        </ol>
      );
    case "callout": {
      const styles: Record<string, { bg: string; border: string; dot: string }> = {
        tip:     { bg: "rgba(0,164,164,0.06)",  border: "rgba(0,164,164,0.2)", dot: "#00A4A4" },
        warning: { bg: "rgba(245,158,11,0.07)", border: "rgba(245,158,11,0.25)", dot: "#f59e0b" },
        info:    { bg: "rgba(99,102,241,0.06)", border: "rgba(99,102,241,0.2)", dot: "#6366f1" },
      };
      const s = styles[block.variant];
      return (
        <div
          key={idx}
          className="rounded-[14px] p-[24px] flex gap-[16px]"
          style={{ backgroundColor: s.bg, border: `1px solid ${s.border}` }}
        >
          <div
            className="w-[8px] h-[8px] rounded-full shrink-0"
            style={{ backgroundColor: s.dot, marginTop: "8px" }}
            aria-hidden="true"
          />
          <p
            className="font-['DM_Sans'] font-normal text-[#334155] leading-[1.75]"
            style={{ fontSize: "15px", letterSpacing: "-0.1px" }}
          >
            {block.text}
          </p>
        </div>
      );
    }
    case "cta":
      return <InlineCTA key={idx} />;
    default:
      return null;
  }
}

// ─── TOC Types ────────────────────────────────────────────────────────────────

interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

function extractToc(content: ContentBlock[]): TocItem[] {
  return content.flatMap((b) => {
    if (b.type === "h2") return [{ id: b.id, text: b.text, level: 2 as const }];
    if (b.type === "h3") return [{ id: b.id, text: b.text, level: 3 as const }];
    return [];
  });
}

// ─── TOC Sidebar ─────────────────────────────────────────────────────────────

function TableOfContents({
  items,
  activeId,
  onItemClick,
}: {
  items: TocItem[];
  activeId: string;
  onItemClick: (id: string) => void;
}) {
  if (items.length === 0) return null;
  return (
    <nav aria-label="Table of contents">
      <p
        className="font-['DM_Sans'] font-bold text-[#0f172a] mb-[16px] uppercase"
        style={{ fontSize: "11px", letterSpacing: "0.1em" }}
      >
        Quick Answers
      </p>
      <div className="flex flex-col gap-[2px]">
        {items.map((item) => {
          const active = activeId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onItemClick(item.id)}
              className="text-left flex items-start gap-[10px] rounded-[6px] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A4A4]"
              style={{
                padding: "8px 10px",
                paddingLeft: item.level === 3 ? "22px" : "10px",
                backgroundColor: active ? "rgba(0,164,164,0.08)" : "transparent",
              }}
              aria-current={active ? "location" : undefined}
            >
              {item.level === 2 && (
                <div
                  className="w-[3px] rounded-full shrink-0 transition-colors duration-200"
                  style={{
                    height: "16px",
                    backgroundColor: active ? "#00A4A4" : "#e2e8f0",
                    marginTop: "2px",
                  }}
                  aria-hidden="true"
                />
              )}
              <span
                className="font-['DM_Sans'] transition-colors duration-200 leading-[1.4]"
                style={{
                  fontSize: "13px",
                  fontWeight: active ? 600 : 400,
                  color: active ? "#00A4A4" : "#64748b",
                  letterSpacing: "-0.1px",
                }}
              >
                {item.text}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

// ─── Sticky CTA Widget ────────────────────────────────────────────────────────

function SidebarCTA() {
  return (
    <div
      className="rounded-[20px] overflow-hidden"
      style={{
        background: "#faf8f5",
        border: "1.5px solid #e8e2d8",
        boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
      }}
    >
      <div className="p-[28px]">
        <div
          className="w-[44px] h-[44px] rounded-[12px] flex items-center justify-center mb-[16px]"
          style={{ backgroundColor: "rgba(0,164,164,0.1)", border: "1px solid rgba(0,164,164,0.2)" }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zM9 6h2v5H9V6zm0 6h2v2H9v-2z" fill="#00A4A4"/>
          </svg>
        </div>

        <p
          className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.3] mb-[8px]"
          style={{ fontSize: "17px", letterSpacing: "-0.4px" }}
        >
          Does This Apply to You?
        </p>
        <p
          className="font-['DM_Sans'] font-normal text-[#64748b] leading-[1.6] mb-[20px]"
          style={{ fontSize: "14px" }}
        >
          Get a free, no-obligation review of your IRS account from a licensed professional.
        </p>

        <Link
          to="https://ti.sympletax.com/free-consultation"
          className="flex items-center justify-center gap-[8px] text-white font-['DM_Sans'] font-bold rounded-full transition-all duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A4A4]"
          style={{
            fontSize: "13px",
            padding: "13px 20px",
            background: "linear-gradient(135deg, #00A4A4 0%, #007a7a 100%)",
          }}
          aria-label="Get a free tax consultation"
        >
          Get My Free Consultation
          <ArrowRight style={{ width: "13px", height: "13px" }} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  /** Memoized: getArticleBySlug returns a new object each call (showcase overrides), which was retriggering effects every render and resetting scroll. */
  const article = useMemo(() => getArticleBySlug(slug), [slug]);
  const tocItems = useMemo(
    () => (article ? extractToc(article.content) : []),
    [article]
  );
  const [activeSection, setActiveSection] = useState<string>(tocItems[0]?.id ?? "");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!slug) {
      navigate("/resources", { replace: true });
      return;
    }
    if (!getArticleBySlug(slug) || !canAccessArticleSlug(slug)) {
      navigate("/resources", { replace: true });
    }
  }, [slug, navigate]);

  useEffect(() => {
    if (!article?.noIndex) return;
    const id = "sympletax-meta-robots-noindex";
    let el = document.getElementById(id) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement("meta");
      el.id = id;
      el.setAttribute("name", "robots");
      document.head.appendChild(el);
    }
    el.setAttribute("content", "noindex, nofollow");
    return () => {
      document.getElementById(id)?.remove();
    };
  }, [article?.noIndex, article?.slug]);

  // Set meta tags and structured data
  useEffect(() => {
    if (!article) return;
    applyPageMeta({
      title: article.metaTitle,
      description: article.metaDescription,
      path: `/resources/${article.slug}`,
      ogType: "article",
      ogImageAbsolute: article.coverImage ?? undefined,
    });

    const jsonLdId = "sympletax-jsonld-article";
    let script = document.getElementById(jsonLdId) as HTMLScriptElement | null;
    if (!article.noIndex) {
      if (!script) {
        script = document.createElement("script");
        script.id = jsonLdId;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      const jsonLd: Record<string, unknown> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.metaDescription,
        datePublished: article.dateISO,
        author: { "@type": "Organization", name: "SympleTax" },
        publisher: {
          "@type": "Organization",
          name: "SympleTax",
          url: SITE_ORIGIN,
        },
        url: `${SITE_ORIGIN}/resources/${article.slug}`,
      };
      if (article.coverImage) {
        jsonLd.image = [article.coverImage];
      }
      script.textContent = JSON.stringify(jsonLd);
    } else if (script) {
      script.remove();
    }

    return () => {
      document.getElementById(jsonLdId)?.remove();
    };
  }, [article]);

  // IntersectionObserver for TOC active section
  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      }
    },
    []
  );

  useEffect(() => {
    if (tocItems.length === 0) return;
    observerRef.current?.disconnect();
    observerRef.current = new IntersectionObserver(handleIntersection, {
      rootMargin: "-10% 0px -70% 0px",
    });
    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, [tocItems, handleIntersection]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!article) return null;

  const relatedArticles = getAccessibleRelated(article);

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
        {/* ── 02. Article Header ────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden pt-[120px] lg:pt-[160px] pb-[0px]"
          style={{ backgroundColor: "#0f172a" }}
          aria-label="Article header"
        >
          <DiagPattern dark />
          <div
            className="absolute pointer-events-none"
            aria-hidden="true"
            style={{
              top: 0,
              right: 0,
              width: "700px",
              height: "700px",
              background: "radial-gradient(circle at 80% 20%, rgba(0,164,164,0.15) 0%, transparent 60%)",
            }}
          />

          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px] relative z-10">

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-[32px]">
              <ol className="flex items-center gap-[8px]">
                <li>
                  <Link
                    to="/resources"
                    className="font-['DM_Sans'] font-normal text-white/40 hover:text-[#00A4A4] transition-colors"
                    style={{ fontSize: "14px" }}
                  >
                    Resources
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight style={{ width: "14px", height: "14px", color: "rgba(255,255,255,0.2)" }} />
                </li>
                <li>
                  <span
                    className="font-['DM_Sans'] font-medium text-[#00A4A4]"
                    style={{ fontSize: "14px" }}
                    aria-current="page"
                  >
                    {article.category}
                  </span>
                </li>
              </ol>
            </nav>

            {/* Category tag */}
            <div className="mb-[20px]">
              <span
                className="inline-block font-['DM_Sans'] font-medium uppercase text-white rounded-full px-[14px] py-[6px]"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.08em",
                  backgroundColor: "rgba(0,164,164,0.2)",
                  border: "1px solid rgba(0,164,164,0.35)",
                }}
              >
                {article.category}
              </span>
            </div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-['DM_Sans'] font-bold text-white leading-[1.08] mb-[28px]"
              style={{ fontSize: "clamp(28px, 4.5vw, 56px)", letterSpacing: "-2px", maxWidth: "900px" }}
            >
              {article.title}
            </motion.h1>
          </div>
        </section>

        {/* ── 03. Article Body + Sidebar ────────────────────────────────────── */}
        <section className="py-[64px] lg:py-[80px] bg-white" aria-label="Article content">
          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px]">
            <div className="flex gap-[80px]">

              {/* Article body */}
              <article className="flex-1 min-w-0">
                <div className="flex flex-col gap-[20px]">
                  {article.content.map((block, idx) => renderBlock(block, idx))}
                </div>

              </article>

              {/* Sticky sidebar — desktop only */}
              <aside
                className="hidden lg:block shrink-0 self-start"
                style={{ width: "300px", position: "sticky", top: "104px" }}
                aria-label="Article sidebar"
              >
                <div className="flex flex-col gap-[20px]">
                  {/* TOC */}
                  <div
                    className="rounded-[20px] p-[28px]"
                    style={{
                      border: "1.5px solid #e8e2d8",
                      backgroundColor: "#faf8f5",
                    }}
                  >
                    <TableOfContents
                      items={tocItems}
                      activeId={activeSection}
                      onItemClick={scrollToSection}
                    />
                  </div>

                  {/* CTA widget */}
                  <SidebarCTA />
                </div>
              </aside>

            </div>
          </div>
        </section>

        {/* ── 05. Related Articles ──────────────────────────────────────────── */}
        {relatedArticles.length > 0 && (
          <section
            className="py-[64px] lg:py-[100px] relative overflow-hidden"
            style={{ backgroundColor: "#f8fafc" }}
            aria-label="Related articles"
          >
            <div
              className="absolute pointer-events-none"
              aria-hidden="true"
              style={{
                top: 0, right: 0, width: "600px", height: "600px",
                background: "radial-gradient(circle at 80% 20%, rgba(0,164,164,0.07) 0%, transparent 65%)",
              }}
            />

            <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px] relative z-10">

              {/* Back link */}
              <Link
                to="/resources"
                className="inline-flex items-center gap-[8px] font-['DM_Sans'] font-medium text-[#475569] hover:text-[#0f172a] transition-colors mb-[48px] focus:outline-none focus-visible:underline"
                style={{ fontSize: "14px" }}
              >
                <ArrowLeft style={{ width: "14px", height: "14px" }} aria-hidden="true" />
                Back to Resources
              </Link>

              {/* Section header */}
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-[20px] mb-[40px]">
                <div>
                  <div className="flex items-center gap-[10px] mb-[16px]">
                    <div className="bg-[#00A4A4] h-px w-[35px]" />
                    <span
                      className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                      style={{ fontSize: "14px", letterSpacing: "0.05em" }}
                    >
                      Resources
                    </span>
                  </div>
                  <h2
                    className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.08]"
                    style={{ fontSize: "clamp(26px, 3vw, 42px)", letterSpacing: "-1.5px" }}
                  >
                    Related Resources
                  </h2>
                </div>
                <Link
                  to="/resources"
                  className="inline-flex items-center gap-[8px] font-['DM_Sans'] font-semibold text-[#00A4A4] hover:text-[#007a7a] transition-colors shrink-0 focus:outline-none focus-visible:underline"
                  style={{ fontSize: "14px" }}
                >
                  All Articles
                  <ArrowRight style={{ width: "14px", height: "14px" }} aria-hidden="true" />
                </Link>
              </div>

              {/* Related cards */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px]">
                {relatedArticles.map((rel, idx) => (
                  <RelatedCard key={rel.slug} article={rel} idx={idx} />
                ))}
              </div>

            </div>
          </section>
        )}

        <section
          className="py-[64px] lg:py-[90px] bg-white"
          aria-label="Get a free consultation"
        >
          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px]">
            <div className="text-center">
              <Link
                to="https://ti.sympletax.com/free-consultation"
                className="inline-flex items-center gap-[10px] text-white font-['DM_Sans'] font-bold rounded-full transition-all duration-300 hover:scale-[1.02]"
                style={{
                  fontSize: "16px",
                  padding: "16px 34px",
                  background: "linear-gradient(135deg, #00A4A4 0%, #007a7a 100%)",
                }}
                aria-label="Get a free consultation"
              >
                Get a Free Consultation
                <ArrowRight style={{ width: "14px", height: "14px" }} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Mobile CTA (bottom) ──────────────────────────────────────────── */}
        <section
          className="py-[60px] lg:hidden relative overflow-hidden"
          style={{ backgroundColor: "#0f172a" }}
          aria-label="Get help"
        >
          <DiagPattern dark />
          <div className="max-w-[1330px] mx-auto px-[25px] relative z-10 text-center">
            <p
              className="font-['DM_Sans'] font-bold text-white leading-[1.3] mb-[8px]"
              style={{ fontSize: "22px", letterSpacing: "-0.5px" }}
            >
              Does This Apply to You?
            </p>
            <p
              className="font-['DM_Sans'] font-normal text-white/55 mb-[24px]"
              style={{ fontSize: "15px" }}
            >
              Get a free, no-obligation IRS account review.
            </p>
            <Link
              to="https://ti.sympletax.com/free-consultation"
              className="inline-flex items-center gap-[10px] text-white font-['DM_Sans'] font-bold rounded-full transition-all duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A4A4]"
              style={{
                fontSize: "15px",
                padding: "15px 32px",
                background: "linear-gradient(135deg, #00A4A4 0%, #007a7a 100%)",
              }}
              aria-label="Get a free tax consultation"
            >
              Get My Free Consultation
              <ArrowRight style={{ width: "14px", height: "14px" }} aria-hidden="true" />
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
