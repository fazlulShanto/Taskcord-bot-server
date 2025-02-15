import type { FastifyInstance, FastifyServerOptions } from "fastify";
import Fastify from "fastify";
import modules from "./modules";
import plugins from "./plugins";

export class TaskcordServer {
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

export default TaskcordServer;
