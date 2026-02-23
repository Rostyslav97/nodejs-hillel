import connectDB from './config/database.js';
import User from './models/User.js';
import mongoose from 'mongoose';

await connectDB();

const stepTwo = async () => {
    // const user = new User({"title" : "Olga", "age" : 33});
    // _v change
    // const user = await User.findOne({ "title": "Olga" });
    // user.age = 41;
    // await user.save();

    // _v - not change
    const user = await User.findOneAndUpdate(
            {"title": "Olga"}, 
            {"title" : "Pavlo", age : 55}
        );

    console.log(user);
}


await stepTwo();


await mongoose.disconnect();



