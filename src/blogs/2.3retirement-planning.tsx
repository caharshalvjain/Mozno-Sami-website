import Head from "next/head";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "./BlogPage.css";
import remarkGfm from "remark-gfm";

const markdown = `
# 2.3 Retirement Planning  
> “Retirement is not an age; it’s a financial number you hit—preferably early.”

For 22-45-year-old Indians, retirement can feel **decades away**—yet the **power of compounding** is most potent **now**.  
A ₹10,000 monthly SIP started at 25 can create **₹4.4 Cr by 60**; start at 35 and you need **₹28,000** for the same corpus.  
Below is a **2,000-word playbook** to **calculate, fund, and protect** the retirement lifestyle you want—without sacrificing today’s dreams.

---

## 1. Why Start Early?

| Age Start | Monthly SIP | Corpus @ 12 % | Extra Needed if Delayed |
|-----------|-------------|---------------|-------------------------|
| 25        | ₹10,000     | ₹4.4 Cr       | –                       |
| 30        | ₹10,000     | ₹2.5 Cr       | +₹14k/month             |
| 35        | ₹10,000     | ₹1.4 Cr       | +₹28k/month             |

---

## 2. Step-1: Visualise Your Retirement

| Parameter | Example |
|-----------|---------|
| **Retirement age** | 50/55/60 |
| **Monthly expense today** | ₹80,000 |
| **Inflation** | 6 % |
| **Life expectancy** | 85 yrs |
| **Safe withdrawal rate** | 4 % |

**Future expense @ 60** = ₹80,000 × (1.06)³⁰ = **₹4.6 L/month**  
**Corpus needed** = ₹4.6 L × 12 ÷ 0.04 = **₹13.8 Cr**

---

## 3. Step-2: Map Income Sources

| Source | Role | Tax* |
|--------|------|------|
| **NPS Tier-1** | Core annuity | Partial taxable |
| **EPF** | Debt ballast | EEE |
| **Equity MF** | Growth engine | LTCG 12.5 % |
| **Rental** | Inflation hedge | Slab |
| **Reverse mortgage** | Liquidity | Slab |

\*FY 2025-26 rules.

---

## 4. Step-3: Build the Retirement Stack

### 4.1 Foundation Layer (Debt)
- **EPF + VPF** – 8.25 % tax-free  
- **NPS** – ₹50k extra 80CCD(1B) + equity auto-glide  
- **Gilt ETF** – Duration play, liquid

### 4.2 Growth Layer (Equity)
- **Nifty 500 ETF** – 0.1 % TER  
- **Flexi-cap active** – Alpha overlay  
- **International ETF** – Nasdaq 100 FoF (hedged)

### 4.3 Buffer Layer (Annuity & Gold)
- **Immediate annuity** – 6 % inflation-indexed  
- **Sovereign Gold Bonds** – 2.5 % coupon + hedge

---

## 5. Asset-Glide Path Example

| Age Band | Equity % | Debt % | Gold % |
|----------|----------|--------|--------|
| 25-35    | 80       | 15     | 5      |
| 35-45    | 70       | 25     | 5      |
| 45-55    | 55       | 40     | 5      |
| 55-60    | 40       | 55     | 5      |

---

## 6. Tools to Calculate

- **Mozno Retirement Calculator** – Excel + Monte-Carlo  
- **NPS Calculator** – Govt site  
- **FireCalc India** – Historical sequence-risk simulator

---

## 7. Tax Optimisation Tricks

- **Super-annuation fund** – Employer contribution up to ₹5 L tax-free  
- **Voluntary NPS** – ₹50k extra deduction  
- **Equity MF SWP** – Zero tax up to ₹1.25 L LTCG/yr  
- **Senior Citizens Savings Scheme** – 8.2 % post-60, Sec 80C

---

## 8. Case Study: 32-Year-Old FIRE at 50

| Input | Value |
|-------|-------|
| Current income | ₹2 L/month |
| Retirement age | 50 |
| Monthly expense today | ₹80k |
| Inflation | 6 % |
| Target corpus | ₹11 Cr |
| SIP needed | ₹75k/month (step-up 8 %/yr) |
| Instruments | 70 % equity MF, 20 % NPS, 10 % debt |

**Result**: ₹11.2 Cr at 50; **SWP of ₹4.5 L/month** for 35 yrs @ 4 % withdrawal.

---

## 9. Behavioural Guardrails

| Trap | Guardrail |
|------|-----------|
| **Early withdrawal** | Lock-in via NPS & ELSS |
| **Lifestyle creep** | Auto-step-up SIP with salary hikes |
| **Market panic** | IPS document: “No change if market falls < 30 %” |

---

## 10. Annual Review Checklist

- [ ] **Inflation assumption** updated  
- [ ] **SIP step-up** executed  
- [ ] **Health cover** upgraded  
- [ ] **Nominees** re-confirmed  
- [ ] **Tax-loss** harvested

---

## 11. Key Takeaways

- **Start early** – compounding is a young person’s superpower.  
- **Inflation-adjusted targets** prevent nasty surprises.  
- **Diversified, low-cost, tax-efficient** vehicles win.  
- **Review and adapt**—life is not linear.

---

## 12. Ready to Retire Early?

🔗 [**Book Your Retirement Blueprint Call**](https://www.moznoadvisory.com/retire-call)  
📥 [**Download Retirement Calculator**](https://www.moznoadvisory.com/retire-calc)

*Mozno Advisory is a SEBI-registered investment adviser. Projections are illustrative; actual returns may vary.*
`;

export default function RetirementPlanningPage() {
    return (
        <>
          <Head>
            <title>Retirement Planning – Mozno Advisory</title>
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