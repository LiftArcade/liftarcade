import {
  pgTable,
  varchar,
  timestamp,
  text,
  integer,
  primaryKey,
  json,
  date,
} from "drizzle-orm/pg-core";
import type { Activity } from "./types";
import { typeid } from "typeid-js";

export const workout = pgTable("workout", {
  id: text("id")
    .notNull()
    .primaryKey()
    .$default(() => typeid("workout").toString()),
  owner_id: text("owner_id").notNull(),
  created_at: timestamp("created_at").notNull().defaultNow(),
  updated_at: timestamp("updated_at").notNull().defaultNow(),
  performed_at: date("performed_at", { mode: "string" }).notNull(),
  activitiesJSON: json("activitiesJSON").$type<Activity[]>(),
});

export const userProfile = pgTable("user_profile", {
  id: text("id").notNull().primaryKey(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
  owner_id: text("owner_id").notNull(),
  numberOfWorkouts: integer("numberOfWorkouts").notNull().default(0),
  strengthProfile: json("strengthProfile"),
});

export const users = pgTable("users", {
  id: text("id")
    .notNull()
    .primaryKey()
    .$default(() => typeid("user").toString()),
  name: text("name"),
  email: text("email").notNull(),
  image: text("image"),

  // OAuth sections
  facebook_id: text("facebook_id"),
});

export const sessions = pgTable("sessions", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});
