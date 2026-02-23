import { use } from 'react';
import connectDB from './config/database.js';
import User from './models/User.js';
import mongoose from 'mongoose';

await connectDB();

const stepOne = async () => {
    const user = new User({ title: "Alex", age: 22 });
    await user.save();

    // const user = await User.create({title: "Igor", age : 22});
    console.log(user);
}

// const stepTwo = async () => {
//     const user = await User.insertOne({
//         title: "Olga",
//         age: 444
//     }, {
//         // validateBeforeSave : false
//     });
//     console.log(user);
// }

const stepTwo = async () => {
    const user = await User.findOneAndUpdate(
        {"title" : "Alex"}, 
        {"title" : "Pavlo", age : 55},
        {runValidators : false, new : true}
    )
    console.log(user);
}

// await stepOne();
await stepTwo();


await mongoose.disconnect();



