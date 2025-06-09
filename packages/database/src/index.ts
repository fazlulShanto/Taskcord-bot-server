import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { getPostgresUrl, getCurrentEnv } from "./utils/env";

// Create the database connection
const connectionString = getPostgresUrl();
if (!connectionString) {
  throw new Error("Database URL is not defined. ENV =>" + process.env.NODE_ENV);
}

// Configure the connection pool
const pool = new Pool({
  connectionString,
  max: 20, // maximum number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
  connectionTimeoutMillis: 2000, // how long to wait for a connection
  ssl: getCurrentEnv() === "prod" ? { rejectUnauthorized: false } : false, // Enable SSL in production
});

// Create the drizzle instance with the pooled connection
export const db = drizzle(pool);

// Connection check utility
export const checkConnection = async () => {
  try {
    const client = await pool.connect();
    await client.query("SELECT 1");
    client.release();
    return true;
  } catch (err) {
    console.error("❌ Unable to connect to postgres", err);
    throw err;
  }
};

// Pool event handlers
pool.on("error", () => {
  console.error("❌ Unexpected error on idle client");
  process.exit(-1);
});

pool.once("connect", () => {
  console.log(`✅ Connected to postgres: ${getCurrentEnv()}`);
});

// Export utilities
export { getPostgresUrl, getCurrentEnv };
//USER MODEL
export { usersModel, type DbUser, type DbNewUser } from "./models/user.model";
//USER DAL
export { UserDal } from "./dal/user.dal";
//PROJECT MODEL
export {
  projectModel,
  type DbProject,
  type DbNewProject,
} from "./models/project.model";
//PROJECT DAL
export { ProjectDal } from "./dal/project.dal";
//SERVER MODEL
export {
  serverModel,
  type DbServer,
  type DbNewServer,
  ServerDal,
} from "./models/server.model";

//LABEL MODEL
export {
  labelModel,
  type DbLabel,
  type DbNewLabel,
  LabelDal,
} from "./models/label.model";

export {
  statusModel,
  type DbStatus,
  type DbNewStatus,
  StatusDal,
} from "./models/status.model";
