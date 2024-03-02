import { migrate } from "drizzle-orm/postgres-js/migrator";
import { client } from "./client";
import "dotenv/config";

if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL not set");

async function main() {
  const db = await client(process.env.DATABASE_URL as string);
  console.log("Attempting to connect to: ", process.env.DATABASE_URL);
  migrate(db, {
    migrationsFolder: "drizzle",
  }).then(() => {
    console.log("Database migrated");
    process.exit(0);
  });
}

main();
