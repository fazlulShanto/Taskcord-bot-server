/* eslint-disable @typescript-eslint/no-extraneous-class -- This is a utility class */

import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

class GlobalUtils {
    private static currentEnv = process.env.NODE_ENV || "local";

    public static getApiHostUrl(): string {
        if (this.currentEnv === "prod") {
            return process.env.REMOTE_BACKEND_HOST_URL;
        }
        return process.env.LOCAL_BACKEND_HOST_URL;
    }

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

    public static getDiscordOAuthRedirectUrl(): string {
        const apiHostUrl = this.getApiHostUrl();
        return apiHostUrl + process.env.DISCORD_OAUTH_REDIRECT_URL!;
    }

    public static verifyJwtToken(token: string) {
        const secret = process.env.JWT_SECRET!;
        if (!secret) {
            throw new Error("JWT_SECRET is not set");
        }
        return jwt.verify(token, secret);
    }

    public static signJwtToken(payload: Record<string, unknown>) {
        const secret = process.env.JWT_SECRET!;
        if (!secret) {
            throw new Error("JWT_SECRET is not set");
        }
        const maxAge = process.env.JWT_MAX_AGE! || "7d";
        const token = jwt.sign(payload, secret, {
            expiresIn: maxAge as unknown as number,
        });

        return token;
    }

    public static getCurrentEnv(): string {
        return this.currentEnv || "local";
    }
}

export default GlobalUtils;
