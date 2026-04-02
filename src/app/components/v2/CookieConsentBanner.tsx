import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { X, ChevronDown } from "lucide-react";

const STORAGE_KEY = "sympletax_cookie_consent";

type ConsentState = {
  functional: boolean;
  analytics: boolean;
  performance: boolean;
  advertisement: boolean;
};

const CATEGORIES = [
  {
    key: "necessary" as const,
    label: "Necessary",
    description:
      "Necessary cookies are required to enable the basic features of this site, such as providing secure log-in or adjusting your consent preferences. These cookies do not store any personally identifiable data.",
    alwaysActive: true,
  },
  {
    key: "functional" as const,
    label: "Functional",
    description:
      "Functional cookies help perform certain functionalities like sharing the content of the website on social media platforms, collecting feedback, and other third-party features.",
    alwaysActive: false,
  },
  {
    key: "analytics" as const,
    label: "Analytics",
    description:
      "Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics such as the number of visitors, bounce rate, traffic source, etc.",
    alwaysActive: false,
  },
  {
    key: "performance" as const,
    label: "Performance",
    description:
      "Performance cookies are used to understand and analyse the key performance indexes of the website which helps in delivering a better user experience for the visitors.",
    alwaysActive: false,
  },
  {
    key: "advertisement" as const,
    label: "Advertisement",
    description:
      "Advertisement cookies are used to provide visitors with customised advertisements based on the pages you visited previously and to analyse the effectiveness of the ad campaigns.",
    alwaysActive: false,
  },
];

function Toggle({
  enabled,
  onChange,
  ariaLabel,
}: {
  enabled: boolean;
  onChange: () => void;
  ariaLabel: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      aria-label={ariaLabel}
      onClick={onChange}
      className="relative inline-flex h-[26px] w-[48px] shrink-0 cursor-pointer rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A4A4] focus-visible:ring-offset-2"
      style={{ backgroundColor: enabled ? "#00A4A4" : "#d1d5db" }}
    >
      <span
        className="pointer-events-none inline-block h-[22px] w-[22px] rounded-full bg-white shadow-md transition-transform duration-200"
        style={{ transform: enabled ? "translate(24px, 2px)" : "translate(2px, 2px)" }}
      />
    </button>
  );
}

