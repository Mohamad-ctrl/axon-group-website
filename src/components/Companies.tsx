import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@/components/icons";
import { companyMeta } from "@/data/companies";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export default function Companies({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary["companies"];
}) {
  return (
    <section className="section section--alt" id="companies">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow eyebrow--center">{dict.eyebrow}</p>
          <h2>{dict.title}</h2>
          <p className="lead">{dict.lead}</p>
        </div>

        <div className="grid grid-3">
          {dict.cards.map((card, i) => {
            const meta = companyMeta[i];
            return (
              <article className="card company-card reveal" key={card.name}>
                {meta.img ? (
                  <Image
                    className="company-card__img"
                    src={meta.img}
                    alt={card.alt}
                    width={640}
                    height={420}
                  />
                ) : (
                  <div className="company-card__ph" aria-hidden="true">
                    <span className="company-card__ph-name">{card.name}</span>
                    <span className="img-frame__dim">Photo coming soon</span>
                  </div>
                )}
                <div className="company-card__body">
                  <span className="company-card__tag">{card.tag}</span>
                  <h3>{card.name}</h3>
                  <p>{card.desc}</p>
                  <div className="company-card__links">
                    <Link
                      className="company-card__link"
                      href={`/${lang}/companies/${meta.slug}`}
                    >
                      {dict.learnMore} <ArrowRight />
                    </Link>
                    {meta.website && (
                      <a
                        className="company-card__link company-card__link--ext"
                        href={meta.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {dict.visit} <ArrowRight />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
