import { writeFile } from 'node:fs/promises';
import { stringify } from 'csv-stringify/sync';


const data = [
  { name: 'Harry Potter', house: 'Gryffindor', role: 'Student' },
  { name: 'Hermione Granger', house: 'Gryffindor', role: 'Student' },
  { name: 'Draco Malfoy', house: 'Slytherin', role: 'Student' },
];


const csvText = stringify(data, {
  header: true
});


await writeFile('./test_write.csv', csvText, 'utf-8');

console.log('csv was created');