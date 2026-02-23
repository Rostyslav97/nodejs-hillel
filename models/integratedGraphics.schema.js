import { Schema } from 'mongoose';

export default new Schema({
  model: { type: String, required: true },
  baseFrequency: { type: Number, required: true },
  maxFrequency: { type: Number, required: true }
}, { _id: false });