import Head from "next/head";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "./BlogPage.css";
import remarkGfm from "remark-gfm";

/* ------------------------------------------------------------------ */
/*  Markdown content – verbatim copy of pms-services.md                */
/* ------------------------------------------------------------------ */
const markdown = `
# Portfolio Management Services (PMS): The Premium Wealth-Building Playbook for 22-45-Year-Old Indians

> *“When your net-worth starts looking like a phone number, cookie-cutter investing stops making sense.”*

If you are **22-45 years old**, earning strong cash-flow, and sitting on **more than ₹50 lakh** in investable surplus, **Portfolio Management Services (PMS)** can move the needle from **“wealth accumulation”** to **“wealth acceleration”**. Unlike mutual funds that pool thousands of investors, PMS creates a **separate, personalised portfolio in your own demat account**, run by a professional fund manager who can take **concentrated bets, use derivatives, and time the market**—all while staying within SEBI’s tight regulatory guardrails.

At **Mozno Advisory**, we **curate, monitor, and periodically rotate PMS strategies** for young professionals, entrepreneurs, and CXOs who demand **alpha, transparency, and tax efficiency** in one package. Below is a **2,000-word master-guide** that walks you through **every nuance you need** before writing that first ₹50 lakh cheque.

---

## 1. What Exactly Is PMS?

| Parameter | Mutual Fund | PMS | AIF Cat-III |
|-----------|-------------|-----|-------------|
| **Minimum Ticket** | ₹500 SIP | **₹50 lakh** | ₹1 crore |
| **Ownership** | Pooled units | **Your own stocks** | LLP/Trust units |
| **Flexibility** | 10 % max single stock | **Up to 25 % single stock** | Flexible |
| **Derivatives** | Limited | **Full F&O allowed** | Full |
| **Reporting** | Monthly factsheet | **Daily/weekly portfolio** | Quarterly |
| **Taxation** | Investor level | **Direct in your PAN** | Pass-through |

---

## 2. Why PMS Makes Sense at 22-45

### 2.1 The Demographic Sweet Spot
- **High human-capital runway**: 20-35 years of future earnings.
- **Liquidity surplus**: ESOPs, business exits, founder liquidity events.

### 2.2 Numbers That Matter
| Starting Age | SIP in PMS (₹) | CAGR | Corpus @ 55 |
|--------------|----------------|------|-------------|
| 30           | 5 lakh/yr      | 15 % | ₹7.2 Cr |
| 30           | 5 lakh/yr      | 18 % | ₹11.4 Cr |
*Assumes step-up of 10 % per year.*

---

## 3. Regulatory Landscape (SEBI PMS Rules 2023)

- **Registration**: SEBI PMS licence mandatory. Check **ARN-PMS** on SEBI portal.  
- **Disclosure**: Daily NAV & portfolio e-mailed; **monthly performance** + **annual audit**.  
- **Leverage**: Gross exposure ≤ 200 % of net assets (derivatives included).  
- **Segregation**: Client assets held in **separate demat/bank accounts**—no pooling.  
- **Fees**: Only two components allowed—**fixed (max 2.5 % p.a.) + performance (max 20 % above hurdle)**.

---

## 4. PMS Styles in India (2024-25)

| Style | Description | Target CAGR | Volatility |
|-------|-------------|-------------|------------|
| **Large-Cap Focus** | Top-100 stocks, low churn | 12–14 % | Medium |
| **Flexi/Multi-Cap** | 50–70 stocks, active sector tilt | 15–17 % | Medium-High |
| **Mid/Small-Cap** | 25–40 high-growth stocks | 18–22 % | High |
| **Quant-Derivative** | Long-short via F&O, market-neutral | 14–16 % | Low |
| **ESG Leaders** | High-governance companies | 13–15 % | Medium |

---

## 5. Fee Structures Demystified

| Fee Type | Typical Range |
|----------|---------------|
| **Fixed** | 1.5–2.5 % p.a. |
| **Performance** | 10–20 % above hurdle |
| **Exit Load** | 0–2 % first year |

**Pro-tip**: Always ask for **“post-fee CAGR”** in the pitchbook, not gross.

---

## 6. Taxation Cheat-Sheet FY 2025-26

| Holding Period | Equity PMS | Derivative PMS |
|----------------|------------|----------------|
| **< 12 months** | 20 % STCG | Speculative 30 % |
| **≥ 12 months** | 12.5 % LTCG above ₹1.25 lakh | 12.5 % LTCG |
| **Sec 80C/80D** | Not applicable | Not applicable |

**Key**: Since stocks sit in **your own PAN**, you can **harvest losses** and **claim grandfathering** on pre-31-Jan-2018 holdings.

---

## 7. How Mozno Advisory Picks a PMS

### 7.1 Quant Filter
- **Rolling 5-yr CAGR ≥ 14 %**  
- **Downside capture < 75 %**  
- **Sharpe > 1.0** over last 5 yrs  
- **Maximum drawdown < 25 %**

### 7.2 Qual Filter
- **Fund-manager tenure ≥ 7 yrs**  
- **Skin in the game** (manager money ≥ ₹5 Cr)  
- **Transparent model portfolio** (no black-box)  
- **SEBI PMS licence clean track** (no show-cause notices)

### 7.3 Continuous Monitoring
- **Monthly attribution report** (sector vs stock bets)  
- **Quarterly call** with fund manager  
- **Annual audit** + **risk dashboard** (VaR, beta, concentration)

---

## 8. Case Studies

### 8.1 The ESOP Millionaire
**Profile**: 34-year-old fintech VP, just liquidated ₹2 Cr ESOPs.  
**Allocation**:  
- 70 % Mid/Small-Cap PMS (target 18 % CAGR)  
- 20 % Quant-Derivative PMS (market-neutral, 14 %)  
- 10 % Liquid fund buffer  

**Outcome (projected)**: ₹7.8 Cr at age 50, post-fees.

### 8.2 Young Entrepreneur
**Profile**: 28-year-old D2C founder, surplus ₹60 lakh.  
**Strategy**:  
- ₹50 lakh Flexi-Cap PMS (high-conviction 25 stocks)  
- ₹10 lakh index ETF (liquidity buffer)  

**Glide-path**: Shift 10 % to debt every birthday after 40.

---

## 9. Risk Controls in PMS

| Control | Mechanism |
|---------|-----------|
| **Concentration** | Single stock ≤ 25 %, sector ≤ 35 % |
| **Leverage** | Gross exposure ≤ 200 % (SEBI cap) |
| **Liquidity** | 90 % portfolio in top-500 stocks |
| **Stop-loss** | Model-level 15 % trailing stop (optional) |
| **Transparency** | **Real-time** back-office login |

---

## 10. Common Mistakes to Avoid

1. **Chasing last year’s star PMS** → leads to buying high.  
2. **Ignoring post-fee returns** → 2 % fees can erode 25 % wealth in 10 yrs.  
3. **Concentrated sector bets without hedge** → 2008 infra funds down 70 %.  
4. **No liquidity ladder** → PMS lock-in clashes with house down-payment.  
5. **Forgetting tax harvesting** → losing indexation on grandfathered stocks.

---

## 11. PMS vs DIY Stock-Picking

| Factor | DIY | PMS |
|--------|-----|-----|
| **Time** | 10 hrs/week | 0 hrs |
| **Research Depth** | Limited | Team of CFAs, tech stack |
| **Execution** | Retail brokerage | **Institutional DMA** |
| **Risk Tools** | Basic | **VaR, portfolio optimiser** |
| **Tax Planning** | Self | **Year-end loss harvesting** included |

---

## 12. Role of Mozno Advisory (End-to-End Service)

| Stage | Deliverable |
|-------|-------------|
| **Discovery** | 45-min risk interview + psychometrics |
| **Shortlist** | 3 PMS options matched to persona |
| **Due-Diligence** | Independent audit + peer benchmarking |
| **Onboarding** | KYC, PMS agreement, demat mapping |
| **Funding** | RTGS/Net-banking; 24-hr credit |
| **Monitoring** | Monthly call + dashboard |
| **Exit/Rebalance** | Trigger-based (goal or risk drift) |

---

## 13. Fee Negotiation Hacks

- **Bulk ticket**: ₹1 Cr+ usually fetches 0.75 % fixed vs 1.5 %.  
- **Performance hurdle**: Negotiate 10 % vs 12 %.  
- **Exit load waiver**: Ask for **nil after 12 months**.  
- **Family pooling**: Spouse + HUF can hit higher tier discounts.

---

## 14. Tax-Loss Harvesting Example

**Scenario**: ₹1 Cr portfolio, ₹20 lakh unrealised losses.  
**Action**: Book losses before 31 March → offset ₹20 lakh gains elsewhere → **tax saving = ₹2.5 lakh** (12.5 % LTCG).  
**Mozno Service**: Automated sell-buy in 30-day window to avoid wash-sale.

---

## 15. How to Start: 7-Day Action Plan

| Day | Task |
|-----|------|
| **1** | Fill **PMS Suitability Form** (link). |
| **2** | 30-minute Zoom call with Mozno expert. |
| **3** | Receive **custom PMS shortlist + factsheets**. |
| **4** | Compare **post-fee CAGR & max drawdown**. |
| **5** | Sign **PMS agreement** + KYC upload. |
| **6** | Fund account via RTGS; receive **welcome kit**. |
| **7** | **Live dashboard** credentials + first quarterly call invite.

---

## 16. Frequently Asked Questions

**Q1. Is ₹50 lakh too small to start PMS?**  
A: **No.** Many managers accept ₹50 lakh; pooling with family can unlock lower fees.

**Q2. Can I lose more than invested?**  
A: **No.** SEBI caps leverage at 200 % gross; your liability is limited to capital.

**Q3. How liquid is PMS?**  
A: **T+3 settlement** for equity; **monthly liquidity** for derivative strategies.

**Q4. Do I need a demat account?**  
A: **Yes**, stocks are held in **your own demat**—not pooled.

**Q5. Can I run SIPs into PMS?**  
A: **Monthly or quarterly** top-ups allowed; minimum ₹2 lakh per tranche.

---

## 17. Key Takeaways

- PMS is **not “costly mutual fund”**—it is **personalised, concentrated, and tax-transparent**.  
- **22-45 age group** has the **time and surplus** to harvest alpha efficiently.  
- **Manager selection + fee negotiation + ongoing monitoring** are the **three levers** that decide final wealth.  
- **Transparency and liquidity** have improved dramatically post-SEBI 2020 rules.

---

## 18. Ready to Explore?

🔗 [**Book Your Free PMS Strategy Call**](https://mozno.com)

*Mozno Advisory is a SEBI-registered investment adviser and AMFI-registered mutual fund distributor. PMS services are provided in partnership with SEBI-licensed portfolio managers. All investments are subject to market risks. Please read the PMS disclosure document carefully.*
`;

/* ------------------------------------------------------------------ */
/*  Page component                                                      */
/* ------------------------------------------------------------------ */
export default function PMSPage() {
  return (
      <>
        <Head>
          <title>PMS Guide – Mozno Advisory</title>
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