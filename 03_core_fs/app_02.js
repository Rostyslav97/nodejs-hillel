// esm

// import fs from 'fs';
import {readFile, writeFile, appendFile, unlink, readdir, stat, access} from 'fs/promises';

//! READ
const readExample = async (file) => {
    try {
        const data = await readFile(file, 'utf8');
        console.log(data);
    }
    catch (err) {
        console.log(err.message);
    }
}
// readExample('./data.txt');

//! WRITE
const writeExample = async (file, data) => {
    try {
        await writeFile(file, data, {encoding: 'utf8'});
        console.log('done');
    }
    catch (err) {
        console.log(err.message);
    }
}
// writeExample('./data2.txt', 'This is the most flexible approach for defining a custom range.');

//! APPEND
const appendExample = async (file, data) => {
    try {
        await appendFile(file, data, {encoding: 'utf8'});
        console.log('done');
    }
    catch (err) {
        console.log(err.message);
    }
}
// appendExample('./data2.txt', '\n The general formula is Math.floor(Math.random() * (max + 1)).');

//! unlink
const unlinkExample = async (file) => {
    try {
        await unlink(file);
        console.log('done');
    }
    catch (err) {
        console.log(err.message);
    }
}
// unlinkExample('./data2.txt');

//! readdir
const readdirExample = async (folderPath) => {
    try {
        const data = await readdir(folderPath);
        console.log(data);
    }
    catch (err) {
        console.log(err.message);
    }
}
// readdirExample('./');

//! stat
const statExample = async (filePath) => {
    try {
        const data = await stat(filePath);
        console.log(data.isFile());
        console.log(data.isDirectory());
    }
    catch (err) {
        console.log(err.message);
    }
}
// statExample('./test');

//! access
const accessExample = async (filePath) => {
    try {
        await access(filePath);
        console.log('ok');
    }
    catch (err) {
        console.log(err.message);
    }
}
accessExample('./app_03.js');