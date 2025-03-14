/* eslint-disable @typescript-eslint/no-extraneous-class -- This is a utility class */

import dotenv from "dotenv";

dotenv.config();

class DbUtils {
  private static currentEnv = process.env.NODE_ENV || "local";

  public static getRedisUrl(): string | undefined {
    if (this.currentEnv === "prod") {
      return process.env.REDIS_URL_PROD;
    }
    return process.env.REDIS_URL_LOCAL;
  }

  public static getPostgresUrl(): string | undefined {
    if (this.currentEnv === "prod") {
      return process.env.PG_DB_URL_PROD;
    }
    return process.env.PG_DB_URL_LOCAL;
  }

  public static getCurrentEnv(): string {
    return this.currentEnv || "local";
  }
}

export default DbUtils;
