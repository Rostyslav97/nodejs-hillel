// Task 06

//Створіть іменований модуль integerPart, який отримує десятковий дріб і повертає його цілу частину.


function integerPart(num) {
    if (typeof num !== 'number') return NaN;
    return Math.trunc(num);
}

module.exports = { integerPart };
