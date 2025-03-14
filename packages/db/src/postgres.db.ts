import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import DbUtils from "./utils/dbUtils";

const pool = new Pool({
  connectionString: DbUtils.getPostgresUrl(),
  max: 20, // maximum number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
  connectionTimeoutMillis: 2000, // how long to wait for a connection
});

const db = drizzle(pool);

const checkConnection = async () => {
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

pool.on("error", (err) => {
  console.error("❌ Unexpected error on idle client", err);
  process.exit(-1);
});

pool.once("connect", () => {
  console.log(`✅ Connected to postgres: ${DbUtils.getCurrentEnv()}`);
});

export { db, checkConnection };
