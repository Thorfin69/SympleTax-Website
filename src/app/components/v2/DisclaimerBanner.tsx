import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const STORAGE_KEY = "sympletax_disclaimer_accepted";

export function DisclaimerBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(STORAGE_KEY);
    if (!accepted) {
      // Small delay so it doesn't flash immediately on load
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "1");
    window.dispatchEvent(new Event("sympletax:disclaimer-accepted"));
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="region"
          aria-label="Legal disclaimer"
          aria-live="polite"
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[100] bg-[#0f172a] border-t border-white/10"
          style={{ boxShadow: "0 -8px 32px rgba(0,0,0,0.25)" }}
        >
          <div className="max-w-[1330px] mx-auto px-[20px] lg:px-[40px] py-[16px] lg:py-[20px] flex flex-col sm:flex-row items-start sm:items-center gap-[12px] sm:gap-[16px] justify-between">
            <p
              className="font-['DM_Sans'] font-normal text-white/65 leading-[1.6] flex-1"
              style={{ fontSize: "13px", maxWidth: "900px" }}
            >
              <strong className="text-white/90 font-semibold">Disclaimer:</strong>{" "}
              SympleTax is a private tax resolution company and is not affiliated with or endorsed by the IRS or any government agency.
              We are licensed tax professionals. <strong className="text-white/80">Results vary.</strong> Nothing here constitutes legal or financial advice.
              For official IRS information, visit{" "}
              <a
                href="https://www.irs.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00A4A4] hover:text-[#00c0c0] underline transition-colors"
              >
                IRS.gov
              </a>.
            </p>
            <button
              onClick={accept}
              className="shrink-0 bg-[#005858] hover:bg-[#004040] text-white font-['DM_Sans'] font-bold rounded-full transition-all duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]"
              style={{ fontSize: "13px", padding: "10px 24px", whiteSpace: "nowrap" }}
              aria-label="Accept disclaimer and close"
            >
              I Understand
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
