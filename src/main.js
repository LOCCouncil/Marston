const Discord = require('discord.js');

const client = new Discord.Client({
  fetchAllMembers: true,
  disableEveryone: true
});

client.on('ready', () => {
  console.log(`${client.user.tag} is ready.`);
});

