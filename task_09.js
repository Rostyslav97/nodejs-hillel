// Task 09

// Створіть модуль clearArray, який приймає масив (array) як аргумент і повертає новий масив, у якому залишаються лише елементи типів number та boolean.


function clearArray(arr) {
    if (!Array.isArray(arr)) return [];
    return arr.filter(item => typeof item === 'number' || typeof item === 'boolean');
}

module.exports = { clearArray };
