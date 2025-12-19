// Task 05

// Створіть іменований модуль randomSymbol, який отримує рядок і повертає випадковий символ з цього рядка.
// Якщо передано порожній рядок — повертає порожній рядок.


function randomSymbol(str) {
  const index = Math.floor(Math.random() * str.length);
  return str.charAt(index);
}

module.exports = { randomSymbol };
