import mongoose from 'mongoose';
import Unit from './models/unit.model.js';
import data from './unit.json' with { type: 'json' };

async function seed() {
  await mongoose.connect('mongodb://127.0.0.1:27017/hardware');

  await Unit.deleteMany({});
  const saved = await Unit.create(data);

  console.log(saved.toJSON());

  await mongoose.disconnect();
}

seed();