import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Plus, Minus } from "lucide-react";
import { Link } from "react-router";

const TRACKS = {
  solution: {
    label: "I Need a Solution",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=500&fit=crop&q=80",
    items: [
      {
        title: "Offer in Compromise",
        description:
          "Settle your IRS debt for less than you owe. We evaluate your eligibility and handle all IRS negotiations to reach the lowest possible settlement.",
        href: "/services",
      },
      {
        title: "Installment Agreement",
        description:
          "Establish an affordable monthly payment plan with the IRS. We structure the terms to protect your cash flow and financial stability.",
        href: "/services",
      },
      {
        title: "Penalty Abatement",
        description:
          "Reduce or eliminate IRS penalties through first-time penalty abatement, reasonable cause claims, or other proven relief strategies.",
        href: "/services",
      },
      {
        title: "Currently Not Collectible",
        description:
          "If you cannot afford to pay, we can have your account placed in a protected status — stopping all IRS collection activity immediately.",
        href: "/services",
      },
      {
        title: "Innocent Spouse Relief",
        description:
          "If your tax liability stems from a spouse's actions, we can pursue relief to separate you from their tax debt and protect your finances.",
        href: "/services",
      },
      {
        title: "Tax Lien Withdrawal",
        description:
          "A federal tax lien damages your credit and limits your options. We work to have liens withdrawn, released, or subordinated to restore your financial freedom.",
        href: "/services",
      },
    ],
  },
  problem: {
    label: "I Have a Problem",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=500&fit=crop&q=80",
    items: [
      {
        title: "Mounting Penalties & Interest",
        description:
          "IRS penalties and interest compound daily, turning a manageable debt into a financial crisis. We stop the growth and negotiate what you actually owe.",
        href: "/services",
      },
      {
        title: "Threatening IRS Letters",
        description:
          "IRS notices escalate fast — from CP2000 to final notice of intent to levy. We decode every letter and respond on your behalf before deadlines pass.",
        href: "/services",
      },
      {
        title: "Frozen Bank Accounts",
        description:
          "A bank levy freezes your account immediately. We act fast to release the levy and establish a plan that protects your assets going forward.",
        href: "/services",
      },
      {
        title: "Paycheck Garnishment",
        description:
          "Wage garnishment can take up to 70% of your paycheck. We can stop it — often within 48 hours — and negotiate a manageable resolution.",
        href: "/services",
      },
      {
        title: "Years of Unfiled Returns",
        description:
          "Unfiled returns invite aggressive IRS enforcement including substitute filings, higher liabilities, and potential criminal referrals. We get you compliant fast.",
        href: "/services",
      },
    ],
  },
} as const;

type TrackKey = keyof typeof TRACKS;

export function STTwoTrack() {
  const [activeTrack, setActiveTrack] = useState<TrackKey>("solution");
  const [openId, setOpenId] = useState<number | null>(null);

  const track = TRACKS[activeTrack];

  function handleTabChange(key: TrackKey) {
    setActiveTrack(key);
    setOpenId(null);
  }

  return (
    <section className="bg-[#f9fafb] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[1.5px] bg-[#059669]" />
            <span
              className="font-['Inter'] font-medium text-[14px] uppercase tracking-wider text-[#059669]"
            >
              Your Situation
            </span>
          </div>
          <h2
            className="font-['Inter'] font-bold text-[#0b0b0b] leading-[1.1] tracking-tight mb-4"
            style={{
              fontSize: "clamp(32px, 4vw, 56px)",
              textWrap: "balance",
            }}
          >
            Find Your Path Forward
          </h2>
          <p className="font-['Inter'] text-[16px] md:text-[18px] text-[#4b5563] leading-relaxed max-w-xl">
            Whether you need a specific solution or you're dealing with an
            active problem, we know how to help.
          </p>
        </motion.div>

        {/* Tab toggle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mb-10"
        >
          <div className="bg-white rounded-full p-1 inline-flex shadow-sm border border-gray-100">
            {(Object.keys(TRACKS) as TrackKey[]).map((key) => (
              <button
                key={key}
                onClick={() => handleTabChange(key)}
                className={
                  activeTrack === key
                    ? "bg-[#059669] text-white rounded-full px-6 py-2.5 font-['Inter'] font-semibold text-[15px] transition-all"
                    : "text-[#4b5563] px-6 py-2.5 font-['Inter'] font-semibold text-[15px] hover:text-[#0b0b0b] transition-colors"
                }
              >
                {TRACKS[key].label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

          {/* Left: image (desktop only) */}
          <div className="lg:w-[400px] shrink-0 h-[520px] rounded-2xl overflow-hidden hidden lg:block relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTrack}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <ImageWithFallback
                  src={track.image}
                  alt={track.label}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: accordion */}
          <div className="flex-1 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTrack}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                {track.items.map((item, idx) => {
                  const isOpen = openId === idx;
                  return (
                    <div key={idx} className="border-b border-gray-200">
                      <button
                        onClick={() => setOpenId(isOpen ? null : idx)}
                        className="flex items-center justify-between w-full text-left py-5 gap-4"
                      >
                        <span
                          className={`font-['Inter'] font-semibold text-[18px] transition-colors ${
                            isOpen ? "text-[#059669]" : "text-[#0b0b0b]"
                          }`}
                        >
                          {item.title}
                        </span>
                        {isOpen ? (
                          <Minus className="text-[#059669] w-5 h-5 shrink-0" />
                        ) : (
                          <Plus className="text-[#059669] w-5 h-5 shrink-0" />
                        )}
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="font-['Inter'] text-[16px] text-[#4b5563] leading-[1.7] pb-5">
                              {item.description}
                            </p>
                            <Link
                              to={item.href}
                              className="text-[#059669] font-medium text-[14px] flex items-center gap-1 pb-5 hover:gap-2 transition-all font-['Inter']"
                            >
                              Learn More →
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
