const base = '';
const tokenKey = 'tg_token';

export const auth = {
  get token() { return localStorage.getItem(tokenKey); },
  set(t) { localStorage.setItem(tokenKey, t); },
  clear() { localStorage.removeItem(tokenKey); },
};

async function request(method, url, body) {
  const headers = { 'Content-Type': 'application/json' };
  if (auth.token) headers.Authorization = `Bearer ${auth.token}`;
  const res = await fetch(base + url, {
    method, headers, body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || `HTTP ${res.status}`);
  }
  return res.json();
}

export const api = {
  login: (email, password) => request('POST', '/api/auth/login', { email, password }),
  me: () => request('GET', '/api/auth/me'),

  getPages: () => request('GET', '/api/pages'),
  getPage: (slug) => request('GET', '/api/pages/' + slug),
  savePage: (slug, body) => request('PUT', '/api/pages/' + slug, body),

  getJobs: () => request('GET', '/api/jobs'),
  getJob: (id) => request('GET', '/api/jobs/' + id),
  saveJob: (id, body) => request('PUT', '/api/jobs/' + id, body),
  createJob: (body) => request('POST', '/api/jobs', body),
  deleteJob: (id) => request('DELETE', '/api/jobs/' + id),

  getPosts: () => request('GET', '/api/posts'),
  getPost: (id) => request('GET', '/api/posts/' + id),
  savePost: (id, body) => request('PUT', '/api/posts/' + id, body),
  createPost: (body) => request('POST', '/api/posts', body),
  deletePost: (id) => request('DELETE', '/api/posts/' + id),

  getCases: () => request('GET', '/api/cases'),
  getCase: (id) => request('GET', '/api/cases/' + id),
  saveCase: (id, body) => request('PUT', '/api/cases/' + id, body),

  submitLead: (body) => request('POST', '/api/leads', body),
  getLeads: () => request('GET', '/api/leads'),
};
