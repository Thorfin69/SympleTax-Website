import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { PaintStreak } from "../ui/PaintStreak";

import caseStoryImg from "../../../assets/casestory99.png";
import portraitRamon from "../../../assets/portrait_ramon_new.jpg";
import portraitDiana from "../../../assets/family-double-piggyback-small.jpg";
import portraitRobert from "../../../assets/portrait_robert_new.jpg";
import portraitElena from "../../../assets/portrait_elena_new.jpg";
import portraitJames from "../../../assets/portrait_james_new.jpg";
import portraitSandra from "../../../assets/portrait_sandra_new.jpg";
import portraitNicole from "../../../assets/portrait_nicole_new.jpg";

const CASE_RESULTS = [
  {
    firstName: "Ramon",
    fromAmount: "$19,349",
    toAmount: "$200",
    saved: "99%",
    situation:
      "Ramon came to SympleTax overwhelmed with $19,349 in IRS tax debt, unsure where to turn. In 72 hours, we fully investigated his situation. A SympleTax Case Manager negotiated on his behalf after authorizing a POA IRS Form 2848 — the result? Tax debt reduced to just $200.",
    personImage: portraitRamon,
    strokeColor: "purple" as const,
  },
  {
    firstName: "Diana",
    fromAmount: "$15,000",
    toAmount: "$1,800",
    saved: "95%",
    situation:
      "Small business owner facing payroll tax penalties and aggressive IRS collection. Threat of business closure resolved within 60 days.",
    personImage: portraitDiana,
    strokeColor: "pink" as const,
  },
  {
    firstName: "Robert",
    fromAmount: "$14,000",
    toAmount: "$1,850",
    saved: "91%",
    situation:
      "Retiree with a tax lien from a decade-old unresolved assessment. Secured a full lien release and protected all retirement assets.",
    personImage: portraitRobert,
    strokeColor: "teal" as const,
  },
  {
    firstName: "Elena",
    fromAmount: "$12,000",
    toAmount: "$625",
    saved: "97%",
    situation:
      "Self-employed consultant hit with back taxes after an audit. We reconstructed income, filed amended returns, and negotiated an affordable installment that stopped levies.",
    personImage: portraitElena,
    strokeColor: "purple" as const,
  },
  {
    firstName: "James",
    fromAmount: "$11,000",
    toAmount: "$2,250",
    saved: "86%",
    situation:
      "Wage garnishment and multiple CP notices after years of unfiled returns. Filed all missing years, then secured penalty relief and a payment plan he could actually afford.",
    personImage: portraitJames,
    strokeColor: "teal" as const,
  },
  {
    firstName: "Sandra",
    fromAmount: "$16,000",
    toAmount: "$1,350",
    saved: "94%",
    situation:
      "Divorce left her with a joint liability she didn’t know about. Innocent spouse documentation and a structured settlement cut the balance and cleared the threat of a lien sale.",
    personImage: portraitSandra,
    strokeColor: "pink" as const,
  },
  {
    firstName: "Nicole",
    fromAmount: "$13,000",
    toAmount: "$2,250",
    saved: "92%",
    situation:
      "Nurse practitioner with state and federal balances after a practice transition. Combined offer strategy and CNC review — collections paused while we built a long-term resolution.",
    personImage: portraitNicole,
    strokeColor: "purple" as const,
  },
];

