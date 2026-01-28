import { Router } from 'express';
import { getGoods } from '../utils/index.js';
import { getRandomItems } from '../utils/index.js';

const router = Router();

router.get('/', async (req, res) => {
    const goods = await getGoods();
    const sections = Object.entries(goods).map(([category, items])=>({
        category, 
        items: getRandomItems(items, 4),
    }));
    res.render('main', {sections});
});

export default router;