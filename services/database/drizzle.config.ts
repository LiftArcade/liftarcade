import type { Config } from "drizzle-kit";
import "dotenv/config";

if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL not set");

export default {
  schema: "./src/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  },
} satisfies Config;
