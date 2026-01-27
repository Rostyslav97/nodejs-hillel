
import express from 'express';
const router = express.Router();

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


function logMiddleware(req, res, next) {
    console.log(`➡️  ${req.method} url: ${req.url}`);
    next();
}


router.get('/', logMiddleware, async (req, res) => {
    try {
        const files = await fs.readdir(path.resolve(__dirname,'..', 'storage_01'));
        res.render('storage', {title: 'Storage', files})
    }
    catch (err) {
        console.log(err);
        res.status(500).send('error server');
    }
});

router.get('/:fileName', logMiddleware, async (req, res) => {
    try {
        const { fileName } = req.params;
        await fs.access(path.resolve(__dirname,'..', 'storage_01', fileName));
        res.download(path.resolve(__dirname, '..', 'storage_01', fileName));
    }
    catch (err) {
        console.log(err);
        res.status(500).send('error server');
    }
});

export default router;