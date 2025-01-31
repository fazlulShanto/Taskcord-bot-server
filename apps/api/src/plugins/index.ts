import type { FastifyInstance } from "fastify";
import { default as fastifyPlugin } from "fastify-plugin";
import config from "./envConfig";
import sensible from "./sensible";
// import prisma from "./prisma";
// import redis from "./redis";
import swagger from "./swagger";
// import cookie from "./cookie";
// import cors from "./cors";
// import jwt from "./jwt";

export default fastifyPlugin(async (fastify: FastifyInstance) => {
    await Promise.all([fastify.register(config), fastify.register(sensible)]);

    await Promise.all([
        // fastify.register(prisma),
        // fastify.register(redis),
        // fastify.register(cookie),
        // fastify.register(cors),
        fastify.config.NODE_ENV === "local"
            ? /* istanbul ignore next */ fastify.register(swagger)
            : /* istanbul ignore next */ null,
    ]);

    // await Promise.all([fastify.register(jwt)]);
});
