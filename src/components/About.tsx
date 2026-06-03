import Link from "next/link";
import Image from "next/image";
import { Check } from "@/components/icons";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export default function About({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary["about"];
}) {
  return (
    <section className="section" id="about">
      <div className="container about">
        <div className="about__media reveal">
          <Image src="/images/about.jpg" alt="" width={760} height={620} />
        </div>
        <div className="about__body reveal">
          <p className="eyebrow">{dict.eyebrow}</p>
          <h2>{dict.title}</h2>
          <p className="lead">{dict.lead}</p>
          <div className="about__points">
            {dict.points.map((p) => (
              <div className="about__point" key={p.t}>
                <Check />
                <p>
                  <b>{p.t}</b> {p.d}
                </p>
              </div>
            ))}
          </div>
          <Link className="btn btn--ghost" href={`/${lang}#contact`} style={{ marginTop: "2rem" }}>
            {dict.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
