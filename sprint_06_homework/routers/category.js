import { Router } from 'express';
import { getGoods } from '../utilities/goods.js';

const router = Router();

router.get('/', async (req, res) => {
  const goods = await getGoods();

  const categories = [...new Set(goods.map(item => item.category))];

  res.render('category', { categories });
});

router.get('/:category', async (req, res) => {
  const goods = await getGoods();
  const { category } = req.params;

  const categoryGoods = goods.filter(item => item.category === category);

  if (!categoryGoods.length) {
    return res.status(404).send('Category not found');
  }

  res.render('category_single', {
    category,
    goods: categoryGoods,
  });
});

export default router;
