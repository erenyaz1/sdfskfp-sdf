const Discord = require('discord.js');
exports.run = function(client, message, args) {
const emoji = client.emojis.find("name", "tik");  
  if (!message.member.roles.has('758083689857941616') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`<a:Arestan_unlem:752207543492673656> **Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.**`);if(!args[0]) return message.channel.send("**Lütfen Silinicek Mesaj Miktarını Yazın.**");
message.channel.bulkDelete(args[0]).then(() => {
let emojilan = message.guild.emojis.find(emoji => emoji.name === "tik");
  message.react(emojilan);

})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['temizle'],
  permLevel: 2
};

exports.help = {
  name: 'sil',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'sil <silinicek mesaj sayısı>'
};
