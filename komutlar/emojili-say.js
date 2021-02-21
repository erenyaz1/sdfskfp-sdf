const Discord = require("discord.js");
const { oneLine, stripIndents } = require("common-tags");
module.exports.run = async (client, message, args) => {
  let guild = message.guildID;
  const voiceChannels = message.guild.channels.filter(
    pink => pink.type === "voice"
  );
  let count = 0;
  for (const [id, voiceChannel] of voiceChannels)
    count += voiceChannel.members.size;
  var msg = message;
  var üyesayısı = msg.guild.members.size.toString().replace(/ /g, "    ");
  var üs = üyesayısı.match(/([0-9])/g);
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase();
  if (üs) {
    üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
      return {
        " ": "   ",

        "0": `<a:sfr:752603422938759270> `,

        "1": `<a:bir:752603423249137804>`,

        "2": `<a:iki:752603422985027739>  `,

        "3": `<a:uc:752603425375649812> `,

        "4": `<a:drt:752603423039553547>  `,

        "5": `<a:be:752603420711452772> `,

        "6": `<a:alt:752603422985027585> `,

        "7": `<a:yedi:752603425060945930> `,

        "8": `<a:sekiz:752603423739871302> `,

        "9": `<a:dokuz:752603423312052261> `
      }[d];
    });
  } /////////////////////////
  var sessayı = count.toString().replace(/ /g, "    ");
  var üs2 = sessayı.match(/([0-9])/g);
  sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase();
  if (üs2) {
    sessayı = sessayı.replace(/([0-9])/g, d => {
      return {
        " ": "   ",

        "0": `<a:sfr:752603422938759270> `,

        "1": `<a:bir:752603423249137804>`,

        "2": `<a:iki:752603422985027739>  `,

        "3": `<a:uc:752603425375649812> `,

        "4": `<a:drt:752603423039553547>  `,

        "5": `<a:be:752603420711452772> `,

        "6": `<a:alt:752603422985027585> `,

        "7": `<a:yedi:752603425060945930> `,

        "8": `<a:sekiz:752603423739871302> `,

        "9": `<a:dokuz:752603423312052261> `
      }[d];
    });
  }
  /////////////////////////////////////////
  var tagdakiler = 0;
  let tag = "PinkCode";
  message.guild.members.forEach(member => {
    if (member.user.username.includes(tag)) {
      tagdakiler = tagdakiler + 1;
    }
  });
  var tagdakilerr = tagdakiler.toString().replace(/ /g, "    ");
  var üs3 = tagdakilerr.match(/([0-9])/g);
  tagdakilerr = tagdakilerr.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase();
  if (üs3) {
    tagdakilerr = tagdakilerr.replace(/([0-9])/g, d => {
      return {
        " ": "   ",

        "0": `<a:sfr:752603422938759270> `,

        "1": `<a:bir:752603423249137804>`,

        "2": `<a:iki:752603422985027739>  `,

        "3": `<a:uc:752603425375649812> `,

        "4": `<a:drt:752603423039553547>  `,

        "5": `<a:be:752603420711452772> `,

        "6": `<a:alt:752603422985027585> `,

        "7": `<a:yedi:752603425060945930> `,

        "8": `<a:sekiz:752603423739871302> `,

        "9": `<a:dokuz:752603423312052261> `
      }[d];
    });
  }
  //////////////////////////////////////////
  var aktif = message.guild.members
    .filter(m => m.presence.status !== "offline")
    .size.toString()
    .replace(/ /g, "    ");
  var üs4 = aktif.match(/([0-9])/g);
  aktif = aktif.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase();
  if (üs4) {
    aktif = aktif.replace(/([0-9])/g, d => {
      return {
        " ": "   ",

        "0": `<a:sfr:752603422938759270> `,

        "1": `<a:bir:752603423249137804>`,

        "2": `<a:iki:752603422985027739>  `,

        "3": `<a:uc:752603425375649812> `,

        "4": `<a:drt:752603423039553547>  `,

        "5": `<a:be:752603420711452772> `,

        "6": `<a:alt:752603422985027585> `,

        "7": `<a:yedi:752603425060945930> `,

        "8": `<a:sekiz:752603423739871302> `,

        "9": `<a:dokuz:752603423312052261> `
      }[d];
    });
  }

  const emoji1 = client.emojis.get("697069423315386378");
  const embed1 = new Discord.RichEmbed()
    .setColor("000000")
    .setDescription(
      ` **Sunucumuzda Toplam ** ${üyesayısı} **Üye bulunmakta.** \n\n  **Sunucumuzda Toplam** ${aktif} **Çevrimiçi üye bulunmakta.** \n\n  **Ses kanallarında Toplam** ${sessayı} **Üye bulunmakta.**`
    )
    .setFooter(`Komutu Kullanan Kişi: ${message.author.username}`);

  const hata = new Discord.RichEmbed()
    .setColor("000000")
    .setAuthor(`Hata`)
    .setDescription(`**Bu komutu kullanamassınız!**`);

  msg.channel.send(embed1);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["total", "toplam", "say", "info"],
  permLevel: 0,
  kategori: `diğer`
};
exports.help = {
  name: "say",
  description: "PİNKCODE"
};
