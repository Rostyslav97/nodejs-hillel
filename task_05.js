// Task 05

// Створіть іменований модуль randomSymbol, який отримує рядок і повертає випадковий символ з цього рядка.
// Якщо передано порожній рядок — повертає порожній рядок.


function randomSymbol(str) {
  if (typeof str !== 'string' || str.length === 0) return '';
  const index = Math.floor(Math.random() * str.length);
  return str[index];
}

module.exports = { randomSymbol };
