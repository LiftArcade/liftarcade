import {
  pgTable,
  varchar,
  timestamp,
  uniqueIndex,
  text,
  integer,
  primaryKey,
  json,
  real,
} from "drizzle-orm/pg-core";
import type { AdapterAccount } from "@auth/core/adapters";

export const workout = pgTable("workout", {
  id: text("id").notNull().primaryKey(),
  public_id: varchar("public_id", { length: 14 }),
  owner_id: text("owner_id").notNull(),
  created_at: timestamp("created_at").notNull().defaultNow(),
  updated_at: timestamp("updated_at").notNull().defaultNow(),
  performed_at: timestamp("performed_at").notNull(),
  activitiesJSON: json("activitiesJSON"),
});

export const activity = pgTable("activity", {
  id: text("id").notNull().primaryKey(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  performedAt: timestamp("performedAt").notNull().defaultNow(),
  type: text("type").notNull().default("SRI"),
  owner_id: text("owner_id").notNull(),
  workout_id: text("workout_id").notNull(),
  position: integer("position").notNull(),
  exerciseID: text("exerciseID").notNull(),
  sets: integer("sets").notNull(),
  reps: integer("reps").notNull(),
  weight: real("weight").notNull(),
  weightUnit: text("weightUnit").notNull(),
  intensity: integer("intensity").notNull(),
  notes: text("notes"),
});

export const strengthProfile = pgTable("strength_profile", {
  id: text("id").notNull().primaryKey(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
  owner_id: text("owner_id").notNull(),
  baseStrength: real("base_strength").notNull(),
});

export const users = pgTable("users", {
  id: text("id").notNull().primaryKey(),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
});

export const accounts = pgTable(
  "accounts",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccount["type"]>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey(account.provider, account.providerAccountId),
  })
);

export const sessions = pgTable("sessions", {
  sessionToken: text("sessionToken").notNull().primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey(vt.identifier, vt.token),
  })
);
