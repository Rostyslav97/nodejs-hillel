import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    title: String,
    age: {
        type: Number,
        max: 90,
    },
    skills: {
        type: [String],
        default: []
    }

}, { timestamps: true });

usersSchema.pre('save', function () {
    console.log('PRE WORK', this.title);
    console.log(this.age);
});

usersSchema.post('save', function () {
    console.log('POST WORK');
    console.log('=======================');
});

export default mongoose.model('User', usersSchema);