import { Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import { FooterSympleTaxLogo } from "./BrandWordmarks";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
    </svg>
  );
}
import { Link } from "react-router";

const COMPANY_LINKS = [
  { name: "About Us", href: "/about" },
  { name: "How It Works", href: "/process" },
  { name: "Our Services", href: "/services" },
  { name: "Contact Us", href: "/contact" },
  { name: "Free Consultation", href: "/contact" },
  { name: "Sitemap", href: "/sitemap" },
];

const TAX_SERVICES = [
  { name: "Tax Negotiation", href: "/solutions" },
  { name: "Tax Relief", href: "/solutions" },
  { name: "Tax Settlement", href: "/solutions/offer-in-compromise" },
  { name: "Tax Resolution", href: "/solutions" },
  { name: "Offer in Compromise", href: "/solutions/offer-in-compromise" },
  { name: "Penalty Abatement", href: "/solutions/penalty-abatement" },
  { name: "Currently Not Collectible", href: "/solutions/currently-not-collectible" },
  { name: "Innocent Spouse Relief", href: "/solutions/innocent-spouse-relief" },
  { name: "Tax Knowledge Center", href: "/resources" },
];

const RESOURCES = [
  { name: "IRS Notice Center", href: "/resources/irs-cp90-notice" },
  { name: "Frequently Asked Questions", href: "/resources" },
  { name: "Common IRS Notices", href: "/resources/irs-cp90-notice" },
  { name: "IRS Fresh Start Program", href: "/solutions/fresh-start-program" },
  { name: "Wage Garnishment Guide", href: "/resources/wage-garnishment" },
  { name: "Offer in Compromise Guide", href: "/resources/offer-in-compromise" },
];

