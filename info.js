import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

const uri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;

async function run() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(dbName);
    const books = db.collection('books');

    const args = process.argv.slice(2);


    if (args.includes('--author')) {
      const authors = await books.distinct('author');

      console.log('Authors:');
      authors.forEach(author => console.log(author));
      return;
    }


    if (args.includes('--genre')) {
      const genres = await books.distinct('genre');

      console.log('Genres:');
      genres.forEach(genre => console.log(genre));
      return;
    }


    const ratingArg = args.find(arg => arg.startsWith('--rating='));
    if (ratingArg) {
      const value = parseFloat(ratingArg.split('=')[1]);

      const result = await books
        .find({ rating: { $gte: value } })
        .project({ title: 1, _id: 0 })
        .toArray();

      console.log(`Books with rating >= ${value}:`);
      result.forEach(book => console.log(book.title));
      return;
    }


    const tagsArg = args.find(arg => arg.startsWith('--tags='));
    if (tagsArg) {
      const tag = tagsArg.split('=')[1];

      const result = await books.updateMany(
        {},
        { $addToSet: { tags: tag } }
      );

      console.log(`Modified documents: ${result.modifiedCount}`);
      return;
    }


    const count = await books.countDocuments();
    const allBooks = await books
      .find({}, { projection: { title: 1 } })
      .toArray();

    console.log(`Total books: ${count}`);
    allBooks.forEach(book => console.log(book.title));

  } catch (err) {
    console.error('Error:', err);
  } finally {
    await client.close();
  }
}

run();
