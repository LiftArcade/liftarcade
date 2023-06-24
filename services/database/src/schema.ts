import {
  pgTable,
  bigint,
  varchar,
  boolean,
  serial,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

/**
 * Authentication section: auth_user, auth_session, auth_key
 *
 * This was from the setup of Lucia - auth.
 * https://lucia-auth.com/adapters/drizzle?sveltekit
 */
const user = pgTable("auth_user", {
  id: varchar("id", {
    length: 15, // change this when using custom user ids
  }).primaryKey(),
  // other user attributes
});

const session = pgTable("auth_session", {
  id: varchar("id", {
    length: 128,
  }).primaryKey(),
  userId: varchar("user_id", {
    length: 15,
  })
    .notNull()
    .references(() => user.id),
  activeExpires: bigint("active_expires", {
    mode: "number",
  }).notNull(),
  idleExpires: bigint("idle_expires", {
    mode: "number",
  }).notNull(),
});

const key = pgTable("auth_key", {
  id: varchar("id", {
    length: 255,
  }).primaryKey(),
  userId: varchar("user_id", {
    length: 15,
  })
    .notNull()
    .references(() => user.id),
  primaryKey: boolean("primary_key").notNull(),
  hashedPassword: varchar("hashed_password", {
    length: 255,
  }),
  expires: bigint("expires", {
    mode: "number",
  }),
});

/**
 * ADD SIMPLE WOKROUT SECTION FOR TESTING
 */

const workout = pgTable(
  "workout",
  {
    id: serial("id").primaryKey(),
    public_id: varchar("public_id", { length: 14 }),
    created_at: timestamp("created_at").notNull().defaultNow(),
    updated_at: timestamp("updated_at").notNull().defaultNow(),
  },
  (table) => {
    return {
      publicIdIdx: uniqueIndex("publicIdIdx").on(table.public_id),
    };
  }
);

export { user, session, key, workout };
