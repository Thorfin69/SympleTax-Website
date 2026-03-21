import { motion } from "motion/react";
import { Send } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Cubic Pattern Background */}
      <div className="absolute top-0 left-0 w-full h-[500px] pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #2C3E50 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left Side - Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-10"
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-px bg-[#2C3E50]" />
              <span className="font-['Inter'] font-medium text-[14px] uppercase tracking-[-0.28px] text-[#2C3E50]">
                CONTACT US
              </span>
            </div>
            <h1
              className="font-['Inter'] font-semibold text-[#2C3E50] leading-[1.1] tracking-[-2.88px]"
              style={{ fontSize: 'clamp(40px, 5vw, 72px)', textWrap: 'balance' }}
            >
              Let’s сonnect <br />
              and сollaborate
            </h1>
            <p className="font-['Inter'] text-[#636363] text-[18px] leading-[1.3] tracking-[-1.08px] max-w-lg">
              Have questions or need expert guidance? Reach out to us, and our team will be happy to assist you. Whether you're looking for advice, support, or collaboration, we’re just a message away
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <ContactInfoItem 
              icon={<LocationIcon />} 
              text="123 Finance Street, New York, NY 10001" 
            />
            <ContactInfoItem 
              icon={<MailIcon />} 
              text="contact@example.com" 
            />
            <ContactInfoItem 
              icon={<PhoneIcon />} 
              text="+1 (555) 123-4567" 
            />
          </div>
        </motion.div>

        {/* Right Side - Form Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-8 md:p-14 rounded-[12px] shadow-[0_10px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-50 w-full max-w-[650px]"
        >
          <div className="flex flex-col gap-10">
            <h3 className="font-['Inter'] font-medium text-[#2C3E50] text-[40px] tracking-[-1.2px] text-center" style={{ textWrap: 'balance' }}>
              Send us a message
            </h3>

            <form className="flex flex-col gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormInput label="First Name*" placeholder="Jane" />
                <FormInput label="Last Name" placeholder="Smith" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormInput label="Phone*" placeholder="+1 (555) 123-4567" />
                <FormInput label="Email" placeholder="jane@framer.com" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['Inter'] font-medium text-[#636363] text-[14px] uppercase tracking-[-0.28px]">Message*</label>
                <textarea 
                  rows={4}
                  placeholder="Send your message" 
                  className="bg-[#F7F7F7] border-none rounded-[8px] px-5 py-4 font-['Inter'] text-[#2C3E50] text-[16px] focus:ring-1 focus:ring-[#00838F] outline-none transition-all resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="bg-[#2C3E50] text-white py-4 rounded-[8px] font-['Inter'] font-bold text-[18px] mt-2 flex items-center justify-center gap-3 transition-colors hover:bg-[#1a2632]"
              >
                Submit
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactInfoItem({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className="w-10 h-10 bg-[#00838F] rounded-full flex items-center justify-center text-white shrink-0">
        {icon}
      </div>
      <span className="font-['Inter'] font-medium text-[#636363] text-[18px] tracking-[-0.36px]">
        {text}
      </span>
    </div>
  );
}

function FormInput({ label, placeholder }: { label: string, placeholder: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-['Inter'] font-medium text-[#636363] text-[14px] uppercase tracking-[-0.28px]">{label}</label>
      <input 
        type="text" 
        placeholder={placeholder} 
        className="bg-[#F7F7F7] border-none rounded-[8px] px-5 py-4 font-['Inter'] text-[#2C3E50] text-[16px] focus:ring-1 focus:ring-[#00838F] outline-none transition-all"
      />
    </div>
  );
}

function LocationIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
      <path d="M12 21C16 17 20 13.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 13.4183 8 17 12 21Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
      <path d="M22 6L12 13L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 16.92V19.92C22 20.4723 21.5523 20.92 21 20.92C20.4477 20.92 20 20.4723 20 19.92V16.92" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
      <path d="M22 16.92V19.92C22 20.4723 21.5523 20.92 21 20.92C11.6114 20.92 4 13.3086 4 3.92C4 3.36772 4.44772 2.92 5 2.92H8C8.55228 2.92 9 3.36772 9 3.92V8C9 8.55228 8.55228 9 8 9L6 10C7.5 13 11 16.5 14 18L15 16C15 15.4477 15.4477 15 16 15H20.08C20.6323 15 21.08 15.4477 21.08 16V16.92" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
