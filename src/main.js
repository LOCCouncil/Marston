const client = require('./client');

client.on('ready', () => {
  console.log(`${client.user.tag} is ready.`);
});


