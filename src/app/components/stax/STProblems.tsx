import { motion } from "motion/react";
import { Link } from "react-router";
import { AlertTriangle, FileX, Mail, AlertOctagon, ArrowUpRight } from "lucide-react";

const PROBLEMS = [
  {
    icon: AlertTriangle,
    title: "Back Taxes & Penalties",
    description:
      "Unpaid taxes compound daily with interest and penalties. We stop the clock and negotiate resolution.",
    href: "/services",
  },
  {
    icon: FileX,
    title: "Unfiled Tax Returns",
    description:
      "Missing returns trigger IRS substitute filings. We reconstruct records and minimize exposure.",
    href: "/services",
  },
  {
    icon: Mail,
    title: "IRS Notices & Audits",
    description:
      "IRS letters escalate fast without expert response. We handle all IRS communication on your behalf.",
    href: "/services",
  },
  {
    icon: AlertOctagon,
    title: "Wage Garnishment",
    description:
      "Levies can be released — often within 24-48 hours. We act immediately to protect your income.",
    href: "/services",
  },
];

export function STProblems() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-16">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-[1.5px] bg-[#059669]" />
            <span className="font-['Inter'] font-medium text-[14px] uppercase tracking-wider text-[#059669]">
              Tax Problems We Solve
            </span>
          </motion.div>

          {/* H2 */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Inter'] font-medium text-[#0b0b0b] leading-[1.1] tracking-tight mb-5"
            style={{ fontSize: "clamp(32px, 3.5vw, 52px)", textWrap: "balance" }}
          >
            Tax problems don't go away on their own.
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-['Inter'] text-[18px] text-[#4b5563] leading-[1.7] max-w-2xl"
            style={{ textWrap: "balance" }}
          >
            We help people just like you — facing the IRS alone, unsure where to turn.
          </motion.p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROBLEMS.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={problem.href}
                  className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group cursor-pointer flex flex-col h-full"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 bg-[#059669]/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="text-[#059669] w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3
                    className="font-['Inter'] font-semibold text-[22px] text-[#0b0b0b] mb-3"
                    style={{ textWrap: "balance" }}
                  >
                    {problem.title}
                  </h3>

                  {/* Description */}
                  <p className="font-['Inter'] text-[16px] text-[#4b5563] leading-[1.7] mb-6 flex-1">
                    {problem.description}
                  </p>

                  {/* Link row */}
                  <div className="flex items-center gap-2 font-['Inter'] font-medium text-[14px] text-[#059669] group-hover:gap-3 transition-all">
                    Learn more
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
