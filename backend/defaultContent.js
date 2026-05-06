/* Initial content seeded into MongoDB on first run.
   Edit via /admin once running. */

export const defaultContent = {
  pages: {
    home: {
      title: 'Home',
      content: {
        eyebrow: 'Three disciplines · One trusted partner',
        heroLine1: 'We build the',
        heroEm: 'quiet',
        heroLine2: 'engine behind serious businesses.',
        heroBody: "Custom software, ERP that actually fits, and data systems that earn their keep. We're a small team of senior practitioners who would rather ship one thing right than three things loud.",
        ctaPrimary: 'Explore the studio',
        ctaSecondary: 'Book a 30-min call',
        stats: [
          { num: '50+', label: 'Projects shipped' },
          { num: '30+', label: 'Enterprise clients' },
          { num: '98%', label: 'Would hire us again' },
          { num: '100%', label: 'Senior-led delivery' }
        ],
        quote: '"The most useful firm we\'ve worked with in a decade." — CFO, regional bank',
        bannerLine: 'Trusted by teams at regulated banks, hospital networks, manufacturers, and PE-backed growth companies across North America.',
        valueProps: [
          { h: 'One partner, full accountability', b: 'No hand-offs, no finger-pointing. We own the full scope from architecture through go-live and managed support.' },
          { h: 'Senior talent on every project', b: 'No bait-and-switch. The expert you meet in the pitch is the same expert who shows up to do the work.' },
          { h: 'Outcomes, not deliverables', b: 'We measure success by business impact: revenue gained, costs reduced, decisions made faster.' },
          { h: 'Cross-discipline depth', b: 'We understand software, ERP, and data — and the awkward seams between them that always get under-scoped.' }
        ]
      }
    },
    about: {
      title: 'About',
      content: {
        eyebrow: 'Who we are',
        title: 'The partner who sees the full picture.',
        body: [
          "Three Groups is a consultancy built around one stubborn idea: your software, your ERP, and your data should work as one.",
          "Most firms specialise in a single discipline and hand you off the moment scope shifts. We don't. We sit Software, ERP, and Data & AI engineers at the same table — so nothing falls between the cracks, and you're never refereeing finger-pointing between three vendors.",
          "The result is faster delivery, tighter integration, and outcomes that actually move the needle. No theatrics. No deck-ware. Just careful work.",
          "Our team has shipped systems for regulated banks, multi-site hospital networks, mid-market manufacturers, and PE-backed growth companies. Every senior practitioner has at least a decade in the trade. We don't outsource. We don't hire interns to write production code. We don't surprise you with bills."
        ],
        vision: 'To be the most trusted name in integrated technology transformation — known for depth, integrity, and results that last.',
        mission: 'Eliminate the silos between software, ERP, and data so clients have the clarity and confidence to move forward.',
        timeline: [
          { year: '2018', label: 'Founded in Dallas, TX with a four-person team and a single principle: senior-led delivery.' },
          { year: '2019', label: 'Shipped first integrated ERP + data engagement for a regional manufacturer.' },
          { year: '2021', label: 'Opened nearshore delivery centre. Crossed 20 enterprise clients.' },
          { year: '2023', label: 'Launched Managed Services and Talent practices. Crossed 30 active clients.' },
          { year: '2025', label: 'Crossed 50 shipped engagements. 100% senior-led, 0% offshore-only.' }
        ]
      }
    },
    services: {
      title: 'Services',
      content: {
        eyebrow: 'What we do',
        title: 'Three disciplines. One studio under one roof.',
        body: 'Cross-trained teams with a single point of accountability. You meet the senior engineer in week one, and that\'s the same person you talk to in week fifty.'
      }
    },
    'services/software': {
      title: 'Software Development',
      content: {
        hero: 'Software, engineered to last.',
        body: 'Custom applications built for performance, scalability, and the long maintenance tail nobody talks about. We write code that the next engineer will thank us for — including when the next engineer is us.',
        offerings: [
          'Custom Web & Mobile Applications',
          'API Design & Microservices Architecture',
          'Cloud-Native Development (AWS, Azure, GCP)',
          'Legacy System Modernisation & Strangler Migrations',
          'DevOps, CI/CD & Continuous Delivery',
          'Quality Engineering & Test Automation',
          'Performance Engineering & SRE Foundations',
          'Architecture Review & Technical Due Diligence'
        ],
        stack: ['React', 'Next.js', 'Node.js', 'Python', 'Go', 'Java', 'Kotlin', 'Swift', 'TypeScript', 'PostgreSQL', 'Redis', 'Kubernetes', 'Terraform'],
        outcomes: [
          { h: '~40% faster shipping', b: 'After landing engagements, client teams typically double their delivery cadence within two quarters.' },
          { h: 'Zero post-launch panics', b: 'We do not launch and disappear. Every system ships with the runbooks, dashboards, and tests it deserves.' },
          { h: 'Documented architecture', b: 'Every engagement closes with an architecture decision record set the next team can actually use.' }
        ],
        engagement: ['8–24 week build cycles', 'Senior tech lead embedded throughout', 'Fixed-fee or T&M models', 'Optional 12-month managed support']
      }
    },
    'services/erp': {
      title: 'ERP Solutions',
      content: {
        hero: 'ERP that actually fits.',
        body: 'End-to-end ERP that unifies operations and gives leadership real-time visibility — without a year of pain. We have led successful S/4HANA, Oracle Fusion, and Dynamics 365 rollouts in regulated and non-regulated environments.',
        offerings: [
          'Implementation, Configuration & Cutover Planning',
          'SAP S/4HANA · Oracle Fusion · Dynamics 365',
          'System Integration & Data Migration',
          'Process Optimisation & Workflow Design',
          'Ongoing Managed Support & Roll-Forwards',
          'Change Management & User Training',
          'Audit, Tax & Statutory Reporting Configuration',
          'Post-Go-Live Stabilisation & Optimisation'
        ],
        platforms: ['SAP S/4HANA', 'Oracle Fusion', 'Microsoft Dynamics 365', 'NetSuite', 'Workday Financials', 'Infor CloudSuite'],
        outcomes: [
          { h: 'On-time, on-budget cutovers', b: 'Across 18 ERP rollouts since 2019, our average cutover slip is under 4% of original timeline.' },
          { h: 'Zero unplanned downtime', b: 'We have a perfect record on cutover weekend uptime. No exceptions, no excuses.' },
          { h: 'Real adoption', b: 'Our change-management partners measure 90%+ user adoption at 30 days — vs. industry average of ~60%.' }
        ],
        engagement: ['12–24 month full implementations', 'Or 6–12 week module roll-forwards', 'Joint steering committees with client leadership', 'Audit-ready documentation deliverables']
      }
    },
    'services/data': {
      title: 'Data & AI',
      content: {
        hero: 'Turn raw data into strategic intelligence.',
        body: 'Pragmatic ML, BI, and GenAI — built to actually run in production, not impress a steering committee. We start with the question that matters, not the model that\'s trending on Twitter.',
        offerings: [
          'Data Strategy, Architecture & Governance',
          'Modern Data Stack Implementation',
          'Business Intelligence & Self-Serve Analytics',
          'Machine Learning & Predictive Analytics',
          'Generative AI & LLM Integration',
          'Retrieval-Augmented Generation (RAG) Systems',
          'Data Engineering & Pipeline Automation',
          'MLOps, Model Governance & Evaluation Harnesses'
        ],
        stack: ['Snowflake', 'Databricks', 'BigQuery', 'dbt', 'Airflow', 'Dagster', 'Python', 'PyTorch', 'LangChain', 'Pinecone', 'Power BI', 'Tableau', 'Looker'],
        outcomes: [
          { h: 'AI that ships', b: '80%+ of GenAI engagements we lead reach production. The industry average is closer to 30%.' },
          { h: 'Trustworthy dashboards', b: 'Lineage, quality tests, and contracts mean leadership stops second-guessing the numbers.' },
          { h: 'Forecasting that holds up', b: 'Our forecasting models are evaluated quarterly against ground truth — and tuned, not abandoned.' }
        ],
        engagement: ['12-week strategy sprints', '6–18 month build engagements', 'Embedded data teams', 'Optional managed data operations']
      }
    },
    'services/managed': {
      title: 'Managed Services',
      content: {
        hero: 'Your technology, quietly handled.',
        body: 'End-to-end MSP coverage — infrastructure, security, support, and monitoring under one SLA. Senior-led, financially accountable, no hand-offs. We treat your environment like our own — because under our SLAs, we\'re on the hook for it.'
      }
    },
    'services/talent': {
      title: 'Talent Services',
      content: {
        hero: 'The right people, when you need them.',
        body: 'Whether you need to scale a team fast, fill a critical skills gap, or build a dedicated offshore capability — we connect you with pre-vetted technology professionals ready to contribute from day one. Every candidate is screened for technical depth, communication, and cultural alignment — not just resume keywords.'
      }
    },
    process: {
      title: 'Our Approach',
      content: {
        eyebrow: 'Our approach',
        title: 'How we work.',
        body: 'A structured, collaborative process designed to minimise risk and maximise value at every stage.',
        steps: [
          { name: 'Discover', body: 'We invest 1–4 weeks upfront to understand the business, the systems, and the friction. Output: a written assessment with prioritised opportunities.' },
          { name: 'Strategise', body: 'A documented roadmap — choices, timelines, resourcing, risk mitigation, and a defensible business case for the steering committee.' },
          { name: 'Build', body: 'Agile delivery in 2-week sprints with regular demos, transparent reporting, and a single point of accountability. No black-box weeks.' },
          { name: 'Evolve', body: 'Go-live support, training, and iteration as the business grows around it. Optional managed support contracts post-launch.' }
        ],
        principles: [
          { h: 'No bait-and-switch', b: 'The senior practitioners you meet in the pitch are the practitioners who do the work.' },
          { h: 'Working artefacts only', b: 'We deliver code, configurations, and runbooks — not 60-page slide decks.' },
          { h: 'Plain-language reporting', b: 'Weekly status in language a CFO and a CTO can both read in under 90 seconds.' },
          { h: 'Audit-ready documentation', b: 'Every deliverable comes with the documentation an internal audit team would actually accept.' }
        ]
      }
    },
    industries: {
      title: 'Industries',
      content: {
        eyebrow: 'Industries',
        title: 'Built for complex, regulated environments.',
        body: 'Domain knowledge in places where technology decisions carry serious consequences — audits, downtime, lives, livelihoods.',
        list: [
          { slug: 'financial-services', name: 'Financial Services', glyph: '◐', body: 'Core banking, risk, regulatory reporting, automated compliance. Experience across regional banks, credit unions, asset managers, and PE.', tags: ['SOC 2','PCI-DSS','SOX'] },
          { slug: 'healthcare', name: 'Healthcare', glyph: '✚', body: 'EHR integration, HIPAA-compliant analytics, patient triage AI, revenue cycle modernisation.', tags: ['HIPAA','HITRUST','HL7/FHIR'] },
          { slug: 'manufacturing', name: 'Manufacturing', glyph: '⚙', body: 'ERP modernisation, predictive maintenance, IoT integration, MES & supply chain visibility.', tags: ['ISO 27001','SAP','MES'] },
          { slug: 'retail', name: 'Retail & eCommerce', glyph: '◊', body: 'Demand forecasting, omnichannel commerce platforms, POS integration, customer 360.', tags: ['PCI-DSS','POS','CDP'] },
          { slug: 'supply-chain', name: 'Supply Chain & Logistics', glyph: '⇆', body: 'Route optimisation, IoT tracking, warehouse automation, real-time visibility platforms.', tags: ['EDI','GS1','TMS'] },
          { slug: 'energy', name: 'Energy & Utilities', glyph: '⚡', body: 'Field operations, asset management, regulatory reporting, grid analytics.', tags: ['NERC-CIP','GIS','SCADA'] },
          { slug: 'public-sector', name: 'Public Sector', glyph: '◯', body: 'Citizen services, secure cloud, accessibility-first delivery, audit-ready reporting.', tags: ['FedRAMP','WCAG','StateRAMP'] },
          { slug: 'education', name: 'Education', glyph: '✦', body: 'Student information systems, learning analytics, modern LMS integrations.', tags: ['FERPA','LTI','SIS'] }
        ]
      }
    },
    careers: {
      title: 'Careers',
      content: {
        eyebrow: 'Careers',
        title: "We're hiring people who still care about the craft.",
        body: 'No ping-pong tables, no foosball, no "rockstar ninjas". Just senior practitioners, real ownership, and the chance to do work you\'re proud to put your name on.',
        values: [
          { name: 'Quiet excellence', body: 'Loud doesn\'t equal good. We hire people whose work speaks for them.' },
          { name: 'Senior by default', body: 'No junior pyramid scheme. Our average team member has 10+ years in the trade.' },
          { name: 'Slow hiring', body: 'We\'d rather wait six months than rush a bad fit. Tenure here is measured in years.' },
          { name: 'Real ownership', body: 'Equity, profit-share, and the autonomy to make calls without three layers of approval.' }
        ],
        process: [
          'Intro conversation — 30 minutes, no whiteboard.',
          'Take-home or paired session — your choice, scoped to under 4 hours.',
          'Team conversations — meet 3–4 people you\'d actually work with.',
          'Reference and offer — within 5 business days. No ghosting. Ever.'
        ]
      }
    },
    contact: {
      title: 'Contact',
      content: {
        eyebrow: 'Let\'s build something',
        title: 'Tell us about the goal.',
        body: 'We\'ll tell you, plainly, whether we\'re the right team for it.',
        emails: {
          general: 'hello@threegroups.com',
          msp: 'msp@threegroups.com',
          talent: 'talent@threegroups.com',
          careers: 'careers@threegroups.com'
        },
        address: 'The Mercantile Building · 1700 Pacific Ave, Suite 2400 · Dallas, TX 75201',
        phone: '+1 (214) 555-0142',
        hours: 'Mon–Fri · 8:00am – 6:00pm CT · Emergency support: 24/7 for managed clients'
      }
    },
    privacy: {
      title: 'Privacy Policy',
      content: {
        updated: '2025-01-15',
        sections: [
          { h: 'Introduction', p: 'Three Groups respects your privacy. This policy describes what data we collect, why we collect it, and how we handle it.' },
          { h: 'Information we collect', p: 'Information you provide directly (name, email, company, message) when contacting us, applying for a role, or subscribing to our newsletter. Standard server logs (IP address, user agent, timestamps).' },
          { h: 'How we use information', p: 'To respond to enquiries, deliver requested services, evaluate job applications, and send you newsletters you have opted into.' },
          { h: 'Data sharing', p: 'We do not sell your personal information. We share data only with sub-processors necessary to operate this site (hosting, email delivery) under contractual data-protection terms.' },
          { h: 'Retention', p: 'Lead data is retained for up to 24 months after last contact unless you ask us to delete it sooner. Application data is retained for up to 12 months unless you opt in to longer retention.' },
          { h: 'Your rights', p: 'You may request access, correction, or deletion of your personal data at any time by emailing privacy@threegroups.com.' },
          { h: 'Cookies', p: 'We use only essential cookies for session and security. We do not use third-party advertising or tracking cookies.' }
        ]
      }
    },
    terms: {
      title: 'Terms of Service',
      content: {
        updated: '2025-01-15',
        sections: [
          { h: 'Acceptance', p: 'By using this website you accept these terms. If you do not agree, please do not use the site.' },
          { h: 'Use of site', p: 'You may use this site for lawful purposes. You may not attempt to compromise its security or scrape it at scale without permission.' },
          { h: 'Intellectual property', p: 'All content on this site, including text, code samples, graphics, and logos, is the property of Three Groups or its licensors.' },
          { h: 'Engagement terms', p: 'Any consulting engagement is governed by a separately executed Master Services Agreement and Statement of Work — not by this website.' },
          { h: 'No warranty', p: 'The site is provided "as is" without warranty of any kind, express or implied.' },
          { h: 'Limitation of liability', p: 'To the fullest extent permitted by law, Three Groups\' liability arising from your use of this site is limited to one hundred US dollars.' },
          { h: 'Governing law', p: 'These terms are governed by the laws of the State of Texas, USA.' }
        ]
      }
    },
    faq: {
      title: 'Frequently Asked Questions',
      content: {
        eyebrow: 'FAQ',
        title: 'Common questions, plainly answered.',
        body: 'If your question isn\'t here, ask us directly at hello@threegroups.com — we reply personally.'
      }
    },
    partners: {
      title: 'Partners & Certifications',
      content: {
        eyebrow: 'Alliances',
        title: 'Verified across the platforms we deliver.',
        body: 'We hold active partner status with the platform vendors we implement, and our practitioners maintain current certifications across cloud, ERP, and data ecosystems.'
      }
    },
    'case-studies': {
      title: 'Case Studies',
      content: {
        eyebrow: 'Selected work',
        title: 'Real clients. Real outcomes.',
        body: 'We let the receipts do the talking.'
      }
    }
  },

  jobs: [
    { id: 'sse-2026-01', role: 'Senior Software Engineer', team: 'Software', location: 'Dallas / Remote (US)', type: 'Full-time',
      description: "Join our software practice as a senior engineer working across mid-market and enterprise client engagements. You'll lead technical design, mentor mid-level engineers, and deliver production systems end-to-end across cloud-native architectures.",
      requirements: ['8+ years building production software','Deep experience with TypeScript or Python','Production experience designing distributed systems on AWS, Azure, or GCP','Comfort with CI/CD, infrastructure as code, and observability tooling','Excellent written communication — you can explain technical tradeoffs to a non-technical audience','Experience leading 2–4 engineer teams or pods'] },
    { id: 'erp-sap-2026-01', role: 'ERP Functional Consultant — SAP', team: 'ERP', location: 'Remote (US)', type: 'Full-time',
      description: 'Lead SAP S/4HANA functional design and configuration on client engagements. Partner closely with technical and data teams to deliver integrated outcomes — not isolated module work.',
      requirements: ['7+ years SAP functional experience','S/4HANA certification preferred','FI/CO or MM/SD module depth','Experience leading client-facing workshops','Strong process-modelling background','Comfort presenting to executive steering committees'] },
    { id: 'mle-2026-01', role: 'ML Engineer (LLM / GenAI)', team: 'Data & AI', location: 'Remote (Global)', type: 'Full-time',
      description: 'Design and ship production GenAI systems for enterprise clients. Own the full stack from retrieval pipelines to model evaluation harnesses — and the accountability for them running reliably in production.',
      requirements: ['5+ years ML engineering','Production LLM experience (RAG, agents, or fine-tuning)','Strong Python and PyTorch','Experience with vector databases and embedding pipelines','Comfort writing evaluation harnesses for non-deterministic systems','Bonus: experience deploying on Bedrock, Vertex, or Azure AI Foundry'] },
    { id: 'sre-2026-01', role: 'Site Reliability Engineer', team: 'Managed Services', location: 'Dallas, TX', type: 'Full-time',
      description: 'Keep our managed clients running 24/7. Build observability, automation, and runbooks across heterogeneous client environments — from pure-cloud SaaS deployments to hybrid on-prem manufacturing systems.',
      requirements: ['5+ years SRE/DevOps','Terraform, Kubernetes, Prometheus, Grafana','On-call experience','SOC 2 / HIPAA awareness','Strong scripting (Python or Go)','Calm under incident pressure'] },
    { id: 'de-2026-01', role: 'Data Engineer', team: 'Data & AI', location: 'Remote (US)', type: 'Contract → Hire',
      description: 'Build and operate data platforms for client engagements — Snowflake, Databricks, dbt, Airflow. You\'ll own the pipeline from ingestion through serving layer.',
      requirements: ['4+ years data engineering','Snowflake or Databricks production experience','Strong SQL and Python','dbt experience preferred','Comfort with data quality, lineage, and contracts','Experience with at least one orchestration tool (Airflow, Dagster, Prefect)'] },
    { id: 'fe-2026-01', role: 'Senior Frontend Engineer', team: 'Software', location: 'Remote (US)', type: 'Full-time',
      description: 'Build polished, performant frontends for B2B and internal enterprise tools. You will work closely with design and backend engineers — every change you ship lands in front of real users.',
      requirements: ['6+ years frontend','Deep React + TypeScript','Strong CSS fundamentals (no, Tailwind alone does not count)','Performance and accessibility awareness','Experience with design systems','Care about craft'] },
    { id: 'pm-2026-01', role: 'Engagement Manager', team: 'Delivery', location: 'Dallas / Remote (US)', type: 'Full-time',
      description: 'Run multi-discipline engagements end-to-end. Be the trusted single point of contact for client executives — and the internal commander who keeps engineers, ERP consultants, and data scientists aligned.',
      requirements: ['8+ years client-facing project leadership','Experience running engagements >$1M','Comfort owning P&L for an engagement','Strong written communication','Calm under pressure','Bonus: prior consulting at a Big 4 or top-tier boutique'] },
    { id: 'erp-oracle-2026-01', role: 'Oracle Fusion Functional Lead', team: 'ERP', location: 'Remote (US)', type: 'Full-time',
      description: 'Lead Oracle Fusion functional engagements across Finance and SCM modules. Mentor consultants and partner with technical leads on integration design.',
      requirements: ['8+ years Oracle ERP experience (EBS or Fusion)','Cloud Fusion functional cert preferred','Experience leading at least 3 full-cycle Oracle implementations','Strong stakeholder management','Comfort with complex integration topologies'] },
    { id: 'sec-2026-01', role: 'Cybersecurity Engineer (MDR)', team: 'Managed Services', location: 'Dallas, TX', type: 'Full-time',
      description: 'Operate and tune our managed detection and response stack across client environments. Triage incidents, harden environments, and lead post-incident reviews.',
      requirements: ['5+ years SOC, blue team, or DFIR','Hands-on with at least one EDR platform','Experience with SIEM tuning','Strong Linux and Windows fundamentals','Calm communicator under live-fire incidents'] },
    { id: 'intern-2026', role: 'Engineering Internship — Summer 2026', team: 'Software', location: 'Dallas, TX', type: 'Internship',
      description: '12-week paid internship working alongside senior engineers on real client projects. Conversion to full-time at end of program for strong performers.',
      requirements: ['Currently enrolled in CS or related program','Demonstrated programming projects (open source, hackathons, startup work)','Curiosity and humility','Willingness to be in our Dallas office 3 days/week'] }
  ],

  posts: [
    { id: 'why-ai-projects-fail', title: 'Why most enterprise AI projects fail before they start — and how to fix that',
      category: 'Data & AI', author: 'Jordan Rivera', initials: 'JR', date: 'Apr 28, 2025', readTime: '8 min', featured: true,
      blurb: "Organisations are pouring investment into AI initiatives, yet the majority stall before delivering real business value. The problem isn't the technology — it's the absence of a data foundation capable of supporting it.",
      body: "We've sat in dozens of AI steering committees over the last three years and the failure pattern is remarkably consistent. The pilots impress. The demos go well. Then the project quietly disappears six months later, written off as 'not yet ready'.\n\nThe consistent root cause isn't the model — it's the data plumbing underneath. The model is a thin layer of icing on a cake nobody baked. You can swap in a better LLM tomorrow; you can't swap in a coherent data foundation in a week.\n\nThe fix isn't another model bake-off. It's three uncomfortable months building the boring infrastructure: lineage, contracts, governance, observability. Then the AI work becomes almost mechanical.\n\nIn our experience, AI engagements that begin with a four-to-eight week 'data readiness' sprint reach production at roughly three times the rate of those that begin with a model prototype. The math is uncomfortable but the data is clear: skip the foundation, and you build a tower of demos that never reach a user." },
    { id: 'sap-vs-oracle-2025', title: 'SAP S/4HANA vs Oracle Fusion: which ERP fits your business in 2025?',
      category: 'ERP', author: 'Marcus Kim', initials: 'MK', date: 'Apr 18, 2025', readTime: '6 min',
      blurb: 'Both platforms have matured significantly, but they serve different organisational profiles. We break down the real-world tradeoffs across implementation complexity, TCO, and long-term flexibility.',
      body: 'The honest answer is "it depends" — but the dimensions that decide it are surprisingly few.\n\nIf your business runs on heavy manufacturing, complex supply chains, or deep financial consolidation across multiple legal entities, S/4HANA is usually the right answer. Its data model and process library reflect decades of industrial DNA.\n\nIf your business is services-heavy, financials-led, and has a strong cloud-native posture, Oracle Fusion frequently fits better. Its release cadence and quarterly innovation pipeline are hard to argue with.\n\nThe wrong way to choose is by counting features. The right way is by counting the integrations you already have, the talent pool you can hire from, and the partner ecosystem you can lean on regionally.' },
    { id: 'legacy-cost', title: "The hidden cost of legacy systems — and why \"we'll fix it later\" always loses",
      category: 'Software', author: 'Aisha Longford', initials: 'AL', date: 'Apr 11, 2025', readTime: '7 min',
      blurb: 'Every quarter you defer modernisation, your technical debt compounds. We quantify what staying on legacy actually costs — in money, velocity, and talent retention.',
      body: 'The compounding nature of technical debt is the part nobody internalises until they\'re inside it.\n\nIn one of our recent engagements, a client running a 14-year-old monolith was paying roughly 2.4× their peer benchmark on infrastructure, hiring at roughly half the velocity of competitors, and losing senior engineers at twice the industry average attrition rate.\n\nThe official rationale for not modernising had been "the business case isn\'t there yet". When we ran the numbers, the business case had been there for at least four years — but nobody had assembled it in one place.\n\nWe build that business case as a deliverable now. It\'s become one of our most useful artefacts.' },
    { id: 'cdo-needs', title: 'What a Chief Data Officer actually needs from their technology partner',
      category: 'Data & AI', author: 'Jordan Rivera', initials: 'JR', date: 'Apr 4, 2025', readTime: '5 min',
      blurb: 'After dozens of conversations with CDOs across industries, clear patterns have emerged. The expectations have shifted — and most technology vendors aren\'t keeping up.',
      body: 'CDOs in 2025 are not asking for the same things they asked for in 2020.\n\nThe headline shift: governance has overtaken velocity as the top concern. Five years ago, every CDO wanted to ship more, faster. Today, the pressure is to ship less, more correctly — with an audit trail.\n\nVendors who still lead with "we\'ll move fast and figure governance out later" are losing pitches. The CDOs we talk to want governance in week one, not week one hundred.' },
    { id: 'erp-trouble-signs', title: '5 signs your ERP implementation is heading for trouble — and what to do about it',
      category: 'ERP', author: 'Marcus Kim', initials: 'MK', date: 'Mar 27, 2025', readTime: '9 min',
      blurb: "Most ERP failures aren't sudden — they're the result of slow-moving warning signs that get ignored. Recognising them early can be the difference between a course correction and a full restart.",
      body: 'Recognising early warning signs in an ERP rollout is the difference between a course correction and a full restart.\n\nThe five we see most often: scope creep that nobody is tracking, a steering committee that has stopped meeting, a system integrator that no longer raises bad news, a data migration that nobody owns, and a change management workstream that was promised but never staffed.\n\nAny one of these alone is recoverable. Two together is a yellow card. Three or more is a red card — pause, reset, and rebuild governance before another dollar gets spent.' },
    { id: 'genai-production', title: 'Generative AI in the enterprise: moving from pilot to production',
      category: 'Data & AI', author: 'Sofia Reyes', initials: 'SR', date: 'Mar 19, 2025', readTime: '10 min',
      blurb: 'Getting a GenAI proof-of-concept running is easy. Getting it into production, reliably, at scale, with proper governance — that\'s where most organisations get stuck.',
      body: 'There\'s a chasm between "the demo worked" and "this is in front of customers". Here\'s the framework we use to cross it.\n\nFirst: clear the regulatory hurdles before writing any prompts. Legal, security, and risk in the room from week one — not week ten.\n\nSecond: build the evaluation harness before the model. You can\'t improve what you can\'t measure, and GenAI systems behave non-deterministically.\n\nThird: ship to a small, internal user base for at least 60 days before any external deployment.' },
    { id: 'business-strategy-first', title: 'Why the best technology decisions start with business strategy, not tech specs',
      category: 'Leadership', author: 'Three Groups', initials: 'TG', date: 'Mar 12, 2025', readTime: '6 min',
      blurb: 'Too many technology projects begin with a solution in search of a problem. We make the case — and lay out the practice — for leading with business outcomes every single time.',
      body: 'The most expensive mistake in enterprise technology is buying tools before agreeing on the problem.\n\nWe see it most often when a CIO inherits a "modernisation programme" from a predecessor that was scoped around platform choices instead of business outcomes. Two years and seven figures in, the platform is mostly delivered, and the business is still asking what it bought.\n\nWe lead every engagement with a written outcomes contract — what changes, by when, measured how. Everything else flows from that.' },
    { id: 'api-first', title: "API-first architecture: why it's the foundation for every modern integration strategy",
      category: 'Software', author: 'Aisha Longford', initials: 'AL', date: 'Mar 5, 2025', readTime: '7 min',
      blurb: 'Organisations that build API-first are faster to integrate, easier to scale, and far less likely to end up with a patchwork of point-to-point connections they can\'t untangle later.',
      body: 'API-first isn\'t a new idea, but it\'s still poorly executed in most enterprises.\n\nThe failure mode we see most: APIs designed by engineers for their own immediate needs, with no contract review, no consumer-driven testing, and no deprecation policy. Six months in, the API has accumulated half a dozen consumers — and changing it has become organisationally impossible.\n\nGood API-first practice borrows from product management: explicit contracts, versioning policies, and consumer feedback cycles.' },
    { id: 'erp-ai-bridge', title: 'Connecting ERP data to your AI strategy: the integration layer nobody talks about',
      category: 'ERP · Data & AI', author: 'Sofia Reyes', initials: 'SR', date: 'Feb 26, 2025', readTime: '8 min',
      blurb: 'Your ERP is sitting on a goldmine of operational data. But without the right integration layer, your AI models will never see it.',
      body: 'The most under-utilised dataset in most enterprises is sitting inside their ERP.\n\nBridging it to AI is mechanical, not magical: change-data-capture from the ERP into a data lake, semantic modelling on top, and clear data contracts between the ERP team and the AI team. None of it is novel — but most organisations skip step three, and pay for it later.' },
    { id: 'vendor-vs-partner', title: 'Vendor or partner? The question every CTO should ask before signing',
      category: 'Leadership', author: 'Three Groups', initials: 'TG', date: 'Feb 18, 2025', readTime: '5 min',
      blurb: 'The distinction sounds semantic, but it has real consequences for your project outcomes. We lay out exactly what to look for — and the questions to ask — before you commit.',
      body: 'A vendor sells you the thing they have. A partner finds out what you actually need first.\n\nThe simplest filter we know: ask the firm to explain, in writing, the worst engagement they had in the last 24 months — and what they learned from it. A vendor will deflect. A partner will answer specifically.' },
    { id: 'data-mesh-reality', title: 'Data mesh, data fabric, lakehouse: cutting through the architecture noise',
      category: 'Data & AI', author: 'Jordan Rivera', initials: 'JR', date: 'Feb 10, 2025', readTime: '8 min',
      blurb: 'Three architectural philosophies, endless thought leadership. We translate the buzzwords into a checklist that actually helps you decide.',
      body: 'Most enterprises do not need to pick one capital-letter architecture. They need to pick the three or four operating principles they will hold to consistently...' },
    { id: 'change-management', title: 'Why technology projects live or die on change management',
      category: 'Leadership', author: 'Three Groups', initials: 'TG', date: 'Feb 3, 2025', readTime: '6 min',
      blurb: 'The technology is rarely the bottleneck. The people are. We share what 50+ engagements have taught us about doing change properly.',
      body: 'The change management workstream is the one most often under-staffed and the one most often blamed when adoption fails...' },
    { id: 'cloud-cost-discipline', title: 'Cloud cost discipline: how to stop paying for unused capacity',
      category: 'Software', author: 'Aisha Longford', initials: 'AL', date: 'Jan 27, 2025', readTime: '7 min',
      blurb: 'Most enterprises are paying 30–50% more than they need to on cloud infrastructure. The fix is process, not tooling.',
      body: 'Cloud cost discipline is a governance problem dressed as an engineering problem...' },
    { id: 'mlops-fundamentals', title: 'MLOps in plain English: the ten things every team needs',
      category: 'Data & AI', author: 'Sofia Reyes', initials: 'SR', date: 'Jan 20, 2025', readTime: '9 min',
      blurb: 'A vendor-neutral checklist for getting your ML systems production-grade — without buying yet another platform.',
      body: 'You do not need a $500k MLOps platform. You need ten controls done well...' }
  ],

  cases: [
    { id: 'regional-bank-unification', title: "Unifying a regional bank's fragmented operations across 12 branches",
      industry: 'Financial Services · ERP + Data', tag: 'erp data finance',
      body: 'Disconnected legacy systems were causing delayed reporting and compliance risk. We delivered an integrated ERP and data platform — a single source of truth with real-time AI dashboards.',
      metrics: [['62%', 'faster reporting'], ['$4.2M', 'annual savings'], ['99.9%', 'uptime'], ['8 mo', 'delivery']],
      chips: ['ERP', 'Data Architecture', 'BI'], featured: true,
      challenge: 'A 12-branch regional bank running on five disconnected legacy systems faced compliance pressure from a recent OCC examination. Reporting took 14 days, executives had no real-time view of risk exposure, and the systems integrator they had been using was struggling with both ERP migration and data architecture work simultaneously.',
      solution: 'We split the work into three streams running in parallel: ERP cutover (Oracle Fusion), data architecture (Snowflake + dbt), and BI delivery (Power BI). A single accountable engagement manager coordinated all three, eliminating the cross-vendor finger-pointing the client had previously experienced.',
      outcome: 'Cutover went live on a Friday night. Monday morning, executive dashboards reflected real-time positions across all 12 branches. Compliance reporting cycle dropped from 14 days to 5 hours. The OCC follow-up examination closed with no findings.' },
    { id: 'midsize-mfg-s4hana', title: 'Modernising a mid-size manufacturer with SAP S/4HANA',
      industry: 'Manufacturing · ERP', tag: 'erp manufacturing',
      body: 'A 15-year-old ERP, frequent downtime, manual workarounds. We led a full S/4HANA migration with zero production disruption.',
      metrics: [['40%', 'inventory reduction'], ['3×', 'order processing speed'], ['0', 'production stoppages'], ['12 mo', 'delivery']],
      chips: ['SAP S/4HANA', 'Migration'],
      challenge: 'A Midwest manufacturer ran their entire operation on a heavily customised 15-year-old ERP. Frequent downtime cost roughly $80k per hour during line stoppages. Talent attrition was severe — they could no longer hire for the legacy stack.',
      solution: 'We led a brownfield S/4HANA migration with a phased cutover strategy, plant-by-plant. Custom Z-tables were either retired, refactored into standard SAP, or moved to a side-car platform. Zero downtime during cutover weekend.',
      outcome: 'Production uninterrupted. 40% reduction in working capital tied up in inventory thanks to better demand signals. Order processing time dropped to one third of its previous baseline.' },
    { id: 'health-network-triage', title: 'AI-powered patient triage for a multi-site health network',
      industry: 'Healthcare · Software + AI', tag: 'software data healthcare',
      body: 'A regional health network needed smarter triage across 6 facilities. We built a custom ML platform that reduced wait times and improved care routing.',
      metrics: [['35%', 'reduced wait times'], ['91%', 'triage accuracy'], ['HIPAA', 'compliant by design'], ['9 mo', 'delivery']],
      chips: ['ML', 'Custom App', 'HIPAA'],
      challenge: 'A regional health network with 6 facilities was using a manual triage process that varied site-by-site. Wait times for non-urgent care were highly inconsistent, and clinical staff burnout was rising.',
      solution: 'We built a custom triage application with an embedded ML model trained on three years of de-identified patient outcome data. The model produced an acuity score that staff could override — never replace clinical judgement, just inform it.',
      outcome: 'Wait times dropped 35% across the network. Triage accuracy (vs. retrospective gold-standard review) reached 91%. Clinical staff overwhelmingly reported lower burnout in the post-launch survey.' },
    { id: 'retail-forecasting', title: 'Real-time demand forecasting for a national retail chain',
      industry: 'Retail · Data & AI', tag: 'data retail',
      body: 'A 200-store chain was over-ordering and under-stocking. We deployed a GenAI forecasting engine integrated with their POS systems.',
      metrics: [['28%', 'overstock reduction'], ['$1.8M', 'saved Y1'], ['99%', 'POS uptime'], ['7 mo', 'delivery']],
      chips: ['GenAI', 'Forecasting', 'POS'],
      challenge: 'A 200-store national retail chain was running demand forecasting on Excel spreadsheets. Overstock was tying up working capital. Stockouts were costing sales — particularly on seasonal SKUs.',
      solution: 'We built a forecasting engine combining classical time-series methods with a GenAI overlay for seasonality and event detection. Integration with the existing POS system gave the model real-time signal.',
      outcome: 'Overstock dropped 28% in year one — translating to $1.8M of working capital freed up. Stockout incidents on seasonal SKUs dropped from a weekly event to a monthly one.' },
    { id: 'energy-field-portal', title: 'Custom field operations portal replacing 4 disconnected tools',
      industry: 'Energy · Software', tag: 'software erp',
      body: 'Field crews juggled four separate apps. We consolidated everything into a single cloud-native portal.',
      metrics: [['4→1', 'systems consolidated'], ['50%', 'admin time saved'], ['98%', 'crew adoption'], ['6 mo', 'delivery']],
      chips: ['Cloud-Native', 'Portal', 'Mobile'],
      challenge: 'An energy services company had field crews juggling four separate apps for scheduling, asset tracking, compliance logging, and reporting. Adoption was poor, and admin overhead was eating roughly an hour of each shift.',
      solution: 'We built a single cloud-native operations portal with offline-first mobile and a clean admin web interface. Migration was phased over 90 days with parallel-running of legacy systems during the transition.',
      outcome: 'Four systems collapsed into one. Admin time per shift dropped 50%. Crew adoption hit 98% within 60 days of full rollout — a number unheard of in the client\'s previous tech rollouts.' },
    { id: 'pe-risk-reporting', title: 'Automated risk reporting for a private equity firm',
      industry: 'Private Equity · Data & AI', tag: 'data finance erp',
      body: 'Hundreds of monthly risk reports done by hand. We delivered an automated reporting infrastructure with real-time portfolio scoring.',
      metrics: [['80%', 'reporting automated'], ['2 days → 4 hours', 'cycle time'], ['100%', 'audit pass rate'], ['5 mo', 'delivery']],
      chips: ['Automation', 'BI', 'Risk'],
      challenge: 'A mid-market PE firm was generating hundreds of monthly risk reports across portfolio companies — manually. Two days of analyst time per cycle. Errors were common, and confidence in the numbers was eroding at the LP level.',
      solution: 'We delivered an automated reporting infrastructure with portfolio-company connectors, a unified data model, and real-time risk scoring. Reports rebuilt as live dashboards plus a scheduled deck export for LPs.',
      outcome: 'Reporting cycle compressed from 2 days to 4 hours. 80% of report content fully automated. The firm passed a subsequent LP audit with zero findings.' },
    { id: 'logistics-routing', title: 'Route optimisation engine for a regional logistics provider',
      industry: 'Logistics · Software + AI', tag: 'software data logistics',
      body: 'A 400-truck regional logistics provider was routing manually. We built a constraint-solving optimisation engine integrated with their TMS.',
      metrics: [['18%', 'fuel cost reduction'], ['12%', 'more deliveries / day'], ['200+', 'trucks routed'], ['6 mo', 'delivery']],
      chips: ['Optimisation', 'TMS', 'Operations'],
      challenge: 'Manual routing was leaving capacity on the table and burning unnecessary fuel. The existing TMS could not handle the firm\'s mix of constraint types.',
      solution: 'A constraint-solving optimisation engine running nightly, with manual override flows for dispatcher exceptions. Tight integration with the existing TMS to keep the dispatcher experience familiar.',
      outcome: 'Fuel costs down 18%. Deliveries per day up 12%. Dispatcher hours reallocated to exception handling and customer communication.' },
    { id: 'msp-banking', title: 'Managed services overhaul for a community bank network',
      industry: 'Financial Services · Managed Services', tag: 'msp finance',
      body: 'A 5-bank community network was juggling four MSPs. We consolidated to a single accountable provider — us — and tightened SLAs.',
      metrics: [['1', 'accountable provider'], ['99.95%', 'measured uptime'], ['<2hr', 'avg incident response'], ['Year 1', 'no SLA breach']],
      chips: ['MSP', '24/7', 'Compliance'],
      challenge: 'A 5-bank network had grown by acquisition and inherited four different MSPs. Finger-pointing during incidents was the norm, and OCC examiners had begun raising concerns about the patchwork.',
      solution: 'We consolidated all five environments under a single SLA, single dashboard, and single 24/7 NOC. Migration was sequenced bank-by-bank over five months with zero service interruption.',
      outcome: 'Single throat to choke for incidents. Measured uptime 99.95% in year one. Zero SLA breaches. Audit findings closed.' },
    { id: 'edu-sis', title: 'Student information system modernisation for a university system',
      industry: 'Education · Software + ERP', tag: 'software erp education',
      body: 'A 4-campus university system replaced a 20-year-old SIS without losing a single semester of academic data.',
      metrics: [['20 yrs', 'data migrated'], ['0', 'data loss'], ['4', 'campuses'], ['18 mo', 'delivery']],
      chips: ['SIS', 'Migration', 'Higher Ed'],
      challenge: 'A 4-campus public university system was running a heavily customised SIS that had not been meaningfully upgraded in two decades. FERPA-sensitive data, semester-driven cutover constraints, and 50,000 active students made this a high-stakes engagement.',
      solution: 'A phased migration with parallel-running of the legacy SIS through one full academic year, comprehensive data quality gates, and a deliberately conservative cutover strategy.',
      outcome: 'Cutover completed without loss of a single transcript record. 50,000 students served continuously. Faculty satisfaction scores improved year-over-year for the first time in five years.' }
  ],

  testimonials: [
    { id: 'cfo-bank', quote: "The most useful firm we've worked with in a decade. They actually answered the phone at 2 a.m. during cutover weekend.", author: 'Chief Financial Officer', org: 'Regional bank · Texas', tag: 'finance' },
    { id: 'cto-mfg',  quote: "We've been through three SAP implementations. This is the only one that finished on time and didn't require a re-implementation eighteen months later.", author: 'Chief Technology Officer', org: 'Mid-market manufacturer · Ohio', tag: 'manufacturing' },
    { id: 'cdo-pe',   quote: "They told us in week two that the timeline we wanted was unrealistic. They were right. We adjusted, and the engagement was the smoothest one we've ever run.", author: 'Chief Data Officer', org: 'Private equity firm', tag: 'finance' },
    { id: 'cio-health', quote: "Senior practitioners from day one. No bait-and-switch. Our internal team learned more in nine months than they had in the prior three years.", author: 'Chief Information Officer', org: 'Multi-site health network', tag: 'healthcare' },
    { id: 'vp-ops', quote: "Three Groups feels less like a vendor and more like a wing of our own engineering organisation — only with deeper benches and better documentation.", author: 'VP of Operations', org: 'National retail chain', tag: 'retail' },
    { id: 'coo-energy', quote: "The phrase 'audit-ready documentation' was thrown around a lot in the pitch. They actually delivered it.", author: 'Chief Operating Officer', org: 'Energy services firm', tag: 'energy' }
  ],

  partners: [
    { id: 'aws', name: 'AWS', tier: 'Advanced Consulting Partner', kind: 'Cloud' },
    { id: 'azure', name: 'Microsoft Azure', tier: 'Solutions Partner — Digital & App Innovation', kind: 'Cloud' },
    { id: 'gcp', name: 'Google Cloud', tier: 'Premier Partner', kind: 'Cloud' },
    { id: 'sap', name: 'SAP', tier: 'Silver Partner — S/4HANA Cloud', kind: 'ERP' },
    { id: 'oracle', name: 'Oracle', tier: 'Cloud Excellence Partner', kind: 'ERP' },
    { id: 'msdyn', name: 'Microsoft Dynamics 365', tier: 'Solutions Partner', kind: 'ERP' },
    { id: 'snowflake', name: 'Snowflake', tier: 'Premier Services Partner', kind: 'Data' },
    { id: 'databricks', name: 'Databricks', tier: 'Select Consulting Partner', kind: 'Data' },
    { id: 'dbt', name: 'dbt Labs', tier: 'Preferred Services Partner', kind: 'Data' },
    { id: 'tableau', name: 'Tableau', tier: 'Gold Partner', kind: 'BI' },
    { id: 'pbi', name: 'Microsoft Power BI', tier: 'Solutions Partner — Data & AI', kind: 'BI' },
    { id: 'soc2', name: 'SOC 2 Type II', tier: 'Audited annually since 2021', kind: 'Compliance' },
    { id: 'iso27001', name: 'ISO 27001', tier: 'Certified', kind: 'Compliance' },
    { id: 'hipaa', name: 'HIPAA', tier: 'Compliance program', kind: 'Compliance' }
  ],

  faqs: [
    { id: 'q-engagement-size', q: 'What size engagements do you typically take on?', a: 'Most of our engagements range from $250k to $5M. We are happy to take on smaller scopes if the work is interesting and the team is the right fit. We do not have a published minimum.', tag: 'engagement' },
    { id: 'q-fixed-fee', q: 'Do you work fixed-fee or time and materials?', a: 'Both. For well-defined scopes — most ERP and software builds — we prefer fixed-fee with documented change-control. For exploratory work, T&M with monthly caps is more honest.', tag: 'engagement' },
    { id: 'q-offshore', q: 'Do you offshore work?', a: 'Senior leadership on every engagement is North America-based. We have a nearshore delivery centre for select engineering work, always under a senior US-based tech lead. We do not offshore-only.', tag: 'engagement' },
    { id: 'q-timezone', q: 'What timezones do you cover for managed services?', a: '24/7 for Enterprise and Strategic plan clients. Business hours (8am–6pm CT) for Essential plan, with on-call extension available.', tag: 'msp' },
    { id: 'q-data-residency', q: 'Can you work in restricted data residency environments?', a: 'Yes. We have delivered into US-only, EU-only, Canadian, and Australian residency requirements. Talk to us about your specific constraints.', tag: 'security' },
    { id: 'q-soc2', q: 'Are you SOC 2 audited?', a: 'Yes — Type II, audited annually since 2021. We will share the most recent report under NDA.', tag: 'security' },
    { id: 'q-tools', q: 'Are you tied to specific platforms?', a: 'No. We hold partner status with the major vendors but are not exclusive to any. Our recommendations are driven by your context, not our incentives.', tag: 'engagement' },
    { id: 'q-references', q: 'Will you provide references?', a: 'Yes — typically three relevant references at the proposal stage. We ask references for permission per inquiry.', tag: 'engagement' },
    { id: 'q-talent-rates', q: 'How do your talent placement fees work?', a: 'Staff augmentation is a transparent hourly rate. Permanent placement is a flat percentage of first-year base. No surprise mark-ups, ever.', tag: 'talent' },
    { id: 'q-pilots', q: 'Do you run paid pilots?', a: 'Yes. For most data, AI, and ERP engagements, we offer a 4-week paid discovery sprint with a written assessment as the deliverable. The discovery fee is creditable against the larger engagement.', tag: 'engagement' }
  ],

  team: [
    { id: 'al', name: 'Aisha Longford', title: 'Managing Partner', initials: 'AL', bio: 'Twenty years across software engineering and consulting. Previously led modernisation programmes at two Fortune 500s before founding the firm.' },
    { id: 'mk', name: 'Marcus Kim', title: 'Head of ERP', initials: 'MK', bio: 'Sixteen ERP implementations under his belt across SAP, Oracle, and Dynamics. Holds active S/4HANA and Oracle Fusion certifications.' },
    { id: 'jr', name: 'Jordan Rivera', title: 'Head of Data & AI', initials: 'JR', bio: 'Built data platforms at scale for healthcare and finance clients. Speaks regularly on enterprise AI governance.' },
    { id: 'sr', name: 'Sofia Reyes', title: 'Head of Software', initials: 'SR', bio: 'Distributed systems engineer turned practice lead. Deep experience in regulated environments and high-stakes cutovers.' },
    { id: 'dt', name: 'Dani Trent', title: 'Head of Managed Services', initials: 'DT', bio: 'Ran 24/7 NOC operations for a global SaaS provider before joining. Calm under fire is the job description.' },
    { id: 'ek', name: 'Elena Kovacs', title: 'Head of Talent', initials: 'EK', bio: 'Two decades of technical recruiting and team-build experience. Personally interviews every senior placement.' }
  ]
};
