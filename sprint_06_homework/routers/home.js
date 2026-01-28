import { Router } from 'express';
import { getGoods } from '../utilities/goods.js';

const router = Router();

function getRandomItems(arr, count) {
  return [...arr].sort(() => 0.5 - Math.random()).slice(0, count);
}

router.get('/', async (req, res) => {
  const goods = await getGoods();

  const phones = goods.filter(item => item.category === 'phones');
  const laptops = goods.filter(item => item.category === 'laptops');

  res.render('main', {
    phones: getRandomItems(phones, 4),
    laptops: getRandomItems(laptops, 4),
  });
});

export default router;
