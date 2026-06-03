import { redirect } from "next/navigation";
import Link from "next/link";
import { isAuthenticated } from "@/lib/admin-auth";
import { createJob } from "../../actions";

export const dynamic = "force-dynamic";

function Pair({ label, name, required, textarea, hint }: { label: string; name: string; required?: boolean; textarea?: boolean; hint?: string }) {
  return (
    <div className="form__row">
      <div className="field">
        <label>{label} (English){required && <span className="req"> *</span>}</label>
        {textarea ? <textarea name={`${name}_en`} required={required} /> : <input name={`${name}_en`} required={required} />}
        {hint && <span className="field__hint">{hint}</span>}
      </div>
      <div className="field">
        <label>{label} (Arabic){required && <span className="req"> *</span>}</label>
        {textarea ? <textarea name={`${name}_ar`} required={required} dir="rtl" /> : <input name={`${name}_ar`} required={required} dir="rtl" />}
        {hint && <span className="field__hint">{hint}</span>}
      </div>
    </div>
  );
}

export default async function NewJobPage() {
  if (!(await isAuthenticated())) redirect("/admin/login");

  return (
    <div className="admin-page">
      <div className="crumbs"><Link href="/admin/jobs">← Job openings</Link></div>
      <div className="admin-head">
        <h1>Post a new job</h1>
        <p className="muted">Fill in both English and Arabic. For lists, put one item per line.</p>
      </div>

      <div className="admin-card" style={{ maxWidth: 860 }}>
        <form className="form" action={createJob}>
          <div className="field">
            <label htmlFor="slug">URL slug <span className="muted" style={{ fontWeight: 400 }}>(optional — auto-generated from the English title)</span></label>
            <input id="slug" name="slug" placeholder="e.g. marketing-manager" />
          </div>

          <Pair label="Title" name="title" required />
          <Pair label="Department" name="department" required />
          <Pair label="Company" name="company" required />
          <Pair label="Location" name="location" required />
          <Pair label="Type" name="type" required />
          <Pair label="Excerpt" name="excerpt" required textarea hint="A one-line summary." />
          <Pair label="Description" name="description" textarea hint="One paragraph per line." />
          <Pair label="Responsibilities" name="responsibilities" textarea hint="One item per line." />
          <Pair label="Requirements" name="requirements" textarea hint="One item per line." />

          <button className="btn btn--primary btn--lg" type="submit">Publish job</button>
        </form>
      </div>
    </div>
  );
}
