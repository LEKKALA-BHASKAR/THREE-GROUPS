import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api } from '../api.js';
import { CTASection, useReveal } from '../components/usePage.jsx';

export function CareersIndex() {
  useReveal();
  const [jobs, setJobs] = useState([]);
  useEffect(() => { api.getJobs().then(setJobs).catch(() => {}); }, []);

  return (
    <>
      <section className="page-hero">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="page-hero-inner">
          <div className="eyebrow">Careers</div>
          <h1>Senior Practitioners.<br /><span>Real Ownership.</span></h1>
          <p>No ping-pong tables, no "rockstar ninjas". Just senior practitioners, real ownership, and the chance to do work you're proud to put your name on.</p>
        </div>
      </section>

      <section>
        <div className="section-head reveal" style={{ textAlign: 'center', margin: '0 auto 40px', maxWidth: 620 }}>
          <div className="section-label">How We Work</div>
          <h2 className="section-title">Quiet Excellence,<br />Loud Outcomes.</h2>
        </div>
        <div className="pillars" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {[
            ['Quiet excellence', "Loud doesn't equal good. We hire people whose work speaks for them."],
            ['Senior by default', 'No junior pyramid scheme. Our average team member has 10+ years in the trade.'],
            ['Slow hiring', "We'd rather wait six months than rush a bad fit. Tenure here is measured in years."],
            ['Real ownership', 'Equity, profit-share, and the autonomy to make calls without three layers of approval.'],
          ].map(([h, p], i) => (
            <div className={`pillar reveal d${i || ''}`} key={h}>
              <div className="pillar-line" />
              <div className="pillar-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></div>
              <h3>{h}</h3>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--navy2)' }}>
        <div className="section-head reveal" style={{ marginBottom: 40, maxWidth: 600 }}>
          <div className="section-label">Open Roles</div>
          <h2 className="section-title">Where You Could Fit.</h2>
          <p className="section-sub">All roles are senior unless explicitly marked. Remote-friendly, US-anchored.</p>
        </div>
        <div className="roles-grid">
          {jobs.length === 0 && <p style={{ color: 'var(--muted)', padding: 30, gridColumn: '1 / -1' }}>Loading open roles…</p>}
          {jobs.map((j, i) => (
            <Link to={`/careers/${j.id}`} key={j.id} className={`role-card reveal d${i % 3 || ''}`} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
              <div className="role-discipline">{j.team}</div>
              <h4>{j.role}</h4>
              <div className="role-tags" style={{ marginTop: 12 }}>
                <span className="role-tag">{j.location}</span>
                <span className="role-tag">{j.type}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="section-head reveal" style={{ textAlign: 'center', margin: '0 auto 40px', maxWidth: 620 }}>
          <div className="section-label">Hiring Process</div>
          <h2 className="section-title">No Theatrics.<br />No Ghosting. Ever.</h2>
        </div>
        <div className="process-steps">
          {[
            ['01', 'Intro', '30 minutes, no whiteboard. We learn about you. You learn about us.'],
            ['02', 'Take-home or paired', "Your choice — scoped to under 4 hours. Real problems, no trick questions."],
            ['03', 'Team conversations', "Meet 3–4 people you'd actually work with. Skip the panel theatre."],
            ['04', 'Reference & offer', 'Within 5 business days. Decision either way — never silence.'],
          ].map(([n, h, p], i) => (
            <div className={`step reveal d${i || ''}`} key={n}>
              <div className="step-num">{n}</div>
              <h4>{h}</h4>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection eyebrow="Don't See A Fit?" title="Talk to Us" accent="Anyway." body="If your work is the kind that survives a careful read, we want to hear from you — even if there's no posted role." primaryHref="mailto:careers@threegroups.com" primaryLabel="careers@threegroups.com" />
    </>
  );
}

export function CareerDetail() {
  useReveal();
  const { id } = useParams();
  const [j, setJ] = useState(null);
  const [err, setErr] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => { api.getJob(id).then(setJ).catch(() => setErr(true)); }, [id]);

  const apply = async (e) => {
    e.preventDefault();
    try {
      await api.submitLead({ kind: 'apply', ...form, meta: { jobId: id, role: j?.role } });
      setSubmitted(true);
    } catch { setSubmitted(true); }
  };

  if (err) return (
    <section className="page-hero"><div className="page-hero-inner">
      <div className="eyebrow">Not Found</div>
      <h1>Role<br /><span>no longer open.</span></h1>
      <p><Link to="/careers" style={{ color: 'var(--teal)' }}>See all open roles →</Link></p>
    </div></section>
  );
  if (!j) return <section className="page-hero"><div className="page-hero-inner"><p style={{ color: 'var(--muted)' }}>Loading…</p></div></section>;

  return (
    <>
      <section className="page-hero">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="page-hero-inner">
          <div className="eyebrow">{j.team} · {j.location} · {j.type}</div>
          <h1>{j.role}</h1>
          <p style={{ marginTop: 24 }}>{j.description}</p>
        </div>
      </section>

      <section>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 60, alignItems: 'start', maxWidth: 1100, margin: '0 auto' }}>
          <div className="reveal">
            <div className="section-label">What we look for</div>
            <ul className="eng-list" style={{ marginTop: 20 }}>
              {(j.requirements || []).map((r) => <li key={r}>{r}</li>)}
            </ul>
          </div>

          <div className="reveal d1">
            <div className="section-label">Apply</div>
            {submitted ? (
              <div style={{ padding: 24, border: '1px solid rgba(0,200,212,0.3)', background: 'var(--card)', marginTop: 20 }}>
                <h4 style={{ marginBottom: 8 }}>Application received</h4>
                <p style={{ color: 'var(--muted)' }}>Thanks — we'll be in touch within 5 business days.</p>
              </div>
            ) : (
              <form onSubmit={apply} style={{ marginTop: 20 }}>
                <div className="field" style={{ marginBottom: 16 }}>
                  <label>Name</label>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div className="field" style={{ marginBottom: 16 }}>
                  <label>Email</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <div className="field" style={{ marginBottom: 16 }}>
                  <label>Why this role?</label>
                  <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Link to your work, github, or a paragraph that says more than a resume." />
                </div>
                <button className="btn-primary" type="submit">Send Application</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
