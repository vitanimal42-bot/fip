import Image from "next/image";

export default function PageHero({ title, subtitle, image }) {
  return (
    <section className="section section--tight">
      <div className="container hero hero--page">
        <div className="stack">
          <span className="eyebrow">FIPGL23</span>
          <h1 className="headline headline--lg">{title}</h1>
          {subtitle ? <p className="subhead">{subtitle}</p> : null}
        </div>
        {image ? (
          <div className="hero__media hero__media--hero">
            <Image src={image} alt={title} width={640} height={420} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
