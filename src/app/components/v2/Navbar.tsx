import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, ChevronDown, ExternalLink } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import sympletaxLogo from "../../../assets/SympleTax.png";

// ─── Dropdown Data ────────────────────────────────────────────────────────────

const SERVICES_DROPDOWN = {
  columns: [
    {
      heading: "Tax Services",
      links: [
        { name: "Tax Negotiation", href: "/solutions" },
        { name: "Tax Relief", href: "/solutions" },
        { name: "Tax Settlement", href: "/solutions" },
        { name: "Tax Resolution", href: "/solutions" },
        { name: "Tax Knowledge Center", href: "/resources" },
      ],
    },
    {
      heading: "Fresh Start Programs",
      links: [
        { name: "Offer in Compromise", href: "/solutions/offer-in-compromise" },
        { name: "Penalty Abatement", href: "/solutions/penalty-abatement" },
        { name: "Currently Not Collectible", href: "/solutions/currently-not-collectible" },
        { name: "Innocent Spouse Relief", href: "/solutions/innocent-spouse-relief" },
      ],
    },
    {
      heading: "Get Help With",
      links: [
        { name: "IRS Back Taxes", href: "/solutions/back-taxes" },
        { name: "Wage Garnishment", href: "/solutions/wage-garnishment" },
        { name: "Tax Liens & Levies", href: "/solutions/tax-lien" },
        { name: "Unfiled Tax Returns", href: "/solutions/unfiled-returns" },
      ],
    },
  ],
  featured: {
    title: "Not sure where to start?",
    body: "A licensed professional will review your case for free.",
    cta: "Get a Free Consultation",
    href: "/contact",
  },
};

const RESOURCES_LINKS = {
  left: {
    heading: "Tax Resources",
    links: [
      { name: "IRS Notice Center", href: "/resources/irs-cp90-notice" },
      { name: "Frequently Asked Questions", href: "/resources" },
      { name: "Common IRS Notices", href: "/resources/irs-cp90-notice" },
      { name: "Wage Garnishment Guide", href: "/resources/wage-garnishment" },
      { name: "When to Hire a Professional", href: "/resources/when-to-hire-professional" },
    ],
  },
  right: {
    heading: "IRS Programs",
    links: [
      { name: "IRS Fresh Start Program", href: "/solutions/fresh-start-program" },
      { name: "Offer in Compromise", href: "/solutions/offer-in-compromise" },
      { name: "Currently Not Collectible", href: "/solutions/currently-not-collectible" },
      { name: "Penalty Abatement", href: "/solutions/penalty-abatement" },
      { name: "Installment Agreements", href: "/solutions/installment-agreement" },
    ],
  },
  image: {
    src: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&h=500&fit=crop&q=80",
    headline: "We're Here To Help.",
    cta: "Get Started",
    href: "/contact",
  },
};

const CASE_ACCESS_LINKS = {
  left: {
    heading: "SympleTax Portals",
    links: [
      { name: "Client Login", href: "https://ti.sympletax.com/free-consultation", external: true },
    ],
  },
  right: {
    heading: "New Client",
    links: [
      { name: "Free Consultation", href: "/contact", external: false },
    ],
  },
};

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Our Company", href: "/about" },
  { name: "Our Services", href: "/services", dropdown: "services" },
  { name: "Resources", href: "/resources", dropdown: "resources" },
  { name: "Case Access", href: "#", dropdown: "case" },
];

