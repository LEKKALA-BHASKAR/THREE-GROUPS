import React from 'react';
import { usePage, PageHero } from '../components/usePage.jsx';

export function Privacy() { return <Doc slug="privacy" eyebrow="Legal" title="Privacy" accent="Policy" />; }
export function Terms()   { return <Doc slug="terms"   eyebrow="Legal" title="Terms of" accent="Service" />; }

function Doc({ slug, eyebrow, title, accent }) {
  const [c] = usePage(slug, { updated: '', sections: [] });
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} accent={accent} body={c.updated ? `Last updated ${c.updated}` : ''} />
      <section style={{ paddingTop: 0 }}>
        <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 36 }}>
          {(c.sections || []).map((s, i) => (
            <div key={i}>
              <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--white)', marginBottom: 12 }}>{s.h}</h2>
              <p style={{ color: 'var(--muted)', lineHeight: 1.85, fontSize: 15 }}>{s.p}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
