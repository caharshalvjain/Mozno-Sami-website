import Head from "next/head";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "./BlogPage.css";
import remarkGfm from "remark-gfm";

const markdown = `
# 4.4 Insurance Portfolio Review & Optimization  
> “Insurance is not ‘set and forget’—it’s ‘set and reset’ with life.”

Marriage, kids, loans, ESOP liquidity, or even a pandemic can **obsolete yesterday’s cover**.  
This 2,000-word guide shows 22-45-year-olds **how to audit existing policies**, **plug gaps**, **remove overlaps**, and **upgrade cost-effectively**—so your insurance **evolves with you**, not against you.

---

## 1. Why Review Every 3–5 Years?

| Life Event | Impact on Cover |
|------------|-----------------|
| **Marriage** | Double dependents |
| **Home loan** | ₹50 L liability |
| **Childbirth** | ₹50 L education goal |
| **Job change** | Loss of employer cover |
| **Salary hike** | Lifestyle inflation |

---

## 2. 10-Minute DIY Audit Checklist

| Policy | Cover | Need Gap | Action |
|--------|-------|----------|--------|
| **Term Life** | ₹1 Cr | ₹2 Cr needed | Upgrade |
| **Health** | ₹5 L floater | ₹15 L needed | Top-up |
| **Motor** | ₹6 L IDV | ₹10 L market value | Increase |
| **Home** | ₹40 L | ₹60 L reconstruction | Reinstate |

---

## 3. Free Portfolio Scanner (Mozno Tool)

| Metric | Green | Amber | Red |
|--------|-------|-------|-----|
| **Sum assured vs income** | ≥ 15× | 10–15× | < 10× |
| **Health cover vs income** | ≥ 50 % | 25–50 % | < 25 % |
| **Renewal premium vs income** | ≤ 5 % | 5–10 % | > 10 % |

---

## 4. Optimisation Levers

| Lever | How | Savings |
|-------|-----|---------|
| **Port to cheaper insurer** | Same cover, lower premium | 10–25 % |
| **Increase deductible** | Health top-up | 20 % |
| **Drop riders** | Unneeded add-ons | ₹3k-₹5k/yr |
| **Bundle policies** | Multi-product discount | 10 % |

---

## 5. Case Study: 35-Year-Old Techie

| Before Review | After Optimisation |
|---------------|--------------------|
| **Term life** ₹1 Cr → ₹2.5 Cr | Ported to cheaper insurer, +₹5 L rider |
| **Health** ₹3 L → ₹25 L | Base ₹5 L + ₹20 L super-top-up |
| **Motor** ₹5 L → ₹8 L IDV | Zero-dep + roadside |
| **Annual premium** ₹45k → ₹52k | **Coverage ↑ 3×, cost ↑ 15 %** |

---

## 6. When to Port vs When to Layer

| Situation | Port | Layer |
|-----------|------|-------|
| **Premium hiked 30 %** | ✅ | ❌ |
| **Need 2× cover** | ❌ | ✅ Top-up |
| **Insurer claim ratio fallen** | ✅ | ❌ |

---

## 7. Nominee & Beneficiary Hygiene

| Task | Frequency |
|------|-----------|
| **Update nominee** | Marriage/birth/divorce |
| **Add secondary nominee** | Every 3 yrs |
| **Register e-insurance account** | Once |

---

## 8. Digital Locker & Cloud Backup

| Document | Storage |
|----------|---------|
| **Policy PDF** | Google Drive + DigiLocker |
| **Medical reports** | WhatsApp chat with spouse |
| **Claim forms** | Email to self |

---

## 9. Annual Review Calendar

| Month | Task |
|-------|------|
| **April** | Check sum insured vs income |
| **July** | Post-budget regime check |
| **October** | Compare renewal quotes |
| **December** | Health check + disclosure update |

---

## 10. Key Takeaways

- **Review every 3-5 years or life event**.  
- **Port only when cheaper + same features**.  
- **Layer cover via top-ups instead of replacing**.  
- **Nominee & document hygiene prevents claim delays**.

---

## 11. Ready for an Insurance MOT?

🔗 [Book Portfolio Review Session](https://www.moznoadvisory.com/review-call)  
📥 [Download Insurance Audit Checklist](https://www.moznoadvisory.com/audit-sheet)

*Mozno Advisory is an IRDAI-licensed insurance broker. Terms and conditions apply.*
`;

export default function InsurancePortfolioReviewPage() {
    return (
        <>
          <Head>
            <title>Insurance Portfolio Review – Mozno Advisory</title>
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