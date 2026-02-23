import { Schema } from 'mongoose';

export default new Schema({
  package: { type: String, required: true }
}, { _id: false });