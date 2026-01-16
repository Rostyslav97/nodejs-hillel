// Task 09

// Напишіть модуль який отримує аргумент рядок даних і повертає масив об'єктів. Перший рядок - рядок заголовків.


import { parse } from 'csv-parse/sync';

export function task_09(data) {
  const records = parse(data, {
    columns: true,
    trim: true,
    skip_empty_lines: true
  });

  return records;
}
