//const Discord = require('discord.js');

const { client } = require('klasa');
const config = require('../config.json');

new client({
  clientOptions: {
    fetchAllMembers: true
  }
  ,
  prefix: '+',
  cmdEditing: true,
  typing: true,
  ownerID: '446067825673633794',
  readyMessage: (client) => `${client.user.tag} is ready to serve ${client.users.size}.`
}).login(config.token);

module.exports = client;

