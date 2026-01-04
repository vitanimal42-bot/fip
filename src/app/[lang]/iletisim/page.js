import ContactForm from "@/components/ContactForm";
import { site } from "@/data/content";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function ContactPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const fields = [
    { name: "firstName", placeholder: dict.contact.fields.firstName, required: true },
    { name: "lastName", placeholder: dict.contact.fields.lastName, required: true },
    { name: "phone", placeholder: dict.contact.fields.phone, required: true },
    {
      name: "subject",
      type: "select",
      placeholder: dict.contact.fields.subject,
      required: true,
      options: dict.contact.subjects,
    },
    { name: "email", type: "email", placeholder: dict.contact.fields.email, required: true },
    {
      name: "message",
      type: "textarea",
      placeholder: dict.contact.fields.message,
      required: true,
    },
  ];

  return (
    <>
      <section className="section" style={{ marginTop: "40px" }}>
        <div className="container stack">
          <div className="section__header">
            <h1 className="headline">{dict.contact.title}</h1>
            <p className="subhead">{dict.contact.subtitle}</p>
          </div>
          <div className="grid-2">
            <div className="stack">
              <h3>{lang === 'tr' ? 'Bizimle iletişime geçin' : lang === 'en' ? 'Get in touch with us' : 'Свяжитесь с нами'}</h3>
              <p className="subhead">{lang === 'tr' ? '24 saat e-posta üzerinden ulaşabilirsiniz.' : lang === 'en' ? 'Available 24 hours via e-mail.' : 'Доступно 24 часа по электронной почте.'}</p>

              <div className="card card--soft">
                <p className="subhead">{dict.contact.methods.email}</p>
                <a className="button" href={`mailto:${site.contact.email}`}>
                  {site.contact.email}
                </a>
              </div>

              <div className="card card--soft">
                <p className="subhead">{dict.contact.methods.phone}</p>
                <a className="button button--ghost" href={`tel:${site.contact.phone}`}>
                  {site.contact.phone}
                </a>
              </div>

              <div className="card card--soft">
                <p className="subhead">{dict.contact.methods.social}</p>
                <div style={{ display: "flex", gap: "16px", marginTop: "8px" }}>
                  <a href={site.contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#E1306C" }}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href={site.contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#25D366" }}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <ContactForm
                title={dict.contact.formTitle}
                description={dict.contact.subtitle}
                fields={fields}
                submitLabel={dict.contact.submitLabel}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
