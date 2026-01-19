// Task 02

// Напишіть модуль який отримує аргумент - шлях до файлу files/sci_fi_2.csv і повертає масив об'єктів. В цьому CSV файлів не буде помилок. 

import {readCSVFile} from './read_file.js';

export async function task_02 (filename) {
    return readCSVFile(filename,{
        columns: true,
        trim: true,
        delimiter: ';'
      });
}
