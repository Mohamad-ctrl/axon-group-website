import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { isAuthenticated } from "@/lib/admin-auth";
import { supabaseAdmin, CV_BUCKET } from "@/lib/supabase";
import { PIPELINE, STAGE_LABEL, nextStage, type Stage } from "@/lib/stages";
import { setStage } from "../actions";

export const dynamic = "force-dynamic";

type App = {
  id: string;
  created_at: string;
  job_title: string;
  job_slug: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  cover_letter: string | null;
  cv_path: string | null;
  cv_filename: string | null;
  stage: Stage;
};

export default async function ApplicationDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  if (!(await isAuthenticated())) redirect("/admin/login");

  const { id } = await params;
  const supabase = supabaseAdmin();
  const { data } = await supabase.from("applications").select("*").eq("id", id).maybeSingle();
  if (!data) notFound();
  const app = data as App;

  let cvUrl: string | null = null;
  if (app.cv_path) {
    const signed = await supabase.storage.from(CV_BUCKET).createSignedUrl(app.cv_path, 3600);
    cvUrl = signed.data?.signedUrl ?? null;
  }

  const isRejected = app.stage === "rejected";
  const currentIdx = PIPELINE.indexOf(app.stage as (typeof PIPELINE)[number]);
  const next = nextStage(app.stage);

  return (
    <div className="admin-page">
      <div className="crumbs"><Link href="/admin">← All applications</Link></div>
      <div className="admin-head">
        <h1>{app.first_name} {app.last_name}</h1>
        <p className="muted">
          Applied for <b>{app.job_title}</b> ·{" "}
          {new Date(app.created_at).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
        </p>
      </div>

      <div className={`tracker${isRejected ? " tracker--rejected" : ""}`}>
        {PIPELINE.map((s, i) => {
          const cls = isRejected ? "" : i < currentIdx ? " is-done" : i === currentIdx ? " is-current" : "";
          return (
            <div className={`tracker__step${cls}`} key={s}>
              <div className="tracker__dot">{!isRejected && i < currentIdx ? "✓" : i + 1}</div>
              <span className="tracker__label">{STAGE_LABEL[s]}</span>
            </div>
          );
        })}
      </div>
      {isRejected && (
        <div className="alert alert--error" style={{ marginTop: "1rem" }}>
          This application has been <b>rejected</b>.
        </div>
      )}

      <div className="admin-detail">
        <div className="admin-card">
          <h2>Candidate</h2>
          <dl className="kv">
            <div><dt>Email</dt><dd><a href={`mailto:${app.email}`}>{app.email}</a></dd></div>
            <div><dt>Phone</dt><dd><a href={`tel:${app.phone}`} style={{ direction: "ltr", display: "inline-block" }}>{app.phone}</a></dd></div>
            <div><dt>Role</dt><dd>{app.job_title}</dd></div>
            <div><dt>CV</dt><dd>{cvUrl ? <a href={cvUrl} target="_blank" rel="noopener noreferrer">Download {app.cv_filename}</a> : "—"}</dd></div>
          </dl>
          {app.cover_letter && (
            <>
              <h2 style={{ marginTop: "1.5rem" }}>Cover note</h2>
              <p style={{ whiteSpace: "pre-wrap" }}>{app.cover_letter}</p>
            </>
          )}
        </div>

        <aside className="admin-card">
          <h2>Update stage</h2>
          <p className="muted" style={{ marginBottom: "1rem" }}>
            Current: <b>{STAGE_LABEL[app.stage]}</b>
          </p>
          <div className="admin-actions">
            {next && (
              <form action={setStage}>
                <input type="hidden" name="id" value={app.id} />
                <input type="hidden" name="stage" value={next} />
                <button className="btn btn--primary btn--block" type="submit">Advance to {STAGE_LABEL[next]}</button>
              </form>
            )}
            {!isRejected ? (
              <form action={setStage}>
                <input type="hidden" name="id" value={app.id} />
                <input type="hidden" name="stage" value="rejected" />
                <button className="btn btn--ghost btn--block" type="submit">Reject</button>
              </form>
            ) : (
              <form action={setStage}>
                <input type="hidden" name="id" value={app.id} />
                <input type="hidden" name="stage" value="under_review" />
                <button className="btn btn--ghost btn--block" type="submit">Re-open (Under Review)</button>
              </form>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
