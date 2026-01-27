import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const PORT = process.env.PORT || 3030;

app.use(express.static(path.resolve(__dirname, 'public')));

app.use((req, res, next) => {
    if (req.url !== '/.well-known/appspecific/com.chrome.devtools.json') {
        console.log(req.method, req.url);
    }
    next();
});

function logMiddleware(req, _res, next) {
    console.log(`➡️  ${req.method} url: ${req.url}`);
    next();
}

app.get('/', (req, res) => {
    // res.send('server work');
    res.sendFile(path.resolve(__dirname, 'public', 'html', 'main.html'));
});

app.get('/format', (_req, res) => {
    res.json({ message: 'Hello JSON' });
});

app.get('/storage', logMiddleware, async (req, res) => {
    try {
        const files = await fs.readdir(path.resolve(__dirname, 'storage_01'));
        res.json({files})
    }
    catch (err) {
        console.log(err);
        res.status(500).send('error server');
    }
});

app.get('/storage/:fileName', logMiddleware, async (req, res) => {
    try {
        const { fileName } = req.params;
        await fs.access(path.resolve(__dirname, 'storage_01', fileName));
        res.download(path.resolve(__dirname, 'storage_01', fileName));
    }
    catch (err) {
        console.log(err);
        res.status(500).send('error server');
    }
});


app.use((req, res) => {
    res.status(404).send('404 not found');
});

app.listen(PORT, () => {
    console.log(`🚀 server port http://localhost:${PORT}`);
});