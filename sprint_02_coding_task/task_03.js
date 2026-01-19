// Task 03

// Напишіть модуль який отримує аргумент - шлях до файлу files/sci_fi_3.csv і повертає масив об'єктів. При читанні пропустіть рядки так, щоб результат починався з "Title" : "Phantom...". Тобто результат повинен починатися так:

import { readCSVFile } from './read_file.js';

export async function task_03(filename) {
  const records = await readCSVFile(filename, {
    columns: true,
    trim: true
  });

  const startIndex = records.findIndex(
    row => row.Title?.startsWith('Phantom')
  );

  return startIndex === -1
    ? []
    : records.slice(startIndex);
}
