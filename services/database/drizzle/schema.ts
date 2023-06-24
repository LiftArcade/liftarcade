import { pgTable, pgEnum, pgSchema, AnyPgColumn, varchar, foreignKey, boolean, bigint } from "drizzle-orm/pg-core"


import { sql } from "drizzle-orm"

export const authUser = pgTable("auth_user", {
	id: varchar("id", { length: 15 }).primaryKey().notNull(),
});

export const authKey = pgTable("auth_key", {
	id: varchar("id", { length: 255 }).primaryKey().notNull(),
	userId: varchar("user_id", { length: 15 }).notNull().references(() => authUser.id),
	primaryKey: boolean("primary_key").notNull(),
	hashedPassword: varchar("hashed_password", { length: 255 }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	expires: bigint("expires", { mode: "number" }),
});

export const authSession = pgTable("auth_session", {
	id: varchar("id", { length: 128 }).primaryKey().notNull(),
	userId: varchar("user_id", { length: 15 }).notNull().references(() => authUser.id),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	activeExpires: bigint("active_expires", { mode: "number" }).notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	idleExpires: bigint("idle_expires", { mode: "number" }).notNull(),
});