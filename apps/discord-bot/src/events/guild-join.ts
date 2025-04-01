import type { Guild } from "discord.js";
import { ServerDal } from "@taskcord/database";

export const handleGuildCreate = async (guild: Guild) => {
  try {
    await ServerDal.createServer({
      serverId: guild.id,
      ownerId: guild.ownerId,
      serverLogo: guild.iconURL() || guild.icon,
      serverName: guild.name,
      isBotInServer: true,
    });
  } catch (error) {
    console.error(`❌ Failed to add server ${guild.name} to database:`, error);
  }
};
