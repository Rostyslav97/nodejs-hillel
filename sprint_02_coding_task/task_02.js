// Task 02

// Напишіть модуль який отримує аргумент - шлях до файлу files/sci_fi_2.csv і повертає масив об'єктів. В цьому CSV файлів не буде помилок. 


import fs from 'fs';
import { parse } from 'csv-parse';

export async function task_02(filePath) {
  return new Promise((resolve, reject) => {
    const result = [];

    fs.createReadStream(filePath)
      .pipe(parse({
        columns: true,
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
