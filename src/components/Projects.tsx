import Image from "next/image";
import { featuredProjects, PROJECT_CAT } from "@/data/projects";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export default function Projects({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary["projects"];
}) {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow eyebrow--center">{dict.eyebrow}</p>
          <h2>{dict.title}</h2>
          <p className="lead">{dict.lead}</p>
        </div>
        <div className="grid grid-3">
          {featuredProjects.map((p) => (
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
  );
}
