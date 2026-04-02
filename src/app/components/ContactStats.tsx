import { motion } from "motion/react";

const stats = [
  {
    number: "10+",
    label: "Years of Experience",
    description: "A decade of expertise in finance and consulting",
  },
  {
    number: "9M+",
    label: "Assets Managed",
    description: "Helping all businesses optimize resources",
  },
  {
    number: "98%",
    label: "Client Satisfaction Rate",
    description: "Proven results and long-term partnerships",
  },
  {
    number: "100+",
    label: "Satisfied Clients",
    description: "Companies that trust us to drive financial success",
  },
];

export function ContactStats() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col gap-4 md:px-8 pt-8 md:pt-0"
            >
              <h2 className="font-['Inter'] font-semibold text-[#00838F] text-[72px] tracking-[-2.88px] leading-none">
                {stat.number}
              </h2>
              <div className="flex flex-col gap-2">
                <span className="font-['Inter'] font-bold text-[#2C3E50] text-[20px] tracking-[-0.4px]">
                  {stat.label}
                </span>
                <p className="font-['Inter'] text-[#636363] text-[16px] leading-[1.4] tracking-[-0.32px] max-w-[240px]">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
