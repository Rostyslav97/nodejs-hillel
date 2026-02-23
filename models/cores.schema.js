import { Schema } from 'mongoose';

export default new Schema({
  total: { type: Number, required: true, min: 1 },
  performance: { type: Number, required: true, min: 0 },
  efficient: { type: Number, required: true, min: 0 }
}, { _id: false });