function HandDrawnArrow() {
  return (
    <svg width="90" height="22" viewBox="0 0 90 22" fill="none">
      <path
        d="M8.05012 13.4477C11.3667 16.7445 15.2805 19.3589 19.5759 21.1468L19.336 21.796C18.918 21.941 18.4781 22.0097 18.0365 21.9989C17.4396 21.8587 16.8621 21.644 16.3171 21.3598C11.2065 19.0549 6.48412 15.9503 2.32221 12.1594C1.48002 11.3904 0.782302 10.4727 0.262951 9.45099C-0.416802 8.08157 0.262956 6.95561 1.82239 6.86431C2.50504 6.83943 3.18546 6.95681 3.82166 7.2092C8.64072 9.06467 13.6208 10.4571 18.6962 11.3682C18.8262 11.3682 18.9162 11.6015 19.326 12.0377C17.4359 12.3059 15.5182 12.3059 13.6281 12.0377C11.7288 11.9159 9.84947 11.5203 7.43035 11.1653C8.42999 11.7536 8.9298 12.129 9.4996 12.3927C17.7817 16.3303 27.0396 17.6486 36.0699 16.1763C47.5757 14.5128 58.5118 11.003 69.2878 6.73244C74.8258 4.56167 80.4138 2.5329 85.9618 0.463562C86.6649 0.120633 87.442 -0.0363879 88.221 0.00708969C88.5926 0.0800335 88.9428 0.238724 89.2444 0.470899C89.546 0.703074 89.791 1.00251 89.9603 1.34607C90.1403 1.93442 89.6704 2.79664 89.3106 3.4357C89.1306 3.75016 88.5808 3.89217 88.171 4.03419C78.5845 7.58453 69.0179 11.2363 59.3714 14.6243C49.9149 17.9312 40.2384 20.1324 30.1121 19.6962C22.8394 19.3096 15.7266 17.3851 9.22969 14.0461L8.05012 13.4477Z"
        fill="#1e293b"
      />
    </svg>
  );
}

