// Task 04

// Напишіть модуль який отримує аргумент - шлях до файлу files/sci_fi_4.csv і повертає масив масивів рядків. Тобто:

import fs from 'fs';
import { parse } from 'csv-parse';

export async function task_04(pathToFile) {
  return new Promise((resolve, reject) => {
    const result = [];

    fs.createReadStream(pathToFile)
      .pipe(parse({
        delimiter: '=',
        from_line: 2,
        trim: true
      }))
      .on('data', (row) => {
        result.push(row);
      })
      .on('end', () => {
        resolve(result);
      })
      .on('error', reject);
  });
}
