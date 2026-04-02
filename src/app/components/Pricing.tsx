import { motion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    description:
      "For startups and small businesses looking for essential financial support",
    price: "$99",
    period: "/month",
    features: [
      "Financial Reports & Insights",
      "Expense Tracking",
      "Email Support",
    ],
    cta: "Get started",
    dark: false,
    opacity: false,
    highlighted: false,
  },
  {
    name: "Growth",
    description:
      "For growing businesses that need advanced analytics and regular consultations",
    price: "$299",
    period: "/month",
    features: [
      "Advanced Financial Analytics",
      "Bi-Weekly Consultations",
      "Tax Planning Assistance",
      "Priority Email & Chat Support",
    ],
    cta: "Get started",
    dark: true,
    opacity: false,
    highlighted: true,
  },
  {
    name: "Premium",
    description:
      "For scaling businesses that need a full-service financial management",
    price: "$499",
    period: "/month",
    features: [
      "Full-Service Financial Consulting",
      "Weekly Strategy Sessions",
      "Dedicated Account Manager",
      "All Growth features included",
    ],
    cta: "Get started",
    dark: false,
    opacity: true,
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-[#F7F7F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6 mb-16 text-center"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-px bg-[#2C3E50]" />
            <span className="font-['Inter'] font-medium text-[14px] uppercase tracking-wider text-[#2C3E50]">
              Meet Our Team
            </span>
            <div className="w-9 h-px bg-[#2C3E50]" />
          </div>
          <h2
            className="font-['Inter'] font-semibold text-[#2C3E50] tracking-tight leading-tight"
            style={{ fontSize: "clamp(36px, 4vw, 48px)" }}
          >
            Flexible options for{" "}
            <span className="block">your business</span>
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.7 }}
              whileHover={{ y: -6 }}
              className={`relative rounded-lg overflow-hidden flex flex-col min-h-[550px] ${
                plan.dark
                  ? "bg-[#2C3E50]"
                  : plan.opacity
                  ? "bg-[rgba(44,62,80,0.12)]"
                  : "bg-white"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-4 right-4 bg-[#017984] text-white text-xs font-['Inter'] font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="flex flex-col justify-between h-full p-8 gap-6">
                {/* Top: Title + Price + Features */}
                <div className="flex flex-col gap-6">
                  {/* Title + Description */}
                  <div className="flex flex-col gap-2">
                    <h3
                      className={`font-['Inter'] font-semibold text-[28px] tracking-tight ${
                        plan.dark ? "text-white" : "text-[#2C3E50]"
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={`font-['Inter'] text-[15px] leading-relaxed ${
                        plan.dark ? "text-white/70" : "text-[#636363]"
                      }`}
                    >
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div
                    className={`flex items-end gap-1 pb-6 border-b ${
                      plan.dark
                        ? "border-white/20"
                        : "border-[rgba(176,176,176,0.4)]"
                    }`}
                  >
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.2 + 0.4, duration: 0.5 }}
                      className={`font-['Inter'] font-medium text-[45px] leading-none tracking-tight ${
                        plan.dark ? "text-white" : "text-[#2C3E50]"
                      }`}
                    >
                      {plan.price}
                    </motion.span>
                    <span
                      className={`font-['Inter'] text-[18px] mb-1 ${
                        plan.dark ? "text-white/60" : "text-[#636363]"
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>

                  {/* Features */}
                  <div className="flex flex-col gap-4 pt-2">
                    {plan.features.map((feature, fIdx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: idx * 0.15 + fIdx * 0.08 + 0.5,
                          duration: 0.4,
                        }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 bg-[#017984] rounded-[4px] flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                        </div>
                        <span
                          className={`font-['Inter'] text-[15px] ${
                            plan.dark ? "text-[#F7F7F7]" : "text-[#2C3E50]"
                          }`}
                        >
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full py-4 rounded-full font-['Inter'] font-semibold flex items-center justify-center gap-2 group overflow-hidden relative transition-all ${
                    plan.dark
                      ? "border border-[#F7F7F7] text-white"
                      : "border border-[#2C3E50] text-[#2C3E50]"
                  }`}
                >
                  <span className="relative z-10">{plan.cta}</span>
                  <ArrowUpRight
                    className={`w-4 h-4 relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      plan.dark ? "text-white" : "text-[#2C3E50] group-hover:text-white"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ${
                      plan.dark ? "bg-[#017984]" : "bg-[#2C3E50]"
                    }`}
                  />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
