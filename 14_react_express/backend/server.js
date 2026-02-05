import express from 'express';
import logger from 'morgan';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3500;

const app = express();

app.use(logger('dev'));
// app.use(cors());

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST']
}));

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

// app.use((req, res, next)=>{
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });

app.get('/', (req, res) => {
    res.send('work');
});


app.get('/data', (req, res) => {
    if (req.accepts('html')) {
        res.send('work for react 2');
    }
    else res.send('some else');
});

app.get('/data2', (req, res) => {
    res.send('<h1>About page</h1>');
});