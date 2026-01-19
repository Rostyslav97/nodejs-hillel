// Task 01

// Напишіть модуль який отримує аргумент - шлях до файлу files/sci_fi_1.csv і повертає масив об'єктів виду. В цьому CSV файлів не буде помилок. 
// Оскільки ми відпрацьовуємо роботу с пакетом csv-parse то перевіряти існування файла - не треба. Тобто файл існує, не пустий.
// Приклад виклику - написаний у app.js

// В налаштуваннях csv-parse тут і в інших тасках використовуйте МІНІМАЛЬНИЙ набір параметрів

import {readCSVFile} from './read_file.js';

export async function task_01 (filename) {
    return readCSVFile(filename, {
        columns: true,
        trim: true
      });
}