import type { FastifyInstance, FastifyPluginOptions } from "fastify";
import { fastifyPlugin } from "fastify-plugin";
import utility from "./utility";
import auth from "./auth";
import userRoutes from "./user";
import project from "./project";

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
        getOptionsWithPrefix(options, "/stable/utility")
      ),
      fastify.register(auth, getOptionsWithPrefix(options, "/edge/auth")),
      fastify.register(
        userRoutes,
        getOptionsWithPrefix(options, "/edge/users")
      ),
      fastify.register(project, getOptionsWithPrefix(options, "/edge/project")),
    ]);
  }
);
