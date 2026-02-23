import { Schema } from 'mongoose';

export default new Schema({
  base: { type: Number, required: true, min: 0 },
  turbo: { type: Number, required: true, min: 0 }
}, { _id: false });