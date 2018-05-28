const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'slm') {
    msg.reply('slm!');
  }
});


client.login('NDUwNjc0OTU0OTQyNTQ1OTIx.De2rWQ.VRSMEmaTZlt6g9JPDvondRe1fnU');
