// Task 10

// Запустіть код і подивіться на результат. Замініть число 2 на 1, а потім на 0.

import { parse } from "csv-parse/sync";

export function task_10(data) {
    return parse(data, {
        objname: 0,
    });
}