import { Router } from "express";
const router = Router();



import { getUrlsCollection } from "../db/collection.js";


router.get('/:url', async (req, res) => {
    const { url } = req.params;
    const document = await getUrlsCollection().findOne({short: url});
    if (!document) {
        return res.status(404).send('Not found')
    }
    // res.redirect(document.url);
    res.render('url', {url: document.url});
});

export default router;