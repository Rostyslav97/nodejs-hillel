
import './db/shutdown.js';
import dotenv from 'dotenv';
dotenv.config();

import { MongoClient } from 'mongodb';
import { setClient, getDb } from './db/db.js';


const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017';
const DB_NAME = process.env.DB_NAME;


// connect to DB
const client = new MongoClient(MONGO_URI);
try {
  await client.connect();
  setClient(client);
  console.log(`Connected to MongoDB at ${MONGO_URI}`);
} catch (error) {
  console.error('Failed to connect to MongoDB:', error);
  process.exit(1); // Exit the process if the connection fails
}

// import { getUsersCollection } from './db/collections.js';
const db = getDb(process.env.DB_NAME);


//! READ
const getAllUsers = async () => {
  const cursor = db.collection('users').find();
  const data = await cursor.toArray();
  console.log(data);
}


//! CREATE
const setUser = async () => {
  const result = await db.collection('users').insertOne({
    "name": "Alex",
    "age": 44
  });
  console.log(result);
}
// await setUser();

//! CREATE Many
const setUsers = async () => {
  const result = await db.collection('users').insertMany([
    {
      "name": "Oleg",
      "age": 66
    },
    {
      "name": "Leya",
      "age": 67
    }
  ]);
  console.log(result);
}
// await setUsers();


//! Update One
const updateUser = async () => {
  // db.collection.updateOne(filter, update, options)

  const result = await db.collection('users').updateOne({
    "name" : "Alex"
  }, {
    $set : {"age" : 77}
  });
  console.log(result);
}
// await updateUser();

//! Update Many
const updateUsers = async () => {
  // db.collection.updateOne(filter, update, options)

  const result = await db.collection('users').updateMany({
    "name" : "Alex"
  }, {
    $set : {"age" : 77}
  });
  console.log(result);
}
// await updateUsers();

//! DeleteOne
const deleteUser = async () => {
  // db.collection.updateOne(filter, update, options)

  const result = await db.collection('users').deleteOne({
    "name" : "Alex"
  });
  console.log(result);
}
// await deleteUser();

//! DeleteMany
const deleteUsers = async () => {
  // db.collection.updateOne(filter, update, options)

  const result = await db.collection('users').deleteMany({
    "name" : "Leya"
  });
  console.log(result);
}
// await deleteUsers();




await getAllUsers();
await client.close();


