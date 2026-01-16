// Task 03

// Напишіть модуль який отримує аргумент - шлях до файлу files/sci_fi_3.csv і повертає масив об'єктів. При читанні пропустіть рядки так, щоб результат починався з "Title" : "Phantom...". Тобто результат повинен починатися так:

import fs from 'fs';
import { parse } from 'csv-parse';

export async function task_03(pathToFile) {
  return new Promise((resolve, reject) => {
    const result = [];

    fs.createReadStream(pathToFile)
      .pipe(parse({
        columns: true,
        trim: true
      }))
      .on('data', (row) => result.push(row))
      .on('end', () => resolve(result))
      .on('error', reject);
  });
}
