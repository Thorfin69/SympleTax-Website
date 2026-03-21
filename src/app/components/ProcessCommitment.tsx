import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Play } from "lucide-react";

const avatars = [
  "https://images.unsplash.com/photo-1717068341511-204207d72705?auto=format&fit=crop&q=80&w=150&h=150",
  "https://images.unsplash.com/photo-1758518727888-ffa196002e59?auto=format&fit=crop&q=80&w=150&h=150",
  "https://images.unsplash.com/photo-1617386124435-9eb3935b1e11?auto=format&fit=crop&q=80&w=150&h=150",
  "https://images.unsplash.com/photo-1758518727592-706e80ebc354?auto=format&fit=crop&q=80&w=150&h=150",
  "https://images.unsplash.com/photo-1679485895677-2e685b04c3e2?auto=format&fit=crop&q=80&w=150&h=150",
];

const imgVideoCover = "https://images.unsplash.com/photo-1554902843-260acd0993f8?auto=format&fit=crop&q=80&w=800&h=500";

export function ProcessCommitment() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6"
            >
              <h2
                className="font-['Inter'] font-medium text-[#2C3E50] tracking-tight leading-tight"
                style={{ fontSize: "clamp(32px, 3.5vw, 40px)", textWrap: 'balance' }}
              >
                At the heart of our success is a strong commitment to clarity, efficiency, and value
              </h2>
              <p className="font-['Inter'] text-[#636363] text-[16px] leading-relaxed max-w-[540px]">
                We believe a well-organized approach is essential for achieving great results. Our process streamlines workflows, boosts productivity, and consistently delivers impactful outcomes with the clarity and focus your business needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-5"
            >
              <div className="flex -space-x-3">
                {avatars.map((avatar, idx) => (
                  <div key={idx} className="relative group">
                    <div className="w-[60px] h-[60px] rounded-full border-2 border-white overflow-hidden bg-gray-100 transition-transform group-hover:-translate-y-1">
                      <ImageWithFallback src={avatar} alt={`Team member ${idx + 1}`} className="w-full h-full object-cover" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-['Inter'] font-semibold text-[#2C3E50] text-[36px] tracking-tight">99+</span>
                <span className="font-['Inter'] text-[#2C3E50] text-[16px]">Satisfied clients</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-3"
            >
              <div className="flex flex-col gap-1">
                <span className="font-['Inter'] font-semibold text-[#017984] text-[50px] leading-none">250+</span>
                <span className="font-['Inter'] font-medium text-[#2C3E50] text-[18px]">Successful projects</span>
              </div>
              
              <div className="relative rounded-xl overflow-hidden aspect-video mt-4 group">
                <ImageWithFallback
                  src={imgVideoCover}
                  alt="Team collaboration"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#2C3E50]/20 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-16 h-16 bg-[#017984] rounded-full flex items-center justify-center text-white shadow-xl"
                  >
                    <Play className="w-6 h-6 fill-current" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
