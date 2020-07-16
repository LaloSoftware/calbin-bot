import { Client, Message } from 'discord.js';
import { config } from "dotenv";
import { prefix } from './config.json'

config();

const bot: Client = new Client();

bot.on("ready", () => {
    console.log("Conected as " + bot.user?.tag);

    bot.user?.setActivity("with your feelings", {type: "PLAYING"})
})

bot.on("message", (message: Message)=>{
    console.log(message.content);
    if(message.content.startsWith(`${prefix} ping`)){
        //message.channel.send("🚀 pong")
        message.reply(" Pong :v")
    }
    if(message.content.startsWith(`${prefix} menciona`)){
        //message.channel.send("🚀 pong")
        const member = message.mentions.members?.first();
        message.reply(` Te estamos habando @${member?.user.username}`)
    }
    if(message.content.startsWith(`${prefix} makeYours`)){
        if(message.member?.hasPermission("ADMINISTRATOR")){
            const member = message.mentions.members?.first();
            return message.channel.send(`${member?.user.username} will be my whore today`)
        }
        return message.reply(`No, You will be my whore`)
    }
})

bot.login(process.env.DISCORD_TOKEN)