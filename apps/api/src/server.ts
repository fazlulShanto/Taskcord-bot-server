import type { FastifyInstance, FastifyServerOptions } from "fastify";
import Fastify from "fastify";

export class TaskcordServer {
    private app: FastifyInstance;
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
        this.app = Fastify(this.serverOptions) as FastifyInstance;
    }

    public getApp(): FastifyInstance {
        return this.app;
    }
}

export default TaskcordServer;
