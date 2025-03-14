import type { FastifyInstance, FastifyServerOptions } from "fastify";
import Fastify from "fastify";
import * as dotenv from "dotenv";
import type { Redis } from "ioredis";
import { initializeValkey } from "@repo/db";
import modules from "./modules";
import plugins from "./plugins";

dotenv.config();

declare module "fastify" {
  interface FastifyRequest {
    cacheDb: Redis;
  }
  interface FastifyInstance {
    cacheDb: Redis;
  }
}

export default class TaskcordServer {
  private app: FastifyInstance | null = null;
  private serverOptions: FastifyServerOptions;

  constructor() {
    this.serverOptions = {
      logger: {
        level: "info",
        transport: {
          target: "pino-pretty",
          options: {
            translateTime: "HH:MM:ss Z",
            ignore: "pid,hostname",
            singleLine: true,
          },
        },
      },
    };
  }

  public async initialize(): Promise<void> {
    this.app = Fastify(this.serverOptions) as FastifyInstance;
    this.app.decorate("cacheDb", globalCacheDb);

    await this.app.register(plugins);
    await this.app.register(modules, { prefix: "/api" });
  }

  public getApp(): FastifyInstance {
    if (!this.app) {
      throw new Error("Server not initialized. Call initialize() first.");
    }
    return this.app;
  }
}

export const startServer = async (): Promise<FastifyInstance> => {
  const globalCacheDb = initializeValkey();
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