export function CaseResultSpotlight() {
  const featured = CASE_RESULTS[0];
  const carouselItems = [...CASE_RESULTS, ...CASE_RESULTS, ...CASE_RESULTS];

  return (
    <section className="py-[64px] lg:py-[120px] overflow-hidden" style={{ backgroundColor: "#f5f1e8" }}>
      <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px]">

        {/* ── Featured Case — FB ad "Ramon" style ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-white rounded-[24px] overflow-hidden flex flex-col lg:flex-row gap-0 mb-[60px]"
        >
          {/* Left: Text */}
          <div className="flex-1 flex flex-col gap-[24px] p-[28px] lg:p-[40px] lg:max-w-[600px]">

            {/* Pill badge — "case story" style */}
            <div className="inline-flex items-center border-[1.5px] border-[#0f172a] rounded-[50px] px-[16px] py-[7px] w-fit">
              <span
                className="font-['DM_Sans'] font-bold uppercase text-[#0f172a]"
                style={{ fontSize: "13px", letterSpacing: "0.04em" }}
              >
                Case Story
              </span>
            </div>

            {/* Headline — large bold like FB ad */}
            <h2
              className="font-['DM_Sans'] font-black text-[#0f172a] leading-[1.05]"
              style={{ fontSize: "clamp(26px, 6vw, 50px)", letterSpacing: "-1.5px" }}
            >
              {/* Mobile: shorter headline, same facts */}
              <span className="lg:hidden">
                {featured.firstName} owed{" "}
                <span className="text-[#0f172a]">{featured.fromAmount}</span>
                {" "}— we settled it for{" "}
                <PaintStreak color="purple">{featured.toAmount}!</PaintStreak>
              </span>
              {/* Desktop: two lines — settled line includes final amount */}
              <span className="hidden lg:block">
                {featured.firstName} Owed{" "}
                <span className="text-[#0f172a]">{featured.fromAmount}</span>
                <br />
                We Settled It For{" "}
                <PaintStreak color="purple">{featured.toAmount}!</PaintStreak>
              </span>
            </h2>

            <p
              className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.65] max-w-[440px] lg:max-w-[500px]"
              style={{ fontSize: "16px" }}
            >
              {featured.situation}
            </p>

            {/* CTA + arrow */}
            <div className="flex items-center gap-[24px] mt-[4px]">
              <a
                href="https://ti.sympletax.com/free-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="border-[2px] border-[#00A4A4] text-[#00A4A4] font-['DM_Sans'] font-bold rounded-[10px] px-[28px] py-[13px] hover:bg-[#00A4A4] hover:text-white transition-all duration-200 uppercase tracking-wide"
                style={{ fontSize: "15px" }}
              >
                Learn How
              </a>
              <div style={{ transform: "rotate(-10deg)" }}>
                <HandDrawnArrow />
              </div>
            </div>

            {/* Disclaimer */}
            <p className="font-['DM_Sans'] text-[12px] text-[#94a3b8] italic mt-auto">
              * Client name changed for privacy. Results may vary based on individual circumstances.
            </p>
          </div>

          {/* Right: Person photo — flush to card edge on desktop */}
          <div
            className="relative w-full shrink-0 flex items-end justify-center lg:flex-1 lg:min-w-0 lg:justify-end overflow-hidden"
            style={{ minHeight: "320px" }}
          >
            {/* Case story image */}
            <div
              className="relative z-10 w-full h-full flex items-end justify-center lg:justify-end"
              style={{ paddingTop: "40px" }}
            >
              {/* Mobile */}
              <ImageWithFallback
                src={caseStoryImg}
                alt=""
                className="lg:hidden h-full object-cover object-top"
                style={{ maxHeight: "440px", width: "300px" }}
              />
              {/* Desktop */}
              <ImageWithFallback
                src={caseStoryImg}
                alt=""
                className="hidden lg:block h-full object-cover object-top"
                style={{ maxHeight: "440px", width: "500px" }}
              />
            </div>
            {/* Saved badge floating */}
            <div
              className="absolute top-[24px] left-[24px] lg:left-auto lg:right-[24px] z-20 bg-[#0f172a] text-white rounded-full px-[16px] py-[8px]"
            >
              <span className="font-['DM_Sans'] font-bold" style={{ fontSize: "15px" }}>
                {featured.saved} Saved
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Section label ── */}
        <div className="flex items-center gap-[10px] mb-[32px]">
          <div className="bg-[#00A4A4] h-px w-[35px]" />
          <span
            className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
            style={{ fontSize: "14px", letterSpacing: "0.05em" }}
          >
            More Case Results
          </span>
        </div>

        {/* ── Scrolling carousel of smaller case cards ── */}
        <div className="relative -mx-[25px] lg:-mx-[70px] overflow-hidden">
          <motion.div
            className="flex gap-[24px] w-max px-[25px] lg:px-[70px]"
            animate={{
              x: [0, -(CASE_RESULTS.length * 380 + CASE_RESULTS.length * 24)],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {carouselItems.map((item, idx) => (
              <div
                key={idx}
                className="w-[360px] bg-white rounded-[20px] overflow-hidden shrink-0 border border-[#e8e4da] transition-all duration-300"
              >
                {/* Photo area */}
                <div className="relative h-[320px] overflow-hidden" style={{ backgroundColor: "#00A4A4" }}>
                  <ImageWithFallback
                    src={item.personImage}
                    alt=""
                    className="w-full h-full object-cover object-[center_22%]"
                  />
                  <div className="absolute top-[14px] right-[14px] bg-[#0f172a] text-white rounded-full px-[12px] py-[5px]">
                    <span className="font-['DM_Sans'] font-bold uppercase" style={{ fontSize: "12px" }}>{item.saved} Saved</span>
                  </div>
                </div>

                {/* Text */}
                <div className="p-[28px] flex flex-col gap-[16px]">
                  <p className="font-['DM_Sans'] text-[14px] text-[#475569] leading-[1.6] line-clamp-2">
                    {item.situation}
                  </p>
                  <div className="flex items-end justify-between pt-[16px] border-t border-[#f0ece4]">
                    <div>
                      <div className="font-['DM_Sans'] text-[11px] text-[#94a3b8] uppercase tracking-widest mb-[2px]">Settled For</div>
                      <div className="font-['DM_Sans'] font-black text-[#00A4A4] leading-none" style={{ fontSize: "28px" }}>
                        {item.toAmount}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-['DM_Sans'] text-[11px] text-[#94a3b8] uppercase tracking-widest mb-[2px]">From</div>
                      <div className="font-['DM_Sans'] font-bold text-[#94a3b8] line-through" style={{ fontSize: "16px" }}>
                        {item.fromAmount}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-[100px] bg-gradient-to-r from-[#f5f1e8] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-[100px] bg-gradient-to-l from-[#f5f1e8] to-transparent z-10 pointer-events-none" />
        </div>

        <p className="text-center font-['DM_Sans'] text-[12px] text-[#94a3b8] italic mt-[40px]">
          * Results may vary based on individual circumstances. Past performance does not guarantee future outcomes.
        </p>
      </div>
    </section>
  );
}
