const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  const emoji = client.emojis.find(emoji => emoji.name === "krmz"); //TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
  const emoji1 = client.emojis.find(emoji => emoji.name === "kitap"); //TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
  const emoji2 = client.emojis.find(emoji => emoji.name === "kralice"); //TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
  const send = client.emojis.find(emoji => emoji.name === "tik");
  message.react("756514524453929061");
  if (
    !message.member.roles.has("758083700050231377") &&
    !message.member.hasPermission("ADMINISTRATOR")
  )
    return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .addField(
          `${emoji}  Bilginize`,
          `${emoji1}  Bu komutu kullanmak için gerekli yetkiye sahip değilsin!`
        )
        .setColor("2e0101")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
    );
  let rochelle1 =
    message.mentions.users.first() ||
    client.users.get(args.join(" ")) ||
    message.guild.members.find(c => c.id === args[0]);
  if (!rochelle1)
    return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .addField(
          `${emoji}  Bilgi`,
          `${emoji1}    Bir Kullanıcı Etiketlemeli ve ya ID Girmelisin!`
        )
        .setColor("2e0101")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
    );
  let user = message.mentions.users.first();
  let rochelle = message.guild.member(rochelle1);
  let isim = args[1];
  if (!isim)
    return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .addField(`${emoji}  Bilgi`, `${emoji1} Geçerli bir İsim Yazmalısın!`)
        .setColor("2e0101")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
    );
  let yas = args[2];
  if (!yas)
    return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .addField(`${emoji}  Bilgi`, `${emoji1} Geçerli bir Yaş Yazmalısın!`)
        .setColor("2e0101")
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
    );

  rochelle.setNickname(`ꏬ ${isim} | '${yas}`);

  rochelle.addRole("763037369796001803"); // kadın 1
  rochelle.addRole("763037370999373864");
  rochelle.addRole("763037373445046292");

  rochelle.removeRole("763037374178787359"); // erkek 1
  rochelle.removeRole("763037375026036767"); // erkek 1
  rochelle.removeRole("763037375928336395"); // erkek 1

  rochelle.removeRole("763037376716210189"); // kayıtsız 1
  rochelle.removeRole("763037359649325057"); // cezalı 1 717777340708552807 717743735705960448

  message.react("tik");
  db.add(`kadın.${message.author.id}`, 1);
  const kanal = message.guild.channels.find(c => c.id == "763037473310900245");
  const embed1 = new Discord.RichEmbed()
    .setDescription(
      `${emoji2}  ${rochelle.user}  ${send} **Aramıza Hoş Geldin , Seninle Beraber \`${rochelle.guild.memberCount}\` Üyeye Ulaştık**`
    )
    .setColor("#B0E0E6")
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp();
  kanal.send(embed1).then(m => m.delete(10000));
  let embed = new Discord.RichEmbed()
    .setColor("#E0FFFF")
    .setTitle("ꏬ Aresta", message.author.avatarURL)
    .setDescription(
      `**${emoji2} ${rochelle.user} Adlı Üye <@&763037369796001803> Rolüyle Kayıt Oldu.** `
    )
    .setFooter("Kalite Tesadüf Değildir")
    .setTimestamp();
  return message.channel.send(embed).then(m => m.delete(6000));
};
exports.conf = {
  //TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
  enabled: true,
  guildOnly: true,
  aliases: ["kız", "k", "gacı"],
  kategori: "Yetkili Komutları",
  permLevel: 0
};
exports.help = {
  name: "kadın",
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: "kadın isim yaş"
};
//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
