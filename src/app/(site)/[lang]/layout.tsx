import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Cairo } from "next/font/google";
import { notFound } from "next/navigation";
import "../../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollFx from "@/components/ScrollFx";
import { getDictionary } from "@/i18n/dictionaries";
import { locales, isLocale, dir } from "@/i18n/config";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});
const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const loc = isLocale(lang) ? lang : "en";
  const dict = getDictionary(loc);
  return {
    metadataBase: new URL("https://axongroup.ae"),
    title: { default: dict.meta.title, template: "%s | Axon Group" },
    description: dict.meta.description,
    alternates: {
      canonical: `/${loc}`,
      languages: { en: "/en", ar: "/ar" },
    },
    openGraph: {
      type: "website",
      siteName: "Axon Group",
      title: dict.meta.title,
      description: dict.meta.description,
      url: `https://axongroup.ae/${loc}`,
      images: ["/images/hero.jpg"],
      locale: loc === "ar" ? "ar_AE" : "en_US",
    },
    twitter: { card: "summary_large_image" },
    icons: { icon: "/images/logo/favicon.png" },
  };
}

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Axon Group",
  url: "https://axongroup.ae/",
  logo: "https://axongroup.ae/images/logo/logo_black.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kamala Tower, Office 1602, Al Khalidiyah West",
    addressLocality: "Abu Dhabi",
    addressCountry: "AE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+971529987406",
    email: "info@axongroup.ae",
    contactType: "customer service",
    areaServed: "AE",
    availableLanguage: ["en", "ar"],
  },
  subOrganization: [
    { "@type": "Organization", name: "Axon Facility Management", url: "https://axonfm.com/" },
    { "@type": "Organization", name: "Axon Pools", url: "https://axonpools.com/" },
    { "@type": "Organization", name: "Axon Garments", url: "https://axongarments.com/" },
    { "@type": "Organization", name: "LSF Contracting", url: "https://lsf.ae/" },
    { "@type": "Organization", name: "Green Dream", url: "https://greendreamco.com/" },
  ],
};

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const fontVars =
    lang === "ar"
      ? `${inter.variable} ${jakarta.variable} ${cairo.variable}`
      : `${inter.variable} ${jakarta.variable}`;

  return (
    <html lang={lang} dir={dir(lang)} className={fontVars}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a className="skip-link" href="#main">{dict.nav.skip}</a>
        <Header lang={lang} dict={dict.nav} />
        <main id="main">{children}</main>
        <Footer lang={lang} dict={dict.footer} />
        <ScrollFx />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </body>
    </html>
  );
}
