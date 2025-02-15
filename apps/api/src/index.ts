import * as dotenv from "dotenv";
import type { FastifyInstance } from "fastify";
import globalCacheDb from "@/db/redis/redis";
import { checkConnection } from "@/db/postgres.db";
import { TaskcordServer } from "./server";

dotenv.config();

export const start = async (): Promise<FastifyInstance> => {
    const port = process.env.PORT || 5001;
    const buildStart = performance.now();

    const serverInstance = new TaskcordServer();
    await serverInstance.initialize();
    const fastifyServer: FastifyInstance = serverInstance.getApp();

    try {
        // check if cache & postgres are connected
        await globalCacheDb.ping();

        await checkConnection();

        await fastifyServer.listen({ port: Number(port), host: "0.0.0.0" });

        const buildEnd = performance.now();

        console.log(
            `🚀 Server is ready to accept requests in ${(
                buildEnd - buildStart
            ).toFixed(2)} ms`
        );
        return fastifyServer;
    } catch (e) {
        console.error("🛑 Error occured while building fastify");
        throw e;
    }
};

// eslint-disable-next-line @typescript-eslint/no-floating-promises -- this is the entry point of the server
start();
