import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    title : String,
    age : {
        type : Number,
        max : 90,
    }

}, {timestamps : true});

export default mongoose.model('User', usersSchema);