import Head from "next/head";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "./BlogPage.css";
import remarkGfm from "remark-gfm";

const markdown = `
# 4.3 Motor & General Insurance
> “Protect the assets that move you—and the ones that don’t.”

India registers **2.1 crore new vehicles** every year and **₹50,000 crore in non-life claims**.  
For 22-45-year-olds, **motor, home, travel, and gadget insurance** are **cheapest risk transfers** available.  
This 2,000-word guide decodes **coverage, add-ons, claim hacks, and renewal tricks**—so you’re never caught off-guard.

---

## 1. Motor Insurance – Third-Party vs Comprehensive
| Cover | Mandatory? | Damage to Own Car? | Premium |
|-------|------------|--------------------|---------|
| **Third-party** | Yes | No | ₹3k-₹10k |
| **Comprehensive** | No | Yes | ₹12k-₹50k |

**Rule**: Always buy **comprehensive** for cars < 7 yrs.

---

## 2. Add-Ons That Actually Matter
| Add-on | Cost | Claim Example |
|--------|------|---------------|
| **Zero Depreciation** | ₹2k/yr | Bumper ₹15k → ₹0 out-of-pocket |
| **Engine Protector** | ₹1k/yr | Flood damage ₹1.2 L |
| **Roadside Assistance** | ₹500/yr | Flat tyre @ midnight |
| **Return to Invoice** | ₹1.5k/yr | Total loss, get ex-showroom |

---

## 3. No-Claim Bonus (NCB) Hack
| Claim-Free Years | Discount |
|------------------|----------|
| 1 year | 20 % |
| 5 years | 50 % |
| **Break-even** | Self-fund claims < ₹20k to keep NCB |

---

## 4. Home Insurance – Structure vs Contents
| Cover | What’s Covered | Typical Premium |
|-------|----------------|-----------------|
| **Structure** | Fire, earthquake | ₹2k/₹50 L |
| **Contents** | Jewellery, electronics | ₹1k/₹10 L |
| **Tenant** | Contents only | ₹500/yr |

---

## 5. Travel Insurance – Domestic & International
| Scenario | Cover | Premium |
|----------|-------|---------|
| **Domestic flight delay** | ₹1k/hr | ₹250 |
| **International medical** | $250k | ₹1,500 (7-day US) |
| **Trip cancellation** | 100 % | ₹800 |

---

## 6. Gadget & Personal Accident
| Product | Cover | Premium |
|---------|-------|---------|
| **Mobile screen** | ₹30k | ₹1,200/yr |
| **Personal accident** | ₹25 L | ₹1,500/yr |
| **Wallet loss** | ₹10k | ₹300/yr |

---

## 7. Premium Comparison – Motor (2025)
| Insurer | IDV ₹8 L | Zero Dep | Premium |
|---------|----------|----------|---------|
| **Bajaj Allianz** | ₹8 L | Yes | ₹18k |
| **HDFC Ergo** | ₹8 L | Yes | ₹17k |
| **ICICI Lombard** | ₹8 L | Yes | ₹16.5k |

---

## 8. Claim Process – Motor
| Step | Timeline |
|------|----------|
| **Intimate insurer** | Within 24 hrs |
| **Survey & estimate** | 48 hrs |
| **Cashless approval** | 4 hrs (network garage) |
| **Reimbursement** | 7 days |

---

## 9. Renewal Hacks
| Hack | Savings |
|------|---------|
| **Compare online** | 15–30 % |
| **Voluntary deductible** | ₹2k premium cut |
| **Multi-year policy** | 5–10 % |
| **Bundle home + motor** | 10 % |

---

## 10. Key Takeaways
- **Comprehensive motor + zero dep** is non-negotiable.  
- **Home insurance is cheaper than one pizza a month**.  
- **Travel insurance costs less than airport coffee**.  
- **Bundle policies** for discounts and single renewal date.

---

## 11. Ready to Protect Everything?

🔗 [Book General Insurance Review](https://www.moznoadvisory.com/general-call)  
📥 [Download Add-On Cheat-Sheet](https://www.moznoadvisory.com/addon-sheet)

*Mozno Advisory is an IRDAI-licensed insurance broker. Terms and conditions apply.*
`;

export default function MotorGeneralInsurancePage() {
    return (
        <>
          <Head>
            <title>Motor & General Insurance – Mozno Advisory</title>
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