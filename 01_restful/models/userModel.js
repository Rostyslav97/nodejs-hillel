// Temporary data storage
let users = [
  { id: 1, name: 'Іван Іванов', email: 'ivan@example.com', age: 25 },
  { id: 2, name: 'Марія Петрова', email: 'maria@example.com', age: 30 },
  { id: 3, name: 'Петро Сидоров', email: 'petr@example.com', age: 28 }
];

let nextId = 4;

export const getAllUsers = () => users;

export const getUserById = (id) => users.find(user => user.id === parseInt(id));

export const createUser = (userData) => {
  const newUser = {
    id: nextId++,
    ...userData
  };
  users.push(newUser);
  return newUser;
};

export const updateUser = (id, userData) => {
  const index = users.findIndex(user => user.id === parseInt(id));
  if (index === -1) return null;
  
  users[index] = { ...users[index], ...userData, id: parseInt(id) };
  return users[index];
};

export const deleteUser = (id) => {
  const index = users.findIndex(user => user.id === parseInt(id));
  if (index === -1) return false;
  
  users.splice(index, 1);
  return true;
};
