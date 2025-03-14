import  {type Client, Events } from "discord.js";
import InteractionCreateHandler from "./interaction-create";



export const attachClientEventHandlers = (client: Client) => {
    // when the client is ready
    client.once(Events.ClientReady, () => {
        console.log(
          `✅ Logged in as ${process.env.NODE_ENV}:${client.user?.tag} ${client.guilds.cache.size} guilds!`
        );
      });
    
    // when an interaction is created
    client.on(Events.InteractionCreate, InteractionCreateHandler);
    // when bot joins a guild
    client.on(Events.GuildCreate, (ev)=>{
        console.log(ev.id)
    });
};


