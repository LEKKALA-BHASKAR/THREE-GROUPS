import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { CTASection, useReveal } from '../components/usePage.jsx';

const Arrow = () => <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>;

const services = {
  software: {
    eyebrow: 'Software Development',
    title: 'Software Built',
    accent: 'to Perform. Built to Last.',
    body: 'Custom applications engineered for performance, scale, and the long maintenance tail nobody talks about. We write code that the next engineer will thank us for — including when the next engineer is us.',
    capabilities: [
      { h: 'Custom Web & Mobile Applications', p: 'From greenfield products to internal tools — built with senior engineers, modern stacks, and a relentless focus on quality.', tags: ['React', 'Next.js', 'Native iOS/Android', 'PWAs'] },
      { h: 'API Design & Microservices', p: 'API-first architectures with explicit contracts, versioning policies, and integration tooling that survives year three.', tags: ['REST', 'GraphQL', 'gRPC', 'Event-Driven'] },
      { h: 'Cloud-Native Engineering', p: 'AWS, Azure, GCP — production-ready infrastructure with cost discipline, observability, and SRE foundations from day one.', tags: ['AWS', 'Azure', 'GCP', 'Kubernetes'] },
      { h: 'Legacy Modernisation', p: 'Strangler-pattern migrations that incrementally retire legacy without big-bang rewrites — preserving business continuity throughout.', tags: ['Migration', 'Refactoring', 'Replatform'] },
      { h: 'DevOps & CI/CD', p: 'Pipelines, IaC, observability, and release practices that turn shipping software into a routine event, not a quarterly ordeal.', tags: ['Terraform', 'GitHub Actions', 'Argo', 'Datadog'] },
      { h: 'Quality Engineering', p: 'Test pyramids, contract testing, performance baselines, and chaos drills — so the system is provably reliable, not just hopefully reliable.', tags: ['Playwright', 'k6', 'Pact'] },
    ],
    stack: {
      Frontend: ['React', 'Next.js', 'TypeScript', 'Vue', 'Svelte', 'Tailwind'],
      Backend: ['Node.js', 'Python', 'Go', 'Java', 'Rust', 'Kotlin'],
      Cloud: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform', 'Pulumi'],
      Mobile: ['Swift', 'Kotlin', 'React Native', 'Flutter'],
    },
    outcomes: [
      ['~40%', 'Faster shipping cadence'],
      ['Zero', 'Post-launch panics'],
      ['100%', 'Documented architecture'],
    ],
  },
  erp: {
    eyebrow: 'ERP Solutions',
    title: 'ERP That',
    accent: 'Actually Fits.',
    body: 'End-to-end ERP that unifies operations and gives leadership real-time visibility — without a year of pain. We have led successful S/4HANA, Oracle Fusion, and Dynamics 365 rollouts in regulated and non-regulated environments.',
    capabilities: [
      { h: 'Implementation & Cutover', p: 'Phased or big-bang implementations on SAP, Oracle, Dynamics, and NetSuite — with cutover plans that hold up under pressure.', tags: ['S/4HANA', 'Oracle Fusion', 'D365'] },
      { h: 'System Integration', p: 'Clean integrations between ERP and the rest of the business — CRMs, e-commerce, data platforms, custom apps.', tags: ['MuleSoft', 'Boomi', 'iPaaS'] },
      { h: 'Data Migration', p: 'Source-of-truth analysis, cleansing, mapping, validation, and conservative cutover — with the audit trail that auditors actually accept.', tags: ['Data Quality', 'ETL', 'Lineage'] },
      { h: 'Process Optimisation', p: 'Workflow redesign that respects how the business actually works — not the tidy diagram nobody follows in real life.', tags: ['BPMN', 'Workflow Design'] },
      { h: 'Managed Support', p: 'Ongoing managed support with named consultants — not a faceless ticketing system. Roll-forwards, audit prep, and quarterly health checks.', tags: ['L2/L3 Support', 'Roll-Forwards'] },
      { h: 'Change Management', p: 'Training, comms, and adoption work that means users actually use the new system — measured at 30, 60, and 90 days post go-live.', tags: ['Training', 'Adoption Tracking'] },
    ],
    stack: {
      Platforms: ['SAP S/4HANA', 'Oracle Fusion', 'Microsoft Dynamics 365', 'NetSuite', 'Workday', 'Infor'],
      Modules: ['FI/CO', 'MM/SD', 'PP', 'HCM', 'SCM', 'Procurement'],
      Integration: ['MuleSoft', 'Boomi', 'SAP CPI', 'Oracle Integration Cloud'],
      Data: ['BW/4HANA', 'Snowflake', 'Power BI', 'Tableau'],
    },
    outcomes: [
      ['<4%', 'Average cutover slip'],
      ['Zero', 'Cutover-weekend downtime'],
      ['90%+', 'User adoption at 30 days'],
    ],
  },
  data: {
    eyebrow: 'Data & AI',
    title: 'Turn Your Data Into',
    accent: 'Your Most Powerful Asset.',
    body: "Pragmatic ML, BI, and GenAI — built to actually run in production, not impress a steering committee. We start with the question that matters, not the model that's trending on Twitter.",
    capabilities: [
      { h: 'Data Strategy & Architecture', p: 'Modern data stacks designed for the way your business actually queries data — not the way a vendor diagram suggests.', tags: ['Lakehouse', 'Data Mesh', 'Governance'] },
      { h: 'Business Intelligence', p: 'Dashboards leadership trusts, with lineage and quality tests so nobody second-guesses the numbers in a board meeting.', tags: ['Power BI', 'Tableau', 'Looker'] },
      { h: 'Machine Learning', p: 'Forecasting, classification, anomaly detection — evaluated quarterly and tuned, not abandoned six months after launch.', tags: ['scikit-learn', 'PyTorch', 'XGBoost'] },
      { h: 'Generative AI & LLMs', p: 'RAG systems, agentic workflows, and fine-tuned models — with the evaluation harnesses that keep them honest in production.', tags: ['OpenAI', 'Claude', 'Llama', 'LangChain'] },
      { h: 'Data Engineering', p: 'Pipelines that arrive on time, with the data they promised — orchestrated, observable, and contract-tested end to end.', tags: ['dbt', 'Airflow', 'Dagster', 'Spark'] },
      { h: 'MLOps & Governance', p: 'Model registries, evaluation pipelines, drift monitoring, and approval workflows — so AI is auditable, not just deployable.', tags: ['MLflow', 'Vertex', 'Bedrock'] },
    ],
    stack: {
      Warehouse: ['Snowflake', 'Databricks', 'BigQuery', 'Redshift'],
      Pipeline: ['dbt', 'Airflow', 'Dagster', 'Fivetran'],
      ML: ['PyTorch', 'TensorFlow', 'scikit-learn', 'Hugging Face'],
      LLM: ['OpenAI', 'Anthropic Claude', 'LangChain', 'Pinecone', 'Weaviate'],
    },
    outcomes: [
      ['80%+', 'GenAI projects reach production'],
      ['100%', 'Lineage on dashboards'],
      ['Quarterly', 'Model performance review'],
    ],
  },
  managed: {
    eyebrow: 'Managed Services',
    title: 'Your Technology.',
    accent: 'Quietly Handled.',
    body: 'End-to-end MSP coverage — infrastructure, security, support, and monitoring under one SLA. Senior-led, financially accountable, no hand-offs. We treat your environment like our own.',
    capabilities: [
      { h: 'Infrastructure Management', p: 'On-prem, cloud, and hybrid — servers, storage, networking, virtualization, and DR under proactive management.', tags: ['AWS', 'Azure', 'GCP', 'Hybrid'] },
      { h: 'Cybersecurity & Compliance', p: '24/7 MDR, endpoint protection, vulnerability management, and compliance for SOC 2, HIPAA, PCI-DSS.', tags: ['MDR', 'SOC 2', 'HIPAA'] },
      { h: 'Help Desk & End-User Support', p: 'Tier 1–3 coverage with SLA-backed response, remote and on-site resolution, and full asset lifecycle.', tags: ['L1–L3', '24/7'] },
      { h: 'Application Management', p: 'ERP, custom app, and integration health monitoring with proactive performance tuning and release management.', tags: ['ERP Ops', 'APM'] },
      { h: 'Data & Analytics Operations', p: 'Pipeline monitoring, warehouse optimisation, BI administration, and AI/ML model performance management.', tags: ['DataOps', 'MLOps'] },
      { h: 'Governance, Risk & Compliance', p: 'Risk registers, policy enforcement, audit preparation, vendor risk, and regulatory change monitoring.', tags: ['GRC', 'Audit-Ready'] },
    ],
    stack: {
      Monitoring: ['Datadog', 'New Relic', 'Grafana', 'Prometheus'],
      Security: ['CrowdStrike', 'SentinelOne', 'Splunk', 'Sumo Logic'],
      ITSM: ['ServiceNow', 'Jira Service Management', 'Freshservice'],
      Cloud: ['AWS', 'Azure', 'GCP', 'Kubernetes'],
    },
    outcomes: [
      ['99.9%', 'Guaranteed uptime SLA'],
      ['<2hr', 'Average incident response'],
      ['24/7', 'Monitoring & support'],
    ],
  },
  talent: {
    eyebrow: 'Talent Services',
    title: 'The Right People.',
    accent: 'When You Need Them.',
    body: 'Whether you need to scale a team fast, fill a critical skills gap, or build a dedicated offshore capability — we connect you with pre-vetted technology professionals who are ready to contribute from day one.',
    capabilities: [
      { h: 'Staff Augmentation', p: 'Embed skilled professionals directly into your team — on short notice, for as long as you need them.', tags: ['Short Notice', 'Flexible Term'] },
      { h: 'Dedicated Team Build', p: 'We recruit, vet, onboard, and manage a fully dedicated team that operates as an extension of your organisation.', tags: ['Dedicated Pod', 'Managed'] },
      { h: 'Contract-to-Hire', p: 'Start with a contract engagement and convert to full-time when you find the right fit — reducing hiring risk without sacrificing speed.', tags: ['Try-Before-Hire'] },
      { h: 'Offshore & Nearshore', p: 'Cost-effective, high-quality talent from global delivery centers — with the management structure to make it actually work.', tags: ['LATAM', 'EMEA', 'APAC'] },
      { h: 'Engineering & Development', p: 'Full-stack, frontend, backend, mobile, DevOps, cloud architects, QA engineers, solution architects.', tags: ['Senior+'] },
      { h: 'ERP & Data Specialists', p: 'SAP, Oracle, Dynamics consultants, ERP project managers, data engineers, ML engineers, BI developers, AI/LLM engineers.', tags: ['Certified'] },
    ],
    stack: {
      Engineering: ['Full-Stack', 'Frontend', 'Backend', 'Mobile', 'DevOps', 'Cloud Architects'],
      ERP: ['SAP', 'Oracle', 'Dynamics 365', 'NetSuite', 'Workday'],
      Data: ['Data Engineers', 'Data Scientists', 'ML Engineers', 'BI Developers', 'LLM Engineers'],
      Leadership: ['Engagement Managers', 'CTO/CIO Advisory', 'Solution Architects'],
    },
    outcomes: [
      ['500+', 'Vetted professionals'],
      ['<5 days', 'Avg. shortlist turnaround'],
      ['100%', 'Senior-screened candidates'],
    ],
  },
  plans: {
    eyebrow: 'Engagement Plans',
    title: 'Flexible Structures.',
    accent: 'Built Around Your Needs.',
    body: 'Every organisation is different. We offer three engagement structures so you can choose the level of coverage, control, and commitment that fits your situation.',
    plans: [
      { h: 'Essential', sub: 'Core Managed Coverage', p: 'The right starting point for organisations that need reliable, professional IT support without full outsourcing.', items: ['Help desk support (business hours)', 'Infrastructure monitoring', 'Security patching and updates', 'Monthly reporting', 'Dedicated account manager'] },
      { h: 'Enterprise', sub: 'Full-Spectrum Managed Services', p: 'Complete IT management for organisations that need 24/7 coverage, security depth, and proactive partnership.', items: ['24/7 help desk and NOC support', 'Full infrastructure and application management', 'MDR — managed detection and response', 'Compliance management and audit support', 'Quarterly business reviews', 'Vendor management included'], featured: true },
      { h: 'Strategic', sub: 'MSP + Embedded Talent', p: 'The most integrated model — combining managed services with embedded talent to function as your full technology organisation.', items: ['Everything in Enterprise, plus', 'Dedicated embedded team members', 'CTO/CIO advisory services', 'Technology roadmap development', 'Custom SLAs and governance', 'Priority talent placement pipeline'] },
    ],
  },
};

