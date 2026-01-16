// Task 08

// Напишіть модуль який отримує аргумент - шлях до файлу files/sci_fi_8.csv і повертає масив об'єктів. 

import fs from 'fs';
import { parse } from 'csv-parse';

export async function task_08(pathToFile) {
  return new Promise((resolve, reject) => {
    const result = [];
    const allKeys = ['Title', 'Year', 'Rating', 'Director', 'BudgetUSD', 'BoxOfficeUSD', 'RuntimeMin', 'Tagline'];

    fs.createReadStream(pathToFile)
      .pipe(parse({
        columns: true,
        trim: true,
        relax_column_count: true,
        skip_empty_lines: true,
        on_record: (record) => {
          allKeys.forEach(key => {
            if (!(key in record)) record[key] = '';
          });
          return record;
        }
      }))
      .on('data', (row) => result.push(row))
      .on('end', () => resolve(result))
      .on('error', reject);
  });
}
