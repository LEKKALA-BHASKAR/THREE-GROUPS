import React, { useEffect, useState } from 'react';
import { Link, NavLink, Navigate, Outlet } from 'react-router-dom';
import { api, auth } from '../api.js';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!auth.token) { setLoading(false); return; }
    api.me().then((r) => setUser(r.user)).catch(() => auth.clear()).finally(() => setLoading(false));
  }, []);
  return { user, loading };
}

export function RequireAuth({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <div className="p-12 text-slate">Checking session…</div>;
  if (!user) return <Navigate to="/admin/login" replace />;
  return children;
}

export default function AdminLayout() {
  const links = [
    ['Dashboard', '/admin'],
    ['Pages', '/admin/pages'],
    ['Jobs', '/admin/jobs'],
    ['Posts', '/admin/posts'],
    ['Case Studies', '/admin/cases'],
    ['Leads', '/admin/leads'],
  ];
  return (
    <div className="min-h-screen bg-mist flex">
      <aside className="w-64 bg-abyss text-mist p-6 sticky top-0 h-screen">
        <Link to="/" className="block">
          <div className="font-display font-semibold text-[15px] tracking-[0.18em]">THREE GROUPS</div>
          <div className="font-mono text-[9px] tracking-[0.3em] text-gilded mt-1">ADMIN CONSOLE</div>
        </Link>
        <nav className="mt-10 flex flex-col gap-1">
          {links.map(([n, h]) => (
            <NavLink key={h} to={h} end={h === '/admin'}
              className={({ isActive }) => `px-3 py-2 text-[13px] tracking-wide ${isActive ? 'bg-mist/10 text-gilded' : 'text-mist/70 hover:text-mist'}`}>
              {n}
            </NavLink>
          ))}
        </nav>
        <button onClick={() => { auth.clear(); location.href = '/admin/login'; }}
          className="mt-10 text-[12px] text-mist/50 hover:text-cyan tracking-widest uppercase">Log out</button>
      </aside>
      <div className="flex-1 p-8 md:p-12">
        <Outlet />
      </div>
    </div>
  );
}
