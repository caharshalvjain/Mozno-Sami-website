import Head from "next/head";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "./BlogPage.css";
import remarkGfm from "remark-gfm";

const markdown = `
# 6.3 Family Governance & Legacy Planning

> “Wealth without governance is a recipe for family fracture.”

Money lasts three generations; **values last forever**.  
Family governance is the **soft infrastructure** that keeps **financial, human, and social capital** aligned for decades.  
This 2,000-word guide shows **22-45-year-olds** how to **write a family constitution, run family meetings, and raise financially-literate heirs**—so the **family thrives, not just survives**.

---

## 1. Why Governance Matters

| Stat | Impact |
|------|--------|
| **70 % family businesses** fail by 3rd gen | Lack of governance |
| **90 % wealth lost** by 3rd gen | No succession plan |
| **Family disputes** | Average 10-yr court battles |

---

## 2. The Three Capitals Framework

| Capital | Description | Governance Tool |
|---------|-------------|-----------------|
| **Financial** | Money, property | Investment policy |
| **Human** | Skills, education | Family education plan |
| **Social** | Values, philanthropy | Family values charter |

---

## 3. Family Constitution – 1-Page Template

| Clause | Example |
|--------|---------|
| **Vision** | “Preserve wealth for 5 generations” |
| **Mission** | “Entrepreneurship + philanthropy” |
| **Values** | Integrity, frugality, continuous learning |
| **Decision rights** | Family council + external advisors |
| **Conflict resolution** | Mediation → arbitration |
| **Education** | 2 yrs work experience before board seat |

---

## 4. Family Meeting Playbook

| Frequency | Agenda | Outcome |
|-----------|--------|---------|
| **Quarterly** | Investments, philanthropy | Minutes + action items |
| **Annual** | Budget, succession | Ratified investment policy |
| **Emergency** | Crisis, dispute | Quick consensus |

**Tools**: Zoom + shared Google Drive.

---

## 5. Next-Gen Financial Literacy Curriculum

| Age | Module | Delivery |
|-----|--------|----------|
| **10-15** | Budgeting game | Family Monopoly night |
| **16-18** | Stock market | Virtual ₹1 L portfolio |
| **18-25** | Internship | 6 m in family business |
| **25+** | Board observer | 4 meetings/yr |

---

## 6. Family Office Lite (₹5 Cr+ net-worth)

| Function | In-house | Outsourced |
|----------|----------|------------|
| **Investment management** | CIO | PMS |
| **Tax & compliance** | CA firm | Annual retainer |
| **Legal & governance** | Lawyer | On-call |
| **Philanthropy** | Family member | CSR consultant |

---

## 7. Communication Protocols

| Channel | Use Case | Frequency |
|---------|----------|-----------|
| **WhatsApp group** | Quick updates | Daily |
| **Quarterly newsletter** | Performance | Quarterly |
| **Annual retreat** | Strategy | Yearly |

---

## 8. Case Study: Gupta Family (3rd Gen)

| Challenge | Solution |
|-----------|----------|
| **Sibling rivalry** | Rotating chairmanship |
| **Education gaps** | Family education fund |
| **Philanthropy** | ₹1 Cr annual corpus |

**Outcome**: 25 % CAGR, zero litigation in 10 yrs.

---

## 9. Technology Tools

| Tool | Purpose |
|------|---------|
| **Notion Family Wiki** | Policies, minutes |
| **Slack channel** | Secure family chat |
| **Zoom** | Remote meetings |
| **Shared Dropbox** | Documents |

---

## 10. Conflict Resolution Ladder

| Step | Method |
|------|--------|
| **1. Informal chat** | Family elder |
| **2. Mediation** | External mediator |
| **3. Arbitration** | ICA panel |
| **4. Court** | Last resort |

---

## 11. Philanthropy & Impact

| Vehicle | Tax | Impact |
|---------|-----|--------|
| **Family foundation** | 12A/80G | CSR + legacy |
| **Donor-advised fund** | Immediate deduction | Flexible grants |
| **CSR trust** | 2 % of profit | Business alignment |

---

## 12. Annual Retreat Agenda (Sample)

| Time | Activity |
|------|----------|
| **09:00** | Financial review |
| **11:00** | Next-gen presentation |
| **14:00** | Philanthropy pitch |
| **16:00** | Conflict resolution exercise |

---

## 13. Key Takeaways

- **Start with a one-page constitution**.  
- **Quarterly meetings build culture**.  
- **Education is the best succession plan**.  
- **Governance is cheaper than litigation**.

---

## 14. Ready to Govern?

🔗 [Book Family Governance Workshop](https://www.moznoadvisory.com/governance-call)  
📥 [Download Family Constitution Template](https://www.moznoadvisory.com/constitution-template)

*Mozno Advisory provides facilitation, not legal drafting. Consult professionals for jurisdiction-specific advice.*
`;

export default function FamilyGovernanceLegacyPage() {
    return (
        <>
          <Head>
            <title>Family Governance & Legacy Planning – Mozno Advisory</title>
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