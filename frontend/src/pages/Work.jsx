import React, { useEffect, useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api } from '../api.js';
import { CTASection, useReveal } from '../components/usePage.jsx';

const Arrow = () => <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>;
const FILTERS = [
  ['all', 'All'],
  ['software', 'Software'],
  ['erp', 'ERP'],
  ['data', 'Data & AI'],
  ['msp', 'Managed Services'],
  ['finance', 'Financial Services'],
  ['healthcare', 'Healthcare'],
  ['manufacturing', 'Manufacturing'],
  ['retail', 'Retail'],
];

export function WorkIndex() {
  useReveal();
  const [cases, setCases] = useState([]);
  const [filter, setFilter] = useState('all');
  useEffect(() => { api.getCases().then(setCases).catch(() => {}); }, []);
  const featured = useMemo(() => cases.find((c) => c.featured), [cases]);
  const rest = useMemo(() => cases.filter((c) => !c.featured), [cases]);
  const filtered = filter === 'all' ? rest : rest.filter((c) => (c.tag || '').includes(filter));

  return (
    <>
      <section className="page-hero">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="page-hero-inner">
          <div className="eyebrow">Proven Results</div>
          <h1>Real Clients.<br /><span>Real Outcomes.</span></h1>
          <p>We let the results do the talking. Explore how Three Groups has helped organisations transform their technology, streamline operations, and unlock the power of their data.</p>
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
          <Link to={`/work/${featured.id}`} className="featured-card reveal" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="featured-label">Featured</div>
            <div className="featured-visual">
              <div className="featured-badge">{featured.industry}</div>
              <div className="featured-metric-grid">
                {(featured.metrics || []).slice(0, 4).map(([n, l]) => (
                  <div className="feat-metric" key={l}>
                    <div className="feat-metric-num">{n}</div>
                    <div className="feat-metric-label">{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="featured-content">
              <div className="feat-industry">{featured.industry}</div>
              <h2>{featured.title}</h2>
              <p>{featured.body}</p>
              <div className="service-tags">
                {(featured.chips || []).map((c) => <span className="stag" key={c}>{c}</span>)}
              </div>
              <span className="read-link">Read Full Case Study <Arrow /></span>
            </div>
          </Link>
        </section>
      )}

      <section>
        <div className="section-label reveal" style={{ display: 'block', marginBottom: 28 }}>More Case Studies</div>
        <div className="cs-grid">
          {filtered.map((c, i) => (
            <Link to={`/work/${c.id}`} className={`cs-card reveal d${i % 3 || ''}`} key={c.id}>
              <div className="cs-top-bar" />
              <div className="cs-card-body">
                <div className="cs-industry">{c.industry}</div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <div className="cs-metrics">
                  {(c.metrics || []).slice(0, 2).map(([n, l]) => (
                    <div className="cs-metric" key={l}>
                      <div className="cs-metric-num">{n}</div>
                      <div className="cs-metric-label">{l}</div>
                    </div>
                  ))}
                </div>
                <div className="cs-footer">
                  <div className="cs-tags">
                    {(c.chips || []).map((ch) => <span className="cs-tag" key={ch}>{ch}</span>)}
                  </div>
                  <div className="cs-arrow"><Arrow /></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {filtered.length === 0 && (
          <p style={{ color: 'var(--muted)', textAlign: 'center', padding: 60 }}>No case studies match this filter yet.</p>
        )}
      </section>

      <CTASection eyebrow="Start Your Story" title="Your Results Could Be" accent="Next on This Page." body="Every case study started with a conversation. Let's talk about what's possible for your organisation." />
    </>
  );
}

export function WorkDetail() {
  useReveal();
  const { id } = useParams();
  const [c, setC] = useState(null);
  const [err, setErr] = useState(false);
  useEffect(() => { api.getCase(id).then(setC).catch(() => setErr(true)); }, [id]);

  if (err) return (
    <section className="page-hero"><div className="page-hero-inner">
      <div className="eyebrow">Not Found</div>
      <h1>Case study<br /><span>not available.</span></h1>
      <p>This case study may have moved or been retired. <Link to="/work" style={{ color: 'var(--teal)' }}>Back to all work →</Link></p>
    </div></section>
  );
  if (!c) return <section className="page-hero"><div className="page-hero-inner"><p style={{ color: 'var(--muted)' }}>Loading…</p></div></section>;

  return (
    <>
      <section className="page-hero">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="page-hero-inner" style={{ maxWidth: 800 }}>
          <div className="eyebrow">{c.industry}</div>
          <h1>{c.title}</h1>
          <p style={{ marginTop: 24 }}>{c.body}</p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="stats-grid" style={{ maxWidth: 1100 }}>
          {(c.metrics || []).map(([n, l]) => (
            <div key={l}>
              <div className="stat-num">{n}</div>
              <div className="stat-label">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--navy2)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 48, maxWidth: 800, margin: '0 auto' }}>
          {[
            ['The Challenge', c.challenge],
            ['Our Solution', c.solution],
            ['The Outcome', c.outcome],
          ].filter(([, t]) => t).map(([h, t]) => (
            <div className="reveal" key={h}>
              <div className="section-label">{h}</div>
              <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.85, marginTop: 12 }}>{t}</p>
            </div>
          ))}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
            {(c.chips || []).map((chip) => <span className="stag" key={chip}>{chip}</span>)}
          </div>
        </div>
      </section>

      <CTASection eyebrow="Want Similar Results?" title="Tell Us About" accent="Your Project." body="Every engagement starts with a conversation. We'll listen first." />
    </>
  );
}
