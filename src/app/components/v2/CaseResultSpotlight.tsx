import { motion } from "motion/react";
import { Link } from "react-router";
import { TrendingUp, ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const CASE_RESULTS = [
  {
    image: "https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?auto=format&fit=crop&q=80&w=800",
    situation: "Single taxpayer with several years of unfiled returns and active bank levies. Faced immediate financial hardship due to wage garnishment.",
    owed: "$87,400",
    settled: "$3,200",
    saved: "96.3%",
    title: "Taxpayer Debt Relief",
  },
  {
    image: "https://images.unsplash.com/photo-1734018959374-07d2e109592c?auto=format&fit=crop&q=80&w=800",
    situation: "Small business owner facing payroll tax penalties and aggressive IRS collection. Threat of business closure was resolved within 60 days.",
    owed: "$142,650",
    settled: "$12,400",
    saved: "91.3%",
    title: "Payroll Tax Settlement",
  },
  {
    image: "https://images.unsplash.com/photo-1624953336495-0b5af4d962f2?auto=format&fit=crop&q=80&w=800",
    situation: "Retiree with a tax lien from a decade-old unresolved assessment. Secured a full lien release and protected their retirement assets.",
    owed: "$52,000",
    settled: "$1,850",
    saved: "96.4%",
    title: "Tax Lien Release",
  },
];

export function CaseResultSpotlight() {
  const carouselItems = [...CASE_RESULTS, ...CASE_RESULTS, ...CASE_RESULTS];

  return (
    <section className="py-[120px] bg-[#f9fafb] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-16">
          <div className="flex flex-col gap-[22px] max-w-[550px]">
            <div className="flex items-center gap-[10px]">
              <div className="bg-[#00A4A4] h-px w-[35px]" />
              <span className="font-['Inter'] font-medium uppercase text-[#00A4A4] text-[14px] tracking-widest">
                Proven Performance
              </span>
            </div>
            <h2 className="font-['Inter'] font-bold text-[#0f172a] text-[48px] leading-[1.08]" style={{ textWrap: 'balance', letterSpacing: "-1.5px" }}>
              Real cases. <span className="text-[#00A4A4]">Real savings.</span>
            </h2>
          </div>
          <Link
            to="/about"
            className="bg-[#0f172a] text-white inline-flex items-center gap-3 px-8 py-4 rounded-full transition-all hover:bg-[#00A4A4]"
          >
            <span className="font-['Inter'] font-semibold">View all case results</span>
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Continuous Moving Carousel */}
        <div className="relative -mx-6 md:-mx-10 px-6 md:px-10">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 w-max"
              animate={{
                x: [0, -1 * (CASE_RESULTS.length * 420 + CASE_RESULTS.length * 24)],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 45,
                  ease: "linear",
                },
              }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {carouselItems.map((item, idx) => (
                <div
                  key={idx}
                  className="w-[420px] rounded-xl overflow-hidden flex flex-col group cursor-pointer shrink-0 border border-slate-100 hover:border-[#00A4A4]/20 shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] bg-white transition-all duration-300"
                >
                  {/* Image Section */}
                  <div className="h-[260px] overflow-hidden relative">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-[#00A4A4] text-white px-3 py-1 rounded-full text-xs font-bold font-['Inter']">
                      {item.saved} Saved
                    </div>
                    <motion.div
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                        delay: idx * 1.2,
                        repeatDelay: 4,
                      }}
                      className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col gap-6 p-8 grow justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="w-4 h-4 text-[#00A4A4]" />
                        <span className="text-xs font-bold uppercase tracking-widest text-[#0f172a]/40">
                          {item.title}
                        </span>
                      </div>

                      <p className="font-['Inter'] text-[16px] leading-relaxed line-clamp-3 mb-6 text-[#475569]">
                        {item.situation}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-slate-100">
                      <div className="flex justify-between items-end">
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#475569]/60">Settled For</span>
                          <span className="text-[32px] font-bold text-[#00A4A4] leading-none">{item.settled}</span>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#475569]/60">Total Debt</span>
                          <span className="text-[18px] font-medium line-through leading-none text-[#475569]/40">{item.owed}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Fades for smooth edge */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f9fafb] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#f9fafb] to-transparent z-10 pointer-events-none" />
        </div>

        <p className="text-center font-['Inter'] text-[13px] text-[#475569]/50 mt-12 italic">
          * Results may vary based on individual circumstances. Past performance does not guarantee future outcomes.
        </p>
      </div>
    </section>
  );
}
