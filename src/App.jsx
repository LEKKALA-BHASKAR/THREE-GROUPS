import React, { useEffect, useState } from 'react';

/* ---------- Reveal on scroll ---------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ---------- Tiny inline icon set (hand-feel, single-stroke) ---------- */
const Icon = ({ d, className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {d}
  </svg>
);
const I = {
  code: <Icon d={<><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>} />,
  erp:  <Icon d={<><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></>} />,
  ai:   <Icon d={<><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.2 4.2l2.8 2.8M16.9 16.9l2.9 2.9M1 12h4M19 12h4M4.2 19.8l2.8-2.8M16.9 7.1l2.9-2.9" /></>} />,
  shield: <Icon d={<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />} />,
  bolt: <Icon d={<polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />} />,
  clock: <Icon d={<><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>} />,
  arrow: <Icon d={<><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></>} className="w-4 h-4" />,
  search:<Icon d={<><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>} />,
  users:<Icon d={<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>} />,
  globe:<Icon d={<><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z" /></>} />,
  spark:<Icon d={<><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3"/></>} />,
};

/* ---------- Logo (hand-drawn three bars + serif wordmark) ---------- */
const Logo = ({ light = false }) => (
  <a href="#top" className="flex items-center gap-3 group">
    <span className="flex items-end gap-[3px]">
      <span className="block w-[5px] h-4 bg-cyan -skew-x-6" />
      <span className="block w-[5px] h-5 bg-gilded -skew-x-6" />
      <span className="block w-[5px] h-7 bg-abyss -skew-x-6" />
    </span>
    <span className="leading-none">
      <span className={`block font-display font-semibold text-[17px] tracking-[0.18em] ${light ? 'text-mist' : 'text-abyss'}`}>
        THREE&nbsp;GROUPS
      </span>
      <span className={`block font-mono text-[9px] tracking-[0.32em] mt-[3px] ${light ? 'text-mist/60' : 'text-cyan2'}`}>
        SOFTWARE · ERP · DATA &amp; AI
      </span>
    </span>
  </a>
);

/* ---------- NAV ---------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ['About', '#about'],
    ['Services', '#services'],
    ['Work', '#work'],
    ['Managed', '#managed'],
    ['Careers', '#careers'],
    ['Journal', '#journal'],
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-abyss/10 backdrop-blur bg-mist/85">
      <div className="container-x flex items-center justify-between h-[72px]">
        <Logo />
        <nav className="hidden md:flex items-center gap-8">
          {links.map(([n, h]) => (
            <a key={n} href={h} className="text-[13px] tracking-wide text-slateDark hover:text-cyan transition-colors">
              {n}
            </a>
          ))}
          <a href="#contact" className="bg-abyss text-mist px-5 py-2 text-[13px] font-medium hover:bg-cyan transition-colors">
            Start a project →
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-abyss" aria-label="menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-abyss/10 bg-paper">
          <div className="container-x py-4 flex flex-col gap-3">
            {links.map(([n, h]) => (
              <a key={n} href={h} onClick={() => setOpen(false)} className="text-slateDark py-1">{n}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="bg-abyss text-mist px-5 py-2.5 mt-2 text-center">Start a project</a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="top" className="relative pt-[120px] md:pt-[140px] pb-20 md:pb-32 overflow-hidden">
      {/* hand-drawn squiggle accent */}
      <svg className="draw-line absolute top-[180px] right-[8%] w-[180px] h-12 text-cyan hidden md:block" viewBox="0 0 200 50" fill="none">
        <path d="M2 25 C 30 5, 60 45, 90 25 S 150 5, 198 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>

      <div className="container-x grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-8 reveal">
          <div className="eyebrow flex items-center gap-3">
            <span className="rule" /> Three disciplines · One trusted partner
          </div>
          <h1 className="h-display text-[52px] md:text-[88px] mt-6">
            We build the <span className="italic text-cyan">quiet</span> engine
            <br />behind serious <span className="relative inline-block">
              businesses
              <svg className="absolute left-0 -bottom-2 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 6 C 60 1, 120 11, 180 6 S 280 2, 298 7" stroke="#E8A020" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-slateDark leading-[1.7] max-w-2xl font-serif">
            Custom software, ERP that actually fits, and data systems that earn their keep.
            We&rsquo;re a small team of senior practitioners who would rather ship one thing right
            than three things loud.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#services" className="btn-solid">Explore the studio</a>
            <a href="#contact" className="btn-ghost">Book a 30-min call</a>
          </div>
        </div>

        <div className="md:col-span-4 reveal">
          <div className="bg-paper border border-abyss/10 p-6 shadow-crafted relative">
            <div className="absolute -top-3 left-6 bg-gilded text-abyss px-2 py-0.5 text-[10px] font-mono tracking-[0.2em]">
              EST. 2018
            </div>
            <div className="space-y-5 mt-2">
              {[
                ['50+', 'Projects shipped'],
                ['30+', 'Enterprise clients'],
                ['98%', 'Would hire us again'],
                ['100%', 'Senior-led delivery'],
              ].map(([n, l]) => (
                <div key={l} className="flex items-baseline justify-between border-b border-abyss/10 last:border-0 pb-3">
                  <div className="font-display text-3xl md:text-4xl text-abyss">{n}</div>
                  <div className="text-[12px] tracking-wider uppercase text-slate">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4 text-[12px] text-slate italic font-serif">
            “The most useful firm we&rsquo;ve worked with in a decade.”
            <span className="block not-italic mt-1">— CFO, regional bank</span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-paper border-y border-abyss/10">
      <div className="container-x grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5 reveal">
          <div className="eyebrow">Who we are</div>
          <h2 className="h-display text-4xl md:text-5xl mt-4">
            The partner who <em className="text-abyss2">sees the full picture</em>.
          </h2>
        </div>
        <div className="md:col-span-7 reveal space-y-5 text-slateDark text-[17px] leading-[1.85] font-serif">
          <p>
            Three Groups is a consultancy built around one stubborn idea:
            <strong className="text-abyss"> your software, your ERP, and your data should work as one.</strong>
          </p>
          <p>
            Most firms specialise in a single discipline and hand you off the moment scope shifts. We don&rsquo;t.
            We sit Software, ERP, and Data &amp; AI engineers at the same table — so nothing falls between
            the cracks, and you&rsquo;re never refereeing finger-pointing between three vendors.
          </p>
          <p>
            The result is faster delivery, tighter integration, and outcomes that actually move the needle.
            No theatrics. No deck-ware. Just careful work.
          </p>
        </div>
      </div>

      <div className="container-x grid md:grid-cols-2 mt-16 border border-abyss/10 bg-mist">
        {[
          ['Vision', 'V', 'To be the most trusted name in integrated technology transformation — known for depth, integrity, and results that last.'],
          ['Mission', 'M', 'Eliminate the silos between software, ERP, and data so clients have the clarity and confidence to move forward.'],
        ].map(([t, ch, body], i) => (
          <div key={t} className={`p-10 md:p-14 relative reveal ${i === 0 ? 'md:border-r border-abyss/10' : ''}`}>
            <div className="absolute right-6 bottom-2 font-display text-[140px] leading-none text-abyss/5 select-none">{ch}</div>
            <div className="eyebrow">Our {t}</div>
            <h3 className="h-display text-2xl md:text-3xl mt-4 leading-[1.25] max-w-md">{body.split(' — ')[0]}</h3>
            <p className="mt-4 text-slateDark font-serif text-[16px] max-w-md leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
const services = [
  {
    icon: I.code, title: 'Software Development',
    blurb: 'Custom applications engineered for performance, scale, and the long maintenance tail nobody talks about.',
    items: ['Custom Web & Mobile Applications', 'API Design & Microservices', 'Cloud-Native (AWS · Azure · GCP)', 'Legacy Modernisation', 'DevOps & Continuous Delivery'],
    accent: 'cyan',
  },
  {
    icon: I.erp, title: 'ERP Solutions',
    blurb: 'End-to-end ERP that unifies operations and gives leadership real-time visibility — without a year of pain.',
    items: ['Implementation & Configuration', 'SAP · Oracle · Dynamics', 'Integration & Data Migration', 'Process & Workflow Design', 'Ongoing Managed Support'],
    accent: 'gilded',
  },
  {
    icon: I.ai, title: 'Data & AI',
    blurb: 'Turn raw data into strategic intelligence. Pragmatic ML, BI, and GenAI — built to actually run in production.',
    items: ['Data Strategy & Architecture', 'BI Dashboards', 'Machine Learning & Forecasting', 'Generative AI & LLM Integration', 'Pipelines & Data Engineering'],
    accent: 'slateDark',
  },
];

function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container-x">
        <div className="max-w-2xl reveal">
          <div className="eyebrow flex items-center gap-3"><span className="rule" /> What we do</div>
          <h2 className="h-display text-4xl md:text-6xl mt-5">Three disciplines.<br />One studio under one roof.</h2>
          <p className="mt-6 text-slateDark font-serif text-lg leading-relaxed">
            Cross-trained teams with a single point of accountability. You meet the senior engineer in week one,
            and that&rsquo;s the same person you talk to in week fifty.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {services.map((s, i) => (
            <div key={s.title} className="reveal card p-8 md:p-10 group relative">
              <span className={`absolute top-0 left-0 right-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-${s.accent}`} />
              <div className={`w-12 h-12 border border-${s.accent}/40 text-${s.accent} flex items-center justify-center`}>
                {s.icon}
              </div>
              <div className="font-mono text-[10px] tracking-[0.3em] text-slate mt-6">0{i + 1} / 03</div>
              <h3 className="h-display text-2xl mt-2">{s.title}</h3>
              <p className="mt-3 text-slateDark font-serif text-[15px] leading-[1.8]">{s.blurb}</p>
              <ul className="mt-6 space-y-2">
                {s.items.map((it) => (
                  <li key={it} className="text-[13px] text-slate pl-4 relative before:content-[''] before:w-2 before:h-px before:bg-abyss/40 before:absolute before:left-0 before:top-2.5">
                    {it}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-flex items-center gap-2 mt-7 text-[13px] font-medium text-abyss hover:gap-3 transition-all">
                Learn more {I.arrow}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY US / ATTRACT ---------- */
function Why() {
  const items = [
    ['One partner, full accountability', 'No hand-offs, no finger-pointing. We own the full scope — strategy through delivery and support.'],
    ['Senior talent on every project', 'No bait-and-switch. The expert you meet in the pitch is the expert who shows up to do the work.'],
    ['Outcomes, not deliverables', 'We measure success by business impact: revenue gained, costs reduced, decisions made faster.'],
    ['Cross-discipline depth', 'We understand software, ERP, and data — and the awkward seams between them.'],
  ];
  return (
    <section className="py-24 md:py-32 bg-abyss text-mist relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#EEF3F7 1px,transparent 1px),linear-gradient(90deg,#EEF3F7 1px,transparent 1px)', backgroundSize: '64px 64px' }} />
      <div className="container-x grid md:grid-cols-12 gap-12 relative">
        <div className="md:col-span-5 reveal">
          <div className="eyebrow text-gilded flex items-center gap-3"><span className="h-px w-12 bg-gilded" /> Why us</div>
          <h2 className="h-display text-4xl md:text-5xl mt-5 text-mist">
            Stop managing vendors.<br /><em className="text-gilded">Start getting results.</em>
          </h2>
          <p className="mt-6 text-mist/70 font-serif text-lg leading-relaxed max-w-md">
            When your tech, ERP, and data teams don&rsquo;t speak the same language, the business pays
            the price. We changed that equation by refusing to pick a lane.
          </p>
          <a href="#contact" className="mt-10 inline-flex items-center gap-3 bg-gilded text-abyss px-7 py-3.5 font-medium hover:bg-mist transition-colors">
            Talk to our team {I.arrow}
          </a>
        </div>
        <div className="md:col-span-7 grid sm:grid-cols-2 gap-px bg-mist/10">
          {items.map(([t, b], i) => (
            <div key={t} className="bg-abyss p-7 reveal hover:bg-slateDark transition-colors">
              <div className="font-display text-4xl text-gilded">0{i + 1}</div>
              <h4 className="mt-3 font-display text-xl">{t}</h4>
              <p className="mt-2 text-mist/60 font-serif text-[15px] leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- INDUSTRIES ---------- */
const industries = [
  ['Financial Services', '◐'], ['Healthcare', '✚'], ['Manufacturing', '⚙'],
  ['Retail & eCommerce', '◊'], ['Supply Chain', '⇆'], ['Energy & Utilities', '⚡'],
  ['Public Sector', '◯'], ['Education', '✦'],
];
function Industries() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="max-w-xl reveal">
          <div className="eyebrow">Industries</div>
          <h2 className="h-display text-4xl md:text-5xl mt-4">
            Built for complex,<br />regulated environments.
          </h2>
          <p className="mt-5 text-slateDark font-serif text-lg leading-relaxed">
            Domain knowledge in places where technology decisions carry serious consequences —
            audits, downtime, lives, livelihoods.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 border border-abyss/10">
          {industries.map(([n, g], i) => (
            <div key={n} className={`p-8 reveal ${i % 4 !== 3 ? 'border-r' : ''} ${i < 4 ? 'border-b' : ''} border-abyss/10 hover:bg-paper transition-colors group cursor-default`}>
              <div className="text-4xl text-cyan group-hover:text-gilded transition-colors">{g}</div>
              <div className="mt-4 font-display text-lg">{n}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROCESS ---------- */
function Process() {
  const steps = [
    ['Discover', 'We invest time upfront to understand the business, the systems, and the friction.'],
    ['Strategise', 'A documented roadmap — choices, timelines, resourcing, risk mitigation.'],
    ['Build', 'Agile delivery with regular checkpoints and demos. No black-box weeks.'],
    ['Evolve', 'Go-live support, training, and iteration as the business grows around it.'],
  ];
  return (
    <section className="py-24 md:py-32 bg-paper border-y border-abyss/10">
      <div className="container-x">
        <div className="text-center max-w-xl mx-auto reveal">
          <div className="eyebrow">Our approach</div>
          <h2 className="h-display text-4xl md:text-5xl mt-4">How we work.</h2>
        </div>
        <div className="mt-16 grid md:grid-cols-4 gap-px bg-abyss/10 border border-abyss/10">
          {steps.map(([t, d], i) => (
            <div key={t} className="bg-paper p-8 reveal">
              <div className="font-mono text-cyan2 text-[11px] tracking-[0.3em]">STEP 0{i + 1}</div>
              <div className="mt-4 w-12 h-12 rounded-full border-2 border-abyss flex items-center justify-center font-display text-lg">
                {i + 1}
              </div>
              <h4 className="mt-5 h-display text-xl">{t}</h4>
              <p className="mt-2 text-slateDark font-serif text-[15px] leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CASE STUDIES ---------- */
const cases = [
  { tag: 'erp data finance', industry: 'Financial Services · ERP + Data', title: "Unifying a regional bank's fragmented operations across 12 branches",
    body: "Disconnected legacy systems were causing delayed reporting and compliance risk. We delivered an integrated ERP and data platform — a single source of truth with real-time AI dashboards.",
    metrics: [['62%', 'faster reporting'], ['$4.2M', 'annual savings'], ['99.9%', 'uptime'], ['8 mo', 'delivery']],
    chips: ['ERP', 'Data Architecture', 'BI'], featured: true },
  { tag: 'erp manufacturing', industry: 'Manufacturing · ERP', title: 'Modernising a mid-size manufacturer with SAP S/4HANA',
    body: 'A 15-year-old ERP, frequent downtime, manual workarounds. We led a full S/4HANA migration with zero production disruption.',
    metrics: [['40%', 'inventory ↓'], ['3×', 'order speed']], chips: ['SAP', 'Migration'] },
  { tag: 'software data healthcare', industry: 'Healthcare · Software + AI', title: 'AI-powered patient triage for a multi-site network',
    body: 'A regional health network needed smarter triage across 6 facilities. We built a custom ML platform that reduced wait times and improved care routing.',
    metrics: [['35%', 'wait time ↓'], ['91%', 'accuracy']], chips: ['ML', 'Custom App'] },
  { tag: 'data retail', industry: 'Retail · Data & AI', title: 'Real-time demand forecasting for a national retail chain',
    body: 'A 200-store chain was over-ordering and under-stocking. We deployed a GenAI forecasting engine integrated with their POS systems.',
    metrics: [['28%', 'overstock ↓'], ['$1.8M', 'saved Y1']], chips: ['GenAI', 'Forecasting'] },
  { tag: 'software erp', industry: 'Energy · Software', title: 'Custom field operations portal replacing 4 disconnected tools',
    body: 'Field crews juggled four separate apps. We consolidated everything into a single cloud-native portal.',
    metrics: [['4→1', 'systems'], ['50%', 'admin time saved']], chips: ['Cloud-Native', 'Portal'] },
  { tag: 'data finance erp', industry: 'Private Equity · Data & AI', title: 'Automated risk reporting for a private equity firm',
    body: 'Hundreds of monthly risk reports done by hand. We delivered an automated reporting infrastructure with real-time portfolio scoring.',
    metrics: [['80%', 'automated'], ['2 days → hours', 'report time']], chips: ['Automation', 'BI'] },
];

function Work() {
  const filters = [['all','All'],['software','Software'],['erp','ERP'],['data','Data & AI'],['finance','Finance'],['healthcare','Healthcare'],['manufacturing','Manufacturing'],['retail','Retail']];
  const [f, setF] = useState('all');
  const visible = cases.filter((c) => f === 'all' || c.tag.includes(f));
  const featured = cases.find((c) => c.featured);
  const grid = visible.filter((c) => !c.featured);

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7 reveal">
            <div className="eyebrow">Selected work</div>
            <h2 className="h-display text-4xl md:text-6xl mt-4">Real clients.<br /><em className="text-cyan">Real outcomes.</em></h2>
          </div>
          <p className="md:col-span-5 text-slateDark font-serif text-lg leading-relaxed reveal">
            We let the receipts do the talking. A few of the engagements we&rsquo;re allowed to write about.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-2 reveal">
          {filters.map(([k, n]) => (
            <button key={k} onClick={() => setF(k)}
              className={`px-4 py-2 text-[12px] font-mono tracking-wider uppercase border transition-colors ${
                f === k ? 'bg-abyss text-mist border-abyss' : 'border-abyss/20 text-slateDark hover:border-abyss hover:text-abyss'
              }`}>{n}</button>
          ))}
        </div>

        {featured && (f === 'all' || featured.tag.includes(f)) && (
          <div className="mt-12 grid md:grid-cols-12 border border-abyss/10 bg-paper reveal">
            <div className="md:col-span-5 p-8 md:p-10 bg-abyss text-mist relative">
              <div className="absolute top-0 right-0 bg-gilded text-abyss font-mono text-[10px] tracking-[0.25em] px-3 py-1">FEATURED</div>
              <div className="font-mono text-[11px] tracking-[0.25em] text-gilded">{featured.industry}</div>
              <div className="grid grid-cols-2 gap-px bg-mist/10 mt-10">
                {featured.metrics.map(([n, l]) => (
                  <div key={l} className="bg-abyss p-5">
                    <div className="font-display text-3xl text-gilded">{n}</div>
                    <div className="text-[11px] uppercase tracking-wider text-mist/60 mt-1">{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-7 p-8 md:p-12">
              <h3 className="h-display text-2xl md:text-3xl leading-snug">{featured.title}</h3>
              <p className="mt-5 text-slateDark font-serif text-[16px] leading-[1.85]">{featured.body}</p>
              <div className="flex flex-wrap gap-2 mt-6">
                {featured.chips.map((c) => <span key={c} className="text-[11px] font-mono tracking-wider uppercase border border-abyss/20 px-3 py-1 text-slate">{c}</span>)}
              </div>
              <a href="#" className="inline-flex items-center gap-2 mt-8 font-medium text-cyan hover:gap-3 transition-all">Read the full study {I.arrow}</a>
            </div>
          </div>
        )}

        <div className="mt-6 grid md:grid-cols-3 gap-px bg-abyss/10 border border-abyss/10">
          {grid.map((c) => (
            <article key={c.title} className="bg-paper p-7 hover:bg-mist transition-colors group flex flex-col reveal">
              <div className="font-mono text-[10px] tracking-[0.25em] text-cyan2">{c.industry}</div>
              <h4 className="h-display text-xl mt-3 leading-snug">{c.title}</h4>
              <p className="mt-3 text-slateDark font-serif text-[14px] leading-relaxed flex-1">{c.body}</p>
              <div className="flex gap-6 mt-5">
                {c.metrics.map(([n, l]) => (
                  <div key={l}>
                    <div className="font-display text-2xl text-cyan">{n}</div>
                    <div className="text-[11px] text-slate mt-0.5">{l}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between pt-5 mt-5 border-t border-abyss/10">
                <div className="flex flex-wrap gap-1.5">
                  {c.chips.map((ch) => <span key={ch} className="text-[10px] font-mono tracking-wider uppercase border border-abyss/15 px-2 py-0.5 text-slate">{ch}</span>)}
                </div>
                <span className="w-7 h-7 border border-abyss/20 flex items-center justify-center group-hover:border-abyss group-hover:bg-abyss group-hover:text-mist transition-colors">{I.arrow}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- MANAGED SERVICES TABS ---------- */
function Managed() {
  const [tab, setTab] = useState('msp');
  const tabs = [['msp', 'Managed IT'], ['talent', 'Talent'], ['plans', 'Engagement Models']];

  const mspCards = [
    ['Infrastructure', 'End-to-end management of cloud, on-prem, hybrid — servers, storage, networking.', ['AWS · Azure · GCP', 'Patch management', 'DR & backup']],
    ['Cybersecurity', 'Multi-layered protection with built-in compliance for regulated industries.', ['24/7 MDR', 'Endpoint protection', 'SOC 2 · HIPAA · PCI']],
    ['Help Desk', 'Human-first support, available around the clock via phone, chat, remote.', ['Tier 1–3 coverage', 'SLA-backed times', 'Lifecycle management']],
    ['Application Mgmt', 'Keep critical apps at peak performance — proactively, not reactively.', ['ERP (SAP · Oracle)', 'Performance tuning', 'Release management']],
    ['Data Operations', 'Managed pipelines, warehouses, and BI platforms — fresh, clean, available.', ['Pipeline monitoring', 'BI admin', 'Model performance']],
    ['Governance & Risk', 'Audit-ready GRC aligned with industry frameworks and regulations.', ['Risk register', 'Policy enforcement', 'Vendor risk']],
  ];

  const talentCards = [
    ['Staff Augmentation', 'Skilled professionals embedded into your team — on short notice, for as long as needed.'],
    ['Dedicated Team', 'We recruit, vet, and manage a fully dedicated team that operates as your extension.'],
    ['Contract-to-Hire', 'Start contract, convert to full-time when the fit is right. Reduce hiring risk.'],
    ['Offshore / Nearshore', 'Cost-effective global delivery with the management structure to make it work.'],
  ];

  const roles = [
    ['Software Development', ['Full Stack', 'Frontend', 'Backend', 'Mobile', 'DevOps', 'Cloud Architect', 'QA', 'Solution Architect']],
    ['ERP', ['SAP', 'Oracle', 'Dynamics 365', 'PMs', 'Functional Analyst', 'ABAP', 'Integration', 'Change Mgmt']],
    ['Data & AI', ['Data Engineer', 'Data Scientist', 'ML Engineer', 'BI Developer', 'AI / LLM', 'Data Architect', 'Analytics Eng.', 'CDO Advisory']],
  ];

  const plans = [
    { name: 'Essential', sub: 'Core managed coverage', body: 'A reliable starting point for organisations that want professional IT support without full outsourcing.', items: ['Help desk (business hours)', 'Infrastructure monitoring', 'Security patching', 'Monthly reporting', 'Account manager'], featured: false },
    { name: 'Enterprise', sub: 'Full-spectrum managed services', body: 'Complete IT management for organisations needing 24/7 coverage and proactive partnership.', items: ['24/7 help desk + NOC', 'Full app & infra management', 'MDR — detection & response', 'Compliance management', 'Quarterly business reviews', 'Vendor management included'], featured: true },
    { name: 'Strategic', sub: 'Managed + embedded talent', body: 'The most integrated model — we operate as your full technology organisation.', items: ['Everything in Enterprise', 'Embedded team members', 'CTO/CIO advisory', 'Roadmap development', 'Custom SLAs', 'Priority talent pipeline'], featured: false },
  ];

  return (
    <section id="managed" className="py-24 md:py-32 bg-mist border-y border-abyss/10">
      <div className="container-x">
        <div className="max-w-2xl reveal">
          <div className="eyebrow">Managed services & talent</div>
          <h2 className="h-display text-4xl md:text-6xl mt-4">
            Your technology.<br />Quietly <em className="text-cyan2">handled</em>.
          </h2>
          <p className="mt-6 text-slateDark font-serif text-lg leading-relaxed">
            From end-to-end MSP coverage to on-demand talent — the right people on the right problem,
            without the agency theatre.
          </p>
        </div>

        <div className="mt-12 flex gap-1 border-b border-abyss/15">
          {tabs.map(([k, n]) => (
            <button key={k} onClick={() => setTab(k)}
              className={`px-5 md:px-7 py-4 text-[13px] tracking-wider uppercase font-medium border-b-2 -mb-px transition-colors ${
                tab === k ? 'border-cyan text-abyss' : 'border-transparent text-slate hover:text-abyss'
              }`}>{n}</button>
          ))}
        </div>

        {tab === 'msp' && (
          <div className="grid md:grid-cols-3 gap-px bg-abyss/10 border-x border-b border-abyss/10 mt-0">
            {mspCards.map(([t, b, list]) => (
              <div key={t} className="bg-paper p-7 reveal">
                <h4 className="h-display text-xl">{t}</h4>
                <p className="mt-2 text-slateDark font-serif text-[15px] leading-relaxed">{b}</p>
                <ul className="mt-5 space-y-1.5">
                  {list.map((l) => <li key={l} className="text-[13px] text-slate pl-4 relative before:content-[''] before:w-2 before:h-px before:bg-cyan before:absolute before:left-0 before:top-2.5">{l}</li>)}
                </ul>
              </div>
            ))}
          </div>
        )}

        {tab === 'talent' && (
          <div className="grid md:grid-cols-12 gap-10 mt-12">
            <div className="md:col-span-5 grid sm:grid-cols-2 gap-4">
              {talentCards.map(([t, b]) => (
                <div key={t} className="card p-5 reveal">
                  <h4 className="font-display text-lg">{t}</h4>
                  <p className="mt-2 text-slateDark font-serif text-[14px] leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
            <div className="md:col-span-7">
              <div className="eyebrow reveal">Roles we place</div>
              <div className="grid md:grid-cols-1 gap-px bg-abyss/10 border border-abyss/10 mt-4">
                {roles.map(([d, list]) => (
                  <div key={d} className="bg-paper p-6 reveal">
                    <div className="font-mono text-[10px] tracking-[0.3em] text-cyan2">{d}</div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {list.map((r) => <span key={r} className="text-[12px] border border-abyss/20 px-3 py-1 text-slateDark">{r}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === 'plans' && (
          <div className="grid md:grid-cols-3 gap-5 mt-12">
            {plans.map((p) => (
              <div key={p.name} className={`p-8 relative reveal ${p.featured ? 'bg-abyss text-mist' : 'card'}`}>
                {p.featured && <div className="absolute top-0 right-0 bg-gilded text-abyss font-mono text-[10px] tracking-[0.25em] px-3 py-1">MOST POPULAR</div>}
                <h3 className="h-display text-2xl">{p.name}</h3>
                <div className={`text-[12px] font-mono tracking-[0.2em] mt-1 ${p.featured ? 'text-gilded' : 'text-cyan2'}`}>{p.sub.toUpperCase()}</div>
                <p className={`mt-4 font-serif text-[15px] leading-relaxed ${p.featured ? 'text-mist/70' : 'text-slateDark'}`}>{p.body}</p>
                <ul className="mt-6 space-y-2">
                  {p.items.map((i) => <li key={i} className={`text-[13px] pl-4 relative before:content-[''] before:w-2 before:h-px before:absolute before:left-0 before:top-2.5 ${p.featured ? 'text-mist/70 before:bg-gilded' : 'text-slate before:bg-cyan'}`}>{i}</li>)}
                </ul>
                <a href="#contact" className={`mt-7 inline-flex items-center gap-2 font-medium ${p.featured ? 'text-gilded' : 'text-cyan'} hover:gap-3 transition-all`}>Get started {I.arrow}</a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------- CAREERS (NEW) ---------- */
const openings = [
  { role: 'Senior Software Engineer', team: 'Software', loc: 'Dallas / Remote (US)', type: 'Full-time' },
  { role: 'ERP Functional Consultant — SAP', team: 'ERP', loc: 'Remote (US)', type: 'Full-time' },
  { role: 'ML Engineer (LLM / GenAI)', team: 'Data & AI', loc: 'Remote (Global)', type: 'Full-time' },
  { role: 'Site Reliability Engineer', team: 'Managed Services', loc: 'Dallas, TX', type: 'Full-time' },
  { role: 'Data Engineer', team: 'Data & AI', loc: 'Remote (US)', type: 'Contract → Hire' },
  { role: 'Engineering Internship — Summer 2026', team: 'Software', loc: 'Dallas, TX', type: 'Internship' },
];

function Careers() {
  return (
    <section id="careers" className="py-24 md:py-32 relative overflow-hidden">
      {/* corner squiggle */}
      <svg className="absolute -top-6 left-[5%] w-[140px] text-gilded opacity-70 hidden md:block" viewBox="0 0 200 60" fill="none">
        <path d="M2 30 C 30 5, 60 55, 90 30 S 150 5, 198 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>

      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7 reveal">
            <div className="eyebrow flex items-center gap-3"><span className="rule" /> Careers</div>
            <h2 className="h-display text-4xl md:text-6xl mt-5">
              We&rsquo;re hiring people who<br />still <em className="text-cyan">care about the craft</em>.
            </h2>
          </div>
          <p className="md:col-span-5 text-slateDark font-serif text-lg leading-relaxed reveal">
            No ping-pong tables, no foosball, no “rockstar ninjas”. Just senior practitioners,
            real ownership, and the chance to do work you&rsquo;re proud to put your name on.
          </p>
        </div>

        {/* values */}
        <div className="mt-16 grid md:grid-cols-4 gap-px bg-abyss/10 border border-abyss/10 reveal">
          {[
            ['Quiet excellence', 'Loud doesn\'t equal good. We hire people whose work speaks for them.'],
            ['Senior by default', 'No junior pyramid scheme. Our average team member has 10+ years in the trade.'],
            ['Slow hiring', 'We&apos;d rather wait six months than rush a bad fit. Tenure here is measured in years.'],
            ['Real ownership', 'Equity, profit-share, and the autonomy to make calls without three layers of approval.'],
          ].map(([t, b]) => (
            <div key={t} className="bg-paper p-7">
              <h4 className="h-display text-xl">{t}</h4>
              <p className="mt-2 text-slateDark font-serif text-[15px] leading-relaxed">{b}</p>
            </div>
          ))}
        </div>

        {/* benefits ribbon */}
        <div className="mt-12 bg-abyss text-mist p-8 md:p-10 reveal">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] text-gilded">COMPENSATION</div>
              <ul className="mt-4 space-y-2 font-serif text-[15px] text-mist/80">
                <li>· Top-of-band salary</li>
                <li>· Profit-sharing pool</li>
                <li>· Meaningful equity for senior roles</li>
                <li>· $5k annual learning budget</li>
              </ul>
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] text-gilded">LIFE</div>
              <ul className="mt-4 space-y-2 font-serif text-[15px] text-mist/80">
                <li>· Remote-first, async-friendly</li>
                <li>· 6 weeks paid time off</li>
                <li>· 4-week paid sabbatical at year five</li>
                <li>· Full family healthcare coverage</li>
              </ul>
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] text-gilded">CULTURE</div>
              <ul className="mt-4 space-y-2 font-serif text-[15px] text-mist/80">
                <li>· No on-call rotations for engineers without warning</li>
                <li>· Flat structure — opinions not titles</li>
                <li>· Two team retreats / year (last one: Lisbon)</li>
                <li>· Open salaries internally</li>
              </ul>
            </div>
          </div>
        </div>

        {/* openings */}
        <div className="mt-16 reveal">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <h3 className="h-display text-3xl">Open roles</h3>
            <div className="font-mono text-[12px] text-slate">{openings.length} positions · updated this week</div>
          </div>
          <div className="border-t border-abyss/15">
            {openings.map((o) => (
              <a key={o.role} href="#contact"
                className="grid md:grid-cols-12 gap-4 py-6 border-b border-abyss/15 hover:bg-paper transition-colors group items-center">
                <div className="md:col-span-5">
                  <h4 className="font-display text-xl group-hover:text-cyan transition-colors">{o.role}</h4>
                </div>
                <div className="md:col-span-2 text-[13px] text-cyan2 font-mono tracking-wider uppercase">{o.team}</div>
                <div className="md:col-span-3 text-[14px] text-slateDark">{o.loc}</div>
                <div className="md:col-span-2 flex items-center justify-between">
                  <span className="text-[13px] text-slate">{o.type}</span>
                  <span className="w-9 h-9 border border-abyss/25 flex items-center justify-center group-hover:bg-abyss group-hover:text-mist group-hover:border-abyss transition-colors">{I.arrow}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* don't see your role */}
        <div className="mt-12 grid md:grid-cols-2 gap-px bg-abyss/10 border border-abyss/10 reveal">
          <div className="bg-paper p-8">
            <div className="font-mono text-[10px] tracking-[0.3em] text-cyan2">DON&apos;T SEE YOUR ROLE?</div>
            <h4 className="h-display text-2xl mt-3">Pitch us anyway.</h4>
            <p className="mt-3 text-slateDark font-serif text-[15px]">
              We hire opportunistically when the right person shows up. If you&rsquo;ve done serious work,
              tell us about it.
            </p>
            <a href="mailto:careers@threegroups.com" className="mt-5 btn-solid inline-flex">careers@threegroups.com</a>
          </div>
          <div className="bg-paper p-8">
            <div className="font-mono text-[10px] tracking-[0.3em] text-cyan2">HIRING PROCESS</div>
            <ol className="mt-3 space-y-3 font-serif text-[15px] text-slateDark">
              <li><span className="font-display text-cyan mr-2">01.</span> Intro conversation — 30 minutes, no whiteboard.</li>
              <li><span className="font-display text-cyan mr-2">02.</span> Take-home or paired session — your choice.</li>
              <li><span className="font-display text-cyan mr-2">03.</span> Team conversations — meet the people you&rsquo;d work with.</li>
              <li><span className="font-display text-cyan mr-2">04.</span> Offer within 5 business days. No ghosting. Ever.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- JOURNAL / BLOG ---------- */
const posts = [
  { cat: 'Data & AI', title: 'Why most enterprise AI projects fail before they start — and how to fix that', author: 'Jordan Rivera', date: 'Apr 28, 2025', read: '8 min', initials: 'JR', featured: true,
    blurb: 'Organisations are pouring investment into AI initiatives, yet the majority stall before delivering business value. The problem isn\'t the technology — it\'s the absence of a data foundation capable of supporting it.' },
  { cat: 'ERP', title: 'SAP S/4HANA vs Oracle Fusion: which ERP fits your business in 2025?', author: 'Marcus Kim', date: 'Apr 18, 2025', read: '6 min', initials: 'MK',
    blurb: 'Both platforms have matured, but they serve different organisational profiles. Real-world tradeoffs across cost, complexity, and flexibility.' },
  { cat: 'Software', title: 'The hidden cost of legacy systems — and why "we\'ll fix it later" always loses', author: 'Aisha Longford', date: 'Apr 11, 2025', read: '7 min', initials: 'AL',
    blurb: 'Every quarter you defer modernisation, technical debt compounds. We quantify what staying on legacy actually costs.' },
  { cat: 'Data & AI', title: 'What a Chief Data Officer actually needs from their technology partner', author: 'Jordan Rivera', date: 'Apr 4, 2025', read: '5 min', initials: 'JR',
    blurb: 'After dozens of conversations with CDOs across industries, clear patterns have emerged. Most vendors aren\'t keeping up.' },
  { cat: 'Leadership', title: 'Why the best technology decisions start with business strategy, not tech specs', author: 'Three Groups', date: 'Mar 12, 2025', read: '6 min', initials: 'TG',
    blurb: 'Too many projects begin with a solution in search of a problem. We make the case for leading with outcomes, every time.' },
  { cat: 'Software', title: 'API-first architecture: the foundation for every modern integration strategy', author: 'Aisha Longford', date: 'Mar 5, 2025', read: '7 min', initials: 'AL',
    blurb: 'Organisations that build API-first are faster to integrate, easier to scale, and far less likely to end up with patchwork.' },
];
function Journal() {
  const featured = posts.find((p) => p.featured);
  const grid = posts.filter((p) => !p.featured);
  return (
    <section id="journal" className="py-24 md:py-32 bg-paper border-y border-abyss/10">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8 reveal">
            <div className="eyebrow">The journal</div>
            <h2 className="h-display text-4xl md:text-6xl mt-4">Practical thinking,<br />from people doing the <em className="text-abyss2">actual work</em>.</h2>
          </div>
          <div className="md:col-span-4 reveal">
            <div className="flex border border-abyss/20 bg-mist">
              <input placeholder="Search articles…" className="flex-1 bg-transparent outline-none px-4 py-3 text-[14px] placeholder:text-slate" />
              <button className="bg-abyss text-mist px-4">{I.search}</button>
            </div>
          </div>
        </div>

        {featured && (
          <div className="mt-12 grid md:grid-cols-12 border border-abyss/10 bg-mist reveal">
            <div className="md:col-span-5 bg-abyss2 text-mist p-10 relative overflow-hidden flex flex-col justify-between min-h-[320px]">
              <div className="flex gap-2">
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase bg-gilded text-abyss px-2.5 py-1">{featured.cat}</span>
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase border border-mist/40 px-2.5 py-1">Latest</span>
              </div>
              <div className="font-display text-[80px] leading-none opacity-20 select-none">¶</div>
            </div>
            <div className="md:col-span-7 p-10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-mist border border-abyss/20 flex items-center justify-center font-mono text-[11px]">{featured.initials}</div>
                <div>
                  <div className="text-[13px] font-medium">{featured.author}</div>
                  <div className="text-[11px] text-slate">{featured.date}</div>
                </div>
              </div>
              <h3 className="h-display text-2xl md:text-3xl mt-5 leading-snug">{featured.title}</h3>
              <p className="mt-4 text-slateDark font-serif text-[16px] leading-[1.85]">{featured.blurb}</p>
              <div className="flex items-center justify-between mt-7">
                <span className="text-[12px] text-slate">{featured.read} read</span>
                <a href="#" className="font-medium text-cyan inline-flex items-center gap-2 hover:gap-3 transition-all">Read article {I.arrow}</a>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 grid md:grid-cols-3 gap-px bg-abyss/10 border border-abyss/10">
          {grid.map((p) => (
            <article key={p.title} className="bg-mist p-6 hover:bg-mist transition-colors flex flex-col reveal">
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-cyan2 flex items-center gap-2"><span className="w-4 h-px bg-cyan2" />{p.cat}</div>
              <h4 className="h-display text-xl mt-3 leading-snug flex-1">{p.title}</h4>
              <p className="mt-3 text-slateDark font-serif text-[14px] leading-relaxed">{p.blurb}</p>
              <div className="flex items-center justify-between pt-5 mt-5 border-t border-abyss/10">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-mist border border-abyss/15 flex items-center justify-center font-mono text-[10px]">{p.initials}</div>
                  <div>
                    <div className="text-[12px] font-medium">{p.author}</div>
                    <div className="text-[10px] text-slate">{p.date}</div>
                  </div>
                </div>
                <span className="text-[11px] text-slate">{p.read}</span>
              </div>
            </article>
          ))}
        </div>

        {/* newsletter */}
        <div className="mt-16 grid md:grid-cols-12 gap-10 items-center bg-mist p-10 border border-abyss/10 reveal">
          <div className="md:col-span-5">
            <div className="eyebrow">Stay sharp</div>
            <h3 className="h-display text-3xl mt-3">Get one careful email a month.</h3>
            <p className="mt-3 text-slateDark font-serif">No fluff. No drip campaigns. Just a single thoughtful piece on enterprise tech, when we have something worth saying.</p>
          </div>
          <form className="md:col-span-7 flex flex-col sm:flex-row gap-2">
            <input placeholder="First name" className="bg-paper border border-abyss/15 px-4 py-3 sm:max-w-[180px] outline-none focus:border-abyss" />
            <input placeholder="Work email address" className="bg-paper border border-abyss/15 px-4 py-3 flex-1 outline-none focus:border-abyss" />
            <button className="bg-abyss text-mist px-6 py-3 hover:bg-cyan transition-colors font-medium">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA / CONTACT ---------- */
function CTA() {
  return (
    <section id="contact" className="py-24 md:py-36 bg-abyss text-mist relative overflow-hidden">
      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]" width="900" height="500" viewBox="0 0 900 500" fill="none">
        <circle cx="450" cy="250" r="240" stroke="#EEF3F7" />
        <circle cx="450" cy="250" r="180" stroke="#EEF3F7" />
        <circle cx="450" cy="250" r="120" stroke="#EEF3F7" />
      </svg>
      <div className="container-x text-center relative">
        <div className="eyebrow text-gilded">Let&rsquo;s build something</div>
        <h2 className="h-display text-5xl md:text-7xl mt-5 max-w-4xl mx-auto leading-[1.05]">
          Ready to build something <em className="text-gilded">that actually works</em>?
        </h2>
        <p className="mt-7 text-mist/70 font-serif text-lg max-w-xl mx-auto">
          Tell us about the goal. We&rsquo;ll tell you, plainly, whether we&rsquo;re the right team for it.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="mailto:hello@threegroups.com" className="bg-gilded text-abyss px-8 py-4 font-medium hover:bg-mist transition-colors">Schedule a free consultation</a>
          <a href="mailto:hello@threegroups.com" className="border border-mist/40 px-8 py-4 font-medium hover:bg-mist hover:text-abyss transition-colors">hello@threegroups.com</a>
        </div>
        <div className="mt-16 grid sm:grid-cols-3 gap-px bg-mist/10 max-w-3xl mx-auto">
          {[['MSP', 'msp@threegroups.com'], ['Talent', 'talent@threegroups.com'], ['Careers', 'careers@threegroups.com']].map(([t, e]) => (
            <a key={t} href={`mailto:${e}`} className="bg-abyss hover:bg-slateDark p-6 transition-colors">
              <div className="font-mono text-[10px] tracking-[0.3em] text-gilded">{t.toUpperCase()}</div>
              <div className="mt-2 font-serif text-mist/85">{e}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="bg-mist border-t border-abyss/10 py-16">
      <div className="container-x grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-5 text-slateDark font-serif text-[15px] max-w-xs leading-relaxed">
            Three disciplines. One trusted partner. Helping businesses modernise their operations,
            unify their data, and move with intent.
          </p>
        </div>
        {[
          ['Services', ['Software', 'ERP', 'Data & AI', 'Managed Services', 'Talent']],
          ['Company', ['About', 'Work', 'Journal', 'Careers', 'Press']],
          ['Contact', ['hello@threegroups.com', 'LinkedIn', 'Twitter', 'Schedule a call']],
        ].map(([t, items]) => (
          <div key={t} className="md:col-span-2">
            <div className="font-mono text-[10px] tracking-[0.3em] text-cyan2">{t.toUpperCase()}</div>
            <ul className="mt-4 space-y-2.5">
              {items.map((i) => <li key={i}><a href="#" className="text-[14px] text-slateDark hover:text-cyan transition-colors">{i}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="container-x mt-12 pt-6 border-t border-abyss/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-[12px] text-slate font-mono">
        <span>© {new Date().getFullYear()} Three Groups · All rights reserved.</span>
        <span>Built carefully <span className="text-cyan">●</span> in Dallas, TX</span>
      </div>
    </footer>
  );
}

/* ---------- APP ---------- */
export default function App() {
  useReveal();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Why />
        <Industries />
        <Process />
        <Work />
        <Managed />
        <Careers />
        <Journal />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
