import {readFile} from 'fs/promises';
import path from 'path';
import { __dirname } from './helpers/path.js';

import {schemaTest} from './models/schemaTest.js';

import Ajv from 'ajv';
const ajv = new Ajv();
const validateJSON = ajv.compile(schemaTest);

try {
    const data  = JSON.parse(await readFile(path.resolve(__dirname, 'test.json'), 'utf8'));
    if (validateJSON(data)) console.log('ok');
    else console.log('not ok');

}
catch (err) {
    console.log('Error validation', err);
}