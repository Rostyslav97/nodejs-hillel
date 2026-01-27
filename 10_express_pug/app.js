import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import mainRouter from './routes/main.js';
import storageRouter from './routes/storage.js';

const app = express();

const PORT = process.env.PORT || 3030;

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('view engine', 'pug');
app.use('views', express.static(path.resolve(__dirname, 'views')));

app.use((req, res, next) => {
    if (req.url !== '/.well-known/appspecific/com.chrome.devtools.json') {
        console.log(req.method, req.url);
    }
    next();
});

app.use('/', mainRouter);
app.use('/storage', storageRouter);

app.use((req, res) => {
    res.status(404).send('404 not found');
});

app.listen(PORT, () => {
    console.log(`🚀 server port http://localhost:${PORT}`);
});