import express from 'express';

import dotenv from 'dotenv';
dotenv.config();

import homeRouter from './routers/home.js';
import categoryRouter from './routers/category.js';

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
app.set('view engine', 'pug');
app.set('views', './views');
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(join(__dirname, 'public')));
app.use(express.static(join(__dirname, 'data')));

app.use('/', homeRouter);
app.use('/category', categoryRouter);

app.listen(PORT, () => {
  console.log(`Server start на http://localhost:${PORT}`);
});
