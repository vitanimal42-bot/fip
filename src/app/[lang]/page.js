import Link from "next/link";
import { site } from "@/data/content";
import ProductCard from "@/components/ProductCard";
import { getAllProducts } from "@/lib/products";
import HeroSlider from "@/components/HeroSlider";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function HomePage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const products = getAllProducts(lang);
  const heroImages = ["/vet-clinic.png", "/hero-emotional.png"];

  return (
    <>
      <section className="hero">
        <HeroSlider images={heroImages} />
        <div className="hero__overlay-gradient" aria-hidden="true" />

        <div className="container hero__content fade-in">
          <h1 className="headline">{dict.home.heroTitle}</h1>
          <p className="hero__subtitle">{dict.home.heroSubtitle}</p>
          <p className="subhead" style={{ color: 'white', opacity: 0.9 }}>{dict.common.legalNote}</p>

          <div className="hero__actions">
            <Link className="button" href={`/${lang}/urunlerimiz`}>
              {dict.nav.products}
            </Link>
            <Link className="button button--ghost" href={`/${lang}/bilgi-formlari`}>
              {dict.nav.forms}
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stack">
          <div className="section__header">
            <h2 className="headline">{dict.nav.products}</h2>
          </div>
          <div className="grid-3">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.slug} product={product} lang={lang} />
            ))}
          </div>
          <div className="section__footer">
            <Link className="button" href={`/${lang}/urunlerimiz`}>
              {dict.nav.products}
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta">
            <div className="cta__content">
              <span className="eyebrow">{dict.nav.contact}</span>
              <h2 className="headline">{dict.nav.contact}</h2>
              <p className="subhead">{dict.common.tagline}</p>
            </div>
            <div className="cta__actions">
              <a className="button" href={`mailto:${site.contact.email}`}>
                {site.contact.email}
              </a>
              <a className="button button--ghost" href={`tel:${site.contact.phone}`}>
                {site.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
