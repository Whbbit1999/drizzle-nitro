import { sqliteTable, int, text } from "drizzle-orm/sqlite-core";
import { InferSelectModel } from 'drizzle-orm'

export const user = sqliteTable("user", {
  id: int("id").primaryKey({ autoIncrement: true }),
  username: text("username").notNull(),
  password: text("password").notNull(),
  email: text('email').unique().notNull(),
})

export type User = InferSelectModel<typeof user>