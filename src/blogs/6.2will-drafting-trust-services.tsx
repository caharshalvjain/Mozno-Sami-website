import Head from "next/head";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "./BlogPage.css";
import remarkGfm from "remark-gfm";

const markdown = `
# 6.2 Will Drafting & Trust Services
> “A will is the loudest voice you leave behind when you can’t speak.”

A **valid will** is the **cheapest legal document** that prevents **crores of rupees** from being **tied up for decades**.  
Trusts go a step further—**protecting minors, avoiding probate, and saving taxes**.  
This 2,000-word guide shows **how to draft, register, and fund wills & trusts**—tailored for **22-45-year-old Indians** who’d rather **plan now than litigate later**.

---

## 1. Why a Will Beats Intestacy

| Intestate Share | Will Share |
|-----------------|------------|
| Spouse + kids + parents | **Exactly what you decide** |
| Court fees & delays | **Zero court (if registered)** |
| Equal split (HUF) | **Unequal, conditional gifts** |

---

## 2. Who Needs a Will—Yesterday vs Today

| Age Bracket | Trigger |
|-------------|---------|
| **22-30** | ESOPs, first flat, crypto |
| **30-40** | Kids, joint home loan |
| **40-45** | Business equity, second home |

---

## 3. Components of a Valid Will

| Part | Description |
|------|-------------|
| **Title** | Last Will and Testament of [Name] |
| **Revocation** | Cancels earlier wills |
| **Executor** | Person to carry out wishes |
| **Beneficiaries** | Who gets what |
| **Specific bequests** | Jewellery, car, shares |
| **Residuary clause** | “Rest goes to…” |
| **Date & signature** | Two witnesses |

---

## 4. Will vs Trust – Quick Decoder

| Factor | Will | Trust |
|--------|------|-------|
| **Effective** | After death | Immediately (living) |
| **Probate** | Yes | No |
| **Control** | Absolute | Trustee control |
| **Cost** | ₹3k-₹25k | ₹25k-₹2 L |
| **Tax** | Nil on inheritance | Trust taxed |

---

## 5. Types of Trusts in India

| Trust | Control | Use Case |
|-------|---------|----------|
| **Revocable Living** | Grantor retains | Flexibility |
| **Irrevocable** | Trustee | Asset protection |
| **Testamentary** | From will | Minor beneficiaries |
| **Special Needs** | Trustee | Disabled heirs |
| **Charitable** | Public | CSR & legacy |

---

## 6. Step-by-Step Will Drafting (DIY)

| Step | Tool |
|------|------|
| **Asset list** | Google Sheet |
| **Beneficiary matrix** | Family tree |
| **Executor choice** | Reliable sibling/friend |
| **Witnesses** | Two non-beneficiaries |
| **Registration** | Sub-registrar (optional but bullet-proof) |

---

## 7. Registration Process (Optional but Recommended)

| Location | Fee (₹) | Timeline |
|----------|---------|----------|
| **Sub-registrar office** | ₹200-₹500 | Same day |
| **Online (Maharashtra)** | ₹1,000 | 2 days |
| **Video-will (future)** | Pilot in 3 states | TBD |

---

## 8. Trust Deed Essentials

| Clause | Purpose |
|--------|---------|
| **Settlor & trustee** | Powers & duties |
| **Beneficiaries** | Vested vs contingent |
| **Corpus** | Assets transferred |
| **Rule against perpetuity** | 21 years max post-death |
| **Tax clause** | Trust taxation |

---

## 9. Funding the Trust

| Asset | Mode | Note |
|-------|------|------|
| **Cash** | Cheque/RTGS | Immediate |
| **Shares** | Off-market transfer | Gift deed |
| **Property** | Gift deed + stamp duty | 2-7 % state-wise |
| **Crypto** | Seed phrase in trust deed | Emerging |

---

## 10. Case Study: 35-Year-Old Entrepreneur

| Asset | Will Clause | Trust Clause |
|-------|-------------|--------------|
| **Startup equity** | 60 % to spouse | 40 % in trust for kids’ education |
| **Flat** | Spouse lifetime, then kids | – |
| **Gold** | Mother | – |
| **Mutual funds** | – | 100 % in trust for kids |

---

## 11. Digital & Video Wills

| Platform | Validity | Notarisation |
|----------|----------|--------------|
| **WillJini** | Yes | Optional |
| **Video will (Zoom)** | Yes (pilot) | Two witnesses |
| **Blockchain will** | Concept | Not yet recognised |

---

## 12. Executor & Guardian Selection

| Role | Criteria | Backup |
|------|----------|--------|
| **Executor** | Financially savvy | Alternate executor |
| **Guardian (minors)** | Same values | Alternate guardian |
| **Trustee** | Professional CA/lawyer | Co-trustee |

---

## 13. Common Mistakes

| Mistake | Fix |
|---------|-----|
| **Unsigned will** | Sign every page |
| **Beneficiary as witness** | Invalidates gift |
| **Outdated will** | Review every 3 yrs |
| **No residuary clause** | Intestacy for leftovers |

---

## 14. Costs Snapshot

| Service | Fee (₹) |
|---------|---------|
| **DIY will template** | Free-₹1k |
| **Lawyer-drafted will** | ₹5k-₹15k |
| **Registered will** | ₹200-₹500 |
| **Trust deed** | ₹25k-₹1 L |
| **Notarisation** | ₹100-₹500 |

---

## 15. Key Takeaways

- **A simple registered will** covers 90 % of needs.  
- **Trusts protect minors and reduce taxes**.  
- **Update every 3-5 years or life event**.  
- **Store safely**—digital + physical copies.

---

## 16. Ready to Draft Your Will?

🔗 [Book Will & Trust Consultation](https://www.moznoadvisory.com/will-call)  
📥 [Download Will Template](https://www.moznoadvisory.com/will-template)

*Mozno Advisory works with empanelled lawyers. Legal validity subject to Indian Succession Act, 1925.*
`;

export default function WillTrustServicesPage() {
    return (
        <>
          <Head>
            <title>Will Drafting & Trust Services – Mozno Advisory</title>
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