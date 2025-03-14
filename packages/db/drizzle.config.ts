// import GlobalUtils from "@/utils/golabalUtils";
import "dotenv/config";
import { defineConfig } from "drizzle-kit";

const getPostgresUrl = (): string | undefined => {
  if (process.env.NODE_ENV === "prod") {
    return process.env.PG_DB_URL_PROD;
  }
  return process.env.PG_DB_URL_LOCAL;
};

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/models/*",
  dialect: "postgresql",
  dbCredentials: {
    url: getPostgresUrl()!,
  },
});
