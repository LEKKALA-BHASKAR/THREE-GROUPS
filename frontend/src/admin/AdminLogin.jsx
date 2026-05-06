import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api, auth } from '../api.js';

export default function AdminLogin() {
  const [email, setEmail] = useState('admin@threegroups.com');
  const [password, setPassword] = useState('admin123');
  const [err, setErr] = useState('');
  const nav = useNavigate();
  async function submit(e) {
    e.preventDefault();
    setErr('');
    try {
      const r = await api.login(email, password);
      auth.set(r.token);
      nav('/admin');
    } catch (e) { setErr(e.message); }
  }
  return (
    <div className="min-h-screen bg-abyss text-mist flex items-center justify-center p-6">
      <form onSubmit={submit} className="w-full max-w-md bg-mist text-abyss p-8 shadow-crafted">
        <div className="font-mono text-[10px] tracking-[0.3em] text-cyan2">ADMIN CONSOLE</div>
        <h1 className="h-display text-3xl mt-3">Sign in</h1>
        <p className="mt-2 text-slate text-[13px] font-serif">Default: admin@threegroups.com / admin123</p>
        <div className="mt-6 space-y-3">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"
            className="w-full bg-paper border border-abyss/15 px-4 py-3 outline-none focus:border-abyss" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"
            className="w-full bg-paper border border-abyss/15 px-4 py-3 outline-none focus:border-abyss" />
          {err && <div className="text-[13px] text-red-700">{err}</div>}
          <button className="btn-solid w-full justify-center">Sign in</button>
        </div>
      </form>
    </div>
  );
}
