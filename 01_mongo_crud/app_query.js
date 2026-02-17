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
    // const cursor = getUsersCollection().find(
    //     {}, 
    //     { projection : {name : 1, _id : 0}}
    // );

    // const cursor = getUsersCollection().find(
    //     {},
    //     { projection: { name: 1, _id: 0 } }
    // ).limit(2).skip(1);

    // const cursor = getUsersCollection().find(
    //     {
    //         age: { $exists: true }
    //     },
    //     { projection: { name: 1, age: 1, _id: 0 } }
    // ).sort({ age: 1 }).limit(1)

    // const cursor = getUsersCollection().find(
    //     {
    //         age: { $exists: false }
    //     },
    //     { projection: { name: 1, age: 1, _id: 0 } }
    // )

    //! AND
    // const cursor = getUsersCollection().find(
    //     {
    //        $and : [{active:true}, {role: "admin"}]
    //     }
    // ).sort({ age: 1 }).limit(1)

    //!OR
    // const cursor = getUsersCollection().find(
    //     {
    //         $or: [{ role: "moderator"}, { role: "admin" }]
    //     }
    // )

    //!  ne
    // const cursor = getUsersCollection().find(
    //     {
    //         role : {$ne : "admin"}
    //     }
    // )

    //!  in
    // const cursor = getUsersCollection().find(
    //     {
    //         role: { $in: ["admin", "moderator"] }
    //     }
    // )

    //!  nin
    // const cursor = getUsersCollection().find(
    //     {
    //         role: { $nin: ["admin", "moderator"] }
    //     }
    // )

    //! gt - gte - lt
    // const cursor = getUsersCollection().find(
    //     {
    //         // age : {$gte : 34}
    //         age: { $lte: 22 }
    //     }
    // )

    //! range
    // const cursor = getUsersCollection().find(
    //     {
    //         $and : [
    //             { age : {$gt : 27}},
    //             { age : {$lt : 35}},
    //         ]
    //     }
    // )

    //! dot notation
    // const cursor = getUsersCollection().find(
    //     {
    //         "address.country":  {$ne : "Ukraine"}
    //     }
    // )

    //! array
    // const cursor = getUsersCollection().find(
    //     {
    //         // tags:  "JavaScript"
    //         // tags:  {$in: ["JavaScript", "Docker"]}
    //         // tags:  {$size: 2}
    //         // tags:  {$all: ["Linux", "Docker", "Kubernetes"]}
    //     }
    // )

    //? RegExp
    // const cursor = getUsersCollection().find(
    //     {
    //         name : {$regex : "al", $options: "i"}
    //     }
    // )

    //! text find - index
    const cursor = getUsersCollection().find(
        {
            $text : {$search : "Alex"}
        }
    )


    const data = await cursor.toArray();
    console.log(data);
}

await getAllUsers();


await client.close();