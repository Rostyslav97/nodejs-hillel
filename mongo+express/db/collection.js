import { getDb } from "./db.js";

let COLLECTION_URLS;

export function getUrlsCollection() {
    if (!COLLECTION_URLS) {
        const DB = getDb(process.env.DB_NAME);
        COLLECTION_URLS = DB.collection('urls');
    }
    return COLLECTION_URLS;
}