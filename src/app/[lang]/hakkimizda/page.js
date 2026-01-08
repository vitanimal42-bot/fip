import { getStaticPage } from "@/lib/statics";
import { notFound } from "next/navigation";

export default async function HakkimizdaPage({ params }) {
  const { lang } = await params;
  const page = getStaticPage("hakkimizda", lang);

  if (!page) {
    notFound();
  }

  // Split content by the horizontal rule
  const contentParts = page.contentHtml.split('<hr>');

  return (
    <div className="section" style={{ background: 'white', padding: '60px 0' }}>
      <div className="container stack" style={{ gap: '100px' }}>

        {/* Section 1: Image Left, Content Right */}
        <section className="grid-2" style={{ alignItems: "flex-start", gap: '60px' }}>
          <div style={{ position: 'relative' }}>
            <img
              src={page.image1 || "/assets/source/ofis.png"}
              alt="FIPGL23 About"
              style={{
                width: "100%",
                borderRadius: "20px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                objectFit: 'cover'
              }}
            />
          </div>
          <div className="stack" style={{ gap: '20px' }}>
            <h2 style={{
              color: '#3498db',
              fontSize: '1.2rem',
              fontFamily: 'sans-serif',
              fontWeight: '600',
              margin: 0
            }}>
              {page.eyebrow}
            </h2>
            <div
              className="markdown"
              style={{
                fontSize: '0.95rem',
                lineHeight: '1.7',
                color: '#666',
                textAlign: 'justify'
              }}
              dangerouslySetInnerHTML={{ __html: contentParts[0] }}
            />
          </div>
        </section>

        {/* Section 2: Header Top, Text Left (2 cols), Image Right */}
        <section className="grid-2" style={{
          gridTemplateColumns: '1.6fr 1fr',
          alignItems: "center",
          gap: '60px'
        }}>
          <div className="stack" style={{ gap: '30px' }}>
            <h2 style={{
              color: '#3498db',
              fontSize: '2.4rem',
              fontFamily: 'sans-serif',
              lineHeight: '1.2',
              fontWeight: '600',
              maxWidth: '90%'
            }}>
              {page.subtitle}
            </h2>
            <div
              className="markdown"
              style={{
                columnCount: 2,
                columnGap: '30px',
                fontSize: '0.9rem',
                lineHeight: '1.6',
                color: '#777'
              }}
              dangerouslySetInnerHTML={{ __html: contentParts[1] || '' }}
            />
          </div>
          <div style={{ position: 'relative' }}>
            <img
              src={page.image2 || "/assets/source/image-83425-800.png"}
              alt="FIPGL23 Team"
              style={{
                width: "100%",
                borderRadius: "20px",
                boxShadow: "0 15px 35px rgba(0,0,0,0.1)"
              }}
            />
          </div>
        </section>

      </div>
    </div>
  );
}
