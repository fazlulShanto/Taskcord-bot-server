import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const getApiStatusResponseSchema = z.object({
    status: z.string(),
});

const getServerHardwareInfoResponseSchema = z.object({
    uptime: z.number(),
    platform: z.string(),
    arch: z.string(),
    hostname: z.string(),
    type: z.string(),
    release: z.string(),
    totalmem: z.number(),
    freemem: z.number(),
    runtime: z.string(),
    version: z.string(),
    cpus: z.array(
        z.object({
            model: z.string(),
            speed: z.number(),
            times: z.object({
                user: z.number(),
                nice: z.number(),
                sys: z.number(),
                idle: z.number(),
                irq: z.number(),
            }),
        })
    ),
});

const getServerStatusResponseSchema = z.object({
    environment: z.string(),
    database: z.string(),
    cache: z.string(),
    time: z.string(),
    uptime: z.number()
});

const getApiUptimeResponseSchema = z.object({
    uptime: z.number(),
    message: z.string(),
    date: z.string(),
});

export type GetApiStatusResponse = z.infer<typeof getApiStatusResponseSchema>;

export type GetServerHardwareInfoResponse = z.infer<
    typeof getServerHardwareInfoResponseSchema
>;

export type GetServerStatusResponse = z.infer<typeof getServerStatusResponseSchema>;

export const { schemas: utilitySchemas, $ref } = buildJsonSchemas(
    {
        getApiStatusResponseSchema,
        getServerHardwareInfoResponseSchema,
        getApiUptimeResponseSchema,
        getServerStatusResponseSchema,
    } as const,
    {
        $id: "utilitySchema",
    }
);
