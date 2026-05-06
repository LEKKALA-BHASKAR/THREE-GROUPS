import React from 'react';
import { PageHero, CTASection, useReveal } from '../components/usePage.jsx';

export default function Process() {
  useReveal();
  return (
    <>
      <PageHero eyebrow="Our Approach" title="How We Work." accent="Plainly." body="A structured, collaborative process designed to minimise risk and maximise value at every stage. No theatrics. No deck-ware. Just careful work." />

      <section>
        <div className="process-steps">
          {[
            ['01', 'Discover', 'We invest 1–4 weeks upfront to understand the business, the systems, and the friction. Output: a written assessment with prioritised opportunities.'],
            ['02', 'Strategise', 'A documented roadmap — choices, timelines, resourcing, risk mitigation, and a defensible business case for the steering committee.'],
            ['03', 'Build', 'Agile delivery in 2-week sprints with regular demos, transparent reporting, and a single point of accountability. No black-box weeks.'],
            ['04', 'Evolve', 'Go-live support, training, and iteration as the business grows around it. Optional managed support contracts post-launch.'],
          ].map(([n, h, p], i) => (
            <div className={`step reveal d${i || ''}`} key={n}>
              <div className="step-num">{n}</div>
              <h4>{h}</h4>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--navy2)' }}>
        <div className="section-head reveal" style={{ textAlign: 'center', margin: '0 auto 40px', maxWidth: 620 }}>
          <div className="section-label">Operating Principles</div>
          <h2 className="section-title">How We Show Up.</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>Four commitments that hold across every engagement, regardless of size, sector, or scope.</p>
        </div>
        <div className="pillars" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {[
            ['No bait-and-switch', 'The senior practitioners you meet in the pitch are the practitioners who do the work.'],
            ['Working artefacts only', 'We deliver code, configurations, and runbooks — not 60-page slide decks.'],
            ['Plain-language reporting', 'Weekly status in language a CFO and a CTO can both read in under 90 seconds.'],
            ['Audit-ready documentation', 'Every deliverable comes with the documentation an internal audit team would actually accept.'],
          ].map(([h, p], i) => (
            <div className={`pillar reveal d${i || ''}`} key={h}>
              <div className="pillar-line" />
              <div className="pillar-icon"><svg viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg></div>
              <h3>{h}</h3>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection eyebrow="Get Started" title="Ready to See It" accent="In Action?" body="Schedule a discovery call. We'll listen first, talk technology second." />
    </>
  );
}
