import type { Dictionary } from "@/i18n/dictionaries";

const files = ["project-1.webp", "project-2.webp", "project-3.webp"];

export default function Projects({ dict }: { dict: Dictionary["projects"] }) {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow eyebrow--center">{dict.eyebrow}</p>
          <h2>{dict.title}</h2>
          <p className="lead">{dict.lead}</p>
        </div>
        <div className="grid grid-3">
          {dict.cats.map((cat, i) => (
            <article className="project-card reveal" key={files[i]}>
              <div className="img-frame">
                <div className="img-frame__inner">
                  <span className="img-frame__label">{files[i]}</span>
                  <span className="img-frame__dim">800 × 600</span>
                </div>
              </div>
              <div className="project-card__meta">
                <span className="project-card__cat">{cat}</span>
                <h3>{dict.titlePlaceholder}</h3>
                <p>{dict.descPlaceholder}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
