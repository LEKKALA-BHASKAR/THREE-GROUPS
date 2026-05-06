import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';
import { defaultContent } from './defaultContent.js';

const uri = process.env.MONGODB_URI || 'mongodb+srv://bassnaidu_db_user:am0fVhX8UqghjHCe@cluster0.wqov6mt.mongodb.net/?appName=Cluster0';
const dbName = process.env.MONGODB_DB || 'threegroups';

const client = new MongoClient(uri, { serverSelectionTimeoutMS: 5000 });

export const db = {
  client,
  collections: {},
  ready: false,
};

export async function connect() {
  await client.connect();
  const database = client.db(dbName);
  db.database = database;
  db.collections = {
    users: database.collection('users'),
    pages: database.collection('pages'),
    jobs: database.collection('jobs'),
    posts: database.collection('posts'),
    cases: database.collection('cases'),
    leads: database.collection('leads'),
    testimonials: database.collection('testimonials'),
    partners: database.collection('partners'),
    faqs: database.collection('faqs'),
    team: database.collection('team'),
  };

  // indexes
  await db.collections.users.createIndex({ email: 1 }, { unique: true });
  await db.collections.pages.createIndex({ slug: 1 }, { unique: true });
  await db.collections.jobs.createIndex({ id: 1 }, { unique: true });
  await db.collections.posts.createIndex({ id: 1 }, { unique: true });
  await db.collections.cases.createIndex({ id: 1 }, { unique: true });

  await seedIfEmpty();
  db.ready = true;
  console.log(`[mongo] connected · db: ${dbName}`);
}

async function seedIfEmpty() {
  const { users, pages, jobs, posts, cases, testimonials, partners, faqs, team } = db.collections;

  if ((await users.countDocuments()) === 0) {
    await users.insertOne({
      email: 'admin@threegroups.com',
      password: bcrypt.hashSync('admin123', 10),
      name: 'Site Admin',
      role: 'admin',
      createdAt: new Date(),
    });
    console.log('[mongo] seeded admin: admin@threegroups.com / admin123');
  }

  if ((await pages.countDocuments()) === 0) {
    const docs = Object.entries(defaultContent.pages).map(([slug, p]) => ({
      slug, title: p.title, content: p.content, updatedAt: new Date(),
    }));
    await pages.insertMany(docs);
    console.log('[mongo] seeded', docs.length, 'pages');
  }

  if ((await jobs.countDocuments()) === 0 && defaultContent.jobs.length) {
    await jobs.insertMany(defaultContent.jobs.map((j) => ({ ...j, published: 1, createdAt: new Date() })));
    console.log('[mongo] seeded', defaultContent.jobs.length, 'jobs');
  }

  if ((await posts.countDocuments()) === 0 && defaultContent.posts.length) {
    await posts.insertMany(defaultContent.posts.map((p) => ({
      ...p, featured: p.featured ? 1 : 0, published: 1, read_time: p.readTime,
    })));
    console.log('[mongo] seeded', defaultContent.posts.length, 'posts');
  }

  if ((await cases.countDocuments()) === 0 && defaultContent.cases.length) {
    await cases.insertMany(defaultContent.cases.map((c) => ({ ...c, featured: c.featured ? 1 : 0 })));
    console.log('[mongo] seeded', defaultContent.cases.length, 'cases');
  }

  if ((await testimonials.countDocuments()) === 0 && defaultContent.testimonials?.length) {
    await testimonials.insertMany(defaultContent.testimonials);
    console.log('[mongo] seeded', defaultContent.testimonials.length, 'testimonials');
  }

  if ((await partners.countDocuments()) === 0 && defaultContent.partners?.length) {
    await partners.insertMany(defaultContent.partners);
    console.log('[mongo] seeded', defaultContent.partners.length, 'partners');
  }

  if ((await faqs.countDocuments()) === 0 && defaultContent.faqs?.length) {
    await faqs.insertMany(defaultContent.faqs);
    console.log('[mongo] seeded', defaultContent.faqs.length, 'FAQs');
  }

  if ((await team.countDocuments()) === 0 && defaultContent.team?.length) {
    await team.insertMany(defaultContent.team);
    console.log('[mongo] seeded', defaultContent.team.length, 'team members');
  }
}
