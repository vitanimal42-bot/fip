import PageHero from "@/components/PageHero";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function ReturnPolicyPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const { returnPolicy } = dict;

  return (
    <>
      <PageHero
        title={returnPolicy.title}
        subtitle={returnPolicy.intro}
        image="/assets/source/resim_2024-04-10_180501883.png"
      />
      <section className="section">
        <div className="container grid-2">
          {returnPolicy.items.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p className="subhead">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
