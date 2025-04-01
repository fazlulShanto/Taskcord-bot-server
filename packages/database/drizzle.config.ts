import { defineConfig } from "drizzle-kit";
import { getPostgresUrl } from "./src/utils/env";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/models/*",
  dialect: "postgresql",
  dbCredentials: {
    // url: getPostgresUrl() as string,
    url: "postgresql://admin:admin@localhost:5432/task-waku",
  },
});
