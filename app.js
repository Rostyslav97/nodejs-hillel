import express from 'express';
import dotenv from 'dotenv';

import indexRoutes from './routes/index.routes.js';
import catRoutes from './routes/cat.routes.js';
import randomRoutes from './routes/random.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3500;

app.use(express.json());

app.use(indexRoutes);
app.use(catRoutes);
app.use(randomRoutes);

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
