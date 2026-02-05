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
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  // res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  console.log(req.method, req.url);

  if (req.url.startsWith('/css/')) {
    return serverFile(res, path.join('public', req.url), '.css');
  }
  if (req.url.startsWith('/images/')) {
    const ext = path.extname(req.url).toLowerCase();
    return serverFile(res, path.join('public', req.url), ext);
  }


  if (req.url === '/') res.end('server_01')
  else if (req.url === '/random') res.end(`${Math.random()}`)
  else if (req.url === '/string') res.end(`hello`)
  else {
    res.statusCode = 404;
    return res.end('404');
  }
}