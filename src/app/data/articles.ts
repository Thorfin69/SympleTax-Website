// ─── Types ────────────────────────────────────────────────────────────────────

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id: string }
  | { type: "h3"; text: string; id: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; text: string; variant: "info" | "warning" | "tip" }
  | { type: "cta" };

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  dateISO: string;
  featured?: boolean;
  author: string;
  content: ContentBlock[];
  relatedSlugs: string[];
  metaTitle: string;
  metaDescription: string;
}

// ─── Categories ───────────────────────────────────────────────────────────────

export const CATEGORIES = [
  "All",
  "IRS Help",
  "Offer in Compromise",
  "Tax Debt",
  "Tax Tips",
  "Legal Basics",
];

// Category → thumbnail gradient [from, to]
export const CATEGORY_GRADIENT: Record<string, [string, string]> = {
  "IRS Help":            ["#1e3a8a", "#0f172a"],
  "Offer in Compromise": ["#00A4A4", "#007a7a"],
  "Tax Debt":            ["#7c2d12", "#1c1917"],
  "Tax Tips":            ["#5b21b6", "#1e1b4b"],
  "Legal Basics":        ["#1e293b", "#0f172a"],
};

// ─── Articles ─────────────────────────────────────────────────────────────────

export const ARTICLES: Article[] = [
  // ── 01. OIC (Featured) ──────────────────────────────────────────────────────
  {
    slug: "offer-in-compromise",
    title: "What Is an Offer in Compromise — And Do You Qualify?",
    excerpt:
      "An Offer in Compromise lets you settle your IRS debt for less than you owe. Here's exactly how it works, who qualifies, and what the process looks like from start to finish.",
    category: "Offer in Compromise",
    readTime: "7 min read",
    date: "March 2026",
    dateISO: "2026-03-15",
    featured: true,
    author: "SympleTax Team",
    metaTitle: "What Is an Offer in Compromise? | SympleTax",
    metaDescription:
      "Learn how the IRS Offer in Compromise program works, whether you qualify, and how to apply correctly to settle your tax debt for less.",
    relatedSlugs: ["installment-agreement", "penalty-abatement", "currently-not-collectible"],
    content: [
      {
        type: "p",
        text: "If you owe the IRS more than you can realistically pay, an Offer in Compromise (OIC) might be your most powerful option. It's a formal IRS program that lets you settle your tax debt for less than the full amount you owe — sometimes significantly less. But it's not a magic solution, and the IRS approves fewer than half of all applications.",
      },
      { type: "h2", id: "what-is-oic", text: "What Exactly Is an Offer in Compromise?" },
      {
        type: "p",
        text: "An Offer in Compromise is a legal agreement between you and the IRS in which the IRS agrees to accept a reduced amount to satisfy your total tax liability. Once accepted and fully paid, the remaining balance — including penalties and accrued interest — is permanently forgiven.",
      },
      {
        type: "p",
        text: "The IRS will only accept an OIC if it determines that the amount you're offering represents the most it can realistically collect from you given your current financial situation. This calculation — called your Reasonable Collection Potential (RCP) — is at the heart of every OIC decision.",
      },
      { type: "h2", id: "do-you-qualify", text: "Do You Actually Qualify?" },
      {
        type: "p",
        text: "The IRS applies a strict eligibility test. Before reviewing your offer amount, they confirm you meet all of the following requirements:",
      },
      {
        type: "ul",
        items: [
          "All required tax returns have been filed — unfiled returns disqualify you immediately",
          "You've made all required estimated tax payments for the current year",
          "You're not in an open bankruptcy proceeding",
          "You're not currently under criminal tax investigation",
          "You've received at least one bill for the tax debt included in the offer",
        ],
      },
      {
        type: "p",
        text: "Meeting these requirements just gets you through the door. The IRS then evaluates whether your offer amount is reasonable — which brings us to the RCP calculation.",
      },
      { type: "h2", id: "how-irs-calculates", text: "How the IRS Calculates What You'll Pay" },
      {
        type: "p",
        text: "Your Reasonable Collection Potential is the minimum the IRS will accept. It's based on two components:",
      },
      {
        type: "ul",
        items: [
          "Net Realizable Value of Assets: The IRS totals all your assets — bank accounts, real estate equity, vehicles, retirement accounts — and applies 80% of current market value after subtracting outstanding liabilities.",
          "Future Income: The IRS multiplies your monthly disposable income (income minus IRS-allowed living expenses) by 12 for a lump-sum offer or 24 for a periodic payment offer.",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        text: "Example: If your net assets total $8,000 and your disposable income is $300/month, your RCP for a lump-sum offer would be $8,000 + ($300 × 12) = $11,600. That's the floor the IRS will accept.",
      },
      { type: "h2", id: "three-types", text: "The Three Types of OIC" },
      { type: "h3", id: "doubt-liability", text: "1. Doubt as to Liability" },
      {
        type: "p",
        text: "You genuinely believe you don't owe the amount the IRS claims — perhaps due to an error on a previous return or a disputed audit finding. This type doesn't require financial hardship; you simply need evidence that the IRS calculation is wrong.",
      },
      { type: "h3", id: "doubt-collectibility", text: "2. Doubt as to Collectibility" },
      {
        type: "p",
        text: "This is the most common type. You agree you owe the tax, but you don't have the income or assets to ever pay it in full. The IRS accepts a reduced amount because it's the most they'll realistically collect from you before the 10-year collection statute expires.",
      },
      { type: "h3", id: "eff-tax-admin", text: "3. Effective Tax Administration" },
      {
        type: "p",
        text: "You could technically pay the full amount, but doing so would create severe economic hardship or would be fundamentally unfair given exceptional circumstances. This is the rarest type and requires compelling documentation.",
      },
      { type: "cta" },
      { type: "h2", id: "application-process", text: "The Application Process, Step by Step" },
      {
        type: "ol",
        items: [
          "Confirm eligibility — verify all returns are filed and estimated payments are current",
          "Calculate your RCP — document your income, expenses, and assets on IRS Form 433-A (OIC)",
          "Determine your offer amount — it must equal or exceed your calculated RCP",
          "Submit the application — Form 656, Form 433-A, the $205 application fee, and your first payment",
          "Wait for IRS review — OIC cases typically take 6 to 24 months to process",
          "Respond promptly to any IRS information requests during review",
          "Once accepted, complete all required payments and maintain compliance for 5 years",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        text: "Important: During the OIC review period, the IRS collection statute (normally 10 years) is suspended. Collection actions are typically paused — but existing levies may continue until the IRS formally acknowledges your offer is under review.",
      },
      { type: "h2", id: "common-mistakes", text: "The Most Common Mistakes That Sink Applications" },
      {
        type: "ul",
        items: [
          "Submitting with unfiled returns — automatic disqualification, no exceptions",
          "Underestimating asset values or income — the IRS can verify through your tax transcripts",
          "Missing deadlines for IRS information requests — they'll close the case and return your offer",
          "Offering far below your RCP — the IRS calculates this independently and will reject low-ball offers",
          "Non-compliance after acceptance — the IRS can revoke an accepted OIC if you fall behind on future taxes",
        ],
      },
      { type: "h2", id: "hire-a-professional", text: "Should You Go It Alone or Hire a Professional?" },
      {
        type: "p",
        text: "The OIC is one of the most complex IRS programs. The application involves detailed financial disclosure forms, supporting documentation, and knowledge of IRS collection standards — which can work in your favor if you know how to apply them correctly.",
      },
      {
        type: "p",
        text: "Mistakes on the application don't just result in rejection — they can expose you to additional IRS scrutiny or waive legal protections you didn't know you had. A licensed tax professional who handles OICs regularly can assess your true RCP, maximize your chances of acceptance, and protect you throughout the process.",
      },
      {
        type: "p",
        text: "At SympleTax, we evaluate every case for OIC eligibility as part of our free initial consultation. If you qualify, we'll tell you — and if you don't, we'll tell you that too and explain what other options work better for your specific situation.",
      },
    ],
  },

  // ── 02. CP90 ─────────────────────────────────────────────────────────────────
  {
    slug: "irs-cp90-notice",
    title: "IRS CP90 Notice: What It Means and How to Respond",
    excerpt:
      "A CP90 is one of the IRS's most serious notices — it's a Final Notice of Intent to Levy. If you received one, you have 30 days to respond before the IRS can seize your assets.",
    category: "IRS Help",
    readTime: "5 min read",
    date: "March 2026",
    dateISO: "2026-03-10",
    author: "SympleTax Team",
    metaTitle: "IRS CP90 Notice: What to Do | SympleTax",
    metaDescription:
      "Received an IRS CP90 notice? Learn what it means, your legal rights, and how to respond before the 30-day deadline expires.",
    relatedSlugs: ["wage-garnishment", "tax-lien-vs-levy", "offer-in-compromise"],
    content: [
      {
        type: "p",
        text: "Opening a CP90 notice can feel terrifying — and it should command your immediate attention. This is the IRS formally telling you it intends to seize your property: your bank accounts, wages, retirement accounts, or physical assets. But you have legal rights, and you have 30 days to exercise them.",
      },
      { type: "h2", id: "what-is-cp90", text: "What Is the CP90 Notice?" },
      {
        type: "p",
        text: "The CP90 is the IRS's Final Notice of Intent to Levy and Notice of Your Right to a Hearing. It arrives after the IRS has sent prior notices and bills that went unanswered. At this point, the IRS has exhausted its standard collection sequence and is authorized to take direct action.",
      },
      { type: "h2", id: "your-window", text: "Your 30-Day Window — and What to Do With It" },
      {
        type: "p",
        text: "From the date printed on the CP90, you have 30 days to request a Collection Due Process (CDP) hearing. This is a formal right guaranteed by law — and it temporarily suspends the IRS from levying your assets while the hearing is pending.",
      },
      {
        type: "ul",
        items: [
          "File Form 12153 (Request for a Collection Due Process or Equivalent Hearing) within 30 days",
          "Check 'Levy' as the type of collection action you're requesting a hearing about",
          "Use this window to explore resolution options — installment agreements, OIC, CNC status",
          "An experienced representative can negotiate directly with the IRS during this period",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        text: "Missing the 30-day deadline doesn't eliminate your rights entirely, but it significantly weakens your position. The IRS can begin levying immediately once the window closes.",
      },
      { type: "h2", id: "what-irs-can-seize", text: "What Can the IRS Actually Seize?" },
      {
        type: "p",
        text: "With a levy in effect, the IRS has broad authority. This includes wages (through ongoing wage garnishment), bank account balances, Social Security benefits, retirement account distributions, rental income, and in some cases, physical property that is seized and auctioned.",
      },
      { type: "cta" },
      { type: "h2", id: "next-steps", text: "Next Steps After Receiving a CP90" },
      {
        type: "p",
        text: "Do not wait. The 30-day window closes faster than you'd expect, and each day of delay narrows your options. Contact a licensed tax professional immediately to review your specific situation. Acting quickly within this window frequently results in a significantly better outcome — and often stops the levy before it starts.",
      },
    ],
  },

  // ── 03. Wage Garnishment ──────────────────────────────────────────────────────
  {
    slug: "wage-garnishment",
    title: "Wage Garnishment: How to Stop the IRS from Taking Your Paycheck",
    excerpt:
      "The IRS can garnish a significant portion of your paycheck with very little warning. Learn how wage garnishments work, your rights, and the fastest ways to get a release.",
    category: "Tax Debt",
    readTime: "6 min read",
    date: "February 2026",
    dateISO: "2026-02-20",
    author: "SympleTax Team",
    metaTitle: "How to Stop IRS Wage Garnishment | SympleTax",
    metaDescription:
      "The IRS can garnish your wages — but you can stop it. Learn your options for getting an IRS wage levy released quickly.",
    relatedSlugs: ["irs-cp90-notice", "currently-not-collectible", "installment-agreement"],
    content: [
      {
        type: "p",
        text: "IRS wage garnishment — technically called a wage levy — is one of the most disruptive collection actions the IRS can take. Unlike a one-time bank levy, it's continuous: every paycheck, your employer is legally required to send a portion directly to the IRS until the debt is resolved or the levy is released.",
      },
      { type: "h2", id: "how-much", text: "How Much Can the IRS Garnish?" },
      {
        type: "p",
        text: "The IRS can garnish a substantial portion of your wages. Federal law provides a small exemption for basic living expenses based on your filing status and number of dependents — but what remains after the exemption, sometimes 50–70% of your take-home pay, can be taken. Your employer receives IRS Publication 1494 tables to calculate the exact exempt amount.",
      },
      { type: "h2", id: "how-to-stop", text: "How to Get a Wage Levy Released" },
      {
        type: "ul",
        items: [
          "Enter into an installment agreement — the IRS must release the levy once a payment plan is formally established",
          "Demonstrate financial hardship — if the levy prevents you from meeting basic living expenses, you may qualify for relief",
          "Qualify for Currently Not Collectible status — the IRS will release the levy if you can't afford to pay",
          "Pay the full balance — the levy releases immediately upon full satisfaction of the debt",
          "Submit an Offer in Compromise — an accepted offer triggers levy release",
          "File for bankruptcy — an automatic stay immediately stops all IRS collection actions",
        ],
      },
      { type: "cta" },
      { type: "h2", id: "how-fast", text: "How Fast Can a Levy Be Released?" },
      {
        type: "p",
        text: "A wage levy can often be released within 24 to 48 hours once the IRS approves a resolution arrangement. Time is critical — every day the levy continues, more of your income disappears. A licensed tax professional can frequently expedite this process significantly compared to navigating the IRS directly on your own.",
      },
    ],
  },

  // ── 04. CNC ───────────────────────────────────────────────────────────────────
  {
    slug: "currently-not-collectible",
    title: "Currently Not Collectible Status: A Lifeline When You Can't Pay",
    excerpt:
      "If you genuinely cannot pay your tax debt, the IRS can put your account in Currently Not Collectible status — temporarily halting all collection actions while you get back on your feet.",
    category: "Tax Debt",
    readTime: "5 min read",
    date: "February 2026",
    dateISO: "2026-02-12",
    author: "SympleTax Team",
    metaTitle: "IRS Currently Not Collectible Status Explained | SympleTax",
    metaDescription:
      "Currently Not Collectible (CNC) status pauses IRS collection actions when you can't afford to pay. Learn how to qualify and what it means for your tax debt.",
    relatedSlugs: ["offer-in-compromise", "wage-garnishment", "installment-agreement"],
    content: [
      {
        type: "p",
        text: "Currently Not Collectible (CNC) status is the IRS's formal acknowledgment that you cannot currently pay your tax debt without compromising your ability to cover basic living expenses. It's not debt forgiveness — but it buys critical time and stops collection actions in their tracks.",
      },
      { type: "h2", id: "what-cnc-does", text: "What CNC Status Does (and Doesn't Do)" },
      {
        type: "ul",
        items: [
          "Immediately pauses all IRS collection activity — no levies, garnishments, or new liens",
          "Does NOT stop interest and penalties from accruing on your outstanding balance",
          "Does NOT eliminate the debt — it remains on your account and the IRS reviews your status annually",
          "Does NOT reset the 10-year collection statute — the clock keeps running",
          "Can be terminated if your income increases significantly above the CNC threshold",
        ],
      },
      { type: "h2", id: "how-to-qualify", text: "How to Qualify for CNC Status" },
      {
        type: "p",
        text: "The IRS compares your monthly income to your allowable living expenses using IRS National and Local Standards. If your income minus allowable expenses leaves no disposable income available for IRS payments, you may qualify for CNC. Full financial disclosure via Form 433-F or 433-A is typically required.",
      },
      { type: "cta" },
      { type: "h2", id: "statute-advantage", text: "The Statute of Limitations Strategy" },
      {
        type: "p",
        text: "The IRS has 10 years from the date of tax assessment to collect a debt. CNC status does not pause this clock — unlike an OIC application, which does. For some taxpayers, maintaining CNC status until the statute expires is a legitimate path to resolving the debt without ever making a payment. This strategy requires careful planning and compliance monitoring with a licensed professional.",
      },
    ],
  },

  // ── 05. Unfiled Returns ───────────────────────────────────────────────────────
  {
    slug: "unfiled-tax-returns",
    title: "How Many Years of Unfiled Tax Returns Is Too Many?",
    excerpt:
      "Missing one year of tax returns is common. Missing several is a serious IRS problem. We explain the consequences, the statute of limitations, and how to come back into compliance.",
    category: "Tax Debt",
    readTime: "8 min read",
    date: "February 2026",
    dateISO: "2026-02-05",
    author: "SympleTax Team",
    metaTitle: "Unfiled Tax Returns: How to Come Back Into Compliance | SympleTax",
    metaDescription:
      "Multiple years of unfiled tax returns create serious IRS exposure — but there's a clear path to compliance. Learn what the IRS requires and how to resolve it.",
    relatedSlugs: ["penalty-abatement", "offer-in-compromise", "currently-not-collectible"],
    content: [
      {
        type: "p",
        text: "Millions of Americans have unfiled tax returns. Some miss one year and catch up the next. Others fall behind by five, ten, or more years — and by then, the problem feels impossible to fix. It isn't. But the longer you wait, the more complicated and expensive it becomes.",
      },
      { type: "h2", id: "what-happens", text: "What Happens When You Don't File" },
      {
        type: "ul",
        items: [
          "Failure-to-file penalty: 5% of unpaid taxes per month, up to 25% — and it starts accruing immediately",
          "Failure-to-pay penalty: 0.5% per month on top of compounding interest",
          "The IRS may file a Substitute for Return (SFR) on your behalf — which typically results in a significantly higher tax bill with no deductions",
          "The 10-year collection statute doesn't begin until you file — unfiled returns mean the IRS's window to collect never closes",
          "Willful non-filing for 6+ consecutive years carries criminal prosecution risk",
        ],
      },
      { type: "h2", id: "how-many-years", text: "How Many Years Does the IRS Require?" },
      {
        type: "p",
        text: "The IRS formally requires the last 6 years of returns to bring a taxpayer into compliance. This is IRS policy — most resolution programs (installment agreements, OICs, CNC status) require that the last 6 years are filed before the IRS will negotiate. However, if older returns generated refunds you're owed, it may be worth filing beyond 6 years.",
      },
      { type: "cta" },
      { type: "h2", id: "voluntary-compliance", text: "The Safest Path: Voluntary Compliance" },
      {
        type: "p",
        text: "Coming forward voluntarily — before the IRS contacts you — is always the stronger position. The IRS treats voluntary filers more favorably than those who file only after receiving enforcement notices. A licensed tax professional can prepare and submit multiple years of returns simultaneously, and can often negotiate penalty abatement as part of the process — reducing what you owe from day one.",
      },
    ],
  },

  // ── 06. Penalty Abatement ────────────────────────────────────────────────────
  {
    slug: "penalty-abatement",
    title: "Penalty Abatement: How to Get the IRS to Waive Your Penalties",
    excerpt:
      "The IRS charges substantial penalties for late filing and late payment — but they can be waived under the right circumstances. Here's how First Time Abatement works and how to apply.",
    category: "Tax Tips",
    readTime: "6 min read",
    date: "January 2026",
    dateISO: "2026-01-28",
    author: "SympleTax Team",
    metaTitle: "IRS Penalty Abatement: How to Get Penalties Waived | SympleTax",
    metaDescription:
      "First Time Abatement and Reasonable Cause penalty relief can eliminate thousands in IRS penalties. Learn how to qualify and apply for penalty abatement.",
    relatedSlugs: ["unfiled-tax-returns", "installment-agreement", "offer-in-compromise"],
    content: [
      {
        type: "p",
        text: "IRS penalties can dramatically increase what you owe. A 25% failure-to-file penalty on a $60,000 tax liability adds $15,000 to your balance — before interest. The good news: the IRS has penalty abatement programs that can eliminate these charges if you know how to access them.",
      },
      { type: "h2", id: "first-time-abatement", text: "First Time Abatement (FTA)" },
      {
        type: "p",
        text: "First Time Abatement is the IRS's most accessible penalty waiver program. You qualify if you have a clean compliance history — meaning you haven't received significant penalties (or had them waived) in the three tax years prior to the year you're requesting relief for. The IRS will waive failure-to-file, failure-to-pay, and failure-to-deposit penalties.",
      },
      {
        type: "callout",
        variant: "tip",
        text: "FTA can often be requested by phone. A brief call with the right language can eliminate hundreds or thousands in penalties — but IRS agents are not required to volunteer this option. You need to ask for it by name.",
      },
      { type: "h2", id: "reasonable-cause", text: "Reasonable Cause Relief" },
      {
        type: "p",
        text: "If you don't qualify for FTA (or have already used it), Reasonable Cause relief is available when you can demonstrate your failure to file or pay was due to circumstances genuinely beyond your control — serious illness, natural disaster, death of a close family member, fire, or documented reliance on incorrect professional advice.",
      },
      { type: "cta" },
      { type: "h2", id: "how-to-apply", text: "How to Apply for Penalty Abatement" },
      {
        type: "ol",
        items: [
          "Bring your account into compliance first — file any missing returns and pay what you can",
          "Call the IRS at the number on your notice or submit a written request",
          "For FTA: state your prior clean history and explicitly request abatement under the First Time Penalty Abatement administrative waiver",
          "For Reasonable Cause: provide a detailed written explanation with supporting documentation",
          "If denied, file a formal appeal with the IRS Office of Appeals within 30 days",
        ],
      },
    ],
  },

  // ── 07. Lien vs Levy ─────────────────────────────────────────────────────────
  {
    slug: "tax-lien-vs-levy",
    title: "IRS Tax Lien vs. Tax Levy: What's the Difference?",
    excerpt:
      "Most people confuse these two, but they're very different IRS actions. A lien is a legal claim on your property. A levy is the actual seizure of it.",
    category: "Legal Basics",
    readTime: "5 min read",
    date: "January 2026",
    dateISO: "2026-01-15",
    author: "SympleTax Team",
    metaTitle: "IRS Tax Lien vs. Tax Levy: The Difference Explained | SympleTax",
    metaDescription:
      "Understand the difference between an IRS tax lien and a tax levy, how each affects your assets and credit, and what to do about them.",
    relatedSlugs: ["irs-cp90-notice", "wage-garnishment", "offer-in-compromise"],
    content: [
      {
        type: "p",
        text: "These two terms cause enormous confusion — and that confusion can cost you. A tax lien and a tax levy are both serious IRS collection tools, but they work very differently and require different responses.",
      },
      { type: "h2", id: "what-is-a-lien", text: "What Is a Tax Lien?" },
      {
        type: "p",
        text: "A federal tax lien is a legal claim the IRS places on all of your current and future property when you fail to pay a tax debt after receiving a demand for payment. A lien doesn't seize anything — it's a legal encumbrance that puts other creditors on notice that the government has a priority claim on your assets. A Notice of Federal Tax Lien is filed publicly with county records, which can damage your credit and complicate real estate transactions.",
      },
      { type: "h2", id: "what-is-a-levy", text: "What Is a Tax Levy?" },
      {
        type: "p",
        text: "A tax levy is the actual physical seizure of property. The IRS uses levies to take bank account funds, garnish wages on an ongoing basis, intercept Social Security payments, and in serious cases, seize and sell physical property. A levy requires prior notice and provides a right to a hearing — but once in effect, its impact is immediate.",
      },
      {
        type: "callout",
        variant: "info",
        text: "Key distinction: A lien claims what you own (your assets become collateral for the tax debt). A levy takes what you own — the IRS physically removes the asset or redirects income directly to itself.",
      },
      { type: "h2", id: "how-to-resolve", text: "How to Resolve a Lien or Levy" },
      {
        type: "ul",
        items: [
          "Lien: Pay the debt in full (lien released within 30 days), enter a qualifying installment agreement, or apply for lien discharge or subordination for a specific property transaction",
          "Levy: Resolve the underlying debt — a payment plan, hardship status, OIC, or full payment will trigger levy release",
          "Both: Engage a licensed professional to negotiate the fastest path to release",
        ],
      },
      { type: "cta" },
    ],
  },

  // ── 08. When to Hire ─────────────────────────────────────────────────────────
  {
    slug: "when-to-hire-professional",
    title: "5 Signs You Need a Tax Professional — Not a DIY Solution",
    excerpt:
      "Plenty of minor tax issues are solvable on your own. But some situations demand a licensed professional. Here are five scenarios where going it alone is a costly mistake.",
    category: "Tax Tips",
    readTime: "4 min read",
    date: "January 2026",
    dateISO: "2026-01-08",
    author: "SympleTax Team",
    metaTitle: "5 Signs You Need a Tax Professional | SympleTax",
    metaDescription:
      "Know when your tax situation demands a licensed professional. These five signs signal it's time to stop going it alone with the IRS.",
    relatedSlugs: ["offer-in-compromise", "unfiled-tax-returns", "irs-cp90-notice"],
    content: [
      {
        type: "p",
        text: "Not every tax issue requires professional help. A simple return, a minor math error, or a basic payment plan can often be handled independently. But certain situations carry consequences serious enough that navigating them without expert guidance is a gamble you shouldn't take.",
      },
      { type: "h2", id: "sign-1", text: "1. You've Received a Final Notice or Intent to Levy" },
      {
        type: "p",
        text: "Notices like the CP90 (Final Notice of Intent to Levy) or LT11 (Notice of Your Right to a Hearing and Notice of Intent to Levy) are not routine correspondence. They trigger legal deadlines — typically 30 days — during which you must act or lose critical rights. Navigating Collection Due Process procedures requires specific IRS knowledge that most individuals simply don't have.",
      },
      { type: "h2", id: "sign-2", text: "2. You Have Multiple Years of Unfiled Returns" },
      {
        type: "p",
        text: "Catching up on one or two years is manageable. Five or more years of unfiled returns — especially with significant income or self-employment — involves contesting IRS Substitute for Return filings, calculating penalty exposure across multiple years, and coordinating compliance before any resolution program will accept your case.",
      },
      { type: "h2", id: "sign-3", text: "3. Your Balance Has Grown Beyond What You Can Ever Repay" },
      {
        type: "p",
        text: "When penalties and interest have compounded your original tax bill to a level you cannot realistically pay in full before the collection statute expires, you may qualify for programs like Offer in Compromise or Partial Pay Installment Agreement — but only if the application is strategically prepared and properly documented.",
      },
      { type: "h2", id: "sign-4", text: "4. The IRS Is Auditing a Business Return" },
      {
        type: "p",
        text: "Business audits are significantly more complex than personal audits. The IRS examines payroll taxes, contractor payments, business expense documentation, and asset depreciation. The risk of personal liability through trust fund recovery penalties — where the IRS holds you personally responsible for unpaid business payroll taxes — makes professional representation essential.",
      },
      { type: "h2", id: "sign-5", text: "5. You've Already Tried Handling It and Made It Worse" },
      {
        type: "p",
        text: "This is more common than you'd expect. A taxpayer calls the IRS, agrees to a payment plan they can't sustain, or provides information that inadvertently weakens their position. Professional intervention can often undo this damage — but the sooner you get help after a misstep, the better your options.",
      },
      { type: "cta" },
    ],
  },

  // ── 09. Installment Agreement ────────────────────────────────────────────────
  {
    slug: "installment-agreement",
    title: "IRS Installment Agreements: How Payment Plans Actually Work",
    excerpt:
      "An IRS Installment Agreement lets you pay your tax debt in monthly payments. It's not always the best option — but sometimes it's exactly right. Here's how to evaluate it.",
    category: "Offer in Compromise",
    readTime: "5 min read",
    date: "December 2025",
    dateISO: "2025-12-20",
    author: "SympleTax Team",
    metaTitle: "IRS Installment Agreement: How Payment Plans Work | SympleTax",
    metaDescription:
      "Learn how IRS installment agreements work, the different types available, and whether a payment plan is the right resolution strategy for your situation.",
    relatedSlugs: ["offer-in-compromise", "currently-not-collectible", "penalty-abatement"],
    content: [
      {
        type: "p",
        text: "An IRS Installment Agreement (IA) is a formal payment plan that lets you pay your tax debt in monthly installments rather than a lump sum. It's one of the most commonly used resolution tools — and one of the most misused. For some taxpayers, it's the right solution. For others, it locks them into paying far more than alternatives like an OIC would have required.",
      },
      { type: "h2", id: "types-of-ia", text: "Types of Installment Agreements" },
      { type: "h3", id: "guaranteed", text: "Guaranteed Installment Agreement" },
      {
        type: "p",
        text: "If you owe $10,000 or less in combined tax, penalties, and interest, and have filed all required returns, the IRS is legally required to accept a payment plan if you request one. No financial disclosure is required. You simply need to propose monthly payments that will pay off the balance within 3 years.",
      },
      { type: "h3", id: "streamlined", text: "Streamlined Installment Agreement" },
      {
        type: "p",
        text: "For balances up to $50,000, the IRS offers a streamlined agreement with no detailed financial disclosure required. You have up to 72 months to pay. Balances between $50,001 and $100,000 can qualify through the IRS online payment agreement tool with extended terms.",
      },
      { type: "h3", id: "partial-pay", text: "Partial Pay Installment Agreement (PPIA)" },
      {
        type: "p",
        text: "If you can't afford payments large enough to pay the full balance before the 10-year collection statute expires, you may qualify for a PPIA. You make reduced monthly payments based on your actual ability to pay, and whatever balance remains when the statute expires is legally forgiven.",
      },
      {
        type: "callout",
        variant: "tip",
        text: "A PPIA can effectively function like a mini Offer in Compromise for taxpayers who don't qualify for an OIC. It requires full financial disclosure and IRS approval, but the long-term savings can be significant.",
      },
      { type: "h2", id: "the-downside", text: "The Real Cost of an Installment Agreement" },
      {
        type: "p",
        text: "Here's what most people don't realize: penalties and interest continue to accrue on the unpaid balance throughout the entire life of the installment agreement. On a $100,000 balance at a 72-month repayment pace, you could end up paying $130,000 or more by the time it's done. For some taxpayers, an OIC or other strategy would have resulted in a dramatically lower total payment.",
      },
      { type: "cta" },
      { type: "h2", id: "when-right", text: "When an Installment Agreement Is the Right Choice" },
      {
        type: "ul",
        items: [
          "Your balance is fully payable within the collection statute period and you have stable income",
          "You have sufficient assets or income to disqualify you from an OIC",
          "You need to stop a levy or garnishment quickly — an IA is faster to set up than an OIC",
          "Your debt is under $50,000 and you want a simple, no-disclosure resolution path",
        ],
      },
    ],
  },
];
