import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const imgMapWrapper = "https://images.unsplash.com/photo-1570106413982-7f2897b8d0c5?auto=format&fit=crop&q=80&w=1000";
const imgAvatar = "https://images.unsplash.com/photo-1742569184536-77ff9ae46c99?auto=format&fit=crop&q=80&w=100&h=100";
const imgAvatar1 = "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?auto=format&fit=crop&q=80&w=100&h=100";
const imgAvatar2 = "https://images.unsplash.com/photo-1758598497414-3ddd779e2611?auto=format&fit=crop&q=80&w=100&h=100";
const imgAvatar3 = "https://images.unsplash.com/photo-1671718648167-6b209c182480?auto=format&fit=crop&q=80&w=100&h=100";
const imgAvatar4 = "https://images.unsplash.com/photo-1658909835269-e76abd3ffb5d?auto=format&fit=crop&q=80&w=100&h=100";

const stats = [
  { value: "50%", label: "Satisfied Clients" },
  { value: "80%", label: "Revenue Growth" },
  { value: "99%", label: "Client Retention" },
];

const mapAvatars = [
  { img: imgAvatar3, top: "32%", left: "17%" },
  { img: imgAvatar4, top: "18%", right: "14%" },
  { img: imgAvatar1, top: "46%", right: "36%" },
  { img: imgAvatar, top: "62%", left: "4%" },
];

export function GlobalClients() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Map Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative h-[400px] md:h-[441px]"
          >
            <ImageWithFallback
              src={imgMapWrapper}
              alt="Global reach map"
              className="w-full h-full object-contain"
            />

            {/* Floating Avatars on Map */}
            {mapAvatars.map((avatar, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  y: {
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  },
                  scale: {
                    type: "spring",
                    delay: idx * 0.15 + 0.3,
                    duration: 0.5,
                  },
                  opacity: {
                    delay: idx * 0.15 + 0.3,
                    duration: 0.5,
                  },
                }}
                style={{
                  top: avatar.top,
                  left: avatar.left,
                  right: avatar.right,
                }}
                className="absolute w-[52px] h-[52px] rounded-full overflow-hidden border-2 border-white shadow-lg"
              >
                <ImageWithFallback
                  src={avatar.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex flex-col gap-10"
          >
            {/* Label */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-px bg-[#2C3E50]" />
                <span className="font-['Inter'] font-medium text-[14px] uppercase tracking-wider text-[#2C3E50]">
                  Global Trust, Proven Results
                </span>
              </div>
              <h2
                className="font-['Inter'] font-bold text-[#2C3E50] leading-[1.08]"
                style={{ fontSize: "clamp(36px, 4vw, 48px)", letterSpacing: "-1.5px" }}
              >
                Our Valued Clients{" "}
                <span className="text-[#017984]">Around the World</span>
              </h2>
              <p className="font-['Inter'] text-[#636363] text-[16px] leading-relaxed">
                Discover the global reach of our financial expertise. We proudly
                serve businesses across multiple regions, helping them achieve
                financial success with tailored solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 + 0.4, duration: 0.6 }}
                  className="flex flex-col gap-2"
                >
                  <div className="flex flex-col gap-1">
                    <motion.span
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 + 0.5, type: "spring" }}
                      className="font-['Inter'] font-semibold text-[#2C3E50] text-[44px] leading-none tracking-tight"
                    >
                      {stat.value}
                    </motion.span>
                    <p className="font-['Inter'] font-medium text-[#2C3E50] text-[17px]">
                      {stat.label}
                    </p>
                  </div>
                  {/* Animated meter bar */}
                  <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: stat.value }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: idx * 0.2 + 0.5 }}
                      className="h-full bg-[#017984] rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Avatars Row */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[imgAvatar, imgAvatar1, imgAvatar2].map((img, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.6, type: "spring" }}
                    className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                  >
                    <ImageWithFallback src={img} alt="" className="w-full h-full object-cover" />
                  </motion.div>
                ))}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, type: "spring" }}
                  className="w-10 h-10 rounded-full border-2 border-white bg-[#017984] flex items-center justify-center"
                >
                  <span className="font-['Inter'] font-bold text-white text-xs">+</span>
                </motion.div>
              </div>
              <div>
                <p className="font-['Inter'] font-medium text-[#F7F7F7] text-[22px] tracking-tight">
                  <span className="text-[#2C3E50]">100+</span>
                </p>
                <p className="font-['Inter'] text-[#636363] text-[14px]">
                  Satisfied clients
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
