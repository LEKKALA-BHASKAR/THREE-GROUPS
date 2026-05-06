import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import path from 'path';
import { fileURLToPath } from 'url';
import { connect, db } from './mongo.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SECRET = process.env.JWT_SECRET || 'three-groups-dev-secret';
const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(express.json({ limit: '1mb' }));

/* ---------- auth ---------- */
function requireAuth(req, res, next) {
  const h = req.headers.authorization || '';
  const token = h.startsWith('Bearer ') ? h.slice(7) : null;
  if (!token) return res.status(401).json({ error: 'unauthorised' });
  try { req.user = jwt.verify(token, SECRET); next(); }
  catch { res.status(401).json({ error: 'invalid token' }); }
}

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body || {};
    const user = await db.collections.users.findOne({ email });
    if (!user || !bcrypt.compareSync(password || '', user.password)) {
      return res.status(401).json({ error: 'invalid credentials' });
    }
    const token = jwt.sign({ id: String(user._id), email: user.email, name: user.name }, SECRET, { expiresIn: '7d' });
    res.json({ token, user: { id: String(user._id), email: user.email, name: user.name } });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/api/auth/me', requireAuth, (req, res) => res.json({ user: req.user }));

/* ---------- pages ---------- */
app.get('/api/pages', async (_req, res) => {
  try {
    const rows = await db.collections.pages.find({}, { projection: { _id: 0, slug: 1, title: 1, updatedAt: 1 } }).sort({ slug: 1 }).toArray();
    res.json(rows.map((r) => ({ slug: r.slug, title: r.title, updated_at: r.updatedAt })));
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/api/pages/:slug(*)', async (req, res) => {
  try {
    const r = await db.collections.pages.findOne({ slug: req.params.slug }, { projection: { _id: 0 } });
    if (!r) return res.status(404).json({ error: 'not found' });
    res.json({ slug: r.slug, title: r.title, content: r.content || {}, updated_at: r.updatedAt });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/api/pages/:slug(*)', requireAuth, async (req, res) => {
  try {
    const { title, content } = req.body || {};
    await db.collections.pages.updateOne(
      { slug: req.params.slug },
      { $set: { slug: req.params.slug, title: title || req.params.slug, content: content || {}, updatedAt: new Date() } },
      { upsert: true }
    );
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

/* ---------- jobs ---------- */
app.get('/api/jobs', async (_req, res) => {
  try {
    const rows = await db.collections.jobs.find({ published: 1 }, { projection: { _id: 0 } }).sort({ createdAt: -1 }).toArray();
    res.json(rows);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/api/jobs/:id', async (req, res) => {
  try {
    const r = await db.collections.jobs.findOne({ id: req.params.id }, { projection: { _id: 0 } });
    if (!r) return res.status(404).json({ error: 'not found' });
    res.json(r);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/jobs', requireAuth, async (req, res) => {
  try {
    const j = req.body || {};
    const id = j.id || ('job-' + Date.now());
    await db.collections.jobs.insertOne({
      id, role: j.role, team: j.team, location: j.location, type: j.type,
      description: j.description || '', requirements: j.requirements || [],
      published: j.published ? 1 : 0, createdAt: new Date(),
    });
    res.json({ ok: true, id });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/api/jobs/:id', requireAuth, async (req, res) => {
  try {
    const j = req.body || {};
    await db.collections.jobs.updateOne({ id: req.params.id }, { $set: {
      role: j.role, team: j.team, location: j.location, type: j.type,
      description: j.description || '', requirements: j.requirements || [],
      published: j.published ? 1 : 0,
    } });
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/api/jobs/:id', requireAuth, async (req, res) => {
  try {
    await db.collections.jobs.deleteOne({ id: req.params.id });
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

/* ---------- posts ---------- */
app.get('/api/posts', async (_req, res) => {
  try {
    const rows = await db.collections.posts.find({ published: 1 }, { projection: { _id: 0 } }).sort({ date: -1 }).toArray();
    res.json(rows);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/api/posts/:id', async (req, res) => {
  try {
    const r = await db.collections.posts.findOne({ id: req.params.id }, { projection: { _id: 0 } });
    if (!r) return res.status(404).json({ error: 'not found' });
    res.json(r);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/api/posts/:id', requireAuth, async (req, res) => {
  try {
    const p = req.body || {};
    await db.collections.posts.updateOne({ id: req.params.id }, { $set: {
      title: p.title, category: p.category, author: p.author, initials: p.initials,
      date: p.date, read_time: p.read_time || p.readTime, blurb: p.blurb, body: p.body,
      featured: p.featured ? 1 : 0, published: p.published ? 1 : 0,
    } });
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/posts', requireAuth, async (req, res) => {
  try {
    const p = req.body || {};
    const id = p.id || ('post-' + Date.now());
    await db.collections.posts.insertOne({
      id, title: p.title, category: p.category, author: p.author, initials: p.initials,
      date: p.date, read_time: p.read_time || p.readTime, blurb: p.blurb, body: p.body,
      featured: p.featured ? 1 : 0, published: p.published ? 1 : 0,
    });
    res.json({ ok: true, id });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/api/posts/:id', requireAuth, async (req, res) => {
  try {
    await db.collections.posts.deleteOne({ id: req.params.id });
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

/* ---------- cases ---------- */
app.get('/api/cases', async (_req, res) => {
  try {
    const rows = await db.collections.cases.find({}, { projection: { _id: 0 } }).sort({ featured: -1 }).toArray();
    res.json(rows);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/api/cases/:id', async (req, res) => {
  try {
    const r = await db.collections.cases.findOne({ id: req.params.id }, { projection: { _id: 0 } });
    if (!r) return res.status(404).json({ error: 'not found' });
    res.json(r);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/api/cases/:id', requireAuth, async (req, res) => {
  try {
    const c = req.body || {};
    await db.collections.cases.updateOne({ id: req.params.id }, { $set: {
      title: c.title, industry: c.industry, tag: c.tag, body: c.body,
      metrics: c.metrics || [], chips: c.chips || [],
      challenge: c.challenge, solution: c.solution, outcome: c.outcome,
      featured: c.featured ? 1 : 0,
    } });
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

/* ---------- leads ---------- */
app.post('/api/leads', async (req, res) => {
  try {
    const { kind, name, email, company, message, meta } = req.body || {};
    if (!email) return res.status(400).json({ error: 'email required' });
    const r = await db.collections.leads.insertOne({
      kind: kind || 'contact', name: name || '', email, company: company || '',
      message: message || '', meta: meta || {}, createdAt: new Date(),
    });
    res.json({ ok: true, id: String(r.insertedId) });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/api/leads', requireAuth, async (_req, res) => {
  try {
    const rows = await db.collections.leads.find({}).sort({ createdAt: -1 }).limit(200).toArray();
    res.json(rows.map((r) => ({ ...r, id: String(r._id), _id: undefined, created_at: r.createdAt })));
  } catch (e) { res.status(500).json({ error: e.message }); }
});

/* ---------- static ---------- */
const distDir = path.join(__dirname, '..', 'frontend', 'dist');
app.use(express.static(distDir));
app.get(/^(?!\/api).*/, (_req, res) => {
  res.sendFile(path.join(distDir, 'index.html'), (err) => {
    if (err) res.status(404).send('Run `npm run build` first.');
  });
});

/* ---------- boot ---------- */
async function main() {
  await connect();
  app.listen(PORT, () => console.log(`[api] http://localhost:${PORT}`));
}
main().catch((e) => {
  console.error('[boot] failed:', e);
  process.exit(1);
});
