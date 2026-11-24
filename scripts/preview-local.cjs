// Local UI preview only. Never serve credentials, repository files, or API source.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.mp4': 'video/mp4', '.ico': 'image/x-icon' };
http.createServer((req, res) => {
  let url;
  try { url = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); } catch { res.writeHead(400).end(); return; }
  if (url.startsWith('/api/')) {
    res.writeHead(503, { 'Content-Type': 'application/json' }).end(JSON.stringify({ error: 'Payments are unavailable in the local UI preview.' })); return;
  }
  if (url === '/sw.js') { res.writeHead(404).end(); return; }
  const publicFile = url.startsWith('/assets/') || ['/index.html', '/kgsadmin.html', '/manifest.json', '/robots.txt', '/sitemap.xml'].includes(url);
  const relative = publicFile ? url.slice(1) : !path.extname(url) ? 'index.html' : null;
  if (!relative || relative.split(/[\\/]/).some(p => p.startsWith('.'))) { res.writeHead(404).end(); return; }
  const file = path.resolve(root, relative);
  if (!file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404).end(); return; }
    res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    res.end(data);
  });
}).listen(3000, '127.0.0.1', () => console.log('Local UI preview: http://127.0.0.1:3000'));
