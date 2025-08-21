import Head from "next/head";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "./BlogPage.css";
import remarkGfm from "remark-gfm";

const markdown = `
# 2.2 Strategic Asset Allocation (SAA): Your GPS for Lifetime Wealth

> “It’s not timing the market, but time **in** the right allocation that builds fortunes.”

Strategic Asset Allocation (SAA) is the **single biggest driver** of long-term portfolio returns—more than stock-picking or market-timing.  
For Indians aged 22-45, it answers: **“Given my goals, risk, and time, what % of my money should sleep in equity, debt, gold, real-estate, and alternatives today—and how should that drift over decades?”**

Below is a **2,000-word field manual** to build, implement, and glide your SAA.

---

## 1. SAA vs Tactical Allocation

| Dimension | SAA (Strategic) | TAA (Tactical) |
|-----------|-----------------|----------------|
| **Time Horizon** | 5–30 yrs | 3–12 months |
| **Driver** | Goals + Risk | Market valuation |
| **Rebalance Freq.** | Annual | Monthly/Quarterly |
| **Example** | 70 % equity @ 25 yrs | +10 % equity if P/E < 18 |

---

## 2. Inputs for SAA Design

| Input | Tools | Sample Output |
|-------|-------|---------------|
| **Goals** | Goal calculator | ₹5 Cr retirement @ 50 |
| **Risk** | Psychometric quiz | Aggressive (score 12/15) |
| **Time** | Age + horizon | 25 yrs |
| **Liquidity** | Cash-flow model | Need 5 % liquid always |

---

## 3. Historical Risk-Return Grid (INR, 1997-2024)

| Asset | CAGR | Std Dev | Max DD | Sharpe |
|--------|------|---------|--------|--------|
| **Nifty 500** | 12.8 % | 19 % | 60 % | 0.67 |
| **10-yr Gilt** | 7.9 % | 6 % | 15 % | 1.32 |
| **Gold** | 9.4 % | 14 % | 40 % | 0.67 |
| **REITs** | 11.2 % | 13 % | 30 % | 0.86 |

---

## 4. Glide-Path Models

### 4.1 Age-Based Rule (Simple)
| Age | Equity % | Debt % |
|-----|----------|--------|
| 25 | 80 | 20 |
| 35 | 70 | 30 |
| 45 | 60 | 40 |
| 55 | 45 | 55 |

### 4.2 Risk-Capacity Model (Advanced)
- **Dynamic drift**: Equity % = 120 – (Age × 1.2) – (Debt-to-Income × 10)  
- **Floor**: Never < 25 % equity to fight inflation.

---

## 5. Sample Allocations by Profile

| Profile | Equity % | Debt % | Gold % | REIT % |
|---------|----------|--------|--------|--------|
| **Young Aggressive** | 80 | 10 | 5 | 5 |
| **Mid-Career Balanced** | 65 | 20 | 10 | 5 |
| **Near-Goal Conservative** | 40 | 45 | 10 | 5 |

---

## 6. Building Blocks

### 6.1 Equity Sleeve
- **Core**: Nifty 500 ETF (0.1 % TER)  
- **Satellite**: Flexi-cap active, mid-cap tilt  
- **Global**: Nasdaq 100 FoF (hedged)

### 6.2 Debt Sleeve
- **Core**: Gilt ETF for duration play  
- **Short**: Corporate bond fund  
- **Floater**: Banking & PSU debt

### 6.3 Gold & Alternatives
- **Gold**: Sovereign Gold Bonds (2.5 % interest)  
- **REITs**: Embassy, Mindspace, Brookfield  
- **AIF**: 5-10 % satellite for diversification

---

## 7. Rebalancing Rules

| Rule | Trigger | Action |
|------|---------|--------|
| **Tolerance Band** | ±5 % drift | Reset to target |
| **Calendar** | Every birthday | Mechanical rebalance |
| **Volatility** | VIX > 25 | Shift 5 % equity → debt |

---

## 8. Behavioural Guardrails

| Bias | Tool |
|------|------|
| **Recency** | Quarterly IPS review |
| **Overconfidence** | Cap single stock at 5 % |
| **FOMO** | Pre-approved tactical band (±10 %) |

---

## 9. Tech Stack for DIY SAA
- **Kuvera Portfolios** – Glide-path templates  
- **Excel Solver** – Optimise Sharpe ratio  
- **Smallcase** – Rule-based rebalancing  
- **Zerodha Sentinel** – Price alerts for bands

---

## 10. Case Study: 30-Year-Old FIRE Aspirant

| Year | Equity % | Debt % | Portfolio Value |
|------|----------|--------|-----------------|
| 30   | 80       | 20     | ₹50 L           |
| 40   | 65       | 35     | ₹2.1 Cr         |
| 45   | 50       | 50     | ₹3.8 Cr         |
*Assumes ₹1 L monthly SIP, 12 % equity, 7 % debt, 10 % step-up.*

---

## 11. Tax-Efficient Rebalancing
- **Harvest losses** before 31 Mar.  
- **Switch via STP** to defer gains.  
- **Use NPS** for additional 80CCD(1B) ₹50k.

---

## 12. Common Mistakes
1. **Static allocation** → ignore age drift.  
2. **Home bias** → 0 % global equity.  
3. **Ignoring liquidity** → 90 % real estate.  
4. **Over-rebalancing** → >6 trades/yr.  
5. **Emotional overrides** → sell in 2020 crash.

---

## 13. Annual Review Checklist
- [ ] **Goal inflation** updated (CPI + 2 %)  
- [ ] **Risk score** re-measured  
- [ ] **Asset drift** calculated  
- [ ] **Tax-loss** harvested  
- [ ] **Liquidity buffer** 5 % intact

---

## 14. Sample IPS (One-Pager)

| Section | Entry |
|---------|-------|
| **Objective** | ₹5 Cr @ 50 yrs |
| **SAA today** | 75/15/10 Equity/Debt/Gold |
| **Tolerance** | ±15 % drawdown |
| **Rebalance** | Semi-annual |
| **Tactical band** | ±10 % |
| **Review date** | Every birthday |

---

## 15. Key Takeaways
- **SAA beats stock-picking** over decades.  
- **Age/risk glide-path** keeps plan relevant.  
- **Low-cost, broad, tax-efficient** instruments are non-negotiable.  
- **Rebalance with discipline**, not emotion.

---

## 16. Ready to Architect Your Allocation?

🔗 [**Book Your SAA Design Session**](https://www.moznoadvisory.com/saa-call)  
📥 [**Download Glide-Path Calculator**](https://www.moznoadvisory.com/saa-calc)

*Mozno Advisory is a SEBI-registered investment adviser. Asset allocation does not guarantee returns. Please read all product documents carefully.*
`;

export default function StrategicAssetAllocationPage() {
    return (
        <>
          <Head>
            <title>Strategic Asset Allocation – Mozno Advisory</title>
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