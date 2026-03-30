import { motion } from "motion/react";
import { Link } from "react-router";
import { Navbar } from "./components/v2/Navbar";
import { Footer } from "./components/v2/Footer";
import { usePageSEO } from "./hooks/usePageSEO";

const PHASE_ONE_STEPS = [
  { step: "01", title: "Pull Your IRS Transcripts", body: "We request and analyze your full IRS account transcripts to understand exactly what is owed, why, and for how long. No guessing — we work from real IRS data." },
  { step: "02", title: "File Your Power of Attorney", body: "We immediately file IRS Form 2848, authorizing us to speak with the IRS on your behalf. From this point on, you don't have to take a single IRS call." },
  { step: "03", title: "Assess Your Resolution Options", body: "Using your transcripts and financial information, we identify every resolution path available — Offer in Compromise, Installment Agreement, CNC, and more." },
  { step: "04", title: "Evaluate Financial Hardship", body: "We review your income, expenses, and assets against IRS guidelines to determine your best-case settlement scenario." },
  { step: "05", title: "Stop Active Collections", body: "If you have active wage garnishments, bank levies, or IRS notices, we take immediate action to halt them while your case is in progress." },
];

const PHASE_TWO_STEPS = [
  { step: "01", title: "Negotiate Directly with the IRS", body: "Your licensed Case Manager negotiates directly with the IRS using your financial data and our knowledge of IRS collection standards to push for the best possible outcome." },
  { step: "02", title: "Submit Your Resolution Application", body: "Whether it's an Offer in Compromise, penalty abatement request, or installment agreement, we prepare and submit every document required — correctly and on time." },
  { step: "03", title: "Respond to IRS Requests", body: "The IRS may request additional documentation during the review process. We handle every response on your behalf, keeping the process moving forward." },
  { step: "04", title: "File Any Missing Returns", body: "Outstanding tax returns must be filed before resolution. We prepare and file any missing or unfiled returns as part of your case at no extra charge." },
  { step: "05", title: "Close Your Case", body: "Once the IRS approves your resolution, we verify the final settlement, confirm case closure, and provide you with documentation of your fresh start." },
];

