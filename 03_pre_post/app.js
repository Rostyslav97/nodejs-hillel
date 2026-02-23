import connectDB from './config/database.js';
import User from './models/User.js';
import mongoose from 'mongoose';

await connectDB();


const stepTwo = async () => {
    const user = await User.findOne({ title: "Pavlo" });
    user.age = 55;
    await user.save();
    console.log(user);
}


await stepTwo();


await mongoose.disconnect();



