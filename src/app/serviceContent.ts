// ─── Service / Tax-Problem content data ──────────────────────────────────────
// One record per slug. Used by ServiceDetailPage.tsx to render each page.

export type ServiceData = {
  slug: string;
  type: "resolution" | "problem";
  eyebrow: string;
  title: string;
  subtitle: string;
  heroStats: Array<{ value: string; label: string }>;
  whatItIs: {
    heading: string;
    paragraphs: string[];
    callout: { big: string; label: string; sub?: string };
  };
  howItWorks: {
    heading: string;
    steps: Array<{ title: string; body: string }>;
  };
  qualify: {
    heading: string;
    desc: string;
    points: Array<{ title: string; desc: string }>;
  };
  approach: {
    heading: string;
    steps: Array<{ number: string; title: string; body: string }>;
  };
  faqs: Array<{ q: string; a: string }>;
  relatedSlugs: string[];
  seoTitle: string;
  seoDesc: string;
};

const DATA: ServiceData[] = [
  // ── RESOLUTION PROGRAMS ────────────────────────────────────────────────────

  {
    slug: "offer-in-compromise",
    type: "resolution",
    eyebrow: "Offer in Compromise",
    title: "Settle Your IRS Debt for Less Than You Owe",
    subtitle:
      "The IRS's own program that allows qualifying taxpayers to resolve their entire tax debt for a fraction of the balance — permanently.",
    heroStats: [
      { value: "40%+", label: "OIC acceptance rate when professionally filed" },
      { value: "Pennies", label: "Average settlement per dollar owed" },
      { value: "6–12 mo", label: "Typical timeline to acceptance" },
    ],
    whatItIs: {
      heading: "What Is an Offer in Compromise?",
      paragraphs: [
        "An Offer in Compromise (OIC) is an IRS program that lets qualifying taxpayers settle their entire outstanding tax liability for less than the full amount owed. The IRS accepts these settlements when collecting the full debt would create financial hardship — or when there's genuine doubt as to whether the full debt is actually owed.",
        "The settlement amount is calculated based on your \"reasonable collection potential\" — the IRS's estimate of what they could realistically collect from you given your income, expenses, assets, and future earning capacity. A well-prepared OIC can reduce six-figure tax debt to a few thousand dollars.",
        "While the IRS rejects many OIC applications submitted without professional help, approval rates rise significantly when a licensed professional prepares and negotiates the offer. The key is knowing exactly what the IRS is looking for — and presenting your case compellingly.",
      ],
      callout: { big: "96%", label: "Max reduction achieved by our clients", sub: "Results vary based on individual circumstances" },
    },
    howItWorks: {
      heading: "How the Offer in Compromise Process Works",
      steps: [
        { title: "Financial Analysis", body: "We pull your IRS transcripts and conduct a complete analysis of your income, allowable expenses, and asset equity — the exact calculation the IRS uses to determine your offer amount." },
        { title: "Offer Calculation", body: "Using the IRS's own formula, we determine the minimum offer amount likely to be accepted — often dramatically lower than the total balance." },
        { title: "Application Preparation", body: "We complete Form 656 and supporting financial disclosures, building a detailed, documented case for acceptance." },
        { title: "IRS Negotiation", body: "We submit your offer and handle all IRS communication during the review period. If the IRS counters, we negotiate on your behalf to get the best possible settlement." },
        { title: "Resolution", body: "Once accepted, you pay the agreed amount — and your remaining tax liability is legally discharged. Collections stop immediately upon submission." },
      ],
    },
    qualify: {
      heading: "Do You Qualify for an Offer in Compromise?",
      desc: "Not everyone qualifies — but more people qualify than the IRS's initial rejection letters suggest. Here are the key criteria:",
      points: [
        { title: "Significant tax debt", desc: "You owe more than you can realistically pay through a standard installment agreement within the collection period." },
        { title: "Filed all required returns", desc: "The IRS won't consider an OIC if you have unfiled returns. All missing returns must be current before applying." },
        { title: "Not in active bankruptcy", desc: "OIC applications are held while bankruptcy proceedings are active. We'll advise on timing." },
        { title: "Ability-to-pay analysis", desc: "Your income, expenses, and asset equity suggest you cannot pay the full debt without severe financial hardship." },
        { title: "Not recently accepted an OIC", desc: "There are waiting periods after a prior accepted OIC before a new one can be submitted." },
        { title: "Made all current-year tax deposits", desc: "Business owners with payroll tax obligations must be current on current-year deposits." },
      ],
    },
    approach: {
      heading: "How SympleTax Handles Your OIC Case",
      steps: [
        { number: "01", title: "Free Case Evaluation", body: "We review your IRS transcript, assess your financials, and tell you honestly whether an OIC is your best option — or whether another path gives you a better outcome." },
        { number: "02", title: "Strategic Offer Preparation", body: "Our licensed CPAs calculate the lowest defensible offer amount and prepare a complete, professionally documented package. We know what the IRS scrutinizes and prepare for it." },
        { number: "03", title: "Submission & Defense", body: "We submit your offer, respond to IRS inquiries, and negotiate any counter-offers. Collections are paused during review. We handle everything — you don't speak to the IRS at all." },
      ],
    },
    faqs: [
      { q: "How long does the OIC process take?", a: "Once submitted, the IRS typically takes 6–12 months to review an offer. During this time, all collection activity is paused. We set realistic timelines upfront." },
      { q: "What happens if the IRS rejects my offer?", a: "You have 30 days to appeal a rejection. We evaluate counter-offers and appeals and can resubmit with a stronger case if needed. Rejection doesn't end your options." },
      { q: "Do I have to pay anything upfront?", a: "The IRS requires a $205 application fee (waived for low-income applicants) and an initial payment with your offer. SympleTax fees are separate and discussed during your free consultation." },
      { q: "Will the IRS continue collections while my OIC is pending?", a: "Yes — collections are paused from the moment of submission through the entire review and any appeal period. We submit promptly to stop active collection actions." },
      { q: "Can an OIC really eliminate all my tax debt?", a: "Yes. An accepted OIC legally settles your entire tax liability for the agreed amount. The remaining balance is discharged and cannot be collected." },
    ],
    relatedSlugs: ["penalty-abatement", "installment-agreement", "currently-not-collectible", "back-taxes"],
    seoTitle: "Offer in Compromise | Settle IRS Debt for Less | SympleTax",
    seoDesc: "Qualify for an IRS Offer in Compromise and settle your tax debt for a fraction of what you owe. Licensed professionals. Free consultation.",
  },

  {
    slug: "installment-agreement",
    type: "resolution",
    eyebrow: "Installment Agreement",
    title: "Break Your IRS Debt Into Payments You Can Actually Afford",
    subtitle:
      "An IRS-approved repayment plan that stops collections, prevents levies, and puts your account in good standing — without paying in full.",
    heroStats: [
      { value: "Collections halted", label: "Once agreement is in place" },
      { value: "Up to 72 months", label: "Repayment term available" },
      { value: "Multiple types", label: "Streamlined, partial-pay, and more" },
    ],
    whatItIs: {
      heading: "What Is an IRS Installment Agreement?",
      paragraphs: [
        "An Installment Agreement is an IRS payment plan that allows you to pay your outstanding tax liability in monthly installments rather than a lump sum. Once in place, the IRS suspends most active collection actions — including levies, garnishments, and threatening letters.",
        "There are several types of installment agreements, and the right one depends on your total balance, income, and ability to pay. Streamlined agreements are available for balances under $50,000. Partial Pay Installment Agreements (PPIAs) allow you to pay less than the full balance if you can demonstrate you cannot pay it all within the collection period.",
        "Interest and some penalties continue to accrue under an installment agreement — but the payment plan creates a structured, manageable path to resolution and keeps the IRS off your back while you pay.",
      ],
      callout: { big: "$50K", label: "Balance threshold for streamlined agreement (no financials required)" },
    },
    howItWorks: {
      heading: "Types of IRS Installment Agreements",
      steps: [
        { title: "Streamlined Installment Agreement", body: "For balances up to $50,000. No financial disclosure required. Term up to 72 months. The easiest and fastest type to establish." },
        { title: "Partial Pay Installment Agreement (PPIA)", body: "For taxpayers who cannot afford to pay the full balance before the collection statute expires. Monthly payments are based on ability to pay — and the remaining balance may be uncollectable after 10 years." },
        { title: "Non-Streamlined Installment Agreement", body: "For balances over $50,000. Requires full financial disclosure (Form 433-A). Monthly payment is based on allowable expenses vs. income." },
        { title: "Direct Debit Installment Agreement", body: "Payments are automatically debited from your bank account. The IRS often grants better terms for DDIA arrangements." },
      ],
    },
    qualify: {
      heading: "Who Qualifies for an Installment Agreement?",
      desc: "Almost anyone with an outstanding IRS balance can enter an installment agreement — provided they meet basic compliance requirements.",
      points: [
        { title: "All required returns filed", desc: "Unfiled returns must be submitted before the IRS will approve a payment plan. We handle this as part of your case." },
        { title: "Current on estimated taxes", desc: "Self-employed individuals must be current on current-year estimated tax payments." },
        { title: "Current on payroll deposits", desc: "Business owners must be current on federal payroll tax deposits." },
        { title: "No active OIC pending", desc: "You cannot be in an active Offer in Compromise consideration and an installment agreement simultaneously." },
      ],
    },
    approach: {
      heading: "How SympleTax Sets Up Your Payment Plan",
      steps: [
        { number: "01", title: "Financial Analysis", body: "We review your full IRS balance, income, and allowable IRS expense standards to determine the lowest defensible monthly payment — not just what you tell the IRS you can pay." },
        { number: "02", title: "Agreement Negotiation", body: "We submit the installment agreement request and negotiate terms. For PPIAs, this includes building a complete financial disclosure that supports the lowest possible payment." },
        { number: "03", title: "Collections Stopped", body: "Once approved, the levy threat is gone. We handle all paperwork and ensure your agreement is properly established so it stays in force." },
      ],
    },
    faqs: [
      { q: "Does interest still accrue on an installment agreement?", a: "Yes. The IRS continues to charge interest (currently 8% per year compounded daily) and a 0.25% failure-to-pay penalty while you're in a plan. However, this is far less damaging than ignoring the debt." },
      { q: "Can I change my payment amount if my income changes?", a: "Yes. If your financial situation changes significantly, we can request a modification to your agreement. The IRS reviews PPIAs every two years automatically." },
      { q: "What happens if I miss a payment?", a: "Missing a payment can default your agreement and reinstate collection actions. We set up direct debit to prevent this — and monitor your account." },
      { q: "Can I get a payment plan if I owe more than $50,000?", a: "Yes. Balances over $50,000 require a Collection Information Statement (Form 433-A) but installment agreements are still available." },
    ],
    relatedSlugs: ["offer-in-compromise", "penalty-abatement", "currently-not-collectible", "back-taxes"],
    seoTitle: "IRS Installment Agreement | Monthly Tax Payment Plans | SympleTax",
    seoDesc: "Set up an IRS installment agreement and stop collection actions. Licensed professionals negotiate the lowest possible monthly payment. Free consultation.",
  },

  {
    slug: "penalty-abatement",
    type: "resolution",
    eyebrow: "Penalty Abatement",
    title: "Remove IRS Penalties That Have Inflated Your Balance",
    subtitle:
      "IRS penalties can add 25–47% to what you already owe — and many can be legally removed. Most taxpayers don't know to ask.",
    heroStats: [
      { value: "Up to 47.5%", label: "Your balance could be penalties and interest" },
      { value: "First-time", label: "Abatement available to most taxpayers" },
      { value: "Retroactive", label: "Penalties already assessed can be reversed" },
    ],
    whatItIs: {
      heading: "What Is IRS Penalty Abatement?",
      paragraphs: [
        "IRS Penalty Abatement is the process of formally requesting that the IRS reduce or eliminate penalties that have been added to your tax balance. These penalties — failure to file, failure to pay, and accuracy-related penalties — can represent 25% to 47.5% of your original tax liability, significantly inflating what you owe.",
        "The IRS has two primary abatement programs. First-Time Penalty Abatement (FTA) is available to taxpayers with a clean compliance history who missed one filing or payment deadline. Reasonable Cause Abatement applies when you can demonstrate that your failure to comply was due to circumstances beyond your control — illness, natural disaster, bad professional advice, or similar hardship.",
        "Penalty abatement is one of the most underused IRS resolution tools. Many taxpayers overpay significantly because they don't know these programs exist or how to apply for them.",
      ],
      callout: { big: "25–47.5%", label: "Of your IRS balance may be removable penalties" },
    },
    howItWorks: {
      heading: "Types of Penalty Abatement",
      steps: [
        { title: "First-Time Abatement (FTA)", body: "Available if you have a clean compliance history for the prior 3 years. No financial documentation required. Can eliminate failure-to-file and failure-to-pay penalties entirely for one tax period." },
        { title: "Reasonable Cause Abatement", body: "Applies when penalties arose from circumstances beyond your control: serious illness or death in the family, natural disaster, destroyed records, reliance on erroneous professional advice, or demonstrated inability to pay." },
        { title: "Statutory Exceptions", body: "Certain penalties cannot be charged under specific legal conditions — for example, if the IRS provided incorrect written advice that you relied upon in good faith." },
        { title: "Administrative Waivers", body: "The IRS occasionally issues administrative waivers for new tax provisions where guidance was unclear. These are systematic and may apply to your situation without a formal application." },
      ],
    },
    qualify: {
      heading: "Do Your Penalties Qualify for Removal?",
      desc: "The specific criteria depend on which abatement path applies to you. Here's what we look for:",
      points: [
        { title: "Clean prior history (FTA)", desc: "No penalties for the same type in the prior 3 tax years. The IRS generally grants FTA once per taxpayer without documentation." },
        { title: "Documented hardship (Reasonable Cause)", desc: "Medical records, death certificates, FEMA disaster declarations, or other documentation supporting your inability to comply." },
        { title: "All returns filed", desc: "The IRS will not grant penalty abatement on returns that haven't been filed. We resolve unfiled returns first." },
        { title: "Current tax compliance", desc: "You must be in compliance for the current tax year — either paid up or in an active resolution program." },
      ],
    },
    approach: {
      heading: "How SympleTax Gets Your Penalties Removed",
      steps: [
        { number: "01", title: "Penalty Audit", body: "We pull your IRS account transcript and identify every penalty that has been assessed — and which abatement program each one qualifies for." },
        { number: "02", title: "Abatement Application", body: "We draft and submit penalty abatement requests, including supporting documentation and a written argument for each applicable program. The IRS receives thousands of poorly prepared requests — ours are built to succeed." },
        { number: "03", title: "Appeal If Needed", body: "If the initial request is denied, we file an appeal with the IRS Office of Appeals. Denials are often overturned with proper representation." },
      ],
    },
    faqs: [
      { q: "Can I apply for penalty abatement myself?", a: "Yes, but the IRS process is specific and denials are common for poorly prepared requests. FTA can be requested by phone; reasonable cause requires a written argument with supporting documentation." },
      { q: "How much can penalty abatement save me?", a: "It depends on your penalties. For a $50,000 balance that includes $15,000 in penalties, a successful abatement eliminates $15,000 — reducing what you need to settle or pay." },
      { q: "Does abatement remove interest too?", a: "Interest is not typically abated except in cases where the IRS made an error in assessment. However, removing penalties also reduces the interest that accrued on those penalties." },
      { q: "How long does the abatement process take?", a: "FTA requests by phone can receive an answer the same day. Written reasonable cause requests typically take 30–60 days for a response." },
    ],
    relatedSlugs: ["offer-in-compromise", "installment-agreement", "back-taxes", "unfiled-returns"],
    seoTitle: "IRS Penalty Abatement | Remove Tax Penalties | SympleTax",
    seoDesc: "Remove IRS penalties legally with First-Time Abatement or Reasonable Cause. SympleTax recovers thousands in improperly assessed penalties. Free consultation.",
  },

  {
    slug: "currently-not-collectible",
    type: "resolution",
    eyebrow: "Currently Not Collectible",
    title: "Halt All IRS Collection Activity — Legally",
    subtitle:
      "When paying your tax debt would leave you unable to meet basic living expenses, the IRS has a formal status that stops all collection. Immediately.",
    heroStats: [
      { value: "Collections stop", label: "Levies, garnishments, and seizures halted" },
      { value: "Statute runs", label: "10-year collection clock keeps ticking" },
      { value: "Renewable", label: "Status can be maintained indefinitely with hardship" },
    ],
    whatItIs: {
      heading: "What Is Currently Not Collectible Status?",
      paragraphs: [
        "Currently Not Collectible (CNC) is an IRS designation that formally halts all collection activity — including levies, wage garnishments, bank account freezes, and threatening notices — when the IRS determines that collecting the debt would create genuine financial hardship.",
        "While in CNC status, the 10-year IRS collection statute of limitations (the period during which the IRS can legally collect) continues to run. If the statute expires while you remain in CNC status, the debt may be wiped out entirely without payment.",
        "CNC is not a permanent solution — the IRS reviews your financial situation periodically, and if your income improves, they will resume collection efforts. But it provides critical breathing room during financial hardship and can be maintained for extended periods.",
      ],
      callout: { big: "10 years", label: "Maximum IRS collection window (CSED)", sub: "Debt may expire if you remain in CNC status long enough" },
    },
    howItWorks: {
      heading: "How CNC Status Works",
      steps: [
        { title: "Hardship Determination", body: "The IRS evaluates your income against the IRS's National Standards for allowable living expenses. If your income barely covers these expenses, you likely qualify." },
        { title: "Collection Suspended", body: "Once CNC status is granted, the IRS suspends all active collection actions. No levies, no garnishments, no notices." },
        { title: "Annual Review", body: "The IRS may request an updated financial review each year. If your income has improved beyond the threshold, collection resumes." },
        { title: "Statute Continues", body: "Crucially, the 10-year collection statute of limitations (CSED) keeps running during CNC status — unlike some other programs that toll it." },
      ],
    },
    qualify: {
      heading: "Who Qualifies for Currently Not Collectible Status?",
      desc: "Qualification is based on a strict financial analysis. The IRS uses standardized expense tables to evaluate your situation.",
      points: [
        { title: "Income at or below IRS standards", desc: "Your verified monthly income must not exceed the IRS's allowable expense standards (National and Local) for basic living." },
        { title: "No liquidatable assets", desc: "You should not have significant assets the IRS could seize and sell — home equity, investment accounts, retirement funds." },
        { title: "All returns filed", desc: "You must be compliant on filing — the IRS will not grant CNC if you have unfiled returns for any year." },
        { title: "Genuine financial hardship", desc: "Documented inability to pay basic expenses if forced to pay the tax debt — medical costs, housing, food, transportation." },
      ],
    },
    approach: {
      heading: "How SympleTax Secures CNC Status for You",
      steps: [
        { number: "01", title: "Financial Documentation", body: "We prepare a complete Collection Information Statement (Form 433-A or 433-F) documenting your income, allowable expenses, and assets — building the strongest possible hardship case." },
        { number: "02", title: "IRS Submission", body: "We submit the CNC request and handle all IRS communication. Collections are typically paused during the review period even before formal approval." },
        { number: "03", title: "Ongoing Monitoring", body: "We monitor your account for IRS reviews and respond on your behalf. We also track your Collection Statute Expiration Date (CSED) to maximize the benefit of CNC status." },
      ],
    },
    faqs: [
      { q: "Does interest keep accruing in CNC status?", a: "Yes. Interest and some penalties continue to accrue on the underlying balance. CNC stops active collection — it doesn't freeze the debt. This is why monitoring the CSED is important." },
      { q: "Can I own a home and still qualify for CNC?", a: "Possibly. Significant equity in a home may disqualify you, but it depends on your total equity relative to your balance. We evaluate this in your free consultation." },
      { q: "How long can I stay in CNC status?", a: "Indefinitely, as long as your financial situation doesn't improve beyond the IRS's threshold. Some clients have maintained CNC status until the collection statute expired." },
      { q: "Will the IRS contact me while I'm in CNC?", a: "You'll receive annual balance notices by mail, but active collection actions (calls, levies, garnishments) stop." },
    ],
    relatedSlugs: ["offer-in-compromise", "installment-agreement", "penalty-abatement", "back-taxes"],
    seoTitle: "Currently Not Collectible | Stop IRS Collections | SympleTax",
    seoDesc: "Qualify for Currently Not Collectible status and stop IRS levies, garnishments, and seizures. Licensed professionals. Free consultation.",
  },

  {
    slug: "innocent-spouse-relief",
    type: "resolution",
    eyebrow: "Innocent Spouse Relief",
    title: "Separate Your Tax Liability from Your Spouse's Mistakes",
    subtitle:
      "When a joint tax return leads to an unexpected IRS bill — because of your spouse or ex-spouse's errors or hidden income — you may not legally owe it.",
    heroStats: [
      { value: "3 types", label: "Of relief available depending on your situation" },
      { value: "Retroactive", label: "Protection for already-assessed liabilities" },
      { value: "No time limit", label: "On Equitable Relief requests in most cases" },
    ],
    whatItIs: {
      heading: "What Is Innocent Spouse Relief?",
      paragraphs: [
        "When you file a joint tax return, both spouses are legally responsible for the entire tax liability — even if one spouse earned all the income or was solely responsible for the underreporting. This is called \"joint and several liability.\"",
        "Innocent Spouse Relief allows you to be relieved of your responsibility for taxes, interest, and penalties that arose from your spouse's or ex-spouse's errors, omissions, or fraud — when you had no knowledge of the problem and it would be unfair to hold you responsible.",
        "There are three pathways to relief: Innocent Spouse Relief (erroneous items entirely attributable to the other spouse), Separation of Liability (divides the understatement between spouses), and Equitable Relief (a broader safety net when neither of the first two apply but it would still be inequitable to hold you liable).",
      ],
      callout: { big: "Joint filing", label: "Doesn't mean joint responsibility when you qualify for relief" },
    },
    howItWorks: {
      heading: "Three Types of Innocent Spouse Relief",
      steps: [
        { title: "Innocent Spouse Relief (IRC §6015(b))", body: "Applies when erroneous items on a joint return were entirely attributable to your spouse, you didn't know or have reason to know, and it would be inequitable to hold you liable." },
        { title: "Separation of Liability (IRC §6015(c))", body: "Divides the understated tax between you and your spouse based on each person's share of the items. Available if you are divorced, legally separated, or not living together." },
        { title: "Equitable Relief (IRC §6015(f))", body: "A broader catch-all for situations where the other two forms don't technically apply but relief is still warranted based on all facts and circumstances. This covers both understatements and underpayments." },
      ],
    },
    qualify: {
      heading: "Key Factors the IRS Evaluates",
      desc: "The IRS considers several factors when determining whether granting relief is equitable. No single factor is determinative.",
      points: [
        { title: "No knowledge of the error", desc: "You didn't know, and had no reason to know, about the underreported income or improper deductions when you signed the return." },
        { title: "Marital status", desc: "Some forms of relief require separation or divorce. Others are available even during an intact marriage." },
        { title: "Economic hardship", desc: "Whether you would suffer economic hardship if forced to pay the liability attributed to your spouse's actions." },
        { title: "Significant benefit", desc: "Whether you received a significant financial benefit (beyond normal support) from the underreported income or deducted amounts." },
        { title: "Abuse or control", desc: "If you were the victim of domestic abuse or financial control, this strongly weighs in favor of relief." },
        { title: "Compliance since the return", desc: "Your compliance with tax laws after the year in question is a positive factor." },
      ],
    },
    approach: {
      heading: "How SympleTax Handles Your Innocent Spouse Case",
      steps: [
        { number: "01", title: "Case Evaluation", body: "We review your joint return, the IRS assessment, and the circumstances of your filing to determine which relief pathway gives you the best chance of full relief." },
        { number: "02", title: "Form 8857 Preparation", body: "We prepare a complete, well-documented Request for Innocent Spouse Relief with supporting declarations, timeline of events, and legal argument — not just a form submission." },
        { number: "03", title: "IRS Review & Appeals", body: "We respond to IRS information requests and represent you through the review process and any appeals. If relief is initially denied, we file an appeal with the IRS Office of Appeals." },
      ],
    },
    faqs: [
      { q: "Does my spouse know I'm filing for innocent spouse relief?", a: "Yes. The IRS is required to notify your spouse or former spouse that you have filed Form 8857. They have the right to provide information to the IRS about the request." },
      { q: "Can I file for relief after the IRS has already assessed the liability?", a: "Yes. You can file for innocent spouse relief even after the IRS has assessed the tax and begun collection." },
      { q: "Is there a deadline to file?", a: "For Innocent Spouse Relief and Separation of Liability, you must file within 2 years of when the IRS first attempted to collect from you. Equitable Relief generally has a longer window." },
      { q: "Does innocent spouse relief protect me from all joint liabilities?", a: "Only the liability specifically attributable to your spouse's erroneous items. Any tax you personally owe from the same return remains your responsibility." },
    ],
    relatedSlugs: ["offer-in-compromise", "back-taxes", "penalty-abatement", "installment-agreement"],
    seoTitle: "Innocent Spouse Relief | IRS Joint Liability Relief | SympleTax",
    seoDesc: "Separate your IRS tax liability from a spouse's mistakes. SympleTax handles Innocent Spouse Relief requests with documented case preparation. Free consultation.",
  },

  {
    slug: "unfiled-returns",
    type: "resolution",
    eyebrow: "Unfiled Tax Returns",
    title: "Get Back into IRS Compliance Before It Gets Worse",
    subtitle:
      "Every month you delay filing a missing return, penalties multiply. The IRS also files a Substitute for Return on your behalf — and it's almost always worse than what you'd file yourself.",
    heroStats: [
      { value: "5% / month", label: "Failure-to-file penalty — up to 25% total" },
      { value: "SFR inflates", label: "IRS-prepared return typically overstates your liability" },
      { value: "6 years", label: "IRS generally requires returns for last 6 years" },
    ],
    whatItIs: {
      heading: "What Happens When You Have Unfiled Returns?",
      paragraphs: [
        "Missing a tax return filing deadline triggers an immediate failure-to-file penalty — 5% of unpaid taxes per month, up to 25% of the total balance. Over time, these penalties, combined with interest, can more than double what you originally owed.",
        "If you don't file, the IRS may file a Substitute for Return (SFR) on your behalf. The IRS prepares this using income reported by employers, banks, and 1099 issuers — but allows none of your deductions, exemptions, or credits. The result is almost always a dramatically inflated tax bill.",
        "Filing your own returns — even late — typically reduces the balance significantly compared to the SFR. And getting back into compliance is a prerequisite for nearly every other IRS resolution program, including Offers in Compromise and installment agreements.",
      ],
      callout: { big: "6 years", label: "IRS standard for back-filing compliance requirement" },
    },
    howItWorks: {
      heading: "What the IRS Requires for Compliance",
      steps: [
        { title: "Determine which years are open", body: "The IRS generally requires returns for the last 6 years to consider a taxpayer in \"compliance.\" We pull your IRS transcript to see which years are outstanding." },
        { title: "Gather available income information", body: "We request IRS income transcripts showing all W-2s, 1099s, and other income reported to the IRS for each missing year — even if you've lost your records." },
        { title: "Reconstruct and file returns", body: "We prepare accurate returns using available records, allowable deductions, and applicable credits. This frequently reduces the balance below what the IRS's SFR assessment shows." },
        { title: "Negotiate the resulting balance", body: "Once returns are filed, we pursue the appropriate resolution for the resulting balance — OIC, installment agreement, penalty abatement, or CNC depending on your situation." },
      ],
    },
    qualify: {
      heading: "Common Reasons People Have Unfiled Returns",
      desc: "There's no wrong reason to be behind on taxes. What matters now is addressing it correctly.",
      points: [
        { title: "Life disruption", desc: "Divorce, illness, job loss, or death in the family that interrupted normal tax compliance." },
        { title: "Self-employment complexity", desc: "Business income, quarterly payments, and deduction tracking that became overwhelming." },
        { title: "Fear of the bill", desc: "Knowing you owe money and avoiding the reality — which only makes the penalties worse over time." },
        { title: "Lost records", desc: "Missing W-2s or 1099s that feel impossible to reconstruct. (We can request IRS income transcripts for any year.)" },
        { title: "Prior preparers", desc: "Reliance on a tax preparer who didn't actually file the returns they were paid to file." },
        { title: "Multi-year backlog", desc: "Being years behind and not knowing where to start — so not starting at all." },
      ],
    },
    approach: {
      heading: "How SympleTax Gets You Back Into Compliance",
      steps: [
        { number: "01", title: "Transcript Request & Year Identification", body: "We request your IRS wage and income transcripts for each year — eliminating the need to hunt down old W-2s — and identify which returns are outstanding." },
        { number: "02", title: "Return Preparation & Filing", body: "We prepare each missing return accurately, claiming all available deductions and credits. Late returns are filed with proper documentation." },
        { number: "03", title: "Balance Resolution", body: "With returns filed, we address the resulting balance through the appropriate program — frequently reducing the SFR assessment significantly before negotiating the final resolution." },
      ],
    },
    faqs: [
      { q: "How far back do I need to file?", a: "The IRS generally requires 6 years of returns for compliance, though they can assess tax on returns up to 3 years back and pursue collections indefinitely on unfiled periods." },
      { q: "What if I can't find my old records?", a: "We request IRS income transcripts which show all income reported to the IRS by employers and payers for each year. You typically don't need your original documents." },
      { q: "What if I can't afford to pay the resulting balance?", a: "Filing late returns rarely means immediate payment. We address the balance through installment agreements, Offers in Compromise, or other programs once returns are filed." },
      { q: "Will I face criminal prosecution for not filing?", a: "Criminal charges for failure to file are rare and reserved for cases involving intentional evasion. Most non-filers face only civil penalties. Filing late eliminates most criminal risk." },
    ],
    relatedSlugs: ["penalty-abatement", "offer-in-compromise", "installment-agreement", "back-taxes"],
    seoTitle: "Unfiled Tax Returns | Get Back Into IRS Compliance | SympleTax",
    seoDesc: "Resolve years of unfiled tax returns before IRS penalties compound further. SympleTax reconstructs and files missing returns, then negotiates the balance. Free consultation.",
  },

  {
    slug: "fresh-start-program",
    type: "resolution",
    eyebrow: "IRS Fresh Start Program",
    title: "The IRS's Own Program to Help Struggling Taxpayers",
    subtitle:
      "Launched in 2011, the IRS Fresh Start Program expanded access to Offers in Compromise, made installment agreements more accessible, and made it easier for millions of Americans to resolve tax debt.",
    heroStats: [
      { value: "2011", label: "Year the IRS expanded Fresh Start access" },
      { value: "Easier OIC", label: "Qualification streamlined for more taxpayers" },
      { value: "$50K", label: "Streamlined installment agreement threshold" },
    ],
    whatItIs: {
      heading: "What Is the IRS Fresh Start Program?",
      paragraphs: [
        "The IRS Fresh Start Program is not a single program but a collection of policy changes the IRS made in 2011 and 2012 to make it easier for struggling taxpayers to resolve tax debt. The initiative expanded the Offer in Compromise program, raised the threshold for streamlined installment agreements, and changed how the IRS calculates a taxpayer's \"ability to pay.\"",
        "Key Fresh Start changes include: allowing taxpayers to use the current value of their retirement accounts (with a 20% reduction) rather than full face value in OIC calculations, and expanding streamlined installment agreement eligibility.",
        "The practical result is that more taxpayers qualify for reduced settlements and more manageable payment plans than before. Working with a licensed professional who understands the Fresh Start changes can dramatically improve your resolution outcome.",
      ],
      callout: { big: "More taxpayers qualify", label: "Fresh Start expanded OIC access beyond prior rules" },
    },
    howItWorks: {
      heading: "Key Components of the Fresh Start Initiative",
      steps: [
        { title: "Expanded OIC Eligibility", body: "The IRS revised how it calculates the \"reasonable collection potential\" used in OIC calculations — particularly for self-employed taxpayers and those with retirement assets — making more taxpayers eligible." },
        { title: "Streamlined Installment Agreements", body: "Expanded eligibility so more taxpayers can set up payment plans without financial disclosure requirements." },
        { title: "Lien Relief", body: "The IRS began withdrawing tax liens more readily when taxpayers enter direct debit installment agreements with qualifying payment plans." },
        { title: "Federal Tax Lien Withdrawals", body: "The IRS expanded grounds for lien withdrawal, making it easier for taxpayers with payment plans to have liens withdrawn rather than simply released." },
      ],
    },
    qualify: {
      heading: "Does the Fresh Start Program Apply to You?",
      desc: "Fresh Start changes affect several resolution programs. Here's who benefits most:",
      points: [
        { title: "OIC candidates with retirement accounts", desc: "The revised calculation allows retirement accounts to be valued at a discount — potentially lowering your minimum offer amount significantly." },
        { title: "Taxpayers with significant debt", desc: "The raised streamlined threshold means many taxpayers can set up payment plans without submitting financial disclosure statements." },
        { title: "Self-employed taxpayers", desc: "Revised income averaging rules benefit self-employed individuals with fluctuating income." },
        { title: "Anyone currently in collection", desc: "Fresh Start lien relief provisions mean a payment plan may result in lien withdrawal — protecting your credit." },
      ],
    },
    approach: {
      heading: "How SympleTax Uses Fresh Start on Your Behalf",
      steps: [
        { number: "01", title: "Program Eligibility Review", body: "We evaluate your situation against all Fresh Start provisions to identify which programs and benefits apply to your specific case." },
        { number: "02", title: "Optimized Resolution Strategy", body: "We calculate the lowest possible offer, payment plan, or resolution using the most current IRS guidelines — including all Fresh Start expansions." },
        { number: "03", title: "Complete Case Management", body: "From application through resolution, we handle every aspect of your case — ensuring you get the full benefit of every available IRS program." },
      ],
    },
    faqs: [
      { q: "Is the Fresh Start Program still active?", a: "Yes. The Fresh Start policy changes were permanent and remain the current IRS standard for evaluating OIC and installment agreement applications." },
      { q: "Do I have to apply separately for Fresh Start?", a: "No. Fresh Start is a set of policy guidelines, not a separate application. When we prepare your OIC or installment agreement, we apply the Fresh Start rules automatically." },
      { q: "Does Fresh Start guarantee approval?", a: "No. It expands eligibility and makes qualification easier — but individual applications are still evaluated on the merits of each case." },
    ],
    relatedSlugs: ["offer-in-compromise", "installment-agreement", "penalty-abatement", "back-taxes"],
    seoTitle: "IRS Fresh Start Program | Expanded Tax Relief | SympleTax",
    seoDesc: "Take advantage of the IRS Fresh Start Program to qualify for OIC, installment agreements, and lien relief. Licensed professionals. Free consultation.",
  },

  // ── TAX PROBLEMS ───────────────────────────────────────────────────────────

  {
    slug: "back-taxes",
    type: "problem",
    eyebrow: "IRS Back Taxes",
    title: "Resolve Your IRS Back Tax Debt Before It Escalates",
    subtitle:
      "Interest compounds daily. Penalties add up fast. And the IRS collection window is 10 years — but they won't wait quietly. Back tax debt requires a strategy, not avoidance.",
    heroStats: [
      { value: "Daily", label: "Interest compounds on your outstanding balance" },
      { value: "10 years", label: "Maximum IRS collection period (CSED)" },
      { value: "Multiple paths", label: "OIC, installment, CNC, abatement — we find the right one" },
    ],
    whatItIs: {
      heading: "What Are IRS Back Taxes?",
      paragraphs: [
        "Back taxes are any taxes owed to the IRS from prior years that were not paid in full when due. This includes income taxes, self-employment taxes, payroll taxes, and penalties and interest that have accumulated on top of the original balance.",
        "Back tax debt doesn't go away. The IRS has 10 years from the date of assessment to collect — and during that period, they will use every tool available: tax liens, wage garnishments, bank levies, and seizure of assets. The longer you wait, the larger the balance grows and the more aggressive collection actions become.",
        "The good news: there are more resolution options available for back tax debt than most people realize. An Offer in Compromise, installment agreement, penalty abatement, or Currently Not Collectible status can each provide significant relief depending on your financial situation.",
      ],
      callout: { big: "10-year", label: "IRS collection clock starts the day tax is assessed" },
    },
    howItWorks: {
      heading: "How the IRS Pursues Back Tax Debt",
      steps: [
        { title: "Initial Notices", body: "The IRS sends a series of balance-due notices (CP14, CP501, CP503) giving you increasing warnings and deadlines before escalating to enforcement." },
        { title: "Final Notice of Intent to Levy", body: "After notices are ignored, the IRS sends a Final Notice (CP90 or Letter 1058) — your legal warning that levy action is imminent. You have 30 days to respond." },
        { title: "Tax Lien Filed", body: "A federal tax lien is filed in public records, attaching to all your assets and future assets. This affects your credit and ability to sell property." },
        { title: "Active Levy or Garnishment", body: "The IRS begins seizing assets: bank accounts are frozen, wages are garnished (up to 70% of disposable income), and assets may be seized." },
      ],
    },
    qualify: {
      heading: "What Resolution Options Apply to Back Taxes?",
      desc: "Every situation is different — the right path depends on your income, assets, and the size of your balance.",
      points: [
        { title: "Offer in Compromise", desc: "Settle the full balance for a fraction of what you owe based on your ability to pay. Best for taxpayers with significant debt and limited ability to pay." },
        { title: "Installment Agreement", desc: "Break the balance into monthly payments. Collections stop once the agreement is in place." },
        { title: "Penalty Abatement", desc: "Remove penalties that have inflated your balance — especially if you have a clean prior history or documented hardship." },
        { title: "Currently Not Collectible", desc: "Temporarily halt all collection if paying would create genuine financial hardship." },
        { title: "Innocent Spouse Relief", desc: "If the debt arose from a joint return and your spouse was responsible, you may not legally owe it." },
      ],
    },
    approach: {
      heading: "How SympleTax Resolves Back Tax Debt",
      steps: [
        { number: "01", title: "Full IRS Account Analysis", body: "We pull your complete IRS transcript and identify every balance, penalty, interest charge, and collection action — plus the exact date your Collection Statute Expiration Date (CSED) runs out." },
        { number: "02", title: "Resolution Strategy", body: "Based on your financials, we identify the program(s) that give you the best outcome — whether that's an OIC, payment plan, penalty abatement, or a combination." },
        { number: "03", title: "IRS Negotiation & Resolution", body: "We file Power of Attorney and handle all IRS communication. Collections are stopped or held while your case is in process. We negotiate aggressively for the best possible outcome." },
      ],
    },
    faqs: [
      { q: "How long does the IRS have to collect back taxes?", a: "The IRS has 10 years from the date of assessment — the Collection Statute Expiration Date (CSED). After this date, the debt is legally extinguished. Knowing your CSED is a critical part of our resolution strategy." },
      { q: "Can back taxes be discharged in bankruptcy?", a: "Some back taxes can be discharged in Chapter 7 bankruptcy if the tax return was filed more than 2 years ago and the tax was assessed more than 240 days ago, and the return was due more than 3 years ago. This is complex — we advise on this during your consultation." },
      { q: "Will the IRS negotiate on back taxes?", a: "Yes. The IRS negotiates regularly through Offers in Compromise, installment agreements, and other programs. The key is knowing which program to pursue and how to present your case." },
    ],
    relatedSlugs: ["offer-in-compromise", "installment-agreement", "penalty-abatement", "wage-garnishment", "tax-lien"],
    seoTitle: "IRS Back Taxes | Resolve Prior Year Tax Debt | SympleTax",
    seoDesc: "Resolve IRS back tax debt before it escalates to levies and garnishments. Multiple resolution options available. Licensed professionals. Free consultation.",
  },

  {
    slug: "wage-garnishment",
    type: "problem",
    eyebrow: "IRS Wage Garnishment",
    title: "Stop IRS Wage Garnishment — Fast",
    subtitle:
      "The IRS can take up to 70% of your disposable income before it hits your bank account. A wage levy can usually be released within 24–48 hours with proper representation.",
    heroStats: [
      { value: "Up to 70%", label: "Of your paycheck the IRS can legally take" },
      { value: "24–48 hrs", label: "Typical time to secure a release with representation" },
      { value: "Employer is notified", label: "The garnishment notice goes directly to your workplace" },
    ],
    whatItIs: {
      heading: "What Is IRS Wage Garnishment?",
      paragraphs: [
        "An IRS wage garnishment (technically called a wage levy) is when the IRS instructs your employer to withhold a portion of your paycheck and send it directly to the IRS to satisfy your outstanding tax debt. Unlike a one-time bank levy, a wage garnishment is continuous — your employer deducts the amount from every paycheck until the debt is resolved or the levy is released.",
        "The IRS sends a \"Notice of Levy on Wages, Salary, and Other Income\" (Form 668-W) to your employer. Your employer is then legally required to comply. They must withhold a significant portion of each paycheck — often leaving you with far less than you need to cover basic expenses.",
        "The most urgent step when you receive notice of a wage levy — or when your employer notifies you one has arrived — is to contact a licensed tax professional immediately. Every paycheck that passes without action costs you money that cannot be recovered.",
      ],
      callout: { big: "24–48 hrs", label: "Time to stop garnishment with proper representation" },
    },
    howItWorks: {
      heading: "How an IRS Wage Garnishment Works",
      steps: [
        { title: "IRS Sends Final Notice", body: "Before garnishing wages, the IRS is required to send a Final Notice of Intent to Levy (CP90). You have 30 days to respond before action begins." },
        { title: "Form 668-W Sent to Employer", body: "If no action is taken, the IRS sends your employer Form 668-W. Your employer must respond within 3 days and begin withholding immediately." },
        { title: "Amount Withheld Each Pay Period", body: "The IRS uses a table to calculate the exempt amount (what you're allowed to keep). Everything above that is sent to the IRS — often 50–70% of your paycheck." },
        { title: "Continuous Until Released", body: "The garnishment continues every pay period until the full balance is paid, an alternative resolution is established, or a levy release is secured." },
      ],
    },
    qualify: {
      heading: "How to Get a Wage Garnishment Released",
      desc: "Several options can result in an immediate levy release. The right one depends on your situation.",
      points: [
        { title: "Enter a resolution program", desc: "Establishing an installment agreement, submitting an OIC, or qualifying for CNC status typically results in an immediate wage levy release." },
        { title: "Demonstrate financial hardship", desc: "If the garnishment leaves you unable to pay basic living expenses, the IRS can release it based on documented hardship — even without a full resolution agreement in place." },
        { title: "Request a Collection Due Process hearing", desc: "If you haven't yet had a CDP hearing, requesting one halts the levy while the hearing is pending." },
        { title: "Pay the balance in full", desc: "Full payment immediately releases the levy — though this rarely is an option for taxpayers in this situation." },
        { title: "Challenge the assessment", desc: "If the underlying tax assessment is incorrect, disputing it can result in a levy release while the dispute is resolved." },
      ],
    },
    approach: {
      heading: "How SympleTax Stops Your Wage Garnishment",
      steps: [
        { number: "01", title: "Emergency Action", body: "We contact the IRS immediately after being retained — filing Power of Attorney and requesting a 30-day hold on collection while we prepare your resolution case. Most garnishments can be released within 24–48 hours." },
        { number: "02", title: "Resolution Strategy", body: "We identify the fastest path to a levy release — usually an installment agreement or documented hardship — and execute it before your next paycheck." },
        { number: "03", title: "Long-Term Resolution", body: "We address the underlying balance through the most favorable program available: OIC, payment plan, abatement, or CNC. The garnishment release is the first step — resolving the debt is the goal." },
      ],
    },
    faqs: [
      { q: "Can I stop a wage garnishment myself?", a: "You can call the IRS and request a levy release, but without a licensed representative and a concrete resolution plan, the IRS rarely grants them. Having an EA or CPA call on your behalf with a complete case dramatically increases the speed and success of release requests." },
      { q: "Will my employer fire me because of a garnishment?", a: "Federal law (Title III of the Consumer Credit Protection Act) prohibits employers from terminating an employee for a single wage garnishment. However, your employer is legally required to comply once they receive the IRS notice." },
      { q: "How quickly can a garnishment be released?", a: "In most cases, we can secure a garnishment release within 24–48 hours of being retained — provided we can demonstrate a path to resolution or documented hardship." },
      { q: "Can the IRS garnish my Social Security or pension?", a: "Yes. The IRS can garnish Social Security benefits (up to 15%) and pensions. Regular levy exemptions don't apply in the same way they do for wages." },
    ],
    relatedSlugs: ["tax-levy", "back-taxes", "installment-agreement", "currently-not-collectible"],
    seoTitle: "Stop IRS Wage Garnishment | Levy Release | SympleTax",
    seoDesc: "Release an IRS wage garnishment in 24–48 hours with licensed representation. SympleTax stops the levy and resolves the underlying debt. Free consultation.",
  },

  {
    slug: "tax-levy",
    type: "problem",
    eyebrow: "IRS Tax Levy",
    title: "Release an IRS Levy on Your Bank Account or Assets",
    subtitle:
      "A tax levy gives the IRS the right to seize your money and property. Bank accounts are frozen. Assets can be sold. Fast action can stop it — or recover what was taken.",
    heroStats: [
      { value: "21 days", label: "IRS bank account hold before funds are seized" },
      { value: "Assets seized", label: "Property can be sold at IRS auction" },
      { value: "Immediate", label: "Action needed — every day matters" },
    ],
    whatItIs: {
      heading: "What Is an IRS Tax Levy?",
      paragraphs: [
        "An IRS tax levy is the legal seizure of your property to satisfy a tax debt. Unlike a lien (which is a legal claim on property), a levy is the actual taking of property. Bank accounts can be frozen, wages garnished, retirement accounts seized, real estate sold, and business assets taken.",
        "The IRS must provide a series of notices before levying — including a Final Notice of Intent to Levy (CP90) giving you 30 days to respond. Many taxpayers ignore these notices, not realizing that the 30-day window is their last chance to stop the levy without legal action.",
        "Once a bank levy is executed, your bank must hold the funds for 21 days before sending them to the IRS. This 21-day window is critical — a levy release during this period can recover your funds before they're gone.",
      ],
      callout: { big: "21 days", label: "Window to recover levied bank funds before IRS takes them" },
    },
    howItWorks: {
      heading: "Types of IRS Levies",
      steps: [
        { title: "Bank Account Levy", body: "The IRS freezes funds in your bank accounts at the time the levy is served. A 21-day hold gives you time to seek a release. Only funds present on the date of levy are affected — future deposits are not (unless the levy is re-served)." },
        { title: "Wage Levy (Garnishment)", body: "A continuous levy on your wages — withholding a portion of every paycheck until the balance is resolved. See our Wage Garnishment page for details." },
        { title: "Property Seizure", body: "The IRS can seize and auction physical property — vehicles, real estate, business equipment — though this is reserved for the most serious non-compliance cases." },
        { title: "Receivables Levy", body: "The IRS can levy amounts owed to you by third parties — including customer receivables, rental income, and commissions." },
      ],
    },
    qualify: {
      heading: "Grounds for a Levy Release",
      desc: "The IRS will release a levy under specific circumstances. Our job is to establish one of these as quickly as possible.",
      points: [
        { title: "Collection Due Process rights not given", desc: "If the IRS failed to send proper notices or violated procedural requirements, the levy can be released on procedural grounds." },
        { title: "Resolution program established", desc: "Entering an installment agreement, submitting an OIC, or qualifying for CNC typically results in immediate levy release." },
        { title: "Financial hardship", desc: "If the levy creates immediate, documented financial hardship preventing you from covering basic expenses, the IRS can release it even without a complete resolution." },
        { title: "Value less than what you'd pay", desc: "If releasing the levy and entering a payment plan would yield more than the levy, the IRS has policy to release it." },
        { title: "Incorrect assessment", desc: "If the underlying tax assessment is disputed or incorrect, challenging it can result in a levy hold." },
      ],
    },
    approach: {
      heading: "How SympleTax Responds to an IRS Levy",
      steps: [
        { number: "01", title: "Immediate Response", body: "We file Power of Attorney and contact the IRS immediately — often within hours of being retained. For bank levies, the 21-day window makes speed critical." },
        { number: "02", title: "Levy Release Strategy", body: "We identify the fastest available path to release: documented hardship, resolution program enrollment, or procedural challenge — and execute it before your funds are transferred." },
        { number: "03", title: "Underlying Debt Resolution", body: "With the immediate crisis resolved, we address the underlying balance through the most advantageous program available — protecting you from future levy action." },
      ],
    },
    faqs: [
      { q: "Can the IRS levy my retirement account?", a: "Yes. The IRS can levy IRA, 401(k), and other retirement accounts. However, early-withdrawal penalties are waived when funds are levied by the IRS. This is still devastating and should be avoided at all costs." },
      { q: "What if the IRS already took my bank funds?", a: "If the 21-day hold period has passed, the funds are typically gone. However, if procedural violations occurred, it may be possible to pursue a recovery." },
      { q: "Can I get a levy released after funds are taken?", a: "If the levy was improper or if you can demonstrate significant hardship from the seizure, it may be possible to recover funds. This is fact-specific and requires immediate action." },
      { q: "Can the IRS levy jointly held accounts?", a: "Yes. Joint bank accounts and property can be levied even if only one owner owes the tax. The innocent co-owner may have a claim for their share." },
    ],
    relatedSlugs: ["wage-garnishment", "tax-lien", "back-taxes", "currently-not-collectible"],
    seoTitle: "IRS Tax Levy Release | Bank Account & Asset Seizure | SympleTax",
    seoDesc: "Stop an IRS bank levy or asset seizure. SympleTax acts immediately to release levies and recover funds within the 21-day window. Free consultation.",
  },

  {
    slug: "tax-lien",
    type: "problem",
    eyebrow: "Federal Tax Lien",
    title: "Remove or Resolve an IRS Tax Lien on Your Property",
    subtitle:
      "A federal tax lien attaches to all your current and future assets — blocking refinancing, sale of property, and access to credit. Several options exist to remove or reduce its impact.",
    heroStats: [
      { value: "Public record", label: "Filed with county recorder — visible to anyone" },
      { value: "All assets", label: "Attaches to property, vehicles, and financial accounts" },
      { value: "Discharge, withdrawal, subordination", label: "Three ways to reduce lien impact" },
    ],
    whatItIs: {
      heading: "What Is a Federal Tax Lien?",
      paragraphs: [
        "A federal tax lien is the IRS's legal claim against all of your current and future property when you fail to pay a tax debt after being notified of it. The lien attaches to everything you own — real estate, vehicles, financial accounts, and any future assets you acquire.",
        "The lien becomes public when the IRS files a Notice of Federal Tax Lien (NFTL) in public records with your county or state recorder. This public filing alerts creditors to the IRS's prior claim on your assets and can severely damage your credit, prevent refinancing or sale of property, and make it difficult to get business financing.",
        "Importantly, a lien is different from a levy. A lien is a legal claim — it doesn't take your property. But it blocks your ability to sell, refinance, or use your assets as collateral without addressing the IRS debt first.",
      ],
      callout: { big: "All assets", label: "Current and future property is subject to the lien until resolved" },
    },
    howItWorks: {
      heading: "Options to Remove or Reduce a Federal Tax Lien",
      steps: [
        { title: "Lien Withdrawal", body: "The IRS withdraws the public Notice of Federal Tax Lien — removing it from public records as if it never existed. Available when entering a direct debit installment agreement under Fresh Start criteria." },
        { title: "Lien Release", body: "The lien is released when the tax debt is fully paid, an OIC is accepted, or the collection statute expires. A release removes the IRS's legal claim but remains in credit records." },
        { title: "Lien Discharge", body: "Removes the lien from a specific property (e.g., to allow a sale) while leaving it attached to other assets. Allows a property transaction to proceed." },
        { title: "Lien Subordination", body: "Allows another creditor's claim to take priority over the IRS lien — making it possible to obtain refinancing or a mortgage even with a lien in place." },
      ],
    },
    qualify: {
      heading: "When Can You Get a Lien Withdrawn or Removed?",
      desc: "The method available to you depends on your balance, payment status, and type of resolution.",
      points: [
        { title: "Direct debit compliance", desc: "The Fresh Start initiative allows lien withdrawal when you enter a qualifying direct debit installment agreement." },
        { title: "OIC accepted", desc: "When an OIC is accepted and paid, the lien is released as part of the settlement." },
        { title: "Property sale pending", desc: "If you're selling a property and proceeds will satisfy the lien, we can arrange a discharge to allow the sale to close." },
        { title: "Refinancing needed", desc: "Subordination allows a new mortgage lender to take priority over the IRS lien — enabling a refinance even with an active lien." },
        { title: "IRS violated procedures", desc: "If the lien was filed improperly or without required notice, a Collection Due Process challenge may result in withdrawal." },
      ],
    },
    approach: {
      heading: "How SympleTax Handles Federal Tax Liens",
      steps: [
        { number: "01", title: "Lien Analysis", body: "We review the lien filing, your assets, and outstanding balance to determine which lien relief option applies and what path resolves both the lien and the underlying debt most effectively." },
        { number: "02", title: "Resolution or Relief Application", body: "We pursue the appropriate relief — withdrawal, discharge, subordination, or lien release through OIC or installment agreement — handling all IRS correspondence." },
        { number: "03", title: "Debt Resolution", body: "With the lien addressed, we finalize resolution of the underlying tax balance through the most favorable available program." },
      ],
    },
    faqs: [
      { q: "How long does a federal tax lien last?", a: "A lien is valid for 10 years from the date of assessment (the CSED). It can be renewed for another 10 years before the statute expires if the IRS files a re-file notice." },
      { q: "Does paying the tax balance remove the lien?", a: "Yes — paying the full balance results in a lien release within 30 days. However, a release is different from a withdrawal. A withdrawal removes the public filing; a release notes the lien is satisfied but may remain in records." },
      { q: "Can a lien prevent me from selling my home?", a: "A lien doesn't prevent a sale — but the IRS must be paid from the proceeds. A discharge can remove the lien from the specific property if proceeds satisfy it." },
      { q: "Will a tax lien affect my credit score?", a: "Tax liens no longer appear on credit reports from the three major bureaus (as of 2018) — but they are still public records visible in court filings and county records, and affect mortgage underwriting." },
    ],
    relatedSlugs: ["tax-levy", "back-taxes", "offer-in-compromise", "installment-agreement"],
    seoTitle: "Federal Tax Lien Removal | IRS Lien Release & Withdrawal | SympleTax",
    seoDesc: "Remove or resolve an IRS federal tax lien through discharge, withdrawal, or full resolution. Licensed professionals. Free consultation.",
  },

  {
    slug: "irs-audit",
    type: "problem",
    eyebrow: "IRS Audit",
    title: "IRS Audit Representation — Don't Face It Alone",
    subtitle:
      "An IRS audit is not an accusation — but what you say and provide can dramatically affect the outcome. Professional representation protects you from making costly mistakes under pressure.",
    heroStats: [
      { value: "3 types", label: "Correspondence, Office, and Field audits" },
      { value: "Most common", label: "Are correspondence audits — handled entirely by mail" },
      { value: "Professional rep", label: "Dramatically improves outcomes in all audit types" },
    ],
    whatItIs: {
      heading: "What Is an IRS Audit?",
      paragraphs: [
        "An IRS audit is a formal examination of your tax return to verify that income, deductions, and credits were accurately reported. Most audits are triggered by statistical anomalies, mismatched information from third-party reports (W-2s, 1099s), or random selection.",
        "Being audited doesn't mean the IRS thinks you cheated. Many audits are simply automated checks on specific line items. However, your responses — and what you choose to provide — can expand the scope of the audit, trigger additional years, or result in an increased assessment if not handled carefully.",
        "The most important thing to know about audits: you have the right to professional representation and you should not communicate with the IRS directly during an audit if a licensed professional can represent you instead. Anything you say can and will be used to increase your assessment.",
      ],
      callout: { big: "Scope control", label: "What you provide determines what the IRS examines — representation limits your exposure" },
    },
    howItWorks: {
      heading: "Types of IRS Audits",
      steps: [
        { title: "Correspondence Audit", body: "The most common type. Conducted entirely by mail. The IRS requests documentation for a specific item on your return. Typically limited in scope — but can escalate." },
        { title: "Office Audit", body: "You're asked to bring specific records to an IRS office for review. More comprehensive than correspondence audits. Preparation and representation are critical." },
        { title: "Field Audit", body: "An IRS revenue agent comes to your home or business to conduct a comprehensive examination. Reserved for complex or high-value cases. Requires thorough preparation." },
        { title: "TCMP Audit", body: "A random, comprehensive examination of every line on your return used by the IRS to update statistical models. Rare, but highly intrusive." },
      ],
    },
    qualify: {
      heading: "Common Audit Triggers",
      desc: "Understanding why returns are selected helps you respond effectively — and avoid future scrutiny.",
      points: [
        { title: "Unreported income", desc: "Income reported to the IRS by third parties (1099s, W-2s) that doesn't match your return is the most common audit trigger." },
        { title: "High deductions relative to income", desc: "Unusually large charitable contributions, home office deductions, or business expenses relative to your income can trigger review." },
        { title: "Self-employment income", desc: "Schedule C filers with consistent losses or high expense ratios are statistically more likely to be audited." },
        { title: "Cash-intensive businesses", desc: "Businesses that primarily operate in cash are regularly audited for underreported income." },
        { title: "Prior audit history", desc: "Returns from taxpayers with prior audit findings are more likely to be selected again." },
        { title: "Large, round deductions", desc: "Even dollar amounts ($10,000 exactly, $5,000 exactly) can suggest estimates rather than actual documentation." },
      ],
    },
    approach: {
      heading: "How SympleTax Represents You in an Audit",
      steps: [
        { number: "01", title: "Audit Review & Strategy", body: "We review the audit notice, examine the specific items being questioned, and assess your documentation. We develop a response strategy that addresses the IRS's concerns without expanding the scope of the audit." },
        { number: "02", title: "Document Preparation & IRS Communication", body: "We file Power of Attorney and handle all communication with the IRS auditor. We provide exactly what the audit requires — and nothing more — to limit additional scrutiny." },
        { number: "03", title: "Assessment Challenge or Settlement", body: "If the auditor proposes additional tax, we evaluate and challenge it through the appropriate IRS appeals process. Many proposed assessments are reduced or eliminated on appeal." },
      ],
    },
    faqs: [
      { q: "What if I can't find all my receipts?", a: "Inadequate documentation doesn't automatically mean you lose the deduction. We work with what you have, use allowable reconstruction methods, and present your case in the strongest possible light." },
      { q: "How long can an audit last?", a: "Correspondence audits are typically resolved in 3–6 months. Office and field audits can take 6–24 months depending on complexity. We work to resolve audits as quickly as possible." },
      { q: "Can the IRS audit years I've already filed?", a: "The IRS has 3 years from the date of filing to audit a return (6 years if there's a substantial understatement, no limit if fraud is alleged). Knowing which years are still open affects your strategy." },
      { q: "What happens if the IRS finds additional tax owed?", a: "The auditor issues a notice proposing additional tax, penalties, and interest. You have 30 days to respond. We can accept, dispute, or appeal the proposed assessment depending on whether it's accurate." },
    ],
    relatedSlugs: ["back-taxes", "penalty-abatement", "unfiled-returns", "offer-in-compromise"],
    seoTitle: "IRS Audit Representation | Licensed Tax Professionals | SympleTax",
    seoDesc: "Facing an IRS audit? Don't respond alone. SympleTax provides licensed audit representation that limits scope and protects your interests. Free consultation.",
  },
];

// ─── Lookup helpers ─────────────────────────────────────────────────────────

export const ALL_SLUGS = DATA.map((d) => d.slug);

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return DATA.find((d) => d.slug === slug);
}

export function getRelatedServices(slugs: string[]): ServiceData[] {
  return slugs.map((s) => DATA.find((d) => d.slug === s)).filter(Boolean) as ServiceData[];
}
