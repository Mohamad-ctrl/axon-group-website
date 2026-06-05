import type { Dictionary } from "@/i18n/dictionaries";

export default function Stats({ dict }: { dict: Dictionary["stats"] }) {
  const stats = [
    { num: 7, suffix: "", label: dict.companies },
    { num: 100, suffix: "+", label: dict.clients },
    { num: 20, suffix: "+", label: dict.years },
    { num: 500, suffix: "+", label: dict.projects },
  ];
  return (
    <div className="container">
      <div className="stats stats--float reveal" aria-label="Key figures">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <div className="stat__num">
              <span data-count={s.num} data-suffix={s.suffix}>
                {s.num}
                {s.suffix}
              </span>
            </div>
            <div className="stat__label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
