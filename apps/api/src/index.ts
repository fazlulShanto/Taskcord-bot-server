import * as dotenv from "dotenv";
import type { FastifyInstance } from "fastify";
import { TaskcordServer } from "./server";
import plugins from "./plugins";
import modules from "./modules";

dotenv.config();

const start = async (): Promise<void> => {
    const port = process.env.PORT || 5001;
    const buildStart = performance.now();
    const serverInstance = new TaskcordServer();

    const fastifyServer: FastifyInstance = serverInstance.getApp();

    try {
        // Register plugins
        await fastifyServer.register(plugins);

        // Register modules
        await fastifyServer.register(modules, { prefix: "/api" });

        await fastifyServer.listen({ port: Number(port), host: "0.0.0.0" });

        const buildEnd = performance.now();

        console.log(
            `✅ Server is ready to accept requests in ${(
                buildEnd - buildStart
            ).toFixed(2)} ms`
        );
    } catch (e) {
        console.error("Error occured while building fastify");
        console.error(e);
    }
};

// eslint-disable-next-line @typescript-eslint/no-floating-promises -- just start the server
start();
