import Head from "next/head";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "./BlogPage.css";
import remarkGfm from "remark-gfm";

const markdown = `
# 5.1 Home Loans & Property Finance  
> “Your first home is not just an asset—it’s the biggest leveraged investment you’ll ever make.”

For 22-45-year-old Indians, buying a home is both **aspiration and compulsion**: marriage, kids’ school districts, and the classic **“rent vs EMI”** debate.  
This 2,000-word playbook demystifies **home loans, loan-against-property (LAP), balance transfers, and tax sweeteners** so you **own the house—and not the other way around**.

---

## 1. Why Property Finance Wins

| Parameter | Home Loan | Personal Loan | Equity MF SIP |
|-----------|-----------|---------------|---------------|
| **Leverage** | 4:1 | 0 | 1:1 |
| **Post-tax cost** | 5-6 % | 12-15 % | – |
| **Tax benefits** | ₹3.5 L/yr | Nil | – |
| **Asset appreciation** | 7-10 % | – | – |

Net **real return on equity** = **asset gain – post-tax cost** ≈ 2-5 % **plus roof over head**.

---

## 2. Loan Types & Use-Cases

| Product | Purpose | LTV | Tenure | Rate\* |
|---------|---------|-----|--------|-------|
| **Home Purchase** | Buy ready/under-construction | 75-90 % | 30 yrs | 8.4-9.0 % |
| **Home Construction** | Self-build plot | 70-80 % | 20 yrs | 8.5-9.2 % |
| **LAP** | Business, personal need | 50-70 % | 15 yrs | 9.5-11 % |
| **Balance Transfer** | Lower rate, top-up | 80 % | Remaining | 8.2-8.8 % |

\*Rates April 2025; women borrowers get 0.05 % discount.\*

---

## 3. Eligibility Matrix

| Criteria | Ideal | Stretch |
|----------|-------|---------|
| **Age** | 23-58 yrs at maturity | 60 yrs |
| **Net income** | ≥ ₹50k/m | ≥ ₹35k/m with co-applicant |
| **FOIR** | ≤ 50 % | ≤ 65 % |
| **Credit score** | ≥ 750 | ≥ 700 (higher rate) |

**Mozno hack**: Add spouse as co-applicant to **boost eligibility by 40 %**.

---

## 4. Tax Benefits FY 2025-26

| Section | Benefit | Max Limit |
|---------|---------|-----------|
| **80C (principal)** | Deduction | ₹1.5 L |
| **24(b) (interest)** | Deduction | ₹2 L self-occ / No limit let-out |
| **80EEA (first-time)** | Extra interest | ₹1.5 L (loan ≤ ₹45 L, property ≤ ₹45 L) |
| **Joint loan** | Both claim | Double benefits |

---

## 5. Step-by-Step Application (15-Day Timeline)

| Day | Milestone |
|-----|-----------|
| **1-2** | Property shortlist + legal due-diligence |
| **3-4** | Loan sanction letter + rate lock |
| **5-7** | Property valuation + technical check |
| **8-10** | Agreement to sell + down-payment |
| **11-13** | Registration + mortgage creation |
| **14-15** | Disbursement + possession handover |

---

## 6. Pre-EMI vs Full EMI

| Scheme | Cash-flow | Total Interest |
|--------|-----------|----------------|
| **Pre-EMI** | Lower start | Higher |
| **Full EMI** | Higher start | Lower |

**Rule**: Choose **full EMI** if cash-flow allows.

---

## 7. Balance Transfer & Top-Up

| Trigger | Savings | Top-Up Use |
|---------|---------|------------|
| **Rate drop 0.5 %** | ₹4-5 L over 15 yrs | Renovation, business |
| **Improved credit score** | 0.25-0.5 % drop | Child education |

**Fees**: Processing 0.5 % + MOD charges ₹5k-₹10k.

---

## 8. Loan-Against-Property (LAP)

| Use-case | LTV | Rate | Tenure |
|----------|-----|------|--------|
| **Business expansion** | 60 % | 9.5 % | 15 yrs |
| **Debt consolidation** | 65 % | 10 % | 10 yrs |
| **Child education abroad** | 70 % | 9.8 % | 12 yrs |

**Tax on LAP interest** – **business deduction** if used for business.

---

## 9. Builder Finance – Construction Linked Plan (CLP)

| Milestone | Disbursement % | Risk |
|-----------|----------------|------|
| **Foundation** | 10 % | Low |
| **Slab completion** | 70 % | Medium |
| **Possession** | 20 % | High |

**Tip**: Never pay **pre-EMI on undisbursed amount**—ask for **moratorium**.

---

## 10. Women Borrowers & PMAY

| Scheme | Interest Subsidy | Max Loan |
|--------|------------------|----------|
| **PMAY Urban – EWS/LIG** | 6.5 % (₹2.67 L) | ₹6 L |
| **PMAY MIG-I** | 4 % (₹2.35 L) | ₹9 L |
| **PMAY MIG-II** | 3 % (₹2.3 L) | ₹12 L |

**Eligibility**: First-time buyer, household income ≤ ₹18 L.

---

## 11. Digital Lenders vs Banks

| Factor | Bank | NBFC | Fintech |
|--------|------|------|---------|
| **Rate** | 8.4-9 % | 9-11 % | 8.5-10 % |
| **Processing time** | 15-30 days | 7-10 days | 3-5 days |
| **Flexibility** | Low | Medium | High (co-lending) |

---

## 12. Common Pitfalls

| Pitfall | Fix |
|---------|-----|
| **Floating rate shock** | Reset clause + repo-linked loans |
| **Hidden charges** | Ask for **Sanction Letter Annexures** |
| **Pre-payment penalty** | Choose **floating rate loans** (nil penalty) |
| **Undervalued property** | Use **ready-reckoner rate** for LTV |

---

## 13. Annual Review Checklist

- [ ] **Reset interest rate** with repo hike  
- [ ] **Switch lender** if > 0.5 % cheaper  
- [ ] **Pre-pay 5 % principal** each year  
- [ ] **Re-claim 80EEA** if first-time buyer  
- [ ] **Top-up loan** for renovation

---

## 14. Key Takeaways

- **Leverage is your friend when the asset outruns the cost**.  
- **Tax benefits alone can recover 1-2 EMIs annually**.  
- **Balance transfer every 3-4 yrs keeps rates optimal**.  
- **PMAY + women borrower = best subsidy combo**.

---

## 15. Ready to Own Your Dream Home?

🔗 [Book Your Home Loan Strategy Call](https://www.moznoadvisory.com/home-call)  
📥 [Download EMI vs Rent Calculator](https://www.moznoadvisory.com/emicalc)

*Mozno Advisory partners with 25+ banks & NBFCs. Rates subject to RBI regulation. Pre-approval does not guarantee sanction.*
`;

export default function HomeLoansPage() {
    return (
        <>
          <Head>
            <title>Home Loans & Property Finance – Mozno Advisory</title>
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