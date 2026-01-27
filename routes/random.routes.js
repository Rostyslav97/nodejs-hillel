import { Router } from 'express';

const router = Router();

router.post('/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 11) + 10;
  res.send(String(randomNumber));
});

export default router;
