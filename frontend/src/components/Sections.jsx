import React, { useState } from 'react';

/* ---------- TESTIMONIALS ---------- */
const TESTIMONIALS = [
  { i: 'CB', q: "The most useful firm we've worked with in a decade. They actually answered the phone at 2 a.m. during cutover weekend.", a: 'Chief Financial Officer', org: 'Regional bank · Texas' },
  { i: 'TM', q: "We've been through three SAP implementations. This is the only one that finished on time and didn't require a re-implementation eighteen months later.", a: 'Chief Technology Officer', org: 'Mid-market manufacturer · Ohio' },
  { i: 'CD', q: 'They told us in week two that the timeline we wanted was unrealistic. They were right. We adjusted, and the engagement was the smoothest one we\'ve ever run.', a: 'Chief Data Officer', org: 'Private equity firm' },
  { i: 'CI', q: 'Senior practitioners from day one. No bait-and-switch. Our internal team learned more in nine months than they had in the prior three years.', a: 'Chief Information Officer', org: 'Multi-site health network' },
  { i: 'VP', q: 'Three Groups feels less like a vendor and more like a wing of our own engineering organisation — only with deeper benches and better documentation.', a: 'VP of Operations', org: 'National retail chain' },
  { i: 'CO', q: 'The phrase "audit-ready documentation" was thrown around a lot in the pitch. They actually delivered it.', a: 'Chief Operating Officer', org: 'Energy services firm' },
];

