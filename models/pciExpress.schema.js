import { Schema } from 'mongoose';

export default new Schema({
  version: { type: String, required: true },
  lanes: { type: Number, required: true }
}, { _id: false });