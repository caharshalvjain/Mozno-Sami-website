import Head from "next/head";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "./BlogPage.css";
import remarkGfm from "remark-gfm";

const markdown = `
# 5.4 Builder Finance & Stressed Asset Funding
> “Where others see distress, smart capital sees discounted cash-flows.”

Real-estate cycles create **opportunities**—completed but unsold inventory, stalled projects, or under-valued land parcels.  
For 22-45-year-old **HNIs, family offices, or real-estate professionals**, **builder finance** and **stressed-asset funding** can generate **IRR 18-25 %** over 3-7 years.  
This 2,000-word guide walks you through **due-diligence, structures, risks, and exit routes**—so you **buy the asset, not the headache**.

---

## 1. Builder Finance vs Stressed Assets – Definitions

| Segment | Asset | Ticket | Target IRR | Risk |
|---------|-------|--------|------------|------|
| **Construction finance** | Under-construction | ₹5-₹100 Cr | 15-18 % | Construction delay |
| **Stressed inventory** | Completed unsold | ₹2-₹50 Cr | 18-22 % | Sales velocity |
| **Land acquisition** | Land bank | ₹10-₹200 Cr | 20-25 % | Regulatory clearances |

---

## 2. Capital Stack & Structures

| Layer | Instrument | Rate | Security |
|-------|------------|------|----------|
| **Senior debt** | Construction loan | 10-13 % | First charge |
| **Mezzanine** | Preference shares | 15-18 % | Second charge |
| **Equity** | JV / SPV shares | 20-25 % | Exit multiple |

---

## 3. Funding Vehicles

| Vehicle | Min Ticket | Regulatory | Liquidity |
|---------|------------|------------|-----------|
| **AIF Cat-II (RE)** | ₹1 Cr | SEBI | Quarterly |
| **NBFC PMS** | ₹50 L | RBI | 3-5 yrs |
| **Direct SPV** | ₹25 L | LLP | Project exit |

---

## 4. Due-Diligence Checklist

| Category | Red Flags | Green Flags |
|----------|-----------|-------------|
| **Title** | Encumbrances > 20 % | Clear 7/12 or OC |
| **Approvals** | Missing CC | Full CC & OC |
| **Sales velocity** | < 10 % per quarter | > 25 % per quarter |
| **Developer track** | > 2 delayed projects | On-time delivery |
| **Financials** | Negative cash-flow | DSCR > 1.2 |

---

## 5. Stress-Testing Scenarios

| Scenario | Base IRR | Stressed IRR | Mitigation |
|----------|----------|--------------|------------|
| **Sales slow 30 %** | 20 % | 12 % | Price drop buffer |
| **Construction delay 6 m** | 18 % | 15 % | Liquidated damages |
| **Policy change** | 22 % | 10 % | Exit via rental yield |

---

## 6. Government & NBFC Schemes

| Scheme | Role | Benefit |
|--------|------|---------|
| **SWAMIH Fund** | Stalled projects | ₹25k Cr corpus, 15 % IRR target |
| **NBFC stress fund** | Inventory buy-out | 18 % target, 3-yr exit |
| **REIT route** | Completed rental assets | 8-10 % yield + capital gain |

---

## 7. Case Studies

### 7.1 Stalled Residential Tower – Mumbai Suburbs
- **Status**: 70 % complete, 2 yrs delay  
- **Funding**: ₹30 L AIF ticket  
- **Exit**: Completion + sales in 24 months  
- **IRR**: **22 % net**

### 7.2 Commercial Warehouse – NCR
- **Asset**: 2 lakh sq ft Grade-A  
- **Funding**: ₹10 Cr mezzanine  
- **Exit**: Lease to e-commerce + REIT roll-up  
- **IRR**: **19 %**

---

## 8. Risk Matrix

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| **Regulatory delay** | Medium | High | Escrow account |
| **Market downturn** | High | Medium | V-shape recovery history |
| **Developer default** | Low | High | Step-in rights |
| **Liquidity crunch** | Medium | Medium | Quarterly NAV |

---

## 9. Legal & Tax Considerations

| Aspect | Structure | Tax |
|--------|-----------|-----|
| **Capital gains** | SPV exit | 20 % with indexation |
| **Rental income** | SPV | 30 % flat |
| **GST on sale** | Developer | 5 % (residential) |
| **TDS on purchase** | Buyer | 1 % if > ₹50 L |

---

## 10. Funding Timeline

| Phase | Duration | Milestone |
|-------|----------|-----------|
| **Due-diligence** | 30 days | Technical & legal sign-off |
| **Sanction** | 15 days | MOU + escrow |
| **Disbursement** | 45 days | Tranche linked milestones |
| **Exit** | 24-36 months | Sales / REIT listing |

---

## 11. Key Takeaways

- **Stressed assets = discounted entry + forced exit**.  
- **Due-diligence > price**—title & approvals are non-negotiable.  
- **Mezzanine structures balance risk-reward**.  
- **Exit via sales, REIT, or rental cash-flows**.

---

## 12. Ready to Explore?

🔗 [Book Builder Finance Intro Call](https://www.moznoadvisory.com/builder-call)  
📥 [Download Due-Diligence Template](https://www.moznoadvisory.com/dd-template)

*Mozno Advisory sources opportunities via AIFs, NBFCs, and direct SPVs. Investments carry market, regulatory, and liquidity risks.*
`;

export default function BuilderStressedAssetPage() {
    return (
        <>
          <Head>
            <title>Builder Finance & Stressed Asset Funding – Mozno Advisory</title>
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