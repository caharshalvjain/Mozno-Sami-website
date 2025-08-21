import Head from "next/head";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "./BlogPage.css";
import remarkGfm from "remark-gfm";

const markdown = `
# 3.1 Direct Tax Planning & ITR Filing
> “Paying tax is patriotic; over-paying is just poor planning.”

Direct taxes—levied on **income**—are the single largest leak in most Indian households.  
For 22-45-year-old salaried professionals, freelancers, and business owners, **proactive planning** and **error-free ITR filing** can legally **save lakhs** every year.  
This 2,000-word guide demystifies the **Income-Tax Act, 1961**, **new vs old regime**, **deductions**, and **ITR forms** so you can **minimise tax, maximise refunds, and stay SEBI-clean**.

---

## 1. Direct Tax Snapshot FY 2025-26

| Income Slab (₹) | Old Regime Rate | New Regime Rate |
|------------------|-----------------|-----------------|
| 0 – 3 L          | 0 %             | 0 %             |
| 3 – 6 L          | 5 %             | 5 %             |
| 6 – 9 L          | 20 %            | 10 %            |
| 9 – 12 L         | 30 %            | 15 %            |
| 12 – 15 L        | 30 %            | 20 %            |
| > 15 L           | 30 %            | 30 %            |

**Rebate u/s 87A**: ₹25,000 (new regime) vs ₹12,500 (old) for income ≤ ₹7 L.

---

## 2. Choose Your Regime—The 60-Second Decision Tree

| Factor | Old Regime Favour | New Regime Favour |
|--------|-------------------|-------------------|
| **Home loan interest** | High (≥ ₹2 L) | Low / no loan |
| **80C full** | ₹1.5 L | Minimal |
| **80D premium** | ₹25k-50k | Minimal |
| **HRA large** | Metro | Remote work |

Use **Mozno Regime Comparator** (Excel) for exact breakeven.

---

## 3. Deductions Cheat-Sheet

| Section | Max (₹) | Eligible Uses |
|---------|---------|---------------|
| **80C** | 1.5 L | ELSS, PPF, 5-yr FD, life premium |
| **80CCD(1B)** | 50k | Voluntary NPS only |
| **80D** | 25k self + 25k parents | Health insurance |
| **24(b)** | 2 L | Home loan interest |
| **80E** | No cap | Education loan interest |
| **80G** | 50 %/100 % | Donations |
| **80TTA** | 10k | Savings account interest |
| **80TTB** | 50k | Senior citizens FD interest |

---

## 4. Salary Optimisation Hacks

| Component | Tax Treatment | Hack |
|-----------|---------------|------|
| **Basic** | Fully taxable | Opt for lower basic, higher allowances |
| **HRA** | Exempt u/s 10(13A) | Pay rent to parents (PAN required) |
| **LTA** | 2 journeys in 4-yr block | Submit air tickets |
| **Food Coupons** | ₹50/meal × 2 × 22 days = ₹26,400/yr | Sodexo/Zeta |
| **NPS under 80CCD(2)** | Employer 10 % basic | Ask HR to route via NPS |
| **Professional Tax** | ₹2,400 max | Claim full amount |

---

## 5. Freelancers & Business Owners

| Income Head | Section | Deductions |
|-------------|---------|------------|
| **Business/Profession** | 44ADA | 50 % deemed profit if gross ≤ ₹75 L |
| **Capital gains** | 111A | 20 % STCG on equity; 12.5 % LTCG |
| **Presumptive 44AD** | 6 % digital turnover | No books audit if < ₹2 Cr |

**Pro-tip**: File **Form 10IE** to choose new regime **before ITR**.

---

## 6. ITR Forms Decoded

| Form | Who Should File |
|------|-----------------|
| **ITR-1 (Sahaj)** | Salary + interest, ≤ ₹50 L |
| **ITR-2** | Salary + capital gains + foreign assets |
| **ITR-3** | Business/Profession + trading |
| **ITR-4 (Sugam)** | Presumptive income 44AD/44ADA |

---

## 7. Filing Workflow (7-Day Plan)

| Day | Task |
|-----|------|
| **1** | Download **Form 26AS** & AIS |
| **2** | Reconcile salary, interest, MF gains |
| **3** | Claim deductions, upload proofs |
| **4** | Compute tax under both regimes |
| **5** | Select regime & generate JSON |
| **6** | Upload & e-verify (Aadhaar OTP) |
| **7** | Save **ITR-V PDF** + acknowledgement |

---

## 8. Common Mistakes & Penalties

| Mistake | Penalty |
|---------|---------|
| **Wrong regime** | Re-file u/s 139(5) before 31 Dec |
| **Missing interest income** | ₹10k-₹1 L penalty |
| **Foreign asset non-disclosure** | ₹10 L or imprisonment |
| **Late filing** | ₹5,000 (income < ₹5 L) to ₹10,000 |

---

## 9. Tax-Loss Harvesting Example

| Trade | Gain | Loss | Net Tax Saved |
|-------|------|------|---------------|
| Sell A | ₹3 L LTCG | – | ₹37.5k |
| Sell B | – | ₹1 L LTCL | ₹12.5k saved |
| Net taxable | ₹2 L | – | ₹25k |

---

## 10. Tools & Apps

| Tool | Use |
|------|-----|
| **ClearTax** | ITR wizard |
| **Quicko** | Regime comparator |
| **Taxspanner** | Salary optimisation |
| **Excel** | Custom tax calculator |

---

## 11. Key Takeaways

- **Pick regime early**—switching later is messy.  
- **Use every legal deduction**—it’s your right.  
- **File on time**—penalties compound.  
- **Reconcile 26AS**—pre-empt notices.

---

## 12. Ready for a Tax-Smart Year?

🔗 [**Book Your Direct Tax Review Call**](https://www.moznoadvisory.com/tax-call)  
📥 [**Download 80C Optimiser Excel**](https://www.moznoadvisory.com/80c-calc)

*Mozno Advisory is a SEBI-registered investment adviser and authorised e-return intermediary. Always consult a chartered accountant for complex cases.*
`;

export default function DirectTaxPlanningPage() {
    return (
        <>
          <Head>
            <title>Direct Tax Planning & ITR Filing – Mozno Advisory</title>
            <meta
              name="description"
              content="Complete guide for 22-45-year-old Indians to build wealth via mutual funds."
            />
          </Head>

          <main>
            <article className="blog-page">
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: (props) => <h1 className="blog-page__heading blog-page__heading--h1" {...props} />,
                  h2: (props) => <h2 className="blog-page__heading blog-page__heading--h2" {...props} />,
                  h3: (props) => <h3 className="blog-page__heading blog-page__heading--h3" {...props} />,
                  p: (props) => <p className="blog-page__paragraph" {...props} />,
                  blockquote: (props) => <blockquote className="blog-page__blockquote" {...props} />,
                  ul: (props) => <ul className="blog-page__list" {...props} />,
                  ol: (props) => <ol className="blog-page__list" {...props} />,
                  li: (props) => <li className="blog-page__list-item" {...props} />,
                  table: (props) => <table className="blog-page__table" {...props} />,
                  th: (props) => <th className="blog-page__th" {...props} />,
                  td: (props) => <td className="blog-page__td" {...props} />,
                  a: (props) => <a className="blog-page__link" {...props} />,
                  strong: (props) => <strong className="blog-page__strong" {...props} />,
                  code: (props) => <code className="blog-page__code" {...props} />,
                  hr: (props) => <hr className="blog-page__hr" {...props} />,
                }}
              >
                {markdown}
              </ReactMarkdown>
            </article>
          </main>
        </>
      );
}