import Link from "next/link";
import { notFound } from "next/navigation";
import ProductGallery from "@/components/ProductGallery";
import { site } from "@/data/content";
import { getAllProducts, getProductBySlug } from "@/lib/products";
import { getDictionary } from "@/i18n/get-dictionary";
import { getExchangeRates, formatPrice } from "@/lib/currency";

export async function generateStaticParams() {
  const locales = ['tr', 'en', 'ru'];
  // We need to check all TR slugs since they are the base
  const products = getAllProducts('tr');

  return locales.flatMap(lang =>
    products.map(product => ({ lang, slug: product.slug }))
  );
}

export default async function ProductDetailPage({ params }) {
  const { lang, slug } = await params;
  const dict = await getDictionary(lang);
  const product = getProductBySlug(slug, lang);
  const exchangeRates = await getExchangeRates();

  if (!product) {
    notFound();
  }

  return (
    <>
      <section className="section" style={{ paddingBottom: 0, marginTop: "40px" }}>
        <div className="container">
          <div className="grid-2" style={{ gap: "60px", alignItems: "start" }}>

            {/* LEFT: Gallery */}
            <div className="stack">
              <ProductGallery
                images={Array.from(new Set([product.heroImage, ...(product.images || [])].filter(Boolean)))}
                productName={product.name}
                badge={product.badge}
              />

              <div className="card card--soft" style={{ marginTop: "24px" }}>
                <h3 style={{ fontSize: "1.2rem", color: "var(--brand-deep)", marginBottom: "16px" }}>{lang === 'tr' ? 'Öne Çıkan Özellikler' : lang === 'en' ? 'Key Features' : 'Основные особенности'}</h3>
                {product.details.length ? (
                  <ul className="list">
                    {product.details.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="subhead">High purity, laboratory-approved formula.</p>
                )}
              </div>

              {/* Price List Card (Moved to Left) */}
              <div className="card" style={{ marginTop: "24px", borderLeft: "6px solid var(--hope)" }}>
                <h3 style={{ marginBottom: "20px" }}>{lang === 'tr' ? 'Güncel Fiyat Listesi' : lang === 'en' ? 'Current Price List' : 'Текущий прайс-лист'}</h3>
                <div className="stack" style={{ gap: "12px" }}>
                  {product.priceList.map((row) => (
                    <div
                      key={`${row.name}-${row.weight}`}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "16px",
                        background: "var(--warm-bg)",
                        borderRadius: "12px",
                        border: "1px solid rgba(0,0,0,0.05)"
                      }}
                    >
                      <div>
                        <strong style={{ color: "var(--brand-deep)", display: "block" }}>{row.name}</strong>
                        <span style={{ fontSize: "0.9rem", opacity: 0.8 }}>{row.weight} | {row.unit}</span>
                      </div>
                      <div style={{ fontWeight: "700", fontSize: "1.2rem", color: "var(--ink)" }}>
                        {formatPrice(row.price, exchangeRates.rates, lang)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Info & Actions */}
            <div className="stack">
              <div>
                <h2 className="headline" style={{ fontSize: "2.5rem", marginBottom: "24px" }}>{product.name}</h2>
                <div
                  className="markdown"
                  style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "var(--ink-soft)" }}
                  dangerouslySetInnerHTML={{ __html: product.contentHtml || "" }}
                />
              </div>

              {/* CTA Buttons */}
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "24px" }}>
                <a className="button" href={`https://wa.me/905333519050?text=Hello, I want to get information about ${product.name}.`} target="_blank">
                  {lang === 'tr' ? 'WhatsApp ile Sipariş' : lang === 'en' ? 'Order via WhatsApp' : 'Заказать через WhatsApp'}
                </a>
                <a className="button button--ghost" href={`mailto:${site.contact.email}`}>
                  {lang === 'tr' ? 'E-posta Gönder' : lang === 'en' ? 'Send Email' : 'Отправить письмо'}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Detail Section: Dosage */}
      <section className="section">
        <div className="container stack">
          <div className="section__header">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>{lang === 'tr' ? 'Kullanım Kılavuzu' : lang === 'en' ? 'User Guide' : 'Руководство'}</span>
            <h2 className="headline" style={{ fontSize: "2rem" }}>{lang === 'tr' ? 'Dozaj ve Uygulama' : lang === 'en' ? 'Dosage and Application' : 'Дозировка и применение'}</h2>
            <p className="subhead">
              {product.dosageSubhead || (
                lang === 'tr'
                  ? (product.slug === 'enjektable' ? 'Kedinizin ağırlığına göre 24 saatte bir önerilen kullanım miktarları.' : 'Kedinizin ağırlığına göre önerilen kullanım miktarları.')
                  : lang === 'en'
                    ? (product.slug === 'enjektable' ? 'Recommended usage amounts every 24 hours according to your cat\'s weight.' : 'Recommended usage amounts according to your cat\'s weight.')
                    : (product.slug === 'enjektable' ? 'Рекомендуемые дозировки каждые 24 часа в зависимости от веса вашей кошки.' : 'Рекомендуемые дозировки в зависимости от веса вашей кошки.')
              )}
            </p>
          </div>

          <div className="grid-3">
            {product.dosageCards.map((card) => (
              <div className="card card--soft" key={card.weight} style={{ textAlign: "center" }}>
                <div style={{
                  background: "var(--brand)",
                  color: "white",
                  display: "inline-block",
                  padding: "8px 24px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                  boxShadow: "0 4px 12px rgba(52, 152, 219, 0.3)"
                }}>
                  {card.weight}
                </div>
                <ul className="list" style={{ textAlign: "left" }}>
                  {card.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark" style={{ marginBottom: "-100px", paddingBottom: "140px" }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center" }}>
            <div>
              <h2 className="headline" style={{ color: "white" }}>{lang === 'tr' ? 'Kafanızda soru işareti kalmasın.' : lang === 'en' ? 'Leave no questions in your mind.' : 'Пусть у вас не останется вопросов.'}</h2>
              <p className="subhead" style={{ color: "rgba(255,255,255,0.8)", margin: 0 }}>
                {lang === 'tr' ? 'Tedavi sürecinde her zaman yanınızdayız.' : lang === 'en' ? 'We are always with you during the treatment.' : 'Мы всегда с вами в процессе лечения.'}
              </p>
            </div>
            <div style={{ justifySelf: "end" }}>
              <Link className="button" style={{ background: "white", color: "var(--brand-deep)" }} href={`/${lang}/iletisim`}>
                {dict.nav.contact}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
