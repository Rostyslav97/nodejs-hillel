import dotenv from "dotenv";

const envPath = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env';
console.log('Loading env from:', envPath);

dotenv.config({
  path: envPath
});

console.log('PORT:', process.env.PORT);
console.log('DB_URL:', process.env.DB_URL);