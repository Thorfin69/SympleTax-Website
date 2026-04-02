import { useEffect } from "react";
import { usePageSEO } from "./hooks/usePageSEO";
import { useParams, useNavigate, Link } from "react-router";
import { Navbar } from "./components/v2/Navbar";
import { Footer } from "./components/v2/Footer";

type TabKey = "privacy-policy" | "terms-of-service" | "disclaimer" | "california-privacy";

const TABS: { key: TabKey; label: string }[] = [
  { key: "privacy-policy", label: "Privacy Policy" },
  { key: "terms-of-service", label: "Terms of Service" },
  { key: "disclaimer", label: "Disclaimer" },
  { key: "california-privacy", label: "California Privacy Rights" },
];

const EFFECTIVE_DATE = "March 27, 2026";

// ─── Shared sub-components ────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[12px]">
      <h3
        className="font-['DM_Sans'] font-semibold text-[#0f172a]"
        style={{ fontSize: "19px", letterSpacing: "-0.4px" }}
      >
        {title}
      </h3>
      <div
        className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.65]"
        style={{ fontSize: "16px", letterSpacing: "-0.3px" }}
      >
        {children}
      </div>
    </div>
  );
}

function EffectiveDate({ date }: { date: string }) {
  return (
    <p
      className="font-['DM_Sans'] font-medium text-[#94a3b8] border-t border-slate-100 pt-[24px] mt-[8px]"
      style={{ fontSize: "14px" }}
    >
      Last updated: {date}
    </p>
  );
}

