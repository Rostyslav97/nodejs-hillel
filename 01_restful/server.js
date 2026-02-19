import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import usersRouter from './routes/users.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Pug configuration
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Main page
app.get('/', (req, res) => {
  res.render('index', { 
    title: 'RESTful додаток',
    message: 'RESTful API'
  });
});

// API routes
app.use('/api/users', usersRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).render('404', { title: 'Сторінка не знайдена' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Сервер запущено на http://localhost:${PORT}`);
});
