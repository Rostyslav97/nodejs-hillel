import dotenv from 'dotenv';
dotenv.config();

import { MongoClient, ObjectId } from 'mongodb';
import { setClient } from './db/db.js';

const MONGO_URI = process.env.MONGO_URI;

// connect to MongoDB
const client = new MongoClient(MONGO_URI);
try {
    await client.connect();
    setClient(client);
    console.log('Connect to MONGODB - OK');
}
catch (err) {
    console.log(err);
    process.exit(1);
}

import { getUsersCollection } from './db/collections.js';

//! GET by ID
const getById = async () => {
    const data = await getUsersCollection().findOne({
        _id : new ObjectId('699354b08aa76e07eb07d584')
    });
    console.log(data);
}

// SET new ObjectId
const setUserWithId = async () => {
    const data = await getUsersCollection().insertOne({
        _id : new ObjectId(),
        name : "Olga",
        age : 22
    });
    console.log(data);
}

// SET new ObjectId
const getT = async () => {
    const data = await getUsersCollection().findOne({
        name : "Oleg"
    });
    console.log(data);
    console.log(data._id.getTimestamp());
}


await getById();
// await setUserWithId();
// await getT();


await client.close();