function CategoryRow({
  category,
  enabled,
  onToggle,
}: {
  category: (typeof CATEGORIES)[0];
  enabled: boolean;
  onToggle: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="border-b last:border-b-0" style={{ borderColor: "#f0ece4" }}>
      <div className="flex items-center gap-[16px] py-[18px]">
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-[10px] flex-1 text-left focus:outline-none focus-visible:underline"
          aria-expanded={expanded}
          aria-controls={`cookie-category-${category.key}`}
          id={`cookie-category-trigger-${category.key}`}
        >
          <ChevronDown
            className="w-[16px] h-[16px] shrink-0 transition-transform duration-200 text-[#64748b]"
            style={{ transform: expanded ? "rotate(0deg)" : "rotate(-90deg)" }}
            aria-hidden="true"
          />
          <span className="font-['DM_Sans'] font-bold text-[#0f172a]" style={{ fontSize: "15px" }}>
            {category.label}
          </span>
        </button>
        {category.alwaysActive ? (
          <span className="font-['DM_Sans'] font-bold text-[#00A4A4] shrink-0" style={{ fontSize: "13px" }}>
            Always Active
          </span>
        ) : (
          <Toggle
            enabled={enabled}
            onChange={onToggle}
            ariaLabel={`Allow ${category.label.toLowerCase()} cookies`}
          />
        )}
      </div>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id={`cookie-category-${category.key}`}
            role="region"
            aria-labelledby={`cookie-category-trigger-${category.key}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p
              className="font-['DM_Sans'] font-normal text-[#64748b] leading-[1.65] pb-[18px] pl-[26px]"
              style={{ fontSize: "14px" }}
            >
              {category.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function CookieConsentBanner() {
  // banner = first-visit prompt, modal = preferences panel
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [decided, setDecided] = useState(false);
  const [consent, setConsent] = useState<ConsentState>({
    functional: false,
    analytics: false,
    performance: false,
    advertisement: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setDecided(true);
      return;
    }

    const disclaimerAccepted = localStorage.getItem("sympletax_disclaimer_accepted");

    if (disclaimerAccepted) {
      const t = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(t);
    } else {
      const handler = () => { setTimeout(() => setShowBanner(true), 600); };
      window.addEventListener("sympletax:disclaimer-accepted", handler);
      return () => window.removeEventListener("sympletax:disclaimer-accepted", handler);
    }
  }, []);

  function saveConsent(value: ConsentState | "all" | "none") {
    let final: ConsentState;
    if (value === "all") {
      final = { functional: true, analytics: true, performance: true, advertisement: true };
    } else if (value === "none") {
      final = { functional: false, analytics: false, performance: false, advertisement: false };
    } else {
      final = value;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(final));
    setDecided(true);
    setShowBanner(false);
    setShowModal(false);
  }

  function openPreferences() {
    setShowBanner(false);
    setShowModal(true);
  }

  return (
    <>
      {/* ── Floating cookie icon — bottom-left, always visible (MOBILE: 20% smaller, 16px from left) ── */}
      <div className="fixed bottom-[24px] left-[16px] z-[88] sm:bottom-[24px] sm:left-[24px]">
        <button
          onClick={() => decided ? setShowModal(true) : openPreferences()}
          className="w-[42px] h-[42px] sm:w-[52px] sm:h-[52px] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-[1.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A4A4] focus-visible:ring-offset-2"
          style={{
            backgroundColor: "#0f172a",
            boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
          }}
          aria-label="Cookie preferences"
          title="Cookie preferences"
        >
          <svg className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="10" stroke="#00A4A4" strokeWidth="1.8" />
            <circle cx="8.5" cy="10" r="1.5" fill="#00A4A4" />
            <circle cx="14" cy="8" r="1" fill="#00A4A4" />
            <circle cx="15" cy="14" r="1.5" fill="#00A4A4" />
            <circle cx="9" cy="15.5" r="1" fill="#00A4A4" />
          </svg>
        </button>
      </div>

      {/* ── First-visit banner — slides up from bottom center (DESKTOP ONLY) ── */}
      <AnimatePresence>
        {showBanner && !showModal && (
          <motion.div
            key="cookie-banner"
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 120, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="hidden sm:flex fixed bottom-[24px] left-[90px] right-[90px] z-[89] max-w-[820px] mx-auto"
            role="region"
            aria-label="Cookie consent"
          >
            <div
              className="bg-[#0f172a] rounded-[18px] px-[24px] py-[20px] flex flex-col sm:flex-row items-start sm:items-center gap-[16px] sm:gap-[20px]"
              style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.35), 0 4px 16px rgba(0,0,0,0.15)" }}
            >
              <div className="flex-1 min-w-0">
                <p className="font-['DM_Sans'] font-semibold text-white mb-[4px]" style={{ fontSize: "14px" }}>
                  We use cookies to improve your experience
                </p>
                <p className="font-['DM_Sans'] font-normal text-white/55 leading-[1.5]" style={{ fontSize: "13px" }}>
                  We use cookies to analyse site traffic and improve our services.{" "}
                  <button
                    onClick={openPreferences}
                    className="text-[#00A4A4] hover:underline focus:outline-none focus-visible:underline"
                    style={{ fontSize: "13px" }}
                  >
                    Customise Preferences
                  </button>
                </p>
              </div>
              <div className="flex items-center gap-[10px] shrink-0 w-full sm:w-auto">
                <button
                  onClick={() => saveConsent("none")}
                  className="flex-1 sm:flex-initial font-['DM_Sans'] font-medium text-white/55 hover:text-white/80 transition-colors focus:outline-none focus-visible:underline"
                  style={{ fontSize: "13px", padding: "8px 14px" }}
                >
                  Reject All
                </button>
                <button
                  onClick={() => saveConsent("all")}
                  className="flex-1 sm:flex-initial bg-[#00A4A4] hover:bg-[#007a7a] text-white font-['DM_Sans'] font-bold rounded-full transition-all duration-200 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A4A4]"
                  style={{ fontSize: "13px", padding: "10px 22px" }}
                >
                  Accept All
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Preferences modal ── */}
      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              key="cookie-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-[95]"
              onClick={() => setShowModal(false)}
              aria-hidden="true"
            />
            <motion.div
              key="cookie-modal"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-[96] flex items-center justify-center p-[16px] sm:p-[24px]"
              role="dialog"
              aria-modal="true"
              aria-label="Cookie preference settings"
            >
              <div
                className="bg-white rounded-[20px] w-full max-w-[640px] max-h-[85vh] sm:max-h-[90vh] flex flex-col overflow-hidden"
                style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.2)" }}
              >
                {/* Header */}
                <div className="flex items-center justify-between px-[28px] py-[24px] shrink-0" style={{ borderBottom: "1px solid #f0ece4" }}>
                  <div>
                    <h2 className="font-['DM_Sans'] font-bold text-[#0f172a] mb-[4px]" style={{ fontSize: "18px", letterSpacing: "-0.4px" }}>
                      Customise Consent Preferences
                    </h2>
                    <p className="font-['DM_Sans'] font-normal text-[#64748b]" style={{ fontSize: "13px" }}>
                      Manage your cookie preferences below
                    </p>
                  </div>
                  <button
                    onClick={() => setShowModal(false)}
                    className="w-[36px] h-[36px] rounded-full flex items-center justify-center text-[#64748b] hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A4A4]"
                    aria-label="Close"
                  >
                    <X className="w-[18px] h-[18px]" aria-hidden="true" />
                  </button>
                </div>

                {/* Intro */}
                <div className="px-[28px] pt-[20px] pb-[8px] shrink-0">
                  <p className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.65]" style={{ fontSize: "14px" }}>
                    We use cookies to help you navigate efficiently and perform certain functions. You will find detailed information about all cookies under each consent category below.
                  </p>
                  <p className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.65] mt-[10px]" style={{ fontSize: "14px" }}>
                    Cookies categorised as <span className="font-semibold text-[#0f172a]">"Necessary"</span> are stored on your browser as they are essential for enabling basic functionalities of the site.
                  </p>
                </div>

                {/* Categories */}
                <div className="flex-1 overflow-y-auto px-[28px]">
                  {CATEGORIES.map((cat) => (
                    <CategoryRow
                      key={cat.key}
                      category={cat}
                      enabled={cat.alwaysActive || (cat.key !== "necessary" && consent[cat.key as keyof ConsentState])}
                      onToggle={() => {
                        if (cat.alwaysActive || cat.key === "necessary") return;
                        setConsent((prev) => ({ ...prev, [cat.key]: !prev[cat.key as keyof ConsentState] }));
                      }}
                    />
                  ))}
                </div>

                {/* Footer */}
                <div
                  className="px-[28px] py-[20px] shrink-0 flex flex-col sm:flex-row items-stretch gap-[10px]"
                  style={{ borderTop: "1px solid #f0ece4" }}
                >
                  <button
                    onClick={() => saveConsent("none")}
                    className="flex-1 font-['DM_Sans'] font-semibold text-[#0f172a] rounded-full border-[1.5px] border-[#d1d5db] hover:border-[#0f172a] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f172a]"
                    style={{ fontSize: "14px", padding: "13px 16px" }}
                  >
                    Reject All
                  </button>
                  <button
                    onClick={() => saveConsent(consent)}
                    className="flex-1 font-['DM_Sans'] font-semibold text-[#0f172a] rounded-full border-[1.5px] border-[#d1d5db] hover:border-[#0f172a] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f172a]"
                    style={{ fontSize: "14px", padding: "13px 16px" }}
                  >
                    Save My Preferences
                  </button>
                  <button
                    onClick={() => saveConsent("all")}
                    className="flex-1 bg-[#0f172a] hover:bg-[#1e293b] text-white font-['DM_Sans'] font-bold rounded-full transition-all duration-200 hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f172a]"
                    style={{ fontSize: "14px", padding: "13px 16px" }}
                  >
                    Accept All
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
