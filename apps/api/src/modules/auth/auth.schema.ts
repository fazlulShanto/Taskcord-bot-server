import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

export const DiscordAuthCallbackSchema = {
    request: {
        queryParams: z.object({
            code: z.string().nonempty(),
            state: z.string().min(5),
        }),
    },
    response: {
        200: z.object({
            access_token: z.string(),
            token_type: z.string(),
            expires_in: z.number(),
            refresh_token: z.string(),
            scope: z.string(),
        }),
    },
};

export const { schemas: authSchemas, $ref: authSchemaRef } = buildJsonSchemas(
    {
        ...DiscordAuthCallbackSchema.request,
        ...DiscordAuthCallbackSchema.response,
    } as const,
    { $id: "authSchema" }
);
