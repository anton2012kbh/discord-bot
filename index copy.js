import ollama from "Ollama"
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

client.on('messageCreate',async message => {
  if (message.author.bot) return;
  const args = message.content.trim().split(/\s+/); // Split by spaces
  const command = args.shift().toLowerCase(); // Extract the command and convert to lowercase
  if (message.content === '!ping') {
    message.reply('Pong!');
  }
  else if (command=="ollama"){
const response = await ollama.chat({
  model: "qwen3:1.7b",
  massages: [{role: "user", content: "what is 2+2"}]
})
console.log(response)
message.reply(response.message.content);}})
const response = await ollama.chat({
  model: "qwen3:1.7b",
  massages: [{role: "user", content: "what is 2+2"}]
})
console.log(response)
client.login(process.env.bot_token);