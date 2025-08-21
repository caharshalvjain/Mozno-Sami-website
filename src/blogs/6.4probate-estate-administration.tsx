import Head from "next/head";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "./BlogPage.css";
import remarkGfm from "remark-gfm";

const markdown = `
# 6.4 Probate & Estate Administration
> “Administration without administration is just administration—let’s make it administration.”

Probate is the **court-supervised process** that **validates a will** and **transfers assets** to legal heirs.  
Mismanagement can **freeze assets for years** and **drain 5-10 % in legal costs**.  
This 2,000-word guide walks **executors, family members, and beneficiaries** through **timelines, forms, fees, and hacks** to settle estates **swiftly and smoothly**.

---

## 1. What Is Probate?
| Aspect | Details |
|--------|---------|
| **Purpose** | Prove will & transfer assets |
| **Court** | District court (civil) |
| **Duration** | 6-24 months |
| **Cost** | 2-7 % of estate value |
| **Mandatory** | If immovable property or will disputes |

---

## 2. When Is Probate Needed?
| Trigger | Probate Required |
|---------|------------------|
| **Immovable property** | Always |
| **Bank A/c > ₹5 L** | Bank discretion |
| **Stocks in demat** | If no nomination |
| **Disputed will** | Mandatory |

---

## 3. Who Can Apply?
| Role | Eligibility |
|------|-------------|
| **Executor** | Named in will |
| **Legal heir** | If no will |
| **Administrator** | Court appointee |

---

## 4. Step-by-Step Probate Process (12-Month Timeline)
| Month | Action |
|-------|--------|
| **1** | Death certificate |
| **2** | Gazette & newspaper notice |
| **3** | Will search + witness affidavits |
| **4** | Court petition + court fees |
| **5-6** | Objection period |
| **7-8** | Evidence / witness hearing |
| **9-10** | Probate decree |
| **11-12** | Mutation + asset transfer |

---

## 5. Court Fees & Stamp Duty (State-wise)
| State | Court Fee | Stamp on Probate |
|-------|-----------|------------------|
| **Maharashtra** | ₹75k (₹1 Cr estate) | ₹75k |
| **Delhi** | ₹15k | ₹15k |
| **Karnataka** | ₹25k | ₹25k |

---

## 6. Documents Checklist
| Category | Documents |
|----------|-----------|
| **Death** | Death certificate |
| **Will** | Original + photocopies |
| **Assets** | Property card, bank statements |
| **Heirs** | Legal heir certificate |
| **Identity** | Aadhaar, PAN of heirs |

---

## 7. Asset-Specific Administration
| Asset | Process | Timeline |
|-------|---------|----------|
| **Bank account** | Succession certificate/ nominee | 1-4 weeks |
| **Demat shares** | Transmission form + death cert | 2-3 weeks |
| **Mutual funds** | AMC form + probate | 2-4 weeks |
| **Property** | Mutation + probate | 6-12 months |

---

## 8. Executor Responsibilities
| Task | Timeline |
|------|----------|
| **Secure assets** | Day 1 |
| **Notify banks** | 7 days |
| **Pay debts** | 30 days |
| **Distribute assets** | After probate |
| **File tax returns** | Before 31 July next year |

---

## 9. Tax Returns for Deceased
| Form | Due Date |
|------|----------|
| **ITR till death** | 31 July |
| **Estate ITR** | 31 July next year |
| **Capital gains** | Indexation benefit available |

---

## 10. Common Bottlenecks & Solutions
| Bottleneck | Solution |
|------------|----------|
| **Missing will** | Legal heir certificate |
| **Foreign assets** | Probate in foreign court |
| **Multiple heirs** | Mediation before court |
| **Property in other state** | Separate probate for each |

---

## 11. Digital Assets & Crypto Administration
| Asset | Access | Legal Tool |
|-------|--------|------------|
| **Exchange wallet** | Death certificate + court order | Transmission form |
| **Hardware wallet** | Seed phrase in trust | Trust deed |
| **Domain name** | Registrar policy | ICANN transfer |

---

## 12. Mediation vs Litigation
| Method | Cost | Time | Relationship |
|--------|------|------|--------------|
| **Mediation** | ₹50k-₹2 L | 2-6 months | Preserved |
| **Litigation** | ₹5 L-₹50 L | 3-10 yrs | Destroyed |

---

## 13. Costs Snapshot
| Service | Fee Range |
|---------|-----------|
| **Lawyer probate** | ₹25k-₹5 L |
| **CA valuation** | ₹10k-₹50k |
| **Court fee** | 1-7 % estate |
| **Executor commission** | 2-5 % (if specified) |

---

## 14. DIY vs Professional Help
| Complexity | DIY | Lawyer |
|------------|-----|--------|
| **Single bank a/c** | ✅ | ❌ |
| **Multiple properties** | ❌ | ✅ |
| **Foreign assets** | ❌ | ✅ |
| **Disputed will** | ❌ | ✅ |

---

## 15. Key Takeaways
- **Probate is paperwork-heavy but manageable**.  
- **Executor is the project manager—choose wisely**.  
- **Digital assets need special attention**.  
- **Mediation > litigation for harmony**.

---

## 16. Ready to Settle Seamlessly?

🔗 [Book Probate Assistance](https://www.moznoadvisory.com/probate-call)  
📥 [Download Executor Checklist](https://www.moznoadvisory.com/executor-checklist)

*Mozno Advisory partners with empanelled lawyers, CAs, and valuers. Legal fees extra.*
`;

export default function ProbateEstateAdministrationPage() {
    return (
        <>
          <Head>
            <title>Probate & Estate Administration – Mozno Advisory</title>
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