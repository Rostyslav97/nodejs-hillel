import { writeFile } from 'fs/promises';
import path from 'path';
// common js __dirname
import { __dirname } from './helpers/path.js';


async function createJSONFile(path_to_file, data_object) {
    try {
        const jsonString = JSON.stringify(data_object, null, 2);
        await writeFile(path_to_file, jsonString, 'utf8');
        console.log('file was created');
    }
    catch (err) {
        console.log('Error: ', err);
    }
}

const data = {
    "id": 7373,
    delete : true,
    null_data: null,
    foo : ()=>{console.log('hello')},
    'number' : 123.345,
    "popup": {
        "menuitem": [
            { 
                "value": "New", 
                "onclick": "createItem()" }
        ]
    }
}

// console.log(__dirname);
const filePath = path.resolve(__dirname, 'files', 'menu.json');
// console.log(filePath);
createJSONFile(filePath, data);
//  /home/user/sprint_02