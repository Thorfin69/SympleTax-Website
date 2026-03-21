import { motion } from "motion/react";
import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const CONTACT_ITEMS = [
  { icon: Phone, label: "+1 (949) 287-3015", sub: "Call or text anytime", href: "tel:+19492873015", color: "#0ea5e9" },
  { icon: Mail, label: "info@sympletax.com", sub: "General inquiries", href: "mailto:info@sympletax.com", color: "#00A4A4" },
  { icon: Mail, label: "support@sympletax.com", sub: "Client support", href: "mailto:support@sympletax.com", color: "#00A4A4" },
  { icon: MapPin, label: "Irvine, CA", sub: "Serving clients nationwide", href: null, color: "#f59e0b" },
];

export function HomeContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-white py-[120px]">
      <div className="max-w-[1330px] mx-auto px-[70px]">
        <div className="flex gap-[60px] items-stretch">

          {/* Left: full-height column */}
          <div className="w-[45%] shrink-0 flex flex-col">
            <div className="flex flex-col gap-[22px]">
              <div className="flex items-center gap-[10px]">
                <div className="bg-[#0f172a] h-px w-[35px]" />
                <span
                  className="font-['Inter'] font-medium uppercase text-[#0f172a]"
                  style={{ fontSize: "14px", letterSpacing: "0.05em" }}
                >
                  Get a Free Consultation
                </span>
              </div>
              <h2
                className="font-['Inter'] font-bold text-[#0f172a] leading-[1.08]"
                style={{ fontSize: "clamp(28px, 3vw, 42px)", letterSpacing: "-1.5px" }}
              >
                Start Your Resolution Journey Today.
              </h2>
              <p
                className="font-['Inter'] font-normal text-[#475569] leading-[1.65] mt-2"
                style={{ fontSize: "16px", letterSpacing: "-0.3px" }}
              >
                Tell us about your tax situation. Our licensed experts will review your case and contact you with a free, no-obligation strategy.
              </p>
            </div>

            {/* Contact details */}
            <div className="border-t border-slate-100 pt-[28px] mt-[28px] flex flex-col gap-[8px]">
              {CONTACT_ITEMS.map(({ icon: Icon, label, sub, href, color }) => {
                const inner = (
                  <div className="flex items-center gap-[16px] group cursor-pointer">
                    <div
                      className="w-[62px] h-[62px] rounded-[16px] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                      style={{ backgroundColor: `${color}15`, border: `1.5px solid ${color}30` }}
                    >
                      <Icon className="w-[24px] h-[24px] transition-colors duration-300" style={{ color }} />
                    </div>
                    <div className="flex flex-col">
                      <span
                        className="font-['Inter'] font-semibold leading-[1.2] transition-colors duration-300 group-hover:text-[#00A4A4]"
                        style={{ fontSize: "15px", letterSpacing: "-0.3px", color: "#0f172a" }}
                      >
                        {label}
                      </span>
                      <span
                        className="font-['Inter'] font-normal text-[#94a3b8]"
                        style={{ fontSize: "13px" }}
                      >
                        {sub}
                      </span>
                    </div>
                    {href && (
                      <svg className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 13L13 3M13 3H5M13 3V11" stroke="#00A4A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                );
                return href ? (
                  <a key={label} href={href} className="block rounded-[12px] px-[16px] py-[14px] transition-colors duration-200 hover:bg-[#f9fafb]">
                    {inner}
                  </a>
                ) : (
                  <div key={label} className="block rounded-[12px] px-[16px] py-[14px]">
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Form */}
          <div className="flex-1">
            <div className="bg-[#f9fafb] rounded-[8px] p-[40px]">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center text-center py-[60px] gap-[24px]"
                >
                  <div className="w-[60px] h-[60px] bg-[#00A4A4] rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12.5L9.5 17L19 8" stroke="#f9fafb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="font-['Inter'] font-semibold text-[#0f172a] leading-[33.6px] tracking-[-1.12px] mb-[8px]"
                      style={{ fontSize: "28px" }}
                    >
                      Request Received
                    </h3>
                    <p
                      className="font-['Inter'] font-normal text-[#475569] leading-[20.8px] tracking-[-0.96px] max-w-[300px] mx-auto"
                      style={{ fontSize: "16px" }}
                    >
                      A licensed tax expert will review your case and contact you within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="font-['Inter'] font-normal text-[#00A4A4] underline"
                    style={{ fontSize: "14px" }}
                  >
                    Submit another request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
                  <h3
                    className="font-['Inter'] font-semibold text-[#0f172a] leading-[28.8px] tracking-[-0.96px] mb-[8px]"
                    style={{ fontSize: "24px" }}
                  >
                    Tell us your story
                  </h3>

                  <div className="grid grid-cols-2 gap-[16px]">
                    <FormField label="First Name" placeholder="Your first name" required />
                    <FormField label="Last Name" placeholder="Your last name" />
                  </div>

                  <div className="grid grid-cols-2 gap-[16px]">
                    <FormField label="Phone Number" placeholder="+1 (555) 000-0000" required />
                    <FormField label="Email Address" placeholder="you@email.com" required type="email" />
                  </div>

                  <div className="flex flex-col gap-[8px]">
                    <label
                      className="font-['Inter'] font-medium text-[#0f172a]"
                      style={{ fontSize: "14px", letterSpacing: "-0.28px" }}
                    >
                      Select Tax Problem
                    </label>
                    <select
                      className="bg-white border border-slate-200 rounded-[4px] px-[16px] py-[14px] font-['Inter'] text-[#0f172a] leading-[20.8px] tracking-[-0.96px] focus:outline-none focus:border-[#00A4A4] transition-colors appearance-none"
                      style={{ fontSize: "16px" }}
                    >
                      <option>Back Taxes</option>
                      <option>Unfiled Returns</option>
                      <option>IRS Notices</option>
                      <option>Wage Garnishment</option>
                      <option>Bank Levy</option>
                      <option>Other / Not Sure</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-[8px]">
                    <label
                      className="font-['Inter'] font-medium text-[#0f172a]"
                      style={{ fontSize: "14px", letterSpacing: "-0.28px" }}
                    >
                      Additional Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please describe your situation..."
                      className="bg-white border border-slate-200 rounded-[4px] px-[16px] py-[14px] font-['Inter'] text-[#0f172a] leading-[20.8px] tracking-[-0.96px] focus:outline-none focus:border-[#00A4A4] transition-colors resize-none"
                      style={{ fontSize: "16px" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="text-white rounded-full flex items-center justify-center gap-[10px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                      paddingTop: "17px",
                      paddingBottom: "17px",
                      background: "linear-gradient(135deg, #00A4A4 0%, #007a7a 100%)",
                      boxShadow: "0 8px 24px rgba(0,164,164,0.35)",
                    }}
                  >
                    <span
                      className="font-['Inter'] font-semibold text-white leading-[17.6px] tracking-[-0.32px]"
                      style={{ fontSize: "16px" }}
                    >
                      Analyze My Case
                    </span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 13L13 3M13 3H5M13 3V11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  <p
                    className="text-center font-['Inter'] font-normal text-[#94a3b8]"
                    style={{ fontSize: "14px", letterSpacing: "-0.28px" }}
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
}: {
  label: string;
  placeholder: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-[8px]">
      <label
        className="font-['Inter'] font-medium text-[#0f172a]"
        style={{ fontSize: "14px", letterSpacing: "-0.28px" }}
      >
        {label}{required && " *"}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="bg-white border border-slate-200 rounded-[4px] px-[16px] py-[14px] font-['Inter'] text-[#0f172a] leading-[20.8px] tracking-[-0.96px] focus:outline-none focus:border-[#00A4A4] transition-colors"
        style={{ fontSize: "16px" }}
      />
    </div>
  );
}
