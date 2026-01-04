import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

const fields = [
  { name: "fullName", placeholder: "İsim Soyisim", required: true },
  { name: "phone", placeholder: "Telefon", required: true },
  { name: "email", type: "email", placeholder: "E-posta Adresi", required: true },
  { name: "address", placeholder: "Adres", required: true },
  { name: "product", placeholder: "Ürün İsmi", required: true },
  { name: "purchase", placeholder: "Satın Alınan Yer", required: true },
  {
    name: "message",
    type: "textarea",
    placeholder: "Sorunun Tanımı",
    required: false,
  },
];

export default function PharmacovigilancePage() {
  return (
    <>
      <PageHero
        title="Farmakovijilans"
        subtitle="Ürün kullanımı sırasında görülen istenmeyen etkileri bildirin."
        image="/assets/source/resim_2024-04-10_180114086.png"
      />
      <section className="section">
        <div className="container grid-2">
          <div className="stack">
            <p className="subhead">
              Farmakovijilans, veteriner ürünlerin kullanımı sırasında ortaya
              çıkabilecek istenmeyen etkilerin izlenmesi, değerlendirilmesi ve
              önlenmesiyle ilgilenir.
            </p>
            <p className="subhead">
              Ürünleri kullanmadan önce web sitemizdeki bilgileri dikkatlice
              okumanız önemlidir. Olumsuz bir etki gözlemlerseniz formu doldurun.
            </p>
          </div>
          <div className="card">
            <ContactForm
              title="Farmakovijilans Formu"
              description="Lütfen tüm alanları doldurun."
              fields={fields}
              submitLabel="Mesajı Gönder"
            />
          </div>
        </div>
      </section>
    </>
  );
}
