import { Phone } from "@/components/icons";
import type { Dictionary } from "@/i18n/dictionaries";

export default function CTA({ dict }: { dict: Dictionary["cta"] }) {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="cta reveal">
          <h2>{dict.title}</h2>
          <p>{dict.text}</p>
          <div className="cta__actions">
            <a className="btn btn--primary btn--lg" href="tel:+971529987406">
              <Phone /> +971 52 998 7406
            </a>
            <a className="btn btn--light btn--lg" href="mailto:info@axongroup.ae">{dict.email}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
