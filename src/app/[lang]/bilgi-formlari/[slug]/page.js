import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { getAllForms, getFormBySlug } from "@/lib/forms";

export function generateStaticParams() {
  return getAllForms().map((form) => ({ slug: form.slug }));
}

export default async function FormDetailPage({ params }) {
  const { slug } = await params;
  const form = getFormBySlug(slug);

  if (!form) {
    notFound();
  }

  return (
    <>
      <PageHero title={form.title} subtitle={form.summary} image={form.heroImage} />
      <section className="section">
        <div className="container grid-2">
          <div className="stack">
            <div
              className="markdown"
              dangerouslySetInnerHTML={{ __html: form.contentHtml || "" }}
            />
          </div>
          <aside className="stack">
            <div className="card">
              <h3>PDF Dosyası</h3>
              <p className="subhead">
                Dosyayı bilgisayarınıza indirebilir veya yeni sekmede görüntüleyebilirsiniz.
              </p>
              {form.pdfUrl ? (
                <a
                  className="button"
                  href={form.pdfUrl}
                  download={form.downloadName || undefined}
                  target="_blank"
                  rel="noreferrer"
                >
                  PDF İndir
                </a>
              ) : (
                <p className="notice">PDF henüz eklenmedi. Ek bilgi için bize ulaşın.</p>
              )}
              <Link className="button button--ghost" href="/bilgi-formlari">
                Tüm formlar
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
