/* eslint-disable no-bitwise */
import { UserDal, type DbUser } from "@taskcord/database";
import type { DiscordServerListResponse } from "@/types/discord-auth";
import type AuthService from "../auth/auth.service";

export default class UserService {
  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  public async me(userId: string): Promise<DbUser | null> {
    const user = await UserDal.getUserByDiscordId(userId);
    return user;
  }

  public async getUserDiscordServerList(
    accessToken: string
  ): Promise<DiscordServerListResponse | null> {
    const baseUrl = "https://discord.com/api/v10/users/@me/guilds";
    let currentToken = accessToken;

    // First try with current access token
    let discordServerListResponse = await fetch(baseUrl, {
      headers: {
        Authorization: `Bearer ${currentToken}`,
      },
    });

    // If unauthorized (401), renew the token and try again
    if (discordServerListResponse.status === 401) {
      const tokenResponse =
        await this.authService.renewDiscordTokensByRefreshToken(accessToken);

      currentToken = tokenResponse.access_token;

      discordServerListResponse = await fetch(baseUrl, {
        headers: {
          Authorization: `Bearer ${currentToken}`,
        },
      });
    }

    const discordServerList: DiscordServerListResponse =
      await discordServerListResponse.json();

    // return only the servers that the user is owner or has admin permissions
    const filteredServers = discordServerList.filter((server) => {
      const adminPermission = BigInt("8");
      const hasAdminPermission =
        (BigInt(server.permissions) & BigInt(adminPermission)) ===
        BigInt(adminPermission);
      return server.owner || hasAdminPermission;
    });

    return filteredServers;
  }
}
