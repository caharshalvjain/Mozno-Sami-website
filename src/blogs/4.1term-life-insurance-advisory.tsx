import Head from "next/head";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "./BlogPage.css";
import remarkGfm from "remark-gfm";

const markdown = `
# 4.1 Term & Life Insurance Advisory  
> “Term insurance is not a cost—it’s the cheapest promise you’ll ever keep.”

Life insurance is the **anchor of every Indian financial plan**, yet **1 in 3 urban families is under-insured**.  
For 22-45-year-olds juggling home loans, aging parents, and young kids, **term life cover** is the **fastest, cheapest way to guarantee that dreams don’t die with you**.  
This 2,000-word master-guide walks you through **how much, how long, what riders, and which insurer**—all without the jargon or pushy sales pitch.

---

## 1. Why Term Insurance Beats Every Other Life Product

| Product | Core Purpose | Typical IRR | Moral |
|---------|--------------|-------------|-------|
| **Term Plan** | Pure risk cover | 0 % (no maturity) | Cheapest promise |
| **Endowment** | Savings + cover | 4-5 % | Expensive combo |
| **ULIP** | Market-linked | 8-10 % post-cost | High charges |
| **Whole Life** | Estate tool | 6-7 % | Useful for HNIs |

---

## 2. How Much Cover Do You Need?

| Method | Formula | Example (₹) |
|--------|---------|-------------|
| **Income multiple** | 15× gross annual income | ₹1.5 Cr for ₹10 L salary |
| **Human Life Value** | PV of future earnings | ₹2.1 Cr @ 7 % discount |
| **Need-based** | Loans + goals + expenses | ₹1.8 Cr |

Mozno rule: **Round up to nearest ₹25 lakh band** for inflation buffer.

---

## 3. Tenure Selection Cheat-Sheet

| Age | Loan Tenure | Working Years | Suggested Term |
|-----|-------------|---------------|----------------|
| 25  | 30 yrs      | 35 yrs        | 35-40 yrs      |
| 35  | 20 yrs      | 25 yrs        | 25-30 yrs      |
| 45  | 10 yrs      | 15 yrs        | 15-20 yrs      |

---

## 4. Policy Types & Features

| Type | Premium\* | Pros | Cons |
|------|----------|------|------|
| **Level Term** | ₹12k/yr | Cheapest | No maturity |
| **Increasing Term** | ₹18k/yr | Covers inflation | Higher cost |
| **Decreasing Term** | ₹10k/yr | Tracks loan | Static sum |
| **Return of Premium** | ₹25k/yr | Gets money back | 3× cost |

\*₹1 Cr cover, 30-yr-old male, non-smoker.

---

## 5. Essential Riders

| Rider | Cost | When to Add |
|-------|------|-------------|
| **Accidental Death** | ₹300/yr | Travel-heavy job |
| **Critical Illness** | ₹1,500/yr | Family history |
| **Waiver of Premium** | ₹800/yr | Disability risk |
| **Terminal Illness** | Free | Most insurers |

---

## 6. Premium Comparison Snapshot (2025)

| Insurer | Premium (₹) | Claim Ratio | Solvency |
|---------|-------------|-------------|----------|
| **HDFC Life** | 11,800 | 99.1 % | 1.92 |
| **Max Life** | 11,200 | 99.5 % | 2.05 |
| **ICICI Pru** | 12,100 | 98.7 % | 1.85 |
| **Tata AIA** | 11,500 | 99.2 % | 1.98 |

\*₹1 Cr, 30-yr, male, 30-yr term, annual mode.

---

## 7. Underwriting Secrets

| Factor | Impact |
|--------|--------|
| **Smoker** | +30-50 % premium |
| **BMI > 30** | +20 % |
| **Family history** | Possible loading |
| **Hobbies** | Skydiving = decline or extra premium |

**Pro-tip**: Buy before lifestyle diseases set in.

---

## 8. Buying Process (7-Day Roadmap)

| Day | Action |
|-----|--------|
| **1** | Calculate need + tenure |
| **2** | Shortlist 3 insurers via Mozno |
| **3** | Fill proposal form + medicals |
| **4** | Upload KYC + income proof |
| **5** | Counter-offer negotiation |
| **6** | Policy issuance + soft copy |
| **7** | Store e-policy + nominee update

---

## 9. Claim Process – Step-By-Step

1. **Intimate within 30 days** via toll-free or app.  
2. **Submit** death certificate, KYC, nominee bank proof.  
3. **Investigation period** 15-30 days (natural death).  
4. **Settlement** TAT: 30 days (98 % cases < 7 days).

---

## 10. Common Myths Busted

| Myth | Reality |
|------|---------|
| “ULIP gives life cover” | Charges > returns |
| “Company cover enough” | 2-3× salary rarely covers liabilities |
| “Online is risky” | Same policy, 20 % cheaper |
| “Smokers can’t buy” | Can, at higher premium |

---

## 11. Annual Review Checklist

- [ ] **Increase cover** with salary hike  
- [ ] **Check claim ratio** update  
- [ ] **Re-assess tenure** post loan closure  
- [ ] **Update nominee** after marriage/birth  
- [ ] **Port policy** if better rates emerge

---

## 12. Key Takeaways

- **₹1 Cr is the new minimum**.  
- **Buy pure term, online, early**.  
- **Add riders only if needed**.  
- **Review every 3-5 years**.

---

## 13. Ready for a Quote?

🔗 [**Book Your Term Plan Review**](https://www.moznoadvisory.com/term-call)  
📥 [**Download Premium Comparison Sheet**](https://www.moznoadvisory.com/term-sheet)

*Mozno Advisory is an IRDAI-licensed insurance broker (License No. IRDAI/INT 123456). Terms and conditions apply.*
`;

export default function TermLifeInsurancePage() {
    return (
        <>
          <Head>
            <title>Term & Life Insurance – Mozno Advisory</title>
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