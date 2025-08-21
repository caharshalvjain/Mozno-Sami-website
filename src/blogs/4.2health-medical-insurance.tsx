import Head from "next/head";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "./BlogPage.css";
import remarkGfm from "remark-gfm";

const markdown = `
# 4.2 Health & Medical Insurance  
> “Medical inflation in India is 12–14 % per year—your savings account isn’t.”

A single cardiac surgery can wipe out **₹8–10 lakh** of savings.  
For 22-45-year-olds, health insurance is **not optional**—it’s the **financial helmet** against life’s curveballs.  
This 2,000-word guide covers **how much cover, floater vs individual, top-ups vs super-top-ups, OPD, and digital claims**—tailored for Indian millennials and Gen-Z.

---

## 1. Why Health Insurance Beats Self-Funding

| Scenario | Cost | Insurance Pays |
|----------|------|----------------|
| **Appendix surgery** | ₹2 L | ₹0 deductible |
| **Cancer chemo** | ₹12 L | ₹11.5 L (5 % copay) |
| **COVID ICU** | ₹6 L | ₹5.7 L (after consumables) |

---

## 2. How Much Cover Do You Need?

| Age | Single | Couple | Couple + 2 kids | Recommendation |
|-----|--------|--------|-----------------|----------------|
| 22-30 | ₹5 L | ₹10 L floater | ₹15 L floater | Upgrade every 5 yrs |
| 30-40 | ₹10 L | ₹20 L | ₹25-30 L | Add top-up |
| 40-45 | ₹20 L | ₹30 L | ₹50 L | Super-top-up |

Mozno rule: **Annual cover ≥ 50 % of annual income**.

---

## 3. Plan Types Decoded

| Plan Type | Best For | Pros | Cons |
|-----------|----------|------|------|
| **Individual** | Single | No dilution | Higher premium |
| **Family Floater** | Nuclear | Cheaper | Age-based premium jump |
| **Senior Citizen** | Parents | No pre-medical | High premium, copay |
| **Group Cover** | Start-ups | Free | Ceases on exit |

---

## 4. Key Features to Compare

| Feature | Ideal | Notes |
|---------|-------|-------|
| **Room rent cap** | Single private AC | No-cap = better |
| **Copay** | 0 % or 5 % | Avoid > 10 % |
| **Restoration** | Unlimited | Lifesaver |
| **No-claim bonus** | 50–100 % | Cumulative |
| **Pre-existing wait** | 2–3 yrs | Shorter is better |

---

## 5. Top-Up vs Super-Top-Up

| Metric | Top-Up | Super-Top-Up |
|--------|--------|--------------|
| **Trigger** | Single claim > deductible | Aggregate claims > deductible |
| **Example** | ₹10 L base + ₹30 L top-up with ₹10 L deductible | Same, but covers multiple claims |
| **Cost** | ₹2,500/yr | ₹3,500/yr for ₹30 L |

**Winner**: **Super-top-up** for families.

---

## 6. Premium Comparison Snapshot (2025)

| Insurer | ₹10 L Floater | Claim Ratio | Network Hospitals |
|---------|---------------|-------------|-------------------|
| **Star Health** | ₹18k | 99 % | 13,000+ |
| **HDFC Ergo** | ₹16k | 97 % | 12,000+ |
| **ICICI Lombard** | ₹17k | 98 % | 11,000+ |
| **Care Health** | ₹15k | 96 % | 9,800+ |

\*30-yr couple + 2 kids, no pre-existing.

---

## 7. Riders & Add-ons

| Rider | Cost | When to Add |
|-------|------|-------------|
| **Maternity** | ₹3k/yr | Planning baby |
| **OPD** | ₹4k/yr | Frequent doctor visits |
| **Critical illness** | ₹1k/yr | Family history |
| **Air ambulance** | ₹500/yr | Tier-2/3 cities |

---

## 8. Digital Claims Process

1. **Cashless**: Pre-authorisation at network hospital.  
2. **Reimbursement**: Upload bills within 30 days.  
3. **TAT**: 2 hrs cashless, 7 days reimbursement.  
4. **App tracking**: Live TPA chat.

---

## 9. Pre-Existing Disease (PED) Strategy

| Age | PED Likely | Action |
|-----|------------|--------|
| < 30 | Low | Buy early, cheapest premium |
| 30-40 | Moderate | Disclose fully, shorter wait |
| 40+ | High | Moratorium route (8 yrs) |

---

## 10. Employer vs Personal Cover

| Factor | Employer | Personal |
|--------|----------|----------|
| **Sum insured** | ₹3-5 L | Customisable |
| **Portability** | No | Yes |
| **Premium** | Free | Paid |
| **Recommendation** | Use as base, top-up personal |

---

## 11. Annual Review Checklist

- [ ] **Sum insured** ≥ 50 % income rise  
- [ ] **New members** added (newborn)  
- [ ] **PED completed** wait period  
- [ ] **Port better plan** if cheaper  
- [ ] **Top-up** upgraded

---

## 12. Key Takeaways

- **₹10 L is the new ₹5 L**—medical inflation demands it.  
- **Family floater + super-top-up** is the sweet spot.  
- **Buy before 30**—cheapest lifetime premium.  
- **Disclose everything**—claims denied for non-disclosure.

---

## 13. Ready to Compare?

🔗 [**Book Your Health Policy Consultation**](https://www.moznoadvisory.com/health-call)  
📥 [**Download Premium Comparison Sheet**](https://www.moznoadvisory.com/health-sheet)

*Mozno Advisory is an IRDAI-licensed insurance broker. Terms and conditions apply.*
`;

export default function HealthMedicalInsurancePage() {
    return (
        <>
          <Head>
            <title>Health & Medical Insurance – Mozno Advisory</title>
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