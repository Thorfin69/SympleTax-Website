import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function AboutUs() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#F7F7F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-12"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 self-start">
              <div className="w-10 h-[1.5px] bg-[#2C3E50]" />
              <span className="font-['Inter'] font-medium text-[14px] uppercase tracking-wider text-[#2C3E50]">
                About us
              </span>
            </div>
            
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-end">
              <h2 className="font-['Inter'] font-medium text-4xl md:text-5xl lg:text-6xl text-[#2C3E50] leading-[1.1] tracking-tight" style={{ textWrap: 'balance' }}>
                At Finovo, we help businesses navigate complex finances with confidence. Our experts offer insights, solutions, and guidance for long-term success.
              </h2>
              
              <div className="flex flex-col gap-8">
                <p className="font-['Inter'] text-lg text-[#636363] leading-relaxed max-w-md">
                  With years of experience and a truly client-focused approach, we empower businesses to unlock new opportunities and secure their financial future.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#00838F] text-white px-8 py-4 rounded-full font-['Inter'] font-semibold flex items-center self-start gap-3 shadow-lg shadow-[#00838F]/20 group overflow-hidden relative"
                >
                  <span className="relative z-10">About company</span>
                  <ArrowUpRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  <div className="absolute inset-0 bg-[#2C3E50] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface Stat {
  label: string;
  value: number | string;
  suffix: string;
}

export function StatsSection({
  stats: customStats,
  title,
  label,
}: {
  stats?: Stat[];
  title?: string;
  label?: string;
}) {
  const defaultStats = [
    { label: "Client Satisfaction", value: 98, suffix: "%" },
    { label: "Successful Projects", value: 1200, suffix: "+" },
    { label: "Financial Experts", value: 45, suffix: "" },
    { label: "Years Experience", value: 15, suffix: "+" },
  ];

  const stats = customStats || defaultStats;

  return (
    <section className="py-24 bg-[#2C3E50] text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#fff_1px,_transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {(label || title) && (
          <div className="mb-16 flex flex-col gap-4">
            {label && (
              <div className="flex items-center gap-3">
                <div className="w-9 h-px bg-white/50" />
                <span className="font-['Inter'] font-medium text-[14px] uppercase tracking-wider text-white/70">
                  {label}
                </span>
              </div>
            )}
            {title && (
              <h2
                className="font-['Inter'] font-semibold text-white tracking-tight leading-tight max-w-xl"
                style={{ fontSize: "clamp(32px, 3.5vw, 48px)", textWrap: 'balance' }}
              >
                {title}
              </h2>
            )}
          </div>
        )}
        <div
          className={`grid grid-cols-2 ${
            stats.length === 3 ? "md:grid-cols-3" : "md:grid-cols-4"
          } gap-12 md:gap-8`}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col gap-4 text-center md:text-left group"
            >
              <div className="flex flex-col">
                <div className="flex items-baseline justify-center md:justify-start gap-1">
                  <motion.span
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="font-['Inter'] font-bold text-5xl md:text-6xl text-white"
                  >
                    {stat.value}
                  </motion.span>
                  <span className="font-['Inter'] font-bold text-3xl text-[#00838F]">
                    {stat.suffix}
                  </span>
                </div>
                <div className="w-full h-1.5 bg-white/10 mt-4 rounded-full overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: idx * 0.2 + 0.3 }}
                    className="h-full bg-[#00838F]"
                  />
                  {/* Decorative "Meter" shine */}
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ repeat: Infinity, duration: 2, delay: idx * 0.5 }}
                    className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  />
                </div>
              </div>
              <p className="font-['Inter'] text-sm uppercase tracking-widest text-white/60 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