function UL({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-[8px] list-disc list-inside text-[#475569] mt-[8px]" style={{ fontSize: "16px", lineHeight: "1.65" }}>
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );
}

// ─── Privacy Policy ───────────────────────────────────────────────────────────

function PrivacyPolicy() {
  return (
    <div className="flex flex-col gap-[36px]">
      <p className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.65]" style={{ fontSize: "16px", letterSpacing: "-0.3px" }}>
        SympleTax ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our tax resolution services, or use the SympleTax Tax Intelligence (TI) platform — including any features that involve financial data, payment processing, or account registration.
      </p>

      <Section title="1. Information We Collect">
        <p>We collect information in the following ways:</p>
        <p className="mt-[14px] font-medium text-[#0f172a]">Information You Provide Directly</p>
        <UL items={[
          "Name, email address, phone number, and mailing address",
          "Social Security Number or Tax ID (only when required for IRS representation or filing)",
          "Financial information including income, assets, liabilities, and IRS account balances",
          "Employment and business information",
          "Payment and billing information (processed securely via Stripe — we do not store full card numbers)",
          "Account credentials if you register for the TI platform",
          "Communications you send us via forms, email, or chat",
        ]} />
        <p className="mt-[14px] font-medium text-[#0f172a]">Information Collected Automatically</p>
        <UL items={[
          "IP address, browser type, device type, and operating system",
          "Pages visited, time spent on pages, and referring URLs",
          "Clickstream and interaction data",
          "Cookies, pixel tags, and similar tracking technologies",
          "Location data at the city/region level",
        ]} />
        <p className="mt-[14px] font-medium text-[#0f172a]">Information from Third Parties</p>
        <UL items={[
          "IRS transcript data (when you authorize us to retrieve it on your behalf)",
          "Credit bureau data (if applicable for program qualification)",
          "Stripe payment platform data including transaction history and payment status",
          "Analytics providers (Google Analytics)",
        ]} />
      </Section>

      <Section title="2. How We Use Your Information">
        <p>We use your information to:</p>
        <UL items={[
          "Provide, operate, and improve our tax resolution services",
          "Operate and improve the TI platform, including financial tracking features",
          "Process payments and subscriptions via Stripe",
          "Communicate with you about your case, account, or inquiries",
          "Send service-related notifications, updates, and alerts",
          "Verify your identity and prevent fraud",
          "Respond to IRS and state tax agency correspondence on your behalf",
          "Analyze site and platform usage to improve user experience",
          "Comply with applicable federal and state laws and regulations",
          "Send marketing communications (only with your consent; opt-out available at any time)",
        ]} />
      </Section>

      <Section title="3. Payment Processing & Stripe">
        <p>SympleTax uses Stripe, Inc. as our payment processor. When you submit payment information, it is transmitted directly to Stripe over encrypted connections. We do not store your full credit or debit card number on our servers.</p>
        <p className="mt-[12px]">Stripe may collect and store payment data in accordance with their own privacy policy, available at stripe.com/privacy. By using our services, you agree to Stripe's data handling practices as they relate to payment processing. Stripe is PCI-DSS compliant.</p>
        <p className="mt-[12px]">We retain records of transaction amounts, dates, and billing names for accounting and legal compliance purposes.</p>
      </Section>

      <Section title="4. TI Platform & Financial Data">
        <p>The SympleTax Tax Intelligence (TI) platform may collect additional information including:</p>
        <UL items={[
          "Linked financial account data (bank accounts, income sources)",
          "Tax return data and historical IRS account information",
          "User-submitted financial documents and records",
          "Platform usage behavior and workflow interactions",
        ]} />
        <p className="mt-[12px]">Financial data collected through the TI platform is used exclusively to provide the services you have requested. We do not sell or monetize your financial data. Access to this data is restricted to licensed professionals working on your engagement and authorized system administrators under strict access controls.</p>
      </Section>

      <Section title="5. Information Sharing & Disclosure">
        <p>We do not sell your personal information. We may share your information with:</p>
        <UL items={[
          "Licensed enrolled agents, CPAs, and tax professionals assigned to your case",
          "Stripe for payment processing",
          "Cloud hosting and infrastructure providers (under confidentiality obligations)",
          "Analytics and marketing tools (in aggregated or anonymized form where possible)",
          "The IRS or state tax agencies, when authorized by you or required by law",
          "Legal counsel, auditors, or regulators when legally required",
          "A successor entity in the event of a merger, acquisition, or sale of assets",
        ]} />
      </Section>

      <Section title="6. Data Retention">
        <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations (typically 7 years for financial and tax records), resolve disputes, and enforce our agreements. You may request deletion of non-legally-required data by contacting us.</p>
      </Section>

      <Section title="7. Data Security">
        <p>We implement industry-standard security measures including TLS/SSL encryption for data in transit, AES-256 encryption for sensitive data at rest, role-based access controls, multi-factor authentication for internal systems, and regular security audits. No method of transmission or storage is 100% secure. We will notify you of any data breach as required by applicable law.</p>
      </Section>

      <Section title="8. Cookies & Tracking Technologies">
        <p>We use cookies and similar technologies to maintain session state, analyze usage, personalize content, and measure marketing effectiveness. You may disable cookies in your browser settings, though some features may not work properly. We use Google Analytics and may use Meta Pixel or similar tools for marketing attribution.</p>
      </Section>

      <Section title="9. Your Rights">
        <p>Depending on your location, you may have the right to access, correct, delete, or export your personal information. To exercise any of these rights, contact us at <a href="mailto:privacy@sympletax.com" className="text-[#00A4A4] hover:underline">privacy@sympletax.com</a>. We will respond within 30 days (or 45 days for California residents under CCPA/CPRA).</p>
      </Section>

      <Section title="10. Children's Privacy">
        <p>Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from minors. If we become aware that we have collected such information, we will delete it promptly.</p>
      </Section>

      <Section title="11. Changes to This Policy">
        <p>We may update this Privacy Policy from time to time. Material changes will be communicated by updating the effective date and, where appropriate, by email notification. Your continued use of our services after changes constitutes acceptance.</p>
      </Section>

      <Section title="12. Contact Us">
        <p>Privacy questions or requests: <a href="mailto:privacy@sympletax.com" className="text-[#00A4A4] hover:underline">privacy@sympletax.com</a><br />
        SympleTax Privacy Office, 111 West Ocean Blvd, Long Beach, CA 90802<br />
        Phone: <a href="tel:+19492873015" className="text-[#00A4A4] hover:underline">(949) 287-3015</a></p>
      </Section>

      <EffectiveDate date={EFFECTIVE_DATE} />
    </div>
  );
}

// ─── Terms of Service ─────────────────────────────────────────────────────────

