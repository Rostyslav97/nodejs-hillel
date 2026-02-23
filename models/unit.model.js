import mongoose, { Schema } from 'mongoose';

import CoresSchema from './cores.schema.js';
import FrequencySchema from './frequency.schema.js';
import CacheSchema from './cache.schema.js';
import TdpSchema from './tdp.schema.js';
import PriceSchema from './price.schema.js';

const UnitSchema = new Schema({
  id: { type: String, required: true, unique: true, lowercase: true, trim: true },
  type: { type: String, required: true, enum: ['processor'] },
  brand: { type: String, required: true, trim: true },
  model: { type: String, required: true },
  series: { type: String, required: true },
  generation: String,
  socket: { type: String, required: true },
  architecture: String,
  cores: { type: CoresSchema, required: true },
  threads: { type: Number, required: true, min: 1 },
  frequency: { type: FrequencySchema, required: true },
  cache: { type: CacheSchema, required: true },
  tdp: { type: TdpSchema, required: true },
  technologies: { type: [String], default: [] },
  coolerIncluded: { type: Boolean, default: false },
  unlockedMultiplier: { type: Boolean, default: false },
  price: { type: PriceSchema, required: true },
  availability: {
    type: String,
    enum: ['in_stock', 'out_of_stock', 'preorder'],
    default: 'in_stock'
  },
  rating: { type: Number, min: 0, max: 5 },
  reviewsCount: { type: Number, min: 0, default: 0 }
}, {
  timestamps: true,
  toJSON: { getters: true },
  toObject: { getters: true }
});

UnitSchema.pre('validate', function() {
  if (this.cores.performance + this.cores.efficient !== this.cores.total) {
    throw new Error('Invalid cores configuration');
  }
});

UnitSchema.virtual('isHighEnd').get(function() {
  return this.cores.total >= 16 && this.threads >= 24;
});

export default mongoose.model('Unit', UnitSchema);