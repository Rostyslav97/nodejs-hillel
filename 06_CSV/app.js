import {readFile} from 'fs/promises';
import path from 'path';
import { __dirname } from './helpers/path.js';

import {parse} from 'csv-parse/sync';


try {
    const data  = await readFile(path.resolve(__dirname, 'files', 'f_09.csv'), 'utf8');
    
    const records = parse(data, {
        columns : true,
        skip_empty_lines : true,
        // delimiter : ';',
        // to_line: 4
        // from_line : 3,
        skip_records_with_error : true,
        trim : true,
        ignore_last_delimiters: true,
        cast : (value, context) => {
            if (context.header) return value.toUpperCase();
            if (context.column === 'AGE') return Number(value);
            if (context.column === 'ACTIVE') return Boolean(+value);
            return String(value);
        }
    });
    console.log(records);

}
catch (err) {
    console.log( err.message);
}