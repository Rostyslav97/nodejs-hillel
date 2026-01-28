import { Router } from 'express';
import { getGoods } from '../utils/index.js';
import { STATUS_CODES, MESSAGE } from "../common/index.js";

const router = Router();

async function resolveCategory(req, res, next, category) {
    const goods = await getGoods();
    if (!Object.hasOwn(goods, category)){
        return res.status(STATUS_CODES.NOT_FOUND).send(MESSAGE.CATEGORY_NOT_FOUND);
    }
    req.goods = goods[category];
    next();
}

// /category
router.get('/', async (req, res) => {
    const goods = await getGoods();
    res.render('category', {categories: Object.keys(goods)});
});


// /category/phones
router.param('category', resolveCategory);

router.get('/:category', async (req, res) => {
    res.render('category_single', {
        category: req.params.category,
        goods : req.goods
    })
});

export default router;