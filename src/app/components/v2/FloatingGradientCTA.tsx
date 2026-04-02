import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export type FloatingGradientCTAProps = {
  /** Optional section label for screen readers */
  ariaLabel?: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  /** When true, primary opens in new tab (default true for ti.sympletax.com) */
  primaryExternal?: boolean;
  secondaryLabel?: string;
  secondaryTo?: string;
  /** Small muted line under the buttons (optional) */
  footnote?: string;
};

/**
 * Full-width slate background + centered floating teal gradient card with grid/diagonal line texture.
 * Matches the Service Detail bottom CTA pattern for reuse on Services and other pages.
 */
export function FloatingGradientCTA({
  ariaLabel,
  title,
  description,
  primaryLabel = "Get a Free Consultation",
  primaryHref = "/free-consultation",
  primaryExternal = true,
  secondaryLabel,
  secondaryTo,
  footnote,
}: FloatingGradientCTAProps) {
  return (
    <section className="py-[60px] lg:py-[80px]" style={{ background: "#f1f5f9" }} aria-label={ariaLabel}>
      <div className="max-w-[1330px] mx-auto px-[24px] lg:px-[70px]">
        <div
          className="rounded-[32px] py-[56px] px-[24px] sm:py-[64px] sm:px-[40px] lg:py-[72px] lg:px-[80px] text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #00A4A4 0%, #007a7a 100%)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(255,255,255,0.03) 60px, rgba(255,255,255,0.03) 61px)",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute top-1/2 left-1/2 pointer-events-none"
            style={{
              transform: "translate(-50%, -50%)",
              width: "600px",
              height: "300px",
              background: "radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, transparent 65%)",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10">
            <h2
              className="font-['DM_Sans'] font-bold text-white leading-[1.08] mb-[20px]"
              style={{ fontSize: "clamp(28px, 3.5vw, 48px)", letterSpacing: "-1.5px" }}
            >
              {title}
            </h2>
            <p
              className="font-['DM_Sans'] text-white/80 leading-[1.65] mb-[40px] mx-auto"
              style={{ fontSize: "17px", maxWidth: "520px" }}
            >
              {description}
            </p>
            <div className="flex flex-wrap gap-[14px] justify-center">
              <a
                href={primaryHref}
                {...(primaryExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="inline-flex items-center gap-[10px] font-['DM_Sans'] font-bold text-[#00A4A4] bg-white rounded-full transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_36px_rgba(0,0,0,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#00A4A4]"
                style={{ fontSize: "15px", padding: "14px 30px" }}
              >
                {primaryLabel}
                <ArrowRight className="w-[16px] h-[16px]" aria-hidden="true" />
              </a>
              {secondaryLabel && secondaryTo ? (
                <Link
                  to={secondaryTo}
                  className="inline-flex items-center gap-[8px] font-['DM_Sans'] font-semibold text-white rounded-full transition-all duration-300 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#00A4A4]"
                  style={{
                    fontSize: "15px",
                    padding: "14px 28px",
                    background: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.3)",
                  }}
                >
                  {secondaryLabel}
                </Link>
              ) : null}
            </div>
            {footnote ? (
              <p className="mt-[20px] font-['DM_Sans'] text-white/60" style={{ fontSize: "12px" }}>
                {footnote}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
