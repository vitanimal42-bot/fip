import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product, lang = 'tr' }) {
  // Debug log (Bileşenin içine alındı, build hatasını engeller)
  // console.log(`Ürün: ${product?.name}, Fiyat Verisi:`, product?.price);

  const heroImage = product?.heroImage || product?.images?.[0];

  // Fiyatın geçerli bir sayı olup olmadığını kontrol eden güvenli yapı
  const hasValidPrice = product?.price && 
                        product?.price !== "" && 
                        product?.price !== "NaN" && 
                        !isNaN(parseFloat(product?.price));

  return (
    <article className="card card--product">
      {product?.badge && <span className="badge">{product.badge}</span>}
      
      <div className="product-card__media">
        {heroImage ? (
          <Image src={heroImage} alt={product.name} width={240} height={240} />
        ) : null}
      </div>

      <h3 style={{ marginTop: "16px" }}>{product?.name}</h3>

      {product?.description && (
        <p className="subhead" style={{ marginTop: "8px" }}>
          {product.description}
        </p>
      )}

      {(product?.dosage || product?.weight) && (
        <p className="dosage-info" style={{ marginTop: "4px", fontSize: "0.9rem", color: "#666" }}>
          {product.dosage || product.weight} {product.unit && product.unit}
        </p>
      )}

      {hasValidPrice && (
        <div className="product-price" style={{ marginTop: "8px", fontWeight: "bold" }}>
          {product.price} {product.currency || 'TL'}
        </div>
      )}

      <div className="card__footer" style={{ marginTop: 16 }}>
        <Link className="button button--ghost" href={`/${lang}/urunlerimiz/${product?.slug}`}>
          {lang === 'tr' ? 'Detayları gör' : lang === 'en' ? 'View details' : 'Подробнее'}
        </Link>
      </div>
    </article>
  );
}