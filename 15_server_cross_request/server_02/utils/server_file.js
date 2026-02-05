import { readFile } from 'fs/promises';
import {types} from  './types.js';

export async function serverFile(res, filePath, contentType) {
    try {
        const data = await readFile(filePath);
        res.writeHead(200, { 'Content-Type': types[contentType] });
        res.end(data);
    } catch (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
    }
}