import React from 'react';
import { Link } from 'react-router-dom';
import { CTASection, useReveal } from '../components/usePage.jsx';
import { Testimonials, Partners, FAQ, Compare } from '../components/Sections.jsx';

const Arrow = () => (
  <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
);

export default function Home() {
  useReveal();
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-glow2" />
        <div className="hero-content">
          <div className="hero-badge">Three Disciplines · One Trusted Partner</div>
          <h1>Transforming Business<br />Through <span>Technology</span></h1>
          <p className="hero-sub">We combine deep expertise in Software Development, ERP systems, and Data &amp; AI to deliver integrated solutions that drive measurable outcomes for your business.</p>
          <div className="hero-btns">
            <Link to="/services" className="btn-primary">Explore Our Services</Link>
            <Link to="/contact" className="btn-outline">Schedule a Consultation</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats">
        <div className="stats-grid">
          {[['50+', 'Projects Delivered'], ['30+', 'Enterprise Clients'], ['3', 'Core Disciplines'], ['98%', 'Client Satisfaction']].map(([n, l]) => (
            <div className="reveal" key={l}>
              <div className="stat-num">{n}</div>
              <div className="stat-label">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section>
        <div className="section-head reveal">
          <div className="section-label">What We Do</div>
          <h2 className="section-title">Three Disciplines.<br />End-to-End Solutions.</h2>
          <p className="section-sub">We bring together three powerful practice areas under one roof — ensuring seamless integration, consistent delivery, and a single point of accountability.</p>
        </div>
        <div className="services-grid">
          {[
            { slug: 'software', t: 'Software Development', d: 'Custom-built applications engineered for performance, scalability, and long-term maintainability — tailored to your exact business requirements.', l: ['Custom Web & Mobile Applications', 'API Design & Microservices Architecture', 'Cloud-Native Development (AWS, Azure, GCP)', 'Legacy System Modernization', 'DevOps & Continuous Delivery'], icon: <svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg> },
            { slug: 'erp', t: 'ERP Solutions', d: 'End-to-end ERP implementation, integration, and optimization — unifying your operations and giving leadership real-time visibility across the enterprise.', l: ['ERP Implementation & Configuration', 'SAP, Oracle & Microsoft Dynamics', 'System Integration & Data Migration', 'Process Optimization & Workflow Design', 'Ongoing Support & Managed Services'], icon: <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg> },
            { slug: 'data', t: 'Data & AI', d: 'Transform raw data into strategic intelligence. We design, build, and deploy AI-powered analytics and machine learning solutions that give your business a competitive edge.', l: ['Data Strategy & Architecture', 'Business Intelligence & Dashboards', 'Machine Learning & Predictive Analytics', 'Generative AI & LLM Integration', 'Data Engineering & Pipeline Automation'], icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><line x1="12" y1="2" x2="12" y2="6" /><line x1="12" y1="18" x2="12" y2="22" /><line x1="4.22" y1="4.22" x2="7.05" y2="7.05" /><line x1="16.95" y1="16.95" x2="19.78" y2="19.78" /><line x1="2" y1="12" x2="6" y2="12" /><line x1="18" y1="12" x2="22" y2="12" /></svg> },
          ].map((s, i) => (
            <div key={s.slug} className={`svc-card reveal d${i || ''}`}>
              <div className="svc-icon">{s.icon}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <ul className="svc-list">
                {s.l.map((it) => <li key={it}>{it}</li>)}
              </ul>
              <Link to={`/services/${s.slug}`} className="svc-link">Learn More <Arrow /></Link>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section style={{ background: 'var(--navy2)' }}>
        <div className="why-wrap">
          <div className="reveal">
            <div className="section-label">Why Three Groups</div>
            <h2 className="section-title">The Integrated<br />Advantage</h2>
            <p className="section-sub" style={{ marginBottom: 32 }}>Most firms specialize in one area. We deliberately operate across three — so your technology, ERP, and data ecosystems speak the same language and work as one.</p>
            <Link to="/contact" className="btn-primary">Talk to Our Team</Link>
          </div>
          <div className="why-right">
            {[
              ['01', 'One Partner, Full Stack', 'No vendor hand-offs. We own the full delivery from architecture to deployment.'],
              ['02', 'Cross-Discipline Expertise', 'Our teams are trained across disciplines, enabling holistic problem-solving.'],
              ['03', 'Outcome Focused', 'We measure success by your business results, not just project milestones.'],
              ['04', 'Enterprise-Grade Quality', 'Rigorous standards, proven methodologies, and senior-level engagement on every project.'],
            ].map(([n, h, p], i) => (
              <div className={`why-card reveal d${i || ''}`} key={n}>
                <div className="why-num">{n}</div>
                <h4>{h}</h4>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section>
        <div className="section-head reveal" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', maxWidth: 600 }}>
          <div className="section-label">Industries We Serve</div>
          <h2 className="section-title">Built for Complex,<br />Regulated Environments</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>Deep domain knowledge across industries where technology decisions carry serious consequences.</p>
        </div>
        <div className="ind-grid" style={{ marginTop: 60 }}>
          {[
            ['🏦', 'Financial Services', 'financial-services'],
            ['🏥', 'Healthcare', 'healthcare'],
            ['🏭', 'Manufacturing', 'manufacturing'],
            ['🛒', 'Retail & eCommerce', 'retail'],
            ['🚚', 'Supply Chain & Logistics', 'supply-chain'],
            ['⚡', 'Energy & Utilities', 'energy'],
            ['🏛️', 'Public Sector', 'public-sector'],
            ['🎓', 'Education', 'education'],
          ].map(([icon, name, slug], i) => (
            <Link to={`/industries/${slug}`} key={slug} className={`ind-card reveal d${i % 4 || ''}`}>
              <span className="ind-icon">{icon}</span>
              <span>{name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: 'var(--navy2)' }}>
        <div className="section-head reveal" style={{ textAlign: 'center', margin: '0 auto', maxWidth: 600 }}>
          <div className="section-label">Our Approach</div>
          <h2 className="section-title">How We Work</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>A structured, collaborative process designed to minimize risk and maximize value at every stage.</p>
        </div>
        <div className="process-steps" style={{ marginTop: 64 }}>
          {[
            ['01', 'Discovery', 'We invest time upfront to deeply understand your business, systems, pain points, and goals.'],
            ['02', 'Strategy', 'A clear, documented roadmap — technology choices, timelines, resource plans, and risk mitigation.'],
            ['03', 'Build & Integrate', 'Agile delivery with regular checkpoints, demos, and transparent communication throughout.'],
            ['04', 'Launch & Evolve', 'Go-live support, user training, and ongoing optimization as your business grows.'],
          ].map(([n, h, p], i) => (
            <div className={`step reveal d${i || ''}`} key={n}>
              <div className="step-num">{n}</div>
              <h4>{h}</h4>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />

      <Compare
        left={{ h: 'Most Firms', items: ['Generalists pretending to specialise in everything', 'Junior consultants doing the work after senior partners win the deal', '60-page slide decks that nobody reads, billed at ridiculous rates', 'Vendor finger-pointing when something breaks across systems', 'Surprise change orders, scope creep, and quiet timeline slips', 'Documentation that fails an audit if anyone bothers to look'] }}
        right={{ h: 'Three Groups', items: ['Specialists in three integrated disciplines — software, ERP, data', 'Senior practitioners on every engagement, every day, no exceptions', 'Working code, configurations, and runbooks — not deliverable theatre', 'One accountable partner; finger-pointing isn\'t available as a service', 'Documented change-control with financial accountability behind SLAs', 'Audit-ready documentation an internal audit team will actually accept'] }}
      />

      <Partners />

      <FAQ />

      <CTASection
        title="Ready to Build Something"
        accent="That Actually Works?"
        body="Let's talk about your goals. Our team is ready to help you find the right solution across software, ERP, and data."
      />
    </>
  );
}
