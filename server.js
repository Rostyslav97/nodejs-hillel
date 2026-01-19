import http from 'http';
import fs from 'fs';
import path from 'path';
import { mimeTypes } from './mime.js';

const PORT = 3400;

function serveFile(res, filePath) {
  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
}

const server = http.createServer((req, res) => {
  const url = req.url;

  if (req.method === 'GET' && (url === '/' || url === '/index.html')) {
    const indexPath = path.join('public', 'html', 'index.html');
    serveFile(res, indexPath);
    return;
  }

  if (url.startsWith('/css/')) {
    const cssPath = path.join('public', url);
    serveFile(res, cssPath);
    return;
  }

  if (url.startsWith('/images/')) {
    const imgPath = path.join('assets', url);
    serveFile(res, imgPath);
    return;
  }

  if (url.startsWith('/videos/')) {
    const videoPath = path.join('assets', url);
    serveFile(res, videoPath);
    return;
  }

  if (url === '/favicon/favicon.ico') {
    const faviconPath = path.join('assets', 'favicon', 'favicon.ico');
    serveFile(res, faviconPath);
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found');
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
