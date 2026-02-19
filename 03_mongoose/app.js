import express from 'express';
import connectDB from './config/database.js';

import methodOverride from 'method-override';

import productRouter from './routes/productRouter.js';

const app  = express();
const PORT = 4500;

// Connect to MongoDB
connectDB();

// View engine setup
app.set('view engine', 'pug');
app.set('views', './views');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride('_method'));

app.use((req, res, next) => {
  const timestamp = new Date().toLocaleTimeString('en-US');
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
});


app.get('/', (req, res) => {
  res.send('work');
});

app.use('/products', productRouter);

app.listen(PORT, ()=> {
    console.log(`server work on http://localhost:${PORT}`);
});

process.on('unhandledRejection', (err) => {
  process.exit(1);
});