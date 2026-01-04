import { getStaticPage } from "@/lib/statics";
import { notFound } from "next/navigation";

export default async function HakkimizdaPage({ params }) {
  const { lang } = await params;
  const page = getStaticPage("hakkimizda", lang);

  if (!page) {
    notFound();
  }

  return (
    <div className="section">
      <div className="container stack">
        {/* Header */}
        <div className="section__header">
          <span className="eyebrow">{page.eyebrow}</span>
          <h1 className="headline headline--lg">{page.title}</h1>
          <p className="subhead">{page.subtitle}</p>
        </div>

        {/* Content Section */}
        <section className="card card--product stack">
          <div className="grid-2" style={{ alignItems: "center" }}>
            <div
              className="markdown"
              dangerouslySetInnerHTML={{ __html: page.contentHtml }}
            />
            <div className="product-card__media">
              <img
                src="/content/about-office.png"
                alt="FIPGL23 Office"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Icons/Process (Visuals retained) */}
        <section className="grid-2" style={{ marginTop: "40px" }}>
          <div className="card card--feature" style={{ alignItems: "flex-start", textAlign: "left" }}>
            <img
              src="/content/about-process.png"
              alt="Quality Process"
              style={{ width: "100%", borderRadius: "12px", marginBottom: "20px" }}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
