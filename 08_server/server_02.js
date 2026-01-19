import http from 'http';
import { readFile } from 'fs/promises';

const server = http.createServer(serverFunction);

async function serverFunction(req, res) {
    console.log(req.method, req.url);

    if (req.url === '/css/style.css') {
        const cssFile = await readFile('public/css/style.css');
        res.setHeader('Content-Type', 'text/css');
        res.end(cssFile);
        return;
    }
    if (req.url.includes('image') && req.url.includes('.png')) {
        try {
            const image = await readFile('public/' + req.url);
            res.setHeader('Content-Type', 'image/png');
            res.end(image);
        }
        catch (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('file not found');
        }
        return;
    }

    res.setHeader('Content-Type', 'text/html');

    res.end(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="/css/style.css">
                <title>Some site</title>
            </head>
            <body>
            <h1>Server 02</h1>
            <img src="https://cdn3.iconfinder.com/data/icons/cat-power-premium/120/cat_foodlove-256.png">
            <img src="/images/cat.png">`
    );

}

server.listen(3100, () => {
    console.log(`http://localhost:3100`);
});

