const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const embed = new Discord.RichEmbed()
    .setAuthor("Command List", bot.user.displayAvatarURL)
    .setColor("#FCF3B0")
    .setFooter(`Requested by ${message.author.tag}`, message.guild.iconURL)
    .setTimestamp()
    .addField("Total Commands: ", "3")
    .addField("p@help", "Gives you my command list.")
    .addField("p@dmall", "Sends a DM to every member of the server. **Only accessed by Anony & Sync.**")
    .addField("p@roledm", "Sends a DM to every member of mentioned role of the server. **Only accessed by Anony & Sync.**")
    .addField("p@eval", "Evaluate JavaScript code. **Only accessed by Anony & Sync.**")
    .addField("p@ping", "Give my ping.")
    .addField("p@stats", "Give bot stats")
    message.channel.send(embed)
    
};

module.exports.help = {
  name: "help"
};
