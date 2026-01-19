// Task 05

// Напишіть модуль який отримує аргумент - шлях до файлу files/sci_fi_5.csv і повертає масив об'єктів. У цьому файлу є проблема - зайві пусті рядки.


import { readCSVFile } from './read_file.js';

export async function task_05(filename) {
  return readCSVFile(filename, {
    columns: true,
    trim: true,
    skip_empty_lines: true
  });
}
