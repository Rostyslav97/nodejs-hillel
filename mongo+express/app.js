import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import morgan from 'morgan';

import { MongoClient } from 'mongodb';
import { setClient } from './db/db.js';

const app= express();

const PORT = process.env.PORT || 4300;
const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = process.env.DB_NAME;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set('view engine', 'pug');
app.set('views', './views');
app.use(morgan('dev'));

//! connect to MongoDB
const client = new MongoClient(MONGO_URI);
try {
    await client.connect();
    setClient(client);
    console.log(`♥️  Connect to MONGODB - ok `);
}
catch(err) {
    console.log(err);
    process.exit(1);
}

import mainRouter from './routes/main.js';
app.use('/', mainRouter);
import urlRouter from './routes/url.js';
app.use('/url', urlRouter);

app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`));

import './db/shutdown.js';


