import { motion } from "motion/react";

const CASES = [
  {
    challenge:
      "Self-employed contractor with $87,000 in back taxes, penalties growing monthly, and an impending bank levy.",
    solution:
      "Filed Offer in Compromise. Provided detailed financial analysis demonstrating inability to pay full amount.",
    outcome: "$87,000 → $3,200 settled. 96% reduction in total liability.",
    timeline: "Resolved in 8 months",
    tag: "Offer in Compromise",
  },
  {
    challenge:
      "Small business owner with $240,000 in payroll tax debt. IRS had filed federal tax liens and wage garnishments.",
    solution:
      "Negotiated Currently Not Collectible status. Filed penalty abatement. Had federal liens subordinated.",
    outcome: "$240,000 → $18,400. Liens removed. Garnishment released in 48 hours.",
    timeline: "Resolved in 11 months",
    tag: "Payroll Tax Relief",
  },
  {
    challenge:
      "Individual with 6 years of unfiled returns. IRS substitute filings inflated liability to $195,000.",
    solution:
      "Prepared all 6 years of returns with proper deductions. Reduced SFR assessments significantly.",
    outcome: "$195,000 → $12,600. Correct returns filed. Penalties abated.",
    timeline: "Resolved in 5 months",
    tag: "Unfiled Returns",
  },
];

export function STCaseResults() {
  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-10 h-[1.5px] bg-[#059669]" />
          <span className="font-['Inter'] font-medium text-[14px] uppercase tracking-wider text-[#059669]">
            Case Results
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
          className="font-['Inter'] font-bold text-[#0b0b0b] leading-[1.1] tracking-tight mb-5"
          style={{
            fontSize: "clamp(32px, 4vw, 56px)",
            textWrap: "balance",
          }}
        >
          Proof in the Numbers.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
          className="font-['Inter'] text-[16px] md:text-[18px] text-[#4b5563] leading-relaxed max-w-2xl"
        >
          Real outcomes for real clients — every case resolved with precision and expertise.
        </motion.p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {CASES.map((item, idx) => (
            <motion.div
              key={item.tag}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.12, ease: "easeOut" }}
              className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
            >
              {/* Green header band */}
              <div className="bg-[#059669] px-6 py-4 flex items-center justify-between">
                <span className="font-['Inter'] font-semibold text-white text-[14px]">
                  {item.tag}
                </span>
                <span className="bg-white/20 text-white text-[12px] font-['Inter'] px-3 py-1 rounded-full">
                  {item.timeline}
                </span>
              </div>

              {/* 2×2 inner grid */}
              <div className="grid grid-cols-2 divide-x divide-y divide-gray-100">
                {/* Challenge */}
                <div className="p-5">
                  <div className="font-['Inter'] font-semibold text-[11px] uppercase tracking-wider text-[#059669] mb-2">
                    Challenge
                  </div>
                  <p className="font-['Inter'] text-[14px] text-[#4b5563] leading-[1.6]">
                    {item.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="p-5">
                  <div className="font-['Inter'] font-semibold text-[11px] uppercase tracking-wider text-[#059669] mb-2">
                    Solution
                  </div>
                  <p className="font-['Inter'] text-[14px] text-[#4b5563] leading-[1.6]">
                    {item.solution}
                  </p>
                </div>

                {/* Outcome — full width */}
                <div className="p-5 col-span-2 bg-[#f9fafb]">
                  <div className="font-['Inter'] font-semibold text-[11px] uppercase tracking-wider text-[#059669] mb-2">
                    Outcome
                  </div>
                  <p className="font-['Inter'] font-bold text-[16px] text-[#0b0b0b]">
                    {item.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center font-['Inter'] text-[13px] text-[#9ca3af] mt-10 italic">
          Results may vary based on individual circumstances. Past results do not guarantee future outcomes.
        </p>
      </div>
    </section>
  );
}
