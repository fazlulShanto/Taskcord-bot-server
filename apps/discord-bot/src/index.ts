import { Client, GatewayIntentBits } from 'discord.js';
import * as dotenv from 'dotenv';

dotenv.config({ path: './src/.env' });

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 

    ] 
});

client.once('ready', () => {
    console.log(`✅ Logged in as ${client.user?.tag}!`);
});

client.on('messageCreate', message => {
    if (message.content === '!ping') {
        message.channel.send('Pong!');
    }
});

client.login(process.env.DISCORD_BOT_TOKEN);


