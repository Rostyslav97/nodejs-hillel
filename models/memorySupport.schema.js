import { Schema } from 'mongoose';

export default new Schema({
  type: {
    type: [String],
    required: true,
    validate: v => v.length > 0
  },
  maxFrequency: {
    DDR4: Number,
    DDR5: Number
  },
  channels: { type: Number, required: true, min: 1 },
  maxCapacity: { type: String, required: true }
}, { _id: false });