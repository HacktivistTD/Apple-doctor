// app/utils/db.ts
import { MongoClient } from "mongodb";

let db: any = null;

export async function connectToDatabase() {
  if (db) return db;

  const client = new MongoClient(process.env.MONGODB_URI || "");
  await client.connect();
  db = client.db(process.env.MONGODB_DB || "apple_store");

  return db;
}