const SOCIALS = [
  { icon: Instagram, href: "https://www.instagram.com/sympletax", label: "SympleTax on Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61583684011496", label: "SympleTax on Facebook" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/sympletax/", label: "SympleTax on LinkedIn" },
  { icon: TikTokIcon, href: "https://tiktok.com/sympletax", label: "SympleTax on TikTok" },
  { icon: Youtube, href: "https://www.youtube.com/@sympletax", label: "SympleTax on YouTube" },
];

function FooterCol({ heading, links }: { heading: string; links: { name: string; href: string }[] }) {
  return (
    <div className="flex flex-col gap-[20px]">
      <p
        className="font-['DM_Sans'] font-bold text-white uppercase"
        style={{ fontSize: "12px", letterSpacing: "0.1em" }}
      >
        {heading}
      </p>
      <ul className="flex flex-col gap-[14px]" role="list">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.href}
              className="group relative inline-block font-['DM_Sans'] font-normal text-white/55 hover:text-[#00A4A4] transition-colors duration-200 focus:outline-none focus-visible:underline"
              style={{ fontSize: "16px", letterSpacing: "-0.1px" }}
            >
              {link.name}
              <span className="absolute -bottom-[2px] left-0 w-0 h-[1px] bg-[#00A4A4] transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white rounded-t-[48px] lg:rounded-t-[64px] overflow-hidden" aria-label="Site footer">

      {/* Main grid */}
      <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px] pt-[60px] lg:pt-[80px] pb-[0px]">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_1fr_1fr] gap-[48px] lg:gap-[60px] pb-[48px] lg:pb-[64px]">

          {/* Col 1: Brand + Contact + Socials */}
          <div className="flex flex-col gap-[32px]">
            <div>
              <Link to="/" className="inline-block mb-[24px]" aria-label="SympleTax home">
                <FooterSympleTaxLogo className="h-[36px] w-auto object-contain brightness-0 invert" />
              </Link>
              <p
                className="font-['DM_Sans'] font-normal text-white/55 leading-[1.7]"
                style={{ fontSize: "16px", letterSpacing: "-0.1px", maxWidth: "240px" }}
              >
                SympleTax has helped hundreds of Americans resolve their IRS tax debt. Now it's your turn.
              </p>
            </div>

            <div className="flex flex-col gap-[10px]">
              <p
                className="font-['DM_Sans'] font-bold text-white uppercase"
                style={{ fontSize: "12px", letterSpacing: "0.1em" }}
              >
                Contact Us
              </p>
              <p
                className="font-['DM_Sans'] font-normal text-white/55"
                style={{ fontSize: "16px" }}
              >
                111 West Ocean Blvd, Long Beach, CA 90802
              </p>
              <a
                href="tel:+19492873015"
                className="group relative inline-block font-['DM_Sans'] font-semibold text-[#00A4A4] hover:text-[#00c0c0] transition-colors focus:outline-none focus-visible:underline"
                style={{ fontSize: "16px" }}
                aria-label="Call SympleTax at (949) 287-3015"
              >
                (949) 287-3015
                <span className="absolute -bottom-[2px] left-0 w-0 h-[1px] bg-[#00c0c0] transition-all duration-300 group-hover:w-full" />
              </a>
              <a
                href="mailto:info@sympletax.com"
                className="group relative inline-block font-['DM_Sans'] font-normal text-white/55 hover:text-[#00A4A4] transition-colors focus:outline-none focus-visible:underline"
                style={{ fontSize: "16px" }}
                aria-label="Email SympleTax"
              >
                info@sympletax.com
                <span className="absolute -bottom-[2px] left-0 w-0 h-[1px] bg-[#00A4A4] transition-all duration-300 group-hover:w-full" />
              </a>
            </div>

            {/* Social icons */}
            <div>
              <p
                className="font-['DM_Sans'] font-bold text-white uppercase mb-[14px]"
                style={{ fontSize: "12px", letterSpacing: "0.1em" }}
              >
                Connect With Us
              </p>
              <div className="flex items-center gap-[10px]">
                {SOCIALS.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[46px] h-[46px] rounded-[8px] border border-white/10 flex items-center justify-center text-white/40 hover:border-[#00A4A4]/50 hover:text-[#00A4A4] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A4A4]"
                  >
                    <Icon className="w-[15px] h-[15px]" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Company */}
          <FooterCol heading="Company" links={COMPANY_LINKS} />

          {/* Col 3: Tax Services */}
          <FooterCol heading="Tax Services" links={TAX_SERVICES} />

          {/* Col 4: Resources */}
          <FooterCol heading="Tax Resources" links={RESOURCES} />
        </div>

        {/* Disclaimer section */}
        <div className="border-t border-white/[0.07] py-[48px] flex flex-col gap-[20px]">
          <p
            className="font-['DM_Sans'] font-bold text-white/50 uppercase"
            style={{ fontSize: "13px", letterSpacing: "0.1em" }}
          >
            Website Disclaimer
          </p>
          <p
            className="font-['DM_Sans'] font-normal text-white/35 leading-[1.7]"
            style={{ fontSize: "15px" }}
          >
            Estimates and statements about program performance are based on historical results and specific client situations. Individual results will vary based on circumstances which include, but are not limited to, your financial situation and the accuracy and timeliness of the information you provide to SympleTax. We do not guarantee that your taxes owed will be reduced by a specific amount or percentage, paid off within a specific period, or that you will qualify for any IRS or state programs. Penalties and interest will continue to accrue until your tax liability is fully paid to the IRS and state.
          </p>
          <p
            className="font-['DM_Sans'] font-normal text-white/35 leading-[1.7]"
            style={{ fontSize: "15px" }}
          >
            SympleTax is a private tax resolution company independent from the IRS. We are not affiliated with or endorsed by the IRS or any government agency. We are licensed tax professionals. We do not assume tax liability, make payments to taxing authorities or creditors, or provide tax, bankruptcy, accounting, or legal advice. Results vary. Nothing here constitutes legal or financial advice. For official IRS information, visit{" "}
            <a
              href="https://www.irs.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-[#00A4A4] underline transition-colors"
              aria-label="Visit IRS.gov (opens in new tab)"
            >
              IRS.gov
            </a>.
          </p>
          <p
            className="font-['DM_Sans'] font-bold text-white/40 mt-[8px]"
            style={{ fontSize: "13px", letterSpacing: "0.05em" }}
          >
            Testimonials &amp; Reviews
          </p>
          <p
            className="font-['DM_Sans'] font-normal text-white/35 leading-[1.7] lg:leading-[1.4]"
            style={{ fontSize: "14px" }}
          >
            Testimonials were provided by actual SympleTax clients and are the clients' sole opinions and experiences. Clients were not compensated. These are individual results which will vary based on circumstances. We do not claim that they are typical results that consumers will generally achieve. Nothing included here should be taken as a guarantee, warranty, prediction, or representation about the results of your situation.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.07] py-[24px] flex flex-col md:flex-row items-center justify-between gap-[16px]">
          <p
            className="font-['DM_Sans'] text-white/35"
            style={{ fontSize: "14px" }}
          >
            © {new Date().getFullYear()} SympleTax. All Rights Reserved. Powered by{" "}
            <a
              href="https://blitzstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-[#00A4A4] transition-colors"
              aria-label="Blitz Studio website"
            >
              Blitz Studio
            </a>
          </p>
          <nav aria-label="Legal links">
            <div className="flex flex-wrap items-center gap-x-[24px] gap-y-[12px] text-center lg:text-left">
              {[
                { label: "Privacy Policy", to: "/legal/privacy-policy" },
                { label: "Terms of Service", to: "/legal/terms-of-service" },
                { label: "Disclaimer", to: "/legal/disclaimer" },
                { label: "California Privacy Rights", to: "/legal/california-privacy" },
              ].map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  className="group relative inline-block font-['DM_Sans'] text-white/35 hover:text-[#00A4A4] transition-colors focus:outline-none focus-visible:underline"
                  style={{ fontSize: "14px" }}
                >
                  {label}
                  <span className="absolute -bottom-[2px] left-0 w-0 h-[1px] bg-[#00A4A4] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>


    </footer>
  );
}
