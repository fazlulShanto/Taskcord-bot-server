import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { uuidv7 } from "uuidv7";
import { projectModel } from "./project.model";

export const projectDefinedRolesModel = pgTable("project_defined_roles", {
  id: uuid("id")
    .primaryKey()
    .notNull()
    .$defaultFn(() => uuidv7()),
  projectId: uuid("project_id")
    .notNull()
    .references(() => projectModel.id),
  roleName: varchar("role_name").notNull(),
});

export type DbProjectDefinedRole = typeof projectDefinedRolesModel.$inferSelect;
export type DbNewProjectDefinedRole =
  typeof projectDefinedRolesModel.$inferInsert;

/* eslint-disable @typescript-eslint/no-extraneous-class -- This is a DAL class */
import { eq } from "drizzle-orm";
import { db } from "../index";

export class ProjectDefinedRolesDal {
  static async createRole(
    input: DbNewProjectDefinedRole
  ): Promise<DbProjectDefinedRole> {
    const [role] = await db
      .insert(projectDefinedRolesModel)
      .values(input)
      .returning();

    return role;
  }

  static async getRoleById(id: string): Promise<DbProjectDefinedRole | null> {
    const result = await db
      .select()
      .from(projectDefinedRolesModel)
      .where(eq(projectDefinedRolesModel.id, id))
      .limit(1);

    return result.at(0) ?? null;
  }

  static async getRolesByProjectId(
    projectId: string
  ): Promise<DbProjectDefinedRole[]> {
    return await db
      .select()
      .from(projectDefinedRolesModel)
      .where(eq(projectDefinedRolesModel.projectId, projectId));
  }

  static async updateRole(
    id: string,
    data: Partial<DbNewProjectDefinedRole>
  ): Promise<DbProjectDefinedRole> {
    const [updatedRole] = await db
      .update(projectDefinedRolesModel)
      .set(data)
      .where(eq(projectDefinedRolesModel.id, id))
      .returning();

    return updatedRole;
  }

  static async deleteRole(id: string): Promise<DbProjectDefinedRole> {
    const [deletedRole] = await db
      .delete(projectDefinedRolesModel)
      .where(eq(projectDefinedRolesModel.id, id))
      .returning();

    return deletedRole;
  }
}
