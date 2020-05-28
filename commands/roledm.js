const Discord = require("discord.js");
const moment = require("moment");
module.exports.run = async (bot, message, args) => {
  //const roleArgs = args.slice(0, 1);
  await message.delete();
  let role = message.mentions.roles.first();
  const messageArgs = args.slice(1);

  let noRoleEmbed = new Discord.RichEmbed()
    .setTitle("**ERROR**")
    .setThumbnail(message.guild.iconURL)
    .setDescription("Please specify a valid role or check if it exists in the server or not!")
    .addField("**Usage:**", "`p@roledm <rolename> <message>`", true);
  if (!role || !message.guild.roles.has(role.id))
    return message.channel.send(noRoleEmbed).then((m) => m.delete(10000));

  let noMessageEmbed = new Discord.RichEmbed()
    .setTitle("**ERROR** - Please specify a message!")
    .setThumbnail(message.guild.iconURL)
    .addField("**Usage:**", "`p@roledm <rolename> <message>`", true);
  if (messageArgs.length < 1 || !messageArgs)
    return message.channel.send(noMessageEmbed).then((m) => m.delete(10000));

  if (
    message.author.id !== "299157627584118787" &&
    message.author.id !== "414111663076147201"
  )
    return message.channel.send("**You can't use this command!**!");

  if (!bot.hasPermission("ADMINISTRATOR")) {
    let errEmbed = new Discord.RichEmbed()
      .setTitle("**ERROR**")
      .setThumbnail(message.guild.iconURL)
      .setColor("00ffc3")
      .setDescription(
        "An error was found while executing this command. Please check if the Bot is not missing permissions and has a higher role than the user."
      )
      .setTimestamp(moment.utc().format());
    await message.channel.send(errEmbed).then((m) => m.delete(10000));
  }
  message.guild.members.map(async (user) => {
    if (user.roles.has(role.id) && !user.bot) {
      let embed = new Discord.RichEmbed()
        .setTitle("**Server Announcement**")
        .setThumbnail(message.guild.iconURL)
        .setColor("00ffc3")
        .setDescription(messageArgs.join(" "))
        .setTimestamp(moment.utc().format());
      await user.send(embed);
    } else return undefined;
  });
  let successEmbed = new Discord.RichEmbed()
    .setColor("00ffc3")
    .setFooter("Message has been delivered!")
    .setTimestamp(moment.utc().format());
  message.channel.send(successEmbed).then((m) => m.delete(10000));
};

module.exports.help = {
  name: "roledm",
};
