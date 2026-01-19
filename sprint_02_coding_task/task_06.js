// Task 06

// Напишіть модуль який отримує аргумент - шлях до файлу files/sci_fi_6.csv і повертає масив об'єктів. Зауважте - деяки рядки не містять повні дані іх треба фільтрувати за допомогою csv-parse.

import { readCSVFile } from './read_file.js';

export async function task_06(filename) {
  return readCSVFile(filename, {
    columns: true,
    trim: true,
    relax_column_count: true,
    on_record: (record) => {
      const values = Object.values(record);

      if (values.length !== 8) return null;

      if (values.some(v => v === '' || v === undefined)) return null;

      return record;
    }
  });
}
