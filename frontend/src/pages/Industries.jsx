import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { PageHero, CTASection, useReveal } from '../components/usePage.jsx';

const industries = [
  { slug: 'financial-services', icon: '🏦', name: 'Financial Services', body: 'Core banking, risk, regulatory reporting, automated compliance. Experience across regional banks, credit unions, asset managers, and PE.', tags: ['SOC 2', 'PCI-DSS', 'SOX'] },
  { slug: 'healthcare', icon: '🏥', name: 'Healthcare', body: 'EHR integration, HIPAA-compliant analytics, patient triage AI, revenue cycle modernisation.', tags: ['HIPAA', 'HITRUST', 'HL7/FHIR'] },
  { slug: 'manufacturing', icon: '🏭', name: 'Manufacturing', body: 'ERP modernisation, predictive maintenance, IoT integration, MES & supply chain visibility.', tags: ['ISO 27001', 'SAP', 'MES'] },
  { slug: 'retail', icon: '🛒', name: 'Retail & eCommerce', body: 'Demand forecasting, omnichannel commerce platforms, POS integration, customer 360.', tags: ['PCI-DSS', 'POS', 'CDP'] },
  { slug: 'supply-chain', icon: '🚚', name: 'Supply Chain & Logistics', body: 'Route optimisation, IoT tracking, warehouse automation, real-time visibility platforms.', tags: ['EDI', 'GS1', 'TMS'] },
  { slug: 'energy', icon: '⚡', name: 'Energy & Utilities', body: 'Field operations, asset management, regulatory reporting, grid analytics.', tags: ['NERC-CIP', 'GIS', 'SCADA'] },
  { slug: 'public-sector', icon: '🏛️', name: 'Public Sector', body: 'Citizen services, secure cloud, accessibility-first delivery, audit-ready reporting.', tags: ['FedRAMP', 'WCAG', 'StateRAMP'] },
  { slug: 'education', icon: '🎓', name: 'Education', body: 'Student information systems, learning analytics, modern LMS integrations.', tags: ['FERPA', 'LTI', 'SIS'] },
];

export function IndustriesIndex() {
  useReveal();
  return (
    <>
      <PageHero eyebrow="Industries" title="Built for Complex," accent="Regulated Environments" body="Domain knowledge in places where technology decisions carry serious consequences — audits, downtime, lives, livelihoods." />
      <section>
        <div className="ind-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {industries.map((ind, i) => (
            <Link to={`/industries/${ind.slug}`} key={ind.slug} className={`ind-card reveal d${i % 4 || ''}`} style={{ padding: '36px 28px', textAlign: 'left' }}>
              <span className="ind-icon" style={{ display: 'block', marginBottom: 18 }}>{ind.icon}</span>
              <span style={{ fontSize: 17, color: 'var(--white)', fontWeight: 700, display: 'block', marginBottom: 10 }}>{ind.name}</span>
              <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16 }}>{ind.body}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {ind.tags.map((t) => <span className="cs-tag" key={t}>{t}</span>)}
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CTASection eyebrow="Industry Fit?" title="Don't See Your" accent="Sector Listed?" body="If your industry isn't on this list, it doesn't mean we can't help. Tell us about the problem — we'll tell you if we're the right team." />
    </>
  );
}

export function IndustryDetail() {
  useReveal();
  const { slug } = useParams();
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) return <Navigate to="/industries" replace />;

  return (
    <>
      <section className="page-hero">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="page-hero-inner">
          <div className="eyebrow">Industry · {ind.name}</div>
          <h1><span style={{ fontSize: '0.9em' }}>{ind.icon}</span> {ind.name.split(' ')[0]}<br /><span>{ind.name.split(' ').slice(1).join(' ') || 'Solutions'}</span></h1>
          <p>{ind.body}</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 24 }}>
            {ind.tags.map((t) => <span className="stag" key={t}>{t}</span>)}
          </div>
        </div>
      </section>

      <section>
        <div className="why-wrap">
          <div className="reveal">
            <div className="section-label">How We Help</div>
            <h2 className="section-title">Senior Practitioners.<br />Real Domain Depth.</h2>
            <p className="section-sub" style={{ marginBottom: 32 }}>Every {ind.name.toLowerCase()} engagement is led by a partner who's spent at least a decade in this sector. We don't generalise across industries — we specialise within them.</p>
            <Link to="/contact" className="btn-primary">Talk to Our Team</Link>
          </div>
          <div className="why-right">
            {[
              ['Software Development', 'Domain-specific builds with regulatory awareness baked in.', '/services/software'],
              ['ERP Solutions', 'Implementations tuned to the operational reality of your sector.', '/services/erp'],
              ['Data & AI', 'Analytics and AI that respect data residency and compliance constraints.', '/services/data'],
              ['Managed Services', 'Audit-ready managed coverage for regulated environments.', '/services/managed'],
            ].map(([h, p, href], i) => (
              <Link to={href} key={h} className={`why-card reveal d${i || ''}`} style={{ display: 'block', cursor: 'pointer' }}>
                <div className="why-num">0{i + 1}</div>
                <h4>{h}</h4>
                <p>{p}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection eyebrow="Get Started" title={`Working in ${ind.name}?`} accent="Let's Talk." body="Tell us about your environment, your constraints, and your goals — and we'll tell you plainly whether we're the right team." />
    </>
  );
}
