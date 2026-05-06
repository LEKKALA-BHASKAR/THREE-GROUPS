import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api } from '../api.js';
import { CTASection, useReveal } from '../components/usePage.jsx';

const Arrow = () => <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>;
const FILTERS = [
  ['all', 'All Topics'],
  ['Software', 'Software'],
  ['ERP', 'ERP'],
  ['Data & AI', 'Data & AI'],
  ['Leadership', 'Leadership'],
];

export function JournalIndex() {
  useReveal();
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState('all');
  const [q, setQ] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [first, setFirst] = useState('');

  useEffect(() => { api.getPosts().then(setPosts).catch(() => {}); }, []);

  const featured = useMemo(() => posts.find((p) => p.featured), [posts]);
  const rest = useMemo(() => posts.filter((p) => !p.featured), [posts]);

  const filtered = rest.filter((p) => {
    const fOk = filter === 'all' || (p.category || '').includes(filter);
    if (!fOk) return false;
    if (!q.trim()) return true;
    const text = (p.title + ' ' + (p.blurb || '') + ' ' + (p.category || '')).toLowerCase();
    return text.includes(q.toLowerCase().trim());
  });

  const subscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    try {
      await api.submitLead({ kind: 'newsletter', name: first, email });
      setSubscribed(true);
    } catch { setSubscribed(true); }
  };

  return (
    <>
      <section className="page-hero">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-inner">
          <div>
            <div className="eyebrow">Insights & Perspectives</div>
            <h1>The Three Groups<br /><span>Journal</span></h1>
            <p>Practical thinking on Software Development, ERP, and Data &amp; AI — written by the people actually doing the work.</p>
          </div>
          <div style={{ alignSelf: 'flex-end' }}>
            <div className="search-box">
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles…" />
              <button aria-label="search"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg></button>
            </div>
          </div>
        </div>
      </section>

      <div style={{ padding: '32px 5%', background: 'var(--navy2)', borderTop: '1px solid rgba(0,200,212,0.1)', borderBottom: '1px solid rgba(0,200,212,0.1)' }}>
        <div className="filters">
          {FILTERS.map(([k, l]) => (
            <button key={k} className={`filter-btn ${filter === k ? 'active' : ''}`} onClick={() => setFilter(k)}>{l}</button>
          ))}
        </div>
      </div>

      {featured && (
        <section style={{ paddingBottom: 0 }}>
          <Link to={`/journal/${featured.id}`} className="featured-card reveal" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="featured-label">Latest</div>
            <div className="featured-visual">
              <div className="featured-badge">{featured.category}</div>
              <div style={{ alignSelf: 'flex-end' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div className="bc-dot" style={{ width: 44, height: 44, fontSize: 13 }}>{featured.initials}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--white)' }}>{featured.author}</div>
                    <div style={{ fontSize: 12, color: 'var(--muted)' }}>{featured.date} · {featured.read_time || featured.readTime}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="featured-content">
              <div className="feat-industry">{featured.category}</div>
              <h2>{featured.title}</h2>
              <p>{featured.blurb}</p>
              <span className="read-link">Read Article <Arrow /></span>
            </div>
          </Link>
        </section>
      )}

      <section>
        <div className="blog-grid">
          {filtered.map((p, i) => (
            <Link to={`/journal/${p.id}`} className={`blog-card reveal d${i % 3 || ''}`} key={p.id}>
              <div className="bc-line" />
              <div className="bc-header">
                <div className="bc-cat">{p.category}</div>
                <h3>{p.title}</h3>
                <p>{p.blurb}</p>
              </div>
              <div className="bc-footer">
                <div className="bc-author">
                  <div className="bc-dot">{p.initials}</div>
                  <div>
                    <div className="bc-name">{p.author}</div>
                    <div className="bc-date">{p.date}</div>
                  </div>
                </div>
                <span className="bc-readtime">{p.read_time || p.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
        {filtered.length === 0 && <p style={{ color: 'var(--muted)', textAlign: 'center', padding: 60 }}>No articles match.</p>}
      </section>

      <section className="newsletter">
        <div className="nl-inner">
          <div className="reveal">
            <span className="eyebrow">Stay Sharp</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>Get Insights Delivered<br />to Your Inbox</h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.75, marginTop: 14 }}>No fluff, no spam. Just practical thinking on enterprise technology — once or twice a month, when we have something worth saying.</p>
          </div>
          <div className="reveal d1">
            {subscribed ? (
              <div style={{ padding: 24, border: '1px solid rgba(0,200,212,0.3)', background: 'var(--card)' }}>
                <div className="eyebrow">Subscribed</div>
                <p style={{ color: 'var(--muted)', marginTop: 8 }}>Thanks — you'll hear from us when we have something worth your time.</p>
              </div>
            ) : (
              <form onSubmit={subscribe}>
                <div className="nl-row">
                  <input className="nl-input" placeholder="First name" value={first} onChange={(e) => setFirst(e.target.value)} style={{ maxWidth: 160 }} />
                  <input className="nl-input" placeholder="Work email address" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                  <button className="nl-btn" type="submit">Subscribe</button>
                </div>
                <p className="nl-disclaimer">By subscribing you agree to receive our newsletter. Unsubscribe anytime.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <CTASection eyebrow="Work With Us" title="Ready to Put These Ideas" accent="Into Practice?" body="Let's talk about your technology challenges and how Three Groups can help you move faster, smarter, and with less risk." />
    </>
  );
}

export function JournalDetail() {
  useReveal();
  const { id } = useParams();
  const [p, setP] = useState(null);
  const [err, setErr] = useState(false);
  useEffect(() => { api.getPost(id).then(setP).catch(() => setErr(true)); }, [id]);

  if (err) return (
    <section className="page-hero"><div className="page-hero-inner">
      <div className="eyebrow">Not Found</div>
      <h1>Article<br /><span>not available.</span></h1>
      <p><Link to="/journal" style={{ color: 'var(--teal)' }}>Back to the journal →</Link></p>
    </div></section>
  );
  if (!p) return <section className="page-hero"><div className="page-hero-inner"><p style={{ color: 'var(--muted)' }}>Loading…</p></div></section>;

  return (
    <>
      <section className="page-hero">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="page-hero-inner" style={{ maxWidth: 780 }}>
          <div className="eyebrow">{p.category}</div>
          <h1>{p.title}</h1>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginTop: 28 }}>
            <div className="bc-dot" style={{ width: 40, height: 40, fontSize: 12 }}>{p.initials}</div>
            <div>
              <div style={{ fontWeight: 700, color: 'var(--white)' }}>{p.author}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)' }}>{p.date} · {p.read_time || p.readTime}</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <article style={{ maxWidth: 720, margin: '0 auto', fontSize: 17, lineHeight: 1.85, color: 'var(--light)' }}>
          {(p.body || p.blurb || '').split(/\n+/).map((para, i) => (
            <p key={i} style={{ marginBottom: 22, color: 'var(--muted)' }}>{para}</p>
          ))}
        </article>
      </section>

      <CTASection eyebrow="More From Us" title="Read More" accent="from the Journal." body="Practical writing on enterprise technology, by the practitioners who do the work." primaryHref="/journal" primaryLabel="All Articles" />
    </>
  );
}
