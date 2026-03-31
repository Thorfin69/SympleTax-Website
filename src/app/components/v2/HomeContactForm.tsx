import { motion } from "motion/react";
import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { PaintStreak } from "../ui/PaintStreak";

const CONTACT_ITEMS = [
  { icon: Phone, label: "+1 (949) 287-3015", sub: "Call or text anytime", href: "tel:+19492873015" },
  { icon: Mail, label: "info@sympletax.com", sub: "General inquiries", href: "mailto:info@sympletax.com" },
  { icon: Mail, label: "support@sympletax.com", sub: "Client support", href: "mailto:support@sympletax.com" },
  { icon: MapPin, label: "Irvine, CA", sub: "Serving clients nationwide", href: null },
];

const WEBHOOK_URL = "https://sympletax-close.onrender.com/webhook/intake";

function getUTMParams(): Record<string, string> {
  const params = new URLSearchParams(window.location.search);
  const result: Record<string, string> = {};
  ["utm_source", "utm_medium", "utm_campaign", "fbclid", "gclid"].forEach((key) => {
    const val = params.get(key);
    if (val) result[key] = val;
  });
  return result;
}

export function HomeContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    taxProblem: "Back Taxes",
    details: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    const payload: Record<string, string> = {
      first_name: form.firstName,
      last_name: form.lastName,
      phone: form.phone,
      email: form.email,
      tax_problem: form.taxProblem,
      page_url: window.location.href,
      ...getUTMParams(),
    };
    if (form.details) payload.message = form.details;

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section style={{ background: "#f5f1e8" }} className="py-[120px]">
      <div className="max-w-[1330px] mx-auto px-[70px]">
        <div className="flex gap-[80px] items-start">

          {/* Left: Contact info + trust signals */}
          <div className="w-[44%] shrink-0 flex flex-col gap-[36px]">

            {/* Pill badge */}
            <div>
              <span
                className="font-['DM_Sans'] font-bold text-[#0f172a] border-[1.5px] border-[#0f172a] rounded-[50px] px-[16px] py-[7px] uppercase inline-block"
                style={{ fontSize: "12px", letterSpacing: "0.07em" }}
              >
                Free Consultation
              </span>
            </div>

            {/* H2 with PaintStreak */}
            <h2
              className="font-['DM_Sans'] font-black text-[#0f172a] leading-[1.06]"
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                letterSpacing: "-2px",
                textWrap: "balance",
              }}
            >
              Start Your{" "}
              <PaintStreak color="purple">Resolution</PaintStreak>
              {" "}Journey Today
            </h2>

            <p
              className="font-['DM_Sans'] font-normal text-[#4a5568] leading-[1.65]"
              style={{ fontSize: "16px", letterSpacing: "-0.3px", maxWidth: "400px" }}
            >
              Tell us about your tax situation. Our licensed experts will review your case and contact you with a free, no-obligation strategy.
            </p>

            {/* Contact details */}
            <div className="flex flex-col" style={{ gap: "4px" }}>
              {CONTACT_ITEMS.map(({ icon: Icon, label, sub, href }) => {
                const inner = (
                  <div className="flex items-center gap-[16px] group cursor-pointer">
                    <div
                      className="rounded-[14px] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "rgba(0,164,164,0.10)",
                        border: "1.5px solid rgba(0,164,164,0.22)",
                      }}
                    >
                      <Icon
                        style={{ width: "20px", height: "20px", color: "#00A4A4" }}
                      />
                    </div>
                    <div className="flex flex-col">
                      <span
                        className="font-['DM_Sans'] font-semibold text-[#0f172a] transition-colors duration-300 group-hover:text-[#00A4A4]"
                        style={{ fontSize: "15px", letterSpacing: "-0.3px", lineHeight: "1.2" }}
                      >
                        {label}
                      </span>
                      <span
                        className="font-['DM_Sans'] font-normal text-[#94a3b8]"
                        style={{ fontSize: "13px" }}
                      >
                        {sub}
                      </span>
                    </div>
                  </div>
                );
                return href ? (
                  <a
                    key={label}
                    href={href}
                    className="block rounded-[12px] transition-colors duration-200 hover:bg-[rgba(0,0,0,0.03)]"
                    style={{ padding: "10px 14px" }}
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={label} className="block rounded-[12px]" style={{ padding: "10px 14px" }}>
                    {inner}
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right: Form */}
          <div className="flex-1">
            <div
              className="bg-white"
              style={{
                borderRadius: "24px",
                padding: "48px",
                boxShadow: "0 16px 64px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.04)",
              }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center text-center"
                  style={{ paddingTop: "60px", paddingBottom: "60px", gap: "24px" }}
                >
                  <div
                    className="bg-[#00A4A4] rounded-full flex items-center justify-center"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12.5L9.5 17L19 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="font-['DM_Sans'] font-bold text-[#0f172a]"
                      style={{ fontSize: "28px", letterSpacing: "-1px", lineHeight: "1.2", marginBottom: "10px" }}
                    >
                      Request Received
                    </h3>
                    <p
                      className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.6] mx-auto"
                      style={{ fontSize: "16px", maxWidth: "300px" }}
                    >
                      A licensed tax expert will review your case and contact you within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="font-['DM_Sans'] font-normal text-[#00A4A4] underline"
                    style={{ fontSize: "14px" }}
                  >
                    Submit another request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: "22px" }}>
                  <div style={{ marginBottom: "6px" }}>
                    <h3
                      className="font-['DM_Sans'] font-bold text-[#0f172a]"
                      style={{ fontSize: "24px", letterSpacing: "-0.8px", lineHeight: "1.25" }}
                    >
                      Tell us your story
                    </h3>
                    <p
                      className="font-['DM_Sans'] font-normal text-[#64748b]"
                      style={{ fontSize: "14px", marginTop: "6px" }}
                    >
                      We'll review your case and reach out within 24 hours.
                    </p>
                  </div>

                  <div className="grid grid-cols-2" style={{ gap: "16px" }}>
                    <FormField
                      label="First Name"
                      placeholder="Your first name"
                      required
                      value={form.firstName}
                      onChange={(v) => setForm({ ...form, firstName: v })}
                    />
                    <FormField
                      label="Last Name"
                      placeholder="Your last name"
                      value={form.lastName}
                      onChange={(v) => setForm({ ...form, lastName: v })}
                    />
                  </div>

                  <div className="grid grid-cols-2" style={{ gap: "16px" }}>
                    <FormField
                      label="Phone Number"
                      placeholder="+1 (555) 000-0000"
                      required
                      value={form.phone}
                      onChange={(v) => setForm({ ...form, phone: v })}
                    />
                    <FormField
                      label="Email Address"
                      placeholder="you@email.com"
                      required
                      type="email"
                      value={form.email}
                      onChange={(v) => setForm({ ...form, email: v })}
                    />
                  </div>

                  <div className="flex flex-col" style={{ gap: "8px" }}>
                    <label
                      className="font-['DM_Sans'] font-medium text-[#0f172a]"
                      style={{ fontSize: "14px", letterSpacing: "-0.28px" }}
                    >
                      Select Tax Problem
                    </label>
                    <select
                      value={form.taxProblem}
                      onChange={(e) => setForm({ ...form, taxProblem: e.target.value })}
                      className="font-['DM_Sans'] text-[#0f172a] focus:outline-none transition-colors appearance-none"
                      style={{
                        fontSize: "16px",
                        background: "#f9f7f3",
                        border: "1.5px solid #d8d3c8",
                        borderRadius: "12px",
                        padding: "14px 16px",
                        letterSpacing: "-0.3px",
                      }}
                    >
                      <option>Back Taxes</option>
                      <option>Unfiled Returns</option>
                      <option>IRS Notices</option>
                      <option>Wage Garnishment</option>
                      <option>Bank Levy</option>
                      <option>Other / Not Sure</option>
                    </select>
                  </div>

                  <div className="flex flex-col" style={{ gap: "8px" }}>
                    <label
                      className="font-['DM_Sans'] font-medium text-[#0f172a]"
                      style={{ fontSize: "14px", letterSpacing: "-0.28px" }}
                    >
                      Additional Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please describe your situation..."
                      value={form.details}
                      onChange={(e) => setForm({ ...form, details: e.target.value })}
                      className="font-['DM_Sans'] text-[#0f172a] focus:outline-none transition-colors resize-none"
                      style={{
                        fontSize: "16px",
                        background: "#f9f7f3",
                        border: "1.5px solid #d8d3c8",
                        borderRadius: "12px",
                        padding: "14px 16px",
                        letterSpacing: "-0.3px",
                        lineHeight: "1.6",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full text-white rounded-full flex items-center justify-center gap-[10px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                    style={{
                      background: "#00A4A4",
                      paddingTop: "17px",
                      paddingBottom: "17px",
                      boxShadow: "0 8px 28px rgba(0,164,164,0.35)",
                    }}
                  >
                    <span
                      className="font-['DM_Sans'] font-bold text-white"
                      style={{ fontSize: "16px", letterSpacing: "-0.2px" }}
                    >
                      {submitting ? "Sending…" : "Analyze My Case"}
                    </span>
                    {!submitting && (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 13L13 3M13 3H5M13 3V11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>

                  {error && (
                    <p
                      className="text-center font-['DM_Sans'] font-normal text-red-500"
                      style={{ fontSize: "13px" }}
                    >
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <p
                    className="text-center font-['DM_Sans'] font-normal text-[#94a3b8]"
                    style={{ fontSize: "13px", letterSpacing: "-0.2px" }}
                  >
                    Your data is encrypted and secure. By submitting, you agree to our Privacy Policy.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  placeholder,
  required = false,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  required?: boolean;
  type?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col" style={{ gap: "8px" }}>
      <label
        className="font-['DM_Sans'] font-medium text-[#0f172a]"
        style={{ fontSize: "14px", letterSpacing: "-0.28px" }}
      >
        {label}{required && " *"}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="font-['DM_Sans'] text-[#0f172a] focus:outline-none transition-colors"
        style={{
          fontSize: "16px",
          background: "#f9f7f3",
          border: "1.5px solid #d8d3c8",
          borderRadius: "12px",
          padding: "14px 16px",
          letterSpacing: "-0.3px",
          lineHeight: "1.3",
        }}
      />
    </div>
  );
}
