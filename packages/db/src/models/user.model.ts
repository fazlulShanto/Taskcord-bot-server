import { sql } from "drizzle-orm";
import {
  pgTable,
  uuid,
  varchar,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";
import { uuidv7 } from "uuidv7";

export const usersModel = pgTable("users", {
  id: uuid("id")
    .primaryKey()
    .notNull()
    .$defaultFn(() => uuidv7()),
  discordId: varchar("discord_id").unique().notNull(),
  fullName: varchar("full_name"),
  nickName: varchar("nick_name").default(""),
  avatar: varchar("avatar"),
  email: varchar("email").default(""),
  discordRefreshToken: varchar("discord_refresh_token"),
  discordAccessToken: varchar("discord_access_token"),
  discordAccessTokenExpiresAt: timestamp("discord_access_token_expires_at"),
  lastAuth: timestamp("last_auth").defaultNow(),
  isVerified: boolean("is_verified").default(false),
  updatedAt: timestamp("updated_at").defaultNow(),
  createdAt: timestamp("created_at").defaultNow(),
});

export type DbUser = typeof usersModel.$inferSelect;
export type DbNewUser = typeof usersModel.$inferInsert;
