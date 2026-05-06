import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero, CTASection, useReveal } from '../components/usePage.jsx';

const Arrow = () => <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>;

const services = [
  { slug: 'software', t: 'Software Development', d: 'Custom-built applications engineered for performance, scalability, and long-term maintainability.', icon: <svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg> },
  { slug: 'erp', t: 'ERP Solutions', d: 'End-to-end ERP implementation, integration, and optimization — unifying your operations.', icon: <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg> },
  { slug: 'data', t: 'Data & AI', d: 'Pragmatic ML, BI, and GenAI — built to actually run in production, not just impress a steering committee.', icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><line x1="12" y1="2" x2="12" y2="6" /><line x1="12" y1="18" x2="12" y2="22" /><line x1="2" y1="12" x2="6" y2="12" /><line x1="18" y1="12" x2="22" y2="12" /></svg> },
  { slug: 'managed', t: 'Managed Services', d: 'End-to-end MSP coverage — infrastructure, security, support, and monitoring under one SLA.', icon: <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> },
  { slug: 'talent', t: 'Talent Services', d: 'On-demand technology talent — staff augmentation, dedicated teams, and contract-to-hire placements.', icon: <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
  { slug: 'plans', t: 'Engagement Plans', d: 'Three flexible structures — Essential, Enterprise, and Strategic — built around what your organisation needs.', icon: <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg> },
];

export default function Services() {
  useReveal();
  return (
    <>
      <PageHero eyebrow="What We Do" title="Three Disciplines." accent="One Studio." body="Cross-trained teams with a single point of accountability. You meet the senior engineer in week one, and that's the same person you talk to in week fifty." />
      <section>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className={`svc-card reveal d${i % 4 || ''}`} key={s.slug}>
              <div className="svc-icon">{s.icon}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <Link to={`/services/${s.slug}`} className="svc-link">Learn More <Arrow /></Link>
            </div>
          ))}
        </div>
      </section>
      <CTASection eyebrow="Get Started" title="Not Sure Which" accent="Service Fits?" body="Tell us the goal — we'll tell you, plainly, which discipline you actually need." />
    </>
  );
}
