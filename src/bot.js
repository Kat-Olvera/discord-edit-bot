require("dotenv").config();
const { Client } = require('discord.js');
const client = new Client();

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

 
 client.on('message', message => {
    if (message.author.bot) return;
    client.on('messageUpdate', (oldMessage, newMessage) => {
        if(oldMessage.content === newMessage){
            return;
        } else {
            message.channel.send(`YOO THIS DUDE JUST EDITED HIS MESSAGE LMAOOO 😂 😂 😂 😂`);
        }
     });  
  });