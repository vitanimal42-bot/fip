import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product, lang = 'tr' }) {
  const heroImage = product.heroImage || product.images?.[0];

  return (
    <article className="card card--product">
      <span className="badge">{product.badge}</span>
      <div className="product-card__media">
        {heroImage ? (
          <Image src={heroImage} alt={product.name} width={240} height={240} />
        ) : null}
      </div>
      <h3 style={{ marginTop: "16px" }}>{product.name}</h3>
      <p className="subhead" style={{ marginTop: "8px" }}>
        {product.description}
      </p>

      <div className="card__footer" style={{ marginTop: 16 }}>
        <Link className="button button--ghost" href={`/${lang}/urunlerimiz/${product.slug}`}>
          {lang === 'tr' ? 'Detayları gör' : lang === 'en' ? 'View details' : 'Подробнее'}
        </Link>
      </div>
    </article>
  );
}
