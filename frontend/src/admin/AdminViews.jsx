import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { api } from '../api.js';

/* ---------- Dashboard ---------- */
export function Dashboard() {
  const [counts, setCounts] = useState({ pages: 0, jobs: 0, posts: 0, cases: 0, leads: 0 });
  useEffect(() => {
    Promise.all([api.getPages(), api.getJobs(), api.getPosts(), api.getCases(), api.getLeads().catch(() => [])])
      .then(([pages, jobs, posts, cases, leads]) =>
        setCounts({ pages: pages.length, jobs: jobs.length, posts: posts.length, cases: cases.length, leads: leads.length }));
  }, []);
  const tiles = [
    ['Pages', counts.pages, '/admin/pages'],
    ['Open Jobs', counts.jobs, '/admin/jobs'],
    ['Articles', counts.posts, '/admin/posts'],
    ['Case Studies', counts.cases, '/admin/cases'],
    ['Inbound Leads', counts.leads, '/admin/leads'],
  ];
  return (
    <div>
      <h1 className="h-display text-4xl">Dashboard</h1>
      <p className="text-slate font-serif mt-2">Quick overview. Click any card to manage.</p>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
        {tiles.map(([n, c, h]) => (
          <Link to={h} key={n} className="bg-paper border border-abyss/10 p-6 hover:border-abyss/30 transition-colors">
            <div className="font-mono text-[10px] tracking-[0.3em] text-cyan2">{n.toUpperCase()}</div>
            <div className="font-display text-5xl mt-3">{c}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ---------- Pages list & editor ---------- */
export function PagesList() {
  const [pages, setPages] = useState([]);
  useEffect(() => { api.getPages().then(setPages); }, []);
  return (
    <div>
      <h1 className="h-display text-4xl">Pages</h1>
      <p className="text-slate font-serif mt-2">Edit content for any page on the public site.</p>
      <div className="mt-8 border-t border-abyss/15">
        {pages.map((p) => (
          <Link to={`/admin/pages/${encodeURIComponent(p.slug)}`} key={p.slug}
            className="grid grid-cols-12 gap-4 py-4 border-b border-abyss/15 hover:bg-paper transition-colors items-center">
            <div className="col-span-3 font-mono text-[12px] text-cyan2">{p.slug}</div>
            <div className="col-span-6 font-display text-lg">{p.title}</div>
            <div className="col-span-2 text-[12px] text-slate">{p.updated_at?.slice(0, 16)}</div>
            <div className="col-span-1 text-right text-cyan2">→</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function PageEditor() {
  const { slug: rawSlug } = useParams();
  const slug = decodeURIComponent(rawSlug);
  const [page, setPage] = useState(null);
  const [json, setJson] = useState('');
  const [title, setTitle] = useState('');
  const [msg, setMsg] = useState('');
  const [err, setErr] = useState('');

  useEffect(() => {
    api.getPage(slug).then((p) => {
      setPage(p);
      setTitle(p.title || '');
      setJson(JSON.stringify(p.content || {}, null, 2));
    });
  }, [slug]);

  async function save() {
    setErr(''); setMsg('');
    try {
      const content = JSON.parse(json);
      await api.savePage(slug, { title, content });
      setMsg('Saved · live now');
      setTimeout(() => setMsg(''), 2400);
    } catch (e) { setErr('Could not save: ' + e.message); }
  }

  if (!page) return <div className="text-slate">Loading…</div>;
  return (
    <div>
      <Link to="/admin/pages" className="text-cyan2 text-[13px] hover:underline">← All pages</Link>
      <div className="mt-2 font-mono text-[11px] tracking-[0.3em] text-cyan2">EDITING /{slug}</div>
      <h1 className="h-display text-4xl mt-2">{title}</h1>
      <div className="mt-6 grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-3">
          <label className="block">
            <span className="font-mono text-[11px] tracking-wider text-slate uppercase">Page title</span>
            <input value={title} onChange={(e) => setTitle(e.target.value)}
              className="mt-1 w-full bg-paper border border-abyss/15 px-4 py-3 outline-none focus:border-abyss" />
          </label>
          <label className="block">
            <span className="font-mono text-[11px] tracking-wider text-slate uppercase">Content (JSON)</span>
            <textarea value={json} onChange={(e) => setJson(e.target.value)} rows="28"
              className="mt-1 w-full bg-paper border border-abyss/15 px-4 py-3 font-mono text-[12px] outline-none focus:border-abyss" />
          </label>
          {err && <div className="text-red-700 text-[13px]">{err}</div>}
          {msg && <div className="text-cyan2 text-[13px]">{msg}</div>}
          <div className="flex gap-3">
            <button onClick={save} className="btn-solid">Save changes</button>
            <Link to={'/' + (slug === 'home' ? '' : slug)} target="_blank" className="btn-ghost">View page →</Link>
          </div>
        </div>
        <aside className="lg:col-span-4 bg-paper border border-abyss/10 p-5 text-[13px] text-slateDark">
          <div className="font-mono text-[10px] tracking-[0.3em] text-cyan2">EDITING TIP</div>
          <p className="mt-2 font-serif">Edit the JSON directly. Anything you change here updates the public page in real time after saving.</p>
          <p className="mt-3 font-serif">Lists, headlines, paragraphs, CTAs — all editable. The frontend uses default fallbacks for any missing fields, so you can&rsquo;t break the page.</p>
        </aside>
      </div>
    </div>
  );
}

/* ---------- Jobs ---------- */
export function JobsList() {
  const [jobs, setJobs] = useState([]);
  const nav = useNavigate();
  useEffect(() => { api.getJobs().then(setJobs); }, []);
  async function add() {
    const id = 'job-' + Date.now();
    await api.createJob({ id, role: 'New Role', team: 'Software', location: 'Remote', type: 'Full-time', description: '', requirements: [], published: 1 });
    nav(`/admin/jobs/${id}`);
  }
  return (
    <div>
      <div className="flex justify-between items-end">
        <div><h1 className="h-display text-4xl">Jobs</h1><p className="text-slate font-serif mt-2">Open roles shown on /careers.</p></div>
        <button onClick={add} className="btn-solid">+ New role</button>
      </div>
      <div className="mt-8 border-t border-abyss/15">
        {jobs.map((j) => (
          <Link to={`/admin/jobs/${j.id}`} key={j.id} className="grid grid-cols-12 gap-3 py-4 border-b border-abyss/15 hover:bg-paper items-center">
            <div className="col-span-5 font-display text-lg">{j.role}</div>
            <div className="col-span-2 font-mono text-[11px] text-cyan2">{j.team}</div>
            <div className="col-span-3 text-[13px] text-slateDark">{j.location}</div>
            <div className="col-span-2 text-[12px] text-slate">{j.type}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function JobEditor() {
  const { id } = useParams();
  const nav = useNavigate();
  const [j, setJ] = useState(null);
  useEffect(() => { api.getJob(id).then(setJ); }, [id]);
  async function save() { await api.saveJob(id, j); alert('Saved'); }
  async function del() { if (confirm('Delete this role?')) { await api.deleteJob(id); nav('/admin/jobs'); } }
  if (!j) return <div className="text-slate">Loading…</div>;
  return (
    <div className="max-w-3xl">
      <Link to="/admin/jobs" className="text-cyan2 text-[13px] hover:underline">← All jobs</Link>
      <h1 className="h-display text-3xl mt-2">{j.role}</h1>
      <div className="mt-6 space-y-3">
        <Field label="Role title" value={j.role} onChange={(v) => setJ({ ...j, role: v })} />
        <div className="grid md:grid-cols-3 gap-3">
          <Field label="Team" value={j.team} onChange={(v) => setJ({ ...j, team: v })} />
          <Field label="Location" value={j.location} onChange={(v) => setJ({ ...j, location: v })} />
          <Field label="Type" value={j.type} onChange={(v) => setJ({ ...j, type: v })} />
        </div>
        <Field label="Description" value={j.description} onChange={(v) => setJ({ ...j, description: v })} multi />
        <Field label="Requirements (one per line)" value={(j.requirements || []).join('\n')}
          onChange={(v) => setJ({ ...j, requirements: v.split('\n').filter(Boolean) })} multi />
        <label className="flex items-center gap-2 text-[13px]">
          <input type="checkbox" checked={!!j.published} onChange={(e) => setJ({ ...j, published: e.target.checked ? 1 : 0 })} /> Published
        </label>
        <div className="flex gap-3 pt-3">
          <button onClick={save} className="btn-solid">Save</button>
          <button onClick={del} className="btn-ghost text-red-700 hover:bg-red-700 hover:border-red-700">Delete</button>
        </div>
      </div>
    </div>
  );
}

/* ---------- Posts ---------- */
export function PostsList() {
  const [posts, setPosts] = useState([]);
  const nav = useNavigate();
  useEffect(() => { api.getPosts().then(setPosts); }, []);
  async function add() {
    const id = 'post-' + Date.now();
    await api.createPost({ id, title: 'New article', category: 'Software', author: 'Three Groups', initials: 'TG', date: new Date().toISOString().slice(0,10), read_time: '5 min', blurb: '', body: '', featured: 0, published: 1 });
    nav(`/admin/posts/${id}`);
  }
  return (
    <div>
      <div className="flex justify-between items-end">
        <div><h1 className="h-display text-4xl">Articles</h1><p className="text-slate font-serif mt-2">Journal posts shown on /journal.</p></div>
        <button onClick={add} className="btn-solid">+ New article</button>
      </div>
      <div className="mt-8 border-t border-abyss/15">
        {posts.map((p) => (
          <Link to={`/admin/posts/${p.id}`} key={p.id} className="grid grid-cols-12 gap-3 py-4 border-b border-abyss/15 hover:bg-paper items-center">
            <div className="col-span-6 font-display text-lg">{p.title}</div>
            <div className="col-span-2 font-mono text-[11px] text-cyan2">{p.category}</div>
            <div className="col-span-2 text-[13px] text-slateDark">{p.author}</div>
            <div className="col-span-2 text-[12px] text-slate">{p.date}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function PostEditor() {
  const { id } = useParams();
  const nav = useNavigate();
  const [p, setP] = useState(null);
  useEffect(() => { api.getPost(id).then(setP); }, [id]);
  async function save() { await api.savePost(id, p); alert('Saved'); }
  async function del() { if (confirm('Delete?')) { await api.deletePost(id); nav('/admin/posts'); } }
  if (!p) return <div className="text-slate">Loading…</div>;
  return (
    <div className="max-w-3xl">
      <Link to="/admin/posts" className="text-cyan2 text-[13px] hover:underline">← All articles</Link>
      <h1 className="h-display text-3xl mt-2">Edit article</h1>
      <div className="mt-6 space-y-3">
        <Field label="Title" value={p.title} onChange={(v) => setP({ ...p, title: v })} />
        <div className="grid md:grid-cols-2 gap-3">
          <Field label="Category" value={p.category} onChange={(v) => setP({ ...p, category: v })} />
          <Field label="Author" value={p.author} onChange={(v) => setP({ ...p, author: v })} />
          <Field label="Initials" value={p.initials} onChange={(v) => setP({ ...p, initials: v })} />
          <Field label="Date" value={p.date} onChange={(v) => setP({ ...p, date: v })} />
          <Field label="Read time" value={p.read_time} onChange={(v) => setP({ ...p, read_time: v })} />
        </div>
        <Field label="Blurb" value={p.blurb} onChange={(v) => setP({ ...p, blurb: v })} multi />
        <Field label="Body (use blank lines between paragraphs)" value={p.body} onChange={(v) => setP({ ...p, body: v })} multi rows={14} />
        <label className="flex items-center gap-2 text-[13px]">
          <input type="checkbox" checked={!!p.featured} onChange={(e) => setP({ ...p, featured: e.target.checked ? 1 : 0 })} /> Featured
        </label>
        <label className="flex items-center gap-2 text-[13px]">
          <input type="checkbox" checked={!!p.published} onChange={(e) => setP({ ...p, published: e.target.checked ? 1 : 0 })} /> Published
        </label>
        <div className="flex gap-3 pt-3">
          <button onClick={save} className="btn-solid">Save</button>
          <button onClick={del} className="btn-ghost">Delete</button>
        </div>
      </div>
    </div>
  );
}

/* ---------- Cases ---------- */
export function CasesList() {
  const [cs, setCs] = useState([]);
  useEffect(() => { api.getCases().then(setCs); }, []);
  return (
    <div>
      <h1 className="h-display text-4xl">Case Studies</h1>
      <div className="mt-8 border-t border-abyss/15">
        {cs.map((c) => (
          <Link to={`/admin/cases/${c.id}`} key={c.id} className="grid grid-cols-12 gap-3 py-4 border-b border-abyss/15 hover:bg-paper items-center">
            <div className="col-span-7 font-display text-lg">{c.title}</div>
            <div className="col-span-3 font-mono text-[11px] text-cyan2">{c.industry}</div>
            <div className="col-span-2 text-[12px] text-slate">{c.featured ? 'Featured' : ''}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function CaseEditor() {
  const { id } = useParams();
  const [c, setC] = useState(null);
  useEffect(() => { api.getCase(id).then(setC); }, [id]);
  async function save() { await api.saveCase(id, c); alert('Saved'); }
  if (!c) return <div className="text-slate">Loading…</div>;
  return (
    <div className="max-w-3xl">
      <Link to="/admin/cases" className="text-cyan2 text-[13px] hover:underline">← All case studies</Link>
      <h1 className="h-display text-3xl mt-2">Edit case study</h1>
      <div className="mt-6 space-y-3">
        <Field label="Title" value={c.title} onChange={(v) => setC({ ...c, title: v })} />
        <Field label="Industry" value={c.industry} onChange={(v) => setC({ ...c, industry: v })} />
        <Field label="Tag (space-separated)" value={c.tag} onChange={(v) => setC({ ...c, tag: v })} />
        <Field label="Body" value={c.body} onChange={(v) => setC({ ...c, body: v })} multi />
        <Field label="Metrics (JSON: [['62%','faster'],...])" value={JSON.stringify(c.metrics || [])}
          onChange={(v) => { try { setC({ ...c, metrics: JSON.parse(v) }); } catch {} }} />
        <Field label="Chips (JSON: ['ERP','BI'])" value={JSON.stringify(c.chips || [])}
          onChange={(v) => { try { setC({ ...c, chips: JSON.parse(v) }); } catch {} }} />
        <label className="flex items-center gap-2 text-[13px]">
          <input type="checkbox" checked={!!c.featured} onChange={(e) => setC({ ...c, featured: e.target.checked ? 1 : 0 })} /> Featured
        </label>
        <button onClick={save} className="btn-solid">Save</button>
      </div>
    </div>
  );
}

/* ---------- Leads ---------- */
export function LeadsList() {
  const [leads, setLeads] = useState([]);
  useEffect(() => { api.getLeads().then(setLeads); }, []);
  return (
    <div>
      <h1 className="h-display text-4xl">Inbound leads</h1>
      <p className="text-slate font-serif mt-2">Contact, application, and newsletter submissions.</p>
      <div className="mt-8 border-t border-abyss/15">
        {leads.map((l) => (
          <div key={l.id} className="grid grid-cols-12 gap-3 py-4 border-b border-abyss/15 items-start">
            <div className="col-span-2 font-mono text-[11px] text-cyan2">{l.kind}</div>
            <div className="col-span-2 font-display">{l.name || '—'}</div>
            <div className="col-span-3 text-[13px] text-slateDark">{l.email}</div>
            <div className="col-span-2 text-[13px] text-slateDark">{l.company}</div>
            <div className="col-span-3 text-[12px] text-slate truncate">{l.message}</div>
          </div>
        ))}
        {leads.length === 0 && <div className="py-8 text-slate">No leads yet.</div>}
      </div>
    </div>
  );
}

/* ---------- helper ---------- */
function Field({ label, value, onChange, multi, rows }) {
  return (
    <label className="block">
      <span className="font-mono text-[11px] tracking-wider text-slate uppercase">{label}</span>
      {multi ? (
        <textarea rows={rows || 5} value={value || ''} onChange={(e) => onChange(e.target.value)}
          className="mt-1 w-full bg-paper border border-abyss/15 px-4 py-3 outline-none focus:border-abyss font-serif" />
      ) : (
        <input value={value || ''} onChange={(e) => onChange(e.target.value)}
          className="mt-1 w-full bg-paper border border-abyss/15 px-4 py-3 outline-none focus:border-abyss" />
      )}
    </label>
  );
}
