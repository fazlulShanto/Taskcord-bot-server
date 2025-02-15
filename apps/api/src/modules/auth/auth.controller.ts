import type { FastifyReply, FastifyRequest } from "fastify";
import type AuthService from "./auth.service";

export default class AuthController {
    private authService: AuthService;

    constructor(authService: AuthService) {
        this.authService = authService;
    }

    public async initializeDiscordAuthFlowHandler(
        request: FastifyRequest,
        reply: FastifyReply
    ) {
        const url = this.authService.getDiscordAuthInitUrl();
        return reply.redirect(url);
    }

    public async handleDiscordOAuthCallback(
        request: FastifyRequest,
        reply: FastifyReply
    ) {
        const { code, state } = request.query as {
            code: string;
            state: string;
        };

        if (!code || !state) {
            return reply.status(400).send({ error: "Missing code or state" });
        }

        const tokenResponse =
            await this.authService.exchangeCodeForAccessToken(code);

        console.log("🔥", tokenResponse);

        return reply.redirect("http://localhost:5173/playground");
    }
}

/*
    {
    token_type: 'Bearer',
    access_token: 'dywz2DpKnuwb4mHPSsCBVCClrfvIkU',
    expires_in: 604800,
    refresh_token: 'xCSBY9FBxARRcKj73ejbqzQw84mav6',
    scope: 'email identify guilds guilds.members.read'
    }
*/
