import { getDb } from './db.js';

let COLLECTION_USERS;

export function getUsersCollection() {
  if (!COLLECTION_USERS) {
    const DB = getDb(process.env.DB_NAME);
    COLLECTION_USERS = DB.collection('users');
  }
  return COLLECTION_USERS;
}

