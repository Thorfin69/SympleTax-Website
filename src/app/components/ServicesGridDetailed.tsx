import { motion } from "motion/react";
import { ArrowUpRight, FileText, TrendingDown, Shield, Briefcase, DollarSign, BarChart3 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const services = [
  {
    title: "IRS Tax Resolution & Defense",
    description: "Stop IRS collection actions fast. We represent you directly with the IRS to negotiate, defend, and resolve your tax debt.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=300&fit=crop&q=80",
  },
  {
    title: "Offer in Compromise Negotiations",
    description: "Settle your tax debt for less than you owe. Our experts evaluate your eligibility and negotiate directly with the IRS.",
    icon: DollarSign,
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&h=300&fit=crop&q=80",
  },
  {
    title: "Penalty & Interest Abatement",
    description: "Reduce or eliminate IRS penalties and interest through proven abatement strategies tailored to your situation.",
    icon: TrendingDown,
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=300&fit=crop&q=80",
  },
  {
    title: "Wage Garnishment & Levy Release",
    description: "Stop wage garnishments and bank levies fast — often within 24-48 hours. Protect your income and assets immediately.",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=300&fit=crop&q=80",
  },
  {
    title: "Installment Agreements & Plans",
    description: "Establish affordable monthly payment plans with the IRS to resolve your tax debt on your terms, not theirs.",
    icon: BarChart3,
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=300&fit=crop&q=80",
  },
  {
    title: "Unfiled Returns & Back Tax Filing",
    description: "Get compliant quickly. We prepare and file all delinquent returns to stop substitute filings and minimize your exposure.",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop&q=80",
  },
];

export function ServicesGridDetailed() {
  return (
    <section className="py-24 md:py-32 bg-[#F7F7F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col items-center">
        <div className="flex flex-col gap-6 text-center max-w-2xl mb-16">
          <div className="flex items-center gap-3 justify-center">
            <div className="w-9 h-px bg-[#2C3E50]" />
            <span className="font-['Inter'] font-medium text-[14px] uppercase tracking-wider text-[#2C3E50]">
              TAILORED SOLUTIONS
            </span>
            <div className="w-9 h-px bg-[#2C3E50]" />
          </div>
          <h2
            className="font-['Inter'] font-semibold text-[#2C3E50] tracking-tight leading-tight"
            style={{ fontSize: "clamp(32px, 3.5vw, 48px)" }}
          >
            Comprehensive services to <br />
            <span className="text-[#017984]">drive growth</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-y-12 w-full">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.7 }}
              className="flex flex-col group cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="h-[180px] rounded-[8px] overflow-hidden relative mb-6 group-hover:scale-[1.02] transition-transform duration-500">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/60 to-transparent" />
                <div className="absolute bottom-3 left-3 w-10 h-10 bg-[#00838F] rounded-lg flex items-center justify-center shadow-lg">
                  <service.icon className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3">
                <h3 className="font-['Inter'] font-bold text-[#2C3E50] text-[24px] tracking-tight leading-snug">
                  {service.title}
                </h3>
                <p className="font-['Inter'] text-[#636363] text-[15px] leading-relaxed mb-4" style={{ lineHeight: '1.7' }}>
                  {service.description}
                </p>
                <div className="flex items-center gap-2 self-start group/link border-b-2 border-transparent hover:border-[#017984] transition-all pb-1">
                  <span className="font-['Inter'] font-bold text-[#2C3E50] text-sm uppercase tracking-wider">
                    Learn more
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#2C3E50] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