export default function ServiceDetail() {
  useReveal();
  const { slug } = useParams();
  const s = services[slug];
  if (!s) return <Navigate to="/services" replace />;

  return (
    <>
      <section className="page-hero">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="page-hero-inner">
          <div className="eyebrow">{s.eyebrow}</div>
          <h1>{s.title}<br /><span>{s.accent}</span></h1>
          <p>{s.body}</p>
        </div>
      </section>

      {s.plans ? (
        <section>
          <div className="eng-grid" style={{ marginTop: 0 }}>
            {s.plans.map((p, i) => (
              <div className={`eng-card${p.featured ? ' featured-eng' : ''} reveal d${i || ''}`} key={p.h}>
                {p.featured && <div className="eng-badge">Most Popular</div>}
                <h3>{p.h}</h3>
                <div className="eng-sub">{p.sub}</div>
                <p>{p.p}</p>
                <ul className="eng-list">{p.items.map((it) => <li key={it}>{it}</li>)}</ul>
                <Link to="/contact" className="eng-cta">Get Started <Arrow /></Link>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <>
          <section>
            <div className="section-head reveal" style={{ textAlign: 'center', margin: '0 auto 40px', maxWidth: 620 }}>
              <div className="section-label">Capabilities</div>
              <h2 className="section-title">Full-Spectrum<br />{s.eyebrow} Capabilities</h2>
            </div>
            <div className="cap-grid">
              {s.capabilities.map((c, i) => (
                <div className={`cap-card reveal d${i % 4 || ''}`} key={c.h}>
                  <div className="cap-icon"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg></div>
                  <h3>{c.h}</h3>
                  <p>{c.p}</p>
                  <div className="cap-pills">{c.tags.map((t) => <span className="cap-pill" key={t}>{t}</span>)}</div>
                </div>
              ))}
            </div>
          </section>

          {s.stack && (
            <section style={{ background: 'var(--navy2)' }}>
              <div className="section-head reveal" style={{ textAlign: 'center', margin: '0 auto 40px', maxWidth: 620 }}>
                <div className="section-label">Tech Stack</div>
                <h2 className="section-title">The Right Tool<br />for Every Job</h2>
              </div>
              <div className="ts-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                {Object.entries(s.stack).map(([cat, items]) => (
                  <div className="ts-item reveal" key={cat} style={{ textAlign: 'left', padding: '24px 22px' }}>
                    <div className="eyebrow" style={{ marginBottom: 12, fontSize: 11 }}>{cat}</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {items.map((it) => <span className="cs-tag" key={it}>{it}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {s.outcomes && (
            <section>
              <div className="section-head reveal" style={{ textAlign: 'center', margin: '0 auto 40px', maxWidth: 620 }}>
                <div className="section-label">Outcomes</div>
                <h2 className="section-title">Numbers, Not Promises.</h2>
              </div>
              <div className="stats-grid" style={{ maxWidth: 900 }}>
                {s.outcomes.map(([n, l]) => (
                  <div className="reveal" key={l}>
                    <div className="stat-num">{n}</div>
                    <div className="stat-label">{l}</div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </>
      )}

      <CTASection eyebrow="Get Started" title="Have a Project" accent="in Mind?" body={`Tell us about the goal. We'll tell you, plainly, whether ${s.eyebrow} is the right starting point.`} />
    </>
  );
}
