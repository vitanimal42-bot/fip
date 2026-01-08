import PageHero from "@/components/PageHero";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function ReturnPolicyPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const { returnPolicy } = dict;

  return (
    <>
      <div className="section" style={{ minHeight: '80vh', background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="stack" style={{ gap: '40px' }}>
            <header className="section__header" style={{ marginBottom: '40px', textAlign: 'left', margin: 0 }}>
              <h1 className="headline headline--md" style={{ color: 'var(--brand)', marginBottom: '16px' }}>{returnPolicy.title}</h1>
              <p className="subhead" style={{ margin: 0, fontSize: '1.2rem' }}>{returnPolicy.intro}</p>
            </header>

            <div className="stack" style={{ gap: '32px' }}>
              {returnPolicy.items.map((item) => (
                <article key={item.title} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '24px' }}>
                  <h3 style={{ color: 'var(--ink)', marginBottom: '12px', fontSize: '1.3rem' }}>{item.title}</h3>
                  <p style={{ color: 'var(--ink-soft)', lineHeight: '1.7', fontSize: '1.05rem' }}>{item.description}</p>
                </article>
              ))}
            </div>

            <div
              style={{
                marginTop: '20px',
                padding: '24px',
                background: 'var(--bg-soft)',
                borderRadius: '16px',
                fontStyle: 'italic',
                color: 'var(--ink)'
              }}
            >
              {returnPolicy.footerNote}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
