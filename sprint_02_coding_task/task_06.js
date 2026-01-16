// Task 06

// Напишіть модуль який отримує аргумент - шлях до файлу files/sci_fi_6.csv і повертає масив об'єктів. Зауважте - деяки рядки не містять повні дані іх треба фільтрувати за допомогою csv-parse.

import fs from 'fs';
import { parse } from 'csv-parse';

export async function task_06(pathToFile) {
  return new Promise((resolve, reject) => {
    const result = [];

    fs.createReadStream(pathToFile)
      .pipe(parse({
        columns: true,
        trim: true,
        relax_column_count: true,
        on_record: (record) => {
          const values = Object.values(record);
          if (values.length !== 8 || values.some(v => v === '' || v === undefined)) {
            return null;
          }
          return record;
        }
      }))
      .on('data', (row) => result.push(row))
      .on('end', () => resolve(result))
      .on('error', reject);
  });
}
