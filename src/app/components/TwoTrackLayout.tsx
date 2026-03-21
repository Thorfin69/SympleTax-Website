import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const TRACKS = {
  solution: {
    label: "I Need a Solution",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&h=800&fit=crop&q=85",
    items: [
      {
        title: "Offer in Compromise",
        desc: "Settle your entire IRS debt for significantly less than the full amount owed. An IRS-approved program for taxpayers who genuinely cannot pay their full liability.",
      },
      {
        title: "Installment Agreement",
        desc: "Set up manageable monthly payments that fit your financial situation. We negotiate the lowest possible payment and protect you from collection actions.",
      },
      {
        title: "Penalty Abatement",
        desc: "Remove or dramatically reduce IRS penalties through first-time penalty relief or reasonable cause. Thousands in penalties erased with the right argument.",
      },
      {
        title: "Currently Not Collectible",
        desc: "Pause all IRS collection activity when you genuinely cannot afford to pay. A formal IRS status that stops levies, garnishments, and collection calls.",
      },
      {
        title: "Innocent Spouse Relief",
        desc: "Protect yourself from tax liability caused by a spouse or ex-spouse. You shouldn't pay for someone else's errors or fraud.",
      },
      {
        title: "Unfiled Returns",
        desc: "Get fully compliant without fear — we handle all missing years at once and minimize your total exposure before the IRS comes looking.",
      },
    ],
  },
  problem: {
    label: "I Have a Problem",
    image: "https://images.unsplash.com/photo-1586282391129-76a6df230234?w=1600&h=800&fit=crop&q=85",
    items: [
      {
        title: "Back Taxes",
        desc: "Unpaid taxes from prior years compounding with interest and penalties every single day. We stop the clock, reconstruct your liability, and negotiate a fair number.",
      },
      {
        title: "Wage Garnishment",
        desc: "The IRS is taking money directly from your paycheck. We can stop garnishment within 24–48 hours and establish a better resolution path.",
      },
      {
        title: "Tax Levy",
        desc: "Bank accounts seized or property threatened — this is the IRS's most aggressive collection tool. Immediate professional intervention is non-negotiable.",
      },
      {
        title: "Tax Lien",
        desc: "A federal lien against your assets damages your credit and blocks financing. We negotiate lien withdrawal or subordination to minimize the impact.",
      },
      {
        title: "IRS Audit",
        desc: "Under IRS examination — whether correspondence or field audit, we represent you completely. You never have to speak to the IRS directly.",
      },
      {
        title: "IRS Notices",
        desc: "Threatening letters that escalate fast without expert response. We decode every notice, respond on your behalf, and prevent escalation to enforcement.",
      },
    ],
  },
} as const;

type TrackKey = keyof typeof TRACKS;

export function TwoTrackLayout() {
  const [activeTrack, setActiveTrack] = useState<TrackKey>("solution");
  const [activeIdx, setActiveIdx] = useState(0);

  const track = TRACKS[activeTrack];
  const item = track.items[activeIdx];

  function switchTrack(key: TrackKey) {
    if (key === activeTrack) return;
    setActiveTrack(key);
    setActiveIdx(0);
  }

  return (
    <section className="bg-white py-[120px]">
      <div className="max-w-[1330px] mx-auto px-[70px]">

        {/* Header */}
        <div className="flex items-end justify-between gap-12 mb-[40px]">
          <div className="flex flex-col gap-[14px]">
            <div className="flex items-center gap-[10px]">
              <div className="bg-[#2c3e50] h-px w-[35px]" />
              <span className="font-['Inter'] font-medium uppercase text-[#2c3e50]" style={{ fontSize: "14px", letterSpacing: "0.05em" }}>
                Two Paths to Relief
              </span>
            </div>
            <h2 className="font-['Inter'] font-bold text-[#2c3e50] leading-[1.08] whitespace-nowrap" style={{ fontSize: "clamp(28px, 3vw, 42px)", letterSpacing: "-1.5px" }}>
              We Meet You Where You Are.
            </h2>
          </div>
          <p
            className="font-['Inter'] font-normal text-[#636363] leading-[1.65] shrink-0 max-w-[360px] text-right"
            style={{ fontSize: "16px", letterSpacing: "-0.3px" }}
          >
            Whether you're drowning in back taxes or facing an IRS notice, we have a proven path forward — tailored to your exact situation.
          </p>
        </div>

        {/* Tab bar — text style with underline */}
        <div className="flex items-center gap-8 mb-[32px] border-b border-gray-200">
          {(Object.keys(TRACKS) as TrackKey[]).map((key) => (
            <button
              key={key}
              onClick={() => switchTrack(key)}
              className={`relative pb-4 font-['Inter'] font-semibold text-[16px] transition-colors duration-200 ${
                activeTrack === key ? "text-[#2c3e50]" : "text-[#9ca3af] hover:text-[#636363]"
              }`}
            >
              {TRACKS[key].label}
              {activeTrack === key && (
                <motion.div
                  layoutId="tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2c3e50]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Full-width image card */}
        <div className="relative rounded-[20px] overflow-hidden" style={{ height: "580px" }}>

          {/* Background image — crossfades on tab switch */}
          <AnimatePresence>
            <motion.div
              key={activeTrack}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <ImageWithFallback
                src={track.image}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/40" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-between p-[56px]">

            {/* Top: Large animated title */}
            <AnimatePresence mode="wait">
              <motion.h3
                key={activeTrack + activeIdx + "title"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-['Inter'] font-bold text-white leading-[1.08] max-w-[620px]"
                style={{ fontSize: "clamp(24px, 2.5vw, 36px)", letterSpacing: "-1px" }}
              >
                {item.title}
              </motion.h3>
            </AnimatePresence>

            {/* Bottom: Description left + Chips right */}
            <div className="flex items-end justify-between gap-12">

              {/* Description */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTrack + activeIdx + "desc"}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 }}
                  className="flex flex-col gap-4 max-w-[440px]"
                >
                  <p className="font-['Inter'] text-white/75 leading-[1.65]" style={{ fontSize: "16px" }}>
                    {item.desc}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 font-['Inter'] font-semibold text-white text-[14px] border-b border-white/40 pb-0.5 w-fit hover:border-white transition-colors"
                  >
                    Get free consultation →
                  </Link>
                </motion.div>
              </AnimatePresence>

              {/* Chip pills — all items, click to select */}
              <div className="flex flex-wrap gap-2 max-w-[500px] justify-end">
                {track.items.map((it, i) => (
                  <button
                    key={it.title}
                    onClick={() => setActiveIdx(i)}
                    className={`px-4 py-2 rounded-full font-['Inter'] font-medium text-[13px] border transition-all duration-200 whitespace-nowrap ${
                      i === activeIdx
                        ? "bg-white text-[#2c3e50] border-white"
                        : "bg-transparent text-white/70 border-white/30 hover:border-white/60 hover:text-white"
                    }`}
                  >
                    {it.title}
                  </button>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
