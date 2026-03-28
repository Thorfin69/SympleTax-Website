import { motion, AnimatePresence } from "motion/react";
import { Navbar } from "./components/v2/Navbar";
import { Footer } from "./components/v2/Footer";
import { Testimonials } from "./components/v2/Testimonials";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Phone, Mail, MapPin, Clock, Shield, ExternalLink, Instagram } from "lucide-react";
import { useEffect, useState } from "react";

import feedImg1 from "../../650321405_122097914025122800_4577503060609393561_n.jpg";
import feedImg2 from "../../651173716_122102903487122800_4091566060201860687_n.jpg";
import feedImg3 from "../../652943268_122103584361122800_6297573296820253944_n.jpg";
import feedImg4 from "../../653106919_122102903481122800_5641194311721553293_n.jpg";
import feedImg5 from "../../654349707_122104586823122800_5314580373899672598_n.jpg";
import feedImg6 from "../../655591656_122104586829122800_5873864143193721839_n.jpg";
import feedImg7 from "../../649497464_122096904597122800_6185958289926593262_n.jpg";

const FEED_IMAGES = [feedImg1, feedImg2, feedImg3, feedImg4, feedImg5, feedImg6, feedImg7];

const DEBT_OPTIONS = [
  { value: "", label: "Select an amount" },
  { value: "under-10k", label: "Under $10,000" },
  { value: "10k-25k", label: "$10,000 – $25,000" },
  { value: "25k-50k", label: "$25,000 – $50,000" },
  { value: "50k-100k", label: "$50,000 – $100,000" },
  { value: "over-100k", label: "Over $100,000" },
];

const CONTACT_DETAILS = [
  {
    icon: Phone,
    label: "Call Us Directly",
    value: "(949) 287-3015",
    sub: "Mon–Fri, 8am–6pm PT",
    href: "tel:+19492873015",
    color: "#00A4A4",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@sympletax.com",
    sub: "We reply within 24 hours",
    href: "mailto:info@sympletax.com",
    color: "#00A4A4",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Irvine, CA",
    sub: "Serving clients nationwide",
    href: null,
    color: "#00A4A4",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 Hours",
    sub: "Business days, Mon–Fri",
    href: null,
    color: "#00A4A4",
  },
];


