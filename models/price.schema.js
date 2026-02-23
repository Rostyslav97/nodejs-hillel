import { Schema } from 'mongoose';

export default new Schema({
  currency: {
    type: String,
    required: true,
    enum: ['UAH', 'USD', 'EUR']
  },
  value: {
    type: Number,
    required: true,
    min: 0,
    set: v => Math.round(v),
    get: v => v.toFixed(2)
  }
}, { _id: false });