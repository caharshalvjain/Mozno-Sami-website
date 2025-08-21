import Head from "next/head";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "./BlogPage.css";
import remarkGfm from "remark-gfm";

const markdown = `
# 6.1 Estate Planning & Wealth Transfer  
> “We spend our lives creating wealth; an estate plan ensures it creates the life we want for the next generation.”

Estate planning is **not only for the ultra-rich**.  
If you are 22-45 and already own **ESOPs, mutual funds, a flat, or crypto**, you have an **estate** that needs a **plan**.  
This 2,000-word guide demystifies **how to transfer every rupee—smoothly, legally, and tax-efficiently**—so **your wishes outlive you** and **family harmony outlives disputes**.

---

## 1. Why Estate Planning Matters Now

| Stat | Reality Check |
|------|---------------|
| **70 % Indians** die intestate (no valid will) | Family feuds, frozen assets |
| **Average wealth** at 35: ₹1-5 Cr | ESOPs, MF, FDs, crypto |
| **Legal battles** | 10-15 yrs, ₹5-50 L cost |
| **Succession act** | 50 % to spouse + 50 % split among kids (if no will) |

---

## 2. The Estate Planning Pyramid

| Tier | Tool | Purpose |
|------|------|---------|
| **Tier 1** | Nomination + Beneficiary | Quick liquidity |
| **Tier 2** | Will | Legal distribution |
| **Tier 3** | Trusts | Control & tax efficiency |
| **Tier 4** | Family Constitution | Values & governance |

---

## 3. Mapping Your Estate (15-Minute Exercise)

| Asset | Value (₹) | Nominee? | Will? | Tax on Transfer |
|-------|-----------|----------|-------|-----------------|
| **Flat in Bengaluru** | 1.2 Cr | Yes | TBD | Stamp duty 5 % |
| **MF Portfolio** | 60 L | Yes | TBD | Nil (transmission) |
| **ESOPs** | 40 L | No | TBD | Capital gains |
| **US stocks** | 25 L | No | TBD | Estate tax (if US situs) |
| **Crypto** | 10 L | No | TBD | 30 % gains |

---

## 4. Wealth-Transfer Channels

| Channel | Speed | Cost | Control |
|---------|-------|------|---------|
| **Nomination** | T+1 | Nil | No control post-death |
| **Will** | 6-18 m | ₹5k-₹15k | Full control |
| **Living Trust** | Immediate | ₹25k-₹1 L | Granular control |
| **Gift Deed** | Immediate | Stamp duty | Irrevocable |

---

## 5. Tax Implications of Wealth Transfer

| Mode | Recipient | Tax |
|------|-----------|-----|
| **Inheritance via Will** | Any | **Nil** (after 2005 amendment) |
| **Gift to relative** | Spouse, kids, parents | **Nil** |
| **Gift to non-relative** | > ₹50k | Slab rate |
| **US stock inheritance** | US citizen | 40 % estate tax above $60k |

---

## 6. Digital Assets & Crypto Succession

| Challenge | Solution |
|-----------|----------|
| **Private keys lost** | Hardware wallet + seed phrase in bank locker |
| **Exchange death protocol** | Nominee form + legal heir certificate |
| **Regulatory clarity** | Treat as capital asset, disclose in ITR |

---

## 7. Case Study: 33-Year-Old Techie

| Asset | Plan | Tool |
|-------|------|------|
| **Flat** | Transfer to spouse via Will | Registered Will |
| **MF** | Equal to parents & spouse | Nomination + Will |
| **ESOPs** | Trust for kids’ education | Revocable living trust |
| **Crypto** | Seed phrase + hardware wallet | Safety deposit box |

---

## 8. Trust Structures Explained

| Type | Control | Tax | Use Case |
|------|---------|-----|----------|
| **Revocable Living** | High | Grantor taxed | Flexibility |
| **Irrevocable** | Low | Trust taxed | Asset protection |
| **Testamentary** | From death | Trust taxed | Minor kids |
| **Spendthrift** | Trustee | Trust taxed | Spendthrift heirs |

---

## 9. Family Limited Liability Partnership (FLLP)

| Benefit | Details |
|---------|---------|
| **Business continuity** | Shares pass to heirs seamlessly |
| **Limited liability** | Protect personal assets |
| **Tax neutral** | Pass-through taxation |

---

## 10. Tools & Professionals

| Tool | Use |
|------|-----|
| **Will Generator** | Online templates (LegalKart, Vakilsearch) |
| **Trust deed templates** | CA + lawyer |
| **Family Constitution** | 2-hour facilitated workshop |
| **Digital vault** | DigiLocker + Google Drive |

---

## 11. Annual Review Ritual

| Event | Action |
|-------|--------|
| **Birth of child** | Add nominee + update will |
| **Asset sale** | Remove from schedule |
| **New ESOP lot** | Update schedule |
| **Marriage** | Add spouse as contingent beneficiary |

---

## 12. Key Takeaways

- **Start with a simple will**; layer trusts as complexity grows.  
- **Nomination + will = fastest liquidity**.  
- **Trusts protect minors and cap taxes**.  
- **Review every big life event**.

---

## 13. Ready to Build Your Legacy Blueprint?

🔗 [Book Estate Planning Consultation](https://www.moznoadvisory.com/estate-call)  
📥 [Download Estate-Asset Register](https://www.moznoadvisory.com/estate-register)

*Mozno Advisory works with empanelled lawyers and chartered accountants. Legal advice may vary by jurisdiction.*
`;

export default function EstatePlanningPage() {
    return (
        <>
          <Head>
            <title>Estate Planning & Wealth Transfer – Mozno Advisory</title>
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