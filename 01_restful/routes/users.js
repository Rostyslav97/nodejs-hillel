import express from 'express';
import * as userModel from '../models/userModel.js';

const router = express.Router();

// GET /api/users - Get all users
router.get('/', (req, res) => {
  const users = userModel.getAllUsers();
  res.json({
    success: true,
    data: users,
    count: users.length
  });
});

// GET /api/users/:id - Get user by ID
router.get('/:id', (req, res) => {
  const user = userModel.getUserById(req.params.id);
  
  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'Користувача не знайдено'
    });
  }
  
  res.json({
    success: true,
    data: user
  });
});

// POST /api/users - Create new user
router.post('/', (req, res) => {
  const { name, email, age } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: "Ім'я та email обов'язкові"
    });
  }
  
  const newUser = userModel.createUser({ name, email, age });
  
  res.status(201).json({
    success: true,
    data: newUser,
    message: 'Користувача створено'
  });
});

// PUT /api/users/:id - Update user
router.put('/:id', (req, res) => {
  const { name, email, age } = req.body;
  const updatedUser = userModel.updateUser(req.params.id, { name, email, age });
  
  if (!updatedUser) {
    return res.status(404).json({
      success: false,
      message: 'Користувача не знайдено'
    });
  }
  
  res.json({
    success: true,
    data: updatedUser,
    message: 'Користувача оновлено'
  });
});

// DELETE /api/users/:id - Delete user
router.delete('/:id', (req, res) => {
  const deleted = userModel.deleteUser(req.params.id);
  
  if (!deleted) {
    return res.status(404).json({
      success: false,
      message: 'Користувача не знайдено'
    });
  }
  
  res.json({
    success: true,
    message: 'Користувача видалено'
  });
});

export default router;
