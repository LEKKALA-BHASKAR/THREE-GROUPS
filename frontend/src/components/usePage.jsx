import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api.js';

export function usePage(slug, fallback = {}) {
  const [content, setContent] = useState(fallback);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    let dead = false;
    api.getPage(slug)
      .then((r) => { if (!dead) { setContent({ ...fallback, ...(r.content || {}) }); setLoaded(true); } })
      .catch(() => { if (!dead) setLoaded(true); });
    return () => { dead = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);
  return [content, loaded];
}

export function PageHero({ eyebrow, title, body, accent }) {
  return (
    <section className="page-hero">
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="page-hero-inner">
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        {title && (
          <h1>
            {accent ? (
              <>
                {title}<br /><span>{accent}</span>
              </>
            ) : title}
          </h1>
        )}
        {body && <p>{body}</p>}
      </div>
    </section>
  );
}

export function CTASection({ eyebrow = 'Get Started', title = 'Ready to Build Something', accent = 'That Actually Works?', body = "Let's talk about your goals. Our team is ready to help you find the right solution.", primaryHref = '/contact', primaryLabel = 'Schedule a Free Consultation', secondaryHref = 'mailto:hello@threegroups.com', secondaryLabel = 'hello@threegroups.com' }) {
  return (
    <section className="cta-section">
      <div className="cta-glow" />
      <div className="section-label" style={{ display: 'block', marginBottom: 16 }}>{eyebrow}</div>
      <h2>{title}<br /><span>{accent}</span></h2>
      <p>{body}</p>
      <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
        {primaryHref.startsWith('/') ? (
          <Link to={primaryHref} className="btn-primary">{primaryLabel}</Link>
        ) : (
          <a href={primaryHref} className="btn-primary">{primaryLabel}</a>
        )}
        <a href={secondaryHref} className="btn-outline">{secondaryLabel}</a>
      </div>
    </section>
  );
}

export function Reveal({ children, delay = 0, className = '' }) {
  // simple wrapper that uses .reveal — IntersectionObserver hook below activates them
  const cls = ['reveal', delay ? `d${delay}` : '', className].filter(Boolean).join(' ');
  return <div className={cls}>{children}</div>;
}

/* attach IntersectionObserver once */
let observer;
export function useReveal() {
  useEffect(() => {
    if (!observer) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
        });
      }, { threshold: 0.08 });
    }
    document.querySelectorAll('.reveal:not(.visible)').forEach((el) => observer.observe(el));
  });
}