function TermsOfService() {
  return (
    <div className="flex flex-col gap-[36px]">
      <p className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.65]" style={{ fontSize: "16px", letterSpacing: "-0.3px" }}>
        These Terms of Service ("Terms") govern your access to and use of the SympleTax website, tax resolution services, and the SympleTax Tax Intelligence (TI) platform. By accessing or using any of these services, you agree to be bound by these Terms. If you do not agree, do not use our services.
      </p>

      <Section title="1. Services Overview">
        <p>SympleTax provides the following services:</p>
        <p className="mt-[12px] font-medium text-[#0f172a]">Tax Resolution Services</p>
        <UL items={[
          "IRS and state tax debt negotiation and representation",
          "Installment agreement and payment plan setup",
          "Offer in Compromise (OIC) preparation and submission",
          "Penalty abatement and interest reduction requests",
          "Currently Not Collectible (CNC) status applications",
          "Innocent Spouse Relief applications",
          "Wage garnishment and bank levy release assistance",
          "IRS audit representation and compliance",
        ]} />
        <p className="mt-[14px] font-medium text-[#0f172a]">TI Platform Services</p>
        <UL items={[
          "Online financial dashboard and tax account overview",
          "Document upload, storage, and management",
          "IRS transcript retrieval and analysis",
          "Secure communication with your assigned tax professional",
          "Payment processing for service fees via Stripe",
          "Case status tracking and milestone notifications",
        ]} />
      </Section>

      <Section title="2. Eligibility & Account Registration">
        <p>You must be at least 18 years old and a resident of the United States to use our services. By creating an account on the TI platform, you represent that all information you provide is accurate, current, and complete. You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. Notify us immediately of any unauthorized access at <a href="mailto:support@sympletax.com" className="text-[#00A4A4] hover:underline">support@sympletax.com</a>.</p>
      </Section>

      <Section title="3. Engagement Agreement & Fees">
        <p>Formal tax resolution representation requires a signed client engagement agreement and payment of applicable service fees. The specific scope of work, fee structure, and payment terms will be detailed in your individual engagement agreement, which supplements these Terms.</p>
        <p className="mt-[12px]">All fees are due as specified in your engagement agreement. Unpaid balances may result in suspension or termination of services. We reserve the right to adjust fees with advance notice for ongoing subscriptions or retainer arrangements.</p>
      </Section>

      <Section title="4. Payment Terms & Stripe">
        <p>All payments for SympleTax services are processed through Stripe, Inc. By providing payment information, you authorize SympleTax to charge the amount(s) specified in your engagement agreement or subscription plan.</p>
        <UL items={[
          "All fees are in US dollars",
          "Recurring payments will be charged on the schedule set forth in your engagement agreement",
          "You are responsible for providing accurate and current billing information",
          "Chargebacks initiated without contacting us first may result in account suspension",
          "Refund eligibility is governed by your engagement agreement; fees for work already performed are generally non-refundable",
        ]} />
        <p className="mt-[12px]">Stripe's use of your payment data is governed by Stripe's Privacy Policy and Terms of Service.</p>
      </Section>

      <Section title="5. Not Legal, Tax, or Financial Advice">
        <p>The information on our website and in the TI platform is for general informational purposes only. It does not constitute legal, tax, financial, or accounting advice. No attorney-client or CPA-client relationship is formed solely by visiting our website or creating a TI platform account. A formal professional relationship is established only upon execution of a signed engagement agreement.</p>
      </Section>

      <Section title="6. No Guarantee of Results">
        <p>We do not guarantee any specific outcome, including a reduction in your tax liability by any specific amount or percentage, acceptance of an Offer in Compromise by the IRS or state agencies, resolution within any particular time frame, or qualification for any specific IRS or state program. Results depend on your individual financial circumstances, IRS policy, the accuracy of information you provide, and factors outside our control.</p>
      </Section>

      <Section title="7. Your Obligations">
        <p>You agree to:</p>
        <UL items={[
          "Provide accurate, complete, and timely information as requested",
          "Promptly respond to communications from your assigned tax professional",
          "Notify us immediately of any correspondence received from the IRS or state tax agencies",
          "Not misrepresent your financial situation or tax history",
          "Comply with all IRS and state tax obligations during the engagement",
          "Keep your TI platform account credentials confidential",
          "Use the TI platform only for lawful purposes",
        ]} />
      </Section>

      <Section title="8. Intellectual Property">
        <p>All content on this website and within the TI platform — including text, graphics, logos, interface design, proprietary algorithms, and software — is the property of SympleTax or its licensors and is protected by applicable U.S. and international intellectual property laws. You may not reproduce, distribute, reverse-engineer, or create derivative works without our prior written consent.</p>
      </Section>

      <Section title="9. Prohibited Uses">
        <p>You agree not to:</p>
        <UL items={[
          "Use our services for any unlawful purpose",
          "Attempt to gain unauthorized access to any part of the TI platform",
          "Upload malicious code, viruses, or disruptive content",
          "Scrape, crawl, or harvest data from our website or platform",
          "Impersonate another person or misrepresent your affiliation",
          "Use our services in connection with tax fraud or willful tax evasion",
        ]} />
      </Section>

      <Section title="10. Third-Party Integrations">
        <p>The TI platform may integrate with third-party services including Stripe (payments), IRS e-services (transcript retrieval), and cloud infrastructure providers. Your use of these integrated services is also subject to the respective third-party terms and policies. SympleTax is not responsible for the practices of these third parties beyond what is described in our Privacy Policy.</p>
      </Section>

      <Section title="11. Suspension & Termination">
        <p>We reserve the right to suspend or terminate your access to our services or the TI platform at any time, with or without notice, if you violate these Terms, fail to pay applicable fees, or engage in conduct that is harmful to SympleTax, other users, or third parties. Upon termination, your right to access the platform ceases. Data retention following termination is governed by our Privacy Policy and applicable law.</p>
      </Section>

      <Section title="12. Disclaimer of Warranties">
        <p>Our services and the TI platform are provided "as is" and "as available" without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the platform will be uninterrupted, error-free, or secure at all times.</p>
      </Section>

      <Section title="13. Limitation of Liability">
        <p>To the maximum extent permitted by applicable law, SympleTax's total liability for any claims arising out of or related to these Terms or our services shall not exceed the total fees you paid to us in the three months preceding the claim. In no event shall we be liable for any indirect, incidental, special, punitive, or consequential damages.</p>
      </Section>

      <Section title="14. Indemnification">
        <p>You agree to indemnify and hold harmless SympleTax, its officers, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorneys' fees) arising out of your use of our services, your violation of these Terms, or your violation of any rights of another party.</p>
      </Section>

      <Section title="15. Governing Law & Disputes">
        <p>These Terms are governed by the laws of the State of California, without regard to conflict of law provisions. Any disputes not resolved informally shall be submitted to binding arbitration in Los Angeles County, California, under the rules of the American Arbitration Association, except that either party may seek injunctive relief in a court of competent jurisdiction.</p>
      </Section>

      <Section title="16. Changes to Terms">
        <p>We may update these Terms at any time. Continued use of our services after the updated effective date constitutes acceptance of the revised Terms. For material changes, we will provide at least 14 days' notice via email or a prominent notice on the platform.</p>
      </Section>

      <Section title="17. Contact Us">
        <p>Legal and Terms inquiries: <a href="mailto:info@sympletax.com" className="text-[#00A4A4] hover:underline">info@sympletax.com</a><br />
        111 West Ocean Blvd, Long Beach, CA 90802<br />
        Phone: <a href="tel:+19492873015" className="text-[#00A4A4] hover:underline">(949) 287-3015</a></p>
      </Section>

      <EffectiveDate date={EFFECTIVE_DATE} />
    </div>
  );
}

