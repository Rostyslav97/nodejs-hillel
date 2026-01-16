import { readFile } from 'fs/promises';
import path from 'path';
import { __dirname } from './helpers/path.js';

try {
    const data = await readFile(path.resolve(__dirname, 'menu.json'), 'utf8');
    console.log(data);
    console.log(JSON.parse(data));
}
catch(err) {
    console.log(err);
}