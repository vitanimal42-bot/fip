import { getAllForms } from "@/lib/forms";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function FormsPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const forms = getAllForms(lang);

  return (
    <>
      <section className="section" style={{ marginTop: "40px" }}>
        <div className="container stack">
          <div className="section__header">
            <h1 className="headline">{dict.nav.forms}</h1>
            <p className="subhead">{dict.common.tagline}</p>
          </div>
          <div className="grid-3">
            {forms.map((form) => (
              <article className="card" key={form.slug} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3>{form.title}</h3>
                  <p className="subhead">{form.summary}</p>
                </div>
                <div className="hero__cta" style={{ marginTop: '20px' }}>
                  {form.pdfUrl ? (
                    <a
                      className="button"
                      href={form.pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {dict.common.pdfDownload}
                    </a>
                  ) : (
                    <span className="subhead" style={{ fontSize: "0.9rem", opacity: 0.6 }}>{dict.common.prepared}</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
