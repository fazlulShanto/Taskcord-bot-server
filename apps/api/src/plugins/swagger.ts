import { default as fastifyPlugin } from "fastify-plugin";
import { default as fastifySwagger } from "@fastify/swagger";
import { default as fastifySwaggerUI } from "@fastify/swagger-ui";
import type { FastifyInstance } from "fastify";

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-swagger
 */
export default fastifyPlugin(
    async (fastify: FastifyInstance) => {
        await fastify.register(fastifySwagger, {
            mode: "dynamic",
            openapi: {
                info: {
                    title: "Taskcord API",
                    version: "1.0.0",
                },
            },
        });

        await fastify.register(fastifySwaggerUI, {
            routePrefix: "/api/docs",
            initOAuth: {},
            logLevel: "error",
            uiConfig: {
                docExpansion: "full",
                deepLinking: false,
            },
            staticCSP: true,
        });
    },
    {
        dependencies: ["env-config"],
        fastify: "5.x",
    }
);
