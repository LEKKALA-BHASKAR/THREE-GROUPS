import React, { useState } from 'react';
import { api } from '../api.js';
import { useReveal } from '../components/usePage.jsx';

export default function Contact() {
  useReveal();
  const [form, setForm] = useState({ name: '', email: '', company: '', interest: 'general', message: '' });
  const [done, setDone] = useState(false);
  const [err, setErr] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setErr(null);
    try {
      await api.submitLead({ kind: 'contact', name: form.name, email: form.email, company: form.company, message: form.message, meta: { interest: form.interest } });
      setDone(true);
    } catch (ex) {
      setErr(ex.message || 'Something went wrong');
    }
  };

  return (
    <>
      <section className="page-hero">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="page-hero-inner">
          <div className="eyebrow">Let's Build Something</div>
          <h1>Tell Us About<br /><span>The Goal.</span></h1>
          <p>We'll tell you, plainly, whether we're the right team for it. No hard sell, no follow-up sequence — just an honest conversation.</p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 60, maxWidth: 1100, margin: '0 auto', alignItems: 'start' }} className="form-grid-wrap">
          <div className="reveal">
            <div className="section-label">Send a message</div>
            {done ? (
              <div style={{ padding: 32, border: '1px solid rgba(0,200,212,0.3)', background: 'var(--card)', marginTop: 20 }}>
                <h3 style={{ marginBottom: 10 }}>Got it.</h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.7 }}>Thanks for reaching out. A senior practitioner will reply personally within one business day.</p>
              </div>
            ) : (
              <form onSubmit={submit} style={{ marginTop: 20 }}>
                <div className="form-grid" style={{ marginBottom: 16 }}>
                  <div className="field">
                    <label>Name</label>
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div className="field">
                    <label>Work Email</label>
                    <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </div>
                </div>
                <div className="form-grid" style={{ marginBottom: 16 }}>
                  <div className="field">
                    <label>Company</label>
                    <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                  </div>
                  <div className="field">
                    <label>Interest</label>
                    <select value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })}>
                      <option value="general">General enquiry</option>
                      <option value="software">Software Development</option>
                      <option value="erp">ERP Solutions</option>
                      <option value="data">Data &amp; AI</option>
                      <option value="msp">Managed Services</option>
                      <option value="talent">Talent Services</option>
                    </select>
                  </div>
                </div>
                <div className="field" style={{ marginBottom: 20 }}>
                  <label>What are you trying to solve?</label>
                  <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us a little about your situation — the goal, the timeline, the constraints." />
                </div>
                {err && <p style={{ color: '#ff7770', marginBottom: 12 }}>{err}</p>}
                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            )}
          </div>

          <aside className="reveal d1" style={{ background: 'var(--card)', border: '1px solid rgba(0,200,212,0.12)', padding: '36px 32px' }}>
            <div className="section-label">Direct Contacts</div>
            <ul style={{ listStyle: 'none', marginTop: 18, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                ['General', 'hello@threegroups.com'],
                ['Managed Services', 'msp@threegroups.com'],
                ['Talent Team', 'talent@threegroups.com'],
                ['Careers', 'careers@threegroups.com'],
              ].map(([k, e]) => (
                <li key={e}>
                  <div style={{ fontSize: 11, letterSpacing: 2, color: 'var(--teal)', fontWeight: 700, textTransform: 'uppercase', marginBottom: 4 }}>{k}</div>
                  <a href={`mailto:${e}`} style={{ color: 'var(--white)', fontSize: 14 }}>{e}</a>
                </li>
              ))}
            </ul>
            <div className="tg-footer-divider" style={{ margin: '24px 0' }} />
            <div style={{ fontSize: 11, letterSpacing: 2, color: 'var(--teal)', fontWeight: 700, textTransform: 'uppercase' }}>Office</div>
            <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.7, marginTop: 8 }}>The Mercantile Building<br />1700 Pacific Ave, Suite 2400<br />Dallas, TX 75201</p>
            <div style={{ fontSize: 11, letterSpacing: 2, color: 'var(--teal)', fontWeight: 700, textTransform: 'uppercase', marginTop: 24 }}>Hours</div>
            <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.7, marginTop: 8 }}>Mon–Fri · 8:00am – 6:00pm CT<br />Emergency support: 24/7 for managed clients</p>
          </aside>
        </div>
      </section>
    </>
  );
}
