// Task 05

// Напишіть модуль який отримує аргумент - шлях до файлу files/sci_fi_5.csv і повертає масив об'єктів. У цьому файлу є проблема - зайві пусті рядки.


import fs from 'fs';
import { parse } from 'csv-parse';

export async function task_05(pathToFile) {
  return new Promise((resolve, reject) => {
    const result = [];

    fs.createReadStream(pathToFile)
      .pipe(parse({
        columns: true,
        trim: true,
        skip_empty_lines: true
      }))
      .on('data', (row) => {
        result.push(row);
      })
      .on('end', () => resolve(result))
      .on('error', reject);
  });
}
