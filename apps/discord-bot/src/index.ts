/* eslint-disable @typescript-eslint/no-floating-promises -- Discord.js client methods return promises that don't need to be awaited */

import { Client, Events, GatewayIntentBits } from "discord.js";
import * as dotenv from "dotenv";
import { getCommandCollection } from "./config/command-handler";
import { registerCommands } from "./config/command-register";
import handleInteractionCreate from "./events/interaction-create";

dotenv.config();

const createAndStartBot = async () => {
    console.clear();
    const BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
    if (!BOT_TOKEN) {
        throw new Error("DISCORD_BOT_TOKEN is not set");
    }
    const client = new Client({
        intents: [GatewayIntentBits.Guilds],
    });

    client.commands = getCommandCollection();
    await registerCommands();

    client.once("ready", () => {
        console.log(`✅ Logged in as ${client.user?.tag}!`);
    });

    client.on(Events.InteractionCreate, handleInteractionCreate);

    client.login(BOT_TOKEN);
};

createAndStartBot();
