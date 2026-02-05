import http from 'http';
// import dotenv from 'dotenv';
// dotenv.config();
import config from 'config';

console.log(config);


const server = http.createServer(serverFunction);

function serverFunction(req, res) {
    console.log(req.method, req.url);
    res.end('work');
}

const PORT = process.env.PORT || 3500;

server.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`)
});