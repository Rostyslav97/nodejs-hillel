import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;

async function run() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(dbName);

    const booksCollection = db.collection('books');
    const migrationsCollection = db.collection('migrations');

    const count = await booksCollection.countDocuments();

    if (count > 0) {
      console.log('Books already exist. Exit.');
      return;
    }

    const filePath = path.join(__dirname, 'books.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    const result = await booksCollection.insertMany(data);

    await migrationsCollection.insertOne({
      fileName: 'books.json',
      importedCount: result.insertedCount,
      importedAt: new Date()
    });

    console.log(`Imported ${result.insertedCount} books.`);
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await client.close();
  }
}

run();
