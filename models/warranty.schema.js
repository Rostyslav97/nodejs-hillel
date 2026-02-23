import { Schema } from 'mongoose';

export default new Schema({
  period: { type: Number, required: true, min: 0 },
  manufacturer: { type: String, required: true }
}, { _id: false });