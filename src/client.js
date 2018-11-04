const Discord = require('discord.js');

const client = new Discord.Client({
  fetchAllMembers: true,
  disableEveryone: true
});


module.exports = client;

