import express from 'express';
import methodOverride from 'method-override';

const app = express();
const PORT = 3000;

// Налаштування Pug як шаблонізатора
app.set('view engine', 'pug');
app.set('views', './views');

// Middleware для обробки даних з форм
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

// Масив користувачів
let users = [
  { id: 1, name: 'Іван', email: 'ivan@example.com' },
  { id: 2, name: 'Марія', email: 'maria@example.com' },
  { id: 3, name: 'Петро', email: 'petro@example.com' }
];

// Роут для відображення всіх користувачів
app.get('/users', (req, res) => {
  res.render('users', { users });
});

// Роут для відображення форми створення користувача
app.get('/users/create', (req, res) => {
  res.render('create-user');
});

// Роут для обробки форми створення користувача (POST)
app.post('/users/create', (req, res) => {
  const { name, email } = req.body;
  
  // Створюємо нового користувача
  const newUser = {
    id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
    name,
    email
  };
  
  users.push(newUser);
  
  // Перенаправляємо на сторінку зі списком користувачів
  res.redirect('/users');
});

// Роут для відображення форми оновлення користувача
app.get('/users/:id/update', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  
  if (!user) {
    return res.status(404).send('Користувача не знайдено');
  }
  
  res.render('update-user', { user });
});

// Роут для обробки форми оновлення користувача (PUT)
app.put('/users/:id/update', (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, email } = req.body;
  
  const userIndex = users.findIndex(u => u.id === userId);
  
  if (userIndex === -1) {
    return res.status(404).send('Користувача не знайдено');
  }
  
  // Оновлюємо користувача
  users[userIndex] = {
    ...users[userIndex],
    name,
    email
  };
  
  // Перенаправляємо на сторінку зі списком користувачів
  res.redirect('/users');
});

// Головна сторінка
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Сервер запущено на http://localhost:${PORT}`);
});
