import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    title : String,
    age : {
        type : Number,
        max : 90,
    },
    skills : {
        type: [String],
        default: []
    }

}, {timestamps : true});

export default mongoose.model('User', usersSchema);