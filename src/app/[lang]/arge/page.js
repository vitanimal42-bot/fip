import PageHero from "@/components/PageHero";

export default function ArgePage() {
  return (
    <>
      <PageHero
        title="Ar-Ge"
        subtitle="Araştırma ve geliştirme odaklı bilgi ve projeler yakında."
        image="/assets/source/resim_2024-04-10_185130527.png"
      />
      <section className="section">
        <div className="container card">
          <p className="subhead">
            Bu sayfanın içeriği güncelleniyor. Yeni çalışmalar ve bilimsel
            paylaşımlar kısa sürede eklenecek.
          </p>
        </div>
      </section>
    </>
  );
}
