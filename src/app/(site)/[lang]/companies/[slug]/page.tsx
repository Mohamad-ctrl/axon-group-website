import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { companyMeta } from "@/data/companies";
import { companyCertificates, CERT_META } from "@/data/certificates";
import { companyProjects, PROJECT_CAT } from "@/data/projects";
import { ArrowRight } from "@/components/icons";

// One static page per company slug, generated for each locale by the parent
// `[lang]` layout. Content is fully static (dictionaries), so prerender it all.
export function generateStaticParams() {
  return companyMeta.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const loc = isLocale(lang) ? lang : "en";
  const dict = getDictionary(loc);
  const idx = companyMeta.findIndex((m) => m.slug === slug);
  if (idx === -1) return {};
  const card = dict.companies.cards[idx];
  return {
    title: card.name,
    description: card.desc,
    alternates: { canonical: `/${loc}/companies/${slug}` },
  };
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const idx = companyMeta.findIndex((m) => m.slug === slug);
  if (idx === -1) notFound();

  const dict = getDictionary(lang);
  const meta = companyMeta[idx];
  const card = dict.companies.cards[idx];
  const cd = dict.companyDetail;
  const certs = companyCertificates[slug] ?? [];
  const projects = companyProjects[slug] ?? [];

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <div className="crumbs">
            <Link href={`/${lang}`}>{cd.crumbHome}</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/${lang}#companies`}>{cd.crumbCompanies}</Link>
            <span aria-hidden="true">/</span>
            <span>{card.name}</span>
          </div>
          <span className="chip">{card.tag}</span>
          <h1 style={{ marginTop: ".6rem" }}>{card.name}</h1>
          <p>{card.desc}</p>
          {meta.website && (
            <p style={{ marginTop: "1.6rem" }}>
              <a
                className="btn btn--light"
                href={meta.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cd.visit} <ArrowRight />
              </a>
            </p>
          )}
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="reveal" style={{ maxWidth: "760px", marginInline: "auto" }}>
            <p className="eyebrow">{cd.overviewEyebrow}</p>
            <div className="prose" style={{ marginTop: ".6rem" }}>
              <p>{card.about}</p>
            </div>
          </div>
        </div>
      </section>

      {certs.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow eyebrow--center">{cd.certsEyebrow}</p>
              <h2>{cd.certsTitle}</h2>
              <p className="lead">{cd.certsLead}</p>
            </div>
            <div className="grid grid-3">
              {certs.map((c) => {
                const m = CERT_META[c.kind];
                return (
                  <article className="cert-card reveal" key={c.kind}>
                    <a
                      className="cert-card__frame"
                      href={c.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${m.en} — ${card.name}`}
                    >
                      <Image
                        className="cert-card__photo"
                        src={c.src}
                        alt={`${m.en} — ${card.name}`}
                        fill
                        sizes="(max-width: 620px) 100vw, (max-width: 960px) 50vw, 33vw"
                      />
                    </a>
                    <div className="cert-card__meta">
                      <h3>{lang === "ar" ? m.ar : m.en}</h3>
                      <p>{lang === "ar" ? m.noteAr : m.noteEn}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {projects.length > 0 && (
        <section className="section section--alt">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow eyebrow--center">{cd.projectsEyebrow}</p>
              <h2>{cd.projectsTitle}</h2>
              <p className="lead">{cd.projectsLead}</p>
            </div>
            <div className="grid grid-3">
              {projects.map((p) => (
                <article className="project-card reveal" key={p.img}>
                  <Image
                    className="project-card__img"
                    src={p.img}
                    alt={lang === "ar" ? p.ar : p.en}
                    width={600}
                    height={450}
                  />
                  <div className="project-card__meta">
                    <span className="project-card__cat">{lang === "ar" ? PROJECT_CAT[p.kind].ar : PROJECT_CAT[p.kind].en}</span>
                    <h3>{lang === "ar" ? p.ar : p.en}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="container" style={{ textAlign: "center", padding: "2.5rem 0 4rem" }}>
        <Link className="btn btn--ghost" href={`/${lang}#companies`}>
          {cd.back}
        </Link>
      </div>
    </>
  );
}
