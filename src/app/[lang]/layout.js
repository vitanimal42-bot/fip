import { IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllProducts } from "@/lib/products";
import { getDictionary } from "@/i18n/get-dictionary";

const heading = IBM_Plex_Serif({
  variable: "--font-heading",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "700"],
});

const body = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
});

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    title: `${dict.common.name} | Kurumsal`,
    description: dict.common.tagline,
  };
}

export default async function LocaleLayout({ children, params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const productLinks = getAllProducts(lang).map((product) => ({
    label: product.name,
    href: `/${lang}/urunlerimiz/${product.slug}`,
  }));

  return (
    <html lang={lang}>
      <body className={`${heading.variable} ${body.variable} antialiased`}>
        <Header dict={dict} lang={lang} productLinks={productLinks} />
        <main>{children}</main>
        <Footer dict={dict} lang={lang} />
      </body>
    </html>
  );
}
