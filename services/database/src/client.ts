import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import "dotenv/config";

// Currently, this does not accept pooled clients.
// INFO: Consider adding support for pooled clients if it ever gets bigger
export const client = (dbString: string, logger: boolean = false) => {
  const queryClient = postgres(dbString, { max: 1, idle_timeout: 5 });
  return drizzle(queryClient, { logger });
};
