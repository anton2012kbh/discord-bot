import ollama from 'ollama'
import "dotenv/config"
import fs from "fs"
import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.login(process.env.bot_token);

client.on('messageCreate',async message => {
  if (message.author.bot) return;
  if (message.content.toLowerCase().includes("ai")){
    const response = await ollama.chat({
      model: 'llama3.2:1b',
      messages: [{ role: 'user', content: message.content.substring("3") },
         {content: ` - Respond in 10-30 words MAX. 
        - If unsure, say "IDK".
        - Be blunt and concise.`, role:"system"},],
      options: {
        num_predict: 100,
      }
    })
    message.reply("ai "+response.message.content.replace("<|start_header_id|>assistant<|end_header_id|>",""))
  }})