import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    title: String,
    age: {
        type: Number,
        max: 90,
        get: item => item + ' years',
        // set: item => Math.trunc(item)
    },
    skills: {
        type: [String],
        default: []
    }

}, { timestamps: true });



export default mongoose.model('User', usersSchema);