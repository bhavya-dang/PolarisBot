const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  await message.delete();

  if (
    message.author.id !== "299157627584118787" &&
    message.author.id !== "414111663076147201"
  )
    return message.channel.send("**You can't use this command!**");

  const msg = args.join(" ");
  let noMessageEmbed = new Discord.RichEmbed()
    .setTitle("**ERROR** - Please specify a message!")
    .setThumbnail(message.guild.iconURL)
    .addField("**Usage:**", "`p@dmall <message>`", true);

  if (msg.length < 1) return message.channel.send(noMessageEmbed);
  message.guild.members.map(async (user) => {
    if (user.bot) return undefined;
    let embed = new Discord.RichEmbed()
      .setTitle("Polaris Tournaments Announcement")
      .setThumbnail(message.guild.iconURL)
      .setColor("00ffc3")
      .setDescription(msg)
      .setTimestamp();
    await user.send(embed);
  });
};

module.exports.help = {
  name: "dmall",
};
