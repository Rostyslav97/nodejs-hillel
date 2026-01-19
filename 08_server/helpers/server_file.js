import { readFile } from 'fs/promises';
import {types} from './types.js'


export async function serverFile(res, filePath, contentType) {
    try {
        const data = await readFile(filePath)

        res.setHeader('Content-Type', types[contentType]);
        res.end(data);
    }
    catch (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('file not found');
    }
}
