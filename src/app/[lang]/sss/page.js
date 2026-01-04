import { getDictionary } from "@/i18n/get-dictionary";
import fs from "fs";
import path from "path";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: lang === 'tr' ? "Sıkça Sorulan Sorular | FIPGL23" : lang === 'en' ? "Frequently Asked Questions | FIPGL23" : "Часто задаваемые вопросы | FIPGL23",
  };
}

export default async function SSSPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const faqPath = path.join(process.cwd(), "src", "i18n", "faqs", `${lang}.json`);
  let faqs = [];
  if (fs.existsSync(faqPath)) {
    faqs = JSON.parse(fs.readFileSync(faqPath, "utf8"));
  }

  // Split FAQs into two columns for display
  const midPoint = Math.ceil(faqs.length / 2);
  const col1 = faqs.slice(0, midPoint);
  const col2 = faqs.slice(midPoint);

  return (
    <div className="section">
      <div className="container stack">
        <div className="section__header">
          <span className="eyebrow">{lang === 'tr' ? 'Merak Edilenler' : lang === 'en' ? 'Common Questions' : 'Обычные вопросы'}</span>
          <h1 className="headline headline--lg">{dict.nav.faq}</h1>
          <p className="subhead">
            {lang === 'tr' ? 'FIP hastalığı süreci, tedavi ve bakım ile ilgili uzman cevapları.' : lang === 'en' ? 'Expert answers about FIP disease process, treatment, and care.' : 'Экспертные ответы о процессе заболевания ФИП, лечении и уходе.'}
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'start' }}>
          {/* Column 1 */}
          <div className="stack">
            {col1.map((faq, index) => (
              <details
                key={`c1-${index}`}
                className="card"
                style={{ padding: "24px", cursor: "pointer", listStyle: "none" }}
              >
                <summary style={{
                  fontWeight: "700",
                  fontSize: "1.1rem",
                  color: "var(--brand-deep)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}>
                  {faq.question}
                  <span className="icon" style={{ color: "var(--hope)" }}>▼</span>
                </summary>
                <div
                  className="markdown"
                  style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid rgba(0,0,0,0.05)", cursor: "default" }}
                >
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          {/* Column 2 */}
          <div className="stack">
            {col2.map((faq, index) => (
              <details
                key={`c2-${index}`}
                className="card"
                style={{ padding: "24px", cursor: "pointer", listStyle: "none" }}
              >
                <summary style={{
                  fontWeight: "700",
                  fontSize: "1.1rem",
                  color: "var(--brand-deep)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}>
                  {faq.question}
                  <span className="icon" style={{ color: "var(--hope)" }}>▼</span>
                </summary>
                <div
                  className="markdown"
                  style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid rgba(0,0,0,0.05)", cursor: "default" }}
                >
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
