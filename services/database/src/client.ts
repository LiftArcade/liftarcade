import { drizzle } from "drizzle-orm/node-postgres";
import postgres from "pg";
import "dotenv/config";

export const pooledDrizzleClient = (dbString: string) => {
  const client = new postgres.Pool({
    connectionString: process.env.DATABASE_URL,
  });
  return client.connect().then(() => drizzle(client));
};

export const singleDrizzleClient = (dbString: string) => {
  const client = new postgres.Client({
    connectionString: process.env.DATABASE_URL,
  });
  return client.connect().then(() => drizzle(client));
};
