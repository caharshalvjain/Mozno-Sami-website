import Head from "next/head";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "./BlogPage.css";
import remarkGfm from "remark-gfm";

const markdown = `
# 5.3 Personal Loans & Consumer Finance
> “Credit is a tool, not a trap—when used with a plan.”

Whether it’s a **destination wedding**, **medical emergency**, or **credit-card debt consolidation**, personal loans give 22-45-year-olds **instant liquidity without collateral**.  
This 2,000-word guide decodes **eligibility, rates, traps, and hacks** so you **borrow smart, repay faster, and keep your credit score sparkling**.

---

## 1. Personal Loan Landscape 2025

| Lender | Rate Range | Ticket | Tenure | Processing |
|--------|------------|--------|--------|------------|
| **Banks** | 10.5-15 % | ₹50k-₹40 L | 1-5 yrs | 0.5-2 % |
| **NBFCs** | 12-20 % | ₹25k-₹25 L | 1-5 yrs | 1-3 % |
| **Fintech** | 16-24 % | ₹5k-₹5 L | 3-36 m | 2-4 % |
| **Credit card loan** | 12-18 % | On limit | 3-24 m | 1 % |

---

## 2. Eligibility Matrix

| Factor | Ideal | Stretch |
|--------|-------|---------|
| **Credit score** | ≥ 750 | ≥ 700 |
| **Monthly income** | ≥ ₹40k | ≥ ₹25k with co-applicant |
| **FOIR** | ≤ 50 % | ≤ 65 % |
| **Employment** | 2 yrs | 1 yr confirmed |

---

## 3. Use-Cases & Fit

| Need | Best Product | Rate Sweet-Spot |
|------|--------------|-----------------|
| **Debt consolidation** | Balance transfer PL | 10-12 % |
| **Medical emergency** | Pre-approved top-up | 11-13 % |
| **Wedding** | Long-tenure PL | 12-14 % |
| **Gadget/Travel** | Instant fintech | 14-16 % |

---

## 4. Rate Hacks

| Hack | Discount |
|------|----------|
| **Pre-approved offer** | 0.5-1 % |
| **Salary account** | 0.25-0.5 % |
| **Women borrower** | 0.25 % |
| **CIBIL > 800** | 0.5 % |

---

## 5. The EMI Formula
EMI = [P × R × (1+R)^N] ÷ [(1+R)^N – 1]  
P = principal, R = monthly rate, N = months  

**Illustration**: ₹5 L @ 12 % for 3 yrs → **EMI = ₹16,607**; total interest = ₹97,840.

---

## 6. Traps to Avoid

| Trap | Escape |
|------|--------|
| **Flat vs reducing rate** | Always ask **reducing balance APR** |
| **Hidden processing fee** | Check **all-in cost** |
| **Pre-closure charges** | Choose **floating rate loans** (nil) |
| **Insurance bundling** | Decline unless needed |

---

## 7. Balance Transfer vs Top-Up

| Metric | Balance Transfer | Top-Up |
|--------|------------------|--------|
| **Use** | Lower rate | Extra funds |
| **Rate** | 1-2 % lower | Same lender |
| **Fee** | 0.5-2 % | 1 % |

---

## 8. Digital Lenders vs Banks

| Factor | Bank | NBFC | Fintech |
|--------|------|------|---------|
| **Speed** | 3-7 days | 1-3 days | 5-30 min |
| **Documentation** | Full | Medium | Video-KYC |
| **Flexibility** | Low | Medium | High |

---

## 9. Credit Score Impact

| Action | Score Change |
|--------|--------------|
| **On-time EMI** | +10-15 points |
| **Missed EMI** | -50-70 points |
| **Multiple applications** | -5 per enquiry |
| **Closure** | +20 points |

---

## 10. Case Studies

### 10.1 Debt Consolidation
- **Cards**: ₹2.5 L @ 36 % → **PL ₹2.5 L @ 11 %**  
- **EMI drop**: ₹12k → ₹8k  
- **Interest saved**: ₹5 L over 3 yrs

### 10.2 Emergency Medical
- **Hospital bill**: ₹6 L  
- **Pre-approved top-up**: ₹6 L @ 12 %, disbursed in 2 hrs  
- **Insurance shortfall met**

---

## 11. Pre-Closure vs Part-Payment

| Option | Fee | Benefit |
|--------|-----|---------|
| **Full pre-closure** | Nil (floating) | Interest saved |
| **Part-payment** | Nil | EMI or tenure reduced |
| **Step-down EMI** | Nil | Easier cash-flow |

---

## 12. Apps & Tools

| Tool | Use |
|------|-----|
| **BankBazaar** | Rate comparison |
| **Cred** | Pre-approved offers |
| **CASHe** | Instant salary advance |
| **EMI calculator** | Google Sheets |

---

## 13. Annual Review Checklist

- [ ] **Rate reset** with repo drop |
- [ ] **Credit score** > 750 |
- [ ] **EMI ≤ 40 %** of income |
| [ ] **No new credit** 6 m before big loan |

---

## 14. Key Takeaways

- **Borrow only for appreciating or urgent needs**.  
- **Compare APR, not just rate**.  
- **Pre-pay when ROI > 10 %**.  
- **Maintain CIBIL > 750** for cheapest rates.

---

## 15. Ready to Borrow Wisely?

🔗 [Book Personal Loan Strategy Call](https://www.moznoadvisory.com/pl-call)  
📥 [Download EMI vs Credit Card Calculator](https://www.moznoadvisory.com/pl-calc)

*Mozno Advisory partners with 25+ lenders. Approvals subject to credit policy.*
`;

export default function PersonalLoansPage() {
    return (
        <>
          <Head>
            <title>Personal Loans & Consumer Finance – Mozno Advisory</title>
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