import os from "node:os";
import globalCacheDb from "@/db/redis/redis";
import { checkConnection } from "@/db/postgres.db";

export default class UtilityService {
    public getApiUptime() {
        return {
            uptime: process.uptime(),
            message: "OK",
            date: new Date(),
        };
    }

    public getApiStatus() {
        return {
            status: "OK",
        };
    }

    public getServerHardwareInfo() {
        return {
            uptime: os.uptime(),
            platform: os.platform(),
            arch: os.arch(),
            hostname: os.hostname(),
            type: os.type(),
            release: os.release(),
            totalmem: os.totalmem(),
            freemem: os.freemem(),
            cpus: os.cpus(),
            networkInterfaces: os.networkInterfaces(),
            loadavg: os.loadavg(),
            homedir: os.homedir(),
            tmpdir: os.tmpdir(),
            userInfo: os.userInfo(),
            runtime: "Node.js",
            version: process.version,
        };
    }

    public async getServerStatus() {

        // Checking database / cache connections
        const [databaseStatus, cacheStatus] = await Promise.all([
            checkConnection()
                .then(connected => connected ? 'connected' : 'disconnected')
                .catch(() => 'disconnected'),
            globalCacheDb.ping()
                .then(response => response === 'PONG' ? 'connected' : 'disconnected') // "PONG" for Redis ping response
                .catch(() => 'disconnected')
        ]);

        return {
            environment: process.env.NODE_ENV || "local",
            database: databaseStatus,
            cache: cacheStatus,
            time: new Date().toISOString(),
            uptime: Math.floor(process.uptime()),
        };
    }
}
