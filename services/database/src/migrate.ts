import { migrate } from "drizzle-orm/node-postgres/migrator";
import { singleDrizzleClient } from "./client";
import "dotenv/config";

if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL not set");

async function main() {
  const db = await singleDrizzleClient(process.env.DATABASE_URL as string);
  console.log("Db has been set up");
  migrate(db, {
    migrationsFolder: "drizzle",
  }).then(() => {
    console.log("Database migrated");
    process.exit(0);
  });
}

main();
