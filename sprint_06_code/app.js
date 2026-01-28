import express from 'express';
import { getGoods } from './utils/index.js';
import dotenv from 'dotenv';
dotenv.config();

import { homeRouter, categoryRouter } from './routes/index.js';
import { ROUTES } from './common/index.js';

import { notFoundHandler, errorHandler } from './middlewares/index.js';

const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('./public'));

const PORT = process.env.PORT || 4010;

await getGoods();

app.use(ROUTES.HOME, homeRouter);
app.use(ROUTES.CATEGORY, categoryRouter);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
