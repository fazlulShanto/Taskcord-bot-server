import type { FastifyReply, FastifyRequest } from "fastify";
import GlobalUtils from "@/utils/golabalUtils";
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
        const { code } = request.query as {
            code: string;
            state: string;
        };
        // TODO: store state in redis and varify here
        const tokenResponse =
            await this.authService.exchangeCodeForAccessToken(code);

        const userInfoFromDiscord =
            await this.authService.getUserInfoFromDiscord(
                tokenResponse.access_token
            );

        const result = await this.authService.handleDiscordLogin(
            userInfoFromDiscord,
            tokenResponse.refresh_token
        );

        const userInfo = {
            discordId: result.discordId,
            fullName: result.fullName,
            avatar: result.avatar,
            email: result.email,
            id: result.id,
        };
        const jwtToken = GlobalUtils.signJwtToken(userInfo);
        // update jwt to redis
        await request.server.cacheDb.setex(
            `auth:jwt:${result.discordId}`,
            7 * 24 * 60 * 60,
            jwtToken
        );
        // eslint-disable-next-line @typescript-eslint/no-floating-promises -- bad typing in the package
        reply.setCookie("token", jwtToken, {
            path: "/",
            httpOnly: true,
            secure: false, // Set to false for HTTP in development
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
        });

        return reply.redirect("http://localhost:5173/playground");
    }
}
