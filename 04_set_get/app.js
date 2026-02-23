import connectDB from './config/database.js';
import User from './models/User.js';
import mongoose from 'mongoose';

await connectDB();


const stepTwo = async () => {
    // const user = await User.findById('6980e37c4267da8cda594a51');
    // console.log(user.age);

    // const user2 = new User({title : "new user", age : 22.5, skills : ["one"]});
    // const result = await user2.save();

    // const user2 = await User.create({title : "new user", age : 22.5, skills : ["one"]});
    // console.log(user2);

     const user = await User.findOneAndUpdate(
        {"title" : "Olga"}, 
        {"title" : "Olga", age : 58},
    )
    console.log(user);
}


await stepTwo();


await mongoose.disconnect();



