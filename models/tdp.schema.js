import { Schema } from 'mongoose';

export default new Schema({
  base: { type: Number, required: true },
  max: { type: Number, required: true }
}, { _id: false });