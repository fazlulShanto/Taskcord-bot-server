import { Pool } from "pg";
import { getPostgresUrl, getCurrentEnv } from "./utils/env";
export declare const db: import("drizzle-orm/node-postgres").NodePgDatabase<Record<string, never>> & {
    $client: Pool;
};
export declare const checkConnection: () => Promise<boolean>;
export { getPostgresUrl, getCurrentEnv };
export { usersModel, type DbUser, type DbNewUser } from "./models/user.model";
export { UserDal } from "./dal/user.dal";
//# sourceMappingURL=index.d.ts.map