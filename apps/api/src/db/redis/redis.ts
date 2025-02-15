import { Redis } from "ioredis";
import GlobalUtils from "@/utils/golabalUtils";

const initializeValkey = () => {
    const redisUrl = GlobalUtils.getRedisUrl();
    if (!redisUrl) {
        throw new Error(
            `Redis URL is not set for ${GlobalUtils.getCurrentEnv()}`
        );
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

const globalCacheDb = initializeValkey();

export default globalCacheDb;
