import { describe, it } from "node:test";
import { db, checkConnection } from "../src/postgres.db";

describe("Postgres", () => {
  it("should connect to the database", async () => {
    await checkConnection();
  });
});
