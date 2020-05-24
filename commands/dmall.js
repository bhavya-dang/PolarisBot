const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  //const roleArgs = args.slice(0, 1);
  await message.delete();
  const messageArgs = args.join(" ");

  let noMessageEmbed = new Discord.RichEmbed()
    .setTitle("**ERROR** - Please specify a message!")
    .setThumbnail(message.guild.iconURL)
    .addField("**Usage:**", "`p@dmall <message>`", true);
  if (messageArgs.length < 1 || !messageArgs)
    return message.channel.send(noMessageEmbed).then((m) => m.delete(10000));

  let wrongId = new Discord.RichEmbed()
    .setTitle("**ERROR** - You are not authorized to use this command!")
    .setThumbnail(message.guild.iconURL);

  if (
    message.author.id !== "299157627584118787" &&
    message.author.id !== "414111663076147201"
  )
    return message.channel.send(wrongId);

  let members = message.guild.members.filter((mem) => !mem.user.bot);
  members.map(async (user) => {
    let embed = new Discord.RichEmbed()
      .setTitle("**Server Announcement**")
      .setThumbnail(message.guild.iconURL)
      .setColor("00ffc3")
      .setDescription(messageArgs)
      .setTimestamp();
    await user.send(embed);
  });
  let successEmbed = new Discord.RichEmbed()
    .setColor("00ffc3")
    .setFooter("Message has been delivered!");
  message.channel.send(successEmbed).then((m) => m.delete(10000));
};

module.exports.help = {
  name: "dmall",
};
