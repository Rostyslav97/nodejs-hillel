import dotenv from 'dotenv';
dotenv.config();

import { MongoClient } from 'mongodb';
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

//! READ
const getAllUsers = async () => {
    const cursor = getUsersCollection().find();
    const data = await cursor.toArray();
    console.log(data);
}

//! CREATE
const setUser = async () => {
    const result = await getUsersCollection().insertOne({
        "name": "Alex",
        "age": 50
    });
    console.log(result);
}

//! CREATE Many
const setUsers = async () => {
    const result = await getUsersCollection().insertMany([
        {
            "name": "Oleg",
            "age": 20
        },
        {
            "name": "Leya",
            "age": 21
        }
    ]);
    console.log(result);
}

//! UPDATE ONE - Many
const updateUser = async () =>{
    // const result = await getUsersCollection().updateOne({
    const result = await getUsersCollection().updateMany({
        "name" : "Alex"
    }, {
        $set : {"age" : 33}
    });
    console.log(result);
}

//! Delete
const deleteUser = async () =>{
    const result = await getUsersCollection().deleteOne({
    // const result = await getUsersCollection().deleteMany({
        "name" : "Alex"
    });
    console.log(result);
}

// await getAllUsers();
// await setUser();
// await setUsers();
// await updateUser();
await deleteUser();


await client.close();