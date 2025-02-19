import crypto from "node:crypto";
import GlobalUtils from "@/utils/golabalUtils";
import type {
    DiscordExchangeCodeResponse,
    DiscordUserInfoResponse,
} from "@/types/discord-auth";
import { UserDal } from "@/db/dal/user.dal";

function generateState() {
    return crypto.randomBytes(16).toString("hex");
}

export default class AuthService {
    private generateState() {
        return generateState();
    }

    public getDiscordAuthInitUrl() {
        const apiBaseUrl = GlobalUtils.getApiHostUrl();
        const state = this.generateState();
        const url = new URL("https://discord.com/oauth2/authorize");
        url.searchParams.set("client_id", process.env.DISCORD_AUTH_CLIENT_ID!);
        url.searchParams.set("response_type", "code");
        url.searchParams.set(
            "redirect_uri",
            apiBaseUrl + process.env.DISCORD_OAUTH_REDIRECT_URL!
        );
        url.searchParams.set("scope", `${process.env.DISCORD_OAUTH_SCOPES}`);
        url.searchParams.set("state", state);
        return url.toString();
    }

    public async exchangeCodeForAccessToken(
        code: string
    ): Promise<DiscordExchangeCodeResponse> {
        const API_ENDPOINT = `https://discord.com/api/v10/oauth2/token`;
        const CLIENT_ID = process.env.DISCORD_AUTH_CLIENT_ID!;
        const CLIENT_SECRET = process.env.DISCORD_AUTH_CLIENT_SECRET!;

        const basicAuth = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString(
            "base64"
        );
        const requestData = {
            grant_type: "authorization_code",
            code,
            redirect_uri: `http://localhost:4005/api/edge/auth/discord/oauth-callback`,
        };
        const response = await fetch(API_ENDPOINT, {
            method: "POST",
            body: new URLSearchParams(requestData).toString(),
            headers: {
                Authorization: `Basic ${basicAuth}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
        const data: DiscordExchangeCodeResponse = await response.json();
        return data;
    }

    public async getUserInfoFromDiscord(accessToken: string) {
        const API_ENDPOINT = `https://discord.com/api/v10/users/@me`;
        const response = await fetch(API_ENDPOINT, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.json() as Promise<DiscordUserInfoResponse>;
    }

    public async getUserByDiscordId(discordId: string) {
        const dbUser = await UserDal.getUserByDiscordId(discordId);
        return dbUser;
    }

    public async handleDiscordLogin(
        discordUser: DiscordUserInfoResponse,
        refreshToken: string
    ) {
        let existingUser = await UserDal.getUserByDiscordId(discordUser.id);

        if (!existingUser) {
            // create user
            existingUser = await UserDal.createUser({
                discordId: discordUser.id,
                avatar: discordUser.avatar,
                fullName: discordUser.username,
                discordRefreshToken: refreshToken,
                email: discordUser.email,
            });
        }
        if (!existingUser) {
            throw new Error("User not found and could not be created.");
        }
        return existingUser;
    }
}
