import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

import connectDB from './config/database.js';
import Article from './models/Article.js';
import Comment from './models/Comment.js';

import morgan from 'morgan';
app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

await connectDB();

app.get('/', async (req, res) => {

    const articles = await Article.find({ isPublished: true })
        .sort({ publishedAt: -1, createdAt: -1 })
        .select('title summary')
        .lean();

    res.render('index', { articles });
});

app.get('/articles/:id', async (req, res) => {
    if (!req.params.id || !mongoose.isValidObjectId(req.params.id)) {
        res.status(404).render('404');
        return;
    }

    const article = await Article.findById(req.params.id).lean();

    if (!article) {
        res.status(404).render('404');
        return;
    }

    const comments = await Comment.find({ article: req.params.id })
        .sort({ createdAt: -1 })
        .lean();
        console.log(comments);

    res.render('article', { article, comments });
});

app.post('/article/:article_id/comments', async (req, res) => {
    const { article_id } = req.params;

    if (!article_id || !mongoose.isValidObjectId(article_id)) {
        return res.status(404).render('404');
    }

    const { username, text } = req.body;

    try {
        await Comment.create({
            article: article_id,
            username,
            text,
        });

        res.redirect(`/articles/${article_id}`);
    } catch (err) {
        console.error(err);
        res.status(500).render('404');
    }
});

app.use((req, res) => {
    res.status(404).render('404');
});

app.listen(port, ()=> {
    console.log(`server work on http://localhost:${port}`);
});