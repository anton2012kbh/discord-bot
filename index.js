require('dotenv').config();
const fs = require('fs');
const { Client, GatewayIntentBits } = require('discord.js');

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

client.on('messageCreate', message => {
  if (message.author.bot) return;
  const args = message.content.trim().split(/\s+/); // Split by spaces
  const command = args.shift().toLowerCase(); // Extract the command and convert to lowercase
  if (message.content === '!ping') {
    message.reply('Pong!');
  }
  else if (command=="jokes"){
    const fs = require('fs');

// Read the file and split its content into an array of lines
fs.readFile('jokes.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const lines = data.split('\r\n'); // Split the file content by newlines
  const jokes=[]
  for (let i = 0; i < lines.length; i++){
    const line = lines[i]
        if(line!="") jokes.push(line)
  }
  console.log(jokes[Math.random() * jokes.length]); // Output the array of lines

});
  }
  else if (command=="sum"){
    const tal1=args[0]
    const tal2=args[1]
        message.reply(parseInt(tal1)+parseInt(tal2)+"")
    
  }
  else if (message.content.toLowerCase().includes("anton")) {
    message.reply('anton');
  }
});

client.login(process.env.bot_token);