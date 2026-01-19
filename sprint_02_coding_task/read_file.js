import { readFile } from 'fs/promises';
import { parse } from 'csv-parse/sync';

import path from 'path';
import { __dirname } from './helpers/path.js';

export const readCSVFile = async (filename, options = {}) => {
    try {
        const csvText = await readFile(path.resolve(__dirname, 'csv_files', filename), 'utf-8');
        const records = parse(csvText, options);
        return records;
    } catch (error) {
        console.error('Error reading or parsing CSV file:', error.message);
    }
}
