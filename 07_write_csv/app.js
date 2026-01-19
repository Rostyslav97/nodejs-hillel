import { readFile } from 'node:fs/promises';
import { parse } from 'csv-parse/sync';
import Ajv from 'ajv';

const csvText = await readFile('./file.csv', 'utf-8');

const records = parse(csvText, {
  columns: true,
  skip_empty_lines: true
});

const schema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      house: { enum: ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'] },
      role: { type: 'string' },
      wand: { type: 'string' },
      pet: { type: 'string' },
    },
    required: ['name', 'house', 'role'],
    additionalProperties: false,
  },
};

const ajv = new Ajv();
const validate = ajv.compile(schema);

if (validate(records)) {
  console.log('valid');
} else {
  console.error('error: ');
  console.error(validate.errors);
}

// console.log(records);