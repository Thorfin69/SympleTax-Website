import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const imgContainer = "https://images.unsplash.com/photo-1758519288969-4806f015852d?auto=format&fit=crop&q=80&w=600";
const imgContainer1 = "https://images.unsplash.com/photo-1762427354251-f008b64dbc32?auto=format&fit=crop&q=80&w=600";
const imgContainer2 = "https://images.unsplash.com/photo-1681569685378-3c18bf84b504?auto=format&fit=crop&q=80&w=600";

const services = [
  {
    number: "01",
    title: "Financial Planning and Strategy",
    description: "Expert planning and strategic advice tailored to your specific business goals and growth trajectory.",
    image: imgContainer,
  },
  {
    number: "02",
    title: "Tax Optimization and Compliance",
    description: "Maximize your tax savings and ensure full regulatory compliance with our expert consulting services.",
    image: imgContainer1,
  },
  {
    number: "03",
    title: "Risk Management and Investment",
    description: "Comprehensive risk assessments and tailored investment advice for portfolio diversification.",
    image: imgContainer2,
  },
];

export function ServicesGrid() {
  return (
    <section className="py-24 md:py-32 bg-[#F7F7F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col items-center">
        <div className="flex flex-col gap-6 text-center max-w-2xl mb-16">
          <div className="flex items-center gap-3 justify-center">
            <div className="w-9 h-px bg-[#2C3E50]" />
            <span className="font-['Inter'] font-medium text-[14px] uppercase tracking-wider text-[#2C3E50]">
              Tailored Solutions
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

        <div className="grid md:grid-cols-3 gap-8 w-full">
          {services.map((service, idx) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.7 }}
              className="bg-white rounded-lg overflow-hidden flex flex-col group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              {/* Thumbnail */}
              <div className="h-[240px] overflow-hidden relative">
                <div className="absolute top-4 left-4 z-10 bg-[#017984] text-white font-['Inter'] font-bold text-sm px-4 py-2 rounded-md">
                  {service.number}
                </div>
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 p-8">
                <h3 className="font-['Inter'] font-semibold text-[#2C3E50] text-[22px] tracking-tight leading-snug">
                  {service.title}
                </h3>
                <p className="font-['Inter'] text-[#636363] text-[15px] leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 mt-2 self-start border-b-2 border-transparent hover:border-[#017984] transition-all pb-1">
                  <span className="font-['Inter'] font-semibold text-[#2C3E50]">
                    Learn more
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#2C3E50] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
