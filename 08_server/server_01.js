import http from 'http';

const server = http.createServer(serverFunction);

function serverFunction(req, res) {
    console.log(req.method, req.url);
    res.statusCode = 201;
    res.statusMessage = 'Goods';
    res.setHeader('Content-Type', 'application/json');
    res.write('1');
    res.write('2');
    // res.end('<h1>header</h1>');
    res.end(JSON.stringify({"one": 1}));

}

server.listen(3100, ()=> {
    console.log(`http://localhost:3100`);
});
