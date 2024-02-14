/*
  DO NOT RENAME THIS FILE FOR DRIZZLE-ORM TO WORK
*/
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey().notNull(),
  saasId: text("saasId").notNull(),
  userCustomId: text("userCustomId").unique(),
  displayName: text("displayName").notNull(),
});