const MOBILE_NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Our Company", href: "/about" },
  {
    name: "Our Services",
    href: "/services",
    accordion: [
      { name: "Tax Negotiation", href: "/solutions" },
      { name: "Tax Relief", href: "/solutions" },
      { name: "Tax Settlement", href: "/solutions" },
      { name: "Tax Resolution", href: "/solutions" },
      { name: "Offer in Compromise", href: "/solutions/offer-in-compromise" },
      { name: "Penalty Abatement", href: "/solutions/penalty-abatement" },
      { name: "Currently Not Collectible", href: "/solutions/currently-not-collectible" },
      { name: "Innocent Spouse Relief", href: "/solutions/innocent-spouse-relief" },
    ],
  },
  {
    name: "Resources",
    href: "/resources",
    accordion: [
      { name: "All Resources", href: "/resources" },
      { name: "IRS Notice Center", href: "/resources/irs-cp90-notice" },
      { name: "Common IRS Notices", href: "/resources/irs-cp90-notice" },
      { name: "Wage Garnishment Guide", href: "/resources/wage-garnishment" },
      { name: "When to Hire a Professional", href: "/resources/when-to-hire-professional" },
      { name: "IRS Fresh Start Program", href: "/solutions/fresh-start-program" },
    ],
  },
  {
    name: "Case Access",
    href: "#",
    accordion: [
      { name: "Client Login", href: "https://ti.sympletax.com/free-consultation" },
      { name: "Free Consultation", href: "/contact" },
    ],
  },
  { name: "Contact Us", href: "/contact" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  function openDropdown(name: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(name);
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 140);
  }

  function closeMobileMenu() {
    setIsOpen(false);
    setMobileExpanded(null);
  }

  const isScrolled = scrolled;

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-[#00A4A4] focus:text-white focus:px-4 focus:py-2 focus:rounded-full font-['DM_Sans'] font-bold"
        style={{ fontSize: "14px" }}
      >
        Skip to main content
      </a>

      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-[105] transition-[background-color,box-shadow] duration-500 ${
          isScrolled
            ? "bg-white shadow-[0_2px_16px_rgba(0,0,0,0.07)]"
            : "bg-[#00A4A4] shadow-[0_4px_24px_rgba(0,164,164,0.25)]"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between lg:grid lg:grid-cols-[auto_1fr_auto] px-[20px] lg:px-[60px] py-[14px] lg:py-[18px] max-w-[1330px] mx-auto gap-x-[40px]">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A4A4]"
            aria-label="SympleTax home"
          >
            <img
              src={sympletaxLogo}
              alt="SympleTax"
              className="h-[28px] lg:h-[34px] w-auto object-contain"
              style={{ filter: isScrolled ? "none" : "brightness(0) invert(1)" }}
            />
          </Link>

          {/* Desktop Nav — centered */}
          <div className="hidden lg:flex items-center justify-center gap-[32px]">
            {NAV_LINKS.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown ? openDropdown(link.dropdown) : undefined}
                onMouseLeave={() => link.dropdown ? scheduleClose() : undefined}
              >
                {link.dropdown ? (
                  <button
                    className={`font-['DM_Sans'] font-medium transition-colors whitespace-nowrap flex items-center gap-[5px] focus:outline-none focus-visible:underline ${
                      isScrolled ? "text-[#0f172a]/75 hover:text-[#0f172a]" : "text-white/90 hover:text-white"
                    }`}
                    style={{ fontSize: "14px" }}
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === link.dropdown}
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-[13px] h-[13px] transition-transform duration-200 shrink-0 ${activeDropdown === link.dropdown ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                ) : (
                  <Link
                    to={link.href!}
                    className={`font-['DM_Sans'] font-medium transition-colors relative group whitespace-nowrap flex items-center focus:outline-none focus-visible:underline ${
                      isScrolled ? "text-[#0f172a]/75 hover:text-[#0f172a]" : "text-white/90 hover:text-white"
                    }`}
                    style={{ fontSize: "14px" }}
                  >
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 w-0 h-[2px] rounded-full transition-all duration-300 group-hover:w-full ${
                      isScrolled ? "bg-[#00A4A4]" : "bg-white"
                    }`} />
                  </Link>
                )}

                {/* ── Services Mega-Menu ── */}
                {link.dropdown === "services" && (
                  <AnimatePresence>
                    {activeDropdown === "services" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-[calc(100%+20px)] left-1/2 -translate-x-1/2 bg-white rounded-[20px] overflow-hidden"
                        style={{ width: "860px", boxShadow: "0 20px 64px rgba(0,0,0,0.13), 0 4px 16px rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.07)" }}
                        onMouseEnter={() => openDropdown("services")}
                        onMouseLeave={scheduleClose}
                        role="region"
                        aria-label="Our services menu"
                      >
                        <div className="grid grid-cols-3 p-[36px] pb-[28px] gap-0">
                          {SERVICES_DROPDOWN.columns.map((col, colIdx) => (
                            <div
                              key={col.heading}
                              className="flex flex-col gap-[14px]"
                              style={{
                                borderRight: colIdx < 2 ? "1px solid #f0ece4" : "none",
                                paddingRight: colIdx < 2 ? "32px" : "0",
                                paddingLeft: colIdx > 0 ? "32px" : "0",
                              }}
                            >
                              <p className="font-['DM_Sans'] font-bold text-[#00A4A4] uppercase whitespace-nowrap" style={{ fontSize: "11px", letterSpacing: "0.12em" }}>
                                {col.heading}
                              </p>
                              <div className="h-px bg-[#e8e4da]" />
                              <ul className="flex flex-col gap-[10px]" role="list">
                                {col.links.map((item) => (
                                  <li key={item.name}>
                                    <Link
                                      to={item.href}
                                      className="font-['DM_Sans'] font-normal text-[#334155] hover:text-[#00A4A4] transition-colors duration-150 flex items-center gap-[9px] group/item focus:outline-none focus-visible:underline whitespace-nowrap"
                                      style={{ fontSize: "15px" }}
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      <span className="w-[5px] h-[5px] rounded-full bg-[#00A4A4]/25 group-hover/item:bg-[#00A4A4] transition-colors shrink-0" aria-hidden="true" />
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div
                          className="flex items-center justify-between px-[36px] py-[18px] gap-[16px]"
                          style={{ backgroundColor: "#f8f5f0", borderTop: "1px solid #e8e4da" }}
                        >
                          <div>
                            <p className="font-['DM_Sans'] font-semibold text-[#0f172a]" style={{ fontSize: "14px" }}>
                              {SERVICES_DROPDOWN.featured.title}
                            </p>
                            <p className="font-['DM_Sans'] font-normal text-[#64748b]" style={{ fontSize: "13px" }}>
                              {SERVICES_DROPDOWN.featured.body}
                            </p>
                          </div>
                          <Link
                            to={SERVICES_DROPDOWN.featured.href}
                            onClick={() => setActiveDropdown(null)}
                            className="shrink-0 bg-[#00A4A4] hover:bg-[#007a7a] text-white font-['DM_Sans'] font-bold rounded-full transition-all duration-200 hover:scale-[1.02] focus:outline-none whitespace-nowrap"
                            style={{ fontSize: "13px", padding: "11px 24px" }}
                          >
                            {SERVICES_DROPDOWN.featured.cta}
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}

                {/* ── Resources Mega-Menu ── */}
                {link.dropdown === "resources" && (
                  <AnimatePresence>
                    {activeDropdown === "resources" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-[calc(100%+20px)] left-1/2 -translate-x-1/2 bg-white rounded-[20px] overflow-hidden"
                        style={{ width: "860px", boxShadow: "0 20px 64px rgba(0,0,0,0.13), 0 4px 16px rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.07)" }}
                        onMouseEnter={() => openDropdown("resources")}
                        onMouseLeave={scheduleClose}
                        role="region"
                        aria-label="Resources menu"
                      >
                        <div className="grid grid-cols-[1fr_1fr_260px]">
                          <div className="p-[32px] flex flex-col gap-[14px]" style={{ borderRight: "1px solid #f0ece4" }}>
                            <p className="font-['DM_Sans'] font-bold text-[#00A4A4] uppercase whitespace-nowrap" style={{ fontSize: "11px", letterSpacing: "0.12em" }}>
                              {RESOURCES_LINKS.left.heading}
                            </p>
                            <div className="h-px bg-[#e8e4da]" />
                            <ul className="flex flex-col gap-[10px]" role="list">
                              {RESOURCES_LINKS.left.links.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    to={item.href}
                                    onClick={() => setActiveDropdown(null)}
                                    className="font-['DM_Sans'] font-normal text-[#334155] hover:text-[#00A4A4] transition-colors flex items-center gap-[9px] group/r focus:outline-none focus-visible:underline whitespace-nowrap"
                                    style={{ fontSize: "15px" }}
                                  >
                                    <span className="w-[5px] h-[5px] rounded-full bg-[#00A4A4]/25 group-hover/r:bg-[#00A4A4] transition-colors shrink-0" aria-hidden="true" />
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="p-[32px] flex flex-col gap-[14px]" style={{ borderRight: "1px solid #f0ece4" }}>
                            <p className="font-['DM_Sans'] font-bold text-[#00A4A4] uppercase whitespace-nowrap" style={{ fontSize: "11px", letterSpacing: "0.12em" }}>
                              {RESOURCES_LINKS.right.heading}
                            </p>
                            <div className="h-px bg-[#e8e4da]" />
                            <ul className="flex flex-col gap-[10px]" role="list">
                              {RESOURCES_LINKS.right.links.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    to={item.href}
                                    onClick={() => setActiveDropdown(null)}
                                    className="font-['DM_Sans'] font-normal text-[#334155] hover:text-[#00A4A4] transition-colors flex items-center gap-[9px] group/rr focus:outline-none focus-visible:underline whitespace-nowrap"
                                    style={{ fontSize: "15px" }}
                                  >
                                    <span className="w-[5px] h-[5px] rounded-full bg-[#00A4A4]/25 group-hover/rr:bg-[#00A4A4] transition-colors shrink-0" aria-hidden="true" />
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div
                            className="flex flex-col justify-between p-[32px] relative overflow-hidden"
                            style={{ minHeight: "280px" }}
                          >
                            <img src={RESOURCES_LINKS.image.src} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
                            <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(0,164,164,0.82) 0%, rgba(0,90,90,0.92) 100%)" }} aria-hidden="true" />
                            <p className="font-['DM_Sans'] font-bold text-white leading-[1.15] relative z-10" style={{ fontSize: "22px", letterSpacing: "-0.5px" }}>
                              {RESOURCES_LINKS.image.headline}
                            </p>
                            <div className="flex flex-col gap-[10px] relative z-10">
                              <p className="font-['DM_Sans'] font-normal text-white/70" style={{ fontSize: "13px", lineHeight: "1.55" }}>
                                A licensed professional will review your case for free — no commitment.
                              </p>
                              <a
                                href={RESOURCES_LINKS.image.href}
                                onClick={() => setActiveDropdown(null)}
                                className="inline-flex items-center justify-center bg-white text-[#00A4A4] font-['DM_Sans'] font-bold rounded-full hover:scale-[1.02] transition-all duration-200 focus:outline-none"
                                style={{ fontSize: "13px", padding: "11px 20px" }}
                              >
                                {RESOURCES_LINKS.image.cta}
                              </a>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}

                {/* ── Case Access Dropdown ── */}
                {link.dropdown === "case" && (
                  <AnimatePresence>
                    {activeDropdown === "case" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-[calc(100%+20px)] left-1/2 -translate-x-1/2 bg-white rounded-[20px] overflow-hidden"
                        style={{ width: "480px", boxShadow: "0 20px 64px rgba(0,0,0,0.13), 0 4px 16px rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.07)" }}
                        onMouseEnter={() => openDropdown("case")}
                        onMouseLeave={scheduleClose}
                        role="region"
                        aria-label="Case access menu"
                      >
                        <div className="grid grid-cols-2 p-[32px] gap-0">
                          <div style={{ borderRight: "1px solid #f0ece4", paddingRight: "24px" }}>
                            <p className="font-['DM_Sans'] font-bold text-[#00A4A4] uppercase whitespace-nowrap mb-[12px]" style={{ fontSize: "11px", letterSpacing: "0.12em" }}>
                              {CASE_ACCESS_LINKS.left.heading}
                            </p>
                            <div className="h-px bg-[#e8e4da] mb-[14px]" />
                            {CASE_ACCESS_LINKS.left.links.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setActiveDropdown(null)}
                                className="font-['DM_Sans'] font-normal text-[#334155] hover:text-[#00A4A4] transition-colors flex items-center gap-[9px] group/ca focus:outline-none whitespace-nowrap"
                                style={{ fontSize: "15px" }}
                              >
                                <span className="w-[5px] h-[5px] rounded-full bg-[#00A4A4]/25 group-hover/ca:bg-[#00A4A4] transition-colors shrink-0" aria-hidden="true" />
                                {item.name}
                                <ExternalLink className="w-[11px] h-[11px] text-[#94a3b8] group-hover/ca:text-[#00A4A4] transition-colors shrink-0" aria-hidden="true" />
                              </a>
                            ))}
                          </div>
                          <div style={{ paddingLeft: "24px" }}>
                            <p className="font-['DM_Sans'] font-bold text-[#00A4A4] uppercase whitespace-nowrap mb-[12px]" style={{ fontSize: "11px", letterSpacing: "0.12em" }}>
                              {CASE_ACCESS_LINKS.right.heading}
                            </p>
                            <div className="h-px bg-[#e8e4da] mb-[14px]" />
                            {CASE_ACCESS_LINKS.right.links.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                onClick={() => setActiveDropdown(null)}
                                className="font-['DM_Sans'] font-normal text-[#334155] hover:text-[#00A4A4] transition-colors flex items-center gap-[9px] group/nc focus:outline-none whitespace-nowrap"
                                style={{ fontSize: "15px" }}
                              >
                                <span className="w-[5px] h-[5px] rounded-full bg-[#00A4A4]/25 group-hover/nc:bg-[#00A4A4] transition-colors shrink-0" aria-hidden="true" />
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Right — single grid cell */}
          <div className="flex items-center justify-end">
            {/* Desktop */}
            <div className="hidden lg:flex items-center gap-[24px]">
              <a
                href="tel:+19492873015"
                className={`flex items-center gap-[7px] font-['DM_Sans'] font-semibold transition-colors focus:outline-none whitespace-nowrap ${
                  isScrolled ? "text-[#0f172a]/70 hover:text-[#0f172a]" : "text-white/90 hover:text-white"
                }`}
                style={{ fontSize: "14px" }}
                aria-label="Call SympleTax at (949) 287-3015"
              >
                <Phone className={`w-[14px] h-[14px] shrink-0 ${isScrolled ? "text-[#00A4A4]" : "text-white"}`} aria-hidden="true" />
                (949) 287-3015
              </a>
              <Link
                to="https://ti.sympletax.com/free-consultation"
                className={`font-['DM_Sans'] font-bold rounded-full transition-all duration-300 hover:scale-[1.02] focus:outline-none whitespace-nowrap ${
                  isScrolled
                    ? "bg-[#00A4A4] hover:bg-[#007a7a] text-white shadow-[0_4px_16px_rgba(0,164,164,0.28)]"
                    : "bg-white/20 hover:bg-white/30 border border-white/40 text-white"
                }`}
                style={{ fontSize: "13px", padding: "10px 20px" }}
                aria-label="Get a free consultation"
              >
                Free Consultation
              </Link>
            </div>

            {/* Mobile */}
            <div className="flex lg:hidden items-center gap-[10px]">
              <a
                href="tel:+19492873015"
                className={`w-[38px] h-[38px] rounded-full border flex items-center justify-center transition-colors focus:outline-none ${
                  isScrolled ? "border-[#00A4A4] text-[#00A4A4]" : "border-white/40 text-white"
                }`}
                aria-label="Call SympleTax"
              >
                <Phone className="w-[15px] h-[15px]" aria-hidden="true" />
              </a>
              <button
                className={`w-[38px] h-[38px] flex items-center justify-center rounded-full focus:outline-none transition-colors ${
                  isScrolled ? "text-[#0f172a]" : "text-white"
                }`}
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <Menu className="w-[22px] h-[22px]" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile slide-in menu ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/50 z-[110] lg:hidden"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />
            <motion.div
              key="panel"
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed top-0 right-0 bottom-0 w-full bg-white z-[120] lg:hidden flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="flex items-center justify-between px-[20px] py-[18px] shrink-0" style={{ borderBottom: "1px solid #f0ece4" }}>
                <Link to="/" onClick={closeMobileMenu} aria-label="SympleTax home">
                  <img src={sympletaxLogo} alt="SympleTax" className="h-[28px] w-auto object-contain" />
                </Link>
                <button
                  onClick={closeMobileMenu}
                  className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-[#0f172a] hover:bg-gray-100 transition-colors focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-[20px] h-[20px]" aria-hidden="true" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-[20px] py-[8px]">
                {MOBILE_NAV_ITEMS.map((item) => (
                  <div key={item.name} style={{ borderBottom: "1px solid #f5f3ef" }}>
                    {item.accordion ? (
                      <>
                        <button
                          onClick={() => setMobileExpanded(mobileExpanded === item.name ? null : item.name)}
                          className="w-full flex items-center justify-between py-[18px] text-left focus:outline-none"
                          aria-expanded={mobileExpanded === item.name}
                        >
                          <span className="font-['DM_Sans'] font-semibold text-[#0f172a]" style={{ fontSize: "17px", letterSpacing: "-0.3px" }}>
                            {item.name}
                          </span>
                          <ChevronDown
                            className={`w-[18px] h-[18px] text-[#94a3b8] transition-transform duration-200 ${mobileExpanded === item.name ? "rotate-180" : ""}`}
                            aria-hidden="true"
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {mobileExpanded === item.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="pb-[12px] flex flex-col gap-[2px]">
                                {item.accordion.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    to={sub.href}
                                    onClick={closeMobileMenu}
                                    className="flex items-center gap-[12px] py-[10px] px-[4px] text-[#475569] hover:text-[#00A4A4] transition-colors focus:outline-none"
                                    style={{ fontSize: "15px" }}
                                  >
                                    <span className="w-[5px] h-[5px] rounded-full bg-[#00A4A4]/40 shrink-0" aria-hidden="true" />
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={closeMobileMenu}
                        className="flex items-center py-[18px] font-['DM_Sans'] font-semibold text-[#0f172a] hover:text-[#00A4A4] transition-colors focus:outline-none"
                        style={{ fontSize: "17px", letterSpacing: "-0.3px" }}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}

                <a
                  href="tel:+19492873015"
                  className="flex items-center gap-[12px] py-[18px] font-['DM_Sans'] font-semibold text-[#00A4A4]"
                  style={{ fontSize: "16px", borderBottom: "1px solid #f5f3ef" }}
                >
                  <div className="w-[36px] h-[36px] rounded-full border border-[#00A4A4] flex items-center justify-center shrink-0">
                    <Phone className="w-[15px] h-[15px]" aria-hidden="true" />
                  </div>
                  (949) 287-3015
                </a>
              </div>

              <div className="px-[20px] py-[24px] shrink-0" style={{ borderTop: "1px solid #f0ece4" }}>
                <div className="flex flex-col gap-[10px]">
                  <a
                    href="https://ti.sympletax.com/free-consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                    className="w-full py-[15px] rounded-full border-[2px] border-[#00A4A4] text-[#00A4A4] font-['DM_Sans'] font-bold text-center transition-all hover:bg-[#00A4A4]/5 focus:outline-none"
                    style={{ fontSize: "15px" }}
                  >
                    Client Login
                  </a>
                  <Link
                    to="https://ti.sympletax.com/free-consultation"
                    onClick={closeMobileMenu}
                    className="w-full py-[15px] rounded-full bg-[#00A4A4] hover:bg-[#007a7a] text-white font-['DM_Sans'] font-bold text-center transition-all shadow-[0_6px_20px_rgba(0,164,164,0.3)] focus:outline-none"
                    style={{ fontSize: "15px" }}
                  >
                    Free Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