// ─── Disclaimer ───────────────────────────────────────────────────────────────

function Disclaimer() {
  return (
    <div className="flex flex-col gap-[36px]">
      <p className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.65]" style={{ fontSize: "16px", letterSpacing: "-0.3px" }}>
        Please read this Disclaimer carefully before using the SympleTax website, engaging our tax resolution services, or using the SympleTax TI platform. By accessing or using any of our services, you acknowledge that you have read, understood, and agree to be bound by this Disclaimer.
      </p>

      <Section title="1. General Information Only">
        <p>The content on this website — including articles, blog posts, FAQs, and marketing materials — is provided for general informational purposes only. It does not constitute legal, financial, tax, or accounting advice. Nothing on this site should be relied upon as a substitute for professional advice tailored to your specific circumstances.</p>
      </Section>

      <Section title="2. No Guarantee of Results">
        <p>Statements about program performance, tax debt reduction, and resolution outcomes are based on historical results achieved by specific clients under specific circumstances. Individual results will vary based on:</p>
        <UL items={[
          "Your specific tax liability, income, and asset situation",
          "The accuracy, completeness, and timeliness of information you provide",
          "Current IRS policies, guidelines, and staffing",
          "State tax agency policies and processing timelines",
          "Your compliance with IRS and state obligations during the engagement",
          "Changes in applicable tax law or IRS programs",
        ]} />
        <p className="mt-[12px]">We do not guarantee that your taxes owed will be reduced by a specific amount or percentage, that the IRS will accept any particular resolution strategy, or that penalties and interest will stop accruing. Penalties and interest continue to accrue until your tax liability is fully satisfied.</p>
      </Section>

      <Section title="3. Not a Law Firm">
        <p>SympleTax is a private tax resolution company. We are not a law firm and do not provide legal advice. Our licensed enrolled agents and tax professionals are authorized to practice before the IRS under Circular 230 but do not provide legal representation in court, bankruptcy proceedings, or criminal tax matters. If your situation involves potential criminal tax liability, you should consult a licensed attorney.</p>
      </Section>

      <Section title="4. Independence from the IRS & Government Agencies">
        <p>SympleTax is entirely independent from the Internal Revenue Service and all other federal and state government agencies. We are not affiliated with, endorsed by, approved by, or sponsored by the IRS. For official IRS information, visit <a href="https://www.irs.gov" target="_blank" rel="noopener noreferrer" className="text-[#00A4A4] hover:underline">IRS.gov</a>. We do not represent ourselves as a government agency or government-affiliated entity in any communications.</p>
      </Section>

      <Section title="5. TI Platform Financial Data Disclaimer">
        <p>The SympleTax Tax Intelligence (TI) platform provides financial data displays and analysis tools intended to help you understand your tax situation. The information displayed in the TI platform is derived from data you provide or authorize us to retrieve. We do not independently verify the accuracy of all data displayed. You should verify all financial figures against your official IRS transcripts, bank statements, and tax returns before making any decisions.</p>
        <p className="mt-[12px]">The TI platform does not provide investment advice, financial planning services, or credit counseling. It is a tax-resolution support tool only.</p>
      </Section>

      <Section title="6. Testimonials & Case Results">
        <p>Testimonials and case results featured on our website were provided by actual SympleTax clients. Clients were not compensated for their testimonials. These represent individual client experiences and outcomes, which reflect unique circumstances and should not be interpreted as typical or guaranteed results. Dollar amounts referenced in case results represent the difference between the original IRS assessment and the final resolution amount, and may not reflect all fees, penalties, or other amounts applicable to your situation.</p>
      </Section>

      <Section title="7. Third-Party Links & Resources">
        <p>Our website and TI platform may contain links to third-party websites, IRS resources, or other external content. These links are provided for your convenience only. SympleTax does not control and is not responsible for the content, accuracy, privacy practices, or security of third-party sites. Linking to a third-party site does not constitute an endorsement.</p>
      </Section>

      <Section title="8. Forward-Looking Statements">
        <p>Any statements on this site regarding expected outcomes, IRS processing timelines, or resolution potential are forward-looking and subject to change. IRS policies, staffing levels, and processing procedures change frequently and affect outcomes in ways we cannot predict or guarantee.</p>
      </Section>

      <Section title="9. Limitation of Liability">
        <p>To the fullest extent permitted by law, SympleTax shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your reliance on information provided on this website or through the TI platform, including without limitation damages for lost tax savings, penalties, interest, or professional fees.</p>
      </Section>

      <EffectiveDate date={EFFECTIVE_DATE} />
    </div>
  );
}

