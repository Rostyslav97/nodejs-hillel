import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('main page');
});

router.get('/test-json', (req, res) => {
  res.json({ foo: 3, bar: 3 });
});

router.get('/redirect', (req, res) => {
  res.redirect('/test-json');
});

export default router;
