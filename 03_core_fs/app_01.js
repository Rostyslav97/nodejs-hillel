// common js
// const fs = require('fs');

// esm
import fs from 'node:fs';

const data = fs.readFileSync('data.txt', 'utf8');
console.log(data);

fs.readFile('data.txt', 'utf8', (err, data)=>{
    if (err) return err;
    console.log(data);
});