// ─── California Privacy Rights ────────────────────────────────────────────────

function CaliforniaPrivacy() {
  return (
    <div className="flex flex-col gap-[36px]">
      <p className="font-['DM_Sans'] font-normal text-[#475569] leading-[1.65]" style={{ fontSize: "16px", letterSpacing: "-0.3px" }}>
        If you are a California resident, the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA) provides you with specific rights regarding your personal information. This notice supplements our Privacy Policy and applies solely to California residents.
      </p>

      <Section title="1. Categories of Personal Information Collected">
        <p>In the past 12 months, we have collected the following categories of personal information:</p>
        <UL items={[
          "Identifiers — name, email address, phone number, IP address, account username",
          "Financial information — tax debt amounts, income, asset values, bank account information (for direct debit authorization), payment card data (processed by Stripe; not stored by us)",
          "Government identifiers — Social Security Number or ITIN (only when required for IRS representation)",
          "Professional and employment information — employer name, occupation, business ownership",
          "Internet and electronic network activity — browsing behavior, pages viewed, device and browser data",
          "Geolocation data — city/region level only, derived from IP address",
          "Communications — emails, form submissions, messages sent through the TI platform",
          "Inferences — usage patterns and service preferences derived from platform activity",
        ]} />
      </Section>

      <Section title="2. Sources of Personal Information">
        <UL items={[
          "Directly from you via forms, account registration, or consultations",
          "Automatically via cookies, analytics tools, and server logs",
          "IRS and state tax agencies (with your authorization)",
          "Stripe (payment processing data)",
          "Referral partners or marketing channels",
        ]} />
      </Section>

      <Section title="3. Business Purposes for Collection">
        <UL items={[
          "Providing tax resolution services and IRS representation",
          "Operating and improving the TI platform",
          "Processing payments via Stripe",
          "Verifying identity and preventing fraud",
          "Communicating about your account or case",
          "Complying with legal and regulatory obligations",
          "Analyzing service performance and user experience",
        ]} />
      </Section>

      <Section title="4. Sharing of Personal Information">
        <p>We do not sell your personal information as defined under CCPA/CPRA. In the past 12 months, we have shared personal information with:</p>
        <UL items={[
          "Licensed tax professionals and enrolled agents (for service delivery)",
          "Stripe, Inc. (payment processing)",
          "Cloud infrastructure and hosting providers (under data processing agreements)",
          "Analytics tools in aggregated/anonymized form",
          "IRS and state agencies (as authorized by you)",
          "Legal and compliance advisors when required by law",
        ]} />
        <p className="mt-[12px]">We do not share personal information for cross-context behavioral advertising.</p>
      </Section>

      <Section title="5. Your California Privacy Rights">
        <p className="font-medium text-[#0f172a]">Right to Know</p>
        <p className="mt-[6px]">You have the right to request disclosure of the categories and specific pieces of personal information we have collected about you, the categories of sources, our business purposes for collection, and the categories of third parties with whom we share it.</p>

        <p className="font-medium text-[#0f172a] mt-[16px]">Right to Delete</p>
        <p className="mt-[6px]">You may request deletion of personal information we hold about you, subject to exceptions such as information required by law (e.g., financial records we must retain for 7 years), information necessary to complete pending transactions, or information needed to detect security incidents.</p>

        <p className="font-medium text-[#0f172a] mt-[16px]">Right to Correct</p>
        <p className="mt-[6px]">You have the right to request correction of inaccurate personal information we maintain about you.</p>

        <p className="font-medium text-[#0f172a] mt-[16px]">Right to Opt-Out of Sale or Sharing</p>
        <p className="mt-[6px]">SympleTax does not sell personal information and does not share personal information for cross-context behavioral advertising. This right is not currently applicable to our practices.</p>

        <p className="font-medium text-[#0f172a] mt-[16px]">Right to Limit Sensitive Personal Information</p>
        <p className="mt-[6px]">You have the right to limit our use of sensitive personal information (including financial data, SSN/ITIN, and precise geolocation) to what is necessary to perform the services you requested. We use sensitive information only as required to deliver tax resolution services and operate the TI platform.</p>

        <p className="font-medium text-[#0f172a] mt-[16px]">Right to Non-Discrimination</p>
        <p className="mt-[6px]">We will not discriminate against you for exercising your California privacy rights. Exercising these rights will not result in denial of services, different pricing, or a different level of service quality.</p>

        <p className="font-medium text-[#0f172a] mt-[16px]">Right to Data Portability</p>
        <p className="mt-[6px]">Where technically feasible, you may request a copy of your personal information in a portable, readily usable format.</p>
      </Section>

      <Section title="6. Sensitive Personal Information">
        <p>We collect certain categories of sensitive personal information as defined under CPRA, including Social Security Numbers or ITINs and financial account data. This information is used exclusively to deliver our tax resolution services and operate the TI platform. We do not use sensitive personal information for any secondary purposes beyond what is necessary for service delivery.</p>
      </Section>

      <Section title="7. How to Submit a Request">
        <p>To exercise your California privacy rights, contact us through any of the following channels:</p>
        <UL items={[
          "Email: privacy@sympletax.com",
          "Phone: (949) 287-3015",
          "Mail: SympleTax Privacy Office, 111 West Ocean Blvd, Long Beach, CA 90802",
        ]} />
        <p className="mt-[12px]">We will verify your identity before processing your request. We will respond within 45 days of receipt. We may extend the response period by an additional 45 days when reasonably necessary, with prior notice.</p>
        <p className="mt-[12px]">You may make a verifiable consumer request up to twice in a 12-month period at no charge.</p>
      </Section>

      <Section title="8. Authorized Agents">
        <p>You may designate an authorized agent to submit a request on your behalf. To do so, you must provide written authorization signed by you, and we may also require you to verify your identity directly before we process the request through your agent.</p>
      </Section>

      <Section title="9. Shine the Light">
        <p>California Civil Code § 1798.83 permits California residents to request information about personal information we have disclosed to third parties for direct marketing purposes. SympleTax does not share your personal information with third parties for their direct marketing purposes.</p>
      </Section>

      <Section title="10. Contact for California Privacy Requests">
        <p>
          Email: <a href="mailto:privacy@sympletax.com" className="text-[#00A4A4] hover:underline">privacy@sympletax.com</a><br />
          Phone: <a href="tel:+19492873015" className="text-[#00A4A4] hover:underline">(949) 287-3015</a><br />
          Mail: 111 West Ocean Blvd, Long Beach, CA 90802
        </p>
      </Section>

      <EffectiveDate date={EFFECTIVE_DATE} />
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const CONTENT_MAP: Record<TabKey, () => JSX.Element> = {
  "privacy-policy": PrivacyPolicy,
  "terms-of-service": TermsOfService,
  "disclaimer": Disclaimer,
  "california-privacy": CaliforniaPrivacy,
};

const TITLE_MAP: Record<TabKey, string> = {
  "privacy-policy": "Privacy Policy",
  "terms-of-service": "Terms of Service",
  "disclaimer": "Disclaimer",
  "california-privacy": "California Privacy Rights",
};

const LEGAL_DESCRIPTIONS: Record<TabKey, string> = {
  "privacy-policy":
    "How SympleTax collects, uses, stores, and protects your personal and financial information when you use our website, tax resolution services, and Tax Intelligence platform.",
  "terms-of-service":
    "Terms and conditions for using the SympleTax website and services, including eligibility, disclaimers, limitation of liability, and governing law.",
  "disclaimer":
    "Important disclaimers about SympleTax tax resolution services, IRS outcomes, professional representation, and what you can expect from our firm.",
  "california-privacy":
    "California residents’ privacy rights under the CCPA/CPRA: categories of data collected, sale/sharing, and how to exercise access, deletion, and opt-out rights.",
};

export default function LegalPage() {
  const { tab } = useParams<{ tab: string }>();
  const navigate = useNavigate();

  const activeTab = (TABS.find((t) => t.key === tab)?.key ?? "privacy-policy") as TabKey;

  useEffect(() => {
    if (!tab || !TABS.find((t) => t.key === tab)) {
      navigate("/legal/privacy-policy", { replace: true });
    }
  }, [tab, navigate]);

  usePageSEO({
    title: `${TITLE_MAP[activeTab]} | SympleTax`,
    description: LEGAL_DESCRIPTIONS[activeTab],
    path: `/legal/${activeTab}`,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  const ActiveContent = CONTENT_MAP[activeTab];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero strip */}
      <div className="bg-[#0f172a]">
        <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px] pt-[140px] pb-[64px]">
          <div className="flex items-center gap-[10px] mb-[20px]">
            <div className="bg-[#00A4A4] h-px w-[35px]" />
            <span
              className="font-['DM_Sans'] font-medium uppercase text-[#00A4A4]"
              style={{ fontSize: "14px", letterSpacing: "0.05em" }}
            >
              Legal
            </span>
          </div>
          <h1
            className="font-['DM_Sans'] font-bold text-white leading-[1.08]"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-1.5px" }}
          >
            {TITLE_MAP[activeTab]}
          </h1>
        </div>
      </div>

      {/* Tab bar */}
      <div className="border-b border-slate-100 bg-white sticky top-0 z-[50] shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
        <div className="max-w-[1330px] mx-auto px-[25px] lg:px-[70px]">
          <div className="flex items-center gap-0 overflow-x-auto">
            {TABS.map((t) => {
              const isActive = t.key === activeTab;
              return (
                <Link
                  key={t.key}
                  to={`/legal/${t.key}`}
                  className="relative shrink-0 px-[20px] py-[18px] font-['DM_Sans'] font-medium transition-colors duration-200 whitespace-nowrap focus:outline-none"
                  style={{
                    fontSize: "15px",
                    color: isActive ? "#0f172a" : "#94a3b8",
                  }}
                >
                  {t.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00A4A4]" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-[80px] lg:py-[100px]">
        <div className="max-w-[860px] mx-auto px-[25px] lg:px-[70px]">
          <ActiveContent />
        </div>
      </div>

      <Footer />
    </div>
  );
}