export function Testimonials({ limit = 6, eyebrow = 'In Their Words', title = 'Clients,', accent = 'Plainly Speaking.' }) {
  return (
    <section style={{ background: 'var(--navy2)' }}>
      <div className="section-head reveal" style={{ textAlign: 'center', margin: '0 auto 50px', maxWidth: 620 }}>
        <div className="section-label">{eyebrow}</div>
        <h2 className="section-title">{title}<br /><span style={{ color: 'var(--teal)' }}>{accent}</span></h2>
      </div>
      <div className="testi-grid">
        {TESTIMONIALS.slice(0, limit).map((t, i) => (
          <div className={`testi reveal d${i % 4 || ''}`} key={t.q}>
            <blockquote>{t.q}</blockquote>
            <div className="testi-author">
              <div className="testi-avatar">{t.i}</div>
              <div className="testi-meta">
                <strong>{t.a}</strong>
                <span>{t.org}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- PARTNERS ---------- */
const PARTNERS = [
  { n: 'AWS', t: 'Advanced Consulting Partner', k: 'Cloud' },
  { n: 'Microsoft Azure', t: 'Solutions Partner — Digital & App Innovation', k: 'Cloud' },
  { n: 'Google Cloud', t: 'Premier Partner', k: 'Cloud' },
  { n: 'SAP', t: 'Silver Partner — S/4HANA Cloud', k: 'ERP' },
  { n: 'Oracle', t: 'Cloud Excellence Partner', k: 'ERP' },
  { n: 'Microsoft Dynamics 365', t: 'Solutions Partner', k: 'ERP' },
  { n: 'Snowflake', t: 'Premier Services Partner', k: 'Data' },
  { n: 'Databricks', t: 'Select Consulting Partner', k: 'Data' },
  { n: 'dbt Labs', t: 'Preferred Services Partner', k: 'Data' },
  { n: 'Tableau', t: 'Gold Partner', k: 'BI' },
  { n: 'Power BI', t: 'Solutions Partner — Data & AI', k: 'BI' },
  { n: 'SOC 2 Type II', t: 'Audited annually since 2021', k: 'Compliance' },
  { n: 'ISO 27001', t: 'Certified', k: 'Compliance' },
  { n: 'HIPAA', t: 'Compliance program', k: 'Compliance' },
];

export function Partners({ eyebrow = 'Alliances & Certifications', title = 'Verified Across the Platforms', accent = 'We Deliver.' }) {
  return (
    <section>
      <div className="section-head reveal" style={{ textAlign: 'center', margin: '0 auto 50px', maxWidth: 660 }}>
        <div className="section-label">{eyebrow}</div>
        <h2 className="section-title">{title}<br /><span style={{ color: 'var(--teal)' }}>{accent}</span></h2>
        <p className="section-sub" style={{ margin: '0 auto' }}>Active partner status with the platform vendors we implement, with current certifications across cloud, ERP, and data ecosystems.</p>
      </div>
      <div className="partners-grid">
        {PARTNERS.map((p) => (
          <div key={p.n} className="partner-cell">
            <div className="partner-kind">{p.k}</div>
            <div className="partner-name">{p.n}</div>
            <div className="partner-tier">{p.t}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const FAQS_DEFAULT = [
  ['What size engagements do you typically take on?', 'Most of our engagements range from $250k to $5M. We are happy to take on smaller scopes if the work is interesting and the team is the right fit. We do not have a published minimum.'],
  ['Do you work fixed-fee or time and materials?', 'Both. For well-defined scopes — most ERP and software builds — we prefer fixed-fee with documented change-control. For exploratory work, T&M with monthly caps is more honest.'],
  ['Do you offshore work?', 'Senior leadership on every engagement is North America-based. We have a nearshore delivery centre for select engineering work, always under a senior US-based tech lead. We do not offshore-only.'],
  ['Are you SOC 2 audited?', 'Yes — Type II, audited annually since 2021. We will share the most recent report under NDA.'],
  ['Are you tied to specific platforms?', 'No. We hold partner status with the major vendors but are not exclusive to any. Our recommendations are driven by your context, not our incentives.'],
  ['Will you provide references?', 'Yes — typically three relevant references at the proposal stage. We ask references for permission per inquiry.'],
  ['How do your talent placement fees work?', 'Staff augmentation is a transparent hourly rate. Permanent placement is a flat percentage of first-year base. No surprise mark-ups, ever.'],
  ['Do you run paid pilots?', 'Yes. For most data, AI, and ERP engagements, we offer a 4-week paid discovery sprint with a written assessment as the deliverable. The discovery fee is creditable against the larger engagement.'],
];

export function FAQ({ items = FAQS_DEFAULT, eyebrow = 'FAQ', title = 'Common Questions,', accent = 'Plainly Answered.' }) {
  const [open, setOpen] = useState(0);
  return (
    <section style={{ background: 'var(--navy2)' }}>
      <div className="section-head reveal" style={{ textAlign: 'center', margin: '0 auto 50px', maxWidth: 660 }}>
        <div className="section-label">{eyebrow}</div>
        <h2 className="section-title">{title}<br /><span style={{ color: 'var(--teal)' }}>{accent}</span></h2>
        <p className="section-sub" style={{ margin: '0 auto' }}>If your question isn't here, ask us directly at <a href="mailto:hello@threegroups.com" style={{ color: 'var(--teal)' }}>hello@threegroups.com</a> — we reply personally.</p>
      </div>
      <div className="faq-list" style={{ maxWidth: 880, margin: '0 auto' }}>
        {items.map(([q, a], i) => (
          <div key={q} className={`faq-item ${open === i ? 'open' : ''}`}>
            <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
              <span>{q}</span>
              <span className="faq-toggle">+</span>
            </button>
            <div className="faq-a">{a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- TEAM ---------- */
const TEAM = [
  { i: 'AL', n: 'Aisha Longford', r: 'Managing Partner', b: 'Twenty years across software engineering and consulting. Previously led modernisation programmes at two Fortune 500s before founding the firm.' },
  { i: 'MK', n: 'Marcus Kim', r: 'Head of ERP', b: 'Sixteen ERP implementations under his belt across SAP, Oracle, and Dynamics. Holds active S/4HANA and Oracle Fusion certifications.' },
  { i: 'JR', n: 'Jordan Rivera', r: 'Head of Data & AI', b: 'Built data platforms at scale for healthcare and finance clients. Speaks regularly on enterprise AI governance.' },
  { i: 'SR', n: 'Sofia Reyes', r: 'Head of Software', b: 'Distributed systems engineer turned practice lead. Deep experience in regulated environments and high-stakes cutovers.' },
  { i: 'DT', n: 'Dani Trent', r: 'Head of Managed Services', b: 'Ran 24/7 NOC operations for a global SaaS provider before joining. Calm under fire is the job description.' },
  { i: 'EK', n: 'Elena Kovacs', r: 'Head of Talent', b: 'Two decades of technical recruiting and team-build experience. Personally interviews every senior placement.' },
];

export function Team({ eyebrow = 'Leadership', title = 'Senior People.', accent = 'Senior Decisions.' }) {
  return (
    <section>
      <div className="section-head reveal" style={{ textAlign: 'center', margin: '0 auto 50px', maxWidth: 620 }}>
        <div className="section-label">{eyebrow}</div>
        <h2 className="section-title">{title}<br /><span style={{ color: 'var(--teal)' }}>{accent}</span></h2>
        <p className="section-sub" style={{ margin: '0 auto' }}>The partners you'll work with — every one of them in the room from day one.</p>
      </div>
      <div className="team-grid">
        {TEAM.map((t, i) => (
          <div key={t.n} className={`team-card reveal d${i % 4 || ''}`}>
            <div className="team-avatar">{t.i}</div>
            <h4>{t.n}</h4>
            <div className="team-role">{t.r}</div>
            <p className="team-bio">{t.b}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- TIMELINE ---------- */
export function Timeline({ items, eyebrow = 'Our Journey', title = 'Built One', accent = 'Engagement at a Time.' }) {
  return (
    <section style={{ background: 'var(--navy2)' }}>
      <div className="section-head reveal" style={{ textAlign: 'center', margin: '0 auto 30px', maxWidth: 620 }}>
        <div className="section-label">{eyebrow}</div>
        <h2 className="section-title">{title}<br /><span style={{ color: 'var(--teal)' }}>{accent}</span></h2>
      </div>
      <div className="timeline">
        {items.map((it, i) => (
          <div key={it[0]} className={`tl-row reveal d${i % 4 || ''}`}>
            <div className="tl-year">{it[0]}</div>
            <div className="tl-body">{it[1]}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- COMPARE ---------- */
export function Compare({ left, right, eyebrow = 'The Difference', title = 'Most Firms.', accent = 'Then There\'s Us.' }) {
  return (
    <section>
      <div className="section-head reveal" style={{ textAlign: 'center', margin: '0 auto 50px', maxWidth: 620 }}>
        <div className="section-label">{eyebrow}</div>
        <h2 className="section-title">{title}<br /><span style={{ color: 'var(--teal)' }}>{accent}</span></h2>
      </div>
      <div className="compare-grid">
        <div className="compare-cell bad reveal">
          <h4>{left.h}</h4>
          <ul>{left.items.map((i) => <li key={i}>{i}</li>)}</ul>
        </div>
        <div className="compare-cell good reveal d1">
          <h4>{right.h}</h4>
          <ul>{right.items.map((i) => <li key={i}>{i}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- BENEFITS ---------- */
export function Benefits({ items, eyebrow = 'What You Get', title = 'Real Benefits.', accent = 'No Theatre.' }) {
  return (
    <section style={{ background: 'var(--navy2)' }}>
      <div className="section-head reveal" style={{ textAlign: 'center', margin: '0 auto 50px', maxWidth: 620 }}>
        <div className="section-label">{eyebrow}</div>
        <h2 className="section-title">{title}<br /><span style={{ color: 'var(--teal)' }}>{accent}</span></h2>
      </div>
      <div className="benefits-grid">
        {items.map((b, i) => (
          <div key={b[1]} className={`benefit reveal d${i % 4 || ''}`}>
            <div className="benefit-glyph">{b[0]}</div>
            <h4>{b[1]}</h4>
            <p>{b[2]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
