"use client";

import { useState } from "react";
import Link from "next/link";
import { Briefcase, MapPin, Clock, ArrowRight } from "@/components/icons";
import type { Job } from "@/data/jobs";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

const ALL = "__all__";

export default function JobsExplorer({
  lang,
  dict,
  jobs,
  departments,
}: {
  lang: Locale;
  dict: Dictionary["careers"];
  jobs: Job[];
  departments: string[];
}) {
  const [active, setActive] = useState<string>(ALL);
  const filters = [{ key: ALL, label: dict.filterAll }, ...departments.map((d) => ({ key: d, label: d }))];
  const filtered = active === ALL ? jobs : jobs.filter((j) => j.department[lang] === active);

  return (
    <div className="reveal">
      <div className="jobs__filters" role="group" aria-label={dict.filterAria}>
        {filters.map((f) => (
          <button
            key={f.key}
            className={`filter-btn${active === f.key ? " is-active" : ""}`}
            onClick={() => setActive(f.key)}
            aria-pressed={active === f.key}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="jobs__empty">
          {dict.emptyPrefix}
          <a href="mailto:careers@axongroup.ae">careers@axongroup.ae</a>.
        </p>
      ) : (
        <div className="jobs__list">
          {filtered.map((job) => (
            <article className="job-card" key={job.slug}>
              <div>
                <span className="chip">{job.department[lang]}</span>
                <h3 style={{ marginTop: ".5rem" }}>{job.title[lang]}</h3>
                <div className="job-card__meta">
                  <span><Briefcase /> {job.company[lang]}</span>
                  <span><MapPin /> {job.location[lang]}</span>
                  <span><Clock /> {job.type[lang]}</span>
                </div>
              </div>
              <div className="job-card__cta">
                <Link className="btn btn--primary" href={`/${lang}/careers/${job.slug}`}>
                  {dict.viewApply} <ArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
