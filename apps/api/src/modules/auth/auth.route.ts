import type { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import AuthController from "./auth.controller";
import AuthService from "./auth.service";

export default function AuthRoute(fastify: FastifyInstance) {
    const authController = new AuthController(new AuthService());

    fastify.get(
        "/discord/init",
        {
            schema: {
                tags: ["Auth"],
                description: "Initialize the Discord auth flow",
            },
        },
        (request: FastifyRequest, reply: FastifyReply) =>
            authController.initializeDiscordAuthFlowHandler(request, reply)
    );
    fastify.get(
        "/discord/oauth-callback",
        {
            schema: {
                tags: ["Auth"],
                description: "Callback for the Discord auth flow",
            },
        },
        (request: FastifyRequest, reply: FastifyReply) =>
            authController.handleDiscordOAuthCallback(request, reply)
    );
}
