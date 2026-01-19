import http from 'http';
import { readFile } from 'fs/promises';
import path from 'path';

import { serverFile } from './helpers/server_file.js'

const server = http.createServer(serverFunction);

async function serverFunction(req, res) {
    console.log(req.method, req.url);

    if (req.url.startsWith('/css/')) {
        return serverFile(res, path.join('public', req.url), '.css')
    }
    if (req.url.startsWith('/images/')) {
        const ext = path.extname(req.url).toLowerCase();
        return serverFile(res, path.join('public', req.url), ext)
    }
    if (req.url === '/') {
        return serverFile(res, path.join('public', 'html', 'index.html'), '.html')
    }
    if (req.url === '/about') {
        return serverFile(res, path.join('public', 'html', 'about.html'), '.html')
    }

    res.statusCode = 404;
    res.end('404');

}

server.listen(3100, () => {
    console.log(`http://localhost:3100`);
});
