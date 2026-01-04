import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import { getAllProducts } from "@/lib/products";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function ProductsPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const products = getAllProducts(lang);

  return (
    <>
      <PageHero
        title={dict.nav.products}
        subtitle={lang === 'tr' ? 'Farklı uygulama formlarında FIPGL23 ürünleri.' : lang === 'en' ? 'FIPGL23 products in different application forms.' : 'Продукты FIPGL23 в различных формах применения.'}
        image="/assets/source/resim_2024-04-10_174957276-1024x483.png"
      />
      <section className="section">
        <div className="container grid-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} lang={lang} />
          ))}
        </div>
      </section>
    </>
  );
}
