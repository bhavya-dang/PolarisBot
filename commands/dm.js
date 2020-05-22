const Discord = require("discord.js");
module.exports.run = async(bot, message, args) => {
    message.guild.members.forEach(user => {
            let embed = Discord.RichEmbed()
            .setTitle("POLARIS", message.guild.iconURL)
            .setColor("00ffc3")
            .setDescription(args[1]);
            user.send(embed);
    });
};

module.exports.help = {
    name: "dm"
}
