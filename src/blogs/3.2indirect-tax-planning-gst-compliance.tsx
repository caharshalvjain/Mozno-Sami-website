import Head from "next/head";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "./BlogPage.css";
import remarkGfm from "remark-gfm";

const markdown = `
# 3.2 Indirect Tax Planning & GST Compliance
> “GST is not a cost centre—it’s a cash-flow lever when managed right.”

If you are a **freelancer, Amazon seller, SaaS founder, or boutique consultant** aged 22-45, **GST compliance** can make or break your working capital.  
This 2,000-word guide covers **registration to refunds**, **input tax credit (ITC) hacks**, and **audit-proof record-keeping** so you stay **penalty-free** and **cash-flow positive**.

---

## 1. GST Landscape 2025

| Tax Head | Rate | Applies To |
|----------|------|------------|
| **CGST** | 9 % | Intrastate |
| **SGST** | 9 % | Intrastate |
| **IGST** | 18 % | Interstate |
| **Compensation Cess** | 1-22 % | Luxury & sin goods |

---

## 2. Registration Triggers

| Scenario | Threshold (₹) | Action |
|----------|----------------|--------|
| **Service provider** | ₹20 L (₹10 L NE) | Compulsory registration |
| **Goods supplier** | ₹40 L | Compulsory |
| **E-commerce operator** | Any turnover | Immediate |
| **Casual taxable person** | No threshold | 90-day temporary registration |

---

## 3. Choosing the Right Scheme

| Scheme | Pros | Cons |
|--------|------|------|
| **Regular** | Full ITC | Monthly returns |
| **Composition** | 1-6 % flat rate | No ITC, ₹1.5 Cr cap |
| **QRMP** | Quarterly return, monthly PMT-06 | Ideal for < ₹5 Cr |

---

## 4. Input Tax Credit (ITC) Maximisation

| Expense | ITC Eligible | Proof |
|---------|--------------|-------|
| **Laptop purchase** | 18 % GST | Tax invoice + e-way bill |
| **Cloud hosting** | 18 % GST | Invoice with GSTIN |
| **Professional fees** | 18 % GST | GSTR-2A match |
| **Petrol (business)** | No | Blocked credit list |

**Pro-tip**: Use **TallyPrime** auto-matching with **GSTR-2A** to catch missing credits.

---

## 5. Filing Calendar

| Return | Due Date | Frequency |
|--------|----------|-----------|
| **GSTR-1** | 11th next month | Monthly |
| **GSTR-3B** | 20th next month | Monthly |
| **GSTR-9** | 31 Dec FY | Annual |
| **GSTR-9C** | 31 Dec FY | If turnover > ₹5 Cr |

QRMP users file **GSTR-1 quarterly**, **PMT-06 monthly**.

---

## 6. E-way Bill & E-invoicing

| Turnover | Requirement |
|----------|-------------|
| **> ₹5 Cr** | E-invoice mandatory |
| **> ₹50,000** | E-way bill for interstate movement |

**Hack**: Generate e-way bill **auto-linked** to e-invoice via API.

---

## 7. GST Planning Strategies

| Strategy | Benefit |
|----------|---------|
| **Branch transfer** | Stock transfer without GST via GTA |
| **RCM on reverse charge** | Claim ITC on legal fees |
| **Export LUT** | Zero-rated supply, claim refund |
| **Input service distributor** | Pool ITC across branches |

---

## 8. Working-Capital Optimisation

| Lever | Impact |
|-------|--------|
| **Claim ITC in 30 days** | Improves cash-flow by 18 % |
| **Early filing** | Faster refund cycle |
| **Invoice discounting** | Monetise receivables @ 1 %/month |

---

## 9. Common Mistakes & Penalties

| Mistake | Penalty |
|---------|---------|
| **Late GSTR-3B** | ₹50/day (₹20 CGST + ₹30 SGST) |
| **Wrong HSN code** | ₹25,000 |
| **ITC mismatch** | 100 % of excess credit + interest |
| **No e-way bill** | ₹10,000 or tax evaded, whichever higher |

---

## 10. Tech Stack for Compliance

| App | Feature |
|-----|---------|
| **ClearTax GST** | Auto-upload invoices |
| **Zoho Books** | E-invoice + e-way bill |
| **GSTZen** | GSTR-2A reconciliation |
| **Khatabook** | Small shop invoicing |

---

## 11. Case Study: SaaS Startup

| Metric | Year 1 | Year 2 |
|--------|--------|--------|
| **Turnover** | ₹1.2 Cr | ₹3.5 Cr |
| **GST paid** | ₹21.6 L | ₹63 L |
| **ITC claimed** | ₹18.9 L | ₹59 L |
| **Refund (export)** | ₹2.7 L | ₹4 L |

**Action**: Switched to **LUT + monthly refund** → **working-capital positive**.

---

## 12. Annual Compliance Checklist

- [ ] **GST audit** if turnover > ₹5 Cr  
- [ ] **E-way bill compliance** 100 %  
- [ ] **ITC reconciliation** by 30 Sep  
- [ ] **Outstanding demand** closure  
- [ ] **Upgrade to QRMP** if eligible

---

## 13. Key Takeaways

- **Register early**—penalties > benefits of delay.  
- **Claim every eligible ITC**—it’s a cash-flow booster.  
- **Automate filings**—deadlines are non-negotiable.  
- **Audit-proof records**—cloud + backups.

---

## 14. Ready for Audit-Proof GST?

🔗 [**Book Your GST Health Check**](https://www.moznoadvisory.com/gst-call)  
📥 [**Download GST Compliance Checklist**](https://www.moznoadvisory.com/gst-checklist)

*Mozno Advisory partners with chartered accountants for GST registration, return filing, and refund assistance. Always consult a GST practitioner for complex cases.*
`;

export default function IndirectTaxGSTPage() {
    return (
        <>
          <Head>
            <title>Indirect Tax & GST Compliance – Mozno Advisory</title>
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