import mongoose from "mongoose";

const connectCredential = 'mongodb://localhost:27017/test_03';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(connectCredential);
        console.log('database connect -> ok');
        console.log(connectCredential);
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
}

mongoose.connection.on('connected', () => {
  console.log('🐭 Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.log('🐭 Mongoose connected error: ', err.message);
});

mongoose.connection.on('disconnected', (err) => {
  console.log('🐭 Mongoose disconnected from Mongo');
});

// shutdown


process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('************** \n','MongoDB connection closed');
  process.exit(0);
});

export default connectDB