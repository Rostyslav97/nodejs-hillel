// Task 04

// Напишіть модуль який отримує аргумент - шлях до файлу files/sci_fi_4.csv і повертає масив масивів рядків. Тобто:


import { readCSVFile } from './read_file.js';

export async function task_04(filename) {
  return readCSVFile(filename, {
    delimiter: '=',
    from_line: 2,
    trim: true
  });
}
