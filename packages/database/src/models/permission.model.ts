import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { uuidv7 } from "uuidv7";

export const permissionModel = pgTable("permissions", {
  id: uuid("id")
    .primaryKey()
    .notNull()
    .$defaultFn(() => uuidv7()),
  permissionSlug: varchar("permission_slug").notNull().unique(),
  permissionTitle: varchar("permission_title").notNull(),
});

export type DbPermission = typeof permissionModel.$inferSelect;
export type DbNewPermission = typeof permissionModel.$inferInsert;
