import type { FastifyInstance, FastifyPluginOptions } from "fastify";
import { fastifyPlugin } from "fastify-plugin";
import utility from "./utility";

const getOptionsWithPrefix = (
    options: FastifyPluginOptions,
    prefix: string
) => {
    return {
        ...options,
        prefix: options.prefix + prefix,
    };
};

export default fastifyPlugin(
    async (fastify: FastifyInstance, options: FastifyPluginOptions) => {
        await Promise.all([
            fastify.register(
                utility,
                getOptionsWithPrefix(options, "/utility")
            ),
        ]);
    }
);
