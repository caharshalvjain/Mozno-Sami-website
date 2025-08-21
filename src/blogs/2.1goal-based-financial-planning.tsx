import Head from "next/head";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "./BlogPage.css";
import remarkGfm from "remark-gfm";

const markdown = `
# 2.1 Goal-Based Financial Planning  

> “A goal without a plan is just a wish.” – and in India, inflation makes it an expensive wish.

Goal-Based Financial Planning (GBFP) is the **blueprint that turns life milestones into rupee targets and timelines**.  
Instead of chasing “maximum returns”, we **reverse-engineer the exact amount you need to save and invest** to buy a home in Mumbai, send two kids to Ivy League colleges, or retire at 50 on ₹2 lakh a month.  
Written for **22-45-year-old Indians**, this guide walks step-by-step from **dream to dashboard**.

---

## 1. Why Goal-Based Planning Matters in 2025
- **Inflation is real**: Education costs rise 8–10 % p.a.; healthcare 12 %.
- **Life-stage compression**: Marriage at 28, kids at 30, second home at 35, FIRE at 45.
- **Product overload**: 2,500+ mutual funds, REITs, PMS, AIFs—**GBFP is the filter**.

---

## 2. The GBFP Framework

| Step | Tool | Output |
|------|------|--------|
| 1. Define SMART Goals | Excel/Goal Calculator | Target corpus + date |
| 2. Map Cash-Flow | Budget App | Surplus per month |
| 3. Risk Score | Psychometric Quiz | Equity vs Debt split |
| 4. Choose Instruments | Fund Short-list | SIP amounts |
| 5. Monitor & Rebalance | Dashboard Review | Course-corrections |

---

## 3. Three Buckets Every Indian Must Fill

| Bucket | Horizon | Example | Instruments |
|--------|---------|---------|-------------|
| **Safety** | 0–3 yrs | Emergency fund, Europe trip | Liquid fund, FD |
| **Growth** | 3–10 yrs | Home down-payment | Flexi-cap, balanced-advantage |
| **Legacy** | 10 yrs+ | Retirement, kids’ college | Equity, PPF, NPS |

---

## 4. Quantifying Goals with Real Numbers

### 4.1 Home in Bengaluru
- **Future cost** (8 yrs, 7 % inflation): ₹1.9 Cr  
- **Down-payment (20 %)**: ₹38 lakh  
- **Monthly SIP** @ 11 % → ₹27,000

### 4.2 Child’s Undergrad Abroad
- **Future cost** (15 yrs, 9 % inflation): ₹2.7 Cr  
- **Lumpsum today** @ 12 % → ₹39 lakh  
- **Monthly SIP** → ₹54,000

---

## 5. Risk Profiling – The Mozno 5-Minute Matrix

| Factor | Score 1 | Score 2 | Score 3 |
|--------|---------|---------|---------|
| Age | ≥ 45 | 35–44 | ≤ 34 |
| Stability | Govt job | Pvt job | Business |
| Loss Tolerance | Can’t sleep | Accept 15 % fall | Buy more dip |
| Debt-to-Income | ≥ 40 % | 20–40 % | ≤ 20 % |
| Experience | < 2 yrs | 2–7 yrs | ≥ 7 yrs |

**Total 5–8** → Balanced; **9–15** → Aggressive.

---

## 6. Asset Allocation by Risk Score

| Score | Equity % | Debt % | Gold % |
|-------|----------|--------|--------|
| Conservative | 40 | 50 | 10 |
| Balanced | 60 | 30 | 10 |
| Aggressive | 80 | 15 | 5 |

---

## 7. Choosing the Right Instruments

### 7.1 Safety Bucket
- **Liquid fund** – 6.8 %, T+1 redemption  
- **Ultra-short duration** – 7.2 %, indexation after 3 yrs  
- **Bank FD** – 7 % (lock-in 1–3 yrs)

### 7.2 Growth Bucket
- **Flexi-cap active** – 12–14 % 10-yr CAGR  
- **ELSS** – Tax-saving + lock-in 3 yrs  
- **Balanced-advantage** – Low volatility, equity taxation

### 7.3 Legacy Bucket
- **Nifty 500 ETF** – 0.1 % TER  
- **NPS Tier-1** – Extra ₹50k 80CCD(1B) + 75 % equity auto-glide  
- **PPF** – 7.1 % tax-free + 15-yr lock-in

---

## 8. Automation & Discipline

| Tool | Benefit |
|------|---------|
| **SIP Mandate** | Rupee-cost averaging |
| **Step-up SIP** | 10 % annual increase with salary |
| **Goal-tracking App** | Visual % progress daily |
| **Annual Rebalance** | Book profits, move to debt near goal |

---

## 9. Behavioural Biases & Fixes

| Bias | Behaviour | Fix |
|------|-----------|-----|
| **Loss Aversion** | Panic sell in crash | Auto-rebalance rules |
| **Present Bias** | Skip SIP for iPhone | “Pay yourself first” rule |
| **Overconfidence** | 80 % small-cap at 25 | IPS (Investment Policy Statement) |

---

## 10. Real-Life Case Study: 29-Year-Old Consultant

| Goal | Years | Corpus Needed | SIP Today |
|------|-------|---------------|-----------|
| Emergency | 1 | ₹6 L | Done (liquid fund) |
| Car | 3 | ₹15 L | ₹36k balanced fund |
| House | 8 | ₹50 L | ₹38k flexi-cap |
| Retirement | 30 | ₹8 Cr | ₹35k NPS + ETF |

**Total monthly SIP**: ₹1.09 L (step-up 8 % yearly).

---

## 11. Tech Stack for DIY Goal Tracking

- **Moneyfront** – Goal SIP calculator  
- **Kuvera** – Family tagging, tax harvesting  
- **Excel** – Custom glide-path model  
- **Notion** – Annual review template

---

## 12. Annual Review Checklist

- [ ] **Goal inflation** revised (CPI + 2 %)  
- [ ] **SIP step-up** executed (salary hike)  
- [ ] **Asset drift** > 5 % → rebalance  
- [ ] **Insurance** cover reviewed  
- [ ] **Tax harvesting** executed (loss booking)

---

## 13. When to Seek Professional Help

- Multiple conflicting goals  
- ESOP or business sale windfall  
- Cross-border income (RSUs, ESPP)  
- Complex tax situations (NRIs, HUF)

---

## 14. Key Takeaways

- **Start early**—every 5-year delay doubles the SIP amount.  
- **Inflation-adjusted targets** prevent nasty shortfalls.  
- **Automate everything**—behaviour trumps brilliance.  
- **Review annually**—life, markets, and goals change.

---

## 15. Ready to Blueprint Your Goals?

🔗 [**Book Your 45-Minute Goal-Planning Session**](https://www.moznoadvisory.com/goal-call)  
📥 [**Download Free Goal-Setting Excel**](https://www.moznoadvisory.com/goal-excel)

*Mozno Advisory is a SEBI-registered investment adviser. Past performance does not guarantee future results.*
`;

export default function GoalPlanningPage() {
    return (
        <>
          <Head>
            <title>Goal-Based Planning – Mozno Advisory</title>
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