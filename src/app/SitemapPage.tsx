import { usePageSEO } from "./hooks/usePageSEO";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Navbar } from "./components/v2/Navbar";
import { Footer } from "./components/v2/Footer";
import { ALL_SLUGS, getServiceBySlug } from "./serviceContent";
import { getPublicArticles } from "./data/articleAccess";

const MAIN_PAGES: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/process", label: "How It Works" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Tax Solutions" },
  { href: "/contact", label: "Contact" },
  { href: "/resources", label: "Tax Knowledge Center" },
];

const LEGAL_PAGES: { href: string; label: string }[] = [
  { href: "/legal/privacy-policy", label: "Privacy Policy" },
  { href: "/legal/terms-of-service", label: "Terms of Service" },
  { href: "/legal/disclaimer", label: "Disclaimer" },
  { href: "/legal/california-privacy", label: "California Privacy Rights" },
];

function SitemapSection({
  title,
  links,
  delay = 0,
}: {
  title: string;
  links: { href: string; label: string }[];
  delay?: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      className="flex flex-col gap-[20px]"
      aria-labelledby={`sitemap-${title.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <h2
        id={`sitemap-${title.replace(/\s+/g, "-").toLowerCase()}`}
        className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.08]"
        style={{ fontSize: "clamp(22px, 3vw, 28px)", letterSpacing: "-1px" }}
      >
        {title}
      </h2>
      <ul className="flex flex-col gap-[10px] list-none p-0 m-0" role="list">
        {links.map((item) => (
          <li key={item.href}>
            <Link
              to={item.href}
              className="font-['DM_Sans'] font-normal text-[#475569] hover:text-[#00A4A4] transition-colors focus:outline-none focus-visible:underline inline-block"
              style={{ fontSize: "16px", letterSpacing: "-0.3px" }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}

export default function SitemapPage() {
  usePageSEO({
    title: "HTML Sitemap | SympleTax",
    description:
      "Browse every SympleTax page — home, about, process, services, tax solutions, resources, articles, and legal policies — in one place for easy navigation.",
    path: "/sitemap",
  });

  const solutionLinks = ALL_SLUGS.map((slug) => {
    const s = getServiceBySlug(slug);
    return {
      href: `/solutions/${slug}`,
      label: s?.eyebrow ?? slug.replace(/-/g, " "),
    };
  });

  const articleLinks = getPublicArticles().map((a) => ({
    href: `/resources/${a.slug}`,
    label: a.title,
  }));

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-[16px] focus:left-[16px] focus:z-[200] focus:bg-[#00A4A4] focus:text-white focus:px-[16px] focus:py-[8px] focus:rounded-full font-['DM_Sans'] font-bold"
        style={{ fontSize: "14px" }}
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <section className="py-[120px] bg-white" aria-label="HTML sitemap">
          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-[48px] lg:mb-[72px]"
            >
              <div className="flex items-center gap-[10px] mb-[20px]">
                <div className="bg-[#00A4A4] h-px w-[35px]" />
                <span
                  className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                  style={{ fontSize: "14px", letterSpacing: "0.05em" }}
                >
                  Navigation
                </span>
              </div>
              <h1
                className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.08] mb-[20px]"
                style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-1.5px" }}
              >
                Site Map
              </h1>
              <p
                className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.65] max-w-[560px]"
                style={{ fontSize: "16px", letterSpacing: "-0.3px" }}
              >
                A full list of pages on SympleTax.com for easy browsing. For crawlers, the same URLs are listed in{" "}
                <a
                  href="/sitemap.xml"
                  className="text-[#00A4A4] hover:underline font-medium"
                >
                  sitemap.xml
                </a>{" "}
                and{" "}
                <a href="/sympletax.xml" className="text-[#00A4A4] hover:underline font-medium">
                  sympletax.xml
                </a>{" "}
                (regenerated on each production build).
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px] lg:gap-[60px]">
              <div className="flex flex-col gap-[48px]">
                <SitemapSection title="Main Pages" links={MAIN_PAGES} delay={0} />
                <SitemapSection title="Legal" links={LEGAL_PAGES} delay={0.05} />
              </div>
              <div className="flex flex-col gap-[48px]">
                <SitemapSection title="Tax Solutions" links={solutionLinks} delay={0.08} />
                <SitemapSection title="Tax Knowledge Articles" links={articleLinks} delay={0.1} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
