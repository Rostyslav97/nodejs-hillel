import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required: [true, 'Name is required'],
        trim : true,
        minLength :  [2, 'Name must be at least 2 ch'],
        maxLength : [100, 'Name must not exceed 100 ch']
    },
    price : {
        type : Number,
        required: [true, 'Price is required'],
        min : [0, 'Price cannot be negative']
    },
    category : {
        type : String,
        required : [true, 'Cat is required'],
        enum : {
            values : ['Electronics', 'Clothing', 'Books', 'Sports', 'Other' ],
            message: `{VALUE} is not a valid category`
        }
    },
    description : {
        type : String,
        trim : true,
        maxLength : [500, 'Description must not exceed 500 ch']
    },
    inStock : {
        type : Boolean,
        default : true
    },
    quantity : {
        type : Number,
        default : 0,
        min : [0, 'Quantity cannot be negative']
    }

}, {
    timestamps : true,
    
});

export default mongoose.model('Product', productSchema);