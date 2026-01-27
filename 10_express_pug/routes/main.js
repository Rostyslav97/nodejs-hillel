import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.render('main', {title: 'pug', message : 'hello pug'});
});

router.post('/', (req, res)=> {
    res.json({message: 'some text', 'page': 'main'});
});

router.get('/about', (req, res) => {
    res.render('about', {title: 'about', message : 'about page'});
});

router.get('/format', (req, res) => {
    res.json({ message: 'Hello JSON' });
});


export default router;