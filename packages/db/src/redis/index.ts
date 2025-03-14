import { Redis } from "ioredis";
import DbUtils from "../utils/dbUtils";

const initializeValkey = () => {
  const redisUrl = DbUtils.getRedisUrl();
  if (!redisUrl) {
    throw new Error(`Redis URL is not set for ${DbUtils.getCurrentEnv()}`);
  }
  const valkey = new Redis(redisUrl);

  valkey.on("error", (err) => {
    console.error("Redis error", err);
  });

  valkey.on("ready", () => {
    console.log("✅ Redis connected successfully.");
  });

  return valkey;
};

export { initializeValkey };

export default { initializeValkey };
