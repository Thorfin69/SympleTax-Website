import { motion } from "motion/react";
import { ArrowUpRight, Linkedin, Twitter } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const imgAvatar2 = "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?auto=format&fit=crop&q=80&w=400&h=500";
const imgContainer = "https://images.unsplash.com/photo-1742569184536-77ff9ae46c99?auto=format&fit=crop&q=80&w=400&h=500";
const imgContainer1 = "https://images.unsplash.com/photo-1758598497414-3ddd779e2611?auto=format&fit=crop&q=80&w=400&h=500";
const imgContainer2 = "https://images.unsplash.com/photo-1671718648167-6b209c182480?auto=format&fit=crop&q=80&w=400&h=500";

const team = [
  {
    name: "Sarah Mitchell",
    role: "Senior Tax Consultant",
    image: imgAvatar2,
    description:
      "12+ years guiding businesses through complex tax landscapes with precision.",
  },
  {
    name: "Daniel Wright",
    role: "Head of Investment Strategy",
    image: imgContainer,
    description:
      "Expert in portfolio diversification and long-term wealth management strategies.",
  },
  {
    name: "Emily Thompson",
    role: "Chief Financial Officer",
    image: imgContainer1,
    description:
      "Leads our financial planning division with a data-first, results-driven approach.",
  },
  {
    name: "James Carter",
    role: "Risk & Compliance Director",
    image: imgContainer2,
    description:
      "Specialist in regulatory compliance and enterprise risk mitigation frameworks.",
  },
];

export function Team() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-5"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-px bg-[#2C3E50]" />
              <span className="font-['Inter'] font-medium text-[14px] uppercase tracking-wider text-[#2C3E50]">
                Meet Our Team
              </span>
            </div>
            <h2
              className="font-['Inter'] font-semibold text-[#2C3E50] tracking-tight leading-tight max-w-[520px]"
              style={{ fontSize: "clamp(36px, 4vw, 48px)" }}
            >
              Experts dedicated to your{" "}
              <span className="text-[#017984]">financial growth</span>
            </h2>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#017984] text-white px-7 py-4 rounded-full font-['Inter'] font-semibold flex items-center gap-3 group overflow-hidden relative shrink-0"
          >
            <span className="relative z-10">View all team</span>
            <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <div className="absolute inset-0 bg-[#2C3E50] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </motion.button>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.7 }}
              className="group flex flex-col gap-4 cursor-pointer"
            >
              {/* Portrait */}
              <div className="relative overflow-hidden rounded-lg aspect-[4/5] bg-gray-100">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/90 via-[#2C3E50]/30 to-transparent flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <p className="font-['Inter'] text-white/80 text-[13px] leading-relaxed">
                    {member.description}
                  </p>
                  <div className="flex gap-3 mt-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-[#017984] transition-colors">
                      <Linkedin className="w-4 h-4 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-[#017984] transition-colors">
                      <Twitter className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Info */}
              <motion.div
                className="flex flex-col gap-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 + 0.3, duration: 0.5 }}
              >
                <h3 className="font-['Inter'] font-semibold text-[#222] text-[22px] tracking-tight leading-tight">
                  {member.name}
                </h3>
                <p className="font-['Inter'] text-[#636363] text-[15px]">
                  {member.role}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
