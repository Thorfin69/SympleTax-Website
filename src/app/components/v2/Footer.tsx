import { Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router";

const NAV_COL_1 = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Process", href: "/process" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const NAV_COL_2 = [
  { name: "Offer in Compromise", href: "/services" },
  { name: "Installment Agreement", href: "/services" },
  { name: "Penalty Abatement", href: "/services" },
  { name: "Wage Garnishment", href: "/services" },
  { name: "IRS Notices", href: "/services" },
];

const SOCIALS = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-[#020617] text-white overflow-hidden">

      {/* Main grid */}
      <div className="max-w-[1330px] mx-auto px-[70px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_auto_1px_auto_1px_1fr] pt-[72px] pb-[64px]">

          {/* Col 1: Logo + tagline + socials */}
          <div className="flex flex-col justify-between pr-12 pb-10 lg:pb-0">
            <div>
              <Link to="/" className="inline-block mb-8">
                <img
                  src="https://pub-af595d5658084c1db74f624e385553fe.r2.dev/IMG_5368.png"
                  alt="SympleTax"
                  className="h-10 w-auto object-contain brightness-0 invert"
                />
              </Link>
              <p className="font-['Inter'] text-gray-400 text-[14px] leading-[1.7] max-w-[240px]" style={{ letterSpacing: "-0.2px" }}>
                SympleTax is a licensed tax resolution firm dedicated to stopping IRS collections and restoring your financial freedom.
              </p>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-10">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:border-white/30 hover:text-[#00A4A4] transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block bg-white/[0.07]" />

          {/* Col 2: Nav col 1 */}
          <div className="px-12 py-2">
            <ul className="flex flex-col gap-[18px]">
              {NAV_COL_1.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-['Inter'] font-medium text-[13px] uppercase tracking-[0.08em] text-gray-400 hover:text-[#00A4A4] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="hidden lg:block bg-white/[0.07]" />

          {/* Col 3: Nav col 2 */}
          <div className="px-12 py-2">
            <ul className="flex flex-col gap-[18px]">
              {NAV_COL_2.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-['Inter'] font-medium text-[13px] uppercase tracking-[0.08em] text-gray-400 hover:text-[#00A4A4] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="hidden lg:block bg-white/[0.07]" />

          {/* Col 4: Contact */}
          <div className="flex flex-col justify-between pl-12 pt-2 pb-2">
            <div>
              <p
                className="font-['Inter'] font-light text-white leading-[1.5] mb-8"
                style={{ fontSize: "clamp(22px, 2vw, 30px)", letterSpacing: "-0.5px" }}
              >
                Irvine, California<br />
                United States
              </p>
              <a
                href="tel:+19492873015"
                className="block font-['Inter'] font-medium text-gray-400 hover:text-[#00A4A4] transition-colors mb-3 border-b border-white/10 pb-1 w-fit"
                style={{ fontSize: "16px", letterSpacing: "-0.3px" }}
              >
                +1 (949) 287-3015
              </a>
              <a
                href="mailto:info@sympletax.com"
                className="block font-['Inter'] font-medium text-gray-400 hover:text-[#00A4A4] transition-colors border-b border-white/10 pb-1 w-fit"
                style={{ fontSize: "16px", letterSpacing: "-0.3px" }}
              >
                info@sympletax.com
              </a>
            </div>
          </div>
        </div>

        {/* Watermark */}
        <div className="border-t border-white/[0.06] -mx-[70px] overflow-hidden">
          <p
            className="font-['Inter'] font-black text-white/[0.04] leading-none select-none whitespace-nowrap text-center"
            style={{ fontSize: "clamp(80px, 12vw, 180px)", letterSpacing: "-4px", padding: "20px 0 10px" }}
          >
            SYMPLETAX
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-['Inter'] text-gray-400 text-[12px]" style={{ letterSpacing: "-0.1px" }}>
            © {new Date().getFullYear()} SympleTax. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Disclaimer"].map((label) => (
              <a key={label} href="#" className="font-['Inter'] text-gray-400 text-[12px] hover:text-[#00A4A4] transition-colors" style={{ letterSpacing: "-0.1px" }}>
                {label}
              </a>
            ))}
          </div>
          <p className="font-['Inter'] text-white/20 text-[11px] italic">
            SympleTax does not provide legal advice. Results may vary.
          </p>
        </div>
      </div>

    </footer>
  );
}
