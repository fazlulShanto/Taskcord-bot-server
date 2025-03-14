import { Guild } from "discord.js";

// update redis cache with the guild id
export const handleGuildJoin = async (ev: Guild) => {
    console.log(ev.client.guilds.cache.size);
};

export default handleGuildJoin;
