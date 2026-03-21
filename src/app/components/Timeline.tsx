import { motion } from "motion/react";

const milestones = [
  {
    year: "2018",
    title: "The Beginning",
    description: "Our journey began with a mission to simplify financial strategies for startups.",
  },
  {
    year: "2019",
    title: "Expanding our services",
    description: "We added tax optimization and advisory to our core offerings, growing our team.",
  },
  {
    year: "2020",
    title: "Building trust",
    description: "Successfully navigated market shifts, earning the loyalty of our first 100 clients.",
  },
  {
    year: "2022",
    title: "Going global",
    description: "Expanded operations to serve international markets, with a new office in London.",
  },
  {
    year: "2023",
    title: "Innovating for success",
    description: "Launched our proprietary data-driven strategy platform for advanced analytics.",
  },
  {
    year: "2024",
    title: "Industry recognition",
    description: "Recognized as a leading financial consultancy for the third consecutive year.",
  },
];

export function Timeline() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          {/* Left Column - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8 md:w-1/3 md:sticky md:top-24 h-fit"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-px bg-[#2C3E50]" />
              <span className="font-['Inter'] font-medium text-[14px] uppercase tracking-wider text-[#2C3E50]">
                Our Journey of Growth
              </span>
            </div>
            <h2
              className="font-['Inter'] font-semibold text-[#2C3E50] tracking-tight leading-tight"
              style={{ fontSize: "clamp(32px, 3.5vw, 48px)", textWrap: 'balance' }}
            >
              Milestones that shaped our success
            </h2>
            <p className="font-['Inter'] text-[#636363] text-lg leading-relaxed">
              Our journey from 2018 to today has been defined by innovation, trust, and growth. Each milestone represents our commitment to helping businesses thrive in an ever-changing financial landscape.
            </p>
          </motion.div>

          {/* Right Column - Timeline Grid */}
          <div className="flex-1 grid md:grid-cols-2 gap-y-12 md:gap-y-16 md:gap-x-12">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col gap-4 border-b border-gray-100 pb-8 last:border-0 md:last:border-b"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-['Inter'] font-bold text-[22px] text-[#2C3E50] tracking-tight" style={{ textWrap: 'balance' }}>
                    {milestone.title}
                  </h3>
                  <span className="font-['Inter'] font-semibold text-[18px] text-[#017984]">
                    {milestone.year}
                  </span>
                </div>
                <p className="font-['Inter'] text-[#636363] text-[16px] leading-relaxed">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
