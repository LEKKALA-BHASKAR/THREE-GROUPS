import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="page-hero" style={{ textAlign: 'center', padding: '160px 5% 120px' }}>
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="page-hero-inner" style={{ margin: '0 auto', textAlign: 'center' }}>
        <div className="eyebrow">404</div>
        <h1>This page<br /><span>wandered off.</span></h1>
        <p style={{ margin: '0 auto' }}>Try the <Link to="/" style={{ color: 'var(--teal)' }}>homepage</Link> or <Link to="/contact" style={{ color: 'var(--teal)' }}>say hello</Link>.</p>
      </div>
    </section>
  );
}
