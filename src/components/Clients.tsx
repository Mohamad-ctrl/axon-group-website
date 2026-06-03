import Image from "next/image";
import { clientLogos } from "@/data/clients";
import type { Dictionary } from "@/i18n/dictionaries";

export default function Clients({ dict }: { dict: Dictionary["clients"] }) {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow eyebrow--center">{dict.eyebrow}</p>
          <h2>{dict.title}</h2>
        </div>
        <div className="logos reveal">
          {clientLogos.map((file, i) => (
            <div className="logo-item" key={file}>
              <Image
                src={`/images/clients/${file}`}
                alt={i === 0 ? "Al Ain Zoo" : "Axon Group client"}
                width={240}
                height={108}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
