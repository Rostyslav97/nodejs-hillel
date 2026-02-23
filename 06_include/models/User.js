import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    country : String,
    city : {
        type: String,
        trim : true
    }
}, {_id: false});

const usersSchema = new mongoose.Schema({
    title: String,
    age: {
        type: Number,
        max: 90,
    },
    address : {
       type : addressSchema,
       require : false
    }
}, { 
    timestamps: true,
    optimisticConcurrency : true
 });



export default mongoose.model('User', usersSchema);