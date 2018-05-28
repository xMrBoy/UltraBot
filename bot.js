const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ':'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

const Eris = require("eris");
var x5bzteam = new Eris("Mjk0NTQ0MzI4OTQzMjA2NDIw.DeoN8w.g-1iZsY_9tWo3D93vMW88qPnZbE");
x5bzteam.on("ready", () => {
    console.log("Yo! Changer [ON]");
    onstart();
});
x5bz = "369324885677309952";
nick = "MrBoy";
function onstart(){
    var v1 = nick.split('');
    var counter;
    var i=0;
var x5bz2 = ' ';
  var x5bz3 =   setInterval(function(){
     
     if (i == v1.length){
     clearInterval(x5bz3);
     onstart()
      return;
     }
     var v2 = v1[i];
    x5bz2 += v2;
    x5bzteam.editNickname(x5bz, x5bz2);
 
        i++;
   
     }, 1000);
}
x5bzteam.connect();

client.login('NDUwNjc0OTU0OTQyNTQ1OTIx.De2rWQ.VRSMEmaTZlt6g9JPDvondRe1fnU');
