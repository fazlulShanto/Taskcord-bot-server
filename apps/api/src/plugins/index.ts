import type { FastifyInstance } from "fastify";
import { default as fastifyPlugin } from "fastify-plugin";
import config from "./envConfig";
import sensible from "./sensible";
// import prisma from "./prisma";
// import redis from "./redis";
import swagger from "./swagger";
import cookies from "./cookies";
import jwt from "./jwt";
// import cors from "./cors";
// import jwt from "./jwt";

export default fastifyPlugin(async (fastify: FastifyInstance) => {
    await Promise.all([fastify.register(config), fastify.register(sensible)]);

    await Promise.all([
        // fastify.register(prisma),
        // fastify.register(redis),
        fastify.register(cookies),
        fastify.register(jwt),
        // fastify.register(cors),
        ["local", "development"].includes(fastify.config.NODE_ENV)
            ? fastify.register(swagger)
            : null,
    ]);

    // await Promise.all([fastify.register(jwt)]);
});
