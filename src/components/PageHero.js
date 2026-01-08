import Image from "next/image";

export default function PageHero({ title, subtitle, image }) {
  return (
    <section className="section section--tight" style={{
      background: 'linear-gradient(135deg, #fdfefe 0%, #f4f7f6 100%)',
      borderBottom: '1px solid rgba(0,0,0,0.05)',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: image ? 'repeat(auto-fit, minmax(300px, 1fr))' : '1fr',
          gap: '60px',
          alignItems: 'center',
          textAlign: image ? 'left' : 'center'
        }}>
          <div className="stack" style={{ zIndex: 2 }}>
            <span className="eyebrow">FIPGL23</span>
            <h1 className="headline headline--lg" style={{ color: 'var(--ink)', marginBottom: '16px' }}>{title}</h1>
            {subtitle ? (
              <p className="subhead" style={{
                margin: image ? '0' : '0 auto',
                color: 'var(--ink-soft)',
                maxWidth: '700px'
              }}>
                {subtitle}
              </p>
            ) : null}
          </div>

          {image ? (
            <div className="hero__media fade-in" style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}>
              <Image
                src={image}
                alt={title}
                width={800}
                height={500}
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                priority
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
