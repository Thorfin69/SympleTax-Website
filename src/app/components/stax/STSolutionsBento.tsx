import { motion } from "motion/react";
import { Link } from "react-router";
import {
  DollarSign,
  Calendar,
  Percent,
  PauseCircle,
  ArrowUpRight,
} from "lucide-react";

const SOLUTIONS = [
  {
    icon: DollarSign,
    title: "Offer in Compromise",
    description:
      "Settle your total IRS debt for significantly less than you owe. We build the strongest possible case for your OIC application.",
    href: "/services",
  },
  {
    icon: Calendar,
    title: "Installment Agreement",
    description:
      "Structured monthly payment plans that make your tax debt manageable while stopping all collection actions.",
    href: "/services",
  },
  {
    icon: Percent,
    title: "Penalty Abatement",
    description:
      "Eliminate or reduce IRS-imposed penalties using first-time abatement programs and reasonable cause arguments.",
    href: "/services",
  },
  {
    icon: PauseCircle,
    title: "Currently Not Collectible",
    description:
      "If you can't pay, we can halt all IRS collection activity by placing your account in protected CNC status.",
    href: "/services",
  },
];

export function STSolutionsBento() {
  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[1.5px] bg-[#059669]" />
            <span className="font-['Inter'] font-medium text-[14px] uppercase tracking-wider text-[#059669]">
              What We Do
            </span>
          </div>
          <h2
            className="font-['Inter'] font-bold text-[#0b0b0b] leading-[1.1] tracking-tight mb-5"
            style={{
              fontSize: "clamp(32px, 3.5vw, 52px)",
              textWrap: "balance",
            }}
          >
            Core Solutions That Actually Work
          </h2>
          <p className="font-['Inter'] text-[16px] md:text-[18px] text-[#4b5563] leading-relaxed">
            We match your situation to the right IRS program — then fight to get
            you the best possible outcome.
          </p>
        </motion.div>

        {/* 2×2 bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {SOLUTIONS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.1,
                  ease: "easeOut",
                }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#059669]/20 transition-all group"
              >
                {/* Icon container */}
                <div className="w-14 h-14 bg-[#059669]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#059669] transition-colors">
                  <Icon className="w-7 h-7 text-[#059669] group-hover:text-white transition-colors" />
                </div>

                {/* Title */}
                <h3
                  className="font-['Inter'] font-bold text-[20px] text-[#0b0b0b] mb-3"
                  style={{ textWrap: "balance" }}
                >
                  {s.title}
                </h3>

                {/* Description */}
                <p className="font-['Inter'] text-[16px] text-[#4b5563] leading-[1.7] mb-6">
                  {s.description}
                </p>

                {/* Learn more link */}
                <Link
                  to={s.href}
                  className="flex items-center gap-2 font-['Inter'] font-semibold text-[14px] text-[#059669] hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
