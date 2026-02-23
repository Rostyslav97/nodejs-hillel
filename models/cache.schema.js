import { Schema } from 'mongoose';

export default new Schema({
  l2: { type: String, required: true },
  l3: { type: String, required: true }
}, { _id: false });