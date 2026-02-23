import connectDB from './config/database.js';
import User from './models/User.js';
import mongoose from 'mongoose';

await connectDB();

const stepTwo = async () => {
    const user = await User.create({
        title : 'Alex',
        age : 77,
        address : {
            country : "Uk",
            city : "               London"
        }
    });
    console.log(user);
}


await stepTwo();


await mongoose.disconnect();



