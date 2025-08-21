import Head from "next/head";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "./BlogPage.css";
import remarkGfm from "remark-gfm";

const markdown = `
# 3.3 Tax-Saving Investment Strategies
> “Don’t let the tax-tail wag the investment-dog, but do wag it smartly.”

Every rupee saved in tax is a rupee that can compound for decades.  
This 2,000-word playbook shows **22-45-year-old Indians** how to **legally shrink tax out-go** while **building wealth**—using **Section 80C, 80D, 80CCD, 24(b)** and **beyond FY 2025-26**.

---

## 1. Tax-Saving Universe Snapshot

| Section | Limit (₹) | Lock-in | Ideal For |
|---------|-----------|---------|-----------|
| **80C** | 1.5 L | 3–15 yrs | ELSS, PPF, 5-yr FD |
| **80CCD(1B)** | 50k | Till 60 | Extra NPS |
| **80D** | 25k–1 L | Annual | Health insurance |
| **24(b)** | 2 L p.a. | Loan tenure | Home loan interest |
| **80E** | No cap | Loan tenure | Education loan |

---

## 2. ELSS – Equity with a Lock-In

| Fund | 10-Yr CAGR | TER | Notes |
|------|------------|-----|-------|
| **Mirae Tax Saver** | 17 % | 1.2 % | Mid-cap tilt |
| **Axis Long Term** | 15 % | 1.4 % | Large-cap focus |
| **Nippon ETF ELSS** | 14 % | 0.3 % | Passive option |

**SIP Strategy**: ₹12,500/month = ₹1.5 L/year + 3-yr lock-in.

---

## 3. PPF vs ELSS vs Tax-Saver FD

| Metric | PPF | ELSS | 5-yr FD |
|--------|-----|------|---------|
| **Returns** | 7.1 % tax-free | 12–15 % | 7 % taxable |
| **Lock-in** | 15 yrs | 3 yrs | 5 yrs |
| **Risk** | Sovereign | Equity | Bank risk |
| **Liquidity** | Partial | After 3 yrs | Break with penalty |

---

## 4. NPS Triple-Tax Advantage

| Tier | Contribution | Deduction | Exit Tax |
|------|--------------|-----------|----------|
| **Employee (10 % basic)** | 80CCD(1) | Slab | 60 % tax-free |
| **Voluntary (₹50k)** | 80CCD(1B) | Extra | Same |
| **Employer (10 % basic)** | 80CCD(2) | No limit | Same |

**Illustration**: Salary ₹20 L, employer NPS ₹2 L → **tax saved ₹60k**.

---

## 5. Health Insurance – 80D Deep-Dive

| Cover | Premium | Deduction |
|-------|---------|-----------|
| **Self + spouse** | ₹25k | ₹25k |
| **Parents (senior)** | ₹50k | ₹50k |
| **Top-up plan** | ₹15k | Included |
| **Total** | ₹90k | ₹75k |

---

## 6. Home Loan – 24(b) + 80C Combo

| Part | Deduction | Max |
|------|-----------|-----|
| **Principal** | 80C | ₹1.5 L |
| **Interest** | 24(b) | ₹2 L |
| **First-time buyer** | 80EEA | Extra ₹1.5 L interest |

**Example**: ₹50 L loan @ 9 % → Year-1 interest ₹4.5 L  
**Total deduction**: ₹1.5 L (principal) + ₹2 L (interest) + ₹1.5 L (80EEA) = **₹5 L**

---

## 7. Beyond 80C – Often Missed

| Section | Use Case | Limit |
|---------|----------|-------|
| **80GG** | No HRA, pay rent | ₹60k/year |
| **80TTA** | Savings interest | ₹10k |
| **80U** | Disability | ₹75k–₹1.25 L |
| **80GGC** | Political donation | 100 % deduction |

---

## 8. New vs Old Regime Decision Grid

| Income (₹) | Old Tax | New Tax | Optimal |
|------------|---------|---------|---------|
| 7 L | 0 | 0 | Tie |
| 10 L | 78k | 52k | New |
| 15 L | 1.95 L | 1.45 L | New |
| 25 L | 5.85 L | 5.85 L | Depends on deductions |

---

## 9. Monthly SIP Calendar for 80C

| Date | Instrument | Amount |
|------|------------|--------|
| 1st | ELSS SIP | ₹12,500 |
| 5th | PPF | ₹5,000 |
| 10th | Sukanya Samriddhi | ₹3,000 |
| 15th | Term insurance | ₹2,000 |
| 20th | 5-yr FD | ₹2,500 |
| **Total** | – | ₹25,000 |

---

## 10. Tax-Loss Harvesting – ELSS

| Scenario | Gain | Loss Booked | Net Tax |
|----------|------|-------------|---------|
| ELSS redemption | ₹2 L LTCG | ₹50k LTCL | ₹18.75k vs ₹25k |

---

## 11. Section 80C vs 80CCD vs 24(b) – Allocation Matrix

| Goal | 80C | 80CCD(1B) | 24(b) |
|------|-----|-----------|--------|
| **Retirement** | 50 % | 30 % | – |
| **Home** | 30 % | – | 70 % |
| **Child** | 20 % | – | – |

---

## 12. Tools & Calculators

| Tool | Use |
|------|-----|
| **ClearTax 80C Optimiser** | Best mix |
| **NPS calculator** | Annuity projection |
| **Excel goal seek** | Loan vs tax trade-off |

---

## 13. Behavioural Hacks

| Hack | Implementation |
|------|----------------|
| **Default ELSS SIP** | Salary day auto-debit |
| **Annual raise** | 50 % to tax-saver |
| **March panic** | Advance SIP Jan-Feb |

---

## 14. Annual Review Checklist

- [ ] **Section 80C limit** fully used  
- [ ] **Health premium** 80D receipt  
- [ ] **Home loan certificate** downloaded  
- [ ] **Donation receipts** 80G collected  
- [ ] **Regime choice** re-evaluated

---

## 15. Key Takeaways

- **Start with ELSS for equity exposure**, layer PPF for debt.  
- **NPS is the only triple-tax-advantaged product**.  
- **Health + home loan** often exhaust 80D + 24(b).  
- **Rebalance annually**—products and tax laws change.

---

## 16. Ready to Optimise?

🔗 [**Book Your Tax-Saving Strategy Call**](https://www.moznoadvisory.com/taxsave-call)  
📥 [**Download 80C vs New Regime Calculator**](https://www.moznoadvisory.com/80c-calc)

*Mozno Advisory is a SEBI-registered investment adviser. Tax rules are subject to change; consult a chartered accountant for personalised advice.*
`;

export default function TaxSavingStrategiesPage() {
    return (
        <>
          <Head>
            <title>Tax-Saving Investment Strategies – Mozno Advisory</title>
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