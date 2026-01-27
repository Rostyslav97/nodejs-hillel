import { Router } from 'express';

const router = Router();

router.get('/cat', (req, res) => {
  res.send(`
    <ul>
      <li><a href="/cat/smartphones">Смартфони</a></li>
      <li><a href="/cat/laptop">Ноутбуки</a></li>
    </ul>
  `);
});

router.get('/cat/:categoryName', (req, res) => {
  const { categoryName } = req.params;
  res.send(categoryName);
});

export default router;
