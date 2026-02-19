# RESTful Express приложение

## Установка зависимостей

```bash
npm install
```

## Запуск приложения

```bash
npm start
```

Или для разработки с автоперезагрузкой (Node.js 18+):

```bash
npm run dev
```

## API Endpoints

### Пользователи

- **GET** `/api/users` - Получить всех пользователей
- **GET** `/api/users/:id` - Получить пользователя по ID
- **POST** `/api/users` - Создать нового пользователя
- **PUT** `/api/users/:id` - Обновить пользователя
- **DELETE** `/api/users/:id` - Удалить пользователя

## Пример запросов

```bash
# Получить всех пользователей
curl http://localhost:3000/api/users

# Создать пользователя
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Новый пользователь","email":"new@example.com","age":35}'
```

## Технологии

- **Express** - веб-фреймворк
- **Pug** - шаблонизатор
- **ES Modules** - современный синтаксис JavaScript
