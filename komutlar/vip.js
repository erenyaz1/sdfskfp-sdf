const Discord = require("discord.js");
const db = require("quick.db");
exports.run = (client, message, args) => {
  const vip = message.guild.roles.find(r => r.id === "756548988613820551"); //buraya erkek rolünüzün id'sini koyun.
  const log = message.guild.channels.find(c => c.id === "764564482931949639"); //buraya kayıt log id koyun
  const dogrulandi = client.emojis.find(emoji => emoji.name === "tik"); // örn (emoji => emoji.name === "siyah");
  if (
    !message.member.roles.array().filter(r => r.id === "7565478128708485227") &&
    !message.member.hasPermission("ADMINISTRATOR")[0]
  ) {
    //buraya kayıt sorumlusu rolünün id'sini giriniz. SUNUCU AYARLARINDAN kopyalayın.
    return message.channel.send(
      " Bu Komutu Kullanmak için** <@&756547811323019316> Rolüne Sahip Olman Lazım"
    );
    return message.channel.send("Bir İsim Veya ID Girmelisin .");
  } else {
    let member =
      message.mentions.users.first() || client.users.get(args.join(" "));
    if (!member) return message.channel.send("Bir kullanıcı girmelisin.");
    const c = message.guild.member(member);
    c.addRole(vip);

    const embed = new Discord.RichEmbed()
      .setDescription(
        `**<@${c.user.id}>** adlı kişiye **<@&${vip.id}>** rolü verildi. !`
      )
      .setColor("0x42fcd7");
    log.send(embed);
    message.react(dogrulandi);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["vip"],
  permLevel: 0
};
exports.help = {
  name: "vip",
  description: "vip",
  usage: "vip"
};
