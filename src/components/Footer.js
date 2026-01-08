import Link from "next/link";
import { site } from "@/data/content";

export default function Footer({ dict, lang = 'tr' }) {
  const navLinks = [
    { label: dict.nav.about, href: `/${lang}/hakkimizda` },
    { label: dict.nav.fipNedir, href: `/${lang}/fip-nedir` },
    { label: dict.nav.treatment, href: `/${lang}/fip-tedavisi` },
    { label: dict.nav.products, href: `/${lang}/urunlerimiz` },
    { label: dict.nav.faq, href: `/${lang}/sss` },
  ];

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="stack">
          <h3 className="footer__title">{site.name}</h3>
          <p className="subhead" style={{ color: "rgba(242, 237, 228, 0.82)" }}>
            {lang === 'tr'
              ? 'FIP hastalığının tedavisinde bilimsel bilgi ve güvenilir iletişimi bir araya getiriyoruz.'
              : lang === 'en'
                ? 'We bring together scientific knowledge and reliable communication in the treatment of FIP disease.'
                : 'Мы объединяем научные знания и надежную коммуникацию в лечении болезни ФИП.'}
          </p>
          <div className="stack">
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            <a href={`tel:${site.contact.phone}`}>{site.contact.phone}</a>
          </div>
        </div>
        <div className="stack">
          <h4 className="footer__title">{lang === 'tr' ? 'Hızlı Erişim' : lang === 'en' ? 'Quick Links' : 'Быстрый доступ'}</h4>
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="stack">
          <h4 className="footer__title">{lang === 'tr' ? 'Sosyal Medya' : lang === 'en' ? 'Social Media' : 'Социальные сети'}</h4>
          <div className="social-icons" style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
            <a href={site.contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: "rgba(255,255,255,0.8)" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href={site.contact.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" style={{ color: "rgba(255,255,255,0.8)" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.42 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.42-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
            </a>
            <a href={site.contact.twitter} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" style={{ color: "rgba(255,255,255,0.8)" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
            </a>
            <a href={site.contact.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: "rgba(255,255,255,0.8)" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href={site.contact.pinterest} target="_blank" rel="noopener noreferrer" aria-label="Pinterest" style={{ color: "rgba(255,255,255,0.8)" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line><circle cx="12" cy="12" r="10"></circle></svg>
            </a>
            <a href={site.contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ color: "rgba(255,255,255,0.8)" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </a>
          </div>
          <Link href={`/${lang}/urun-iade-politikasi`}>{lang === 'tr' ? 'Ürün İade Politikası' : lang === 'en' ? 'Return Policy' : 'Политика возврата'}</Link>
        </div>
      </div>
    </footer>
  );
}
