// У цьому файлі ви підключаєте модулі для перевірки їхньої роботи.
// Після перевірки модуль можна закоментувати, щоб його вивід не заважав.

// Перше завдання реалізовано як приклад підключення та виконання.
// Після ознайомлення можна або видалити підключення, або закоментувати його.

// Завдання розміщені у відповідних файлах.


// Task 01
const task01 = require('./task_01');
console.log(task01);

// Task 02
const maxOfThree = require('./task_02');
console.log(maxOfThree(5, 10, 7));
console.log(maxOfThree(3, 3, 3));
console.log(maxOfThree(-1, 0, -5));

// Task 03
const countNonNegative = require('./task_03');
console.log(countNonNegative([1, -2, 0, 5, -3]));
console.log(countNonNegative([-1, -2, -3]));
console.log(countNonNegative([0, 0, 0]));

// Task 04
const { prepareString } = require('./task_04');
console.log(prepareString('  hello WORLD  '));
console.log(prepareString('NODE.js'));
console.log(prepareString('   '));

// Task 05
const { randomSymbol } = require('./task_05');
console.log(randomSymbol('abcdef'));
console.log(randomSymbol(''));
console.log(randomSymbol('Node.js'))

// Task 06
const { integerPart } = require('./task_06');
console.log(integerPart(12.34));
console.log(integerPart(-5.67));
console.log(integerPart(0.99));
console.log(integerPart(-0.99))

// Task 07
const noInnerSpaces = require('./task_07');
console.log(noInnerSpaces('abcd efjklsjdududdd'));
console.log(noInnerSpaces('abcdefjklsjdududdd   '));
console.log(noInnerSpaces(' foo '));
console.log(noInnerSpaces(' f oo '));

// Task 08
const { stringCheck } = require('./task_08');

console.log(stringCheck('hello'));
console.log(stringCheck('Hello'));
console.log(stringCheck(''));
console.log(stringCheck('abc123'));
console.log(stringCheck('abc!@#'));
console.log(stringCheck('ЮЮЮЮ'));

// Task 09
const { clearArray } = require('./task_09');
const arr = [1, 'a', true, false, {}, 42, 'hello'];
console.log(clearArray(arr));
