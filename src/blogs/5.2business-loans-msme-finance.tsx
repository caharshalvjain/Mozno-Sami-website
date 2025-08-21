import Head from "next/head";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "./BlogPage.css";
import remarkGfm from "remark-gfm";

const markdown = `
# 5.2 Business Loans & MSME Finance
> “Capital is the fuel; your idea is the engine.”

India’s **63 million MSMEs contribute 30 % to GDP** and **45 % to exports**, yet **40 % cite lack of finance** as the top growth barrier.  
If you’re 22-45, running a start-up, D2C brand, or manufacturing unit, this 2,000-word guide covers **every loan type, government scheme, and lender playbook** to **scale without diluting equity**.

---

## 1. MSME Loan Landscape 2025

| Category | Ticket Size | Rate | Tenure | Security |
|----------|-------------|------|--------|----------|
| **Working capital** | ₹5 L-₹5 Cr | 9-14 % | 12-60 m | Hypothecation |
| **Term loan** | ₹10 L-₹25 Cr | 8-12 % | 3-10 yrs | Mortgage |
| **CGTMSE** | Up to ₹2 Cr | MCLR + 2 % | 7 yrs | **No collateral** |
| **Invoice discounting** | ₹1 L-₹50 L | 1-1.5 %/30 days | 30-90 days | Receivables |
| **Equipment finance** | ₹5 L-₹20 Cr | 8-11 % | 5-7 yrs | Equipment itself |

---

## 2. Government Schemes Cheat-Sheet

| Scheme | Max Loan | Interest Subsidy | Collateral |
|--------|----------|------------------|------------|
| **PM Mudra – Shishu** | ₹50k | 0 % | No |
| **PM Mudra – Kishor** | ₹5 L | 0 % | No |
| **PM Mudra – Tarun** | ₹10 L | 0 % | No |
| **CGTMSE** | ₹2 Cr | 75 % guarantee fee | No |
| **PM-SVANidhi** | ₹10k-₹50k | Street-vendor micro-loan | No |
| **Stand-Up India** | ₹1 Cr | SC/ST/women start-ups | Partial |

---

## 3. Lender Segments & Fit

| Lender | Speed | Rate | Fit |
|--------|-------|------|-----|
| **PSU Banks** | 15-30 days | 8-10 % | Established MSME |
| **Private Banks** | 7-15 days | 9-12 % | High-growth firms |
| **NBFCs** | 3-7 days | 11-16 % | Start-ups, thin-file |
| **Fintech** | 24 hrs | 14-20 % | Invoice discounting |

---

## 4. Working Capital Cycle Optimisation

| Lever | Impact |
|-------|--------|
| **Invoice discounting** | Release cash in 2 days vs 45 |
| **OD against FD** | 1-2 % over FD rate |
| **Trade credit** | 30-60 days vendor credit |
| **GST credit** | Faster refunds via LUT |

---

## 5. Collateral-Free CGTMSE Deep-Dive

| Tier | Loan | Guarantee Fee | Bank Margin |
|------|------|---------------|-------------|
| **Micro** | Up to ₹10 L | 0.75 % | 15 % |
| **Small** | ₹10 L-₹50 L | 0.85 % | 20 % |
| **Medium** | ₹50 L-₹2 Cr | 1 % | 25 % |

**Eligibility**: MSME Udyam registration + vintage 1 yr.

---

## 6. Application Checklist (7-Day Turnaround)

| Day | Task |
|-----|------|
| **1** | Udyam registration + GST returns |
| **2** | 3-yr ITR + bank statements |
| **3** | Project report + DSCR calc |
| **4** | CIBIL check + collateral docs |
| **5** | Lender shortlisting |
| **6** | Sanction letter negotiation |
| **7** | Disbursement + agreement signing |

---

## 7. Key Ratios Lenders Watch

| Ratio | Ideal | Calculation |
|-------|-------|-------------|
| **DSCR** | ≥ 1.5 | (PAT + Depreciation) / EMI |
| **Current ratio** | ≥ 1.3 | Current assets / liabilities |
| **FOIR** | ≤ 50 % | Total EMIs / net income |

---

## 8. Case Studies

### 8.1 D2C Skincare – Working Capital Cycle
- **Problem**: ₹30 L stuck in 45-day receivables  
- **Solution**: Invoice discounting @ 1.2 %/30 days  
- **Outcome**: **Cash-flow positive**, scale 3× in 12 months

### 8.2 Manufacturing – Equipment Loan
- **Asset**: CNC machine ₹1 Cr  
- **Loan**: ₹70 L @ 9 % for 7 yrs  
- **Tax**: **Depreciation 15 % + interest deduction**  
- **ROI**: **Payback 3.5 yrs**

---

## 9. Interest Rate Negotiation

| Lever | Discount |
|-------|----------|
| **Women borrower** | 0.5 % |
| **CGTMSE guarantee** | 0.5-1 % |
| **CIBIL > 750** | 0.25 % |
| **Bulk deposits** | 0.25 % |

---

## 10. Digital Lending Platforms

| Platform | Focus | Rate |
|----------|-------|------|
| **Lendingkart** | Micro & small | 12-18 % |
| **KredX** | Invoice discounting | 12-15 % |
| **Flexiloans** | Working capital | 15-20 % |
| **Kinara Capital** | Manufacturing | 18-22 % |

---

## 11. Common Pitfalls

| Pitfall | Fix |
|---------|-----|
| **Over-leverage** | Keep DSCR > 1.5 |
| **Personal guarantee** | Negotiate CGTMSE instead |
| **Hidden charges** | Ask for **all-in APR** |
| **Cross-default** | Read fine print |

---

## 12. Annual Review Checklist

- [ ] **Rate reset** with repo change |
- [ ] **Pre-payment** penalty waiver |
- [ ] **Working capital limit** enhancement |
- [ ] **Insurance** on collateral updated |
- [ ] **GST credit** reconciliation |

---

## 13. Key Takeaways

- **CGTMSE is the holy grail for collateral-free growth**.  
- **Invoice discounting turns receivables into rocket fuel**.  
- **DSCR > 1.5 keeps lenders happy and cost low**.  
- **Re-negotiate every 2-3 yrs**—rates and limits improve with performance.

---

## 14. Ready for Capital?

🔗 [Book MSME Finance Consultation](https://www.moznoadvisory.com/biz-call)  
📥 [Download Loan Eligibility Calculator](https://www.moznoadvisory.com/biz-calc)

*Mozno Advisory partners with 30+ banks, NBFCs, and fintechs. Approvals subject to credit policy.*
`;

export default function BusinessLoansMSMEPage() {
    return (
        <>
          <Head>
            <title>Business Loans & MSME Finance – Mozno Advisory</title>
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