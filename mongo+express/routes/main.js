import { Router } from "express";
const router = Router();

import crypto from 'crypto';

import { getUrlsCollection } from "../db/collection.js";

router.get('/', async (req, res) => {
    const cursor = getUrlsCollection().find();
    const data = await cursor.toArray();
    console.log(data);
    res.render('main', {urls: data});
});

router.post('/create', async (req, res) => {
    const { url } = req.body;
    console.log(url);
    const document = await getUrlsCollection().findOne({ url: url });
    if (!document) {
        //! insertOne
        const result = await getUrlsCollection().insertOne({
            "url": url,
            "short": crypto.randomBytes(3).toString('hex'),
            "createdAt": new Date()
        });
        console.log(result);
        console.log(result.insertedId);
    }
    res.redirect('/');
});

export default router;