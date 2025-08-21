import Head from "next/head";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "./BlogPage.css";
import remarkGfm from "remark-gfm";

const markdown = `
# 2.4 Cash-Flow Management & Budgeting

> “Tell your money where to go, or you’ll wonder where it went.”

Mastering **cash-flow** is the **first domino** to every other financial goal.  
If you are 22-45, juggling EMIs, UPI splurges, and OTT subscriptions, this 2,000-word guide will give you **systems, apps, and scripts** to **track, control, and redirect** every rupee toward what actually matters.

---

## 1. Why Budgeting Beats Budgets

Old-school **“spend ₹200 on movies”** budgets fail because **life is unpredictable**.  
Modern cash-flow management is **directional**:

- **Automate** good behaviour  
- **Track** trends, not transactions  
- **Optimise** ruthlessly every 90 days

---

## 2. The 4-Step Cash-Flow Loop

| Step | Tool | KPI |
|------|------|-----|
| **Audit** | 90-day bank statement | Net surplus % |
| **Allocate** | 50/30/20 or Zero-based | % to goals |
| **Automate** | Bank rules + SIPs | Missed-payment = 0 |
| **Analyse** | Monthly dashboard | Spend vs budget variance |

---

## 3. Popular Budgeting Models

| Model | Split | Best For |
|-------|-------|----------|
| **50/30/20** | Needs/Wants/Savings | Salaried beginners |
| **Zero-based** | Every ₹ assigned | Freelancers |
| **Envelope** | Physical/digital jars | Couples |
| **YNAB** | Age of money | Tech-savvy users |

---

## 4. Tech Stack 2025

| App | Feature |
|-----|---------|
| **Walnut** | Auto-splits UPI, credit card |
| **Moneycontrol** | Portfolio + expense tracker |
| **Notion Template** | Custom category tags |
| **Google Sheets** | Pivot table magic |
| **Jupiter + Fi** | Auto-rules & pots |

---

## 5. Sample Monthly Cash-Flow (₹1.5 L Net)

| Category | % | ₹ | Notes |
|----------|---|---|-------|
| **Needs** | 50 % | 75k | Rent, EMIs, food |
| **Wants** | 25 % | 37.5k | Travel, dining |
| **Goals** | 20 % | 30k | SIPs, NPS |
| **Buffer** | 5 % | 7.5k | Misc/annual bills |

---

## 6. Automate the Flow

| Rule | Action |
|------|--------|
| Salary day | Auto-transfer ₹30k to investments |
| 1st weekend | Sweep excess to liquid fund |
| Credit-card | Full auto-debit on due date |
| OTT reminder | Annual purge every Jan |

---

## 7. Cutting the Fat – 15 Quick Wins

| Area | Hack | Monthly Save |
|------|------|--------------|
| **Subscriptions** | Share family plans | ₹800 |
| **Groceries** | Bulk on 1st & 15th | ₹1,200 |
| **Fuel** | Fuel credit card + weekends | ₹1,000 |
| **Dining** | 1 “no-spend” weekend | ₹2,000 |
| **Banking** | Zero-fee savings account | ₹300 |

---

## 8. Debt Avalanche vs Snowball

| Method | Logic | Psych Win |
|--------|-------|-----------|
| **Avalanche** | Highest interest first | Mathematically optimal |
| **Snowball** | Smallest balance first | Quick dopamine hit |

Mozno rule: **Avalanche for rates > 12 %, snowball for motivation**.

---

## 9. Couples & Joint Budgeting

| Tool | Benefit |
|------|---------|
| **Splitwise** | Shared expense tracking |
| **Shared Google Sheet** | Real-time update |
| **Monthly Money Date** | 30-min review + coffee |

---

## 10. Emergency Fund Formula

| Tier | Size | Vehicle | Liquidity |
|------|------|---------|-----------|
| **Tier 1** | 1 month | Savings A/c | T+0 |
| **Tier 2** | 2 months | Liquid fund | T+1 |
| **Tier 3** | 3 months | Ultra-short fund | T+2 |

---

## 11. Irregular Income Hacks

| Income Type | Rule |
|-------------|------|
| **Freelancer** | 30 % to GST + tax pot instantly |
| **Founder** | Quarterly salary + bonus sweep to goals |
| **Gig worker** | Weekly auto-invest 20 % |

---

## 12. Scripts & Templates

### 12.1 Weekly Review (10 min)
1. Open Walnut → export CSV  
2. Tag > ₹500 spends  
3. Update Google Sheet  
4. Celebrate if variance < 5 %

### 12.2 Monthly Dashboard
- **Income vs budget**  
- **SIP hit rate**  
- **Credit-card utilisation**  
- **Net-worth delta**

---

## 13. Case Study: 28-Year-Old Designer

| Metric | Before | After 6 months |
|--------|--------|----------------|
| **Savings rate** | 8 % | 28 % |
| **Sub-count** | 12 | 4 |
| **Cash buffer** | ₹20k | ₹2 L |

**Method**: 50/30/20 + auto-sweep + OTT audit.

---

## 14. Behavioural Nudges

| Nudge | Implementation |
|-------|----------------|
| **Default bias** | Auto-enrol SIP on salary day |
| **Loss aversion** | Rename pots “Europe Trip” not “Savings” |
| **Social proof** | Share net-worth chart with accountability buddy |

---

## 15. Annual Cash-Flow Tune-Up

- [ ] **Insurance premium** escrow created  
- [ ] **Credit score** > 750  
- [ ] **EMI-to-income** < 40 %  
- [ ] **Emergency fund** 6 months intact  
- [ ] **Annual raise** → 50 % to SIP

---

## 16. Key Takeaways

- **Track trends, not transactions**.  
- **Automate > will-power**.  
- **Review quarterly**, not daily.  
- **Cash-flow mastery is the foundation** for every other goal.

---

## 17. Ready to Master Your Money Flow?

🔗 [**Book a 30-Minute Cash-Flow Makeover**](https://www.moznoadvisory.com/cash-call)  
📥 [**Download Budget Template**](https://www.moznoadvisory.com/budget-template)

*Mozno Advisory is a SEBI-registered investment adviser. Budgeting is advisory; actual results depend on execution.*
`;

export default function CashFlowBudgetingPage() {
    return (
        <>
          <Head>
            <title>Cash-Flow Management & Budgeting – Mozno Advisory</title>
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