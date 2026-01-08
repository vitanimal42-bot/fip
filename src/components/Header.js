"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/content";
import { useParams, usePathname } from "next/navigation";

export default function Header({ dict, lang, productLinks = [] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const params = useParams();
  const pathname = usePathname();
  const currentLang = params?.lang || lang || "tr";

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
  };

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const getLocalizedPath = (targetLang) => {
    if (!pathname) return `/${targetLang}`;
    const segments = pathname.split("/");
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
    {
      code: "tr", label: "Türkçe", flag: (
        <svg width="20" height="20" viewBox="0 0 512 512">
          <circle cx="256" cy="256" r="256" fill="#f0f0f0" />
          <path fill="#d80027" d="M256 0c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256 114.6 0 256 0z" />
          <path fill="#f0f0f0" d="M225.2 343.9a94 94 0 1 1 54.4-171.7 114.6 114.6 0 1 0 0 159.2 93.5 93.5 0 0 1-54.4 12.5zm116.3-51.5 5.8 18.2 18.2-5.7-11.4-15.3 11.2-15.5-18.2 5.9-5.9-18.2-5.7 18.2-18.2-5.9 11.2 15.5-11.4 15.3 18.4-5.7 5.9 18.2z" />
        </svg>
      )
    },
    {
      code: "en", label: "English", flag: (
        <svg width="20" height="20" viewBox="0 0 512 512">
          <path fill="#0052b4" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0z" />
          <path fill="#f0f0f0" d="m491.5 125.4-81 60.1h101c.3-8.8.4-17.7.4-26.7 0-11.4-.6-22.6-1.7-33.6l-18.7 13.9v-.2l.1.5h-.1zm-21.7-56h-27.1L256 208.5 69.3 69.4H42.2l200.7 149L42.2 367.4h27.1L256 228.3l186.7 139.1h27.1L269 218.4l200.8-149z" />
          <path fill="#d80027" d="M511.2 218.4H293.6v-218h-75.1v218H.8v75.1h217.7v217.7h75.1V293.6h217.7v-75.2zm-289.4 68.3 145.4 108.4H422L256 270.4l-166 123.5H38.7l149-111 34.1 23.8zM422 116.7 256 240.4 90 116.7H38.7l149.1 110.1L221.7 193l145.5-108.4H422z" />
        </svg>
      )
    },
    {
      code: "ru", label: "Русский", flag: (
        <svg width="20" height="20" viewBox="0 0 512 512">
          <path fill="#f0f0f0" d="M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256S397.385 0 256 0z" />
          <path fill="#0052b4" d="M41.018 139.636C15.143 172.483 0 212.483 0 256c0 43.517 15.143 83.517 41.018 116.364h429.964c25.875-32.847 41.018-72.847 41.018-116.364s-15.143-83.517-41.018-116.364H41.018z" />
          <path fill="#d80027" d="M256 512c111.961 0 207.351-72.039 241.018-171.636H14.982C48.649 439.961 144.039 512 256 512z" />
        </svg>
      )
    }
  ];

  return (
    <header className="header">
      <div className="container nav">
        {/* LOGO (LEFT) */}
        <Link href={`/${currentLang}`} className="nav__logo">
          <Image
            src={site.assets.logo}
            alt="FIPGL23 logo"
            width={120}
            height={60}
            priority
          />
        </Link>

        {/* DESKTOP NAV (CENTER/RIGHT) */}
        <nav className="nav__links" aria-label="Ana menü">
          {navLinks.map((item) => {
            if (item.children) {
              return (
                <div className="nav__dropdown" key={item.label}>
                  <Link href={item.href} className="nav__link">{item.label}</Link>
                  <div className="nav__panel">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href}>{child.label}</Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link className="nav__link" key={item.href} href={item.href}>{item.label}</Link>
            );
          })}
        </nav>

        {/* DESKTOP ACTIONS (LANG SWITCHER) */}
        <div className="nav__actions lang-switcher-desktop">
          <div className="lang-switcher" style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            {languages.map((l) => (
              <Link
                key={l.code}
                href={getLocalizedPath(l.code)}
                title={l.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  opacity: currentLang === l.code ? 1 : 0.5,
                  transform: currentLang === l.code ? "scale(1.1)" : "scale(1)",
                  transition: "all 0.2sease"
                }}
              >
                {l.flag}
              </Link>
            ))}
          </div>
        </div>

        {/* MOBILE LANG SWITCHER (CENTERED) */}
        <div className="lang-switcher-header" style={{ display: "none" }}>
          {languages.map((l) => (
            <Link
              key={l.code}
              href={getLocalizedPath(l.code)}
              title={l.label}
              style={{
                display: "flex",
                alignItems: "center",
                opacity: currentLang === l.code ? 1 : 0.5,
                zIndex: 1002
              }}
            >
              {l.flag}
            </Link>
          ))}
        </div>

        {/* MOBILE TOGGLE (RIGHT) */}
        <button
          className={`nav__mobile-toggle ${isMenuOpen ? "is-active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menü"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* MOBILE OVERLAY */}
        <div
          className={`nav__mobile-overlay ${isMenuOpen ? "is-visible" : ""}`}
          onClick={closeMenu}
        />

        {/* MOBILE SIDEBAR */}
        <div className={`nav__mobile-sidebar ${isMenuOpen ? "is-open" : ""}`}>
          <nav className="stack" style={{ gap: "0" }}>
            {navLinks.map((item) => {
              if (item.children) {
                return (
                  <div key={item.label}>
                    <div className="mobile-nav-link">
                      <Link href={item.href} style={{ flex: 1 }}>{item.label}</Link>
                      <button
                        className="mobile-nav-dropdown-btn"
                        style={{ width: "40px", justifyContent: "center" }}
                        onClick={(e) => {
                          e.preventDefault();
                          setIsProductsOpen(!isProductsOpen);
                        }}
                      >
                        <svg
                          className={`mobile-nav-dropdown-icon ${isProductsOpen ? "is-active" : ""}`}
                          width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                    </div>
                    <div className={`mobile-nav-dropdown-content ${isProductsOpen ? "is-active" : ""}`}>
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} className="mobile-nav-sublink">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link key={item.href} href={item.href} className="mobile-nav-link">
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}

