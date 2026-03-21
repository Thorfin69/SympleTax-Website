import { motion } from "motion/react";
import { ShieldCheck, Clock, Lock } from "lucide-react";

const TRUST_POINTS = [
  {
    icon: ShieldCheck,
    title: "Licensed CPAs",
    description: "Expert tax professionals, NOT Enrolled Agents.",
  },
  {
    icon: Clock,
    title: "Free Consultation",
    description: "No Obligation, No Upfront Fees.",
  },
  {
    icon: Lock,
    title: "Confidential & Secure",
    description: "Your Information Is Protected.",
  },
];

export function TrustBar() {
  return (
    <section className="bg-white py-8 border-y border-slate-200 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {TRUST_POINTS.map((point, idx) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 bg-[#00A4A4] rounded flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
                <point.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-['Inter'] font-bold text-[16px] mb-0.5 tracking-tight uppercase tracking-wider text-slate-900">
                  {point.title}
                </h4>
                <p className="font-['Inter'] text-[14px] text-slate-700">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
