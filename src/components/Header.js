"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/content";
import { useParams, usePathname } from "next/navigation";

export default function Header({ dict, lang, productLinks = [] }) {
  const detailsRef = useRef(null);
  const params = useParams();
  const pathname = usePathname();
  const currentLang = params?.lang || lang || "tr";

  const closeMenu = () => {
    if (detailsRef.current) {
      detailsRef.current.removeAttribute("open");
    }
  };

  const getLocalizedPath = (targetLang) => {
    if (!pathname) return `/${targetLang}`;
    const segments = pathname.split("/");
    // pathname usually starts with /lang/... so segments[1] is the current lang
    segments[1] = targetLang;
    return segments.join("/");
  };

  const navLinks = [
    { label: dict.nav.about, href: `/${currentLang}/hakkimizda` },
    { label: dict.nav.fipNedir, href: `/${currentLang}/fip-nedir` },
    { label: dict.nav.treatment, href: `/${currentLang}/fip-tedavisi` },
    {
      label: dict.nav.products,
      href: `/${currentLang}/urunlerimiz`,
      children: productLinks
    },
    { label: dict.nav.faq, href: `/${currentLang}/sss` },
    { label: dict.nav.forms, href: `/${currentLang}/bilgi-formlari` },
    { label: dict.nav.contact, href: `/${currentLang}/iletisim` },
  ];

  const languages = [
    { code: "tr", label: "TR" },
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" }
  ];

  return (
    <header className="header">
      <div className="container nav">
        <Link href={`/${currentLang}`} className="nav__logo">
          <Image
            src={site.assets.logo}
            alt="FIPGL23 logo"
            width={160}
            height={80}
            priority
          />
        </Link>
        <nav className="nav__links" aria-label="Ana menü">
          {navLinks.map((item) => {
            if (item.children) {
              return (
                <div className="nav__dropdown" key={item.label}>
                  <button className="nav__link" type="button">
                    {item.label}
                  </button>
                  <div className="nav__panel">
                    <Link href={item.href}>{item.label}</Link>
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link className="nav__link" key={item.href} href={item.href}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="nav__actions" style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <a className="button button--small" href="https://wa.me/905333519050" target="_blank" rel="noopener noreferrer" style={{ background: "#25D366", borderColor: "#25D366", color: "white" }}>
            WhatsApp
          </a>

          {/* Language Switcher moved after WhatsApp */}
          <div className="lang-switcher" style={{ display: "flex", gap: "8px", borderLeft: "1px solid #ddd", paddingLeft: "12px", marginLeft: "4px" }}>
            {languages.map((l) => (
              <Link
                key={l.code}
                href={getLocalizedPath(l.code)}
                style={{
                  fontSize: "0.8rem",
                  fontWeight: currentLang === l.code ? "bold" : "normal",
                  color: currentLang === l.code ? "var(--brand-blue)" : "var(--ink)",
                  textDecoration: "none",
                  opacity: currentLang === l.code ? 1 : 0.6
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <details className="nav__mobile" ref={detailsRef}>
          <summary>Menü</summary>
          <div className="nav__mobile-panel">
            {navLinks.map((item) => (
              <div key={item.label}>
                <Link href={item.href} onClick={closeMenu}>{item.label}</Link>
                {item.children ? (
                  <div className="stack" style={{ marginTop: "8px" }}>
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} onClick={closeMenu}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            {/* Language Switcher Mobile moved to bottom */}
            <div className="lang-switcher-mobile" style={{ display: "flex", gap: "16px", marginTop: "16px", paddingTop: "16px", borderTop: "1px solid #eee" }}>
              {languages.map((l) => (
                <Link key={l.code} href={getLocalizedPath(l.code)} onClick={closeMenu} style={{ fontWeight: currentLang === l.code ? "bold" : "normal" }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
