import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcryptjs';
import { defaultContent } from './defaultContent.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = path.join(__dirname, 'data', 'three.db');

export const db = new Database(dbPath);
db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    name TEXT,
    role TEXT DEFAULT 'admin',
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  );
  CREATE TABLE IF NOT EXISTS pages (
    slug TEXT PRIMARY KEY,
    title TEXT,
    content TEXT,
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP
  );
  CREATE TABLE IF NOT EXISTS jobs (
    id TEXT PRIMARY KEY,
    role TEXT NOT NULL,
    team TEXT,
    location TEXT,
    type TEXT,
    description TEXT,
    requirements TEXT,
    published INTEGER DEFAULT 1,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  );
  CREATE TABLE IF NOT EXISTS posts (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT,
    author TEXT,
    initials TEXT,
    date TEXT,
    read_time TEXT,
    blurb TEXT,
    body TEXT,
    featured INTEGER DEFAULT 0,
    published INTEGER DEFAULT 1
  );
  CREATE TABLE IF NOT EXISTS cases (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    industry TEXT,
    tag TEXT,
    body TEXT,
    metrics TEXT,
    chips TEXT,
    featured INTEGER DEFAULT 0
  );
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    kind TEXT,
    name TEXT,
    email TEXT,
    company TEXT,
    message TEXT,
    meta TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  );
`);

/* ---------- seed default admin + content if empty ---------- */
const adminCount = db.prepare('SELECT COUNT(*) as c FROM users').get().c;
if (adminCount === 0) {
  const hash = bcrypt.hashSync('admin123', 10);
  db.prepare('INSERT INTO users (email,password,name) VALUES (?,?,?)')
    .run('admin@threegroups.com', hash, 'Site Admin');
  console.log('[db] seeded default admin: admin@threegroups.com / admin123');
}

const pageCount = db.prepare('SELECT COUNT(*) as c FROM pages').get().c;
if (pageCount === 0) {
  const insert = db.prepare('INSERT INTO pages (slug,title,content) VALUES (?,?,?)');
  for (const [slug, doc] of Object.entries(defaultContent.pages)) {
    insert.run(slug, doc.title, JSON.stringify(doc.content));
  }
  console.log('[db] seeded', Object.keys(defaultContent.pages).length, 'pages');
}

const jobCount = db.prepare('SELECT COUNT(*) as c FROM jobs').get().c;
if (jobCount === 0) {
  const insert = db.prepare('INSERT INTO jobs (id,role,team,location,type,description,requirements,published) VALUES (?,?,?,?,?,?,?,1)');
  for (const j of defaultContent.jobs) {
    insert.run(j.id, j.role, j.team, j.location, j.type, j.description, JSON.stringify(j.requirements));
  }
  console.log('[db] seeded', defaultContent.jobs.length, 'jobs');
}

const postCount = db.prepare('SELECT COUNT(*) as c FROM posts').get().c;
if (postCount === 0) {
  const insert = db.prepare('INSERT INTO posts (id,title,category,author,initials,date,read_time,blurb,body,featured,published) VALUES (?,?,?,?,?,?,?,?,?,?,1)');
  for (const p of defaultContent.posts) {
    insert.run(p.id, p.title, p.category, p.author, p.initials, p.date, p.readTime, p.blurb, p.body, p.featured ? 1 : 0);
  }
  console.log('[db] seeded', defaultContent.posts.length, 'posts');
}

const caseCount = db.prepare('SELECT COUNT(*) as c FROM cases').get().c;
if (caseCount === 0) {
  const insert = db.prepare('INSERT INTO cases (id,title,industry,tag,body,metrics,chips,featured) VALUES (?,?,?,?,?,?,?,?)');
  for (const c of defaultContent.cases) {
    insert.run(c.id, c.title, c.industry, c.tag, c.body, JSON.stringify(c.metrics), JSON.stringify(c.chips), c.featured ? 1 : 0);
  }
  console.log('[db] seeded', defaultContent.cases.length, 'case studies');
}