export default function ContactPage() {
  useEffect(() => {
    document.title = "Free Tax Consultation | SympleTax";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Talk to a tax expert for free. No sales pressure. No obligation. Just honest advice about your options.");
  }, []);

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    debt: "",
    message: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-[#00A4A4] focus:text-white focus:px-4 focus:py-2 focus:rounded-full font-['DM_Sans'] font-bold"
        style={{ fontSize: "14px" }}
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">

        {/* ── 01. Page Hero ─────────────────────────────────────────────────── */}
        <section
          className="pt-[120px] lg:pt-[160px] pb-[64px] lg:pb-[80px] relative overflow-hidden"
          style={{ backgroundColor: "#0f172a" }}
          aria-label="Contact SympleTax"
        >
          {/* Teal glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: "0",
              top: "50%",
              transform: "translateY(-50%)",
              width: "500px",
              height: "400px",
              background: "radial-gradient(circle at 20% 50%, rgba(0,164,164,0.18) 0%, transparent 65%)",
            }}
            aria-hidden="true"
          />

          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px] relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between lg:gap-[60px]">

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-[640px]"
              >
                <div className="flex items-center gap-[10px] mb-[24px]">
                  <div className="bg-[#00A4A4] h-px w-[35px]" />
                  <span
                    className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                    style={{ fontSize: "13px", letterSpacing: "0.08em" }}
                  >
                    Free Consultation
                  </span>
                </div>
                <h1
                  className="font-['DM_Sans'] font-bold text-white leading-[1.06] mb-[20px]"
                  style={{ fontSize: "clamp(34px, 5vw, 68px)", letterSpacing: "-2.5px" }}
                >
                  Let's Talk About<br />
                  <span className="text-[#00A4A4]">Your Tax Situation</span>
                </h1>
                <p
                  className="font-['DM_Sans'] font-normal text-white/70 leading-[1.65]"
                  style={{ fontSize: "clamp(15px, 1.5vw, 18px)", letterSpacing: "-0.3px" }}
                >
                  This call is free. No sales pressure. Just an honest conversation about your options — with a licensed professional who has seen it all before.
                </p>
              </motion.div>


            </div>
          </div>
        </section>

        {/* ── 02. Form + Contact Details ────────────────────────────────────── */}
        <section className="py-[64px] lg:py-[100px] bg-white" aria-label="Contact form and information">
          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px]">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-[60px] lg:gap-[80px] items-start">

              {/* Left: Info + Contact Details */}
              <div className="flex flex-col gap-[48px]">

                <div>
                  <h2
                    className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.08] mb-[16px]"
                    style={{ fontSize: "clamp(26px, 3vw, 40px)", letterSpacing: "-1.5px" }}
                  >
                    We're Here To Help
                  </h2>
                  <p
                    className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.65]"
                    style={{ fontSize: "16px", letterSpacing: "-0.3px", maxWidth: "480px" }}
                  >
                    Don't wait for the IRS to escalate. The sooner you reach out, the more options you have. Every conversation is strictly confidential.
                  </p>
                </div>

                {/* Contact details grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                  {CONTACT_DETAILS.map((item, idx) => {
                    const Icon = item.icon;
                    const inner = (
                      <div
                        key={item.label}
                        className="flex items-start gap-[16px] p-[20px] rounded-[16px]"
                        style={{ backgroundColor: "#f8fafc", border: "1px solid #e8e4da" }}
                      >
                        <div
                          className="w-[44px] h-[44px] rounded-[12px] flex items-center justify-center shrink-0"
                          style={{ backgroundColor: item.color + "15" }}
                          aria-hidden="true"
                        >
                          <Icon style={{ width: "20px", height: "20px", color: item.color }} />
                        </div>
                        <div className="flex flex-col gap-[2px]">
                          <p
                            className="font-['DM_Sans'] font-medium text-[#94a3b8]"
                            style={{ fontSize: "11px", letterSpacing: "0.05em", textTransform: "uppercase" }}
                          >
                            {item.label}
                          </p>
                          <p
                            className="font-['DM_Sans'] font-bold text-[#0f172a]"
                            style={{ fontSize: "15px", letterSpacing: "-0.3px" }}
                          >
                            {item.value}
                          </p>
                          <p
                            className="font-['DM_Sans'] font-normal text-[#94a3b8]"
                            style={{ fontSize: "12px" }}
                          >
                            {item.sub}
                          </p>
                        </div>
                      </div>
                    );

                    return item.href ? (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.07 }}
                        className="block hover:scale-[1.02] transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A4A4] focus-visible:ring-offset-2 rounded-[16px]"
                        aria-label={`${item.label}: ${item.value}`}
                      >
                        {inner}
                      </motion.a>
                    ) : (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.07 }}
                      >
                        {inner}
                      </motion.div>
                    );
                  })}
                </div>

                {/* ── 03b. Full Intake Portal Link ── */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-[16px] p-[24px] flex flex-col sm:flex-row sm:items-center gap-[16px]"
                  style={{ backgroundColor: "rgba(0,164,164,0.06)", border: "1px solid rgba(0,164,164,0.2)" }}
                >
                  <div className="flex-1">
                    <p className="font-['DM_Sans'] font-bold text-[#0f172a] mb-[4px]" style={{ fontSize: "15px" }}>
                      Prefer a guided experience?
                    </p>
                    <p className="font-['DM_Sans'] font-normal text-[#475569]" style={{ fontSize: "13px" }}>
                      Start our full intake form for a step-by-step walkthrough of your tax situation.
                    </p>
                  </div>
                  <a
                    href="https://ti.sympletax.com/free-consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-[8px] border border-[#00A4A4] text-[#00A4A4] font-['DM_Sans'] font-bold rounded-full hover:bg-[#00A4A4] hover:text-white transition-all duration-200 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A4A4]"
                    style={{ fontSize: "13px", padding: "10px 20px", whiteSpace: "nowrap" }}
                    aria-label="Start full intake form at ti.sympletax.com/free-consultation (opens in new tab)"
                  >
                    Start Full Intake Form
                    <ExternalLink className="w-[13px] h-[13px]" aria-hidden="true" />
                  </a>
                </motion.div>

                {/* Legal disclaimer */}
                <p
                  className="font-['DM_Sans'] font-normal text-[#94a3b8] leading-[1.6] border-t border-[#e8e4da] pt-[24px]"
                  style={{ fontSize: "12px" }}
                >
                  SympleTax is a private tax resolution company and is not affiliated with or endorsed by the IRS or any government agency. We are licensed tax professionals. Results vary. Nothing here constitutes legal or financial advice. For official IRS information, visit{" "}
                  <a
                    href="https://www.irs.gov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00A4A4] hover:underline"
                  >
                    IRS.gov
                  </a>.
                </p>

              </div>

              {/* Right: Form */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.4 }}
                      className="rounded-[24px] p-[40px] text-center flex flex-col gap-[20px] items-center"
                      style={{
                        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                        boxShadow: "0 24px 64px rgba(0,0,0,0.15)",
                      }}
                      role="alert"
                      aria-live="polite"
                    >
                      <div className="w-[72px] h-[72px] bg-[#00A4A4] rounded-full flex items-center justify-center">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M5 12l4 4L19 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-['DM_Sans'] font-bold text-white mb-[8px]" style={{ fontSize: "24px", letterSpacing: "-0.5px" }}>
                          We'll Be In Touch Soon
                        </h3>
                        <p className="font-['DM_Sans'] font-normal text-white/60 leading-[1.65]" style={{ fontSize: "15px" }}>
                          A licensed professional will review your case and reach out within 24 business hours.
                        </p>
                      </div>
                      <div
                        className="w-full rounded-[14px] p-[20px] flex flex-col gap-[10px]"
                        style={{ backgroundColor: "rgba(0,164,164,0.12)", border: "1px solid rgba(0,164,164,0.2)" }}
                      >
                        <p className="font-['DM_Sans'] font-bold text-[#00A4A4]" style={{ fontSize: "13px" }}>WHAT HAPPENS NEXT</p>
                        {["We review your IRS account", "We call to explain your options", "You decide how to proceed — zero pressure"].map((step, i) => (
                          <div key={i} className="flex items-center gap-[10px]">
                            <div className="w-[20px] h-[20px] rounded-full bg-[#00A4A4]/20 flex items-center justify-center shrink-0">
                              <span className="font-['DM_Sans'] font-bold text-[#00A4A4]" style={{ fontSize: "10px" }}>{i + 1}</span>
                            </div>
                            <span className="font-['DM_Sans'] font-normal text-white/70" style={{ fontSize: "13px" }}>{step}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="rounded-[24px] p-[28px] lg:p-[40px] flex flex-col gap-[20px]"
                      style={{
                        boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
                        border: "1px solid #e8e4da",
                      }}
                      aria-label="Free consultation request form"
                      noValidate
                    >
                      {/* Form header */}
                      <div className="mb-[4px]">
                        <h2
                          className="font-['DM_Sans'] font-bold text-[#0f172a] mb-[6px]"
                          style={{ fontSize: "22px", letterSpacing: "-0.5px" }}
                        >
                          Request My Free Consultation
                        </h2>
                        <p className="font-['DM_Sans'] font-normal text-[#94a3b8]" style={{ fontSize: "13px" }}>
                          We never share your information. Ever.
                        </p>
                      </div>

                      {/* First + Last name row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                        {[
                          { id: "firstName", label: "First Name", placeholder: "Jane", key: "firstName" },
                          { id: "lastName", label: "Last Name", placeholder: "Smith", key: "lastName" },
                        ].map((field) => (
                          <div key={field.id} className="flex flex-col gap-[8px]">
                            <label htmlFor={field.id} className="font-['DM_Sans'] font-semibold text-[#0f172a]" style={{ fontSize: "13px" }}>
                              {field.label} <span className="text-[#00A4A4]" aria-label="required">*</span>
                            </label>
                            <input
                              id={field.id}
                              type="text"
                              placeholder={field.placeholder}
                              required
                              value={form[field.key as keyof typeof form]}
                              onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                              className="w-full border border-[#e2e8f0] rounded-[10px] font-['DM_Sans'] text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#00A4A4] focus:ring-2 focus:ring-[#00A4A4]/20 transition-all"
                              style={{ fontSize: "15px", padding: "12px 14px" }}
                              aria-required="true"
                            />
                          </div>
                        ))}
                      </div>

                      {/* Phone + Email */}
                      {[
                        { id: "phone", label: "Phone Number", type: "tel", placeholder: "(555) 000-0000", key: "phone" },
                        { id: "email", label: "Email Address", type: "email", placeholder: "jane@email.com", key: "email" },
                      ].map((field) => (
                        <div key={field.id} className="flex flex-col gap-[8px]">
                          <label htmlFor={field.id} className="font-['DM_Sans'] font-semibold text-[#0f172a]" style={{ fontSize: "13px" }}>
                            {field.label} <span className="text-[#00A4A4]" aria-label="required">*</span>
                          </label>
                          <input
                            id={field.id}
                            type={field.type}
                            placeholder={field.placeholder}
                            required
                            value={form[field.key as keyof typeof form]}
                            onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                            className="w-full border border-[#e2e8f0] rounded-[10px] font-['DM_Sans'] text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#00A4A4] focus:ring-2 focus:ring-[#00A4A4]/20 transition-all"
                            style={{ fontSize: "15px", padding: "12px 14px" }}
                            aria-required="true"
                          />
                        </div>
                      ))}

                      {/* Tax Debt dropdown */}
                      <div className="flex flex-col gap-[8px]">
                        <label htmlFor="debt" className="font-['DM_Sans'] font-semibold text-[#0f172a]" style={{ fontSize: "13px" }}>
                          Approximate Tax Debt Amount
                        </label>
                        <select
                          id="debt"
                          value={form.debt}
                          onChange={(e) => setForm({ ...form, debt: e.target.value })}
                          className="w-full border border-[#e2e8f0] rounded-[10px] font-['DM_Sans'] text-[#0f172a] focus:outline-none focus:border-[#00A4A4] focus:ring-2 focus:ring-[#00A4A4]/20 transition-all bg-white"
                          style={{ fontSize: "15px", padding: "12px 14px" }}
                          aria-label="Approximate tax debt amount"
                        >
                          {DEBT_OPTIONS.map((o) => (
                            <option key={o.value} value={o.value}>{o.label}</option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div className="flex flex-col gap-[8px]">
                        <label htmlFor="message" className="font-['DM_Sans'] font-semibold text-[#0f172a]" style={{ fontSize: "13px" }}>
                          Brief Description <span className="font-normal text-[#94a3b8]">(Optional)</span>
                        </label>
                        <textarea
                          id="message"
                          placeholder="Tell us a little about your situation..."
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          rows={3}
                          className="w-full border border-[#e2e8f0] rounded-[10px] font-['DM_Sans'] text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#00A4A4] focus:ring-2 focus:ring-[#00A4A4]/20 transition-all resize-none"
                          style={{ fontSize: "15px", padding: "12px 14px" }}
                          aria-label="Brief description of your tax situation"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        className="w-full bg-[#00A4A4] hover:bg-[#007a7a] text-white font-['DM_Sans'] font-bold rounded-full transition-all duration-300 hover:scale-[1.01] shadow-[0_8px_24px_rgba(0,164,164,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A4A4] focus-visible:ring-offset-2 mt-[4px]"
                        style={{ fontSize: "16px", padding: "17px" }}
                        aria-label="Submit free consultation request"
                      >
                        Request My Free Consultation
                      </button>

                      {/* Privacy assurance */}
                      <div className="flex items-center justify-center gap-[8px]">
                        <Shield className="w-[13px] h-[13px] text-[#94a3b8]" aria-hidden="true" />
                        <p
                          className="font-['DM_Sans'] font-normal text-[#94a3b8] text-center"
                          style={{ fontSize: "12px" }}
                        >
                          We never share your information. Licensed professionals only. Results vary.
                        </p>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── 04. Client Success Stories ────────────────────────────────────── */}
        <Testimonials />

        {/* ── 05. Social Feed ───────────────────────────────────────────────── */}
        <section className="py-[64px] lg:py-[120px] bg-white" aria-label="SympleTax social feed">
          <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-[24px] mb-[40px]"
            >
              <div>
                <div className="flex items-center gap-[10px] mb-[16px]">
                  <div className="bg-[#00A4A4] h-px w-[35px]" />
                  <span
                    className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
                    style={{ fontSize: "14px", letterSpacing: "0.05em" }}
                  >
                    From Our Feed
                  </span>
                </div>
                <h2
                  className="font-['DM_Sans'] font-bold text-[#0f172a] leading-[1.08]"
                  style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-1.5px" }}
                >
                  Tax Help, Plain And Simple
                </h2>
              </div>
              <a
                href="https://www.instagram.com/sympletax"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-[8px] font-['DM_Sans'] font-medium text-[#00A4A4] hover:text-[#007a7a] transition-colors shrink-0 focus:outline-none focus-visible:underline"
                style={{ fontSize: "15px" }}
                aria-label="Follow SympleTax on Instagram (opens in new tab)"
              >
                <Instagram style={{ width: "18px", height: "18px" }} aria-hidden="true" />
                Follow @sympletax
              </a>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-[12px] lg:gap-[16px]">
              {FEED_IMAGES.slice(0, 4).map((src, idx) => (
                <motion.a
                  key={idx}
                  href="https://www.instagram.com/sympletax"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group relative rounded-[16px] overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A4A4]"
                  style={{ aspectRatio: "1 / 1" }}
                  aria-label={`SympleTax Instagram post ${idx + 1} (opens in new tab)`}
                >
                  <ImageWithFallback
                    src={src}
                    alt={`SympleTax Instagram post ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(0,164,164,0.55)" }}
                    aria-hidden="true"
                  >
                    <Instagram style={{ width: "28px", height: "28px", color: "white" }} />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
