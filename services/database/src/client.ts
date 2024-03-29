import { drizzle } from "drizzle-orm/node-postgres";
import postgres from "pg";
import "dotenv/config";

export const pooledDrizzleClient = (
  dbString: string,
  logger: boolean = false
) => {
  const pool = new postgres.Pool({
    connectionString: dbString,
  });
  return drizzle(pool, {
    logger,
  });
};

export const singleDrizzleClient = (dbString: string) => {
  const client = new postgres.Client({
    connectionString: dbString,
  });
  return client.connect().then(() => drizzle(client));
};
