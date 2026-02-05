import http from 'http';
import {readFile } from 'fs/promises';
import path from 'path';
import { serverFile } from './utils/server_file.js';



import config from 'config';
import dotenv from 'dotenv';
dotenv.config({
  path: `.env.${process.env.NODE_ENV || 'dev'}`
});

console.log(config);

console.log(process.env.PORT); 
console.log(process.env.DB_HOST); 

const server = http.createServer(serverFunction);

server.listen(process.env.PORT, () => {
  console.log('http://localhost:' + process.env.PORT);
});


async function serverFunction(req, res) {
 

  if (req.url === '/') res.end('server_02');
  else if (req.url === '/r1') {
    fetch('http://localhost:3700/random').then(data=>data.text()).then(data=> res.end('server2' + data));
  }
    else if (req.url === '/r2') {
    fetch('http://localhost:3700/string').then(data=>data.text()).then(data=> res.end('server2 ' + data));
  }
  else {
    res.statusCode = 404;
    return res.end('404');
  }
}