import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export const Logo = () => (
  <Link to="/" className="tg-logo">
    <span className="tg-logo-mark"><span /><span /><span /></span>
    <span className="tg-logo-text">
      <strong>THREE&nbsp;GROUPS</strong>
      <em>SOFTWARE&nbsp;DEVELOPMENT · ERP · DATA &amp; AI</em>
    </span>
  </Link>
);

const navLinks = [
  ['Services', '/services'],
  ['Industries', '/industries'],
  ['Work', '/work'],
  ['Journal', '/journal'],
  ['About', '/about'],
  ['Careers', '/careers'],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <nav className="tg-nav">
      <div className="tg-nav-inner">
        <Logo />
        <ul className={`tg-nav-links ${open ? 'open' : ''}`}>
          {navLinks.map(([n, h]) => (
            <li key={h}>
              <NavLink to={h} className={({ isActive }) => (isActive ? 'active' : '')}>
                {n}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/contact" className="tg-nav-cta">Get Started</Link>
          </li>
        </ul>
        <button className="tg-nav-burger" aria-label="menu" onClick={() => setOpen(!open)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="tg-footer">
      <div className="tg-footer-top">
        <div className="tg-footer-brand">
          <Logo />
          <p>Three disciplines. One trusted partner. We help businesses modernise their operations, unify their data, and unlock the power of AI.</p>
        </div>
        <div className="tg-footer-col">
          <h5>Services</h5>
          <ul>
            <li><Link to="/services/software">Software Development</Link></li>
            <li><Link to="/services/erp">ERP Solutions</Link></li>
            <li><Link to="/services/data">Data &amp; AI</Link></li>
            <li><Link to="/services/managed">Managed Services</Link></li>
            <li><Link to="/services/talent">Talent Services</Link></li>
          </ul>
        </div>
        <div className="tg-footer-col">
          <h5>Company</h5>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/work">Case Studies</Link></li>
            <li><Link to="/journal">Journal</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="tg-footer-col">
          <h5>Contact</h5>
          <ul>
            <li><a href="mailto:hello@threegroups.com">hello@threegroups.com</a></li>
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/terms">Terms</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </div>
      </div>
      <div className="tg-footer-divider" />
      <div className="tg-footer-bottom">
        <span>© {new Date().getFullYear()} Three Groups. All rights reserved.</span>
        <span>Built with <span style={{ color: 'var(--teal)' }}>▲</span> in Dallas, TX</span>
      </div>
    </footer>
  );
}

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
