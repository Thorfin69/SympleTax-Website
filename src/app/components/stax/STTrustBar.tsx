import { motion } from "motion/react";
import { ShieldCheck, Clock, Lock } from "lucide-react";

const TRUST_POINTS = [
  {
    icon: ShieldCheck,
    title: "Licensed CPAs",
    description: "Not Enrolled Agents — real certified professionals",
  },
  {
    icon: Clock,
    title: "Free Consultation",
    description: "No obligation, no upfront fees required",
  },
  {
    icon: Lock,
    title: "Confidential & Secure",
    description: "Your information is fully protected",
  },
];

export function STTrustBar() {
  return (
    <div className="bg-[#f9fafb] py-10 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {TRUST_POINTS.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-[#059669]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="text-[#059669] w-6 h-6" />
                </div>
                <div>
                  <p
                    className="font-['Inter'] font-bold text-[16px] text-[#0b0b0b] mb-1"
                    style={{ textWrap: "balance" }}
                  >
                    {point.title}
                  </p>
                  <p className="font-['Inter'] text-[14px] text-[#4b5563]">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
