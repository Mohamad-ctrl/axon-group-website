import { redirect } from "next/navigation";
import Link from "next/link";
import { isAuthenticated } from "@/lib/admin-auth";
import { supabaseAdmin } from "@/lib/supabase";
import { ALL_STAGES, STAGE_LABEL, type Stage } from "@/lib/stages";

export const dynamic = "force-dynamic";

type Row = {
  id: string;
  created_at: string;
  job_title: string;
  first_name: string;
  last_name: string;
  email: string;
  stage: Stage;
};

export default async function AdminDashboard({
  searchParams,
}: {
  searchParams: Promise<{ stage?: string }>;
}) {
  if (!(await isAuthenticated())) redirect("/admin/login");

  const { stage } = await searchParams;
  const { data, error } = await supabaseAdmin()
    .from("applications")
    .select("id,created_at,job_title,first_name,last_name,email,stage")
    .order("created_at", { ascending: false });

  const rows: Row[] = (data as Row[] | null) ?? [];
  const counts: Record<string, number> = {};
  rows.forEach((r) => { counts[r.stage] = (counts[r.stage] || 0) + 1; });
  const filtered = stage && stage !== "all" ? rows.filter((r) => r.stage === stage) : rows;

  return (
    <div className="admin-page">
      <div className="admin-head">
        <h1>Applications</h1>
        <p className="muted">{rows.length} total</p>
      </div>

      {error && <div className="alert alert--error">Could not load applications: {error.message}</div>}

      <div className="admin-filters">
        <Link className={`filter-btn${!stage || stage === "all" ? " is-active" : ""}`} href="/admin">
          All ({rows.length})
        </Link>
        {ALL_STAGES.map((s) => (
          <Link key={s} className={`filter-btn${stage === s ? " is-active" : ""}`} href={`/admin?stage=${s}`}>
            {STAGE_LABEL[s]} ({counts[s] || 0})
          </Link>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="jobs__empty">No applications{stage && stage !== "all" ? " in this stage" : " yet"}.</p>
      ) : (
        <div className="admin-table">
          <div className="admin-table__head">
            <span>Applicant</span>
            <span>Role</span>
            <span>Stage</span>
            <span>Applied</span>
            <span></span>
          </div>
          {filtered.map((r) => (
            <div className="admin-table__row" key={r.id}>
              <span><b>{r.first_name} {r.last_name}</b><br /><span className="muted">{r.email}</span></span>
              <span>{r.job_title}</span>
              <span><span className={`stage-badge stage-badge--${r.stage}`}>{STAGE_LABEL[r.stage]}</span></span>
              <span className="muted">{new Date(r.created_at).toLocaleDateString("en-GB")}</span>
              <span><Link className="btn btn--ghost" href={`/admin/${r.id}`} style={{ padding: ".4rem .9rem" }}>View</Link></span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
