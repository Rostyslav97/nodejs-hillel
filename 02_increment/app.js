import connectDB from './config/database.js';
import User from './models/User.js';
import mongoose from 'mongoose';

await connectDB();

// $inc
// $push
const stepTwo = async () => {
    const user = await User.findOneAndUpdate(
        {"title" : "Pavlo"}, 
        {
            $inc : {age : -2},
            // $push : {skills : "new skills 1"}
            // $addToSet : {skills : "new skills 2"}
            $pull : {skills : "new skills 1"}
        },
        {new : true}
    )
    console.log(user);
}


await stepTwo();


await mongoose.disconnect();



