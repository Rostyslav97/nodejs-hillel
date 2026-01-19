// Task 08

// Напишіть модуль який отримує аргумент - шлях до файлу files/sci_fi_8.csv і повертає масив об'єктів. 

import { readCSVFile } from './read_file.js';

export async function task_08(filename) {
  const allKeys = [
    'Title',
    'Year',
    'Rating',
    'Director',
    'BudgetUSD',
    'BoxOfficeUSD',
    'RuntimeMin',
    'Tagline'
  ];

  return readCSVFile(filename, {
    columns: true,
    trim: true,
    relax_column_count: true,
    skip_empty_lines: true,
    on_record: (record) => {
      allKeys.forEach((key) => {
        if (!(key in record)) {
          record[key] = '';
        }
      });

      return record;
    }
  });
}
