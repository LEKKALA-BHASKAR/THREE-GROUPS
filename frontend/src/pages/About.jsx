import React from 'react';
import { CTASection, useReveal } from '../components/usePage.jsx';

export default function About() {
  useReveal();
  return (
    <>
      <section className="page-hero">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-inner">
          <div>
            <div className="eyebrow">Who We Are</div>
            <h1>The Partner That<br />Sees the <span>Full Picture</span></h1>
            <p style={{ marginTop: 20 }}>
              Three Groups is a technology consulting firm built around a single, powerful idea: <strong>your software, your ERP, and your data should work as one.</strong>
            </p>
            <p style={{ marginTop: 16, color: 'var(--muted)', lineHeight: 1.75 }}>
              Most firms specialize in one discipline and hand you off when the scope shifts. We don't. We bring Software Development, ERP, and Data &amp; AI expertise together under one roof — so nothing falls through the cracks, and you never have to manage multiple vendors pointing fingers at each other.
            </p>
            <p style={{ marginTop: 16, color: 'var(--muted)', lineHeight: 1.75 }}>
              The result is faster delivery, tighter integration, and outcomes that actually move the needle for your business.
            </p>
          </div>
          <div>
            {[
              ['50+', 'Enterprise Projects Delivered'],
              ['30+', 'Clients Across 8 Industries'],
              ['3', 'Integrated Practice Areas'],
              ['100%', 'Senior-Led Engagements'],
            ].map(([n, l]) => (
              <div className="intro-stat" key={l}>
                <div className="intro-stat-num">{n}</div>
                <div className="intro-stat-label">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="vm-inner">
          <div className="vm-card reveal">
            <div className="vm-tag">Our Vision</div>
            <h2>To be the most trusted name in integrated technology transformation.</h2>
            <p>We're building a firm that enterprise and mid-market businesses turn to when the stakes are high and the complexity is real — <strong>known for depth, integrity, and results that last.</strong></p>
            <div className="vm-accent">V</div>
          </div>
          <div className="vm-card reveal d1">
            <div className="vm-tag">Our Mission</div>
            <h2>Deliver technology solutions that create real, measurable business value.</h2>
            <p>By unifying Software Development, ERP, and Data &amp; AI under one integrated model, we eliminate the silos, reduce the risk, and <strong>give clients the clarity and confidence to move forward.</strong></p>
            <div className="vm-accent">M</div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--navy2)' }}>
        <div className="section-head reveal" style={{ textAlign: 'center', margin: '0 auto 40px', maxWidth: 620 }}>
          <div className="section-label">Why Clients Choose Us</div>
          <h2 className="section-title">Stop Managing Vendors.<br /><span style={{ color: 'var(--teal)' }}>Start Getting Results.</span></h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>When your technology, ERP, and data teams don't speak the same language, the business pays the price. Three Groups changes that equation.</p>
        </div>
        <div className="pillars">
          {[
            { h: 'One Partner, Full Accountability', p: 'No hand-offs, no finger-pointing. We own the full scope — from strategy and architecture through delivery and support.', icon: <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> },
            { h: 'Senior Talent on Every Project', p: 'No bait and switch. The experts you meet during the sales process are the experts who show up to do the work.', icon: <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg> },
            { h: 'Outcomes, Not Just Deliverables', p: 'We measure success by the business impact we create — revenue gained, costs reduced, decisions made faster.', icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> },
          ].map((p, i) => (
            <div className={`pillar reveal d${i || ''}`} key={p.h}>
              <div className="pillar-line" />
              <div className="pillar-icon">{p.icon}</div>
              <h3>{p.h}</h3>
              <p>{p.p}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection eyebrow="Get In Touch" title="Ready to Work With" accent="A Real Partner?" body="Schedule a free consultation. We'll listen first, talk technology second." />
    </>
  );
}
