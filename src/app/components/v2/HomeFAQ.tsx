import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";
import { Plus, Minus } from "lucide-react";

const HOME_FAQS = [
  {
    id: "01",
    question: "How long does the tax resolution process take?",
    answer:
      "The timeline depends on the complexity of your case. Simple resolutions can take 2–4 months, while complex Offer in Compromise cases may take 6–12 months. However, we take immediate action within 24–48 hours to stop active collections, levies, or garnishments.",
  },
  {
    id: "02",
    question: "Do I have to speak with the IRS myself?",
    answer:
      "No. Once you hire SympleTax, we file a Power of Attorney (Form 2848) with the IRS. This legally authorizes us to speak and negotiate on your behalf. You can stop taking their calls and let us handle all correspondence.",
  },
  {
    id: "03",
    question: "What is an Offer in Compromise (OIC)?",
    answer:
      "An Offer in Compromise is an IRS program that allows qualified taxpayers to settle their full tax debt for a fraction of what they owe. Qualification is based on your income, expenses, and asset equity. We have a strong track record of negotiating successful settlements.",
  },
  {
    id: "04",
    question: "Can you stop my wage garnishment immediately?",
    answer:
      "Yes. Wage garnishments and bank levies are often the most urgent problems. We can typically secure a release of levy within 24 to 48 hours of being retained, provided we can demonstrate a path toward resolution or financial hardship to the IRS.",
  },
  {
    id: "05",
    question: "What makes SympleTax different from other companies?",
    answer:
      "Unlike firms that rely on sales reps, every case at SympleTax is handled directly by a licensed Enrolled Agent or CPA. We offer transparent, flat-fee pricing and a results-first approach. We focus on measurable outcomes — not just paperwork.",
  },
  {
    id: "06",
    question: "What does the $99 flat fee include?",
    answer:
      "The $99 flat fee covers your initial Strategic Discovery phase — a full IRS transcript analysis, identification of your best resolution options, and filing of your Power of Attorney. There are no hidden fees. We will clearly outline any additional costs before proceeding.",
  },
  {
    id: "07",
    question: "Can you help with both federal and state tax debt?",
    answer:
      "Yes. SympleTax handles both IRS federal tax debt and state tax debt. State agencies have different processes and deadlines, but our licensed professionals are experienced with both and can negotiate on your behalf at both levels.",
  },
  {
    id: "08",
    question: "What is Currently Not Collectible (CNC) status?",
    answer:
      "Currently Not Collectible is an IRS status granted when a taxpayer cannot pay their tax debt without causing financial hardship. While in CNC status, the IRS temporarily stops collection efforts including levies and garnishments. It is not a permanent solution but provides critical breathing room.",
  },
  {
    id: "09",
    question: "How do I know if I qualify for an Offer in Compromise?",
    answer:
      "Qualification depends on your ability to pay, income, expenses, and asset equity. During our Strategic Discovery phase, we analyze your full financial picture and IRS transcripts to determine whether an OIC is your best path — or whether another program gives you a better outcome.",
  },
  {
    id: "10",
    question: "What happens if I have unfiled tax returns?",
    answer:
      "Unfiled returns must be addressed before the IRS will consider any resolution. SympleTax can prepare and file any missing returns as part of your case at no additional charge. In many cases, filing outstanding returns actually reduces the total balance owed.",
  },
];

const LEFT_FAQS = HOME_FAQS.slice(0, 5);
const RIGHT_FAQS = HOME_FAQS.slice(5, 10);

function FAQItem({ faq, activeId, setActiveId }: { faq: typeof HOME_FAQS[0]; activeId: string | null; setActiveId: (id: string | null) => void }) {
  const isOpen = activeId === faq.id;
  return (
    <div
      className="overflow-hidden border-b"
      style={{
        borderColor: "#e8e4dd",
        borderLeft: isOpen ? "3px solid #00A4A4" : "3px solid transparent",
        transition: "border-left-color 0.25s ease",
      }}
    >
      <button
        onClick={() => setActiveId(isOpen ? null : faq.id)}
        className="flex items-center gap-[16px] w-full text-left cursor-pointer"
        style={{ paddingTop: "22px", paddingBottom: "22px", paddingLeft: "20px", paddingRight: "16px" }}
        aria-expanded={isOpen}
      >
        <span
          className="font-['DM_Sans'] font-bold flex-grow leading-[1.3]"
          style={{
            fontSize: "16px",
            letterSpacing: "-0.4px",
            color: isOpen ? "#0f172a" : "#334155",
            transition: "color 0.25s ease",
          }}
        >
          {faq.question}
        </span>
        <div
          className="shrink-0 flex items-center justify-center rounded-full transition-all duration-300"
          style={{
            width: "30px",
            height: "30px",
            background: isOpen ? "#00A4A4" : "#f5f1e8",
            color: isOpen ? "#ffffff" : "#0f172a",
            border: isOpen ? "none" : "1.5px solid #ddd8cf",
            minWidth: "30px",
          }}
          aria-hidden="true"
        >
          {isOpen ? <Minus style={{ width: "13px", height: "13px" }} /> : <Plus style={{ width: "13px", height: "13px" }} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key={faq.id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div style={{ paddingLeft: "20px", paddingRight: "20px", paddingBottom: "22px" }}>
              <p
                className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.7]"
                style={{ fontSize: "15px", letterSpacing: "-0.2px" }}
              >
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function HomeFAQ() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="faq" className="bg-white py-[64px] lg:py-[120px]">
      <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px]">

        {/* TOP: Header — centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[40px] lg:mb-[72px]"
        >
          <div className="flex items-center justify-center gap-[10px] mb-[20px]">
            <div className="bg-[#00A4A4] h-px w-[35px]" />
            <span
              className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
              style={{ fontSize: "14px", letterSpacing: "0.05em" }}
            >
              Common Questions
            </span>
            <div className="bg-[#00A4A4] h-px w-[35px]" />
          </div>

          <h2
            className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.08] mb-[20px]"
            style={{
              fontSize: "clamp(28px, 6.5vw, 56px)",
              letterSpacing: "-1.5px",
            }}
          >
            Everything About Tax Resolution
          </h2>

          <p
            className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.65] mx-auto mb-[36px]"
            style={{ fontSize: "16px", letterSpacing: "-0.3px", maxWidth: "500px" }}
          >
            Navigating the IRS can feel overwhelming. Here are the questions our clients ask most often.
          </p>

          <Link
            to="https://ti.sympletax.com/free-consultation"
            className="inline-flex items-center gap-[10px] bg-[#00A4A4] hover:bg-[#007a7a] text-white font-['DM_Sans'] font-bold rounded-full hover:scale-[1.02] transition-all duration-300"
            style={{
              fontSize: "15px",
              padding: "15px 32px",
              letterSpacing: "-0.2px",
              boxShadow: "0 8px 28px rgba(0,164,164,0.28)",
            }}
            aria-label="Get a free consultation with a tax resolution specialist"
          >
            Get a Free Consultation
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>

        {/* BOTTOM: 2-column FAQ grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-[60px]"
        >
          {/* Left: FAQs 1–5 */}
          <div className="flex flex-col">
            {LEFT_FAQS.map((faq) => (
              <FAQItem key={faq.id} faq={faq} activeId={activeId} setActiveId={setActiveId} />
            ))}
          </div>

          {/* Right: FAQs 6–10 */}
          <div className="flex flex-col">
            {RIGHT_FAQS.map((faq) => (
              <FAQItem key={faq.id} faq={faq} activeId={activeId} setActiveId={setActiveId} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