export default function ProcessPage() {
  usePageSEO({
    title: "How IRS Tax Resolution Works | SympleTax",
    description:
      "Our two-phase process: strategic discovery (transcripts, POA, options) and resolution (negotiation, filings, case closure). Transparent steps from licensed SympleTax professionals.",
    path: "/process",
  });

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

        {/* Hero */}
        <section
          className="pt-[120px] lg:pt-[160px] pb-[60px] lg:pb-[100px]"
          style={{ backgroundColor: "#0f172a" }}
          aria-label="Our process"
        >
          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-[680px]"
            >
              <div className="flex items-center gap-[10px] mb-[24px]">
                <div className="bg-[#00A4A4] h-px w-[35px]" />
                <span
                  className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                  style={{ fontSize: "13px", letterSpacing: "0.08em" }}
                >
                  How It Works
                </span>
              </div>
              <h1
                className="font-['DM_Sans'] font-bold text-white leading-[1.08] mb-[24px]"
                style={{ fontSize: "clamp(40px, 5vw, 68px)", letterSpacing: "-2px" }}
              >
                Our Two-Phase Resolution Process
              </h1>
              <p
                className="font-['DM_Sans'] font-normal text-white/75 leading-[1.65]"
                style={{ fontSize: "17px", letterSpacing: "-0.3px", maxWidth: "540px" }}
              >
                Every case follows the same proven process — transparent at every step, and built around getting you the maximum reduction the IRS allows.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Phase One */}
        <section className="py-[60px] lg:py-[100px] bg-white" aria-label="Phase One: Strategic Discovery">
          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px]">
            <div className="flex items-center gap-[16px] mb-[48px]">
              <div
                className="w-[52px] h-[52px] rounded-full bg-[#00A4A4] flex items-center justify-center shrink-0"
                aria-hidden="true"
              >
                <span className="font-['DM_Sans'] font-bold text-white" style={{ fontSize: "18px" }}>1</span>
              </div>
              <div>
                <p className="font-['DM_Sans'] font-medium text-[#00A4A4] uppercase" style={{ fontSize: "13px", letterSpacing: "0.05em" }}>Phase One</p>
                <h2
                  className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.08]"
                  style={{ fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-1.5px" }}
                >
                  Strategic Discovery
                </h2>
              </div>
            </div>
            <div className="flex flex-col gap-[0px]">
              {PHASE_ONE_STEPS.map((item, idx) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="flex gap-[32px] py-[32px] border-b border-[#e8e4da] last:border-b-0"
                >
                  <span
                    className="font-['DM_Sans'] font-bold text-[#00A4A4]/30 shrink-0"
                    style={{ fontSize: "32px", letterSpacing: "-1px", lineHeight: "1", minWidth: "48px" }}
                    aria-hidden="true"
                  >
                    {item.step}
                  </span>
                  <div className="flex flex-col gap-[8px]">
                    <h3
                      className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.2]"
                      style={{ fontSize: "19px", letterSpacing: "-0.4px" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.65]"
                      style={{ fontSize: "15px", letterSpacing: "-0.2px" }}
                    >
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Phase Two */}
        <section className="py-[60px] lg:py-[100px]" style={{ backgroundColor: "#00A4A4" }} aria-label="Phase Two: Resolution">
          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px]">
            <div className="flex items-center gap-[16px] mb-[48px]">
              <div
                className="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center shrink-0"
                aria-hidden="true"
              >
                <span className="font-['DM_Sans'] font-bold text-[#00A4A4]" style={{ fontSize: "18px" }}>2</span>
              </div>
              <div>
                <p className="font-['DM_Sans'] font-medium text-white/70 uppercase" style={{ fontSize: "13px", letterSpacing: "0.05em" }}>Phase Two</p>
                <h2
                  className="font-['DM_Sans'] font-bold text-white leading-[1.08]"
                  style={{ fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-1.5px" }}
                >
                  Resolution
                </h2>
              </div>
            </div>
            <div className="flex flex-col gap-[0px]">
              {PHASE_TWO_STEPS.map((item, idx) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="flex gap-[32px] py-[32px] border-b border-white/15 last:border-b-0"
                >
                  <span
                    className="font-['DM_Sans'] font-bold text-white/25 shrink-0"
                    style={{ fontSize: "32px", letterSpacing: "-1px", lineHeight: "1", minWidth: "48px" }}
                    aria-hidden="true"
                  >
                    {item.step}
                  </span>
                  <div className="flex flex-col gap-[8px]">
                    <h3
                      className="font-['DM_Sans'] font-bold text-white leading-[1.2]"
                      style={{ fontSize: "19px", letterSpacing: "-0.4px" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="font-['DM_Sans'] font-normal text-white/75 leading-[1.65]"
                      style={{ fontSize: "15px", letterSpacing: "-0.2px" }}
                    >
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-[60px] lg:py-[100px] bg-[#f8f5f0]" aria-label="Get started">
          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px] text-center">
            <h2
              className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.08] mb-[20px]"
              style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-1.5px" }}
            >
              Ready To Get Started?
            </h2>
            <p
              className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.65] mb-[40px] mx-auto"
              style={{ fontSize: "17px", maxWidth: "460px" }}
            >
              Your case review is free. A licensed professional will walk you through both phases and tell you what to expect.
            </p>
            <div className="flex items-center justify-center gap-[20px] flex-wrap">
              <Link
                to="/contact"
                className="inline-flex items-center gap-[12px] bg-[#00A4A4] hover:bg-[#007a7a] text-white font-['DM_Sans'] font-bold rounded-full hover:scale-[1.02] transition-all duration-300 shadow-[0_8px_28px_rgba(0,164,164,0.28)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A4A4] focus-visible:ring-offset-2"
                style={{ fontSize: "16px", padding: "18px 48px" }}
                aria-label="Get a free tax consultation"
              >
                Get a Free Consultation
              </Link>
              <a
                href="tel:+19492873015"
                className="font-['DM_Sans'] font-semibold text-[#0f172a] hover:text-[#00A4A4] transition-colors focus:outline-none focus-visible:underline"
                style={{ fontSize: "16px" }}
                aria-label="Call SympleTax at (949) 287-3015"
              >
                Or call (949) 287-3015
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
